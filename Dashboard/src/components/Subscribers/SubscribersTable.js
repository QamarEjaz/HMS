import React, {useState, useEffect, useContext} from "react";
import TableRow from "./SubscribersTableRow";
import TableHeadItem from "./SubscribersTableHead";
import styled from "styled-components";
import axios from "axios";
import {CSVLink} from "react-csv";
import Heading from "../Heading/Heading";
import {TableStyle} from "../UserTable/Table";
import {getAllsubscribers, subscriberSearch} from "../../api/Api";
import {SearchContext} from "../../App";

const Table = ({theadData}) => {
  const fileName = "WebevisSubscribers";
  const headers = [{label: "Email ", key: "email"}];
  const [user, setUser] = useState([]);
  const newSearch = useContext(SearchContext);

  let userToken = localStorage.getItem("token");
  let config = {
    headers: {
      "x-auth-token": userToken,
    },
  };
  const fetchData = async () => {
    if (newSearch) {
      try {
        const res = await axios.get(`${subscriberSearch}/${newSearch}`, config);
        setUser(res.data.data);
      } catch (err) {
        console.log("the error", err);
      }
    } else {
      try {
        const res = await axios.get(`${getAllsubscribers}`, config);
        setUser(res.data.data);
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
        <Heading level={1}>Subscribers List</Heading>
        <CsvExcelFile headers={headers} data={user} filename={fileName}>
          Download csv
        </CsvExcelFile>
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
  background: #fff;
  padding: 20px;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
`;

export const CsvExcelFile = styled(CSVLink)`
  background: #00bf80;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #109CF1;
  }
`;
export default Table;
