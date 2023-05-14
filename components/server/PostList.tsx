"use client";

import Link from "next/link";
import { getPostList } from "@/api/post";
import styled from "@emotion/styled";

const StyledTest = styled.div`
  background-color: aliceblue;
`;

export async function PostList({ delay = 0 }) {
  const data = (await getPostList(delay)) as Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>;

  return (
    <div>
      <StyledTest>이모션 스타일</StyledTest>
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
    </div>
  );
}
