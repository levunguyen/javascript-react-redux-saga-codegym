import React from 'react';


const Contact = () => (
    <div>
        <div id="head">
            <div className="line">
                <h1>Example of contact page</h1>
            </div>
        </div>
        <div id="content" className="left-align contact-page">
            <div className="line">
                <div className="margin">
                    <div className="s-12 l-6">
                        <h2>Vision Design - graphic zoo</h2>
                        <address>
                            <p><i className="icon-home icon"></i> Gallayova 19, 841 02 Bratislava</p>
                            <p><i className="icon-globe_black icon"></i> Slovakia - Europe</p>
                            <p><i className="icon-mail icon"></i> info@visiondesign.sk</p>
                        </address>
                        <br />
                        <h2>Social</h2>
                        <p><i className="icon-facebook icon"></i> <a href="https://www.facebook.com/pages/Vision-Design-graphic-ZOO/154664684553091">Vision Design - graphic zoo</a></p>
                        <p><i className="icon-facebook icon"></i> <a href="https://www.facebook.com/myresponsee">Responsee</a></p>
                        <p className="margin-bottom"><i className="icon-twitter icon"></i> <a href="https://twitter.com/MyResponsee">Responsee</a></p>
                    </div>
                    <div className="s-12 l-6">
                        <h2>Example contact form (do not use)</h2>
                        <form className="customform" action="">
                            <div className="s-12 l-7"><input name="" placeholder="Your e-mail" title="Your e-mail" type="text" /></div>
                            <div className="s-12 l-7"><input name="" placeholder="Your name" title="Your name" type="text" /></div>
                            <div className="s-12"><textarea placeholder="Your massage" name="" rows="5"></textarea></div>
                            <div className="s-12 m-6 l-4"><button type="submit">Submit Button</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div id="map-block">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d682251.1123056135!2d17.063451638281247!3d48.09010461740988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8cbf758ecb9f%3A0xddeb1d26bce5eccf!2sGallayova+2150%2F19%2C+841+02+D%C3%BAbravka%2C+Slovensk%C3%A1+republika!5e0!3m2!1ssk!2s!4v1412519122400" width="100%" height="450" ></iframe>
        </div>


    </div>

)

export default Contact;