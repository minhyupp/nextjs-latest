"use client";

import { Suspense } from "react";
import { Post } from "../../components/server/Post";
import { usePathname, useSearchParams, useParams } from "next/navigation";
export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const router = useParams();
  console.log("param:", searchParams);

  return (
    <div>
      <div>디테일.</div>
      <Suspense fallback={<div> Suspense Post Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Post id={searchParams.id} delay={800} />
      </Suspense>
    </div>
  );
}
