import { IProducts } from '../interfaces/goods.interface';
import { typesSort } from '../goods';

const {
  BY_NAME,
  PRICE_LOW_TO_HIGH,
  PRICE_HIGH_TO_LOW,
  NUMBER_OF_PIECES,
  WEIGHT,
} = typesSort;

export const sortProduct = (goods: IProducts[], typeSort: string) => {
  switch (typeSort) {
    case BY_NAME:
      return goods.sort((a, b) => a.productName.localeCompare(b.productName));
    case PRICE_LOW_TO_HIGH:
      return goods.sort((a, b) => a.price - b.price);
    case PRICE_HIGH_TO_LOW:
      return goods.sort((a, b) => b.price - a.price);
    case NUMBER_OF_PIECES:
      return goods.sort((a, b) => a.chunks - b.chunks);
    case WEIGHT:
      return goods.sort((a, b) => b.weight - a.weight);
    default:
      return goods;
  }
};
