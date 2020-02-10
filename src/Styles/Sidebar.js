import styled, { css } from "styled-components";

export const NewArticleButton = styled.button`
  width: 300px;
  margin: 30px 30px 60px 30px;
  height: 40px;
  // background-color: rgb(6, 21, 57);
  background-color: black;
  color: white;
  border-color: transparent;
  border-radius: 20px;
  ${props =>
    props.window < 600 &&
    css`
      height: 50px;
      width: 50px;
      margin: 0px 20px 0px 0px;
      border-radius: 100px;
      font-size: 1.4em;
    `};
`;

export const NewArticleBody = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 400px;
  height: 800px;
  background-color: rgba(255, 255, 255, 0.75);
  padding: 10px;
  scroll-behaviour: smooth;
  ${props =>
    props.window < 980 &&
    css`
      grid-area: 3/2/4/3;
      margin: 2px;
      max-width: 98vw;
    `};
  ${props =>
    props.window >= 980 &&
    css`
      grid-area: 3/1/4/2;
      margin: 20px;
    `};
`;

export const SidebarArticleList = styled.ul`
  width: 350px;
  height: 355px;
  margin: 5px;
  background-color: transparent;
  list-style-type: none;
  padding: 0px;
  border: 1px black solid;
  ${props =>
    props.type === "user" &&
    css`
      height: 205px;
    `}
`;

export const LittleArticleCard = styled.li.attrs(props => ({
  key: props.key
}))`
  width: 340px;
  height: 60px;
  background-color: transparent;
  padding: 5px;
  text-align: left;
  border-bottom: 1px solid black;
  text-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${props =>
    props.type === "user" &&
    css`
      height: 30px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    `}
`;
