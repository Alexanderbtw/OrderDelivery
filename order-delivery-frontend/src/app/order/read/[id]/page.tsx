"use client";

import { OrderRead } from "@/app/components/OrderRead/orderRead";
import { RollbackOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Divider from "antd/es/divider";
import Link from "next/link";

interface Props {
  params: {
    id: string
  }
}

export default function ReadPage({params}: Props) {
  return (
    <main>
      <Divider orientation={"center"}>Single Order</Divider>
      <OrderRead orderId={params.id}/>
      <div style={{ marginTop: "50px", fontWeight: "bold", display: "flex", flexDirection: "row", gap: "20px", justifyContent: "center" }}>
        <Link href='/'>
          <Button type="primary">
            <RollbackOutlined />
          </Button>
        </Link>
      </div>
    </main>
  );
}
