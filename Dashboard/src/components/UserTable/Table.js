import React, {useState, useEffect, useContext} from "react";
import {SearchContext} from "../../App";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHead";
import styled from "styled-components";
import axios from "axios";
import {searchUser, allUsers} from "../../api/Api";
const Table = ({theadData}) => {
  const newSearch = useContext(SearchContext);
  const [user, setUser] = useState([]);
  const sendToken = localStorage.getItem("token");
  let config = {
    headers: {
      "x-auth-token": sendToken,
    },
  };

  const fetchData = async () => {
    if (newSearch) {
      try {
        const res = await axios.get(`${searchUser}/${newSearch}`, config);
        setUser(res.data.data);
      } catch (err) {
        console.log("the error", err);
      }
    } else {
      try {
        const res = await axios.get(`${allUsers}`, config);
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
    <TableStyle>
      <thead>
        <tr>
          {theadData.map((h) => {
            return <TableHeadItem key={h} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        <TableRow data={user} fetchData={fetchData} />
      </tbody>
    </TableStyle>
  );
};

export const TableStyle = styled.table`
  width: 100%;
  background: #fff;
  padding: 0 10px;
  th {
    height: 48px;
    text-align: left;
    border-radius: 4px;
  }
  tbody tr {
    height: 64px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #109CF1;
  }
  tbody tr td:first-child {
    cursor: pointer;
  }
`;
export default Table;
