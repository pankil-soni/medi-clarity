"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { FiCheck, FiShield, FiClock, FiUpload } from "react-icons/fi";
import Link from "next/link";
import HowItWorks from "@/components/HowItWorks";
import { useTheme } from "next-themes";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const About = () => {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section {...fadeIn} className="mb-16">
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-br from-violet-400 to-purple-400 text-transparent bg-clip-text">
          About MediClarity
        </h1>
        <p
          className={`text-xl text-center max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          MediClarity is an innovative app designed to bridge the gap between
          complex medical documents and patient understanding. Our mission is to
          empower patients by providing clear, accessible interpretations of
          prescriptions and medical reports.
        </p>
      </motion.section>

      <HowItWorks />

      <motion.section {...fadeIn} className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: FiShield,
              title: "Privacy First",
              description:
                "Your data is never stored, ensuring your medical information remains confidential.",
            },
            {
              icon: FiClock,
              title: "Instant Results",
              description:
                "Get explanations in seconds, saving you time and reducing anxiety.",
            },
            {
              icon: FiCheck,
              title: "High Accuracy",
              description:
                "Our advanced AI is trained on a vast database of medical terminology and handwriting styles.",
            },
            {
              icon: FiUpload,
              title: "Easy to Use",
              description:
                "Intuitive interface makes it simple for anyone to upload and analyze documents.",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-violet-400 to-purple-400 text-white"
            >
              <CardBody>
                <feature.icon className="text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeIn} className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Example Results</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Prescription Interpretation",
              image:
                "https://live.staticflickr.com/5256/5429636987_5f45004f62_z.jpg",
            },
            {
              title: "Lab Report Analysis",
              image:
                "https://images.drlogy.com/assets/uploads/lab/image/cbc-absolute-count-test-report-format-example-sample-template-drlogy-lab-report.webp",
            },
          ].map((example, index) => (
            <Card key={index} className="shadow-lg">
              <CardBody>
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-64 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                <p
                  className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  This is an example of MediClarity's {" "}
                  {example.title.toLowerCase()}. Our AI provides clear
                  explanations of dosages, medical terms, and next steps.
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeIn} className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose MediClarity?
        </h2>
        <div className="p-8 rounded-lg">
          <ul
            className={`list-disc pl-6 space-y-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            <li>
              Empowers patients to take control of their health information
            </li>
            <li>Reduces misunderstandings and improves medication adherence</li>
            <li>Saves time for both patients and healthcare providers</li>
            <li>Accessible anytime, anywhere - perfect for quick reference</li>
            <li>
              Continually updated with the latest medical terminology and
              practices
            </li>
            <li>
              Helps bridge communication gaps in multilingual healthcare
              settings
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        {...fadeIn}
        className={`mb-16 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Commitment to Privacy
        </h2>
        <p className="text-lg mb-6">
          At MediClarity, we understand the sensitive nature of medical
          information. That's why we've implemented state-of-the-art security
          measures to ensure your data remains private and secure:
        </p>
        <ul className={`list-disc pl-6 space-y-4`}>
          <li>End-to-end encryption for all uploaded documents</li>
          <li>No storage of analyzed documents or results</li>
          <li>Regular security audits and updates</li>
        </ul>
        <p className="text-lg mt-6">
          Your trust is our top priority, and we're committed to maintaining the
          highest standards of data protection.
        </p>
      </motion.section>

      <motion.section
        {...fadeIn}
        className={`mb-16 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Future Developments
        </h2>
        <p className={`text-lg mb-6 `}>
          We're constantly working to improve MediClarity and expand its
          capabilities. Some exciting features on our roadmap include:
        </p>
        <ul className={`list-disc pl-6 space-y-4`}>
          <li>Integration with electronic health records (EHR) systems</li>
          <li>Multi-language support for global accessibility</li>
          <li>Personalized health insights based on analyzed documents</li>
          <li>
            Collaboration tools for sharing results with healthcare providers
          </li>
        </ul>
        <p className="text-lg mt-6">
          Stay tuned for these upcoming features that will make MediClarity an
          even more powerful tool for your health management.
        </p>
      </motion.section>

      <motion.div {...fadeIn} className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <Button
          as={Link}
          href="/upload"
          className="bg-gradient-to-br from-violet-400 to-purple-400 text-white hover:bg-purple-700 transition-colors text-lg px-8 py-4"
        >
          Try MediClarity Now
        </Button>
      </motion.div>
    </div>
  );
};

export default About;
