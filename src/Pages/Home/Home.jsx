import BoxContainer from "../../Components/BoxContainer/BoxContainer";
import { FaBootstrap, FaBug, FaCss3Alt, FaReact, FaWordpress } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { RiFileCodeFill, RiJavascriptFill } from "react-icons/ri";
import Banner from "./Banner";
import cover1 from '../../assets/cover1.jpg'
import { SiExpress, SiJsonwebtokens, SiMinds, SiTailwindcss } from "react-icons/si";
import { BiLogoMongodb, BiSupport } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { BsCupHotFill } from "react-icons/bs";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandNodejs } from "react-icons/tb";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import emailjs from 'emailjs-com';
import { MdCastForEducation, MdEmail } from "react-icons/md";
import toast from "react-hot-toast";
import lifeflow1 from "../../assets/lifeflow1.png"
import lifeflow2 from "../../assets/lifeflow2.png"
import lifeflow3 from "../../assets/lifeflow3.png"
import lifeflow4 from "../../assets/lifeflow4.png"
import lifeflow5 from "../../assets/lifeflow5.png"

const Home = () => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const subject = form.subject.value
    const message = form.message.value
    const mail = {name,email,subject,message}

    emailjs.sendForm('service_zodv5jn','template_ft51oos', form, '3dLidzNE0beIElpcY')
    .then((result) => {
      toast.success('Successfully Sent!')
        // window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    }, (error) => {
        console.log(error.text);
    });
  }
    return (
      <div>
        <section className="bg-black ">
          <BoxContainer>
            <Banner></Banner>
          </BoxContainer>
        </section>
        <section id="about" className="bg-neutral-600 pt-14 pb-8">
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

        <section id="skill" className="bg-black pt-14 pb-14">
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

        <section id="experience" className="bg-neutral-600 pt-14 ">
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
                    className={
                      "px-10 py-5 text-react flex gap-3 items-center text-xl"
                    }
                  >
                    <RiFileCodeFill />
                    Qualifications
                  </Tab>
                  <Tab
                    className={
                      " px-10 py-5 flex gap-3 items-center text-react text-xl"
                    }
                  >
                    <MdCastForEducation />
                    Education
                  </Tab>
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
                        <div className="text-lg font-semibold text-react">
                          Started my journey
                        </div>
                        Embarked on my coding journey in 2021, mastering
                        HTML/CSS initially, then transitioning to WordPress
                        design & development. Currently immersed in MERN stack,
                        specializing in React for dynamic frontends. As a tech
                        enthusiast, I'm dedicated to continuous learning and
                        exploring new technologies to enhance web experiences.
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
                        <time className="font-mono italic">2022</time>
                        <div className="text-lg font-semibold text-react">
                          WordPress Customizer
                        </div>
                        I joined "It Vanilla" as a WordPress customizer,
                        leveraging my skills to tailor and enhance WordPress
                        websites. Excited to contribute my expertise in
                        customizing and optimizing the platform for a seamless
                        user experience.
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
                        <time className="font-mono italic">2021</time>
                        <div className="text-lg font-semibold text-react">
                          Secondary School Certificate
                        </div>
                        I accomplished my Secondary School Certificate at
                        Setabgonj Ideal Academy School, achieving a stellar GPA
                        of 5.00. This academic success reflects my commitment to
                        excellence and sets a strong foundation for my continued
                        educational journey.
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
                        <time className="font-mono italic">2023</time>
                        <div className="text-lg font-semibold text-react">
                          Secondary School Certificate
                        </div>
                        I attained my Higher Secondary Certificate from Dinajpur
                        Government City College with distinction, securing a
                        commendable GPA of 4.75. This accomplishment underscores
                        my dedication to academic excellence and further shapes
                        my educational trajectory.
                      </div>
                      <hr />
                    </li>
                  </ul>
                </TabPanel>
              </Tabs>
            </div>
          </BoxContainer>
        </section>

        <section id="projects" className="bg-black py-14 ">
          <BoxContainer>
            <h2 className="font-medium text-2xl">
              <span className="text-react">Recent</span> Projects
            </h2>
            <div className="divider bg-react h-1 w-44 my-0"></div>
            <div className="pt-10">
            <div className="divider divider-info text-react text-2xl font-medium"><p className="flex gap-2 text-2xl text-react"><FaReact /> <SiTailwindcss /> <IoLogoFirebase /></p>  LifeFlow <p className="flex gap-2 text-2xl text-react"><SiExpress /> <BiLogoMongodb /> <SiJsonwebtokens /> </p> 
            </div>
              <div className="grid grid-cols-3 gap-8 py-5">
                <img src={lifeflow2} alt="lifeflow" />
                <img src={lifeflow3} alt="lifeflow" />
                <img src={lifeflow1} alt="lifeflow" />
                <img src={lifeflow4} alt="lifeflow" />
                <div className="bg-neutral-600 text-center p-2">
                  <h2 className="text-3xl font-medium text-react">Lifeflow</h2> 
                  <p>A Blood Donation Cummunity Website</p>   
                  <div className="flex gap-5 justify-between px-2 py-3 text-left">
                    <ul className="list-disc list-inside">
                      <li>Request Donation</li>
                      <li>Content Manage</li>
                      <li>Request Donation</li>
                    </ul>
                    <ul className="list-disc">
                      <li>User Authentication</li>
                      <li>Search/Sort</li>
                      <li>Role Dashboards</li>
                    </ul>
                  </div>
                  <div className="space-x-6">
                    <a href="https://lifeflow-25.web.app" target="blank" className="btn bg-react border-none">Live Link</a>
                    <a href="https://github.com/fr25foysal/LifeFlow-Blood-Donation-Community" target="blank" className="btn btn-outline border-white text-white">Github Link</a>
                    </div>                
                </div>
                
                <img src={lifeflow5} alt="lifeflow" />

              </div>
            <div className="divider divider-info text-react text-2xl font-medium"><p className="flex gap-2 text-2xl text-react"><FaReact /> <SiTailwindcss /> <IoLogoFirebase /></p>  LifeFlow <p className="flex gap-2 text-2xl text-react"><SiExpress /> <BiLogoMongodb /> <SiJsonwebtokens /> </p> 
            </div>
              <div className="grid grid-cols-3 gap-8 py-5">
                <img src={lifeflow2} alt="lifeflow" />
                <img src={lifeflow3} alt="lifeflow" />
                <img src={lifeflow1} alt="lifeflow" />
                <img src={lifeflow4} alt="lifeflow" />
                <div className="bg-neutral-600 text-center p-2">
                  <h2 className="text-3xl font-medium text-react">Lifeflow</h2> 
                  <p>A Blood Donation Cummunity Website</p>   
                  <div className="flex gap-5 justify-between px-2 py-3 text-left">
                    <ul className="list-disc list-inside">
                      <li>Request Donation</li>
                      <li>Content Manage</li>
                      <li>Request Donation</li>
                    </ul>
                    <ul className="list-disc">
                      <li>User Authentication</li>
                      <li>Search/Sort</li>
                      <li>Role Dashboards</li>
                    </ul>
                  </div>
                  <div className="space-x-6">
                    <a href="https://lifeflow-25.web.app" target="blank" className="btn bg-react border-none">Live Link</a>
                    <a href="https://github.com/fr25foysal/LifeFlow-Blood-Donation-Community" target="blank" className="btn btn-outline border-white text-white">Github Link</a>
                    </div>                
                </div>
                
                <img src={lifeflow5} alt="lifeflow" />

              </div>
            <div className="divider divider-info text-react text-2xl font-medium"><p className="flex gap-2 text-2xl text-react"><FaReact /> <SiTailwindcss /> <IoLogoFirebase /></p>  LifeFlow <p className="flex gap-2 text-2xl text-react"><SiExpress /> <BiLogoMongodb /> <SiJsonwebtokens /> </p> 
            </div>
              <div className="grid grid-cols-3 gap-8 py-5">
                <img src={lifeflow2} alt="lifeflow" />
                <img src={lifeflow3} alt="lifeflow" />
                <img src={lifeflow1} alt="lifeflow" />
                <img src={lifeflow4} alt="lifeflow" />
                <div className="bg-neutral-600 text-center p-2">
                  <h2 className="text-3xl font-medium text-react">Lifeflow</h2> 
                  <p>A Blood Donation Cummunity Website</p>   
                  <div className="flex gap-5 justify-between px-2 py-3 text-left">
                    <ul className="list-disc list-inside">
                      <li>Request Donation</li>
                      <li>Content Manage</li>
                      <li>Request Donation</li>
                    </ul>
                    <ul className="list-disc">
                      <li>User Authentication</li>
                      <li>Search/Sort</li>
                      <li>Role Dashboards</li>
                    </ul>
                  </div>
                  <div className="space-x-6">
                    <a href="https://lifeflow-25.web.app" target="blank" className="btn bg-react border-none">Live Link</a>
                    <a href="https://github.com/fr25foysal/LifeFlow-Blood-Donation-Community" target="blank" className="btn btn-outline border-white text-white">Github Link</a>
                    </div>                
                </div>
                
                <img src={lifeflow5} alt="lifeflow" />

              </div>
            </div>
          </BoxContainer>
        </section>


        {/* <section className="bg-black pt-14 ">
          <BoxContainer>
            <h2 className="font-medium text-2xl">
              <span className="text-react">Valuable</span> Recomendations
            </h2>
            <div className="divider bg-react h-1 w-56 my-0"></div>
          </BoxContainer>
        </section> */}

        <section id="contact" className="bg-neutral-600 pt-14 ">
          <BoxContainer>
            <h2 className="font-medium text-2xl">
              Contact<span className="text-react"> Me</span>
            </h2>
            <div className="divider bg-react h-1 w-32 my-0"></div>
            <div>
              <div className="container my-24 mx-auto">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12">
                    <form onSubmit={handleSubmit} className="mb-6 text-black">
                      <div className="flex gap-4">
                         <div className="mb-6 w-1/2">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name='name'
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Jhon Doe"
                          required
                        />
                      </div>
                      <div className="mb-6 w-1/2">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name='email'
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      </div>
                     
                      <div className="mb-6">
                        <label
                          htmlFor="subject"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          name='subject'
                          id="subject"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Let us know how we can help you"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your message
                        </label>
                        <textarea
                          id="message"
                          
                          name='message'
                          rows="4"
                          className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 "
                          placeholder="Your message..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-react btn  w-full"
                      >
                        Send message
                      </button>
                    </form>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 ">
                    <div className="flex flex-wrap">
                      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div className="flex items-start">
                          <div className="shrink-0">
                            <div className="inline-block rounded-md  p-4 text-react text-2xl">
                            <BiSupport />
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-2 font-bold dark:text-white">
                              Phone
                            </p>
                           
                            <p className="text-react dark:text-neutral-200">
                              +1 234-567-89
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div className="flex items-start">
                          <div className="shrink-0">
                            <div className="inline-block rounded-md p-4 text-react text-2xl">
                            <MdEmail />
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-2 font-bold dark:text-white">
                              Email questions
                            </p>
                            <a  href="mailto:fr25foysal@gmail.com" className=" text-react dark:text-neutral-200">
                              fr25foysal@gmail.com
                            </a>
                            
                          </div>
                        </div>
                      </div>
                      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div className="align-start flex">
                          <div className="shrink-0">
                            <div className="inline-block rounded-md bg-primary-100 p-4 text-react text-2xl">
                            <FaSquareWhatsapp />
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-2 font-bold dark:text-white">
                             Whatsapp
                            </p>
                            <a href="https://wa.me/+8801750926652" target="blank" className="text-react underline dark:text-neutral-200">
                              Foysal Rahman
                            </a>
                            
                          </div>
                        </div>
                      </div>
                      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div className="align-start flex">
                          <div className="shrink-0">
                            <div className="inline-block rounded-md bg-primary-100 p-4 text-react text-2xl">
                            <FaBug />
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-2 font-bold dark:text-white">
                              Bug report
                            </p>
                            <a href="mailto:fr25foysal@gmail.com" className="text-react dark:text-neutral-200">
                              fr25foysal@gmail.com
                            </a>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BoxContainer>
        </section>
      </div>
    );
};

export default Home;