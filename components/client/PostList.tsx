"use client";

import { use } from "react";
import Link from "next/link";
import { getPostList } from "../../api/post";

export function PostList({ delay = 0 }) {
  const fetchPostList = getPostList(delay);

  const data = use(fetchPostList) as Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>;

  return (
    <ul>
      {data.map(({ userId, id, title, body }) => {
        return (
          <li key={id}>
            <Link href={`/main-detail?id=${id}`}>클릭</Link>
            <div>{userId}</div>
            <div>{title}</div>
            <div>{body}</div>
          </li>
        );
      })}
    </ul>
  );
}
