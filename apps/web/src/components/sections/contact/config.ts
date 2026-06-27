import type { Contact } from "@/types/contact";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";

const contact: Contact = {
  email: "avishkag18@gmail.com",
  socials: [
    {
      name: "Github",
      href: "https://github.com/AvishkaGihan",
      Icon: SiGithub,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/avishkagihan/",
      Icon: SiLinkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/avishkagihanperera/",
      Icon: SiInstagram,
    },
  ],
};

export { contact };
