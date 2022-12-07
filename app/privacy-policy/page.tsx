export default function Privacy() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p>
        <em>Effective Date: 2022-12-07</em>
      </p>
      <p>
        The GC Conference App helps you organize your schedule and follow the
        events that matter to you. All the information about your saved events
        are saved on your device and cannot be shared with GC or the Organizers.
        This privacy notice helps you understand the limited pieces of data that
        are that are transmitted to the app.
      </p>
      <p>
        The GC App is created and maintained by{" "}
        <a href="https://eyas.sh/">Eyas Sharaiha</a>. For legalese, you&rsquo;ll
        see me say <em>we</em>, <em>us</em>, and <em>our</em> to describe how{" "}
        <em>I</em> store and safeguard data resulting from your use of the GC
        Conference iOS and Android apps.
      </p>
      <h2>Highlights</h2>
      <ul>
        <li>
          <strong>We do not store or process personal information.</strong>
        </li>
        <li>
          <strong>
            We <em>do</em> store unique device tokens.
          </strong>{" "}
          These are random numbers and letters that can &ldquo;address&rdquo;
          your device in push notifications. They are not stored with any other
          data and cannot be used to identify you or infer any behavioral trends
          about you. We use these tokens to send push notifications about
          changes to events. We only receive and store these tokens if you give
          Notification access to the app.
        </li>
        <li>
          <strong>
            We do not store or process sensitive personal information.
          </strong>
        </li>
        <li>
          <strong>
            We do not receive any information about you from third parties.
          </strong>
        </li>
        <li>
          <strong>
            Third-party APIs and Libraries we use <em>can</em> have access to
            your data.
          </strong>{" "}
          The only such third party use is the Google Maps API. Learn more{" "}
          <a href="#thirdparty">here</a>.
        </li>
      </ul>
      <h2>Information we collect</h2>
      <h3>Unique Device Tokens for Push Notifications</h3>
      <p>
        The only piece of data collected and stored for this app is a unique
        device token for push notifications. A device token is a long random
        piece of text that is unique for your device. Your device uses that to
        sign up for push notifications. We store that token and use that as an
        &ldquo;address&rdquo; for your device.
      </p>
      <p>
        These tokens are not stored alongside any other data. Our servers know
        nothing about you, or about these tokens. For example, we cannot track
        which devices these tokens belong to, and we cannot infer what events a
        device with a given token is registered to. We simply don&rsquo;t share
        or store any information to let us infer anything about these tokens.
      </p>
      <p>
        These tokens are sent to us by the App on your device <em>if</em> you
        grant it Push Notification permissions.
      </p>
      <h3>Information accessed by the App (but not collected)</h3>
      <p>
        The App asks for two permissions that may result it in it processing
        more data <em>on your device</em>. These permissions are:
      </p>
      <ol>
        <li>
          <em>Push Notifications.</em> We request to send you event updates
          about last-minute changes to events, and other conference
          announcements.
        </li>
        <li>
          <em>Calendar Permissions.</em> If you choose to do so in settings, we
          will request access to your system calendar. We will use this access
          to <em>create</em> a new calendar on your device that is associated
          with the app. This will be used to record the events you are attending
          on the calendar.
        </li>
      </ol>
      <h2 id="thirdparty">What third-parties might get about you</h2>
      <p>
        We may need to share your personal information in the following
        situations:
      </p>
      <ul>
        <li>
          <strong>When we use Google Maps Platform APIs.</strong> We may share
          your information with certain Google Maps Platform APIs (e.g., the
          Maps embed). Find out more in{" "}
          <a
            href="https://policies.google.com/privacy"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google&rsquo;s Privacy Policy
          </a>
          .
        </li>
      </ul>
      <h2>Can you review, update, or delete data collected about you?</h2>
      <h3>Device Tokens</h3>
      <p>
        If you uninstall or deactivate the app, your device token will
        eventually be wiped from our servers.
      </p>
      <p>
        We cannot allow users to <em>view</em> or <em>update</em> these tokens,
        since we store no other personal-identifying data would allow us to know
        if a token corresponds to a given person to begin with.
      </p>
      <h2>Changes to this policy</h2>
      <p>
        We may periodically update this policy. When we update the Privacy
        Policy, we will revise the <em>Effective Date</em> date above and post
        the new Privacy Policy. We recommend that you review the Privacy Policy
        each time you visit the Services to stay informed of our privacy
        practices.
      </p>
      <h2 id="contact">Questions</h2>
      <p>
        Any questions about this Privacy Policy or our practices should be sent
        to hello@eyas.sh.
      </p>
    </>
  );
}
