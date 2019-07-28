import React from 'react';
import '../styles/TextBox.css';

// Component for drawing text onto a screen.
class TextBox extends React.Component {
    render() {
        return (
            <div className={`${this.props.textSize}`}>
                { this.props.textContent }
            </div>
        );
    }
    
}

TextBox.defaultProps = {
    textSize: "h6",
    textContent: "Placeholder"
}

export default TextBox;