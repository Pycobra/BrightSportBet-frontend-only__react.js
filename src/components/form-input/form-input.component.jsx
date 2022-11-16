
import React from 'react';
import "./form-input.styles.css"

const FormInput = ({children, handleChange, label, inputtype, ...otherProps}) => {
    return ( 
        <input 
            className={`${
                inputtype==='SearchInputType' ? "search-input"
                : inputtype==='SearchInputType2' ? "search-input2"
                : inputtype==='SmallInput' ? "small-input"
                : inputtype==='roundbordertype phone' ? "round-input phone"
                : inputtype==='roundbordertype' ? "round-input"
                : ''
                } input-fields`
            } 
            {...otherProps}>
                
            {/* { children } */}
        </input>
        )
}
export default FormInput;