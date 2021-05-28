import { ADD_MENU, REMOVE_MENU, SET_MENUS } from "../actions/types";

const initialState = {
  menus: {
  },
  price: 0,
};
const prices = {
  burger: 150,
  shawarma: 120,
  frenchfries: .200,
  coffee: .50,
  cola: 55,
 
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_MENU:
      newState.menus[action.menu]++;
      newState.price += prices[action.menu];
      break;
    case REMOVE_MENU:
      newState.menus[action.menu]--;
      newState.price -= prices[action.menu];
      break;
    case SET_MENUS:
      return { ...action.data };
  
    default:
      break;
  }

  return newState;
}

export default builder;