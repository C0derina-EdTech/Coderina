"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[90rem] mx-auto px-2 md:px-4 lg:px-8 2xl:px-10">
      <div className="grid lg:grid-cols-2 gap-16 xl:gap-28">
        {/* Info */}
        <div data-aos="fade-right">
          <p className="thin-line text-xs uppercase tracking-[0.22em] text-red-700 font-sans font-medium mb-5">
            Get In Touch
          </p>
          <h2 className="heading text-4xl md:text-5xl font-light leading-tight mb-6">
            Ready to Make
            <br />
            <em className="font-semibold">Your Move?</em>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed font-sans font-light mb-10 max-w-sm">
            Reach out to the Checkmate team to learn how we can bring chess to
            your school, community, or event.
          </p>
          <div className="space-y-5">
            {[
              { label: "Email", value: "checkmate@coderina.org" },
              { label: "Phone", value: "+234 909 330 7353" },
              { label: "Location", value: "Lagos & Abuja, Nigeria" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 items-start">
                <span className="text-xs uppercase tracking-widest text-red-700 font-sans font-medium w-20 pt-0.5">
                  {c.label}
                </span>
                <span className="text-gray-700 text-sm font-sans">
                  {c.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div data-aos="fade-left" data-aos-delay="100">
          <div className="space-y-5">
            {[
              {
                id: "name",
                label: "Full Name",
                type: "text",
                placeholder: "Ada Okonkwo",
              },
              {
                id: "email",
                label: "Email Address",
                type: "email",
                placeholder: "ada@school.edu.ng",
              },
              {
                id: "school",
                label: "School / Organisation",
                type: "text",
                placeholder: "Kings College Lagos",
              },
            ].map((f) => (
              <div key={f.id}>
                <label
                  htmlFor={f.id}
                  className="block text-xs uppercase tracking-widest text-gray-500 font-sans font-medium mb-2"
                >
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm font-sans focus:outline-none focus:border-red-700 transition-colors placeholder:text-gray-300"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-widest text-gray-500 font-sans font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us how we can help..."
                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm font-sans focus:outline-none focus:border-red-700 transition-colors placeholder:text-gray-300 resize-none"
              />
            </div>
            <button
              type="button"
              className="btn-red w-full py-3.5 rounded-sm text-sm uppercase tracking-widest font-sans font-medium"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
