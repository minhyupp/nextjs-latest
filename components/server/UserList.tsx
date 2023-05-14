import sleep from "sleep-promise";
import { getUserList } from "@/api/user";

export async function UserList({ delay = 0 }) {
  const data = (await getUserList(delay)) as Array<{
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
