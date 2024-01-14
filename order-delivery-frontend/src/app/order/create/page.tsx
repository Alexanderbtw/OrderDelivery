"use client";

import Divider from "antd/es/divider";
import { CreateOrderForm } from "../../components/CreateOrder/createOrderForm";

export default function CreatePage() {
  return (
    <main>
      <Divider orientation={"center"}>Create Order</Divider>
      <CreateOrderForm />
    </main>
  );
}
