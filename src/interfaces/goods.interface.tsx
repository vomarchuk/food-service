interface IImage {
  x1: string;
  x2: string;
}
export interface ITypesSort {
  DEFAULT: string;
  BY_NAME: string;
  PRICE_LOW_TO_HIGH: string;
  PRICE_HIGH_TO_LOW: string;
  NUMBER_OF_PIECES: string;
  WEIGHT: string;
}

export interface ICategories {
  categoryId: string;
  categoryName: string;
  fullName: string;
  smallImage: IImage;
  soon: boolean;
  doubleCard: boolean;
}
export interface IProducts {
  productId: string;
  productName: string;
  categoryId: string;
  weight: number;
  chunks: number;
  price: number;
  smallImage: IImage;
  largeImage?: IImage;
}

export interface IReview {
  id: string;
  date: string;
  name: string;
  description: string;
}

export interface IBeckEnd {
  categories: ICategories[];
  products: IProducts[];
  reviews: IReview[];
}
