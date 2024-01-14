import React, { Fragment, FunctionComponent } from 'react'
import { FormDataProps } from './createOrderForm'
import { Form, Input } from 'antd'

export const ReceiverStep: FunctionComponent<FormDataProps> = ({
  orderData,
  setOrderData
}) => {
  return (
    <Fragment>
      <Form.Item
      label="Receiver City"
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
        label="Receiver Address"
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
