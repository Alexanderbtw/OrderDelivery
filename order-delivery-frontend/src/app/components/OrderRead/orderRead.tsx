"use client";

import { getSingleOrder } from "@/app/services/orders";
import { Descriptions, Spin } from "antd";
import { FunctionComponent, useEffect, useReducer } from "react";
import { initialState, orderReducer } from "./orderReadReducer";

interface Props {
  orderId: string
}

export const OrderRead : FunctionComponent<Props> = ({
  orderId
}) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  useEffect(() => {
    getSingleOrder(orderId).then((order) => { dispatch(order) });
  }, [orderId]);

  if (state.isLoading){
    return (
      <div style={{textAlign: "center", marginTop: "40px"}}>
        <Spin/>
      </div>
    );
  }

  if (state.error) {
    throw state.error;
  }

  const descItems = Object.keys(state.orderInfo!).map(key => {
    let value = state.orderInfo![key as keyof Order].toString();

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
