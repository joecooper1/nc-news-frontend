import styled, { css } from "styled-components";

export const ArticleListPrefs = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1px 10px 1px 10px;
  justify-content: space-between;
  background-color: rgb(46, 66, 114);
  align-items: center;
  ${props =>
    props.window < 600 &&
    css`
      padding: 1px 1px 1px 1px;
    `};
`;

export const SelectSort = styled.select`
  margin-left: 5px;
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

export const ArticlesDisplay = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  overflow-y: scroll;
  padding: 0px;
`;

export const ArticleCard = styled.li.attrs(props => ({ key: props.key }))`
  padding: 0px 10px 0px 10px;
  text-align: left;
  margin: 0px 20px 0 0;
  list-style-type: none;
  border-bottom: 1px solid black;
  ${props =>
    props.window < 600 &&
    css`
      margin: 0px;
    `};
`;

export const SmallArticleCard = styled.li.attrs(props => ({ key: props.key }))`
  padding: 0px;
  text-align: left;
  margin: 0px 0px 0 0;
  list-style-type: none;
  border-bottom: 1px solid black;
  ${props =>
    props.window < 600 &&
    css`
      margin: 0px;
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
  ${props =>
    props.window < 600 &&
    css`
      flex-wrap: wrap;
      line-height: 0px;
      width: 90vw;
    `};
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

export const UserProfileBody = styled.main`
  background-color: rgb(22, 41, 85);
  scroll-behaviour: smooth;
  color: white;
  ${props =>
    props.window < 600 &&
    css`
      grid-area: 3/2/4/3;
      margin: 2px;
      padding: 10px;
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

export const Name = styled.div`
  grid-area: 1/1/2/2;
  text-align: center;
  font-size: 1.5em;
  line-heigth: 0px;
`;

export const ProfilePic = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
}))`
  grid-area: 1/2/2/3;
  border-radius: 50%;
  border: 1px black solid;
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-text: center;
  ${props =>
    props.window < 600 &&
    css`
      height: 100px;
      width: 100px;
    `};
  ${props =>
    props.window >= 600 &&
    css`
      height: 200px;
      width: 200px;
    `};
`;

export const SmallArticleList = styled.ul`
  background-color: white;
  padding: 0px 5px 0px 5px;
  height: 400px;
  overflow-y: scroll;
  margin-top: -18px;
`;

export const ListHeader = styled.p`
  font-size: 1.2em;
  color: black;
  background-color: rgb(120, 135, 171);
  width: 100%;
`;

export const StarColor = styled.p`
  color: black;
  ${props =>
    props.favourited === true &&
    css`
      color: yellow;
      background-color: yellow;
    `};
`;
