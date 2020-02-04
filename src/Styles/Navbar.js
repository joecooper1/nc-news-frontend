import styled, { css } from "styled-components";

export const TopicList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 50vw;
  background-color: lightblue;
`;

export const TopicItem = styled.li.attrs(props => ({ key: props.key }))`
  padding: 10px;
  color: black;
`;

export const SearchBarForm = styled.div`
  margin-right: 20px;
`;

export const GoButton = styled.button`
  background-color: green;
`;
