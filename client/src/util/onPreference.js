import React from "react";
import ApiList from "../common/apiList";

function filterPreference(a, b, type) {
  switch (type) {
    case "comment":
      return b.comments - a.comments;
    case "newest":
      return b.date - a.date;
    case "popular":
      return b.votes - a.votes;
    default:
      return b.votes - a.votes;
  }
}

const FilteredList = (posts, type, showMore, itemLimit) => {
  return posts
    .sort((a, b) => filterPreference(a, b, type))
    .slice(0, showMore ? itemLimit : 5)
    .map((items, index) => <ApiList items={items} key={items.id} />);
};

export default FilteredList;
