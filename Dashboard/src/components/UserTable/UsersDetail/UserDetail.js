import React from "react";
import styled from "styled-components";
import Heading from "../../Heading/Heading";
import Geo from "../../../assets/images/Geo.png"

const UserDetail = ({name, email, role}) => {
  return (
    <UserData>
      <Name>
        <img src={Geo} alt="Userpic" />
        <Heading level={4} Opacity>
          {name}
        </Heading>
      </Name>
      <Email>
        <Heading level={4}>Email :</Heading>
        <Heading level={4} Opacity>
          {email}
        </Heading>
      </Email>
      <Role>
        <Heading level={4}>Role :</Heading>
        <Heading level={4} Opacity>
          {role}
        </Heading>
      </Role>
    </UserData>
  );
};

export const UserData = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 10px;
`;
export const Name = styled.div`
  display: flex;
  grid-gap: 10px;
`;
export const Email = styled.div`
  display: flex;
  grid-gap: 10px;
`;
export const Role = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export default UserDetail;