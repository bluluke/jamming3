import React from "react";

import './Track.css';

class Track extends React.Component {

    renderAction() {
        if(this.props.isRemoval) {
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action">+</button>
        }
    };

    render() {
        return (
            <div className="Track">
  <div className="Track-information">
    <h3>{this.props.Track.name}</h3>
    <p>{this.props.track.artist} | {this.props.track.album} </p>
  </div>
  {this.renderAction()}
</div>

        )
    }
}

export default Track;


// Check the latest ammendments in the render section of this file have been rendered propperly on the ReactStage. 