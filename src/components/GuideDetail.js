import React from 'react';
import { connect } from 'react-redux';

class GuideDetail extends React.Component {
    renderList(guideArr) {
        return guideArr.map(str => {
            return (
                <div className="item" key={str}>
                    {str}
                </div>
            );
        });
    }

    render() {
        if (!this.props.guide) {
            return <div></div>;
        } else {
            return (
                <div className="ui segment">
                    <div className="ui grey header">{this.props.guide.title}</div>
                    <p>
                        {this.renderList(this.props.guide.content)}
                    </p>
                </div>
            );
        }  
    }
}

const mapStateToProps = (state) => {
    // reach into state object and pull out the property we want
    return { guide: state.selectedGuide };
}

export default connect(mapStateToProps)(GuideDetail);