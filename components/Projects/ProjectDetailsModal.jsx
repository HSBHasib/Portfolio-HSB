"use client";

import React from "react";
import { Button, Modal } from "@heroui/react";
import { FaGithub, FaCode, FaRocket } from "react-icons/fa";
import { ArrowUpRightFromSquare } from "@gravity-ui/icons";

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!project) return null;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      onOpenChange={onClose} 
      isDismissable={true}
      scrollBehavior="inside" 
    >
      <Modal.Backdrop variant="blur">
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[520px] max-h-[73vh] flex flex-col bg-[#111111]/70 border border-white/10 text-neutral-200 rounded-2xl p-6 shadow-2xl">
            
            {/* Close Trigger Button */}
            <Modal.CloseTrigger 
              onClick={onClose} 
              className="text-neutral-500 hover:text-white hover:bg-white/5 p-1 rounded-md transition-colors cursor-pointer" 
            />

            {/* Modal Header */}
            <Modal.Header className="flex flex-col items-start gap-1 p-0 mb-4 pr-6 flex-shrink-0">
              <Modal.Heading className="text-xl font-semibold text-white tracking-tight">
                {project.name}
              </Modal.Heading>
              <p className="text-[11px] text-neutral-500 font-mono uppercase tracking-wider">
                Project Details & Tech Stack
              </p>
            </Modal.Header>

            <Modal.Body className="p-0 flex-1 overflow-y-auto pr-1.5 space-y-5 custom-hero-scroll">
              
              {/* 1. Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech?.map((tc, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 border border-white/5 bg-white/5 rounded text-[11px] font-medium text-neutral-400"
                  >
                    {tc}
                  </span>
                ))}
              </div>

              {/* 2. Overview Section */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FaCode className="text-neutral-500" size={12} /> Overview
                </h4>
                <p className="text-neutral-400 text-[13px] md:text-sm leading-relaxed text-left whitespace-pre-line">
                  {project.des}
                </p>
              </div>

              {/* 3. Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FaRocket className="text-neutral-500" size={12} /> Key Features
                  </h4>
                  <ul className="space-y-1.5 text-[13px] text-neutral-400">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-left">
                        <span className="text-neutral-600 mt-1 text-[10px]">▪</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </Modal.Body>

            {/* Modal Footer (Action Buttons) */}
            <Modal.Footer className="p-0 mt-6 pt-4 border-t border-white/5 flex flex-shrink-0 items-center justify-end gap-2 bg-transparent">
              {/* Repository Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  className="flex items-center gap-1.5 px-3.5 py-1.5 border border-white/10 rounded-lg text-xs font-medium text-neutral-300 bg-transparent hover:bg-white/5 transition-all cursor-pointer"
                >
                  <FaGithub size={14} />
                  GitHub
                </Button>
              </a>

              {/* Live Demo Button */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-black bg-white hover:bg-neutral-200 transition-all cursor-pointer"
                >
                  <ArrowUpRightFromSquare size={12} />
                  Live Demo
                </Button>
              </a>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>

      <style jsx global>{`
        .custom-hero-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-hero-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-hero-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </Modal>
  );
}

