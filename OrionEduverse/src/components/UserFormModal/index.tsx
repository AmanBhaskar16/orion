// src/components/UserFormModal.tsx
import React, { useState } from "react";
import type { FormEvent } from "react";
import toast from "react-hot-toast";

interface UserFormModalProps {
  onClose: () => void;
  onSubmitSuccess: () => void;
}

const API_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/submit-user`
  : "http://localhost:4000/api/submit-user";


const UserFormModal: React.FC<UserFormModalProps> = ({
  onClose,
  onSubmitSuccess,
}) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isValid = email.trim() !== "" && role.trim() !== "";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });

      let data: any;
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit the form.");
      }

      // ✅ Success toast
      toast.success(data.message || "Successfully joined the waitlist!");
      onSubmitSuccess();
      onClose(); // close modal on success (optional)
    } catch (err) {
      // ❌ Error toast
      toast.error(
        err instanceof Error ? err.message : "An unknown error occurred."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 border border-slate-700/60 shadow-[0_0_25px_rgba(56,189,248,0.25)] p-8 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent text-center mb-6">
          Join Our Waitlist
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-800/70 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition duration-200"
              placeholder="you@email.com"
            />
          </div>

          {/* Role Select */}
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-slate-300 mb-1"
            >
              Your Role / Interest
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-800/70 text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition duration-200"
            >
              <option value="" className="bg-slate-900 text-slate-400">
                Select a Role/Interest
              </option>
              <option value="Student" className="bg-slate-900">
                Student
              </option>
              <option value="StartUp" className="bg-slate-900">
                StartUp
              </option>
              <option value="Investor" className="bg-slate-900">
                Investor
              </option>
              <option value="Mentor" className="bg-slate-900">
                Mentor
              </option>
              <option value="Accelerator" className="bg-slate-900">
                Accelerator
              </option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="submit"
              disabled={isLoading || !isValid}
              className="px-6 py-2.5 cursor-pointer rounded-xl bg-gradient-to-r from-sky-500 via-violet-500 to-pink-500 text-black font-semibold shadow-md hover:from-sky-300 hover:via-violet-300 hover:to-pink-300 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Submitting..." : "Join Waitlist"}
            </button>

            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-5 py-2.5 cursor-pointer rounded-xl border border-slate-600 bg-slate-800/60 text-slate-300 hover:bg-slate-700 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormModal;
