"use client";

import { useEffect } from "react";
import { Download } from "../../src/download";
import { usePhoneType } from "../../src/use-os";

const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=org.stanthonyhall.gcapp";
const IOS_URL = "https://apps.apple.com/us/app/gc-2023/id6444782168;";

export default function DownlaodPage() {
  const os = usePhoneType();
  useEffect(() => {
    if (os === "ios") {
      window.location.replace(IOS_URL);
    } else if (os === "android") {
      window.location.replace(ANDROID_URL);
    }
  }, [os]);

  return (
    <>
      <h1>Download the GC App</h1>
      <Download />
    </>
  );
}
