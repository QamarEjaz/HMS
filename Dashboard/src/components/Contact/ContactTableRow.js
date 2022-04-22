import React from "react";

const ContactTableRow = ({data}) => {
  console.log("props data")
  console.log(data)
  return data.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td> {item.email} </td>
        <td> {item.phone} </td>
        <td> {item.department} </td>
      </tr>
    );
  });
};

export default ContactTableRow;
