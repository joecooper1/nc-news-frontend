import React from "react";
import { ArticleListPrefs, SelectSort } from "../../Styles/Main";

const Prefs = props => {
  const pages = [];

  for (let i = 1; i <= props.total_count; i++) {
    pages.push(i);
  }

  const selectSort = (
    <SelectSort onChange={props.changeSort}>
      <option>Date - new to old</option>
      <option>Date - old to new</option>
      <option>Likes - high to low</option>
      <option>Likes - low to high</option>
      <option>Comments - most to least</option>
      <option>Comments - least to most</option>
    </SelectSort>
  );

  const viewNumber = (
    <label>
      View{" "}
      <select onChange={props.changeLimit} defaultValue="10">
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>30</option>
        <option>40</option>
      </select>{" "}
      per page{" "}
    </label>
  );

  let totalPages = <span>of {props.total_count}</span>;
  if (window.innerWidth < 600) totalPages = "";

  const pageSelector = (
    <label>
      Page{" "}
      <select onChange={props.changePage} value={props.page}>
        {pages.map(page => {
          return <option key={page}>{page}</option>;
        })}
      </select>{" "}
      {totalPages}
    </label>
  );

  if (window.innerWidth < 600)
    return (
      <ArticleListPrefs window={window.innerWidth}>
        {selectSort}
        {pageSelector}
      </ArticleListPrefs>
    );
  return (
    <ArticleListPrefs>
      {selectSort}
      {viewNumber}
      {pageSelector}
    </ArticleListPrefs>
  );
};

export default Prefs;
