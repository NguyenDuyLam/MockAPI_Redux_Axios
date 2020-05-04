import * as Types from './../constaints/actionType';
import CallApi  from './../utils/api';

export const actFectProductsRequest = () => {
    return (dispatch) => {
        return CallApi('ListProducts', "GET", null).then(
            res => {
                dispatch(actFectProducts(res.data))
                console.log(res.data)
            }
        ) 
    }
}
export const actFectProducts = (products) => {
    return {
        type: Types.FECTH_PRODUCTS,
        products
    }
}

export const actDeleteActionRequest = (id) => {
    return (dispatch => {
        return CallApi(`ListProducts/${id}`, 'DELETE', null).then(res => {
                dispatch(actDeleteProducts(id))
            }
        )
    })
}

export const actDeleteProducts = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}


export const actAddProductsReauest = (product) => {
    return (dispatch => {
        return CallApi('ListProducts', "POST", product).then( res => {
            dispatch(actAddProducts(res.data));
            console.log(res.data)
        }) 
    })
}

export const actAddProducts = (product) => {
   return{ type: Types.ADD_PRODUCT,
    product
}}

export const actGetProducts = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return CallApi(`ListProducts/${id}`, "GET", null).then(res => {
            dispatch(actGetProducts(res.data));
        })
    }
}

export const actUpdateProductsRequest = (product) => {
    return dispatch => {
        return CallApi(`ListProducts/${product.id}`, "PUT", product).then(res => {
            dispatch(actUpdateProducts(res.data))
        })
    }
}

export const actUpdateProducts = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}


