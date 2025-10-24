// .vuepress/client.ts
import { defineClientConfig } from "vuepress/client";

if (typeof window === "undefined") {
  const global = globalThis as unknown as {
    window?: typeof globalThis;
    location?: Location;
    navigator?: Navigator;
  };

  global.window = Object.assign({ open: () => void 0 }, global.window);
  const fallbackLocation =
    global.location ?? ({ pathname: "/", origin: "", href: "" } as Location);
  global.window = Object.assign(global.window ?? {}, { location: fallbackLocation });
  global.location = fallbackLocation;
  if (!global.navigator) {
    global.navigator = { userAgent: "", platform: "", userAgentData: { platform: "" } as any } as Navigator;
  }
}
import NaiveClient from "./components/NaiveClient.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("NaiveClient", NaiveClient);
  },
});
