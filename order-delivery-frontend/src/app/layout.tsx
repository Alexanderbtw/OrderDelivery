import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Order Delivery",
  description: "Test task",
};

const items = [
  {
    key: "orders",
    label: <Link href={"/"}>Orders</Link>
  },
  {
    key: "create",
    label: <Link href={"/create"}>Create</Link>
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout style={{ minHeight: "100dvh" }}>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header>
          <Content
            style={{ padding: "0 48px" }}
          >
            {children}
          </Content>
          <Footer
            style={{textAlign: "center"}}
          >
            Order Delivery 2024 Created by Alexander Goldebaev
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
