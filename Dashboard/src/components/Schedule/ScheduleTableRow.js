import React from "react";

const ScheduleRow = ({data}) => {
  return data.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.userName}</td>
        <td> {item.phone} </td>
        <td> {item.date.slice(0,10)} </td>
      </tr>
    );
  });
};

export default ScheduleRow;