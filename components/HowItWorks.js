"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/card";
import { FiCheck, FiClock, FiUpload } from "react-icons/fi";
import { useTheme } from "next-themes";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const HowItWorks = () => {
  const { theme } = useTheme();

  return (
    <motion.section {...fadeIn} className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: FiUpload,
            title: "Upload",
            description: "Simply upload a photo of your medical document.",
          },
          {
            icon: FiClock,
            title: "Process",
            description: "Our AI analyzes the document in seconds.",
          },
          {
            icon: FiCheck,
            title: "Understand",
            description: "Receive a clear, easy-to-understand explanation.",
          },
        ].map((step, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardBody className="text-center">
              <step.icon className="text-4xl mb-4 mx-auto text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p
                className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                {step.description}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </motion.section>
  );
};

export default HowItWorks;
