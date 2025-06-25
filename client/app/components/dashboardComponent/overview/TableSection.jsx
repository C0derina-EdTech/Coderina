"use client";

import { useFormContext } from "../../contexts/FormContext";
import { useRouter } from "next/navigation";

export default function TableSection() {
  const { bootCamp = [], robotics = [], loading } = useFormContext();
  const router = useRouter();

  // Combine all entries with a `formType` tag
  const allEntries = [
    ...bootCamp.map((entry) => ({ ...entry, formType: "bootcamp" })),
    ...robotics.map((entry) => ({ ...entry, formType: "robotics" })),
  ];

  // Sort by most recent
  const recentEntries = allEntries
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5); // Show only 5 recent ones

  const handleRowClick = (formType) => {
    router.push(`/admincodeboard/${formType}`);
  };

  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 overflow-x-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Registrations</h3>

      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : recentEntries.length === 0 ? (
        <p className="text-sm text-gray-500">No recent registrations.</p>
      ) : (
        <table className="min-w-full text-left text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Gender</th>
              <th className="py-2 px-4">Grade</th>
              <th className="py-2 px-4">Form Type</th>
            </tr>
          </thead>
          <tbody>
            {recentEntries.map((entry, i) => (
              <tr
                key={i}
                className="border-t text-gray-700 cursor-pointer hover:bg-gray-100 transition"
                onClick={() => handleRowClick(entry.formType)}
              >
                <td className="py-2 px-4">{entry.studentName || entry.name}</td>
                <td className="py-2 px-4">{entry.studentEmail || entry.email}</td>
                <td className="py-2 px-4">{entry.gender || "N/A"}</td>
                <td className="py-2 px-4">{entry.grade || "N/A"}</td>
                <td className="py-2 px-4 capitalize">{entry.formType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
