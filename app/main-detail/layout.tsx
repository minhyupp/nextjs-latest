import { Suspense } from "react";
import { UserList } from "../../components/server/UserList";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", border: "5px solid teal" }}>{children}</div>
  );
}
