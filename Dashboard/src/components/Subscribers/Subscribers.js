import React from "react";
import styled from "styled-components";
import Table from './SubscribersTable'
const Subscribers = () => {
    const theadData = ["Subscribers", "Date"];

    return (
        <TableContent>
            <Table theadData={theadData} />
        </TableContent>
    );
};

export const TableContent = styled.div`
overflow-x: auto;
`;

export default Subscribers;