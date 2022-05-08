import { useState, useEffect } from "react";
import facebook from "../assets/images/icons/socials/facebook.svg";
import instagram from "../assets/images/icons/socials/instagram.svg";
import twitter from "../assets/images/icons/socials/twitter.svg";
import styles from "../assets/styles/Footer.module.scss";
import Container from "./Container";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(null);
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <footer id="contact-us" className={`${styles.footer} bg-pink`}>
            <Container styles="flex">
                <p className="select-none">&copy; Copyright, {currentYear}</p>
                <div className="flex">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        className={`${styles.social} bg-red rounded-full relative jump-animation`}
                    >
                        <img src={facebook} alt="facebook" className="abs" />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        className={`${styles.social} bg-red rounded-full relative jump-animation`}
                    >
                        <img src={twitter} alt="twitter" className="abs" />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        className={`${styles.social} bg-red rounded-full relative jump-animation`}
                    >
                        <img src={instagram} alt="instagram" className="abs" />
                    </a>
                </div>
            </Container>
        </footer>
    );
}
