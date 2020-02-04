import axios from "axios";

export const getAllArticles = (limit, sort_by, order, page, topic) => {
  return axios
    .get("https://nc-be-database.herokuapp.com/api/articles", {
      params: {
        limit: limit,
        sort_by: sort_by,
        order: order,
        p: page,
        topic: topic
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
