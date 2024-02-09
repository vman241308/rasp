import axios from "axios";

import { API_BASE_URL } from "@/utils/Constants";

export default axios.create({
  baseURL: API_BASE_URL, // apply base url to axios instance
});
