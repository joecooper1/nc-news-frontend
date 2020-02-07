import styled, { css } from "styled-components";

export const Title = styled.h1`
  color: white;
`;

export const LogInBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  ${props =>
    props.window < 600 &&
    css`
      height: 30px;
      background-color: rgb(22, 41, 85);
    `};
`;

export const UserDropDown = styled.select.attrs(props => ({
  value: props.user,
  onChange: props.onChange
}))`
  background-color: rgba(0, 0, 0, 0.5);
  border-color: transparent;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  color: white;
  ${props =>
    props.window < 600 &&
    css`
      height: 30px;
    `};
`;
