import styles from "../assets/styles/Button.module.scss";
import arrowRight from "../assets/images/icons/arrows/arrow-right.svg";

export default function Button(props) {
    return (
        <a href={props.href} target={props['new-tab'] ? '_blank' : null} className={`${styles.button} ${props.styles} flex w-max bg-red text-white rounded-sm text-sm font-bold jump-animation`}>
            <span>{props.children}</span>
            {props["with-icon"] && (
                <img src={arrowRight} className={`${styles.icon}`} />
            )}
        </a>
    );
}
