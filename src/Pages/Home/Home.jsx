import BoxContainer from "../../Components/BoxContainer/BoxContainer";
import Banner from "./Banner";
import cover1 from '../../assets/cover1.jpg'
import { SiMinds } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { BsCupHotFill } from "react-icons/bs";
import { PiPhoneDisconnectFill } from "react-icons/pi";

const Home = () => {
    return (
      <div>
        <section className="bg-black ">
          <BoxContainer>
            <Banner></Banner>
          </BoxContainer>
        </section>
        <section className="bg-neutral-600 py-10">
          <BoxContainer>
            <h2 className="font-medium text-2xl">
              <span className="text-react">About</span> Me
            </h2>
            <div className="divider bg-react h-1 w-28 my-0"></div>
            <div className="flex py-5">
              <div className="w-1/2 p-5 pl-0">
                <img src={cover1} alt="owner image" />
              </div>
              <div className="w-1/2 p-5">
                <p>
                  Frontend focused MERN Stack Developer and tech enthusiast
                  seeking a dynamic role to apply problem-solving skills,
                  collaborate effectively, and actively contribute to the
                  creation of innovative web solutions for company progression.
                  Passionate about leveraging technology to craft efficient web
                  applications and committed to continuous skill enhancement in
                  this evolving field.
                </p>
                <div className="stats shadow mt-5">
                  <div className="stat">
                    <div className="stat-figure text-react text-4xl">
                    <SiMinds />
                    </div>
                    <div className="stat-title font-medium text-black">Experience</div>
                    <div className="stat-value text-react">...</div>
                    <div className="stat-desc">Nov 2023 - ...</div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-react text-4xl">
                    <GrProjects />
                    </div>
                    <div className="stat-title font-medium text-black">Projects</div>
                    <div className="stat-value text-react">4+</div>
                    <div className="stat-desc">Ongoing</div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure   text-react text-4xl">
                    <BsCupHotFill />
                    </div>
                    <div className="stat-title font-medium text-black">Finished Coffee</div>
                    <div className="stat-value text-react">200+</div>
                    <div className="stat-desc">Delicious</div>
                  </div>
                </div>
                <button className="btn btn-outline mt-5 hover:bg-react hover:text-black text-white">Contact Me <PiPhoneDisconnectFill /></button>
              </div>
            </div>
          </BoxContainer>
        </section>
        
      </div>
    );
};

export default Home;