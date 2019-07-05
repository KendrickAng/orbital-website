import React from 'react';
import TextBox from './TextBox';
import '../styles/Homepage.css';
import Navbar from './Navbar';

class Homepage extends React.Component {
    render() {
        return (
            <div className="bg-image jumbotron">
                <span className="title">{<TextBox textSize="h1" textContent="untitled"/>}</span>
                <span className="sub-title">{<TextBox textSize="h3" textContent="A libgdx game"/>}</span>
                <Navbar/>
            </div>
        );
    }
}

export default Homepage;