"use client";

import { getAllOrders } from "@/app/services/orders";
import { Table } from "antd";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect, useReducer } from "react";
import { ordersReducer, initialState } from "./orderIndexReducer";

const colsInfo = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: '20%'
  },
  {
    title: 'Sender City',
    dataIndex: 'senderCity',
    key: 'senderCity',
    width: '10%'
  },
  {
    title: 'Sender Address',
    dataIndex: 'senderAddress',
    key: 'senderAddress',
    width: '15%'
  },
  {
    title: 'Receiver City',
    dataIndex: 'receiverCity',
    key: 'receiverCity',
    width: '10%'
  },
  {
    title: 'Receiver Address',
    dataIndex: 'receiverAddress',
    key: 'receiverAddress',
    width: '15%'
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
    width: '10%'
  },
  {
      title: 'Collection Date',
      key: 'collectionDate',
      dataIndex: 'collectionDate',
      width: '20%'
  },
];

export const OrderIndex:FunctionComponent = ({}) => {
  const [state, dispatch] = useReducer(ordersReducer, initialState);
  const router = useRouter();

  useEffect(() => {
    getAllOrders().then(res => dispatch(res));
  }, []);

  if (state.error) {
    throw state.error;
  }

  return (
    <Table
      dataSource={state.ordersInfo ? state.ordersInfo.map(item => ({...item, key: item.id})) : []}
      columns={colsInfo}
      loading={state.isLoading}
      onRow={(record) => {
        return {
            onClick: () => router.push('/order/read/' + record.id)
        }
      }}
    />
  );
}
