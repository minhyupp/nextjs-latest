import { Suspense } from "react";
import { UserList } from "../../components/server/UserList";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", border: "5px solid teal" }}>
      <div
        style={{
          flex: "1 0 30%",
          minHeight: "500px",
          border: "5px solid tomato",
        }}
      >
        <Suspense fallback={<div>Suspense UserList Loading...</div>}>
          {/* @ts-expect-error Async Server Component */}
          <UserList delay={2000} />
        </Suspense>
      </div>
      <div style={{ flex: "1 0 70%", border: "5px solid lime" }}>
        <h1 style={{ fontSize: "20px" }}>Server Component Async Fetching1</h1>
        {children}
      </div>
    </div>
  );
}
