#!/bin/bash
###############################################################################
#
# Alist Manager Script
#
# Version: 1.0.0
# Last Updated: 2024-12-24
#
# Description: 
#   A management script for Alist (https://alist.nn.ci)
#   Provides installation, update, uninstallation and management functions
#
# Requirements:
#   - Linux with systemd
#   - Root privileges for installation
#   - curl, tar
#   - x86_64 or arm64 architecture
#
# Author: Troray
# Repository: https://github.com/Troray/docs
# License: MIT
#
###############################################################################

# Error handling function
handle_error() {
    local exit_code=$1
    local error_msg=$2
    echo -e "${RED_COLOR}Error: ${error_msg}${RES}"
    exit ${exit_code}
}

# Check for curl command
if ! command -v curl >/dev/null 2>&1; then
    handle_error 1 "curl command not found, please install it first"
fi

# Configuration
#######################
# GitHub settings
GH_PROXY=''  # Can be modified if proxy is needed
GH_DOWNLOAD_URL="${GH_PROXY}https://github.com/alist-org/alist/releases/latest/download"
#######################

# Color configuration
RED_COLOR='\e[1;31m'
GREEN_COLOR='\e[1;32m'
YELLOW_COLOR='\e[1;33m'
RES='\e[0m'

# Function to get installed Alist path
GET_INSTALLED_PATH() {
    # Get working directory from service file
    if [ -f "/etc/systemd/system/alist.service" ]; then
        installed_path=$(grep "WorkingDirectory=" /etc/systemd/system/alist.service | cut -d'=' -f2)
        if [ -f "$installed_path/alist" ]; then
            echo "$installed_path"
            return 0
        fi
    fi
    
    # Return default path if not found
    echo "/opt/alist"
}

# Set installation path
if [ ! -n "$2" ]; then
    INSTALL_PATH='/opt/alist'
else
    INSTALL_PATH=${2%/}
    if ! [[ $INSTALL_PATH == */alist ]]; then
        INSTALL_PATH="$INSTALL_PATH/alist"
    fi
    
    # Create parent directory if it doesn't exist
    parent_dir=$(dirname "$INSTALL_PATH")
    if [ ! -d "$parent_dir" ]; then
        mkdir -p "$parent_dir" || {
            echo -e "${RED_COLOR}Error: Cannot create directory $parent_dir${RES}"
            exit 1
        }
    fi
    
    # Check write permission after directory creation
    if ! [ -w "$parent_dir" ]; then
        echo -e "${RED_COLOR}Error: No write permission for directory $parent_dir${RES}"
        exit 1
    fi
fi

# Use installed path for update or uninstall operations
if [ "$1" = "update" ] || [ "$1" = "uninstall" ]; then
    INSTALL_PATH=$(GET_INSTALLED_PATH)
fi

clear

# Get platform architecture
if command -v arch >/dev/null 2>&1; then
  platform=$(arch)
else
  platform=$(uname -m)
fi

ARCH="UNKNOWN"

if [ "$platform" = "x86_64" ]; then
  ARCH=amd64
elif [ "$platform" = "aarch64" ]; then
  ARCH=arm64
fi

# Check permissions and environment
if [ "$(id -u)" != "0" ]; then
  if [ "$1" = "install" ] || [ "$1" = "update" ] || [ "$1" = "uninstall" ]; then
    echo -e "\r\n${RED_COLOR}Error: Please run with root privileges!${RES}\r\n"
    echo -e "Tip: Use ${GREEN_COLOR}sudo $0 $1${RES} to retry\r\n"
    exit 1
  fi
elif [ "$ARCH" == "UNKNOWN" ]; then
  echo -e "\r\n${RED_COLOR}Error${RES}: Installation only supports x86_64 and arm64 platforms.\r\n"
  exit 1
elif ! command -v systemctl >/dev/null 2>&1; then
  echo -e "\r\n${RED_COLOR}Error${RES}: Unable to determine your Linux distribution.\r\nManual installation recommended.\r\n"
  exit 1
fi

CHECK() {
  # Check if target directory exists, create if not
  if [ ! -d "$(dirname "$INSTALL_PATH")" ]; then
    echo -e "${GREEN_COLOR}Directory does not exist, creating...${RES}"
    mkdir -p "$(dirname "$INSTALL_PATH")" || {
      echo -e "${RED_COLOR}Error: Cannot create directory $(dirname "$INSTALL_PATH")${RES}"
      exit 1
    }
  fi

  # Check if already installed
  if [ -f "$INSTALL_PATH/alist" ]; then
    echo "Already installed in this location. Please choose another location or use update command"
    exit 0
  fi

  # Create or clean installation directory
  if [ ! -d "$INSTALL_PATH/" ]; then
    mkdir -p $INSTALL_PATH || {
      echo -e "${RED_COLOR}Error: Cannot create installation directory $INSTALL_PATH${RES}"
      exit 1
    }
  else
    rm -rf $INSTALL_PATH && mkdir -p $INSTALL_PATH
  fi

  echo -e "${GREEN_COLOR}Installation directory ready: $INSTALL_PATH${RES}"
}

# Global variables for account info
ADMIN_USER=""
ADMIN_PASS=""

# Function to build correct filename
build_filename() {
    local version="$1"
    local os_name=$(uname -s | tr '[:upper:]' '[:lower:]')
    local arch_name=""
    
    # Determine architecture part in filename based on system architecture
    if [ "$ARCH" = "amd64" ]; then
        arch_name="amd64"
    elif [ "$ARCH" = "arm64" ]; then
        arch_name="arm64"
    else
        echo "alist-linux-musl-$ARCH.tar.gz"  # Fallback to original format
        return 0
    fi
    
    # Determine filename based on operating system
    case "$os_name" in
        "linux")
            echo "alist-$version-linux-musl-$arch_name.tar.gz"
            ;;
        "darwin")
            echo "alist-$version-darwin-$arch_name.tar.gz"
            ;;
        "freebsd")
            echo "alist-$version-freebsd-$arch_name.tar.gz"
            ;;
        *)
            echo "alist-$version-linux-musl-$arch_name.tar.gz"  # Default to linux-musl
            ;;
    esac
}

# Function to get latest version information
get_latest_version() {
    local api_url="https://dapi.alistgo.com/v0/version/latest"
    local version_info=$(curl -s --connect-timeout 10 "$api_url" 2>/dev/null)
    
    if [ $? -eq 0 ] && [ -n "$version_info" ]; then
        # Parse JSON to get version and filename
        local version=$(echo "$version_info" | grep -o '"version":"[^"]*"' | cut -d'"' -f4)
        local platform=$(echo "$version_info" | grep -o '"platform":"[^"]*"' | cut -d'"' -f4)
        local download_url=$(echo "$version_info" | grep -o '"download_url":"[^"]*"' | cut -d'"' -f4)
        
        if [ -n "$version" ] && [ -n "$platform" ] && [ -n "$download_url" ]; then
            echo "$version|$platform|$download_url"
            return 0
        fi
    fi
    
    return 1
}

# Download function with retry mechanism
download_file() {
    local url="$1"
    local output="$2"
    local max_retries=3
    local retry_count=0
    local wait_time=5

    while [ $retry_count -lt $max_retries ]; do
        if curl -L --connect-timeout 10 --retry 3 --retry-delay 3 "$url" -o "$output"; then
            if [ -f "$output" ] && [ -s "$output" ]; then  # Check if file exists and is not empty
                return 0
            fi
        fi
        
        retry_count=$((retry_count + 1))
        if [ $retry_count -lt $max_retries ]; then
            echo -e "${YELLOW_COLOR}Download failed, retrying in ${wait_time} seconds (Attempt $((retry_count + 1))/${max_retries})...${RES}"
            sleep $wait_time
            wait_time=$((wait_time + 5))  # Increase wait time for each retry
        else
            echo -e "${RED_COLOR}Download failed after $max_retries attempts${RES}"
            return 1
        fi
    done
    return 1
}

