"use client";

import { useState, Suspense } from "react";
import { PostList } from "../../components/client/PostList";
import { Post } from "../../components/client/Post";

export default function ClientFetching() {
  // use a button to toggle loading of components to make sure they're loaded client-side
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Client Fetching</h1>
      <div className="flex flex-col gap-4 w-full h-full">
        <Suspense fallback={<p>PostList component loading...</p>}>
          <PostList delay={3000} />
        </Suspense>
      </div>
    </>
  );
}
