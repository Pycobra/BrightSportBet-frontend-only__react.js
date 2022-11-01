
import React from 'react';
import "./form-input.styles.css"

const FormInput = ({children, handleChange, label, ...otherProps}) => {
    const {shrinkinputtype, issearch, homepage, roundbordertype, inputtype} = {...otherProps}
    return (
        shrinkinputtype==="true"
        ? (
            <div className="group">
                <input className={`${
                inputtype==='SmallInputType' ? "small-input" 
                : inputtype==='SmallInputType2' ? 'small-input2'
                : null}
                ${issearch==="true" ? 'issearch' : null} group-form-input`} 
                onChange={handleChange} {...otherProps} >
                </input>
                {
                label 
                ? (<label className={`${otherProps.value.length ? 'shrink' : ''} ${issearch==="true" ? 'issearch' : null} group-form-input-label`} >{label}</label>)
                : null
                }
            </div>
            )
        
        : 
        <input 
            className={`${
                inputtype==='SearchInputType' ? "search-input"
                : inputtype==='SearchInputType2' ? "search-input2"
                : inputtype==='SmallInput' ? "small-input"
                : ''
                } input-fields`
            } 
            {...otherProps}>
                
            {/* { children } */}
        </input>
        )
}
export default FormInput;