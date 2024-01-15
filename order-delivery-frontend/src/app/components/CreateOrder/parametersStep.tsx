import React, { Fragment, FunctionComponent } from 'react'
import { FormDataProps } from './createOrderForm'
import { DatePicker, Form, InputNumber } from 'antd'

export const ParametersStep:FunctionComponent<FormDataProps> = ({
  orderData,
  setOrderData,
  currentPage
}) => {
  if (currentPage < 2) {
    return null;
  }

  return (
    <Fragment>
      <Form.Item
        name="weight"
        label="Weight"
        hasFeedback
        rules={[{ required: true, message: 'Please input order weight!' }]}
      >
        <InputNumber
            style={{ width: 'auto' }}
            min={0.001}
            max={10000}
            controls={false}
            precision={3}
            addonAfter="Kg"
            onChange={e => {setOrderData({
              ...orderData,
              weight: e ?? 0
            })}}
        />
      </Form.Item>

      <Form.Item
        label="Collection Date"
        name="collectionDate"
        hasFeedback
        rules={[{ required: true, message: 'Please input date of collection!' }]}
      >
        <DatePicker
          onChange={(_date, dateString) => {setOrderData({
            ...orderData,
            collectionDate: dateString
          })}}
        />
      </Form.Item>
    </Fragment>
  )
}
