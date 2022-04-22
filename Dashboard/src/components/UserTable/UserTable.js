import React from "react";
import styled from "styled-components";
import Table from "./Table";

const ContactTable = () => {
  const theadData = ["Name", "Email", "Role", "Edit", "Delete"];

  return (
    <TableContent>
      <Table theadData={theadData} />
    </TableContent>
  );
};

export const TableContent = styled.div`
  overflow-x: auto;
`;

export default ContactTable;
