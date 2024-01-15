import React, { Fragment, FunctionComponent } from 'react'
import { FormDataProps } from './createOrderForm'
import { Form, Input } from 'antd'

export const ReceiverStep: FunctionComponent<FormDataProps> = ({
  orderData,
  setOrderData,
  currentPage
}) => {
  if (currentPage !== 1) {
    return null;
  }

  return (
    <Fragment>
      <Form.Item
      label="City"
      name="receiverCity"
      hasFeedback
      rules={[{ required: true, message: 'Please input recepient city!' }]}
      >
        <Input
          value={orderData.receiverCity}
          onChange={e => {setOrderData({
            ...orderData,
            receiverCity: e.target.value
          })}}
        />
      </Form.Item>

      <Form.Item
        label="Address"
        name="receiverAddress"
        hasFeedback
        rules={[{ required: true, message: 'Please input recepient address!' }]}
      >
        <Input
          value={orderData.receiverAddress}
          onChange={e => {setOrderData({
            ...orderData,
            receiverAddress: e.target.value
          })}}
        />
      </Form.Item>
    </Fragment>
  )
}
