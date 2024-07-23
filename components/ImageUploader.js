"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Progress } from "@nextui-org/progress";
import { FiUpload, FiRefreshCw } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageUploader() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setResult(null);
    setAnalyzed(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://medi-clarity-backend.onrender.com/analyze_prescription`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.text();
      setResult(data);
      setAnalyzed(true);
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  const resetAnalysis = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setAnalyzed(false);
  };

  return (
    <AnimatePresence mode="wait">
      {!analyzed ? (
        <motion.div
          key="uploader"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="w-full bg-gradient-to-br from-purple-400 to-pink-400 text-white shadow-xl">
            <CardBody>
              <h2 className="text-3xl font-bold mb-6 text-center">
                Analyze Your Medical Document
              </h2>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                  isDragActive
                    ? "border-white bg-white/20"
                    : "border-white/50 hover:border-white hover:bg-white/10"
                }`}
              >
                <input {...getInputProps()} />
                {preview ? (
                  <img
                    alt="Uploaded document"
                    className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
                    src={preview}
                  />
                ) : (
                  <div>
                    <FiUpload className="mx-auto text-5xl mb-4" />
                    <p className="text-xl">
                      {isDragActive
                        ? "Drop the file here"
                        : "Drag 'n' drop a file here, or click to select a file"}
                    </p>
                  </div>
                )}
              </div>
              {file && (
                <div className="mt-6">
                  <p className="text-sm text-white/80 mb-2">
                    Selected file: {file.name}
                  </p>
                  <Button
                    className="w-full bg-white text-purple-500 hover:bg-purple-100 transition-colors"
                    disabled={loading}
                    onClick={handleSubmit}
                  >
                    {loading ? "Analyzing..." : "Analyze Document"}
                  </Button>
                </div>
              )}
              {loading && (
                <Progress
                  isIndeterminate
                  aria-label="Analyzing..."
                  className="mt-4"
                  color="default"
                />
              )}
            </CardBody>
          </Card>
        </motion.div>
      ) : (
        <motion.div
          key="result"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="w-full bg-white shadow-xl">
            <CardBody>
              <h2 className="text-3xl font-bold mb-6 text-center text-purple-500">
                Analysis Result
              </h2>
              <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
                <ReactMarkdown className="prose max-w-none">
                  {result}
                </ReactMarkdown>
              </div>
              <Button
                className="mt-6 w-full bg-purple-500 text-white hover:bg-purple-400 transition-colors"
                onClick={resetAnalysis}
                startContent={<FiRefreshCw />}
              >
                Analyze Another Document
              </Button>
            </CardBody>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