INSTALL() {
  # Save current directory
  CURRENT_DIR=$(pwd)
  
  # Get latest version information
  echo -e "${GREEN_COLOR}Getting latest version information...${RES}"
  local version_info=$(get_latest_version)
  
  if [ $? -eq 0 ] && [ -n "$version_info" ]; then
    local version=$(echo "$version_info" | cut -d'|' -f1)
    local platform=$(echo "$version_info" | cut -d'|' -f2)
    local download_url=$(echo "$version_info" | cut -d'|' -f3)
    
    echo -e "${GREEN_COLOR}Latest version: $version${RES}"
    
    # Ask user to choose download source
    echo -e "${GREEN_COLOR}Please choose download source:${RES}"
    echo -e "${GREEN_COLOR}1. Use official mirror (recommended)${RES}"
    echo -e "${GREEN_COLOR}2. Use GitHub source${RES}"
    read -p "Please choose [1-2]: " download_choice
    
    case "${download_choice:-1}" in
      1)
        # Use official mirror
        local filename=$(build_filename "$version")
        local official_url="https://alistgo.com/download/Alist/v$version/$filename"
        echo -e "${GREEN_COLOR}Using official mirror: $official_url${RES}"
        
        # Download Alist program
        echo -e "\r\n${GREEN_COLOR}Downloading Alist...${RES}"
        if ! download_file "$official_url" "/tmp/alist.tar.gz"; then
          echo -e "${RED_COLOR}Official mirror download failed!${RES}"
          exit 1
        fi
        ;;
      2)
        # Use GitHub source
        echo -e "${GREEN_COLOR}Using GitHub source${RES}"
        
        # Download Alist program
        echo -e "\r\n${GREEN_COLOR}Downloading Alist...${RES}"
        local github_filename=$(build_filename "$version")
        if ! download_file "${GH_DOWNLOAD_URL}/$github_filename" "/tmp/alist.tar.gz"; then
          echo -e "${RED_COLOR}Download failed!${RES}"
          exit 1
        fi
        ;;
      *)
        echo -e "${RED_COLOR}Invalid choice, using default GitHub source${RES}"
        local github_filename=$(build_filename "$version")
        if ! download_file "${GH_DOWNLOAD_URL}/$github_filename" "/tmp/alist.tar.gz"; then
          echo -e "${RED_COLOR}Download failed!${RES}"
          exit 1
        fi
        ;;
    esac
  else
    echo -e "${YELLOW_COLOR}Unable to get latest version information, using default GitHub source${RES}"
    
    # Download Alist program
    echo -e "\r\n${GREEN_COLOR}Downloading Alist...${RES}"
    if ! download_file "${GH_DOWNLOAD_URL}/alist-linux-musl-$ARCH.tar.gz" "/tmp/alist.tar.gz"; then
      echo -e "${RED_COLOR}Download failed!${RES}"
      exit 1
    fi
  fi

  # Extract files
  if ! tar zxf /tmp/alist.tar.gz -C $INSTALL_PATH/; then
    echo -e "${RED_COLOR}Extraction failed!${RES}"
    rm -f /tmp/alist.tar.gz
    exit 1
  fi

  if [ -f $INSTALL_PATH/alist ]; then
    echo -e "${GREEN_COLOR}Download successful, installing...${RES}"
    
    # Get initial account info (temporarily change directory)
    cd $INSTALL_PATH
    ACCOUNT_INFO=$($INSTALL_PATH/alist admin random 2>&1)
    ADMIN_USER=$(echo "$ACCOUNT_INFO" | grep "username:" | sed 's/.*username://')
    ADMIN_PASS=$(echo "$ACCOUNT_INFO" | grep "password:" | sed 's/.*password://')
    # Return to original directory
    cd "$CURRENT_DIR"
  else
    echo -e "${RED_COLOR}Installation failed!${RES}"
    rm -rf $INSTALL_PATH
    mkdir -p $INSTALL_PATH
    exit 1
  fi

  # Clean up temporary files
  rm -f /tmp/alist*
}

