import React from "react";

function Footer() {
  return (
    <footer className="relativebg-gradient-to-br from-[#101820] to-[#1a1f2b] text-gray-400 py-6 overflow-hidden ">
      {/* Garis animasi atas */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5fc0a1] to-transparent animate-borderMove"></div>

      {/* Isi footer */}
      <div className="text-left left-2 z-10 relative">
        <p className="text-sm text-white tracking-wide">
          © Copyright {"  "}
          {new Date().getFullYear()}{" "}
          <span className="text-[#90ffdc]">Yuda Pradana.</span>
        </p>
      </div>

      {/* Garis animasi bawah */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5fc0a1] to-transparent animate-borderMoveReverse"></div>
    </footer>
  );
}

export default Footer;
