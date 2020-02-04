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
`;

export const ArticleBody = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-area: 3/1/4/2;
  margin: 20px;
  min-height: 400px;
  background-color: lightskyblue;
  padding: 10px;
  scroll-behaviour: smooth;
`;

export const ArticleInfo = styled.aside`
  color: grey;
`;

export const ArticleText = styled.p`
  text-align: left;
  line-height: 2em;
`;

export const Line = styled.div`
  height: 1px;
  width: 98%;
  background-color: black;
  align: center;
  border-bottom: 1px grey;
  margin-top: 20px;
`;

export const CommentsDisplay = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: white;
  padding-right: 20px;
`;

export const Comment = styled.li`
  padding-top: 10px;
  text-align: left;
  list-style-type: none;
`;

export const CommentInfo = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const VoteCount = styled.span`
  color: red;
  ${props =>
    props.voteCount > 0 &&
    css`
      color: green;
    `};
`;
