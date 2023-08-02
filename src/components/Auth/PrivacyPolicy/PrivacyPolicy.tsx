import {
  FirstList,
  SecondList,
  Title,
  Accent,
  Paragraph,
  Date,
} from "../Auth.styled";

const PrivacyPolicy: React.FC<{}> = () => {
  return (
    <>
      <Date>Last Updated: 02.08.2023 16:09</Date>
      <Paragraph margin="0 0 var(--small-indent) 0">
        Thank you for using our FisherBlog (the "Website"). This Privacy Policy
        explains how we collect, use, disclose, and protect your personal
        information when you access and use our Website. By using the Website,
        you consent to the practices described in this Privacy Policy.
      </Paragraph>
      <FirstList>
        <li>
          <Title>Information We Collect:</Title>
          <SecondList>
            <li>
              Personal Information: During the registration process, we collect
              certain personal information such as your name, email address, and
              other optional details. You may also provide additional personal
              information when creating public posts or interacting with other
              users on the Website.
            </li>
            <li>
              Usage Information: We collect information about your interactions
              with the Website, including your IP address, device information,
              browser type, and pages visited. c. Cookies and Similar
              Technologies: We may use cookies and similar tracking technologies
              to enhance your user experience, analyze website usage, and
              personalize content.
            </li>
          </SecondList>
        </li>
        <li>
          <Title>Use of Information:</Title>
          <SecondList>
            <li>
              Providing Services: We use the collected information to provide,
              maintain, and improve the functionality of the Website and its
              features.
            </li>
            <li>
              Communication: We may use your email address to send you important
              updates, newsletters, or promotional materials related to the
              Website. You can opt-out of these communications at any time.
            </li>
            <li>
              User-Generated Content: Your public posts and interactions on the
              Website will be visible to other users as part of the blogging
              community.
            </li>
            <li>
              Analytics: We may use analytics tools to analyze usage patterns
              and improve the Website's performance and user experience.
            </li>
          </SecondList>
        </li>
        <li>
          <Title>Data Sharing:</Title>
          <SecondList>
            <li>
              With Other Users: Your public posts and interactions on the
              Website are visible to other registered users of the platform.
            </li>
            <li>
              With Service Providers: We may share your information with trusted
              third-party service providers who assist us in operating the
              Website and providing our services.
            </li>
            <li>
              Legal Requirements: We may disclose your information if required
              by law, to protect our rights, or in response to a legal request
              or subpoena.
            </li>
          </SecondList>
        </li>
        <li>
          <Title>Data Security:</Title>
          <SecondList>
            <li>
              We take reasonable measures to protect your personal information
              from unauthorized access, loss, misuse, or alteration.
            </li>
            <li>
              However, no data transmission over the internet or electronic
              storage system can be guaranteed to be 100% secure. Therefore, we
              cannot guarantee the absolute security of your information.
            </li>
          </SecondList>
        </li>
        <li>
          <Title>Children's Privacy:</Title>
          <p>
            The Website is not intended for use by individuals under the age of
            18. We do not knowingly collect personal information from children.
            If you are a parent or guardian and believe that your child has
            provided personal information on the Website, please contact us to
            have the information removed.
          </p>
        </li>
        <li>
          <Title>Third-Party Links:</Title>
          <p>
            The Website may contain links to third-party websites or services.
            We are not responsible for the privacy practices or content of these
            third-party sites.
          </p>
        </li>
        <li>
          <Title>Changes to the Privacy Policy:</Title>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes through email or prominent notices on
            the Website.
          </p>
        </li>
        <li>
          <Title>Contact Us:</Title>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at{" "}
            <Accent>fisher-blog@mail.com</Accent>.
          </p>
        </li>
      </FirstList>
      <Paragraph margin="var(--small-indent) 0 0 0">
        By using the Website, you acknowledge that you have read and understood
        this Privacy Policy. Please review this Privacy Policy regularly for any
        updates or changes.
      </Paragraph>
    </>
  );
};

export default PrivacyPolicy;
