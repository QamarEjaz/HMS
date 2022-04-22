import styled from "styled-components";
import {FaBars} from 'react-icons/fa'
import {MdOutlineSearch} from 'react-icons/md'
import {RiLogoutBoxRLine} from 'react-icons/ri'



export const BurgerMenu = styled(FaBars)`
display: block;
@media screen and (max-width: 1100px) {
     display: block;
     color: #109CF1;
     position: sticky;
     top: 20px;
     left: 20px;
 }
 @media screen and (max-width: 370px) {
     left: 10px;
 }
`;
export const Topbar = styled.div`
 height: 60px;
 background: #FFFFFF;
`;

export const TopbarItems = styled.div`
display: flex;
justify-content: space-between;
margin-left: ${({ isOpen }) => (isOpen ? `90px` : `256px`)};
padding: 0 20px;
@media screen and (max-width: 1100px) {
     margin-left: 50px;
 }
 @media screen and (max-width: 400px) {
     margin-left: 20px;
 }
 @media screen and (max-width: 370px) {
     padding: 0 10px;
 }
`;


export const Searchbar = styled.div`
display: flex;
align-items: center;
grid-gap: 5px;
cursor: pointer;

input{
height: 30px;
color: #109CF1;
border: none;
outline: none;
padding: 10px;
width: 100%;

::placeholder{
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
letter-spacing: 0.01em;
color: #109CF1;
}
}
`;

export const SearchIcon = styled(MdOutlineSearch)`
width: 15px;
height: 15px;
color: #109CF1;
cursor: pointer;
@media screen and (max-width: 370px) {
     display: none;
 }
`;
export const LogOut = styled(RiLogoutBoxRLine)`
width: 13px;
height: 13px;
color: #109CF1;
cursor: pointer;
`;