import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaVimeo,
  FaLinkedin,
} from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 py-8 px-8 md:px-16 md:flex md:justify-between text-center">
      <div>© 2024 — ALL RIGHTS RESERVED</div>
      <ul className="py-4 flex gap-6 md:gap-8 justify-center">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaPinterest />
        </li>
        <li>
          <FaVimeo />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
    </footer>
  );
}
