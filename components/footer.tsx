import React from "react";
import {
  SiFacebook,
  SiGithub,
  SiMailboxdotorg,
  SiX,
} from "@icons-pack/react-simple-icons";
import { siteConfig } from "@/lib/site-config";

function Footer() {
  return (
    <footer className="lg:mt-22 mt-14">
      <div className="flex items-center justify-between">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} Irvan pramana
        </span>
        <div className="flex gap-4">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <SiGithub size={16} />
          </a>
          <a
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <SiFacebook size={16} />
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <SiX size={16} />
          </a>
          <a href="mailto:irvandotdev@gmail.com" aria-label="Email">
            <SiMailboxdotorg size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
