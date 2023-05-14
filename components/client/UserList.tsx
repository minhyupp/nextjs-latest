"use client";

import { use } from "react";
import { getUserList } from "../../api/user";

const fetchUserList = getUserList(2000);

export async function UserList({ delay = 0 }) {
  const data = use(fetchUserList) as Array<{
    id: number;
    name: string;
    email: string;
  }>;

  return (
    <ul>
      {data.map(({ id, name, email }) => {
        return (
          <li key={id}>
            <div>{name}</div>
            <div>{email}</div>
          </li>
        );
      })}
    </ul>
  );
}
