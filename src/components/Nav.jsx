import React, { useState } from "react";
import icon from "../assets/icons/icon.png";
import DialogBox from "./DialogBox";

function Nav() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const openDialog = (type) => {
    setDialogContent(type);
    setIsDialogOpen(true);
  };
  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#12171F]/80 backdrop-blur-md border border-gray-700 rounded-lg px-7 py-3 flex justify-between items-center w-[90%] max-w-4xl shadow-md">
        {/* Logo */}
        <img src={icon} className="w-8 h-8 object-contain select-none" />

        {/* Menu */}
        <div className="flex space-x-8 text-white font-medium">
          <button onClick={() => openDialog("about")}>About</button>
          <button onClick={() => openDialog("projects")}>Projects</button>
        </div>
      </nav>
      <DialogBox
        isOpen={isDialogOpen}
        type={dialogContent}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}

export default Nav;
