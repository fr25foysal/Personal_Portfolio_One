import { FaDownload } from "react-icons/fa";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import dp from "../../assets/dp.png"
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
      <div className="min-h-[calc(100vh-20vh)] flex flex-col md:flex-row pt-28">
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-medium">
            {"// Hi, I'm _Foysal_Rahman"}
          </h2>
          <h2 className="text-5xl pt-5 text-react">
            {"{ "}
            <span >
              {/* Style will be inherited from the parent element */}
              <Typewriter
            words={["_frontend_developer", "_web_designer"]}
            loop={false}
            cursor
            cursorStyle='/'
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={1000}
          />
            </span>
            {" }"}
          </h2>
          <div className=" space-x-5 pt-8">
            <button className="btn ">Download CV <FaDownload /></button>
            <button className="btn btn-outline mt-5 hover:bg-react hover:text-black text-white">Contact Me <PiPhoneDisconnectFill /></button>
          </div>
        </div>
        <div className="w-1/2">
          <img src={dp} alt="profile Image" />
        </div>
      </div>
    );
};

export default Banner;