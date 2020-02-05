import React from "react";
import { ArticleListPrefs, SelectSort } from "../../Styles/Main";

const Prefs = props => {
  const pages = [];
  for (let i = 1; i <= props.total_count; i++) {
    pages.push(i);
  }
  return (
    <ArticleListPrefs>
      <div id="viewToggle">
        <button>squares</button>
        <button>list</button>
      </div>
      <SelectSort onChange={props.changeSort}>
        <option>Date - new to old</option>
        <option>Date - old to new</option>
        <option>Likes - high to low</option>
        <option>Likes - low to high</option>
        <option>Comments - most to least</option>
        <option>Comments - least to most</option>
      </SelectSort>
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
      <label>
        Page{" "}
        <select onChange={props.changePage} value={props.page}>
          {pages.map(page => {
            return <option key={page}>{page}</option>;
          })}
        </select>{" "}
        of {props.total_count}
      </label>
    </ArticleListPrefs>
  );
};

export default Prefs;
