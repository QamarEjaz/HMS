import React from "react";
import { Button } from "../GlobalStyles";
import Heading from "../Heading/Heading";
import ModalContainer from "../ModalContainer/ModalContainer";

const LeadRow = ({data}) => {
  return data.map((item) => {
    return (
      <tr key={item._id}>
        <td>{item.firstName} {item.lastName}</td>
        <td> {item.email} </td>
        <td> {item.weAreSelect} </td>
        <td> {item.searchOfSelect} </td>
        <td> {item.date.slice(0,10)} </td>
        <td>
        <ModalContainer
          lg
          title={<Heading level={4}>{item.firstName} idea</Heading>}
          btnComponent={({onClick}) => (
            <Heading level={3} clr Cur >
               {item.idea.slice(0,3)}... <Button onClick={onClick} Width>More</Button>
            </Heading>
          )}
          content={({onClose}) => (
             <Heading level={3} onClose={onClose}>
               {item.idea}
            </Heading>
          )}
        />
      </td>
      
      </tr>
    );
  });
};

export default LeadRow;
