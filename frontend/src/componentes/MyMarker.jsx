import React from "react";

const MyMarker = ({ $hover }) => {
    const handleClick = () => {
        console.log(`You clicked on`)
            ;
    };

    return (
        <div className={$hover ? "circle hover" : "circle"} onClick={handleClick}>
            <span className="circleText" >
                {/* {text} */}
            </span>
        </div>
    );
};

export default MyMarker;