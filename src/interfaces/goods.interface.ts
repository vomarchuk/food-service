interface ISmallImage {
  x1: string;
  x2: string;
}

export interface ICategories {
  categoryId: string;
  categoryName: string;
  fullName: string;
  smallImage: ISmallImage;
  soon: boolean;
  doubleCard: boolean;
}
export interface IProducts {
  productId: string;
  productName: string;
  categoryId: string;
  weight: number;
  chunks: number | null;
  price: number;
  smallImage: ISmallImage;
}

export interface IBeckEnd {
  categories: ICategories[];
  products: IProducts[];
}
