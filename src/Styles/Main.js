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
  align-items: stretch;
  justify-content: flex-start;
  max-height: 100vh;
  overflow-y: scroll;
`;

export const ArticleCard = styled.li.attrs(props => ({ key: props.key }))`
  background-color: white;
  padding: 0px 10px 0px 10px;
  text-align: left;
  margin: 0px 20px 0 0;
  list-style-type: none;
  border-bottom: 1px solid black;
`;

export const ArticleBody = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 400px;
  background-color: white;
  padding: 10px;
  scroll-behaviour: smooth;
  ${props =>
    props.window < 600 &&
    css`
      grid-area: 3/2/4/3;
      margin: 2px;
    `};
  ${props =>
    props.window >= 600 &&
    css`
      grid-area: 3/1/4/2;
      margin: 20px;
    `};
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

export const CommentStyle = styled.li`
  padding-top: 10px;
  text-align: left;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

export const VoteCount = styled.span`
  color: red;
  ${props =>
    props.voteCount >= 0 &&
    css`
      color: green;
    `};
`;

export const DeleteButton = styled.div`
  color: red;
  border-color: transparent;
  background-color: white;
  text-align: right;
`;

export const CommentInput = styled.div`
  width: 100%;
  height: 60px;
`;

export const ArticleCardInfo = styled.span`
  color: grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -10px;
  width: 60%;
`;

export const EditBox = styled.span`
  opacity: 90%;
  color: grey;
  border-color: transparent;
  background-color: transparent;
`;

export const LoadingBar = styled.p`
  grid-area: 3/1/4/2;
  margin: 20px;
  min-height: 400px;
  background-color: transparent;
  padding: 10px;
`;

export const VotingStyle = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const EmptyList = styled.p`
  font-size: 30px;
`;
