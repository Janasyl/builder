
import { ADD_FOOD, REMOVE_FOOD, SET_FOODS} from "../actions/types";

const initialState = {
  menu: {
  },
  price: 0,
};
const prices = {
  cola: 3.5,
  pepsi: 4,
  frenchfries: .3,
  burger: .3,
  tea: 2,
  coffee: 3,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_FOOD:
      newState.menu[action.menu]++;
      newState.price += prices[action.menu];
      break;
    case REMOVE_FOOD:
      newState.menu[action.menu]--;
      newState.price -= prices[action.menu];
      break;
    case SET_FOODS:
      return { ...action.data };
  
    default:
      break;
  }

  return newState;
}

export default builder;