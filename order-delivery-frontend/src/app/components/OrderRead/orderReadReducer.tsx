export const ORDER_ACTIONS_TYPES = {
  orderLoading: "orderLoading",
  orderLoadingError: "orderLoadingError",
  orderLoadingSuccess: "orderLoadingSuccess",
}

interface State {
  orderInfo: Order | null,
  error: unknown,
  isLoading: boolean
}

export interface OrderAction {
  type: string
  payload: State
}

export const initialState: State = {
  orderInfo: null,
  error: null,
  isLoading: true
}

export const orderReducer = (state: State, action: OrderAction) : State => {
  switch (action.type) {
    case ORDER_ACTIONS_TYPES.orderLoading:
      return { ...state, isLoading: true }
    case ORDER_ACTIONS_TYPES.orderLoadingError:
      return { ...state, isLoading: false, error: action.payload.error }
    case ORDER_ACTIONS_TYPES.orderLoadingSuccess:
      return { ...state, isLoading: false, orderInfo: action.payload.orderInfo }
    default:
      return state
  }
}
