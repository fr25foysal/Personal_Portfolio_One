import { FaDownload } from "react-icons/fa";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import dp from "../../assets/dp.png"
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
      <div className="min-h-[calc(100vh-20vh)] p-5 pb-0 flex flex-col md:flex-row pt-28">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="md:text-4xl text-3xl font-medium">
            {"// Hi, I'm _Foysal_Rahman"}
          </h2>
          <h2 className="lg:text-3xl text-xl pt-5 text-react">
            {"{ "}
            <span>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "_frontend_developer",
                  "_web_designer",
                  "_mern_stack_developer",
                ]}
                loop={false}
                cursor
                cursorStyle="/"
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={1000}
              />
            </span>
            {" }"}
          </h2>
          <div className="space-x-5 md:pt-8 pt-5">
            <Link
              to={
                "https://drive.google.com/uc?export=download&id=1Sr4lK-NXdQLL00xpNjdDVBZ6rsXAXNes"
              }
            >
              <button className="btn ">
                Download CV <FaDownload />
              </button>
            </Link>
            <button className="btn btn-outline mt-5 hover:bg-react hover:text-black text-white">
              Contact Me <PiPhoneDisconnectFill />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 pt-10 md:pt-0">
          <img src={dp} alt="profile Image" />
        </div>
      </div>
    );
};

export default Banner;
