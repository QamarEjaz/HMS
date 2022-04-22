import React from "react";
import styled from "styled-components";
import Table from "./LeadTable";
const Leads = () => {
  const theadData = [
    "Name",
    "email",
    "Company",
    "Services",
    "Date",
    "Idea"
  ];

  return (
    <TableContent>
      <Table theadData={theadData} />
    </TableContent>
  );
};

export const TableContent = styled.div`
  overflow-x: auto;
`;

export default Leads;
