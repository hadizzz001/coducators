'use client';

import { useState } from "react";
import { sendEmail } from "../api/sendEmail2/sendEmail2";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";

const WorkWithUs = () => {
  const [inputs, setInputs] = useState({
    organizationName: "",
    contactPerson: "",
    phone: "",
    email: "",
    website: "",
    location: "",
    preferredDays: "",
    preferredTimes: "",
    startDate: "",
    duration: "",
    sessions: {
      robotics: false,
      coding: false,
      ai: false,
      gameDesign: false,
      digitalArt: false,
      other: "",
    },
    targetAgeGroup: "",
    studentCount: "",
    hasRooms: "",
    ownDevices: "",
    wifiAccess: "",
    needEquipment: "",
    additionalNotes: "",
  });

  const [messageStatus, setMessageStatus] = useState<null | { success: boolean; message: string }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;

    if (name in inputs.sessions) {
      setInputs((prev) => ({
        ...prev,
        sessions: {
          ...prev.sessions,
          [name]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(inputs).forEach(([key, value]) => {
      if (key === "sessions") {
        Object.entries(value).forEach(([session, selected]) => {
          if (session === "other") {
            formData.append("sessionOther", selected as string);
          } else if (selected) {
            formData.append("sessions[]", session);
          }
        });
      } else {
        formData.append(key, value as string);
      }
    });







    const payload: Record<string, any> = {};

    // Loop through all inputs
    Object.entries(inputs).forEach(([key, value]) => {
      if (key === "sessions") {
        const selectedSessions: string[] = [];

        Object.entries(value).forEach(([session, selected]) => {
          if (session === "other") {
            payload.sessionOther = selected;
          } else if (selected) {
            selectedSessions.push(session);
          }
        });

        payload.sessions = selectedSessions;
      } else {
        payload[key] = value;
      }
    });








    try {
      const res = await fetch('/api/coll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });



    } catch (err) {
      console.error(err);
    }






    const result = await sendEmail(formData);
    setMessageStatus(result);

    if (result.success) {
      setInputs({
        organizationName: "",
        contactPerson: "",
        phone: "",
        email: "",
        website: "",
        location: "",
        preferredDays: "",
        preferredTimes: "",
        startDate: "",
        duration: "",
        sessions: {
          robotics: false,
          coding: false,
          ai: false,
          gameDesign: false,
          digitalArt: false,
          other: "",
        },
        targetAgeGroup: "",
        studentCount: "",
        hasRooms: "",
        ownDevices: "",
        wifiAccess: "",
        needEquipment: "",
        additionalNotes: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="py-20 bg-coducators-lightgray">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Coducators – Collaboration Request Form"
            subtitle="Submit your request for partnership and we’ll get in touch."
            color="blue"
          />

          <form className="space-y-6 bg-white p-8 rounded-2xl shadow-md" onSubmit={handleSubmit}>
            {/* 1. Organization Information */}
            <h3 className="text-xl font-semibold text-gray-800">1. Organization Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organizationName" className="block text-gray-700 mb-2">Organization Name</label>
                <input
                  type="text"
                  name="organizationName"
                  id="organizationName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="Organization Name"
                  onChange={handleChange}
                  value={inputs.organizationName}
                  required
                />
              </div>
              <div>
                <label htmlFor="contactPerson" className="block text-gray-700 mb-2">Contact Person Full Name</label>
                <input
                  type="text"
                  name="contactPerson"
                  id="contactPerson"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="Contact Person Full Name"
                  onChange={handleChange}
                  value={inputs.contactPerson}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  value={inputs.phone}
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
                  placeholder="Email Address"
                  onChange={handleChange}
                  value={inputs.email}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="website" className="block text-gray-700 mb-2">Website or Social Media (optional)</label>
                <input
                  type="text"
                  name="website"
                  id="website"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="e.g., Instagram handle, website URL"
                  onChange={handleChange}
                  value={inputs.website}
                />
              </div>
            </div>

            {/* 2. Location & Timing */}
            <h3 className="text-xl font-semibold text-gray-800 mt-6">2. Location & Timing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-gray-700 mb-2">Location of Collaboration (City/Area)</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  onChange={handleChange}
                  value={inputs.location}
                  required
                />
              </div>
              <div>
                <label htmlFor="preferredDays" className="block text-gray-700 mb-2">Preferred Days</label>
                <input
                  type="text"
                  name="preferredDays"
                  id="preferredDays"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="e.g., Monday, Thursday"
                  onChange={handleChange}
                  value={inputs.preferredDays}
                  required
                />
              </div>
              <div>
                <label htmlFor="preferredTimes" className="block text-gray-700 mb-2">Preferred Times</label>
                <input
                  type="text"
                  name="preferredTimes"
                  id="preferredTimes"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="e.g., Morning, Afternoon"
                  onChange={handleChange}
                  value={inputs.preferredTimes}
                  required
                />
              </div>
              <div>
                <label htmlFor="startDate" className="block text-gray-700 mb-2">Expected Start Date</label>
                <input
                  type="text"
                  name="startDate"
                  id="startDate"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  onChange={handleChange}
                  value={inputs.startDate}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="duration" className="block text-gray-700 mb-2">Duration of Collaboration</label>
                <input
                  type="text"
                  name="duration"
                  id="duration"
                  placeholder="e.g., 1 month, all summer"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  onChange={handleChange}
                  value={inputs.duration}
                  required
                />
              </div>
            </div>


            {/* 3. Type of Collaboration */}
            <h3 className="text-xl font-semibold text-gray-800 mt-6">3. Type of Collaboration</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">What kind of sessions are you interested in?</label>
                <div className="space-y-2">
                  {[
                    { name: "robotics", label: "Robotics" },
                    { name: "coding", label: "Coding" },
                    { name: "ai", label: "AI Workshops" },
                    { name: "gameDesign", label: "Minecraft / Game Design" },
                    { name: "digitalArt", label: "Digital Art" }
                  ].map(({ name, label }) => (
                    <div key={name}>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name={name}
                          checked={inputs.sessions[name]}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {label}
                      </label>
                    </div>
                  ))}
                  <div>
                    <label className="block text-gray-700 mt-2">Other:</label>
                    <input
                      type="text"
                      name="other"
                      value={inputs.sessions.other}
                      onChange={handleChange}
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="targetAgeGroup" className="block text-gray-700 mb-2">Target Age Group(s)</label>
                <input
                  type="text"
                  name="targetAgeGroup"
                  id="targetAgeGroup"
                  value={inputs.targetAgeGroup}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                />

                <label htmlFor="studentCount" className="block text-gray-700 mt-4 mb-2">Expected Number of Students per Session</label>
                <input
                  type="text"
                  name="studentCount"
                  id="studentCount"
                  value={inputs.studentCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                />
              </div>
            </div>

            {/* 4. Logistics & Support */}
            <h3 className="text-xl font-semibold text-gray-800 mt-6">4. Logistics & Support</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: "hasRooms", label: "Do you have available rooms or labs for sessions?" },
                { name: "ownDevices", label: "Will students bring their own devices?" },
                { name: "wifiAccess", label: "Do you provide Wi-Fi access during sessions?" },
                { name: "needEquipment", label: "Do you need Coducators to bring equipment?" },
              ].map(({ name, label }) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-gray-700 mb-2">{label}</label>
                  <select
                    name={name}
                    id={name}
                    value={inputs[name]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    {name === "needEquipment" && <option value="Partially">Partially</option>}
                  </select>
                </div>
              ))}
            </div>

            {/* 5. Additional Notes */}
            <h3 className="text-xl font-semibold text-gray-800 mt-6">5. Additional Notes</h3>
            <div>
              <label htmlFor="additionalNotes" className="block text-gray-700 mb-2">Additional Comments or Notes</label>
              <textarea
                name="additionalNotes"
                id="additionalNotes"
                rows={4}
                value={inputs.additionalNotes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
              ></textarea>
            </div>


            {/* Submit Button */}
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
      </section>
      <Footer />
    </div>
  );
};

export default WorkWithUs;
