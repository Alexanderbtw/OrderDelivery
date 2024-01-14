"use client";

import { getSingleOrder } from "@/app/services/orders";
import { Descriptions, Spin } from "antd";
import { FunctionComponent, useEffect, useState } from "react";

interface Props {
  orderId: string
}

export const OrderRead : FunctionComponent<Props> = ({
  orderId
}) => {
  const [isLoading, setLoading] = useState(true);
  const [orderInfo, setOrder] = useState<Order>();

  useEffect(() => {
    getSingleOrder(orderId).then((order) => {
      setOrder(order);
      setLoading(false);
    });
  }, [orderId]);

  if (isLoading){
    return (
      <div style={{textAlign: "center", marginTop: "40px"}}>
        <Spin/>
      </div>
    );
  }

  const descItems = Object.keys(orderInfo!).map(key => {
    let value = orderInfo![key as keyof Order].toString();

    if (key == 'weight') {
      value += " Kg"
    }

    return {
      key: key,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      children: value
    }
  });

  return (
    <Descriptions
      bordered
      layout='horizontal'
      column={1}
      items={descItems}
    />
  );
}
