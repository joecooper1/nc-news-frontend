import React from "react";
import * as api from "../../api";
import {
  SmallArticleCard,
  ArticleCardInfo,
  SmallArticleList
} from "../../Styles/Main";
import { Link } from "@reach/router";

class ArticlesSmallDisplay extends React.Component {
  state = { articles: [] };

  render() {
    return (
      <section>
        <p>Articles by {this.props.user}</p>
        <SmallArticleList>
          {this.state.articles.map(article => {
            const articleLink = `/articles/${article.article_id}`;
            const topicLink = `/${article.topic}`;
            return (
              <SmallArticleCard
                key={article.article_id}
                window={window.innerWidth}
              >
                <h3>
                  <Link to={articleLink}>{article.title}</Link>
                </h3>{" "}
                <ArticleCardInfo window={window.innerWidth}>
                  <p>
                    in <Link to={topicLink}>{article.topic}</Link>
                  </p>
                  <p>{article.created_at.slice(0, 10)}</p>
                  <p>Likes: {article.votes}</p>
                </ArticleCardInfo>
              </SmallArticleCard>
            );
          })}
        </SmallArticleList>
      </section>
    );
  }

  componentDidMount() {
    api
      .getAllArticles(
        10,
        "created_at",
        "desc",
        1,
        undefined,
        undefined,
        this.props.user
      )
      .then(({ articles }) => {
        this.setState({ articles: articles });
      });
  }
}

export default ArticlesSmallDisplay;
