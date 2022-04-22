import styled from "styled-components";

export const Button = styled.div`
 padding: ${({primary}) => (primary ? '10px 15px' : '5px 10px')};
 border-radius: ${({Border}) => (Border ? '50px' : '4px')};
 background: ${({bgchange}) => (bgchange ? '#FF0000'  : '#109CF1' )};
 color: #fff;
 font-size: ${({font}) => (font ? '15px' : '12px')};
 outline: none;
 border: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all 0.2s ease-in-out;
 box-shadow: ${({primary}) => (primary ? '0px 4px 10px rgba(16, 156, 241, 0.24)' : 'none')};

  ${({active}) =>
    active &&
    `
    background: blue;
  `}

  &:hover {
    transition: all 0.2s ease-in-out;
    background: red;
  }
`;
export const Img = styled.img`
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
  height: auto;
`;
