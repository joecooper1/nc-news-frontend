import styled, { css } from "styled-components";

export const TopicList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 250px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TopicItem = styled.li.attrs(props => ({ key: props.key }))`
  padding: 10px;
  color: white;
  &:hover {
    background-color: black;
  }
`;

export const SearchBarForm = styled.div`
  margin-right: 20px;
  float: right;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 30px;
  padding-left: 10px;
`;

export const GoButton = styled.button`
  // background-color: rgb(22, 41, 85);
  background-color: black;
  border-color: transparent;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  color: white;
`;

export const Nav = styled.nav`
  // background-color: rgb(120, 135, 171);
  display: flex;
  align-items: center;
  padding: 2px;
  grid-area: 2/1/3/3;
  ${props =>
    props.window < 600 &&
    css`
      flex-direction: row;
      justify-content: flex-end;
    `};
  ${props =>
    props.window >= 600 &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `};
`;
