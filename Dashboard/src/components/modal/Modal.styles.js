import styled, {
  css
} from 'styled-components';
import {
  DialogOverlay,
  DialogContent
} from '@reach/dialog';
// import { Button, Heading } from '../..';
import "@reach/dialog/styles.css";

export const StyledDialogOverlay = styled(DialogOverlay)
`
  background: rgba(50, 59, 75, 0.2);
  z-index: 999;
`;

export const DialogCentered = styled.div `
  display: flex;
  align-items: center;
  margin: 0.5rem auto;
  max-width: 544px;
  min-height: calc(100% - 1rem);
  padding: 0 18px;
  ${({ $lg }) =>
    $lg &&
    css`
max - width: 702 px;
`}

  ${({ $sm }) =>
    $sm &&
    css`
max - width: 320 px;
`}
/* 
  @media (min-width: 576px) {
    margin: ${({ $lg }) => ($lg ? '1.75rem 0.625rem' : '1.75rem auto;')};
    min-height: calc(100% - 3.5rem);
  }
  @media (min-width: 730px) {
    margin: 1.75rem auto;
  } */
`;

export const StyledDialogContent = styled(DialogContent)
`
  border-radius: 16px;
  padding: 1.875rem;
  width: 100%;
  margin: 0;
 
    @media (max-width: 768px) {
     max-width: 100%;
     min-width: 280px;
     
  }
`;

export const ModalHeading = styled.h1 `
  margin-bottom: 0;
  padding-right: 0.75rem;
  color: #109CF1;
  @media (max-width: 575px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const CloseButton = styled.button `
border:none;
background:transparent;
  @media (max-width: 575px) {
    width: 32px;
    height: 32px;
    i {
      font-size: 10px;
    }
  }
`;