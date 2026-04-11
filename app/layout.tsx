import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div style={{ display: "flex", height: "100vh" }}>

          {/* サイドバー */}
          <aside
            style={{
              width: "200px",
              background: "#1e293b",
              color: "white",
              padding: "20px",
            }}
          >
            <h2>Menu</h2>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link href="/">ホーム</Link>
              <Link href="/board">掲示板</Link>
              <Link href="/chat">チャット</Link>
            </nav>
          </aside>

          {/* メイン */}
          <main style={{ flex: 1, padding: "20px" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}