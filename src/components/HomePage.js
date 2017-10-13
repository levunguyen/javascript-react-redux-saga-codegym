import React from 'react';
import { Link } from 'react-router';

// Home page component. This serves as the welcome page with link to the library
const HomePage = () => (
    <section>
        <div id="bannervideo">
            <div>
                <div className="item">
                    <img src="img/first.jpg" alt="" />
                        <div className="carousel-text">
                            <div className="line">
                                <div className="s-12 l-9">
                                    <h2>Theme based on Responsee framework</h2>
                                </div>
                                <div className="s-12 l-9">
                                    <p>With amazing responsive carousel
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
);

export default HomePage;