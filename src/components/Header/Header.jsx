import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/dnc-logo 1.svg";
import Logokl from "../../assets/logotipo/logo-4Copia.png"
import Button from "../Button/Button";
import { AppContext } from "../../contexts/createAppContext";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const appContext = useContext(AppContext);

    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/">
                        <img className="logo" src={Logokl} alt="Logo" />
                    </Link>

                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>

                    <nav className={`${isOpen ? "open" : ""}`}>
                        <Button
                            buttonStyle="unstyled"
                            className="mobile-menu close-btn"
                            onClick={toggleMenu}
                        >
                            X
                        </Button>
                        <ul className="d-flex">
                            <li>
                                <NavLink to="/" end>
                                    {
                                        appContext.languages[
                                            appContext.language
                                        ].menu.home
                                    }
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">
                                    {
                                        appContext.languages[
                                            appContext.language
                                        ].menu.about
                                    }
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects">
                                    {
                                        appContext.languages[
                                            appContext.language
                                        ].menu.projects
                                    }
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">
                                    {
                                        appContext.languages[
                                            appContext.language
                                        ].menu.contact
                                    }
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