INIT() {
  if [ ! -f "$INSTALL_PATH/alist" ]; then
    echo -e "\r\n${RED_COLOR}Error${RES}: Alist is not installed on this system\r\n"
    exit 1
  fi

  # Create systemd service file
  cat >/etc/systemd/system/alist.service <<EOF
[Unit]
Description=Alist service
Wants=network.target
After=network.target network.service

[Service]
Type=simple
WorkingDirectory=$INSTALL_PATH
ExecStart=$INSTALL_PATH/alist server
KillMode=process

[Install]
WantedBy=multi-user.target
EOF

  systemctl daemon-reload
  systemctl enable alist >/dev/null 2>&1
}

SUCCESS() {
  clear  # Clear screen only at start
  print_line() {
    local text="$1"
    local width=51
    printf "│ %-${width}s │\n" "$text"
  }

  # Get local IP
  LOCAL_IP=$(ip addr show | grep -w inet | grep -v "127.0.0.1" | awk '{print $2}' | cut -d/ -f1 | head -n1)
  # Get public IP
  PUBLIC_IP=$(curl -s4 ip.sb || curl -s4 ifconfig.me || echo "Failed to get")
  
  echo -e "┌────────────────────────────────────────────────────┐"
  print_line "Alist installed successfully!"
  print_line ""
  print_line "Access URLs:"
  print_line "  LAN: http://${LOCAL_IP}:5244/"
  print_line "  WAN: http://${PUBLIC_IP}:5244/"
  print_line "Config file: $INSTALL_PATH/data/config.json"
  print_line ""
  if [ ! -z "$ADMIN_USER" ] && [ ! -z "$ADMIN_PASS" ]; then
    print_line "Account Info:"
    print_line "Username: $ADMIN_USER"
    print_line "Password: $ADMIN_PASS"
  fi
  echo -e "└────────────────────────────────────────────────────┘"
  
  # Install command line tool
  if ! INSTALL_CLI; then
    echo -e "${YELLOW_COLOR}Warning: Command line tool installation failed, but Alist will work normally${RES}"
  fi
  
  echo -e "\n${GREEN_COLOR}Starting service...${RES}"
  systemctl restart alist
  echo -e "Management: Type ${GREEN_COLOR}alist${RES} anywhere to open management menu"
  
  echo -e "\n${YELLOW_COLOR}Note: If port is not accessible, please check server security group, firewall and service status${RES}"
  echo
  exit 0  # Exit directly, don't return to menu
}

