import styles from "../assets/styles/Navbar.module.scss";
import Container from "./Container";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import Button from "./Button";

export default function Navbar() {
    return (
        <nav className={`${styles.navbar}`}>
            <Container styles="flex">
                <Logo /> <NavigationLinks />
                <Button href="#contact-us">CONTACT US</Button>
            </Container>
        </nav>
    );
}
