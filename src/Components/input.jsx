import React, { useState } from "react";

const HealthInputCard = ({ setShow }) => {
  const [symptoms, setSymptoms] = useState([]);
  const [temperature, setTemperature] = useState(98);
  const [bp, setBP] = useState(120);

  const symptomOptions = ["Headache", "Fever", "Tiredness", "Cough", "Body Pain"];

  const toggleSymptom = (symptom) => {
    setSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", { symptoms, temperature, bp });
    setShow(false); // Hide the input card
  };

  return (
    <div className="w-[80vw] md:w-[50vw] h-auto bg-neutral-900 text-white p-6 rounded-4xl shadow-2xl flex flex-col gap-6 relative">
      {/* Close Button */}
      <button
        onClick={() => setShow(false)}
        className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500 transition-all"
      >
        ✖
      </button>

      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-amber-500">Health Checkup</h2>

      {/* Checkboxes */}
      <div className="flex flex-col gap-4">
        {symptomOptions.map((symptom, index) => (
          <label key={index} className="flex items-center gap-3 cursor-pointer hover:text-amber-400 transition-all">
            <input
              type="checkbox"
              className="w-5 h-5 accent-amber-500"
              checked={symptoms.includes(symptom)}
              onChange={() => toggleSymptom(symptom)}
            />
            <span className="text-lg">{symptom}</span>
          </label>
        ))}
      </div>

      {/* Temperature Slider */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold text-amber-400">
          Temperature: {temperature}°F
        </label>
        <input
          type="range"
          min="95"
          max="105"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          className="w-full accent-amber-500 cursor-pointer"
        />
      </div>

      {/* Blood Pressure Slider */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-semibold text-amber-400">
          Blood Pressure: {bp} mmHg
        </label>
        <input
          type="range"
          min="90"
          max="160"
          value={bp}
          onChange={(e) => setBP(e.target.value)}
          className="w-full accent-amber-500 cursor-pointer"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-amber-500 text-xl font-bold rounded-3xl hover:bg-amber-600 transition-all"
      >
        Submit
      </button>
    </div>
  );
};

export default HealthInputCard;
