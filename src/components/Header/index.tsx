import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-between py-6 lg:py-10">
                <Link to="/" className="flex items-center">
                    <span className="mr-2">
                        <img src="/assets/logo.jpeg" width={100} alt="logo" />
                    </span>                    
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

                        <li className="group relative mr-6 mb-1">
                            <div
                                className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
                            ></div>
                            <Link to="/"
                                className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-primary dark:group-hover:text-secondary"
                            >Inicio</Link>
                        </li>

                        <li className="group relative mr-6 mb-1">
                            <div
                                className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-yellow"
                            ></div>
                            <Link to="/contact"
                                className="relative z-30 block px-2 font-body text-lg font-medium text-primary transition-colors group-hover:text-green dark:text-primary dark:group-hover:text-secondary"
                            >Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header