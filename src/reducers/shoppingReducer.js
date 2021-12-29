import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
    products: [{
            id: 1,
            name: "Producto 1",
            price: 100,
        },
        {
            id: 2,
            name: "Producto 2",
            price: 150,
        },
        {
            id: 3,
            name: "Producto 3",
            price: 160,
        },
        {
            id: 4,
            name: "Producto 4",
            price: 90,
        },
        {
            id: 5,
            name: "Producto 5",
            price: 400,
        },
        {
            id: 6,
            name: "Producto 6",
            price: 1000,
        },
    ],

    cart: [],
};

export const shoppingReducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART:
            {
                const newItem = state.products.find(
                    (product) => product.id === action.payload
                );

                const itemCart = state.cart.find((item) => item.id === newItem.id);

                return itemCart ?
                    {
                        ...state,
                        cart: state.cart.map((item) =>
                            item.id === newItem.id ?
                            {...item, quantity: item.quantity + 1 } :
                            item
                        ),
                    } :
                    {
                        ...state,
                        cart: [{...newItem, quantity: 1 }, ...state.cart],
                    };
            }

        case TYPES.REMOVE_ONE_FROM_CART:
            {
                const itemToDelete = state.cart.find(
                    (item) => item.id === action.payload
                );
                return itemToDelete.quantity > 1 ?
                    {
                        ...state,
                        cart: state.cart.map((item) =>
                            item.id === action.payload ?
                            {...item, quantity: item.quantity - 1 } :
                            item
                        ),
                    } :
                    {
                        ...state,
                        cart: state.cart.filter((item) => item.id !== action.payload),
                    };
            }
        case TYPES.REMOVE_ALL_FROM_CART:
            {
                return {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload),
                };
            }
        case TYPES.CLEAR_CART:
            return shoppingInitialState;
        default:
            return state;
    }
};