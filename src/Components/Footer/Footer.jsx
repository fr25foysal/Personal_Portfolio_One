import { Link } from "react-router-dom";
import BoxContainer from "../BoxContainer/BoxContainer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import light_logo from "../../assets/logo_light.png"
const Footer = () => {
    return (
        <div className="bg-black">
            <BoxContainer>
      <footer className="footer items-center p-4 text-neutral-content justify-items-center">
        <aside className="items-center grid-flow-col">
          <Link className="#">
                  <img
                    className="w-[70%]"
                    src={light_logo}
                    alt="Foysal_Rahman"
                  />
                </Link>
         
        </aside>
        <p>Copyright © 2023 - All right reserved by Foysal Rahman</p>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl text-react">
          <Link to={"https://github.com/fr25foysal"}>
          <FaGithub />
          </Link>
          <Link to={"https://www.linkedin.com/in/fr25foysal"}>
          <FaLinkedin />
          </Link>
          <Link to={"https://www.codewars.com/users/fr25foysal"}>
          <SiCodewars />
          </Link>
          {/* <Link>
          <FaGithub />
          </Link> */}
        </nav>
      </footer>
      </BoxContainer>
      </div>
    );
};

export default Footer;