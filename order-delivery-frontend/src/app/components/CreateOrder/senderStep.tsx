import React, { Fragment, FunctionComponent } from 'react'
import { FormDataProps } from './createOrderForm'
import { Form, Input } from 'antd'

export const SenderStep: FunctionComponent<FormDataProps> = ({
  orderData,
  setOrderData
}) => {
  return (
    <Fragment>
      <Form.Item
      label="Sender City"
      name="senderCity"
      hasFeedback
      rules={[{ required: true, message: 'Please input your city!' }]}
      >
        <Input
          value={orderData.senderCity}
          onChange={e => {setOrderData({
            ...orderData,
            senderCity: e.target.value
          })}}
        />
      </Form.Item>

      <Form.Item
        label="Sender Address"
        name="senderAddress"
        hasFeedback
        rules={[{ required: true, message: 'Please input your address!' }]}
      >
        <Input
          value={orderData.senderAddress}
          onChange={e => {setOrderData({
            ...orderData,
            senderAddress: e.target.value
          })}}
        />
      </Form.Item>
    </Fragment>
  )
}
