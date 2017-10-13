import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
    <header>
        <nav>
            <div className="line">
                <div className="top-nav">
                    <div className="logo hide-l">
                        <a href="index.html">DESIGN <br /><strong>THEME</strong></a>
                    </div>
                    <p className="nav-text">Custom menu text</p>
                    <div className="top-nav s-12 l-5">
                        <ul className="right top-ul chevron">
                            <li>
                                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                            </li>
                            <li><a href="product.html">Product</a>
                            </li>
                            <li><a href="services.html">Services</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="s-12 l-2">
                        <li className="logo hide-s hide-m">
                            <img src="img/codegymlogo.png" alt="Codegym" />
                        </li>
                    </ul>
                    <div className="top-nav s-12 l-5">
                        <ul className="top-ul chevron">
                            <li>
                                <Link to="library" activeClassName="active">Gallery</Link>
                            </li>
                            <li>
                                <a>Chương Trình Đào Tạo</a>
                                <ul>
                                    <li>
                                        <Link to="fullstack" activeClassName="active">FullStack</Link>
                                    </li>
                                    <li><a>Premium</a>
                                    </li>
                                    <li>
                                        <a>Company 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li><Link to="contact" activeClassName="active">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)

export default Header;