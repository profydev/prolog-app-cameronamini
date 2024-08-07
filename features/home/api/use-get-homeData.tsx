import { useQuery } from "@tanstack/react-query";
import { getHomeData } from "@api/home";
import type { PageData } from "@api/home.types";

export function useGetHomeData() {
  return useQuery<PageData, Error>(["homeData"], getHomeData);
}
