import React from "react";
import "./custom-button.styles.css";


const CustomButton = ({children, buttonType, ...otherProps}) => (
    <button className={`${
        (buttonType === "MajorButton") ? "major-btn" 
        : (buttonType === "FlatButton") ? "flat-button" 
        : (buttonType === "circleType") ? "circle-type" 
        : (buttonType === "circleType2") ? "circle-type-2"
        : (buttonType === "borderType") ? "border-type" 
        : ''} custom-button`} {...otherProps}>
        { children }
    </button>
)
export default CustomButton;