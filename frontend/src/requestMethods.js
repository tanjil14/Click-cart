import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2QwYzYwOTM4MDM1YjhjZmY0YWMzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzc2OTg0MiwiZXhwIjoxNjU4MDI5MDQyfQ.Gm58hQs8aUnW2VNBizUVwYrZwYcai0vG_DuccBoLpBY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
