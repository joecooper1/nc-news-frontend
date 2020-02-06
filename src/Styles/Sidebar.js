import styled, { css } from "styled-components";

export const NewArticleButton = styled.button`
  width: 80%;
  margin: 20px;
  height: 40px;
  background-color: rgb(6, 21, 57);
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
