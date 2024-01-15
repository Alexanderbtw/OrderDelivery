const BASE_URL = 'http://localhost:5170/api/';

export interface CreateOrderCommand {
    senderCity: string,
    senderAddress: string,
    receiverCity: string,
    receiverAddress: string,
    weight: number,
    collectionDate: string
}

export interface OrderErrors {
    [key: string]: string[]
}
interface CreateOrderResponse {
    orderId: string,
    errors: OrderErrors
}

export interface CreateOrderInfo {
    orderId?: string,
    error?: unknown
}

export interface GetOrders {
    data?: Order[],
    error?: unknown
}

export interface GetOrder {
    data?: Order,
    error?: unknown
}

export const getAllOrders = async () : Promise<GetOrders> => {
    try {
        const response = await fetch(BASE_URL + 'Order/GetAll');
        if (response.ok) {
            return {
                data: await response.json()
            }
        } else {
            throw new Error(`Error ${response.status} occured on the server`);
        }
    } catch (err) {
        return {
            error: err
        }
    }
}

export const getSingleOrder = async (id: string) : Promise<GetOrder> => {
    try {
        const response = await fetch(BASE_URL + 'Order/' + id);
        if (response.ok) {
            return {
                data: await response.json()
            }
        } else {
            throw new Error(`Error ${response.status} occured on the server`);
        }
    } catch (err) {
        return {
            error: err
        }
    }
}

export const createOrder = async (orderRequest: CreateOrderCommand) : Promise<CreateOrderInfo> => {
    try {
        const response = await fetch(BASE_URL + 'Order/Create', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orderRequest),
        });

        const res: CreateOrderResponse = await response.json();
        if (response.ok) {
            return { orderId: res.orderId }
        } else {
            if (response.status == 400) {
                let text = "";
                console.log(res.errors);
                for (const key in res.errors) {
                    for (const value of res.errors[key]) {
                        text += value + "\n";
                    }
                }
                throw new Error(text);
            } else {
                throw new Error(`Error ${response.status} occured on the server`);
            }
        }
    } catch (err) {
        return {
            error: err
        }
    }
}
