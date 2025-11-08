import icon from "../assets/icons/icon.png";

function Nav() {
  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#12171F]/80 backdrop-blur-md border border-gray-700 rounded-lg px-7 py-3 flex justify-between items-center w-[90%] max-w-4xl shadow-md">
        {/* Logo */}
        <img src={icon} className="w-8 h-8 object-contain select-none" />

        {/* Menu */}
        <div className="flex space-x-8 text-white font-medium">
          <a href="#about" className="hover:text-gray-300 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-gray-300 transition-colors">
            Projects
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
