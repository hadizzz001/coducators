"use client";

import { useState } from "react";
import { sendEmail } from "../api/sendEmail1/sendEmail1";
import Upload from "../components/Upload"; // make sure this is correct
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";

const WorkWithUs = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [cvUrl, setCvUrl] = useState("");
  const [messageStatus, setMessageStatus] = useState<null | { success: boolean; message: string }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const cleanValue = name === "phone" ? value.replace(/[^0-9]/g, "") : value;
    setInputs((prev) => ({ ...prev, [name]: cleanValue }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("email", inputs.email);
    formData.append("phone", inputs.phone);
    formData.append("message", inputs.message);
    formData.append("cvUrl", cvUrl);

    const result = await sendEmail(formData);
    setMessageStatus(result);

    if (result.success) {
      setInputs({ name: "", email: "", phone: "", message: "" });
      setCvUrl("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="py-20 bg-coducators-lightgray">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Work With Us"
            subtitle="Submit your job application and we’ll get in touch."
            color="blue"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply Now</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300"
                      placeholder="John Doe"
                      onChange={handleChange}
                      value={inputs.name}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300"
                      placeholder="john@example.com"
                      onChange={handleChange}
                      value={inputs.email}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="Phone Number"
                    value={inputs.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Why do you want to join us?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    placeholder="Tell us a bit about yourself..."
                    value={inputs.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Upload Your CV</label>
                  <Upload onFileUpload={(urls) => setCvUrl(urls[0])} />
                  {cvUrl && <p className="text-sm text-green-600 mt-2">File uploaded successfully.</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-coducators-blue text-white rounded-lg font-semibold shadow-md hover:bg-blue-700"
                >
                  Submit Application
                </button>
              </form>

              {messageStatus && (
                <p className={`mt-4 text-sm font-semibold ${messageStatus.success ? "text-green-600" : "text-red-600"}`}>
                  {messageStatus.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkWithUs;