UPDATE() {
    if [ ! -f "$INSTALL_PATH/alist" ]; then
        echo -e "\r\n${RED_COLOR}Error: Alist not found in $INSTALL_PATH${RES}\r\n"
        exit 1
    fi

    echo -e "${GREEN_COLOR}Starting Alist update...${RES}"

    # Get latest version information
    echo -e "${GREEN_COLOR}Getting latest version information...${RES}"
    local version_info=$(get_latest_version)
    
    if [ $? -eq 0 ] && [ -n "$version_info" ]; then
        local version=$(echo "$version_info" | cut -d'|' -f1)
        local platform=$(echo "$version_info" | cut -d'|' -f2)
        local download_url=$(echo "$version_info" | cut -d'|' -f3)
        
        echo -e "${GREEN_COLOR}Latest version: $version${RES}"
        echo -e "${GREEN_COLOR}Platform: $platform${RES}"
        
        # Ask user to choose download source
        echo -e "${GREEN_COLOR}Please choose download source:${RES}"
        echo -e "${GREEN_COLOR}1. Use official mirror (recommended)${RES}"
        echo -e "${GREEN_COLOR}2. Use GitHub source${RES}"
        read -p "Please choose [1-2]: " download_choice
        
        case "${download_choice:-1}" in
          1)
            # Use official mirror
            local filename=$(build_filename "$version")
            local official_url="https://alistgo.com/download/Alist/v$version/$filename"
            echo -e "${GREEN_COLOR}Using official mirror: $official_url${RES}"
            
            # Stop Alist service
            echo -e "${GREEN_COLOR}Stopping Alist process${RES}\r\n"
            systemctl stop alist

            # Backup binary
            cp $INSTALL_PATH/alist /tmp/alist.bak

            # Download new version
            echo -e "${GREEN_COLOR}Downloading Alist...${RES}"
            if ! download_file "$official_url" "/tmp/alist.tar.gz"; then
                echo -e "${RED_COLOR}Official mirror download failed!${RES}"
                echo -e "${GREEN_COLOR}Restoring previous version...${RES}"
                mv /tmp/alist.bak $INSTALL_PATH/alist
                systemctl start alist
                exit 1
            fi
            ;;
          2)
            # Use GitHub source
            echo -e "${GREEN_COLOR}Using GitHub source${RES}"
            
            # Stop Alist service
            echo -e "${GREEN_COLOR}Stopping Alist process${RES}\r\n"
            systemctl stop alist

            # Backup binary
            cp $INSTALL_PATH/alist /tmp/alist.bak

            # Download new version
            echo -e "${GREEN_COLOR}Downloading Alist...${RES}"
            local github_filename=$(build_filename "$version")
            if ! download_file "${GH_DOWNLOAD_URL}/$github_filename" "/tmp/alist.tar.gz"; then
                echo -e "${RED_COLOR}Download failed, update aborted${RES}"
                echo -e "${GREEN_COLOR}Restoring previous version...${RES}"
                mv /tmp/alist.bak $INSTALL_PATH/alist
                systemctl start alist
                exit 1
            fi
            ;;
          *)
            echo -e "${RED_COLOR}Invalid choice, using default GitHub source${RES}"
            
            # Stop Alist service
            echo -e "${GREEN_COLOR}Stopping Alist process${RES}\r\n"
            systemctl stop alist

            # Backup binary
            cp $INSTALL_PATH/alist /tmp/alist.bak

            # Download new version
            echo -e "${GREEN_COLOR}Downloading Alist...${RES}"
            local github_filename=$(build_filename "$version")
            if ! download_file "${GH_DOWNLOAD_URL}/$github_filename" "/tmp/alist.tar.gz"; then
                echo -e "${RED_COLOR}Download failed, update aborted${RES}"
                echo -e "${GREEN_COLOR}Restoring previous version...${RES}"
                mv /tmp/alist.bak $INSTALL_PATH/alist
                systemctl start alist
                exit 1
            fi
            ;;
        esac
    else
        echo -e "${YELLOW_COLOR}Unable to get latest version information, using default GitHub source${RES}"
        
        # Stop Alist service
        echo -e "${GREEN_COLOR}Stopping Alist process${RES}\r\n"
        systemctl stop alist

        # Backup binary
        cp $INSTALL_PATH/alist /tmp/alist.bak

        # Download new version
        echo -e "${GREEN_COLOR}Downloading Alist...${RES}"
        if ! download_file "${GH_DOWNLOAD_URL}/alist-linux-musl-$ARCH.tar.gz" "/tmp/alist.tar.gz"; then
            echo -e "${RED_COLOR}Download failed, update aborted${RES}"
            echo -e "${GREEN_COLOR}Restoring previous version...${RES}"
            mv /tmp/alist.bak $INSTALL_PATH/alist
            systemctl start alist
            exit 1
        fi
    fi

    # Extract files
    if ! tar zxf /tmp/alist.tar.gz -C $INSTALL_PATH/; then
        echo -e "${RED_COLOR}Extraction failed, update aborted${RES}"
        echo -e "${GREEN_COLOR}Restoring previous version...${RES}"
        mv /tmp/alist.bak $INSTALL_PATH/alist
        systemctl start alist
        rm -f /tmp/alist.tar.gz
        exit 1
    fi

    # Verify update success
    if [ -f $INSTALL_PATH/alist ]; then
        echo -e "${GREEN_COLOR}Download successful, updating...${RES}"
    else
        echo -e "${RED_COLOR}Update failed!${RES}"
        echo -e "${GREEN_COLOR}Restoring previous version...${RES}"
        mv /tmp/alist.bak $INSTALL_PATH/alist
        systemctl start alist
        rm -f /tmp/alist.tar.gz
        exit 1
    fi

    # Clean up temporary files
    rm -f /tmp/alist.tar.gz /tmp/alist.bak

    # Restart Alist service
    echo -e "${GREEN_COLOR}Starting Alist process${RES}\r\n"
    systemctl restart alist

    echo -e "${GREEN_COLOR}Update completed!${RES}"
}

