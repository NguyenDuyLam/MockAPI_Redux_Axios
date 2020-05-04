import * as Types from './../constaints/actionType';
var inittialState = {};

 const itemEditting = (state = inittialState, action) => {
    switch(action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;

    }
}

export default itemEditting;