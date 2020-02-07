import React from "react";
import { SidebarArticleList, LittleArticleCard } from "../../Styles/Sidebar";
import { Link } from "@reach/router";
import * as api from "../../api";

class TopArticles extends React.Component {
  state = {
    articles: [],
    activity: []
  };

  render() {
    return (
      <div>
        Trending now:
        <SidebarArticleList>
          {this.state.articles.map(article => {
            const articleLink = `/articles/${article.article_id}`;
            return (
              <LittleArticleCard key={article.article_id}>
                <Link to={articleLink} style={{ fontWeight: "bold" }}>
                  {article.title}
                </Link>
                <br />
                <div>
                  by {article.author} &nbsp;{" "}
                  <span role="img" aria-label="comments" className="emoji">
                    &#10084;
                  </span>{" "}
                  {article.votes} &nbsp;
                  <span
                    role="img"
                    aria-label="comments"
                    className="commentBubble"
                  >
                    &#128172;
                  </span>
                  {article.comment_count}
                </div>
              </LittleArticleCard>
            );
          })}
        </SidebarArticleList>
        <br />
        <br />
        Top users:
        <SidebarArticleList type="user">
          {this.state.activity.map(user => {
            const userLink = `/users/${user.name}`;
            return (
              <LittleArticleCard type="user" key={user.name}>
                <Link to={userLink} style={{ fontWeight: "bold" }}>
                  {user.name}
                </Link>
                <p>{user.num} articles</p>
                <p>{user.votes} votes</p>
              </LittleArticleCard>
            );
          })}
        </SidebarArticleList>
      </div>
    );
  }

  componentDidMount() {
    api.getAllArticles(50, "comment_count").then(({ articles }) => {
      const userActivity = articles.reduce((activity, article) => {
        if (!activity[article.author])
          activity[article.author] = { name: article.author, num: 0, votes: 0 };
        activity[article.author].num = activity[article.author].num + 1;
        activity[article.author].votes =
          activity[article.author].votes + article.votes;
        return activity;
      }, {});
      const userActivityArray = Object.values(userActivity);
      articles.sort((a, b) => {
        return (
          Number(b.votes) +
          Number(b.comment_count) -
          (Number(a.votes) + Number(a.comment_count))
        );
      });
      this.setState({
        articles: articles.slice(0, 5),
        activity: userActivityArray
          .sort((a, b) => {
            return b.num + b.votes - (a.num + a.votes);
          })
          .slice(0, 5)
      });
    });
  }
}

export default TopArticles;
