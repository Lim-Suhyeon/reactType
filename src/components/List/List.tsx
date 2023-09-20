import React from "react";
import ListItem from "./ListItem";

export default function List(props) {
  const $li = props.dataList;
  const dataLists = $li.map((data) => (
    <ListItem key={data.id} {...data} />
  ));
  return (
    <>
      <ul className="list_bul">{dataLists}</ul>
    </>
  );
}
