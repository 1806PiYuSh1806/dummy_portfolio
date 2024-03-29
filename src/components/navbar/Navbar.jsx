import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a href="https://github.com/1806PiYuSh1806" target="_blanck">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/piyush-upadhyay-513876261/" target="_blanck">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/_piyusshhh/" target="_blanck">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
