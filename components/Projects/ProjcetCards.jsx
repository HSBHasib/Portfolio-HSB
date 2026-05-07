// import React from "react";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import { FaGithub } from "react-icons/fa";
// import { ArrowUpRightFromSquare } from "@gravity-ui/icons";

// const ProjcetCards = ({ data }) => {
//   return (
//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[580px] rounded-xl p-6 md:p-4 border">
//         {/* Image */}
//         <CardItem translateZ="60" className="w-full mb-3">
//           <img
//             src={
//               data.img ||
//               "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             }
//             height="1000"
//             width="1000"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>

//         <div className="pl-2">
//           <CardItem
//             translateZ="40"
//             className="text-xl font-bold text-neutral-600 dark:text-white"
//           >
//             {data.name}
//           </CardItem>
//           <CardItem
//             as="p"
//             translateZ="40"
//             className="text-neutral-700 text-[13px] font-medium text-left max-w-sm mt-2 dark:text-neutral-400 leading-5"
//           >
//             {data.des}
//           </CardItem>

//           <CardItem
//             translateZ="40"
//             className="flex flex-wrap gap-2 rounded-xl text-xs font-normal dark:text-white pt-3"
//           >
//             {data.tech.map((tc, idx) => (
//               <button
//                 key={idx}
//                 className="flex items-center gap-1 px-4 py-1.5 border-[1.3px] border-gray-100/60 rounded-lg text-xs active:scale-95 transition-all duration-300 bg-white/15"
//               >
//                 {tc}
//               </button>
//             ))}
//           </CardItem>

//           {/* Projects Links */}
//           <CardItem
//             className="flex items-center mt-4 -ml-5 md:-ml-3 "
//             translateZ="40"
//           >
//             <CardItem
//               translateZ="40"
//               as="a"
//               href={data.github}
//               target="__blank"
//               className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//             >
//               <button className="flex items-center gap-1 px-4 py-1.5 border-[1.3px] border-gray-100/60 rounded-lg text-xs active:scale-95 transition-all duration-300">
//                 <FaGithub />
//                 GitHub
//               </button>
//             </CardItem>
//             <CardItem
//               translateZ="40"
//               as="a"
//               href={data.live}
//               target="__blank"
//               className=" rounded-xl text-xs"
//             >
//               <button className="-ml-1 flex items-center gap-1 px-4 py-1.5 border-[1.3px] border-gray-100/60 rounded-lg text-xs active:scale-95 transition-all duration-300">
//                 <ArrowUpRightFromSquare /> Live Demo
//               </button>
//             </CardItem>
//           </CardItem>
//         </div>
//       </CardBody>
//     </CardContainer>
//   );
// };

// export default ProjcetCards;





"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRightFromSquare } from "@gravity-ui/icons";
import Image from "next/image";

const ProjcetCards = ({ data }) => {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#111] dark:border-white/[0.1] border-black/[0.1] w-full h-auto min-h-[550px] rounded-2xl p-5 border flex flex-col justify-between transition-all duration-300">
        
        <div className="w-full">
          {/* Image Section */}
          <CardItem translateZ="60" className="w-full mb-5">
            <Image
              src={data.img || "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"}
              height={600}
              width={600}
              className="h-52 md:h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-white/5"
              alt={data.name}
            />
          </CardItem>

          {/* Text Content */}
          <div className="px-1">
            <CardItem
              translateZ="40"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {data.name}
            </CardItem>
            
            <CardItem
              as="p"
              translateZ="30"
              className="text-neutral-700 text-[13px] font-medium text-left mt-3 dark:text-neutral-400 leading-relaxed line-clamp-4"
            >
              {data.des}
            </CardItem>

            {/* Tech Stack Badges */}
            <CardItem
              translateZ="20"
              className="flex flex-wrap gap-2 pt-5"
            >
              {data.tech.map((tc, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 border border-white/10 bg-white/5 rounded-md text-[10px] md:text-xs font-medium text-neutral-300 transition-colors hover:bg-white/10"
                >
                  {tc}
                </span>
              ))}
            </CardItem>
          </div>
        </div>

        {/* Action Buttons - Pushed to Bottom */}
        <div className="mt-6">
          <CardItem
            className="flex items-center gap-2"
            translateZ="40"
          >
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-white/10 rounded-xl text-xs font-semibold text-neutral-300 bg-[#1a1a1a] hover:bg-neutral-800 transition-all active:scale-95">
                <FaGithub size={16} />
                GitHub
              </button>
            </a>
            
            <a
              href={data.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-white/10 rounded-xl text-xs font-semibold text-neutral-300 bg-[#1a1a1a] hover:bg-neutral-800 transition-all active:scale-95">
                <ArrowUpRightFromSquare size={14} />
                Live
              </button>
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjcetCards;
