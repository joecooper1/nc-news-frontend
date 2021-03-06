import axios from "axios";

export const getAllArticles = (
  limit,
  sort_by,
  order,
  page,
  topic,
  title,
  author
) => {
  return axios
    .get("https://nc-be-database.herokuapp.com/api/articles", {
      params: {
        limit: limit,
        sort_by: sort_by,
        order: order,
        p: page,
        topic: topic,
        title: title,
        author: author
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

export const getUser = username => {
  return axios
    .get(`https://nc-be-database.herokuapp.com/api/users/${username}`)
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

export const patchVotes = (type, id, num) => {
  return axios
    .patch(`https://nc-be-database.herokuapp.com/api/${type}/${id}`, {
      inc_votes: num
    })
    .then(({ data }) => {
      return data;
    });
};

export const deleteCommentById = comment_id => {
  return axios.delete(
    `https://nc-be-database.herokuapp.com/api/comments/${comment_id}`
  );
};

export const postNewComment = (body, username, article_id) => {
  return axios
    .post(
      `https://nc-be-database.herokuapp.com/api/articles/${article_id}/comments`,
      { username: username, body: body }
    )
    .then(({ data }) => {
      return data;
    });
};

export const patchArticle = (body, article_id) => {
  return axios
    .patch(`https://nc-be-database.herokuapp.com/api/articles/${article_id}`, {
      body: body
    })
    .then(({ data }) => {
      return data;
    });
};

export const postArticle = (title, body, topic, author) => {
  return axios
    .post("https://nc-be-database.herokuapp.com/api/articles", {
      title: title,
      body: body,
      topic: topic.toLowerCase(),
      author: author
    })
    .then(({ data }) => {
      return data;
    });
};

export const getFavourites = username => {
  return axios
    .get(
      `https://nc-be-database.herokuapp.com/api/users/${username}/favourites`
    )
    .then(({ data }) => {
      return data;
    });
};

export const postFavourite = (username, article_id) => {
  return axios.post(
    `https://nc-be-database.herokuapp.com/api/users/${username}/favourites/${article_id}`
  );
};

export const deleteArticleById = article_id => {
  return axios.delete(
    `https://nc-be-database.herokuapp.com/api/articles/${article_id}`
  );
};
