import { useQuery } from "@tanstack/react-query";
import request from "../AxiosUtils";
import { HomePageAPI } from "../AxiosUtils/API";

const useCustomDataQuery = ({ params }) => {
  return useQuery(
    ["data", params],
    async () => {
      const response = await request({ url: HomePageAPI, params: { slug: params } });
      return response?.data?.content;
    },
    {
      select: (data) => data,
      refetchOnWindowFocus: false,
      enabled: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 30 * 60 * 1000, // 30 minutes
    }
  );
};

export default useCustomDataQuery;
