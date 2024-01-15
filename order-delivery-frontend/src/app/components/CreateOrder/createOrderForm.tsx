"use client";

import { CreateOrderCommand, CreateOrderInfo, createOrder } from "@/app/services/orders";
import { Button, Form, Progress } from "antd";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { SenderStep } from "./senderStep";
import { ReceiverStep } from "./receiverStep";
import { ParametersStep } from "./parametersStep";
import { CheckCircleOutlined, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export interface FormDataProps {
  orderData: CreateOrderCommand,
  setOrderData: Dispatch<SetStateAction<CreateOrderCommand>>
}

export const CreateOrderForm: FunctionComponent = () => {
  const [page, setPage] = useState<number>(0);
  const [createError, setError] = useState<unknown>();
  const [orderData, setOrderData] = useState<CreateOrderCommand>({
    receiverAddress: "",
    receiverCity: "",
    senderAddress: "",
    senderCity: "",
    weight: 0,
    collectionDate: "",
  });
  const FormTitles = [
    "About Sender",
    "About Receiver",
    "Additional Information",
  ];

  function formDisplay() {
    if (page === 0) {
      return <SenderStep orderData={orderData} setOrderData={setOrderData} />;
    } else if (page === 1) {
      return <ReceiverStep orderData={orderData} setOrderData={setOrderData} />;
    } else {
      return <ParametersStep orderData={orderData} setOrderData={setOrderData} />
    }
  };

  const router = useRouter();

  async function handleSubmit() {
    setPage(prev => prev + 1);
    if (page === FormTitles.length - 1) {
      const res: CreateOrderInfo = await createOrder(orderData);
      if (res.orderId) {
        router.push('/order/read/' + res.orderId);
      }
      else if (res.error) {
        setError(res.error);
      }
    }
  }

  if (createError) {
    throw createError;
  }

  return (
    <div
      style={{
        maxWidth: "45%",
        margin: "auto",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <Form
        autoComplete="false"
        onFinish={handleSubmit}
        layout="vertical"
      >
        <h3 style={{marginBottom: "15px"}}>{FormTitles[page]}</h3>
        <Progress
          percent={(page + 1) * 33}
        />

        {formDisplay()}

        <Button
          danger
          disabled={page === 0}
          onClick={() => setPage(prev => prev - 1)}
        >
          <LeftCircleOutlined />
        </Button>

        <Button
          htmlType="submit"
          style={{float: "right"}}
        >
          {page >= FormTitles.length - 1
          ? <CheckCircleOutlined />
          : <RightCircleOutlined />}
        </Button>
      </Form>
    </div>
  );
};
