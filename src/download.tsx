import styles from "./download.module.scss";

export function Download() {
  return (
    <>
      <div className={styles.d}>
        <a href="https://play.google.com/store/apps/details?id=org.stanthonyhall.gcapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Get it on Google Play"
            style={{ height: "116px" }}
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </a>
        <a href="https://apps.apple.com/us/app/gc-2023/id6444782168?itsct=apps_box_badge&amp;itscg=30200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1671408000?h=362d2afa5785ec4e0c689ab9a51aea69"
            alt="Download on the App Store"
            style={{ borderRadius: "13px", width: "250px", height: "83px" }}
          />
        </a>
      </div>
      <div className={styles.notes}>
        Google Play and the Google Play logo are trademarks of Google LLC.
      </div>
    </>
  );
}
