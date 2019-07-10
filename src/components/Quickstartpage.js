import React from 'react';
import Navbar from './Navbar';
import TextBox from './TextBox';
import GuideList from './GuideList';
import GuideDetail from './GuideDetail';
import '../styles/Quickstartpage.css';

const instruction = "Click the following to read more :)";

class Quickstartpage extends React.Component {
    render() {
        return (
            <div className="Quickstartpage">
                <span className="instruction">{<TextBox textSize="h3" textContent={instruction}/>}</span>
                <GuideList/>
                <GuideDetail/>
                <Navbar/>
            </div>
        );
    }
}

export default Quickstartpage;