"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Loader,
  Upload,
  X,
  Check,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import { useFormContext } from "../../contexts/FormContext";
import Image from "next/image";
export default function SiwesForms() {
  const {
    siwesSubmitting,
    siwesError,
    siwesSuccess,
    siwesData,
    handleSiwesChange,
    submitSiwesApplication,
  } = useFormContext();

  const fileRefs = useRef({
    cv: null,
    siwesLetter: null,
    studentId: null,
    headshot: null,
  });

  // Keep track of touched fields for red borders
  const [touched, setTouched] = useState({});

  // List of required fields
  const requiredFields = [
    "fullName",
    "email",
    "phone",
    "institution",
    "course",
    "level",
    "siwesDuration",
    "department",
    "whyCoderina",
  ];

  const markTouched = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isInvalid = (field) => {
    return (
      touched[field] &&
      requiredFields.includes(field) &&
      !siwesData[field]?.trim()
    );
  };

  const scrollToFirstError = () => {
    for (const field of requiredFields) {
      if (!siwesData[field]?.trim()) {
        const el = document.querySelector(`[name="${field}"]`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.focus({ preventScroll: true });
        }
        break;
      }
    }
  };

  const handleSubmit = async () => {
    // Mark all required fields as touched
    const newTouched = {};
    requiredFields.forEach((f) => {
      newTouched[f] = true;
    });
    setTouched(newTouched);

    // Check if any required field is empty
    const hasError = requiredFields.some((f) => !siwesData[f]?.trim());
    if (hasError) {
      scrollToFirstError();
      return;
    }

    // Submit application
    await submitSiwesApplication();
  };

  const inputClass = (name) =>
    `w-full px-4 py-3.5 rounded-xl border text-sm ${
      isInvalid(name) ? "border-red-500 bg-red-50" : "border-gray-200 bg-white"
    } text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-gray-100 focus:ring-0`;

  const selectClass = (name) =>
    `w-full px-4 py-3.5 rounded-xl border text-sm ${
      isInvalid(name) ? "border-red-500 bg-red-50" : "border-gray-200 bg-white"
    } text-gray-900 transition-all duration-200 focus:border-gray-100 focus:ring-0 ${
      !siwesData[name] ? "text-gray-400" : "text-gray-900"
    }`;

  // Clean up object URLs for images
  useEffect(() => {
    return () => {
      ["studentId", "headshot"].forEach((field) => {
        if (siwesData[field]) URL.revokeObjectURL(siwesData[field]);
      });
    };
  }, [siwesData]);

  const handleFileChange = (field, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    handleSiwesChange(field, file);
  };

  const removeFile = (field) => {
    handleSiwesChange(field, null);
  };

  if (siwesSuccess) {
    return (
      <section className="min-h-screen px-2 sm:px-4 md:px-6 lg:px-8 py-20 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-3xl shadow-sm py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-base 2xl:text-3xl font-bold text-gray-900 mb-4">
              Application Submitted!
            </h2>
            <p className="text-gray-600 mb-8 text-xs md:text-sm 2xl:text-base">
              Thank you for applying to Coderina&apos;s SIWES program.
              We&apos;ll review your application and get back to you soon.
            </p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="px-2 sm:px-4 md:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-base md:text-xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-4">
            SIWES 2026 Internship Application
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Join Coderina Innovation Team and gain hands-on experience
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border-gray-200 p-4 md:p-8 2xl:p-12">
          <div className="space-y-10 text-sm">
            {/* Personal Information */}
            <div>
              <h2 className="text-base lg:text-xl 2xl:text-2xl font-semibold text-teal-800 mb-6 flex items-center gap-2">
                <div className="w-4 md:w-8 h-4 md:h-8 bg-teal-800 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                  1
                </div>
                Personal Information
              </h2>
              <div className="space-y-4">
                <input
                  name="fullName"
                  placeholder="Full Name *"
                  onChange={(e) =>
                    handleSiwesChange("fullName", e.target.value)
                  }
                  onBlur={() => markTouched("fullName")}
                  className={inputClass("fullName")}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="email"
                    placeholder="Email Address *"
                    type="email"
                    onChange={(e) => handleSiwesChange("email", e.target.value)}
                    onBlur={() => markTouched("email")}
                    className={inputClass("email")}
                  />
                  <input
                    name="phone"
                    placeholder="Phone Number *"
                    onChange={(e) => handleSiwesChange("phone", e.target.value)}
                    onBlur={() => markTouched("phone")}
                    className={inputClass("phone")}
                  />
                </div>

                <select
                  name="gender"
                  value={siwesData.gender}
                  onChange={(e) => handleSiwesChange("gender", e.target.value)}
                  className={selectClass("gender")}
                >
                  <option value="">Select Gender (Optional)</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  name="address"
                  placeholder="Residential Address (Optional)"
                  rows={3}
                  onChange={(e) => handleSiwesChange("address", e.target.value)}
                  className={inputClass("address")}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="state"
                    placeholder="State of Residence (Optional)"
                    value={siwesData.state}
                    onChange={(e) => handleSiwesChange("state", e.target.value)}
                    className={inputClass("state")}
                  />
                  <input
                    name="country"
                    placeholder="Country"
                    value={siwesData.country}
                    onChange={(e) =>
                      handleSiwesChange("country", e.target.value)
                    }
                    className={inputClass("country")}
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div>
              <h2 className="text-base lg:text-xl 2xl:text-2xl font-semibold text-teal-800 mb-6 flex items-center gap-2">
                <div className="w-4 md:w-8 h-4 md:h-8 bg-teal-800 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                  2
                </div>
                Academic Information
              </h2>
              <div className="space-y-4">
                <input
                  name="institution"
                  placeholder="Institution Name *"
                  value={siwesData.institution}
                  onChange={(e) =>
                    handleSiwesChange("institution", e.target.value)
                  }
                  onBlur={() => markTouched("institution")}
                  className={inputClass("institution")}
                />

                <input
                  name="course"
                  placeholder="Course of Study *"
                  value={siwesData.course}
                  onChange={(e) => handleSiwesChange("course", e.target.value)}
                  onBlur={() => markTouched("course")}
                  className={inputClass("course")}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    name="level"
                    value={siwesData.level}
                    onChange={(e) => handleSiwesChange("level", e.target.value)}
                    onBlur={() => markTouched("level")}
                    className={selectClass("level")}
                  >
                    <option value="">Current Level *</option>
                    <option value="ND">ND</option>
                    <option value="HND">HND</option>
                    <option value="200 Level">200 Level</option>
                    <option value="300 Level">300 Level</option>
                    <option value="400 Level">400 Level</option>
                    <option value="400 Level">500 Level</option>
                    <option value="400 Level">Graduate</option>
                    <option value="400 Level">others</option>
                  </select>

                  <input
                    name="matricNumber"
                    placeholder="Matriculation Number (Optional)"
                    value={siwesData.matricNumber}
                    onChange={(e) =>
                      handleSiwesChange("matricNumber", e.target.value)
                    }
                    className={inputClass("matricNumber")}
                  />
                </div>
              </div>
            </div>

            {/* Internship Details */}
            <div>
              <h2 className="text-base lg:text-xl 2xl:text-2xl font-semibold text-teal-900 mb-6 flex items-center gap-2">
                <div className="w-4 md:w-8 h-4 md:h-8 bg-teal-900 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                  3
                </div>
                Internship Details
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    name="siwesDuration"
                    value={siwesData.siwesDuration}
                    onChange={(e) =>
                      handleSiwesChange("siwesDuration", e.target.value)
                    }
                    onBlur={() => markTouched("siwesDuration")}
                    className={selectClass("siwesDuration")}
                  >
                    <option value="">SIWES Duration *</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="1 Year">1 Year</option>
                  </select>

                  <select
                    name="department"
                    value={siwesData.department}
                    onChange={(e) =>
                      handleSiwesChange("department", e.target.value)
                    }
                    onBlur={() => markTouched("department")}
                    className={selectClass("department")}
                  >
                    <option value="">Preferred Department *</option>
                    <option value="Software Development">
                      Software Development
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Data Analysis">Data Analysis</option>
                    <option value="Robotics">Robotics</option>
                    <option value="AI / Machine Learning">
                      AI / Machine Learning
                    </option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="IT Support">IT Support</option>
                    <option value="Addictive Manufacturing">Addictive Manufacturing</option>
                    <option value="others">others</option>
                  </select>
                </div>
                <input
                  name="skills"
                  placeholder="Skills you know (e.g., Python, React, Figma - Optional)"
                  value={siwesData.skills}
                  onChange={(e) => handleSiwesChange("skills", e.target.value)}
                  className={inputClass("skills")}
                />

                <textarea
                  name="experience"
                  placeholder="Previous Experience - Projects, internships, or relevant work (Optional)"
                  rows={4}
                  value={siwesData.experience}
                  onChange={(e) =>
                    handleSiwesChange("experience", e.target.value)
                  }
                  className={inputClass("experience")}
                />

                <textarea
                  name="whyCoderina"
                  placeholder="Why do you want to intern at Coderina? * (Minimum 30 characters)"
                  rows={5}
                  value={siwesData.whyCoderina}
                  onChange={(e) =>
                    handleSiwesChange("whyCoderina", e.target.value)
                  }
                  onBlur={() => markTouched("whyCoderina")}
                  className={inputClass("whyCoderina")}
                />
              </div>
            </div>

            {/* Document Uploads */}
            <div>
              <h2 className="text-base lg:text-xl 2xl:text-2xl font-semibold text-teal-900 mb-6 flex items-center gap-2">
                <div className="w-4 md:w-8 h-4 md:h-8 bg-teal-800 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                  4
                </div>
                Document Uploads
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* CV Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Curriculum Vitae (CV)
                  </label>
                  <div className="relative">
                    <input
                      ref={(el) => (fileRefs.current.cv = el)}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange("cv", e)}
                      className="hidden"
                    />
                    {siwesData.cv ? (
                      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {siwesData.cv.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {(siwesData.cv.size / 1024).toFixed(1)} KB
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFile("cv")}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => fileRefs.current.cv?.click()}
                        className="w-full border-2 border-dashed border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all bg-white"
                      >
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">
                          Upload CV
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, DOC, DOCX
                        </p>
                      </button>
                    )}
                  </div>
                </div>

                {/* SIWES Letter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SIWES Letter
                  </label>
                  <div className="relative">
                    <input
                      ref={(el) => (fileRefs.current.siwesLetter = el)}
                      type="file"
                      accept=".pdf,.jpg,.png"
                      onChange={(e) => handleFileChange("siwesLetter", e)}
                      className="hidden"
                    />
                    {siwesData.siwesLetter ? (
                      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {siwesData.siwesLetter.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {(siwesData.siwesLetter.size / 1024).toFixed(1)}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFile("siwesLetter")}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => fileRefs.current.siwesLetter?.click()}
                        className="w-full border-2 border-dashed border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all bg-white"
                      >
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">
                          Upload Letter
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, JPG, PNG
                        </p>
                      </button>
                    )}
                  </div>
                </div>

                {/* Student ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID Card
                  </label>
                  <div className="relative">
                    <input
                      ref={(el) => (fileRefs.current.studentId = el)}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange("studentId", e)}
                      className="hidden"
                    />
                    {siwesData.studentId ? (
                      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <Image
                                src={URL.createObjectURL(siwesData.studentId)}
                                alt="Student ID"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {siwesData.studentId.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {(siwesData.studentId.size / 1024).toFixed(1)}{" "}
                                KB
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFile("studentId")}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => fileRefs.current.studentId?.click()}
                        className="w-full border-2 border-dashed border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all bg-white"
                      >
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">
                          Upload ID
                        </p>
                        <p className="text-xs text-gray-500 mt-1">JPG, PNG</p>
                      </button>
                    )}
                  </div>
                </div>

                {/* Headshot */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Professional Headshot
                  </label>
                  <div className="relative">
                    <input
                      ref={(el) => (fileRefs.current.headshot = el)}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange("headshot", e)}
                      className="hidden"
                    />
                    {siwesData.headshot ? (
                      <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                              <Image
                                src={URL.createObjectURL(siwesData.headshot)}
                                alt="Headshot"
                                fill
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {siwesData.headshot.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {(siwesData.headshot.size / 1024).toFixed(1)} KB
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFile("headshot")}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => fileRefs.current.headshot?.click()}
                        className="w-full border-2 border-dashed border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all bg-white"
                      >
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">
                          Upload Photo
                        </p>
                        <p className="text-xs text-gray-500 mt-1">JPG, PNG</p>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {siwesError && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-sm text-red-600">{siwesError}</p>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={siwesSubmitting}
              className="w-full bg-teal-800 text-white rounded-xl py-4 font-semibold text-lg flex items-center justify-center gap-3 hover:bg-black transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {siwesSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Application
                </>
              )}
            </button>

            <p className="text-center text-sm text-gray-500">
              By submitting this form, you agree to our terms and conditions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
