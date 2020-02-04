import axios from "axios";

export const getAllArticles = (limit, sort_by, order, page, topic, title) => {
  console.log("hi", title);
  return axios
    .get("https://nc-be-database.herokuapp.com/api/articles", {
      params: {
        limit: limit,
        sort_by: sort_by,
        order: order,
        p: page,
        topic: topic,
        title: title
      }
    })
    .then(({ data }) => {
      return data;
    });
};

export const getTopics = () => {
  return axios
    .get("https://nc-be-database.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data;
    });
};

export const getUsers = () => {
  return axios
    .get("https://nc-be-database.herokuapp.com/api/users")
    .then(({ data }) => {
      return data;
    });
};

export const getArticle = uri => {
  return axios
    .get(`https://nc-be-database.herokuapp.com/api/${uri}`)
    .then(({ data }) => {
      return data;
    });
};

export const getComments = (article_id, sort_by, order) => {
  return axios
    .get(
      `https://nc-be-database.herokuapp.com/api/articles/${article_id}/comments`,
      { params: { sort_by: sort_by, order: order } }
    )
    .then(({ data }) => {
      return data;
    });
};
