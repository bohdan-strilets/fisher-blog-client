import { FirstList, SecondList, Title } from "./TermsUseSite.styled";

const TermsUseSite: React.FC<{}> = () => {
  return (
    <>
      <FirstList>
        <li>
          <Title>Registration and User Accounts:</Title>
          <SecondList>
            <li>Users must be at least 18 years old to create an account.</li>
            <li>
              Provide accurate and truthful information during registration.
            </li>
            <li>
              Users are responsible for maintaining the confidentiality of their
              account credentials.
            </li>
            <li>Do not share or disclose your account details to others.</li>
            <li>
              Users must not impersonate or misrepresent their identity on the
              platform.
            </li>
          </SecondList>
        </li>
        <li>
          <Title>Respectful Communication:</Title>
          <SecondList>
            <li>
              Be courteous and respectful towards other users and their
              opinions.
            </li>
            <li>
              Avoid offensive language, hate speech, or harassment of any kind.
            </li>
            <li>
              Refrain from engaging in personal attacks or disrespectful
              behavior.
            </li>
          </SecondList>
        </li>
        <li>
          <Title>Privacy and Data Protection:</Title>
          <SecondList>
            <li>
              Users must respect the privacy of others and refrain from sharing
              personal information of others without their consent.
            </li>
            <li>
              The website will store and handle user data in accordance with its
              Privacy Policy.
            </li>
            <li>
              Users are responsible for their own content and should avoid
              sharing sensitive personal information publicly.
            </li>
          </SecondList>
        </li>
        <li>
          <Title>Intellectual Property and Content Guidelines:</Title>
          <SecondList>
            <li>
              Users should not post content that violates copyright, trademark,
              or any other intellectual property rights.
            </li>
            <li>
              Respect the intellectual property of others and always give
              appropriate credit for any content used or shared.
            </li>
          </SecondList>
        </li>
        <li>
          <Title>Fishing Regulations and Ethics:</Title>
          <SecondList>
            <li>
              Users should abide by local, national, and international fishing
              regulations and practice ethical fishing.
            </li>
            <li>
              Do not promote or support illegal fishing activities or
              environmentally harmful practices.
            </li>
          </SecondList>
        </li>
        <li>
          <Title>Moderation and Content Removal:</Title>
          <SecondList>
            <li>
              The website administrators have the right to moderate and remove
              any content that violates the rules or community guidelines.
            </li>
            <li>
              Users should report any inappropriate content or behavior to the
              site administrators.
            </li>
          </SecondList>
        </li>
        <li>
          <Title>Advertising and Spam:</Title>
          <SecondList>
            <li>
              Users must not engage in spamming or excessive self-promotion on
              the platform.
            </li>
            <li>
              Advertising or commercial promotions require permission from the
              website administrators.
            </li>
          </SecondList>
        </li>
        <li>
          <Title>Safety and Security:</Title>
          <SecondList>
            <li>
              Users should not attempt to disrupt or compromise the security of
              the website or its users.
            </li>
            <li>
              Report any security vulnerabilities or issues to the website
              administrators.
            </li>
          </SecondList>
        </li>
        <li>
          <Title>Liability and Indemnification:</Title>
          <SecondList>
            <li>
              The website and its administrators are not responsible for the
              content posted by users.
            </li>
            <li>
              Users are liable for their own actions and content posted on the
              platform.
            </li>
          </SecondList>
        </li>
        <li>
          <Title>Compliance with Terms of Service:</Title>
          <SecondList>
            <li>
              By using the website, users agree to comply with these rules and
              the website's Terms of Service.
            </li>
          </SecondList>
        </li>
      </FirstList>
      <p>
        Violation of these rules may result in warnings, temporary suspension,
        or permanent banning from the platform, depending on the severity and
        frequency of the violations. The website administrators reserve the
        right to update or modify these rules as needed.
      </p>
    </>
  );
};

export default TermsUseSite;
