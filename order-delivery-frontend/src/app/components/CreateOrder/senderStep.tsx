'use client';

import React, { Fragment, FunctionComponent } from 'react'
import { FormDataProps } from './createOrderForm'
import { Button, Form, Input } from 'antd'

interface ResponseAddress {
  lat: number,
  lon: number,
  address: string,
  houseNumber: string,
  street: string,
  postalCode: string,
  city: string,
  region: string,
  regionCode: string,
  country: string,
  countryCode: string,
  countryCode3: string,
  currency: string
}

export const SenderStep: FunctionComponent<FormDataProps> = ({
  orderData,
  setOrderData,
  currentPage
}) => {
  const form = Form.useFormInstance();

  const useCurrentLocation = async () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      return;
    }

    try {
      const position: GeolocationPosition = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
      const { latitude, longitude } = position.coords;

      const address: ResponseAddress = await (
        await fetch("https://api.exoapi.dev/reverse-geocoding", {
          method: "POST",
          headers: {
            Authorization: "Bearer aa1297b631e44962ac936ef7be76551b-881f1d2a1e94512e13d5137a57bdcdec",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ lat: latitude, lon: longitude, locale: "en-GB" }),
        })
      ).json();

      const adressText = [address.street, address.houseNumber].filter((x) => x).join(", ");
      const cityText = [address.country, address.city].filter((x) => x).join(", ");
      setOrderData({
        ...orderData,
        senderAddress: adressText,
        senderCity: cityText,
      });
      form.setFieldsValue({
        senderCity: adressText,
        senderAddress: cityText,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (currentPage !== 0) {
    return null;
  }

  return (
    <Fragment>
      <Form.Item
        shouldUpdate
        label="City"
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
        label="Address"
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
      <Form.Item>
        <Button type="dashed" block onClick={useCurrentLocation}>
          Use current location
        </Button>
      </Form.Item>
    </Fragment>
  )
}
