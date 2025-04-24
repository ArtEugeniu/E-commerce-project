import {
  useGetGoodsMenGymQuery,
  useGetGoodsMenQuery,
  useGetGoodsWomenGymQuery,
  useGetGoodsWomenQuery
} from "../services/productsApi";


export const useAllProducts = () => {

  const { data: men } = useGetGoodsMenQuery();
  const { data: menGym } = useGetGoodsMenGymQuery();
  const { data: women } = useGetGoodsWomenQuery();
  const { data: womenGym } = useGetGoodsWomenGymQuery();

  const allProducts = [
    ...(men?.products || []),
    ...(menGym?.products || []),
    ...(women?.products || []),
    ...(womenGym?.products || [])
  ]

  return allProducts
}

