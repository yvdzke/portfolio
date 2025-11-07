import Button from "../components/Button";

function Home() {
  return (
    <>
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
              variant="bg-red-500"
              hover="hover:bg-red-600"
              textColor="text-white"
              font="font-medium "
            >
              Contact Me
            </Button>
            <Button
              variant="bg-red-500"
              hover="hover:bg-red-600"
              textColor="text-white"
              font="font-medium "
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