UNINSTALL() {
    if [ ! -f "$INSTALL_PATH/alist" ]; then
        echo -e "\r\n${RED_COLOR}Error: Alist not found in $INSTALL_PATH${RES}\r\n"
        exit 1
    fi
    
    echo -e "${RED_COLOR}Warning: This will delete Alist directory, database files and command line tools!${RES}"
    read -p "Confirm uninstall? [Y/n]: " choice
    
    case "${choice:-y}" in
        [yY]|"")
            echo -e "${GREEN_COLOR}Starting uninstall...${RES}"
            
            echo -e "${GREEN_COLOR}Stopping Alist process${RES}"
            systemctl stop alist
            systemctl disable alist
            
            echo -e "${GREEN_COLOR}Removing Alist files${RES}"
            rm -rf $INSTALL_PATH
            rm -f /etc/systemd/system/alist.service
            systemctl daemon-reload
            
            # Remove management script and command link
            if [ -f "$MANAGER_PATH" ] || [ -L "$COMMAND_LINK" ]; then
                echo -e "${GREEN_COLOR}Removing command line tools${RES}"
                rm -f "$MANAGER_PATH" "$COMMAND_LINK" || {
                    echo -e "${YELLOW_COLOR}Warning: Failed to remove command line tools, please delete manually:${RES}"
                    echo -e "${YELLOW_COLOR}1. $MANAGER_PATH${RES}"
                    echo -e "${YELLOW_COLOR}2. $COMMAND_LINK${RES}"
                }
            fi
            
            echo -e "${GREEN_COLOR}Alist has been completely uninstalled${RES}"
            ;;
        *)
            echo -e "${GREEN_COLOR}Uninstall cancelled${RES}"
            ;;
    esac
}

RESET_PASSWORD() {
    if [ ! -f "$INSTALL_PATH/alist" ]; then
        echo -e "\r\n${RED_COLOR}Error: Alist is not installed, please install first!${RES}\r\n"
        exit 1
    fi

    echo -e "\nSelect password reset method"
    echo -e "${GREEN_COLOR}1. Generate random password${RES}"
    echo -e "${GREEN_COLOR}2. Set new password${RES}"
    echo -e "${GREEN_COLOR}0. Back to main menu${RES}"
    echo
    read -p "Enter option [0-2]: " choice

    # Switch to Alist directory
    cd $INSTALL_PATH

    case "$choice" in
        1)
            echo -e "${GREEN_COLOR}Generating random password...${RES}"
            echo -e "\n${GREEN_COLOR}Account Info:${RES}"
            ./alist admin random 2>&1 | grep -E "username:|password:" | sed 's/.*username:/Username: /' | sed 's/.*password:/Password: /'
            exit 0
            ;;
        2)
            read -p "Enter new password: " new_password
            if [ -z "$new_password" ]; then
                echo -e "${RED_COLOR}Error: Password cannot be empty${RES}"
                exit 1
            fi
            echo -e "${GREEN_COLOR}Setting new password...${RES}"
            echo -e "\n${GREEN_COLOR}Account Info:${RES}"
            ./alist admin set "$new_password" 2>&1 | grep -E "username:|password:" | sed 's/.*username:/Username: /' | sed 's/.*password:/Password: /'
            exit 0
            ;;
        0)
            return 0
            ;;
        *)
            echo -e "${RED_COLOR}Invalid option${RES}"
            exit 1
            ;;
    esac
}

