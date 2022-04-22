import React from "react";
import styled from "styled-components";
import Table from './ContactTable'
const Contacts = () => {
    const theadData = [ "Name", "Email", "Phone Number", "Subject", "Date", "Message"];

    return (
        <TableContent>
            <Table theadData={theadData} />
        </TableContent>
    );
};

export const TableContent = styled.div`
overflow-x: auto;
`;

export default Contacts;