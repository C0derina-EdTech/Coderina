"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaRegClock, FaEye } from "react-icons/fa";
import Follow from "./Follow";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import Sponsors from "./Sponsors";
const Privacy = () => {
  const generalContents = [
    {
      bgImage: "",
      section: <Sponsors />,
    },
    {
      bgImage: "",
      section: <Follow />,
    },

    {
      bgImage:
        "https://images.unsplash.com/photo-1551001626-86e913f8baf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      section: <Subscribe />,
    },
    {
      bgColor: "#232323",
      section: <Footer />,
    },
  ];
  return (
    <div className=" bg-background text-color">
       <div className="px-2 md:px-4 lg:px-8 py-10 md:py-24">
      <h1 className="text-3xl md:text-5xl text-center font-bold mb-6 capitalize">
        PRIVACY
      </h1>
      <div>
        <section className="py-16 px-2 sm:px-4 md:px-5 max-w-3xl 2xl:max-w-full mx-auto">
          <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
          <p className="mb-6">
            At Coderina Education and Technology Foundation, we are committed to
            protecting your privacy and maintaining the trust of our community.
            This Privacy Policy outlines how we collect, use, and protect your
            personal information when you interact with our website, programs,
            or communication platforms.
          </p>

          <h3 className="text-2xl font-semibold mb-4">1. Who We Are</h3>
          <p className="mb-6">
            Coderina is a nonprofit organization focused on advancing digital
            literacy, coding, and STEM education for African youth. Through our
            website, events, blogs, and outreach, we aim to empower learners and
            educators with accessible, inclusive technology programs.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            2. What Information We Collect
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              <strong>Basic Identifiers:</strong> Full name, email address,
              school/organization, and phone number.
            </li>
            <li>
              <strong>Program Details:</strong> Information submitted through
              program applications, event registrations, or forms.
            </li>
            <li>
              <strong>Messages and Comments:</strong> Any communications through
              our blog, contact page, or email.
            </li>
            <li>
              <strong>Newsletter Subscriptions:</strong> Email and optional name
              when you sign up for updates.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">
            3. How We Collect Your Data
          </h3>
          <p className="mb-6">
            We collect data directly through forms, email communication,
            newsletter signups, and messages submitted through our website.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            4. How We Use Your Information
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>To process event and program registrations.</li>
            <li>To respond to your inquiries and support needs.</li>
            <li>
              To share educational updates, opportunities, and newsletters.
            </li>
            <li>To improve website experience and engagement.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">
            5. Blog Comments & Feedback
          </h3>
          <p className="mb-6">
            If you submit a comment or message via our blog or contact form, we
            may store your name, email, and message for moderation and response
            purposes only.
          </p>

          <h3 className="text-2xl font-semibold mb-4">6. Subscriptions</h3>
          <p className="mb-6">
            Subscribing to our newsletter means you`ll receive relevant updates
            from Coderina. You can unsubscribe at any time using the link
            provided in any email.
          </p>

          <h3 className="text-2xl font-semibold mb-4">7. Data Sharing</h3>
          <p className="mb-6">
            We do not sell or rent your personal information. We may share
            limited data with service providers (e.g., email systems or
            analytics tools) solely for operational needs and only under strict
            confidentiality agreements.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            8. Cookies and Tracking
          </h3>
          <p className="mb-6">
            Our website may use cookies to enhance your browsing experience. You
            can disable cookies in your browser settings if preferred.
          </p>

          <h3 className="text-2xl font-semibold mb-4">9. Your Rights</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Request access to or deletion of your personal data.</li>
            <li>Withdraw consent at any time.</li>
            <li>
              Raise a complaint with a data protection authority if needed.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">10. Data Security</h3>
          <p className="mb-6">
            We implement appropriate security measures to protect your data.
            However, no method of transmission is 100% secure. We encourage safe
            practices such as using strong passwords.
          </p>

          <h3 className="text-2xl font-semibold mb-4">11. External Links</h3>
          <p className="mb-6">
            Some of our content may link to third-party sites or platforms. We
            are not responsible for their privacy practices and recommend
            reviewing their policies.
          </p>

          <h3 className="text-2xl font-semibold mb-4">12. Data Retention</h3>
          <p className="mb-6">
            We retain data as long as it is necessary for program operations or
            compliance. You can request deletion of your data at any time.
          </p>

          <h3 className="text-2xl font-semibold mb-4">13. Policy Updates</h3>
          <p className="mb-6">
            We may revise this policy occasionally. Changes will be posted on
            this page with the latest revision date.
          </p>

          <h3 className="text-2xl font-semibold mb-4">14. Contact Us</h3>
          <p className="mb-6">
            For questions or requests regarding your personal data, please
            contact us at:
            <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@coderina.org"
              className="hover:text-gray-300"
            >
              hello@coderina.org
            </a>
          </p>

          <p className="text-sm text-center font-semibold mt-6">
            This Privacy Policy is effective as of May 8, 2020.
          </p>
        </section>
      </div>
</div>
      {/* downside */}
      {generalContents.map((content, index) => {
        // Define background styles based on content
        const bgStyle = content.bgImage
          ? { backgroundImage: `url(${content.bgImage})` }
          : { backgroundColor: content.bgColor || "" }; // Fallback to a default color

        return (
          <div
            key={index}
            className="w-full"
            style={{
              ...bgStyle,
              backgroundSize: "cover",
            }}
          >
            <div className="px-2 max-w-[80rem] mx-auto lg:gap-y-[4rem]">
              {content.section}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Privacy;
