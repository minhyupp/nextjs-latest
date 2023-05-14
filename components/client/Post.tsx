"use client";

import { use } from "react";
import { getPost } from "../../api/post";

export function Post({ id, delay = 0 }: { id: number; delay?: number }) {
  const fetchPost = getPost(id, delay);

  const data = use(fetchPost) as {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  return <div>{data.title}</div>;
}
