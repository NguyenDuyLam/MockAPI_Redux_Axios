import * as Types from "./../constaints/actionType";

var initialState = [];
var findIndex = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};
const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.FECTH_PRODUCTS:
      state = action.products;
      return [...state];
    case Types.DELETE_PRODUCT:
      let index = findIndex(state, action.id);
      state.splice(index, 1);
      return [...state];
    case Types.ADD_PRODUCT:
      state.push(action.product);
      return [...state];
    case Types.UPDATE_PRODUCT:
      var indexs = findIndex(state, action.product.id);
      state[indexs] = action.product;
      return [...state];
    default:
      return [...state];
  }
};

export default products;
