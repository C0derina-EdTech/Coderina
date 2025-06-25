"use client";
import { useState} from "react";
import { toast, Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

import { useTheme } from "../contexts/ThemeContext";

const Fll = () => {
    const { handleChange,  handleSubmit , loading , formData} = useTheme();

  return (
    <div className="">
     

      <div className="px-2 md:px-4 lg:px-20 py-8 grid md:grid-cols-2 gap-8 max-w-[100rem] mx-auto ">
        <div className="max-w-md py-2 md:h-fit md:sticky md:top-[3rem] ">
          <h4 className="font-extrabold text-xl lg:text-3xl text-[#0a5d23] mb-2">
           Registration For Robotics Team
          </h4>

          <p className="text-gray-700 font-medium mb-4">
            📅 <strong>Ongoing</strong> | 🕘 Saturdays |
            ⏰ 10AM - 12PM
          </p>

          <div className="bg-[#f3fdf6] border-l-4 border-[#0a5d23] p-5 space-y-3 rounded-md shadow-md">
            <p className="text-gray-800 font-medium leading-relaxed">
              🚀 Register your child for our exciting
             </p>
             <h2> FIRST LEGO LEAQUE!</h2>
           
          </div>

          <p className="mt-6 text-gray-700 text-base">
            🎯 Fill out the form  to register 
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
          {[
            {
              label: "Name",
              name: "studentName",
              type: "text",
              placeholder: "Enter student's full name",
            },
            {
              label: "Email",
              name: "studentEmail",
              type: "email",
              placeholder: "Enter student's Email",
            },
            {
              label: "Class/Grade",
              name: "grade",
              type: "text",
              placeholder: "Enter student's grade",
            },
            {
              label: "Age",
              name: "age",
              options: [
                "5-7 years",
                "8-10 years",
                "11-13 years",
                "14-16 years",
              ],
            },
           
            { label: "Gender", name: "gender", options: ["Male", "Female"] },
            {
              label: "Will you be able to make it to sessions on every Saturdays?",
              name: "program",
              options: [
                "Yes",
                "No",
               
              ],
            },
            {
              label: "Do you have a laptop,ipad or Tablet?",
              name: "device",
              options: [
                "Ipad",
                "Laptop",
                "Tablet",
                
              ],
            },
          ].map(({ label, name, type, placeholder, options }) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="block text-[16px]  font-medium text-[#0a5d23]"
              >
                {label}
              </label>
              {options ? (
                <select
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full  p-2 border rounded focus:ring focus:ring-yellow-300"
                >
                  <option className="text-[13px]" value="">Select</option>
                  {options.map((option) => (
                    <option className="text-[15px]" key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full placeholder:text-[14px] p-2 border rounded focus:ring focus:ring-yellow-300"
                  placeholder={placeholder}
                />
              )}
            </div>
          ))}

          <h2 className="py-3 text-[#0a5d23] font-bold my-7 mb-3 pb-2 border-b-2 text-[20px] border-gray-200">
            Parent Information
          </h2>
          {[
            {
              label: "Parent Name",
              name: "parentName",
              type: "text",
              placeholder: "Enter parent's full name",
            },
            {
              label: "Parent Email",
              name: "parentEmail",
              type: "email",
              placeholder: "Enter parent's email",
            },
            {
              label: "Phone Number",
              name: "phone",
              type: "tel",
              placeholder: "Enter phone number",
            },
            {
              label: "Address",
              name: "address",
              type: "text",
              placeholder: "Enter home address",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="block text-[16px] font-medium text-[#0a5d23]"
              >
                {label}
              </label>
              <input
                type={type}
                name={name}
                id={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:ring focus:ring-yellow-300"
                // placeholder={placeholder}
              />
            </div>
          ))}

         

          <button
            type="submit"
            className="w-full p-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Fll;
