import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from "react-bootstrap";

const SelectFieldGroup = ({ id, label, options, help, error, ...props }) => {
    return (
        <FormGroup controlId={id} validationState={error ? 'error' : null}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl componentClass="select"  {...props}>
                {options.map(option=>{
                    return <option key={option.value} value={option.value}>{option.text}</option>;
                })}
            </FormControl>
            {help && <HelpBlock>{help}</HelpBlock>}
            {error && <div className="alert alert-danger">{error}</div>}
        </FormGroup>
    );
}

export default SelectFieldGroup;