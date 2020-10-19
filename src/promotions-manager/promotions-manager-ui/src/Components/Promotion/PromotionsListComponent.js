import React from 'react';
import {Table} from "react-bootstrap";
import PromotionsListRow from "./PromotionsListRowComponent";

const PromotionsList = ({promotions}) => {
    return (
        <Table responsive>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Product</th>
                <th>State</th>
                <th>Codes</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {promotions.map(promotion =>
                    <PromotionsListRow key={promotion._id} promotion={promotion}/>)}
            </tbody>
        </Table>
    );
};

export default PromotionsList;