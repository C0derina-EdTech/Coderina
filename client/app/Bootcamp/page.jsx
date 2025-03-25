"use client";
import { useState, useCallback } from "react";
import { toast, Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { CldUploadWidget } from "next-cloudinary";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

const BootcampForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    parentEmail: "",
    age: "",
    program: "",
    grade: "",
    learningMode: "",
    gender: "",
    address: "",
    additionalInfo: "",
    phone: "",
    paymentProof: "",
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUploadSuccess = (result) => {
    if (result.event === "success") {
      setFormData({ ...formData, paymentProof: result.info.secure_url });
      toast.success("Payment proof uploaded successfully!");
    } else {
      toast.error("Failed to upload image. Please try again.");
    }
  };

  const uploadToCloudinary = async (file) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.secure_url) {
        setFormData((prevData) => ({
          ...prevData,
          paymentProof: data.secure_url,
        }));
        toast.success("Payment proof uploaded successfully!");
      } else {
        toast.error("Failed to upload image. Please try again.");
      }
    } catch (error) {
      toast.error("Upload failed");
      console.error("Upload Error:", error);
    }
    setUploading(false);
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      uploadToCloudinary(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Submitting...");

    try {
      const response = await fetch("/api/boot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast.success("Registration Successful!", { id: toastId });
      setFormData({
        studentName: "",
        parentName: "",
        parentEmail: "",
        age: "",
        program: "",
        grade: "",
        learningMode: "",
        gender: "",
        address: "",
        additionalInfo: "",
        phone: "",
        paymentProof: "",
      });
    } catch (error) {
      toast.error("Error submitting form", { id: toastId });
    }

    setLoading(false);
  };

  return (
    <div className="">
      <Toaster />

      <div className="px-2 md:px-4 lg:px-20 py-8 grid md:grid-cols-2 gap-8 max-w-[100rem] mx-auto ">
        <div className="max-w-md py-2 md:h-fit md:sticky md:top-[7rem] ">
          <h4 className="font-extrabold text-xl lg:text-3xl text-[#0a5d23] mb-2">
            Bootcamp Registration
          </h4>

          <p className="text-gray-700 font-medium mb-4">
            📅 <strong>April 2nd - 17th, 2025</strong> | 🕘 Monday-Wednesday |
            ⏰ 11AM - 1PM
          </p>

          <div className="bg-[#f3fdf6] border-l-4 border-[#0a5d23] p-5 rounded-md shadow-md">
            <p className="text-gray-800 font-medium leading-relaxed">
              🚀 Register your child for our exciting{" "}
              <strong>Easter Bootcamp!</strong>
              We offer both{" "}
              <span className="text-[#0a5d23] font-semibold">physical</span> and
              <span className="text-[#0a5d23] font-semibold">
                {" "}
                virtual
              </span>{" "}
              classes in:
            </p>

            <ul className="mt-3 space-y-1 text-gray-800 list-disc list-inside">
              <li>Python/Scratch Programming</li>
              <li>App Development</li>
              <li>Web Design</li>
              <li>Graphics Design</li>
            </ul>

            <p className="mt-4 text-gray-900 font-semibold text-lg">
              💰 <strong>Cost:</strong> ₦30,000 per child
            </p>
          </div>

          <p className="mt-6 text-gray-700 text-base">
            🎯 Fill out the form  to register your child!
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
            {
              label: "Learning Mode",
              name: "learningMode",
              options: ["Physical", "Virtual"],
            },
            { label: "Gender", name: "gender", options: ["Male", "Female"] },
            {
              label: "Program",
              name: "program",
              options: [
                "Python/Scratch Programming",
                "Web Development",
                "App Development",
                "Web Design",
                "Graphics Design",
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
                  <option className="text-[14px]" value="">Select {label}</option>
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

          <div>
            <h2 className="text-[#0a5d23] my-7 mb-3 pb-2 border-b-2 border-gray-200">
              Payment Information
            </h2>
            <div className="bg-gray-100 mb-6  p-4 border-l-4 border-[#0a5d23] rounded-md">
              <p>
                Please complete your registration by making payment of{" "}
                <strong>₦30,000</strong> to the following bank account:
              </p>
              <div className="mt-4">
                <p>
                  <strong>Recipient`s Name:</strong> CODERINA ACADEMY
                </p>
                <p>
                  <strong>Bank:</strong> Zenith Bank
                </p>
                <p>
                  <strong>Account Number:</strong> 1216956048
                </p>
              </div>
              <p className="mt-4 italic">
                Kindly use your child`s name as payment reference.
              </p>
            </div>

            <label className="block font-medium">Payment Proof</label>
            <div
              {...getRootProps()}
              className={`w-full p-4 border-2 border-dashed ${
                isDragActive ? "border-yellow-500" : "border-gray-300"
              } rounded cursor-pointer flex items-center justify-center`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-yellow-500">Drop the file here...</p>
              ) : (
                <p className="text-gray-500">
                  Drag & Drop an image here or click to select
                </p>
              )}
            </div>

            {uploading && <p className="text-yellow-500">Uploading...</p>}

            {formData.paymentProof && (
              <Image
                key={formData.paymentProof}
                src={formData.paymentProof}
                alt="Payment Proof"
                width={300}
                height={200}
                className="mt-2 w-full rounded shadow-md"
              />
            )}
          </div>

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

export default BootcampForm;
