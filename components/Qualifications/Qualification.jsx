import React from "react";
import { BsCalendar2Week } from "react-icons/bs";

const Qualification = () => {
  return (
    <div className="h-full md:my-15 mt-7  max-w-5xl mx-auto">
      {/* Qualification Header */}
      <div>
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-xl md:text-4xl font-bold text-transparent leading-relaxed">
          Qualification
        </h2>
        <p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm font-semibold text-transparent">
          My personal journey
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-4">
        {/* Section Icon & Title */}
        <div className="flex justify-center items-center gap-1 mb-8">
          <span className="text-2xl">🎓</span>
          <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-[16px] md:text-xl font-bold text-transparent leading-relaxed">
            Education
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Middle Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-500"></div>

          {/* SSC - Left Side */}
          <div className="relative flex justify-between items-center mb-16 pt-3 w-full">
            <div className="w-[47%] text-right space-y-1 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-[16px] md:text-xl font-bold text-transparent">
              <h3 className="text-[16px] font-semibold ">SSC</h3>
              <p className="font-medium text-xs">
                Ashraful Ulum Islamia <br /> Dakhil Madrasha
              </p>
              <p className="flex items-center gap-2 text-xs justify-end">
                <BsCalendar2Week size={14} color="white"/> 2021 - 2023
              </p>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-3 h-3 bg-[#7C3AED] rounded-full border-4 border-[#7C3AED] z-10 drop-shadow-[0_0_15px_#7C3AED90] shadow-[0_0_30px_#7C3AED]"></div>
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-3 h-3 bg-[#7C3AED] rounded-full border-4 border-[#7C3AED] z-10 drop-shadow-[0_0_15px_#7C3AED] shadow-[0_0_30px_#7C3AED]"></div>
            <div className="w-[45%]"></div>
          </div>

          {/* HSC - Right Side */}
          <div className="relative flex justify-between items-center w-full">
            <div className="w-[45%]"></div>

            <div className="pb-3 w-[50%] text-left pl-8 space-y-1 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-[16px] md:text-xl font-bold text-transparent">
              <h3 className="text-[16px] font-semibold">HSC</h3>
              <p className="font-medium text-xs">
                Nawab Habibullah Model<br /> School and College
              </p>
              <p className="flex items-center gap-1.5 text-xs justify-start">
                <BsCalendar2Week size={14} color="white"/> 2023 - 2025
              </p>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 -top-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#7C3AED] rounded-full border-4 border-[#7C3AED] z-10 drop-shadow-[0_0_15px_#7C3AED] shadow-[0_0_30px_#7C3AED]"></div>
            <div className="absolute left-1/2 -top-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#7C3AED] rounded-full border-4 border-[#7C3AED] z-10 drop-shadow-[0_0_15px_#7C3AED] shadow-[0_0_30px_#7C3AED]"></div>
          </div>

          {/* Bottom Dot (End of line) */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-3 h-3 bg-[#7C3AED] rounded-full border-4 border-[#7C3AED] z-10 drop-shadow-[0_0_15px_#7C3AED] shadow-[0_0_30px_#7C3AED]"></div>
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-3 h-3 bg-[#7C3AED] rounded-full border-4 border-[#7C3AED] z-10 drop-shadow-[0_0_15px_#7C3AED90] shadow-[0_0_30px_#7C3AED]"></div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