# Add management script path configuration
MANAGER_PATH="/usr/local/sbin/alist-manager"  # Management script path
COMMAND_LINK="/usr/local/bin/alist"          # Command link path

# Modify INSTALL_CLI function
INSTALL_CLI() {
    # Check root privileges
    if [ "$(id -u)" != "0" ]; then
        echo -e "${RED_COLOR}Error: Root privileges required for installing command line tools${RES}"
        return 1
    fi

    # Get current script info (without debug info)
    SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
    SCRIPT_NAME=$(basename "$0")
    SCRIPT_PATH="$SCRIPT_DIR/$SCRIPT_NAME"

    # Verify script file exists
    if [ ! -f "$SCRIPT_PATH" ]; then
        echo -e "${RED_COLOR}Error: Source script file not found${RES}"
        echo -e "Path: $SCRIPT_PATH"
        return 1
    fi
    
    # Create management script directory
    mkdir -p "$(dirname "$MANAGER_PATH")" || {
        echo -e "${RED_COLOR}Error: Cannot create directory $(dirname "$MANAGER_PATH")${RES}"
        return 1
    }
    
    # Copy script to management directory
    cp "$SCRIPT_PATH" "$MANAGER_PATH" || {
        echo -e "${RED_COLOR}Error: Cannot copy management script${RES}"
        echo -e "Source: $SCRIPT_PATH"
        echo -e "Target: $MANAGER_PATH"
        return 1
    }
    
    # Set permissions
    chmod 755 "$MANAGER_PATH" || {
        echo -e "${RED_COLOR}Error: Failed to set permissions${RES}"
        rm -f "$MANAGER_PATH"
        return 1
    }
    
    # Ensure directory permissions are correct
    chmod 755 "$(dirname "$MANAGER_PATH")" || {
        echo -e "${YELLOW_COLOR}Warning: Failed to set directory permissions${RES}"
    }
    
    # Create command link directory
    mkdir -p "$(dirname "$COMMAND_LINK")" || {
        echo -e "${RED_COLOR}Error: Cannot create directory $(dirname "$COMMAND_LINK")${RES}"
        rm -f "$MANAGER_PATH"
        return 1
    }
    
    # Create command link
    ln -sf "$MANAGER_PATH" "$COMMAND_LINK" || {
        echo -e "${RED_COLOR}Error: Failed to create command link${RES}"
        rm -f "$MANAGER_PATH"
        return 1
    }
    
    echo -e "${GREEN_COLOR}Command line tools installed successfully!${RES}"
    echo -e "\nYou can now use these commands:"
    echo -e "1. ${GREEN_COLOR}alist${RES}          - Quick command"
    echo -e "2. ${GREEN_COLOR}alist-manager${RES}  - Full command"
    return 0
}

