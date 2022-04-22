import React, {useState, useEffect, useContext} from "react";
import {SearchContext} from "../../App";
import TableRow from "./ScheduleTableRow";
import TableHeadItem from "./ScheduleTableHead";
import axios from "axios";
import {TableStyle} from "../UserTable/Table";
import {getAllScheduler, schedulerSearch} from "../../api/Api";
const Table = ({theadData}) => {
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
        const res = await axios.get(`${schedulerSearch}/${newSearch}`, config);
        setUser(res.data.data);
      } catch (err) {
        console.log("the error", err);
      }
    } else {
      try {
        const res = await axios.get(`${getAllScheduler}`, config);
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
        <TableRow data={user} />
      </tbody>
    </TableStyle>
  );
};

export default Table;
