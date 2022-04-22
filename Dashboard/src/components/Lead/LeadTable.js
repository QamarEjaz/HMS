import React, {useState, useEffect, useContext} from "react";
import TableRow from "./LeadTableRow";
import TableHeadItem from "./LeadTableHead";
import styled from "styled-components";
import axios from "axios";
import Heading from "../Heading/Heading";
import {TableStyle} from "../UserTable/Table";
import {getAllLeads, leadsSearch} from "../../api/Api";
import {SearchContext} from "../../App";
const Table = ({theadData}) => {
  const newSearch = useContext(SearchContext);
  const fileName = "WebevisLeads";
  const headers = [
    {label: "Email ", key: "email"},
    {label: "Idea ", key: "idea"},
    {label: "Search Of ", key: "searchOfSelect"},
    {label: " Username", key: "userName"},
    {label: " We Are", key: "weAreSelect"},
  ];
  const [user, setUser] = useState([]);

  let userToken = localStorage.getItem("token");
  let config = {
    headers: {
      "x-auth-token": userToken,
    },
  };

  const fetchData = async () => {
    if (newSearch) {
      try {
        const res = await axios.get(`${leadsSearch}/${newSearch}`, config);
        setUser(res.data.data);
      } catch (err) {
        console.log("the error", err);
      }
    } else {
      try {
        const res = await axios.get(`${getAllLeads}`, config);
        setUser(res.data.data);
        console.log("The ", res.data.data);
      } catch (err) {
        console.log("the error", err);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, [newSearch]);
  return (
    <TableContainer>
      <TopLine>
        <Heading level={1}>Leads</Heading>
      </TopLine>
      <TableStyle>
        <thead>
          <tr>
            {theadData.map((h) => {
              return <TableHeadItem key={h} item={h} />;
            })}
          </tr>
        </thead>
        <tbody>
          <TableRow data={user} />
        </tbody>
      </TableStyle>
    </TableContainer>
  );
};

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
`;

export const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Table;
