import { Suspense } from "react";
import { PostList } from "../../components/server/PostList";

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>Suspense PostList Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <PostList delay={3000} />
      </Suspense>
    </>
  );
}
