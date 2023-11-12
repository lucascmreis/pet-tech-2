import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-6 lg:py-10">
        <Link to="/" className="flex items-center">
          <span className="flex mr-2 justify-center">
            <img src="/assets/logo.png" width={144} alt="logo" />
          </span>
          <h3 className="font-semibold text-3xl mb-2 text-[#ba724e]">
            Pet Tech
          </h3>
        </Link>
        <div className="flex items-center lg:hidden">
          <i className="bx mr-8 cursor-pointer text-3xl text-primary dark:text-primary"></i>

          <svg
            width="24"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-primary dark:text-primary"
          >
            <g fill-rule="evenodd">
              <rect width="24" height="3" rx="1.5" />
              <rect x="8" y="6" width="16" height="3" rx="1.5" />
              <rect x="4" y="12" width="20" height="3" rx="1.5" />
            </g>
          </svg>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center">
            <li className="group relative mr-6 mb-1 px-3 py-1 hover:bg-[#FFA274] hover:text-white rounded-full">
              <Link
                to="/"
                className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-primary dark:group-hover:text-white"
              >
                Início
              </Link>
            </li>

            <li className="group relative mr-6 mb-1 px-3 py-1 hover:bg-[#FFA274] hover:text-white rounded-full">
              <Link
                to="/contact"
                className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-primary dark:group-hover:text-white"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
