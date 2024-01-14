import { CreateOrderCommand, createOrder } from "@/app/services/orders";
import { Button, Form } from "antd";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { SenderStep } from "./senderStep";
import { ReceiverStep } from "./receiverStep";
import { ParametersStep } from "./parametersStep";
import { CheckCircleOutlined, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

export interface FormDataProps {
  orderData: CreateOrderCommand,
  setOrderData: Dispatch<SetStateAction<CreateOrderCommand>>
}

export const CreateOrderForm: FunctionComponent = () => {
  const [page, setPage] = useState<number>(0);
  const [isLoading, setLoading] = useState(false);
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

  async function handleSubmit() {
    if (page === FormTitles.length - 1) {
      setLoading(true);
      const res = await createOrder(orderData);
      setPage(0);
      setLoading(false);
    } else {
      setPage(page + 1);
    }
  }

  if (isLoading){
    return <h1>Porno</h1>
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
        {formDisplay()}

        <Button
          danger
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          <LeftCircleOutlined />
        </Button>

        <Button
          htmlType="submit"
          style={{float: "right"}}
        >
          {page === FormTitles.length - 1
          ? <CheckCircleOutlined />
          : <RightCircleOutlined />}
        </Button>
      </Form>
    </div>
  );
};
