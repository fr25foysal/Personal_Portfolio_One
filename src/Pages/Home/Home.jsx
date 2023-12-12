import BoxContainer from "../../Components/BoxContainer/BoxContainer";
import { FaBootstrap, FaCss3Alt, FaReact, FaWordpress } from "react-icons/fa";
import { RiFileCodeFill, RiJavascriptFill } from "react-icons/ri";
import Banner from "./Banner";
import cover1 from '../../assets/cover1.jpg'
import { SiExpress, SiMinds, SiTailwindcss } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { BsCupHotFill } from "react-icons/bs";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandNodejs } from "react-icons/tb";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MdCastForEducation } from "react-icons/md";

const Home = () => {
    return (
      <div>
        <section className="bg-black ">
          <BoxContainer>
            <Banner></Banner>
          </BoxContainer>
        </section>
        <section className="bg-neutral-600 pt-14 pb-8">
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
                    <div className="stat-title font-medium text-black">
                      Experience
                    </div>
                    <div className="stat-value text-react">...</div>
                    <div className="stat-desc">Nov 2023 - ...</div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-react text-4xl">
                      <GrProjects />
                    </div>
                    <div className="stat-title font-medium text-black">
                      Projects
                    </div>
                    <div className="stat-value text-react">4+</div>
                    <div className="stat-desc">Ongoing</div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure   text-react text-4xl">
                      <BsCupHotFill />
                    </div>
                    <div className="stat-title font-medium text-black">
                      Finished Coffee
                    </div>
                    <div className="stat-value text-react">200+</div>
                    <div className="stat-desc">Delicious</div>
                  </div>
                </div>
                <button className="btn btn-outline mt-5 hover:bg-react hover:text-black text-white">
                  Contact Me <PiPhoneDisconnectFill />
                </button>
              </div>
            </div>
          </BoxContainer>
        </section>

        <section className="bg-black pt-14 pb-14">
          <BoxContainer>
            <h2 className="font-medium text-2xl">
              My <span className="text-react">Skills</span>
            </h2>
            <div className="divider bg-react h-1 w-24 my-0"></div>
            <div className="grid grid-cols-4 justify-around p-10">
              <div className="flex flex-col items-center gap-5">
                <div
                  className="radial-progress text-react"
                  style={{
                    "--value": "85",
                    "--size": "8rem",
                    "--thickness": "11px",
                  }}
                  role="progressbar"
                >
                  85%
                </div>
                <div className="flex gap-3 text-xl justify-center items-center bg-neutral-500 px-10 rounded py-2 text-react">
                  ReactJs
                  <FaReact />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <div
                  className="radial-progress text-[#f0db4f]"
                  style={{
                    "--value": "80",
                    "--size": "8rem",
                    "--thickness": "11px",
                  }}
                  role="progressbar"
                >
                  80%
                </div>
                <div className="flex gap-3 text-xl justify-center items-center bg-neutral-500 px-10 rounded py-2 text-[#f0db4f]">
                  JavaScript
                  <RiJavascriptFill />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <div
                  className="radial-progress text-[#828282]"
                  style={{
                    "--value": "70",
                    "--size": "8rem",
                    "--thickness": "11px",
                  }}
                  role="progressbar"
                >
                  70%
                </div>
                <div className="flex gap-3 text-xl justify-center items-center bg-neutral-500 px-10 rounded py-2 text-white">
                  ExpressJs
                  <SiExpress />
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <div
                  className="radial-progress text-[#4DB33D]"
                  style={{
                    "--value": "75",
                    "--size": "8rem",
                    "--thickness": "11px",
                  }}
                  role="progressbar"
                >
                  75%
                </div>
                <div className="flex gap-3 text-xl justify-center items-center bg-neutral-500 px-10 rounded py-2 text-[#4DB33D]">
                  MongoDB
                  <BiLogoMongodb />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="flex gap-3 text-xl justify-center items-center bg-neutral-500 px-10 rounded py-2 text-[#38BDF8]">
                Tailwind
                <div className="text-xl">
                  <SiTailwindcss />
                </div>
              </div>

              <div className="flex gap-3 text-xl justify-center items-center bg-neutral-500 px-10 rounded py-2 text-[#FFCB2B]">
                Firebase
                <div className="text-xl">
                  <IoLogoFirebase />
                </div>
              </div>

              <div className="flex gap-3 text-xl justify-center items-center bg-neutral-500 px-10 rounded py-2 text-[#68a063]">
                NodeJs
                <div className="text-xl">
                  <TbBrandNodejs />
                </div>
              </div>

              <div className="flex gap-3 text-xl justify-center items-center bg-neutral-500 px-10 rounded py-2 text-[#563d7c]">
                Bootstrap
                <div className="text-xl">
                  <FaBootstrap />
                </div>
              </div>

              <div className="flex gap-3 text-xl justify-center items-center bg-neutral-500 px-10 rounded py-2 text-[#1e2a5a]">
                CSS
                <div className="text-xl">
                  <FaCss3Alt />
                </div>
              </div>

              <div className="flex gap-3 text-xl justify-center items-center bg-neutral-500 px-10 rounded py-2 text-[#17404e]">
                WordPress
                <div className="text-xl">
                  <FaWordpress />
                </div>
              </div>
            </div>
          </BoxContainer>
        </section>

        <section className="bg-neutral-600 pt-14 ">
          <BoxContainer>
            <h2 className="font-medium text-2xl">
              My <span className="text-react">Experience</span>
            </h2>
            <div className="divider bg-react h-1 w-44 my-0"></div>
            <div>
              <Tabs>
                <TabList className={"flex justify-center"}>
                  <Tab
                    defaultFocus:true
                    className={"px-10 py-5 text-react flex gap-3 items-center text-xl"}
                  ><RiFileCodeFill />
                    Qualifications
                  </Tab>
                  <Tab
                  className={" px-10 py-5 flex gap-3 items-center text-react text-xl"}
                  ><MdCastForEducation />Education</Tab>
                </TabList>

                <TabPanel>
                  <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2021</time>
                        <div className="text-lg font-black">
                          Started my journey
                        </div>
                        The Apple Macintosh—later rebranded as the Macintosh
                        128K—is the
                      </div>
                      <hr />
                    </li>
                    <li>
                      <hr />
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="timeline-end mb-10">
                        <time className="font-mono italic">1998</time>
                        <div className="text-lg font-black">iMac</div>
                        iMgfgf
                      </div>
                      <hr />
                    </li>
                  </ul>
                </TabPanel>
                <TabPanel>
                  <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">1984</time>
                        <div className="text-lg font-black">
                          First Macintosh computer
                        </div>
                        The Apple Macintosh—later rebranded as the Macintosh
                        128K—is the
                      </div>
                      <hr />
                    </li>
                    <li>
                      <hr />
                      <div className="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="timeline-end mb-10">
                        <time className="font-mono italic">1998</time>
                        <div className="text-lg font-black">iMac</div>
                        iMgfgf
                      </div>
                      <hr />
                    </li>
                  </ul>
                </TabPanel>
              </Tabs>
            </div>
          </BoxContainer>
        </section>

        <section className="bg-black pt-14 ">
          <BoxContainer>
            <h2 className="font-medium text-2xl">
              <span className="text-react">Recent</span> Projects
            </h2>
            <div className="divider bg-react h-1 w-44 my-0"></div>
          </BoxContainer>
        </section>

        <section className="bg-neutral-600 pt-14 ">
          <BoxContainer>
            <h2 className="font-medium text-2xl">
              My <span className="text-react">Qualifications</span>
            </h2>
            <div className="divider bg-react h-1 w-48 my-0"></div>
          </BoxContainer>
        </section>

        <section className="bg-black pt-14 ">
          <BoxContainer>
            <h2 className="font-medium text-2xl">
              <span className="text-react">Valuable</span> Recomendations
            </h2>
            <div className="divider bg-react h-1 w-56 my-0"></div>
          </BoxContainer>
        </section>

        <section className="bg-black pt-14 ">
          <BoxContainer>
            <h2 className="font-medium text-2xl">
              Contact<span className="text-react"> Me</span>
            </h2>
            <div className="divider bg-react h-1 w-32 my-0"></div>
          </BoxContainer>
        </section>
      </div>
    );
};

export default Home;