import styles from "../assets/styles/NavigationLinks.module.scss";

export default function NavigationLinks() {
    return (
        <ul className={`${styles.links} flex text-white text-sm font-bold`}>
            <li className="jump-animation">
                <a href="#about-us">ABOUT</a>
            </li>
            <li className="jump-animation">
                <a href="#how-to-apply">HOW TO APPLY</a>
            </li>
            <li className="jump-animation">
                <a href="https://google.com" target="_blank">FAQS</a>
            </li>
        </ul>
    );
}