SHOW_MENU() {
  # Get actual installation path
  INSTALL_PATH=$(GET_INSTALLED_PATH)

  echo -e "\nWelcome to Alist Manager\n"
  echo -e "${GREEN_COLOR}1. Install Alist${RES}"
  echo -e "${GREEN_COLOR}2. Update Alist${RES}"
  echo -e "${GREEN_COLOR}3. Uninstall Alist${RES}"
  echo -e "${GREEN_COLOR}-------------------${RES}"
  echo -e "${GREEN_COLOR}4. Check Status${RES}"
  echo -e "${GREEN_COLOR}5. Reset Password${RES}"
  echo -e "${GREEN_COLOR}-------------------${RES}"
  echo -e "${GREEN_COLOR}6. Start Alist${RES}"
  echo -e "${GREEN_COLOR}7. Stop Alist${RES}"
  echo -e "${GREEN_COLOR}8. Restart Alist${RES}"
  echo -e "${GREEN_COLOR}-------------------${RES}"
  echo -e "${GREEN_COLOR}0. Exit${RES}"
  echo
  read -p "Enter option [0-8]: " choice
  
  case "$choice" in
    1)
      # Reset to default path when installing
      INSTALL_PATH='/opt/alist'
      CHECK
      INSTALL
      INIT
      SUCCESS
      return 0
      ;;
    2)
      UPDATE
      exit 0
      ;;
    3)
      UNINSTALL
      exit 0
      ;;
    4)
      if [ ! -f "$INSTALL_PATH/alist" ]; then
        echo -e "\r\n${RED_COLOR}Error: Alist is not installed, please install first!${RES}\r\n"
        return 1
      fi
      # Check service status
      if systemctl is-active alist >/dev/null 2>&1; then
        echo -e "${GREEN_COLOR}Alist current status: Running${RES}"
      else
        echo -e "${RED_COLOR}Alist current status: Stopped${RES}"
      fi
      return 0
      ;;
    5)
      RESET_PASSWORD
      return 0
      ;;
    6)
      if [ ! -f "$INSTALL_PATH/alist" ]; then
        echo -e "\r\n${RED_COLOR}Error: Alist is not installed, please install first!${RES}\r\n"
        return 1
      fi
      systemctl start alist
      echo -e "${GREEN_COLOR}Alist has been started${RES}"
      return 0
      ;;
    7)
      if [ ! -f "$INSTALL_PATH/alist" ]; then
        echo -e "\r\n${RED_COLOR}Error: Alist is not installed, please install first!${RES}\r\n"
        return 1
      fi
      systemctl stop alist
      echo -e "${GREEN_COLOR}Alist has been stopped${RES}"
      return 0
      ;;
    8)
      if [ ! -f "$INSTALL_PATH/alist" ]; then
        echo -e "\r\n${RED_COLOR}Error: Alist is not installed, please install first!${RES}\r\n"
        return 1
      fi
      systemctl restart alist
      echo -e "${GREEN_COLOR}Alist has been restarted${RES}"
      return 0
      ;;
    0)
      exit 0
      ;;
    *)
      echo -e "${RED_COLOR}Invalid option${RES}"
      return 1
      ;;
  esac
}

# Main program logic
if [ $# -eq 0 ]; then
  while true; do
    SHOW_MENU
    echo
    # Wait for user to see the result
    if [ $? -eq 0 ]; then
      sleep 3  # Wait 3 seconds on success
    else
      sleep 5  # Wait 5 seconds on failure
    fi
    clear  # Then clear screen and show menu again
  done
elif [ "$1" = "install" ]; then
  CHECK
  INSTALL
  INIT
  SUCCESS
elif [ "$1" = "update" ]; then
  if [ $# -gt 1 ]; then
    echo -e "${RED_COLOR}Error: update command does not need a path${RES}"
    echo -e "Correct usage: $0 update"
    exit 1
  fi
  UPDATE
elif [ "$1" = "uninstall" ]; then
  if [ $# -gt 1 ]; then
    echo -e "${RED_COLOR}Error: uninstall command does not need a path${RES}"
    echo -e "Correct usage: $0 uninstall"
    exit 1
  fi
  UNINSTALL
else
  echo -e "${RED_COLOR}Invalid command${RES}"
  echo -e "Usage: $0 install [path]    # Install Alist"
  echo -e "      $0 update           # Update Alist"
  echo -e "      $0 uninstall       # Uninstall Alist"
  echo -e "      $0                 # Show interactive menu"
fi
