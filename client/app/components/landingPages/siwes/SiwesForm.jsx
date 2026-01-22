"use client";
import React, { useState } from "react";
import { Send, Loader } from "lucide-react";
import { useFormContext } from "../../contexts/FormContext";

export default function SiwesForm() {
  const {
    siwesSubmitting,
    siwesError,
    siwesSuccess,
    siwesData,
    handleSiwesChange,
    submitSiwesApplication,
  } = useFormContext();

  const [touched, setTouched] = useState({});

  const requiredFields = [
    "fullName",
    "email",
    "phone",
    "institution",
    "course",
    "level",
    "matricNumber",
    "siwesDuration",
    "department",
    "whyCoderina",
  ];

  const markTouched = (name) =>
    setTouched((prev) => ({ ...prev, [name]: true }));

  const isInvalid = (name) =>
    touched[name] && !siwesData[name]?.toString().trim();

  const inputClass = (name) =>
    `w-full px-4 py-3 rounded-lg border ${
      isInvalid(name) ? "border-red-500 border-[1px]" : "border-gray-50"
    } outline-none bg-white transition`;

  const handleSubmit = () => {
    const newTouched = {};
    requiredFields.forEach((f) => (newTouched[f] = true));
    setTouched(newTouched);

    if (requiredFields.some((f) => !siwesData[f])) return;

    // merge country + city → address
    const address = [siwesData.city, siwesData.country]
      .filter(Boolean)
      .join(", ");

    handleSiwesChange("address", address);
    submitSiwesApplication();
  };

  return (
    <section className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto max-w-[100rem]">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <header className="mb-10 text-center">
            <h1 className="text-3xl font-semibold text-gray-900">
              SIWES Internship Application
            </h1>
            <p className="mt-2 text-gray-500">
              Apply to intern with Coderina Innovation Team
            </p>
          </header>

          {/* Form */}
          <div className="space-y-8 bg-white">
            {/* Personal */}
            <div className="space-y-4">
              <input
                placeholder="Full Name *"
                value={siwesData.fullName}
                onChange={(e) =>
                  handleSiwesChange("fullName", e.target.value)
                }
                onBlur={() => markTouched("fullName")}
                className={inputClass("fullName")}
              />

              <input
                placeholder="Email Address *"
                type="email"
                value={siwesData.email}
                onChange={(e) =>
                  handleSiwesChange("email", e.target.value)
                }
                onBlur={() => markTouched("email")}
                className={inputClass("email")}
              />

              <input
                placeholder="Phone Number *"
                value={siwesData.phone}
                onChange={(e) =>
                  handleSiwesChange("phone", e.target.value)
                }
                onBlur={() => markTouched("phone")}
                className={inputClass("phone")}
              />
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                placeholder="City"
                value={siwesData.city || ""}
                onChange={(e) =>
                  handleSiwesChange("city", e.target.value)
                }
                className={inputClass("city")}
              />
              <input
                placeholder="Country"
                value={siwesData.country || ""}
                onChange={(e) =>
                  handleSiwesChange("country", e.target.value)
                }
                className={inputClass("country")}
              />
            </div>

            {/* Academic */}
            <div className="space-y-4">
              <input
                placeholder="Institution *"
                value={siwesData.institution}
                onChange={(e) =>
                  handleSiwesChange("institution", e.target.value)
                }
                onBlur={() => markTouched("institution")}
                className={inputClass("institution")}
              />

              <input
                placeholder="Course of Study *"
                value={siwesData.course}
                onChange={(e) =>
                  handleSiwesChange("course", e.target.value)
                }
                onBlur={() => markTouched("course")}
                className={inputClass("course")}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  placeholder="Level *"
                  value={siwesData.level}
                  onChange={(e) =>
                    handleSiwesChange("level", e.target.value)
                  }
                  onBlur={() => markTouched("level")}
                  className={inputClass("level")}
                />

                <input
                  placeholder="Matric Number *"
                  value={siwesData.matricNumber}
                  onChange={(e) =>
                    handleSiwesChange("matricNumber", e.target.value)
                  }
                  onBlur={() => markTouched("matricNumber")}
                  className={inputClass("matricNumber")}
                />
              </div>
            </div>

            {/* SIWES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                value={siwesData.siwesDuration}
                onChange={(e) =>
                  handleSiwesChange("siwesDuration", e.target.value)
                }
                onBlur={() => markTouched("siwesDuration")}
                className={inputClass("siwesDuration")}
              >
                <option value="">SIWES Duration *</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="1 Year">1 Year</option>
              </select>

              <select
                value={siwesData.department}
                onChange={(e) =>
                  handleSiwesChange("department", e.target.value)
                }
                onBlur={() => markTouched("department")}
                className={inputClass("department")}
              >
                <option value="">Preferred Department *</option>
                <option value="Software Development">Software Development</option>
                <option value="Web Development">Web Development</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Data">Data</option>
                <option value="AI">AI / ML</option>
              </select>
            </div>

            {/* Motivation */}
            <textarea
              rows={4}
              placeholder="Why do you want to intern at Coderina? *"
              value={siwesData.whyCoderina}
              onChange={(e) =>
                handleSiwesChange("whyCoderina", e.target.value)
              }
              onBlur={() => markTouched("whyCoderina")}
              className={inputClass("whyCoderina")}
            />

            {/* Feedback */}
            {siwesError && (
              <p className="text-sm text-red-600">{siwesError}</p>
            )}
            {siwesSuccess && (
              <p className="text-sm text-green-600">{siwesSuccess}</p>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={siwesSubmitting}
              className="w-full rounded-lg bg-gray-900 py-3 text-white font-medium flex items-center justify-center gap-2 transition hover:bg-black disabled:opacity-60"
            >
              {siwesSubmitting ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Submit Application
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
