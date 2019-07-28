import React from 'react';
import { connect } from 'react-redux'; // middleware for this cmpt to comms with Provider
import { selectGuide } from '../actions';

// Represents a collection of Guide components.
class GuideList extends React.Component {
    renderList() {
        return this.props.guides.map((guide) => {
            return (
                <div className="ui column" key={guide.title}>
                    <div className="ui container card">
                        <div className="ui content">
                            <div className="ui header">{guide.title}</div>
                            <div className="description">{guide.description}</div>
                        </div>
                        <button className="ui bottom attached button" onClick={() => this.props.selectGuide(guide)}>
                            <i className="add icon"></i>
                            Select
                        </button>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui three column doubling stackable grid container">{this.renderList()}</div>
        );
    }
}

// Component subscribes to changes. Get specific data out of redux store and put in component props
const mapStateToProps = (state) => {
    return { guides: state.guides };
}

// configuring the connect function
export default connect(mapStateToProps, {
    selectGuide: selectGuide // action creator passes to component as prop. connect function automatically dispatches when called
})(GuideList); 