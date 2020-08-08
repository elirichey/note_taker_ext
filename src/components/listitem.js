import React from "react";

export default function ListItem(props) {
  let { item } = props;
  return (
    <li>
      <button onClick={() => props.showItem(item)}>
        <p className="title">{item.title}</p>
        <p className="cat">Category</p>
      </button>
    </li>
  );
}
