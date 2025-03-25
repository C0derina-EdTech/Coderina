"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";

export default function FLLRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Simulating API request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white px-2 md:px-4 lg:px-16">
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">FLL Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
        <input {...register("studentName", { required: true })} placeholder="Student Name" className="w-full p-2 border rounded" />
        {errors.studentName && <p className="text-red-500">Student Name is required</p>}

        <input {...register("parentName", { required: true })} placeholder="Parent Name" className="w-full p-2 border rounded" />
        {errors.parentName && <p className="text-red-500">Parent Name is required</p>}

        <input {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Student Email" className="w-full p-2 border rounded" />
        {errors.email && <p className="text-red-500">Valid email required</p>}

        <input {...register("parentEmail", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Parent Email" className="w-full p-2 border rounded" />
        {errors.parentEmail && <p className="text-red-500">Valid email required</p>}

        <input {...register("age", { required: true, min: 3, max: 18 })} type="number" placeholder="Age" className="w-full p-2 border rounded" />
        {errors.age && <p className="text-red-500">Age must be between 3-18</p>}

        <input {...register("class", { required: true })} placeholder="Class" className="w-full p-2 border rounded" />
        {errors.class && <p className="text-red-500">Class is required</p>}

        <fieldset className="border p-2 rounded">
          <legend className="text-sm font-semibold">Will you be able to make it to sessions every Saturdays?</legend>
          <label className="inline-flex items-center space-x-2 mr-4">
            <input {...register("sessions", { required: true })} type="radio" value="Yes" />
            <span>Yes</span>
          </label>
          <label className="inline-flex items-center space-x-2">
            <input {...register("sessions", { required: true })} type="radio" value="No" />
            <span>No</span>
          </label>
        </fieldset>
        {errors.sessions && <p className="text-red-500">Session selection required</p>}

        <fieldset className="border p-2 rounded">
          <legend className="text-sm font-semibold">Gender</legend>
          <label className="inline-flex items-center space-x-2 mr-4">
            <input {...register("gender", { required: true })} type="radio" value="Male" />
            <span>Male</span>
          </label>
          <label className="inline-flex items-center space-x-2">
            <input {...register("gender", { required: true })} type="radio" value="Female" />
            <span>Female</span>
          </label>
        </fieldset>
        {errors.gender && <p className="text-red-500">Gender selection required</p>}

        <fieldset className="border p-2 rounded">
          <legend className="text-sm font-semibold">What kind of device do you have</legend>
          <label className="inline-flex items-center space-x-2 mr-4">
            <input {...register("device", { required: true })} type="radio" value="Laptop" />
            <span>Laptop</span>
          </label>
          <label className="inline-flex items-center space-x-2 mr-4">
            <input {...register("device", { required: true })} type="radio" value="iPad" />
            <span>iPad</span>
          </label>
          <label className="inline-flex items-center space-x-2">
            <input {...register("device", { required: true })} type="radio" value="Tablet" />
            <span>Tablet</span>
          </label>
        </fieldset>
        {errors.device && <p className="text-red-500">Device selection required</p>}

        <input {...register("phone", { required: true, pattern: /^\+?[1-9]\d{1,14}$/ })} placeholder="Phone Number" className="w-full p-2 border rounded" />
        {errors.phone && <p className="text-red-500">Valid phone number required</p>}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded flex items-center justify-center">
          {loading ? <Loader2 className="animate-spin" /> : "Submit"}
        </button>
      </form>
    </div>
    </div>
  );
}
