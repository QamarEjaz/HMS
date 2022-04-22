import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
} from "./styles.js";

export function Dropdown(props) {
  return (
    <DropdownWrapper action={props.action}>
      <StyledLabel htmlFor="role">{props.formLabel}</StyledLabel>
      <StyledSelect
        id="role"
        // name="services"
        onChange={(e) => props.setRole(e.target.value)}
      >
        {props.children}
      </StyledSelect>
    </DropdownWrapper>
  );
}

export function Option(props) {
  return <StyledOption selected={props.selected}>{props.value}</StyledOption>;
}
