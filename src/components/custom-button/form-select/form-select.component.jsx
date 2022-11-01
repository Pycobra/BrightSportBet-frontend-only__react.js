import React, { useState } from "react";
import "./form-select.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector} from "reselect"; 




const FormSelect = ({children, label, data, to_be_selected, handleSelectChange, ...otherProps}) => {
    const {selecttype, type, name,} = {...otherProps}
    return (
            <select
                onChange={handleSelectChange} 
                className={`${
                    selecttype==='MidInputType' ? "mid-size"
                    : selecttype==='MidInputType2' ? "mid-size2"
                    : ''
                    } select-fields`
                } 
                {...otherProps}>
                <option value={null}>{"--- --- --- --- --- ---"}</option>
                {
                data
                ? data.map((name, idx) => {
                    // console.log(name + `${idx}`)
                    return (
                    <option key={idx} id={name + `${idx}`} name={name + `${idx}`} 
                            value={name}>
                            {/* selected={`${name}`}> */}
                            {name}
                    </option>)
                    
                })
                : null
            }
            </select>
        )
}
export default FormSelect;