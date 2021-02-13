import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <p className="footer__text">Created by Kelvin Brito</p>
                <p className="footer__text">
                    Images from{' '}
                    <a
                        className="footer__link"
                        href="https://undraw.co/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Undraw.co
                    </a>
                </p>
                <p className="footer__text">
                    <a
                        className="footer__link"
                        href="https://www.uniformteeth.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Uniform Teeth
                    </a>
                    &copy;
                    {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
};

export default Footer;
