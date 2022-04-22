import styled from 'styled-components/macro';


export const H1 = styled.h1`
  color: ${({clr}) => (clr ? '#00bf80':'#109CF1')};
  font-size: ${({Big}) => (Big ? '50px':'30px')};
  line-height: ${({Big}) => (Big ? '65px':'35px')};
  text-align: ${({Cen}) => (Cen ? 'center' : 'left')};
  @media screen and (max-width: 480px) {
     font-size: 20px;
     line-height: 30px;
 }
`;

export const H2 = styled.h1`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
color: #109CF1;
`;

export const H3 = styled.h1`
color: #109CF1;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
cursor: ${({Cur}) => (Cur ? 'pointer' : 'none')};
text-align: ${({Cen}) => (Cen ? 'center' : 'left')};
display: ${({ isOpen }) => (isOpen ? `none` : `flex`)};
`;

export const H4 = styled.h4`
display: ${({ isOpen }) => (isOpen ? `none` : `block`)};
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #109CF1;
text-align: ${({Cen}) => (Cen ? 'center' : 'left')};
cursor: ${({Cur}) => (Cur ? 'pointer' : 'none')};
opacity: ${({Opacity}) => (Opacity ? '0.5' : 'none')};;
`;

export const H5 = styled.h5`
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
color: ${({color}) => (color ? '#90A0B7' : '#6A707E')};
`;

export const H6 = styled.h6`
display: ${({ isOpen }) => (isOpen ? `none` : `block`)};
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 16px;
color: ${({color}) => (color ? '#109CF1' : '#00bf80')};
`;
export const H7 = styled.h6`
  font-size: var(--h6-font-size);
  line-height: calc(var(--h1-font-size) + 0.3125rem);
`;