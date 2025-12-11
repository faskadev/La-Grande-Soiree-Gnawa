import { useQuery } from "@tanstack/react-query";
import { instance } from "../instance";
export const useGetArtists = () => {
  return useQuery({
    queryKey: ['artists'],
    queryFn: () => instance.get('/artists').then(res => res.data).catch((error) => {
      throw new Error(error.message || 'Failed to fetch artist data');
    }),
  });
}