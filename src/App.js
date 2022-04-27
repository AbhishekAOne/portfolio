import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import "./css/styles.css"
const App = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <PortfolioSection/>
            <AboutSection/>
            {/* <ContactSection/> */}
            <Footer/>
        </div>
    )
}

export default App;