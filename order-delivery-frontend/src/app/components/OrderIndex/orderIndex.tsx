import { Table } from "antd";

export const OrderIndex = () => {
  return (
    <Table
      dataSource={booksInfo}
      columns={colsInfo}
      loading={isLoading}
    />
  );
}
