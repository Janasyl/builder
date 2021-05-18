import axios from "../../axios";
import { ADD_FOOD, REMOVE_FOOD, SET_FOODS } from "./types";

export const add = (food) => ({
  type: ADD_FOOD,
  food: food
});

export const remove = (food) => ({
  type: REMOVE_FOOD,
  food: food
});

export const set = (data) => ({
  type: SET_FOODS,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('/default.json')
    .then(response => dispatch(set(response.data)));
}