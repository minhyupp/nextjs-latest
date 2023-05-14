import { Suspense } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <Link href={"/main"}>메인으로 이동</Link> */}
      <Link href={"/server"}>서버페이지로 이동</Link>
      <Link href={"/client"}>클라이언트페이지로 이동</Link>
    </main>
  );
}
