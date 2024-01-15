"use client";

import Divider from 'antd/es/divider'
import { OrderIndex } from './components/OrderIndex/orderIndex'

export default function Home() {
  return (
    <main>
      <Divider orientation={"center"}>Orders List</Divider>
      <OrderIndex/>
    </main>
  )
}
