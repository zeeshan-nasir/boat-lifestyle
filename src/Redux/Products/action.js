export const GET_PRODUCTS = "GET_PRODUCTS"
export const SORT_PRODUCTS = "SORT_PRODUCTS"
export const FILTER_PRODUCTS = "FILTER_PRODUCTS"

export const getProducts = (data) => {
    return {
        type: GET_PRODUCTS,
        payload: data
    }
}

export const sortProducts = (by) => {
    return {
        type: SORT_PRODUCTS,
        payload: by
    }
}