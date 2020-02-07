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
`;

export const NewArticleBody = styled.main`
  background-color: rgb(22, 41, 85);
  color: white;
  height: 110%;
  ${props =>
    props.window < 600 &&
    css`
      grid-area: 3/2/4/3;
      margin: 2px 0px 2px 0px;
      padding: 10px;
      height: 120%;
      max-width: 100vw;
      display: flex;
      flex-direction: column;
    `};
  ${props =>
    props.window >= 600 &&
    css`
      display: grid;
      grid-template: 200px 1fr / 1fr 1fr;
      min-height: 400px;
      grid-area: 3/1/4/2;
      margin: 20px;
      padding: 40px;
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
  justify-content: space-around;
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
