import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Link from "next/link";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { MailOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import GlobalError from "./global-error";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Order Delivery",
  description: "Test task",
};

const items: MenuItemType[] = [
  {
    key: "orders",
    icon: <MailOutlined />,
    label: <Link href={"/"}>Orders</Link>
  },
  {
    key: "create",
    icon: <PlusCircleOutlined />,
    label: <Link href={"/order/create"}>Create</Link>
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ErrorBoundary errorComponent={GlobalError}>
      <body className={inter.className}>
        <Layout style={{ minHeight: "100dvh" }}>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              items={items}
              style={{ flex: 1, minWidth: 0 }}
              selectable={false}
            />
          </Header>
          <Content
            style={{ padding: "0 48px" }}
          >
            <ErrorBoundary errorComponent={GlobalError}>
              {children}
            </ErrorBoundary>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              color: "gray"
            }}
          >
            Order Delivery
            <br/>
            &copy; Alexander Goldebaev, 2024
          </Footer>
        </Layout>
      </body>
      </ErrorBoundary>
    </html>
  );
}
