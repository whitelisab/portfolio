import {
  FaEnvelope,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaSalesforce,
  FaTwitter
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="my-8">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mb-2 ml-2">
          <ul className="flex gap-4">
            <li className="w-6 h-6 opacity-70 hover:opacity-100 transition">
              <a href="mailto: whitelisab@gmail.com">
                <FaEnvelope />
              </a>
            </li>
            <li className="w-6 h-6 opacity-70 hover:opacity-100 transition">
              <a
                href="https://www.linkedin.com/in/whitelisab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="w-6 h-6 opacity-70 hover:opacity-100 transition">
              <a
                href="https://github.com/whitelisab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="w-6 h-6 opacity-70 hover:opacity-100 transition">
              <a
                href="https://gitlab.com/whitelisab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGitlab />
              </a>
            </li>
            <li className="w-6 h-6 opacity-70 hover:opacity-100 transition">
              <a
                href="https://twitter.com/lmbel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="w-6 h-6 opacity-70 hover:opacity-100 transition">
              <a
                href="https://trailblazer.me/id/whitelisab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSalesforce />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <p className="text-neutral-800 text-md">
          Copyright &copy; Lisa White {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
