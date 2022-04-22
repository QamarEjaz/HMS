/* eslint-disable no-unused-vars */
// TODO : fix modal leave animation

import React from "react"
// eslint-disable-next-line no-unused-vars
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { animated, useTransition } from "react-spring"
// import { Flex } from '../../../styles/helpers.styles';
import {
  CloseButton,
  ModalHeading,
  StyledDialogOverlay,
  StyledDialogContent,
  DialogCentered,
} from "./Modal.styles"

const propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  isClosable: PropTypes.bool,
}

function Modal({ isOpen, setIsOpen, title, children, sm, lg, isClosable }) {
  const AnimatedDialogOverlay = animated(StyledDialogOverlay)
  const AnimatedDialogContent = animated(StyledDialogContent)
  const transitions = useTransition(isOpen, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
  })

  const dismiss = () =>
    isClosable === false ? setIsOpen(true) : setIsOpen(false)
  const Closebtn = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <AnimatedDialogOverlay
              style={{ opacity: styles.opacity }}
              isOpen={isOpen}
              onDismiss={dismiss}
            >
              <DialogCentered $lg={lg} $sm={sm}>
                <AnimatedDialogContent
                  aria-labelledby="dialog-title"
                  style={{
                    transform: styles.y.to(
                      value => `translate3d(0px, ${value}px, 0px)`
                    ),
                  }}
                >
                  <Flex
                    justify="space-between"
                    align="middle"
                    nowrap
                    css="margin-bottom: 1.875rem;"
                  >
                    <ModalHeading level={2}>{title}</ModalHeading>
                    {isClosable !== false && (
                      <CloseButton
                        type="white"
                        shape="circle"
                        onClick={() => Closebtn()}
                        size={46}
                        css="flex-shrink:0;"
                      >
                        <svg
                          fill="#000000"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 30 30"
                          width="30px"
                          height="30px"
                        >
                          {" "}
                          <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
                        </svg>
                      </CloseButton>
                    )}
                  </Flex>
                  {children}
                </AnimatedDialogContent>
              </DialogCentered>
            </AnimatedDialogOverlay>
          )
      )}
    </>
  )
}
export const Flex = styled.div`
  display: flex;
  flex-wrap: ${props => !props.nowrap && "wrap"};

  ${props =>
    props.direction === "column" &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.direction === "columnReverse" &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.justify === "center" &&
    css`
      justify-content: center;
    `}

  ${props =>
    props.justify === "space-between" &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.justify === "end" &&
    css`
      justify-content: flex-end;
    `}

  ${props =>
    props.align === "top" &&
    css`
      align-items: flex-start;
    `}

  ${props =>
    props.align === "middle" &&
    css`
      align-items: center;
    `}

    ${props =>
    props.align === "bottom" &&
    css`
      align-items: flex-end;
    `}
`
export const Centered = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledFormGroup = styled.div`
  margin-bottom: 26px;
`

export const InputHolder = styled.div`
  position: relative;
`
Modal.propTypes = propTypes

export default Modal
