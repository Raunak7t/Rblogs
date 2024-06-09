import React from "react";
import StyledText from "../StyledText";
import {
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa";
import Container from "../Container";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-slate-800/50 py-1">
      <Container className="flex justify-around items-center flex-wrap gap-x-14">
        <div className="flex items-center gap-2">
          <FaRegCopyright className="text-xl text-purple-300" />
          <StyledText className="font-semibold text-xl">Raunak</StyledText>
        </div>
        <div className="links text-xl flex gap-6 justify-center py-2 sm:order-1 sm:w-full">
          <a href="mailto:raunaktiwari1207@gmail.com" target="_blank">
            <IoMailOutline />
          </a>
          <a href="https://www.linkedin.com/in/raunak7t/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Raunak7t" target="_blank">
            <FiGithub />
          </a>
          <a href="https://www.instagram.com/raunak7t/" target="_blank">
            <FaInstagram />
          </a>
        </div>
        <div className="logo">
          <StyledText className="font-semibold text-2xl">R blogs</StyledText>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
