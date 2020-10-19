import React from 'react';
import {Checkbox} from "react-bootstrap";
import {Link} from "react-router-dom";

const PromotionsListRowComponent = ({promotion}) => {
    const activeCheckboxStyle = {

    };
    let stateCheckboxLabel = promotion.isActive ? 'Active' : 'Inactive';
    return (
        <tr>
            <td><Link to={'/promotion/' + promotion._id}>{promotion._id}</Link></td>
            <td>{promotion.promoName}</td>
            <td><a href={promotion.productUrl} target="_blank" rel="noopener noreferrer">{promotion.productName}</a></td>
            <td>
                <Checkbox checked={promotion.isActive} disabled inline style={activeCheckboxStyle}>
                    {stateCheckboxLabel}
                </Checkbox>
            </td>
            <td>{promotion.allocatedCodes}/{promotion.numberOfCodes}</td>
            <td></td>
        </tr>
    );
}

export default PromotionsListRowComponent;