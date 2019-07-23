import React from 'react';
import Navbar from './Navbar';
import '../styles/Highscorespage.css';
import { connect } from 'react-redux';
import { fetchScores } from '../actions/scoresAction';

class Highscorespage extends React.Component {
    componentDidMount() {
        this.props.fetchScores();
    }

    // Iterates over an array of DocumentSnapshots
    renderScoreList() {
        return this.props.scores.map(docSnapshot => {
            return (
                <div className="row" key={docSnapshot.get("score")}>
                    <div className="column">
                        <h3>{docSnapshot.get("name")}</h3>
                    </div>
                    <div className="column">
                        <h3>{docSnapshot.get("score")}</h3>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="ui two column grid container segment">
                    <div className="row">
                        <div className="column">
                            <h2>PLAYER</h2>
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