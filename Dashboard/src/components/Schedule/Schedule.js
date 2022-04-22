import React from "react";
import styled from "styled-components";
import Table from './ScheduleTable'
const Schedule = () => {
    const theadData = [ "Name", "Phone Number", "Date"];

    return (
        <TableContent>
            <Table theadData={theadData} />
        </TableContent>
    );
};

export const TableContent = styled.div`
overflow-x: auto;
`;

export default Schedule;