---
# This is the icon of the page
icon: state
# This control sidebar order
order: 5
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# OneDrive APP

## Benefits and Precautions

1. The advantage is that the administrator is only authorized to log in once, and the same is used when adding parameters later. When adding, everything is the same except for the mailbox.
   - For example, E5 has 25 5T accounts. After you log in and initialize in advance, you can directly use the parameters before the CV. You don’t have to get the refresh token every time as before, and it will expire after a long time
   - A1, A1P, etc. can distribute more accounts (500 - **unlimited**)



2. After the administrator authorizes in this way, he can view the account of each member in the organization at will, which will leak his own files
   - It is recommended to apply for OneDrive E5 to get better

----



First log in with your personal or organizational account

**https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview.ReactView?Microsoft_AAD_IAM_legacyAADRedirect=true**

Login to get our<Badge text="tenant ID" type="info" vertical="middle" />

![onedriveapp](/img/drivers/onedrive_app/onedrive_app0.png)



## Create process

:::tip
Please read carefully the following **`serial numbers , are added in sequence`**, if there is any error, please feedback in time
:::

:::tabs#onedrive_app
@tab 1

1. Register an application, choose the type yourself, it is recommended to choose the third

2. Redirect URL (callback parameter), select Web as the type, and fill in the parameters **https://entra.microsoft.com/TokenAuthorize** ,Otherwise, it will not be able to authorize later
3. After filling out, click on the registration below and you can see it after jumping<Badge text="client ID" type="info" vertical="middle" />

![onedriveapp](/img/drivers/onedrive_app/onedrive_app1.png)

@tab 2

Let's get a client secret key, just get it as shown in the figure below, remember<Badge text="secret key" type="info" vertical="middle" />save in time, it will only appear once

![onedriveapp](/img/drivers/onedrive_app/onedrive_app3.png)

@tab 3

Once you have obtained the client secret key, go to authorize the **`API`** to be used, and follow the picture below to get it

![onedriveapp](/img/drivers/onedrive_app/onedrive_app4.png)

@tab 4

After the API is authorized, we go to authorize the organization application

- Left sidebar ---> Enterprise applications ---> All applications ---> **{choose which application name we started to create}** ---> Permissions ---> Click for `xxxx `Grant admin consent

![onedriveapp](/img/drivers/onedrive_app/onedrive_app5.png)

matters needing attention

- If you start to register the application, the callback parameters are not the same, you may get an error when you click Authorization, remember to write the same
- How to check whether the authorization is successful. If it is not authorized, the page will prompt `The application has not been found to have the authorization of the administrator's permission`. After the authorization is successful, refresh the page and you will see three API permissions, as shown in the figure below
  - The above is what it looks like when it is not authorized, and the following is what it looks like after authorization (just refresh the page after authorization)


![onedriveapp](/img/drivers/onedrive_app/onedrive_app7.png)

@tab 5

From the beginning to the present, we have obtained the following parameters: tenant ID^1^, registered application^2^, client ID/secret key^3^, authorization API/administrator API^4^

Then open the browser and finally authorize it through the following format, which are<Badge text="tenant ID" type="info" vertical="middle" /><Badge text="client ID" type="info" vertical="middle" /><Badge text="Callback URL" type="info" vertical="middle" />Change to your own final login to receive

```html
https://login.microsoftonline.com/{tenant ID or common}/adminConsent?client_id={client ID}&redirect_uri={Callback URL}
```

![onedriveapp](/img/drivers/onedrive_app/onedrive_app6.png)

If you log in according to the spelled link and find that you are redirected to a blank page, such as the sample code and picture below, the authorization is successful, don’t worry

```
https://entra.microsoft.com/TokenAuthorize?admin_consent=True&tenant={Tenant ID}#
```

![onedriveapp](/img/drivers/onedrive_app/od_app_ok.png)

:::



## Fill in the example

Fill in the values obtained in the above process one by one. If you don’t know which email address it is, you can find it by [**view all users of the organization**](#view-all-users-of-the-organization)

![onedriveapp](/img/drivers/onedrive_app/onedrive_app_Denmo.png)



<BiliBili bvid="BV1Ro4y1s725" ratio="16:9" low-quality no-danmaku />



## View all users of the organization

If you don't know how many users there are in your OneDrive organization, you can go to the link below to log in to the `admin` account to view

**https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users**

![onedriveapp](/img/drivers/onedrive_app/onedrive_app_user.png)



## Error message

- Tips：**Either scp or roles claim need to be present in the token**  Error

because you didn't do it in step `4` <Badge text="grant xxx administrator consent" type="info" vertical="middle" /> caused by,Pay attention to the tips below the fourth step

### The default download method used

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```