import { Suspense } from "react";
import { UserList } from "../../components/server/UserList";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: "5px solid teal" }}>
      <div>컨텐츠 영역</div>
      {children}
    </div>
  );
}
