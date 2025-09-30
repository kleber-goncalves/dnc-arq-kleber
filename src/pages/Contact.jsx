import Header from "../components/Header/Header";
import Banner from "./../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import { useContext } from "react";


//CONTEXT
import { AppContext } from "../contexts/createAppContext";

function Contact() {
        const appContext = useContext(AppContext);

    return (
        <>
            <Header />
            <Banner
                title={
                    appContext.languages[appContext.language].menu
                        .contact
                }
                image="contact.jpg"
            />
            <div className="container">
                <ContactForm />
            </div>
            <Footer />
        </>
    );
}

export default Contact;
