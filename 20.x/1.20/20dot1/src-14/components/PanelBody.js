import React from "react";

const PanelBody = props => (
    <div className="panel-body text-center">
        <p> Click Count: {props.count}</p>
        <button className="btn btn-primary" onClick={ () => props.handleIncrement(props.incrementStep)}>
            Increment
        </button>

    </div>
);

export default PanelBody;