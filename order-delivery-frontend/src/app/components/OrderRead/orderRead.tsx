"use client";

import { GetOrder, getSingleOrder } from "@/app/services/orders";
import { Descriptions, Spin } from "antd";
import { FunctionComponent, useEffect, useState } from "react";

interface Props {
  orderId: string
}

export const OrderRead : FunctionComponent<Props> = ({
  orderId
}) => {
  const [orderInfo, setOrder] = useState<GetOrder>({});
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getSingleOrder(orderId)
      .then((order: GetOrder) => {
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

  if (orderInfo?.error) {
    throw orderInfo.error;
  }

  const descItems = Object.keys(orderInfo.data!).map(key => {
    let value = orderInfo.data![key as keyof Order].toString();

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
