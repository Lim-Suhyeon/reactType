import React from "react";
import ListItem from "./ListItem";

export default function List(props: any) {
  const $li = props.dataList;
  const dataLists = $li.map((data: any) => (
    <ListItem key={data.id} {...data} />
  ));
  return (
    <>
      <ul className="list">{dataLists}</ul>
    </>
  );
}
