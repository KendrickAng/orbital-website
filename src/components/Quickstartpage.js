import React from 'react';
import Navbar from './Navbar';
import TextBox from './TextBox';
import '../styles/Quickstartpage.css';

const instruction = "Download the .jar file from the homepage. Make sure you have Java installed. Enjoy :)";

class Quickstartpage extends React.Component {
    render() {
        return (
            <div className="Quickstartpage">
                <span className="instruction">{<TextBox textSize="h3" textContent={instruction}/>}</span>
                <Navbar/>
            </div>
        );
    }
}

export default Quickstartpage;