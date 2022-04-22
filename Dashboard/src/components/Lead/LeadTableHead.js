import React from "react";
import Heading from '../Heading/Heading';
const LeadTableHeadItem = ({ item }) => {
    return (
        <th>
            <Heading level={4} opacity title={item}>
             {item}
            </Heading>
        </th>
    );
};

export default LeadTableHeadItem;
