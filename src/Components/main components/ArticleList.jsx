import React from "react";
import Prefs from "./Prefs";
import {
  ArticlesDisplay,
  ArticleCard,
  ArticleCardInfo,
  LoadingBar,
  EmptyList
} from "../../Styles/Main";
import * as api from "../../api";
import { Link } from "@reach/router";

class ArticleList extends React.Component {
  state = {
    view: "normal",
    sort_by: "created_at",
    order: "desc",
    limit: 10,
    page: 1,
    articles: [],
    total_count: 0,
    isLoading: true
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingBar>Loading...</LoadingBar>;
    } else if (this.state.articles.length === 0) {
      return (
        <EmptyList>
          Sorry, no articles were found <br /> matching your search. <br />
          <br /> :(
        </EmptyList>
      );
    }

    return (
      <main className="articleList">
        <Prefs
          total_count={this.state.total_count}
          changeLimit={this.changeLimit}
          changeSort={this.changeSort}
          changePage={this.changePage}
          page={this.state.page}
        />
        <ArticlesDisplay>
          {this.state.articles.map(article => {
            const articleLink = `/articles/${article.article_id}`;
            const topicLink = `/${article.topic}`;
            const userLink = `/users/${article.author}`;
            return (
              <ArticleCard key={article.article_id} window={window.innerWidth}>
                <h3>
                  <Link to={articleLink}>{article.title}</Link>
                </h3>{" "}
                <ArticleCardInfo window={window.innerWidth}>
                  <p>
                    in <Link to={topicLink}>{article.topic}</Link>
                  </p>
                  <p>
                    by <Link to={userLink}>{article.author}</Link>
                  </p>
                  <p>{article.created_at.slice(0, 10)}</p>
                  <p>Comments: {article.comment_count}</p>
                  <p>Likes: {article.votes}</p>
                </ArticleCardInfo>
              </ArticleCard>
            );
          })}
        </ArticlesDisplay>
      </main>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.limit !== prevState.limit ||
      this.state.sort_by !== prevState.sort_by ||
      this.state.order !== prevState.order ||
      this.props.topic !== prevProps.topic ||
      this.props.searchTerm !== prevProps.searchTerm
    )
      api
        .getAllArticles(
          this.state.limit,
          this.state.sort_by,
          this.state.order,
          1,
          this.props.topic.toLowerCase(),
          this.props.searchTerm
        )
        .then(({ articles, total_count }) => {
          this.setState({
            articles: articles,
            total_count: Math.ceil(total_count / this.state.limit),
            page: 1
          });
        })
        .catch(() => {
          this.setState({ articles: [] });
        });

    if (this.state.page !== prevState.page)
      api
        .getAllArticles(
          this.state.limit,
          this.state.sort_by,
          this.state.order,
          this.state.page,
          this.props.topic.toLowerCase(),
          this.props.searchTerm
        )
        .then(({ articles, total_count }) => {
          this.setState({
            articles: articles,
            total_count: Math.ceil(total_count / this.state.limit)
          });
        })
        .catch(() => {
          this.setState({ articles: [] });
        });
  }

  componentDidMount() {
    api
      .getAllArticles(
        this.state.limit,
        this.state.sort_by,
        this.state.order,
        this.state.page,
        this.props.topic.toLowerCase(),
        undefined
      )
      .then(({ articles, total_count }) => {
        this.setState({
          articles: articles,
          total_count: Math.ceil(total_count / this.state.limit),
          isLoading: false
        });
      });
  }

  changeLimit = event => {
    this.setState({ limit: event.target.value });
  };

  changeSort = ({ target }) => {
    let newState = {};
    if (target.value === "Date - old to new")
      newState = { sort_by: "created_at", order: "asc" };
    if (target.value === "Date - new to old")
      newState = { sort_by: "created_at", order: "desc" };
    if (target.value === "Likes - high to low")
      newState = { sort_by: "votes", order: "desc" };
    if (target.value === "Likes - low to high")
      newState = { sort_by: "votes", order: "asc" };
    if (target.value === "Comments - most to least")
      newState = { sort_by: "comment_count", order: "desc" };
    if (target.value === "Comments - least to most")
      newState = { sort_by: "comment_count", order: "asc" };
    this.setState(newState);
  };

  changePage = ({ target }) => {
    this.setState({ page: target.value });
  };
}

export default ArticleList;
