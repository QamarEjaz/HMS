import React from "react";
import styled from "styled-components";
import {Button} from "../GlobalStyles";
import Heading from "../Heading/Heading";
import ModalContainer from "../ModalContainer/ModalContainer";
import UserDetail from "./UsersDetail/UserDetail";
import EditUser from "./EditUser";
import {MdModeEditOutline, MdDelete} from "react-icons/md";
import axios from "axios";
import {removeUserById} from "../../api/Api";

const TableRow = ({data, fetchData}) => {


  const handleDelete = (idparam) => {
    axios.delete(`${removeUserById}/${idparam}`).then((res) => {
      if (res.status === 200) {
        fetchData();
      }
    });
  };

  return data.map((item) => (
    <tr key={item._id}>
      <td>
        <ModalContainer
          lg
          title={`${item.name} Details`}
          btnComponent={({onClick}) => (
            <td level={4} clr Cur onClick={onClick}>
              {item.name}
            </td>
          )}
          content={({onClose}) => (
            <UserDetail
              onClose={onClose}
              name={item.name}
              email={item.email}
              role={item.role}
            />
          )}
        />
      </td>
      <td> {item.email} </td>
      <td> {item.role}</td>
      <td>
        <ModalContainer
          lg
          title="Edit User"
          btnComponent={({onClick}) => (
            <Heading level={4} onClick={onClick}>
              <EditIcon />
            </Heading>
          )}
          content={({onClose}) => (
            <EditUser
              fetchData={fetchData}
              onClose={onClose}
              itemId={item._id}
              name={item.name}
              email={item.email}
            />
          )}
        />
      </td>
      <td>
        <ModalContainer
          lg
          title={`${item.name} Details`}
          btnComponent={({onClick}) => (
            <td onClick={onClick}>
              <DeleteIcon />
            </td>
          )}
          content={({onClose}) => (
            <DeleteCard>
              <Heading level={2}>
                Are you sure you wish to delete this Data
              </Heading>
              <ButtonWrap>
                <Button onClick={() => handleDelete(item._id)}>OK</Button>
                <Button onClick={onClose}>Cancel</Button>
              </ButtonWrap>
            </DeleteCard>
          )}
        />
      </td>
    </tr>
  ));
};
export const StatusIcons = styled.div`
  display: flex;
  grid-gap: 10px;
  justify-content: flex-start;
  align-items: center;
`;
export const EditIcon = styled(MdModeEditOutline)`
  color: #109CF1;
  cursor: pointer;
`;
export const DeleteIcon = styled(MdDelete)`
  color: #109CF1;
  font-size: 20px;
  cursor: pointer;
`;
export const DeleteCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 10px;
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-gap: 20px;
`;

export default TableRow;
