import sleep from "sleep-promise";
import { getPost } from "@/api/post";

export async function Post({ id, delay = 0 }: { id: number; delay?: number }) {
  const data = (await getPost(id, delay)) as {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  return <div>{data.title}</div>;
}
