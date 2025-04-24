import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IProduct {
  id:                  number;
  name:                string;
  price:               any;
  colour:              string;
  colourWayId:         number;
  brandName:           string;
  hasVariantColours:   boolean;
  hasMultiplePrices:   boolean;
  groupId:             null;
  productCode:         number;
  productType:         string;
  url:                 string;
  imageUrl:            string;
  additionalImageUrls: string[];
  videoUrl:            null;
  showVideo:           boolean;
  isSellingFast:       boolean;
  isRestockingSoon:    boolean;
  isPromotion:         boolean;
  sponsoredCampaignId: null;
  facetGroupings:      any[];
  advertisement:       null;
  earlyAccess:         null;
  products:            any;
}

export const asosApi = createApi({
  reducerPath: 'asosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://asos2.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', '51bfccd69bmshd3dc4b2848a19fcp16a0cbjsnc31209882eb2');
      headers.set('x-rapidapi-host', 'asos2.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGoodsMen: builder.query<any, void>({
      query: () => '/products/v2/list?store=US&offset=0&categoryId=6993&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=48&lang=en-US',
    }),
    getGoodsWomen: builder.query<any, void>({
      query: () => '/products/v2/list?store=US&offset=0&categoryId=16661&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=48&lang=en-US'
    }),
    getGoodsMenGym: builder.query<IProduct, void>({
      query: () => '/products/v2/list?store=US&offset=0&categoryId=20140&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=48&lang=en-US'
    }),
    getGoodsWomenGym: builder.query<IProduct, void>({
      query: () => '/products/v2/list?store=US&offset=0&categoryId=27171&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=48&lang=en-US'
    })
  }),
});

export const { useGetGoodsMenQuery, useGetGoodsWomenQuery, useGetGoodsMenGymQuery, useGetGoodsWomenGymQuery } = asosApi;




























