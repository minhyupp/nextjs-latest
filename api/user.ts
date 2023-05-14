import sleep from "sleep-promise";

export const getUserList = async (delay = 0) => {
  if (delay) {
    await sleep(delay);
  }

  console.log("Getting getUserList");
  return (await fetch("https://jsonplaceholder.typicode.com/users")).json();
};
