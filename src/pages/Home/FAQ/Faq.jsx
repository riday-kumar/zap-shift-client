import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import FaqHeading from "./FaqHeading";

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How does ZapShift work?",
      answer:
        "we have outlet in all the upazilas.Our stuff will send products very carefully. We can send product easily and very safely.",
    },
    {
      id: 2,
      question: "Is it suitable for all ages?",
      answer: "Yes. It is absolutely suitable for all.",
    },
    {
      id: 3,
      question: "Why we use ZapShift?",
      answer: "It is very easy and trustworthy",
    },
  ];

  const handleFAQ = (fid) => {
    setActiveId(activeId === fid ? null : fid);
    console.log(fid);
  };

  return (
    <div className="space-y-15">
      <FaqHeading></FaqHeading>
      <div className="space-y-5 md:w-[80%] lg:w-[60%] mx-auto">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`px-4 py-2 rounded-xl ${activeId === faq.id ? "bg-[#e6f2f3]" : "bg-white"}`}
          >
            {/* ques */}
            <div className=" flex justify-between items-center">
              <p className="font-bold text-base-100 text-[18px] capitalize">
                {faq.question}
              </p>
              <button
                className="btn bg-transparent transition delay-300 duration-300 ease-in-out"
                onClick={() => handleFAQ(faq.id)}
              >
                {activeId === faq.id ? <FaChevronDown /> : <FaChevronUp />}
              </button>
            </div>
            {/* ans */}
            <div
              className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${activeId === faq.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
        `}
            >
              <p className="text-gray-600 font-bold">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
