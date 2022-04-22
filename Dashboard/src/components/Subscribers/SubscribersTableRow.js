import React from "react";


const SubscribersTableRow = ({data}) => {
  return data.map((item) => {
    return (
      <tr key={item._id}>
        <td> {item.email} </td>
        <td> {item.date.slice(0,10)} </td>
      </tr>
    );
  });
};


export default SubscribersTableRow;