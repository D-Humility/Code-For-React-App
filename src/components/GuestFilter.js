import React from "react";

export default function GuestFilter(props) {
    return (
        <button 
          type="button" 
          className="btn btn-info col ml-1 font-weight-bold"
          aria-pressed={props.isPressed}
          onClick={() => props.setFilter(props.name)}
        >
          {props.name}
        </button>
      );
}
