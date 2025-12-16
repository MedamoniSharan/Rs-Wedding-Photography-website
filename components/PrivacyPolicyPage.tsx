import React from 'react';
import SEO from './SEO';

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = '16 December 2025';

  return (
    <>
      <SEO
        title="Privacy Policy – Ranga Surya Photography"
        description="Read the privacy policy of Ranga Surya Photography to understand how we collect, use, and protect your personal data when you visit our website or use our services."
        keywords="Ranga Surya Photography privacy policy, data protection, cookies, analytics, personal information"
        url="https://rangasuryaphotography.com/privacy-policy"
      />
      <div className="min-h-screen bg-white dark:bg-charcoal-gray text-charcoal-gray dark:text-gray-200">
        <div className="container mx-auto px-6 py-20 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-poppins font-black text-charcoal-gray dark:text-white mb-4">
            Privacy Policy – Ranga Surya Photography
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            Last updated: {lastUpdated}
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Ranga Surya Photography (“we”, “our”, “us”) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your information when you visit
            our website or use our services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-charcoal-gray dark:text-white mb-3">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Personal details such as name, email, and phone number submitted through contact forms.
              </li>
              <li>Booking and inquiry information.</li>
              <li>
                Usage data such as IP address, device information, and browsing behavior through analytics
                tools.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-charcoal-gray dark:text-white mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>To respond to inquiries and provide photography services.</li>
              <li>To improve our website experience and service quality.</li>
              <li>For communication regarding bookings, offers, or updates.</li>
              <li>For internal analytics and performance tracking.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-charcoal-gray dark:text-white mb-3">
              3. Sharing of Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We do not sell your personal information. We may share data only with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Service providers assisting in website hosting, analytics, or communication.
              </li>
              <li>Authorities if required by law.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-charcoal-gray dark:text-white mb-3">
              4. Cookies &amp; Tracking Technologies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We use cookies and analytics tools (such as Google Analytics and Meta Pixel) to enhance
              user experience and track website performance.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Users can disable cookies in their browser settings, but some features of the website may
              not function properly as a result.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-charcoal-gray dark:text-white mb-3">
              5. Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We implement industry-standard security measures to protect your data. However, no system is
              100% secure and we cannot guarantee absolute protection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-charcoal-gray dark:text-white mb-3">
              6. Third-Party Links
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our website may contain links to external sites. We are not responsible for the privacy
              practices or content of third-party websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-charcoal-gray dark:text-white mb-3">
              7. Your Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              You may request:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Access to the personal data we hold.</li>
              <li>Correction or deletion of your information.</li>
              <li>Opt-out from marketing communications.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-charcoal-gray dark:text-white mb-3">
              8. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              For privacy-related questions, requests, or concerns, please contact:
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
              Email: rangasuryaphotography@gmail.com
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;


