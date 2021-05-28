import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-c22d1-default-rtdb.firebaseio.com";

export default instance;