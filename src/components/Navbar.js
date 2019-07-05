import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
                <div className="Navbar jumbotron">
                    <div className="ui grey inverted labeled icon menu">
                        <Link to="/" className="item">
                            <i className="home icon"></i>
                            Home
                        </Link>
                        <Link to="/quickstart" className="item">
                            <i className="fast forward icon"></i>
                            Quickstart
                        </Link>
                        <a href="https://github.com/KendrickAng/Orbital/releases/download/0.3/desktop-beta-0.3.jar" className="item">
                            <i className="download icon"></i>
                            Download
                        </a>
                        <a href="https://github.com/KendrickAng/Orbital" className="item">
                            <i className="github icon"></i>
                            Source
                        </a>
                    </div>
                </div>
        );
    }
}

export default Navbar;