"use client";

export function usePhoneType(): "android" | "ios" | "other" {
  if (
    typeof navigator === undefined ||
    typeof navigator.userAgent !== "string"
  ) {
    return "other";
  }

  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    return "android";
  }
  if (/\bi(pad|phone|pod)\b/i.test(ua)) {
    return "ios";
  }
  return "other";
}
