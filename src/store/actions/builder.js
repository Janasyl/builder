import axios from "../../axios";
import { ADD_MENU, REMOVE_MENU, SET_MENUS } from "./types";

export const add = (menu) => ({
  type: ADD_MENU,
  menu: menu
});

export const remove = (menu) => ({
  type: REMOVE_MENU,
  menu: menu
});

export const set = (data) => ({
  type: SET_MENUS,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('/default.json')
    .then(response => dispatch(set(response.data)));
}