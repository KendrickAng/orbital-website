import React from 'react';
import Navbar from './Navbar';
import '../styles/Highscorespage.css';
import { connect } from 'react-redux';
import { fetchScores } from '../actions/scoresAction';

// Represents the table of highscores.
class Highscorespage extends React.Component {
    componentDidMount() {
        this.props.fetchScores();
    }

    formatLevel(level) {
        return (level / 100).toFixed(2);
    }

    formatTime(time) {
        let s = Math.round(time);
        let m = Math.round(s / 60); 
        let h = Math.round(m / 24);

        s = s % 60;
        m = m % 60;
        if (h > 99) {
            return "OVER 9000!";
        } else {
            return String(h).padStart(2, '0') + ":" +
                    String(m).padStart(2, '0') + ":" +
                    String(s).padStart(2, '0');
        }
    }

    // Iterates over an array of DocumentSnapshots (Cloud firestore API).
    renderScoreList() {
        return this.props.scores.map(docSnapshot => {
            return (
                <div className="row" key={docSnapshot.get("score")}>
                    <div className="column">
                        <h4>{docSnapshot.get("name")}</h4>
                    </div>
                    <div className="column">
                        <h4>{this.formatLevel(docSnapshot.get("level"))}</h4>
                    </div>
                    <div className="column">
                        <h4>{this.formatTime(docSnapshot.get("time"))}</h4>
                    </div>
                    <div className="column">
                        <h4>{docSnapshot.get("score")}</h4> 
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="ui four column grid container segment">
                    <div className="row">
                        <div className="column">
                            <h2>NAME</h2>
                        </div>
                        <div className="column">
                            <h2>LEVEL</h2>
                        </div>
                        <div className="column">
                            <h2>TIME</h2>
                        </div>
                        <div className="column">
                            <h2>SCORE</h2>
                        </div>
                    </div>
                    {this.renderScoreList()}
                </div>
                <Navbar/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { scores: state.scores };
};

export default connect(
    mapStateToProps, 
    { fetchScores }
)(Highscorespage);