import React, { useState } from "react";

import Button from "./Button.jsx";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import SkillsSection from "../sections/SkillsSection.jsx"; // pastikan import Skills-nya sesuai path

function DialogBox({ isOpen, onClose, type }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const openDialog = (type) => {
    setDialogContent(type);
    setIsDialogOpen(true);
  };
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[200] animate-[fadeIn_0.3s_ease]">
        <div className="relative bg-[#121212] text-white rounded-xl p-8 w-[90%] max-w-[400px] shadow-[0_0_20px_rgba(0,0,0,0.4)] animate-[slideUp_0.3s_ease]">
          <button
            className="absolute top-3 right-4 text-xl bg-none border-none text-white cursor-pointer"
            onClick={onClose}
          >
            ✕
          </button>
          {/* About */}
          {type === "about" && (
            <>
              <h2 className="text-xl font-semibold mb-2">
                Hello, <span className="text-[#5fc0a1]">I'm Yuda Pradana</span>
              </h2>
              <p className="text-job mb-4 text-gray-300">
                I am a Full-Stack Developer
              </p>
              <p className="text-sm leading-relaxed text-gray-300">
                A Bachelor of Informatics Engineering graduate with hands-on
                experience in full-stack developer using{" "}
                <span className="text-[#fc0202]">HTML</span>,{" "}
                <span className="text-[#fc0202]">CSS</span>,{" "}
                <span className="text-[#fc0202]">JavaScript</span>,{" "}
                <span className="text-[#fc0202]">React.js</span>, and{" "}
                <span className="text-[#fc0202]">Node.js</span>. Currently
                working as a Full-Stack Developer while attending a Full-Stack
                Web Developer bootcamp to deepen technical expertise. Passionate
                Skills building scalable web applications and delivering
                seamless user experiences through well-crafted, responsive
                designs. A detail-oriented and growth-driven professional eager
                to secure a full-time role as a Full-Stack Developer.
              </p>
              <Button
                variant="bg-white border-2 border-white items-center flex space-x-2"
                hover="hover:bg-gradient-to-br from-[#101820] to-[#1a1f2b] hover:text-white "
                textColor="text-black"
                font="font-medium "
                onClick={() => openDialog("tech-skills")}
              >
                Technical Skills
              </Button>
              <ul className="flex justify-center gap-6 mt-6">
                <li>
                  <a
                    href="https://github.com/yvdzke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#5fc0a1] transition-colors"
                  >
                    <ImGithub size={21} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/yuda-pradana-8243182a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#5fc0a1] transition-colors"
                  >
                    <FaLinkedin size={21} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/yvdzke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#5fc0a1] transition-colors"
                  >
                    <BsTwitterX size={21} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6282110990050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#5fc0a1] transition-colors"
                  >
                    <SiWhatsapp size={21} />
                  </a>
                </li>
              </ul>
            </>
          )}
          {/* Projects Prank */}
          {type === "projects" && (
            <>
              <h2 className="text-xl font-semibold mb-3 text-[#5fc0a1]">
                Hehehe~ Gotcha! 😜
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                You wanna see my projects, huh? Just close this one and look to
                the home paragraph — they’re waiting for you there! 😎✨
              </p>
            </>
          )}
          {/* Technical Skills */}
          {type === "tech-skills" && (
            <>
              <SkillsSection></SkillsSection>
            </>
          )}
        </div>
      </div>
      <DialogBox
        isOpen={isDialogOpen}
        type={dialogContent}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}

export default DialogBox;
