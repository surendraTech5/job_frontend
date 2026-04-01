import React, { useState } from "react";
import axios from "axios";
import { FiUploadCloud, FiX } from "react-icons/fi";

const ResumeUploadModal = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a resume file");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);
      setError("");

      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/resume/upload`,
        formData,
        { withCredentials: true }
      );

      onClose();
    } catch (err) {
      setError("Upload failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
        >
          <FiX size={20} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Upload Your Resume
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Upload your updated resume to apply for jobs easily.
        </p>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-500 transition cursor-pointer">
          <label className="flex flex-col items-center gap-2 cursor-pointer">
            <FiUploadCloud className="text-blue-600 text-4xl" />
            <span className="text-sm text-gray-600">
              {file ? file.name : "Click to select resume"}
            </span>
            <span className="text-xs text-gray-400">
              PDF, DOC, DOCX (Max 5MB)
            </span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                setFile(e.target.files[0]);
                setError("");
              }}
              className="hidden"
            />
          </label>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mt-3">{error}</p>
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black transition"
          >
            Cancel
          </button>

          <button
            onClick={handleUpload}
            disabled={loading}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-md transition flex items-center gap-2"
          >
            {loading && (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {loading ? "Uploading..." : "Upload Resume"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadModal;