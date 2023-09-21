import React from "react";
import List from "../components/List/List";

interface dataList {
  id: string;
  name: string;
  date: string;
  text: string;
  label: string;
}

export default function ListPage() {
  const dataList = [
    {
      id: "listId01",
      name: "김철수",
      date: "23.01.01",
      text: "긴글 입력하는 곳",
      label: ["고위험", "중위험"],
    },
    {
      id: "listId02",
      name: "김영희",
      date: "23.01.01",
      text: "긴글 입력하는 곳",
      label: ["저위험"],
    },
    { id: "listId03", name: "매머드", date: "23.01.01" },
  ];

  return <List dataList={dataList} />;
}
