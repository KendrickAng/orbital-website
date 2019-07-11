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
                <div className="row" key={docSnapshot.get("name")}>
                    <div className="column">
                        <h2>{docSnapshot.get("name")}</h2>
                    </div>
                    <div className="column">
                        <h2>{docSnapshot.get("score")}</h2>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="ui two column grid container segment">
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