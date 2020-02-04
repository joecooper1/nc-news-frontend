import styled, { css } from "styled-components";

export const ArticleListPrefs = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1px 10px 1px 10px;
  justify-content: space-between;
  background-color: green;
  align-items: center;
`;

export const SelectSort = styled.select`
  margin-left: 20px;
`;

export const ArticlesDisplay = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: 100vh;
  overflow-y: scroll;
`;

export const ArticleCard = styled.li.attrs(props => ({ key: props.key }))`
  display: grid;
  background-color: white;
  padding: 0px 10px 0px 10px;
  text-align: left;
  line-height: 0px;
  key: ;
`;
