import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Footer from "./components/Footer/Footer";
import Particles from "react-particles-js";
import ContactsContainer from "./components/Contacts/ContactsContainer";

const particlesOpt = {
    particles: {
        number: {
            value: 110,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};

const App = () => {
    return (
        <div className="App">
                <Particles className="particles" params={particlesOpt}/>
                <Header />
                <Main />
                <Skills />
                <Projects />
                <Slogan />
                <ContactsContainer />
                <Footer />
        </div>
    );
};

export default App;
