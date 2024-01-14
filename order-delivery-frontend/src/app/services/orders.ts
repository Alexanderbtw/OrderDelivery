const BASE_URL = 'http://localhost:5170/api/';

export interface CreateOrderCommand {
    senderCity: string,
    senderAddress: string,
    receiverCity: string,
    receiverAddress: string,
    weight: number,
    collectionDate: string
}

export interface CreateOrderResponse {
    orderId: string,
    errors: {
        key: string,
        value: string[]
    }
}

export const getAllOrders = async () : Promise<Order[]> => {
    const response = await fetch(BASE_URL + 'Order/GetAll');

    return response.json();
}

export const getSingleOrder = async (id: string) : Promise<Order> => {
    const response = await fetch(BASE_URL + 'Order/' + id);

    return response.json();
}

export const createOrder = async (orderRequest: CreateOrderCommand) : Promise<CreateOrderResponse> => {
    const response = await fetch(BASE_URL + 'Order/Create', {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(orderRequest),
    })

    return response.json();
}
