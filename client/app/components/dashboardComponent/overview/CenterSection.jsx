"use client";

import { useFormContext } from "../../contexts/FormContext";
import { useRouter } from "next/navigation";
import { FaEnvelopeOpenText } from "react-icons/fa";
import Link from "next/link";

export default function CenterSection() {
  const { messages = [], loading } = useFormContext();
  const router = useRouter();

  const recentMessages = messages
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <FaEnvelopeOpenText className="text-[#321414]" />
        Recent Messages
      </h3>

      {loading ? (
        <div className="space-y-4">
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="flex items-start gap-2 animate-pulse">
                <div className="w-5 h-5 bg-gray-300 rounded-full mt-1" />
                <div className="flex flex-col space-y-1 w-full">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-100 rounded w-1/2" />
                </div>
              </div>
            ))}
        </div>
      ) : recentMessages.length === 0 ? (
        <p className="text-sm text-gray-500">No messages yet.</p>
      ) : (
        <ul className="space-y-4 text-sm text-gray-700">
          {recentMessages.map((msg) => {
            const messageText = msg.message || "";
            const truncated =
              messageText.split(" ").length > 20
                ? messageText.split(" ").slice(0, 15).join(" ") + "..."
                : messageText;

            const senderName =
              msg.name?.split(" ")[0] || msg.email?.split("@")[0];

            return (
              <li
                key={msg._id}
                className="flex items-start gap-2 hover:bg-gray-50 p-2 rounded cursor-pointer transition"
                onClick={() => router.push("/admincodeboard/messages")}
              >
                <div className="flex-shrink-0 text-[#321414]">
                  <FaEnvelopeOpenText className="w-5 h-5 mt-1" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800">
                    From {senderName}
                  </span>
                  <span className="text-gray-600 text-xs">{truncated}</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {!loading && messages.length > 5 && (
        <div className="mt-4 text-right">
          <Link
            href="/admincodeboard/messages"
            className="text-sm text-[#321414] hover:underline"
          >
            View all messages →
          </Link>
        </div>
      )}
    </div>
  );
}
