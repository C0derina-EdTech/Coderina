"use client";

import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext"; // adjust if needed
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { getSession } from "next-auth/react";

const SignIn = () => {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await login({ email, password });

      // Wait briefly for session to update
      const session = await getSession();
      const role = session?.user?.role;

      if (role === "admin") {
        router.push("/admincodeboard/overview");
      } else {
        router.push("/");
      }
    } catch (err) {
      setError(err.message || "Login failed");
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            disabled={submitting}
          >
            {submitting ? (
              <span className="flex justify-center items-center">
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Signing In...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

       
      </div>
    </div>
  );
};

export default SignIn;
