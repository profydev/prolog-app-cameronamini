import { axios } from "./axios";
import { PageData } from "./home.types";
const ENDPOINT = "content-page/home";

export async function getHomeData() {
  const { data } = await axios.get<PageData>(ENDPOINT);
  return data;
}
