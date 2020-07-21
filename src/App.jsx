import React from "react";
import "./App.css";
import Header from "./components/01-Header/Header";
import Main from "./components/02-Main/Main";
import Skills from "./components/03-Skills/Skills";
import Projects from "./components/04-Projects/Projects";
import Slogan from "./components/05-Slogan/Slogan";
import Footer from "./components/07-Footer/Footer";
import Particles from "react-particles-js";
import ContactsContainer from "./components/06-Contacts/ContactsContainer";

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
