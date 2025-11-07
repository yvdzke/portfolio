// Icons
import { IoIosDocument } from "react-icons/io";
import { BiEnvelope } from "react-icons/bi";

// Assets
import pdfFile from "../assets/yvdzpradana.pdf";

// Components
import Button from "../components/Button";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center ">
          <div className="flex justify-center items-center px-4">
            <div className="w-full max-w-3xl aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/cUodQryiVnE?si=g4ghTdDDuXSUje-N"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <h1 className="text-4xl text-white font-bold mb-4">
            The code is like a joke. If it needs comment, it's no good.
          </h1>
          <p className="text-center max-w-md mx-auto leading-relaxed text-gray-300">
            Graduated Full-Stack Web Developer bootcamp program from
            harisenin.com for deepening Skills in Web Developer. Explore my
            latest projects, showcasing my expertise in web development.
          </p>
          <div className="mt-6 flex space-x-4 items-center justify-center">
            <Button
              variant="bg-white border-2 border-white items-center flex space-x-2"
              hover="hover:bg-gradient-to-br from-[#101820] to-[#1a1f2b] hover:text-white "
              textColor="text-black"
              font="font-medium "
              onClick={() => window.open(pdfFile, "_blank")}
            >
              Resume
              <IoIosDocument />
            </Button>
            <Button
              variant="bg-teal-300 border-2 border-teal-300 items-center flex space-x-2 "
              hover="hover:bg-gradient-to-br from-[#101820] to-[#1a1f2b] hover:text-white "
              textColor="text-black"
              font="font-medium "
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=yvdzke@gmail.com",
                  "_blank"
                )
              }
            >
              Contact Me
              <BiEnvelope />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
