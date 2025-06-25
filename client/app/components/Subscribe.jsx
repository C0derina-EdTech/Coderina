import React from "react";
import { useFormContext } from "./contexts/FormContext";

const Subscribe = () => {
  const {
    email,
    setEmail,
    name,
    setName,
    handleSubscribe,
    loading,
    message,
    isSuccess,
    agreed,
    setAgreed,
  } = useFormContext();


  return (
    <div className="w-full relative px-2 md:px-4 bg-cover bg-center py-16 h-[70vh] lg:h-[80vh] 2xl:h-[70vh] flex flex-col items-center justify-center">
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div> */}

      {/* Content */}
      <div className="lg:max-w-[50rem] 2xl:max-w-[70rem] mx-auto  relative z-10 flex items-center justify-center max-auto bg-background w-full">
        <div className="bg-background text-color bg-opacity-90 p-10  md:p-20 2xl:p-24  space-y-6  ">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-semibold text-color">
              Subscribe to Our Newsletter
            </h3>
            <p className=" text-sm">
              Use the Newsletter Block below to input email addresses.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full">
            <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-start md:items-start  md:justify-start">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="py-3 px-4 border text-[14px] text-black sm:text-[14px] border-gray-300 w-full md:w-64  outline-none focus:ring-0 focus:border-transparent"
              />

              <button
                type="submit"
                disabled={loading || !agreed}
                className={`px-6 py-3 bg-color text-background w-full md:w-40 text-[15px] font-semibold transition-all ${
                  (!agreed || loading) ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
                }`}
              >
                {loading ? "Subscribing..." : "SUBSCRIBE"}
              </button>
            </div>

            <div>
              {message && (
                <span
                  className={`text-[13px] mt-2 ${
                    isSuccess ? "text-green-300" : "text-red-300"
                  }`}
                >
                  {message}
                </span>
              )}
            </div>

            <div className="flex items-center justify-center mt-3 gap-2 text-sm ">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 accent-black border-2 border-color bg-color checked:border-background rounded-sm transition duration-200"
              />
              <p>By subscribing, you agree to receive email updates from us.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
