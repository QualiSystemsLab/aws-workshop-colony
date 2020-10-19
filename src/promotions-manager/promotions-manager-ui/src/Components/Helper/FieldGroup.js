import React from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from "react-bootstrap";

const FieldGroup = ({ id, label, help, error, ...props }) => {
    return (
        <FormGroup controlId={id} validationState={error ? 'error' : null}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
            {error && <div className="alert alert-danger">{error}</div>}
        </FormGroup>
    );
}

export default FieldGroup;