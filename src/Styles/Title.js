import styled, { css } from "styled-components";

export const Title = styled.h1`
  color: red;
`;

export const LogInBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const UserDropDown = styled.select.attrs(props => ({
  value: props.user,
  onChange: props.onChange
}))`
  background-color: transparent;
  border-color: transparent;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;
