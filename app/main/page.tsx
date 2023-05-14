import { Suspense } from "react";
import { PostList } from "../../components/server/PostList";

export default function Page() {
  return (
    <>
      <div>메인페이지라고 가정하겠습니다.</div>
      <Suspense fallback={<div>Suspense PostList Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <PostList delay={5000} />
      </Suspense>
    </>
  );
}
