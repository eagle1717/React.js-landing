import Navbar from "../components/Navbar";
import styles from "../assets/styles/Home.module.scss";
import Button from "../components/Button";
import Container from "../components/Container";
import Footer from "../components/Footer";

import aboutUs from "../assets/images/illustrations/about-us.png";
import howToApply from "../assets/images/illustrations/how-to-apply.png";

export default function Home() {
    return (
        <>
            <div className={`${styles.scene} bg-no-repeat`}>
                <Navbar />
                <Container>
                    <h1 className={`${styles.title} text-white`}>
                        Your awesome traffic permit consultant.
                    </h1>
                    <Button href="https://nativeci.io" new-tab with-icon styles={`${styles.button}`}>
                        GET STARTED
                    </Button>
                </Container>
            </div>
            <Container>
                <section id="about-us" className="flex-start">
                    <div>
                        <h3 className="text-red">ABOUT US</h3>
                        <p className={`${styles.paragraph} text-base`}>
                            The occupational traffic permit is one of the most important
                            things in the company when carrying out freight transport. In
                            fact, it is a prerequisite for doing business traffic at all.
                        </p>
                        <div className={`${styles.notification} relative bg-red-light`}>
                            <p className="text-2xl font-medium">
                                How do you do when you need to obtain a commercial traffic
                                permit for freight transport to your business?
                            </p>
                        </div>
                    </div>
                    <img src={aboutUs} alt="about-us" />
                </section>
                <section id="how-to-apply" className="flex-start">
                    <img src={howToApply} alt="how-to-apply" />
                    <div>
                        <h3 className="text-red">HOW TO APPLY</h3>
                        <p className={`${styles.paragraph} text-base`}>
                            When applying for a traffic permit, there are certain
                            requirements that you must meet that are included in the
                            examination: requirements for professional knowledge, solid
                            establishment, good reputation and financial resources.
                            Important to remember is to confirm your application for a
                            traffic permit by the company's company signer or CEO.
                        </p>
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    );
}
