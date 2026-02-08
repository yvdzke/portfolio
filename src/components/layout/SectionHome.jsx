import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Button from "../button/index.jsx";

const SectionHome = () => {
  return (
    <section className="home">
      {/* =============== Home Wrapper ===============*/}
      <div className="home-wrapper bg-[linear-gradient(90deg,#F0EBE3_56%,#FFFFFF_94%)] h-screen flex py-[150px] md:items-center justify-center">
        {/* =============== Home Container ===============*/}
        <div className="home-container flex flex-col md:flex-row gap-[10px] md:gap-[30px] px-[8px] py-[29px] items-center justify-center max-w-[1116px] max-h-[586px] ">
          {/* =============== Intro Banner ===============*/}
          <div className="intro-banner flex flex-col items-center md:items-start px-[9px] gap-[20px] py-6 max-w-[300px] max-h-[300px] md:max-w-[574px] md:max-h-[528px]">
            {/* Hello */}
            <p className="className font-jost font-bold text-[14px] ">
              HELLO, <span className="text-[#1FB7CA]">MY NAME IS</span>
            </p>
            {/* Name */}
            <div className="flex flex-col">
              <p className="className font-jost font-bold text-[#1FB7CA] [-webkit-text-stroke:2px_black] [paint-order:stroke_fill] text-[30px]">
                YUDA <span className="text-white">PRADANA</span>
              </p>
              <div className="flex flex-row gap-[11px] items-center justify-center md:justify-start">
                <p className="font-jost text-[12px] md:text-[16px] font-medium">
                  I AM
                </p>
                <p className="font-hand text-[20px] md:text-[24px] font-medium">
                  Web Developer
                </p>
              </div>
            </div>
            {/* Description */}
            <p className="max-w-[520px] text-[14px] text-justify font-jost leading-relaxed hidden md:flex">
              Graduated Full-Stack Web Developer bootcamp program from
              harisenin.com for deepening skills in Web Development. Explore my
              latest projects, showcasing my expertise in web development.
            </p>
            {/* Link */}
            <div className="flex-row gap-[11px] hidden md:flex">
              <a
                target="blank"
                className="hover:text-[#1FB7CA]"
                href="https://github.com/yvdzke"
              >
                <FaGithub size={19} />
              </a>
              <a target="blank" href="https://github.com/yvdzke">
                <FaLinkedinIn className="hover:text-[#1FB7CA]" size={19} />
              </a>
              <a
                target="blank"
                className="hover:text-[#1FB7CA]"
                href="https://github.com/yvdzke"
              >
                <FaInstagram size={19} />
              </a>
            </div>
            {/* Button Download CV + My Skills */}
            <div className="flex-row items-center gap-[20px] hidden md:flex">
              {/* Button + Line */}
              <div className="flex flex-row items-center">
                <Button
                  variant="relative overflow-hidden bg-white isolate border border-black text-black font-jost font-medium text-[12px] w-[140px] h-[40px] items-center rounded-full transition-colors duration-500  
before:absolute before:inset-0 before:-z-10 before:bg-[#1FB7CA] before:rounded-full before:scale-0 before:transition-transform before:duration-500 before:content-[''] 
hover:before:scale-95"
                >
                  DOWNLOAD CV
                </Button>
                <div className="bg-black w-10 h-[2px]"></div>
              </div>
              <p className="font-jost font-semibold text-[12px] cursor-pointer hover:text-[#1FB7CA]">
                MY SKILLS
              </p>
            </div>
          </div>
          {/* =============== Profile Banner ===============*/}
          <div className="flex-col items-center md:items-start gap-[20px] profile-banner rounded-tl-[200px] relative rounded-br-[200px] max-w-[350px] max-h-[350px] md:max-w-[574px] md:max-h-[528px] bg-[#1FB7CA]">
            {/* Miku Profile */}
            <img
              className="rounded-br-[215px] object-cover"
              src="https://res.cloudinary.com/dvym5vxsw/image/upload/v1770286304/Hatsune-Miku-PNG-File_t309n0.png"
              alt=""
            />

            {/* Absolute Items Images */}
            <img
              className="absolute w-[70px] h-[70px] md:w-[180px] md:h-[180px] md:top-[-70px] md:right-[-60px] top-[-20px] right-[-30px] "
              src="https://res.cloudinary.com/dvym5vxsw/image/upload/v1770332237/shape-1-f115230c_nb2klm.png"
              alt=""
            />
            <img
              className="absolute w-[70px] h-[70px] md:w-[180px] md:h-[180px] md:bottom-[-70px] md:left-[-100px] bottom-[-40px] left-[-30px] "
              src="https://res.cloudinary.com/dvym5vxsw/image/upload/v1770332237/shape-1-f115230c_nb2klm.png"
              alt=""
            />
            {/* Shape Items */}
            {/* Item 1 */}
            <div className="absolute bottom-[80px] left-[-30px]">
              <div className="flex flex-row items-center w-[120px] h-[40px] md:w-[170px] md:h-[58px] border border-black bg-white rounded-full">
                <div className="flex flex-row items-center gap-[10px] px-[20px] md:px-[40px] py-[2px]">
                  <p className="font-semibold text-[12px] md:text-[20px]">1+</p>
                  <div className="text-center">
                    <p className="font-semibold text-[12px] md:text-[16px]">
                      Bootcamp
                    </p>
                    <p className="font-semibold text-[12px] md:text-[16px] text-[#1FB7CA]">
                      Harisenin
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="absolute bottom-[40px] right-[-10px]">
              <div className="flex flex-row items-center w-[120px] h-[40px] md:w-[170px] md:h-[58px] border border-black bg-white rounded-full">
                <div className="flex flex-row items-center gap-[10px] px-[20px] md:px-[40px] py-[2px]">
                  <p className="font-semibold text-[12px] md:text-[20px]">1+</p>
                  <div className="text-center">
                    <p className="font-semibold text-[12px] md:text-[16px]">
                      Bootcamp
                    </p>
                    <p className="font-semibold text-[12px] md:text-[16px] text-[#1FB7CA]">
                      Harisenin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* =============== Intro Banner ===============*/}
          <div className="intro-banner flex flex-col items-center md:items-start px-[9px] gap-[20px] py-6 max-w-[350px] max-h-[350px] md:hidden">
            {/* Description */}
            <p className="max-w-[520px] text-[14px] text-justify font-jost leading-relaxed">
              Graduated Full-Stack Web Developer bootcamp program from
              harisenin.com for deepening skills in Web Development. Explore my
              latest projects, showcasing my expertise in web development.
            </p>
            {/* Link */}
            <div className="flex gap-[11px]">
              <a
                target="blank"
                className="hover:text-[#1FB7CA]"
                href="https://github.com/yvdzke"
              >
                <FaGithub size={19} />
              </a>
              <a target="blank" href="https://github.com/yvdzke">
                <FaLinkedinIn className="hover:text-[#1FB7CA]" size={19} />
              </a>
              <a
                target="blank"
                className="hover:text-[#1FB7CA]"
                href="https://github.com/yvdzke"
              >
                <FaInstagram size={19} />
              </a>
            </div>
            {/* Button Download CV + My Skills */}
            <div className="flex-col items-center  gap-[20px]">
              {/* Button + Line */}
              <div className="flex flex-col items-center">
                <Button
                  variant="relative overflow-hidden bg-white isolate border border-black text-black font-jost font-medium text-[12px] w-[140px] h-[40px] items-center rounded-full transition-colors duration-500  
before:absolute before:inset-0 before:-z-10 before:bg-[#1FB7CA] before:rounded-full before:scale-0 before:transition-transform before:duration-500 before:content-[''] 
hover:before:scale-95"
                >
                  DOWNLOAD CV
                </Button>
                <div className="bg-black w-[2px] h-10"></div>
              </div>
            </div>
            <p className="font-jost  font-semibold text-[12px] cursor-pointer hover:text-[#1FB7CA]">
              MY SKILLS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHome;
