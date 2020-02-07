import React from "react";
import { SidebarArticleList, LittleArticleCard } from "../../Styles/Sidebar";
import { Link } from "@reach/router";
import * as api from "../../api";

class TopArticles extends React.Component {
  state = {
    articles: []
  };

  render() {
    return (
      <SidebarArticleList>
        {this.state.articles.map(article => {
          const articleLink = `/articles/${article.article_id}`;
          return (
            <LittleArticleCard key={article.article_id}>
              <Link to={articleLink} style={{ fontWeight: "bold" }}>
                {article.title}
              </Link>
              <br />
              by {article.author}
            </LittleArticleCard>
          );
        })}
      </SidebarArticleList>
    );
  }

  componentDidMount() {
    api.getAllArticles(5, "comment_count").then(({ articles }) => {
      //   let trendingArticles = articles.sort((article1, article2) => {
      //     return (
      //       article1.votes * article1.comment_count -
      //       article2.votes * article2.comment_count
      //     );
      //   });
      this.setState({ articles: articles });
    });
  }
}

export default TopArticles;
