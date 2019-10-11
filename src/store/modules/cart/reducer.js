const initialState = [];

export default function cart(state = initialState, action) {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return [...state, action.product];
        case '@cart/UPDATE_AMOUNT_SUCCESS':
            state.map(product => {
                if (product.id === action.id) {
                    product.amount = action.amount;
                }
            });

            return [...state];
        case '@cart/REMOVE':
            return state.filter(product => product.id !== action.id);
        default:
            return state;
    }
}
