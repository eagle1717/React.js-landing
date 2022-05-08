import logo from "../assets/images/icons/logo.svg";

export default function Logo() {
    const goToTopOfThePage = () => {
        window.scrollTo(0, 0);
    };
    return <img src={logo} alt="logo" className="cursor-pointer" onClick={() => goToTopOfThePage()} />;
}
