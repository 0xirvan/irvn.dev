import React from "react";
import {
  SiGithub,
  SiInstagram,
  SiMailboxdotorg,
  SiX,
} from "@icons-pack/react-simple-icons";

function Footer() {
  return (
    <footer className="lg:mt-22 mt-14">
      <div className="flex items-center justify-between">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} Irvan pramana
        </span>
        <div className="flex gap-4">
          <a href="">
            <SiGithub size={16} />
          </a>
          <a href="">
            <SiInstagram size={16} />
          </a>
          <a href="">
            <SiX size={16} />
          </a>
          <a href="">
            <SiMailboxdotorg size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
