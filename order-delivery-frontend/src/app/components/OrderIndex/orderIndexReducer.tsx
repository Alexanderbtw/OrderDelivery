export const ORDERS_ACTIONS_TYPES = {
  ordersLoading: "ordersLoading",
  ordersLoadingError: "ordersLoadingError",
  ordersLoadingSuccess: "ordersLoadingSuccess",
}

interface State {
  ordersInfo: Order[],
  isLoading: boolean,
  error: unknown
}

export interface OrdersAction {
  type: string,
  payload: State
}

export const initialState: State = {
  ordersInfo: [],
  isLoading: true,
  error: undefined
}

export const ordersReducer = (state: State, action: OrdersAction) : State => {
  switch (action?.type) {
    case ORDERS_ACTIONS_TYPES.ordersLoading:
      return { ...state, isLoading: true }
    case ORDERS_ACTIONS_TYPES.ordersLoadingError:
      return { ...state, isLoading: false, error: action.payload.error }
    case ORDERS_ACTIONS_TYPES.ordersLoadingSuccess:
      return { ...state, isLoading: false, ordersInfo: action.payload.ordersInfo }
    default:
      return state;
  }
}
