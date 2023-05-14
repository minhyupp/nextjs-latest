import sleep from "sleep-promise";

export const getPostList = async (delay = 0) => {
  if (delay) {
    await sleep(delay);
  }

  console.log("Getting getPostList");
  return (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
};

export const getPost = async (id: number, delay = 0) => {
  if (delay) {
    await sleep(delay);
  }

  console.log("Getting getPostList");
  return (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();
};
