

import React, { useState } from "react";
import styled from "styled-components";
import {IoMdArrowDropdown} from 'react-icons/io'
import { Link } from "react-router-dom";
import Geo from '../../assets/images/Geo.png'
import { LogOut } from "../Topbar/TopbarStyles";


const Select = ({props}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          <img src={Geo} alt ="geo" /> <ArrowDown />
        </DropDownHeader>
          <DropDownListContainer>
          {isOpen && (
            <DropDownList>
              <Links to='/signin'>
              <ListItem onClick={props} >Log Out <LogOut /></ListItem>
              </Links>
            </DropDownList>
          )}
          </DropDownListContainer>
      </DropDownContainer>
  );
}


const DropDownContainer = styled("div")`
cursor: pointer;
`;

const DropDownHeader = styled("div")`
  font-weight: 500;
  font-size: 18px;
  color: #109CF1;
  padding-left: 40px;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 100%;
`;

const DropDownList = styled("ul")`
  background: #ffffff;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
  color: #109CF1;
  font-size: 13px;
  padding: 20px 5px;
`;

const ListItem = styled("li")`
  list-style: none;
  display: flex;
  grid-gap: 10px;
  align-items: center;
`;

const Links = styled(Link)`
cursor: pointer;
text-decoration: none;
color: #109CF1;
font-size: 13px;
`;
const ArrowDown = styled(IoMdArrowDropdown)`
color: #109CF1;
`;

export default Select