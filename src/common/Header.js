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
                            <li><a href="index.html">Home</a>
                            </li>
                            <li><a href="product.html">Product</a>
                            </li>
                            <li><a href="services.html">Services</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="s-12 l-2">
                        <li className="logo hide-s hide-m">
                            <a href="index.html">DESIGN <br /><strong>THEME</strong></a>
                        </li>
                    </ul>
                    <div className="top-nav s-12 l-5">
                        <ul className="top-ul chevron">
                            <li><a href="gallery.html">Gallery</a>
                            </li>
                            <li>
                                <a>Company</a>
                                <ul>
                                    <li><a>Company 1</a>
                                    </li>
                                    <li><a>Company 2</a>
                                    </li>
                                    <li>
                                        <a>Company 3</a>
                                        <ul>
                                            <li><a>Company 3-1</a>
                                            </li>
                                            <li><a>Company 3-2</a>
                                            </li>
                                            <li><a>Company 3-3</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)

export default Header;