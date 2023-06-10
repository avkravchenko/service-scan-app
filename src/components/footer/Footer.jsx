import React from "react";
import logoFooter from '../../assets/logo-footer.png';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer__logo"><img src={logoFooter} alt="" /></div>
                <div className="footer__info">
                    <ul className="footer__info__list">
                        <li>г. Москва, Цветной б-р, 40</li>
                        <li>+7 495 771 21 11</li>
                        <li>info@skan.ru</li>
                    </ul>
                    <p>Copyright. 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;