import { IBeckEnd, ITypesSort } from './interfaces/goods.interface';

export const typesSort: ITypesSort = {
  DEFAULT: 'By default',
  BY_NAME: 'By name',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  NUMBER_OF_PIECES: 'Number of pieces',
  WEIGHT: 'Weight',
};

export const beckEnd: IBeckEnd = {
  categories: [
    {
      categoryId: '1',
      categoryName: 'pizza',
      fullName: 'Pizza',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OkzMY.pizzaS.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OkHID.pizzaS2.jpg',
      },
      soon: false,
      doubleCard: false,
    },
    {
      categoryId: '2',
      categoryName: 'sets',
      fullName: 'Sets',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OHdHq.sets.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OHsOp.sets2x.png',
      },
      soon: false,
      doubleCard: false,
    },
    {
      categoryId: '3',
      categoryName: 'wok',
      fullName: 'WOK',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/18/1dEUuD.WOK.jpg',
        x2: 'https://i.im.ge/2022/09/18/1dEh54.WOK2x.jpg',
      },
      soon: false,
      doubleCard: false,
    },
    {
      categoryId: '4',
      categoryName: 'rolls',
      fullName: 'Rolls',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OHthJ.rolls.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OHyby.rolls2x.jpg',
      },
      soon: false,
      doubleCard: false,
    },
    {
      categoryId: '5',
      categoryName: 'sushi',
      fullName: 'Sushi',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OHb1K.sushi.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OH3pF.sushi2x.jpg',
      },
      soon: false,
      doubleCard: false,
    },
    {
      categoryId: '6',
      categoryName: 'soups',
      fullName: 'Soups',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OHzpC.soups.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OHp2q.soups2x.jpg',
      },
      soon: true,
      doubleCard: false,
    },
    {
      categoryId: '7',
      categoryName: 'salads',
      fullName: 'Salads',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OHBif.salads.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OH4l1.salads2x.jpg',
      },
      soon: true,
      doubleCard: false,
    },
    {
      categoryId: '8',
      categoryName: 'drinks',
      fullName: 'Drinks',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OpTC0.drinks.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OpQ7W.drinks2x.jpg',
      },
      soon: false,
      doubleCard: false,
    },
    {
      categoryId: '10',
      categoryName: 'cornDog',
      fullName: 'Corn Dog',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1Op9MM.corn-god.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OpjDY.corn-dog2x.jpg',
      },
      soon: false,
      doubleCard: false,
    },
    {
      categoryId: '9',
      categoryName: 'promotions',
      fullName: 'Promotions',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OnPN6.promotions.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OntfF.promotions2x.jpg',
      },
      soon: false,
      doubleCard: true,
    },
  ],
  products: [
    {
      productId: '1',
      productName: 'Salmon set',
      categoryId: '2',
      weight: 1050,
      chunks: 30,
      price: 155,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/21/1Lg3ND.salmon-set.jpg',
        x2: 'https://i.im.ge/2022/09/21/1LgYV4.salmon-set2x.jpg',
      },
      largeImage: {
        x1: 'https://i.im.ge/2022/09/23/1hfszX.salmon-set3.jpg',
        x2: 'https://i.im.ge/2022/09/23/1hf7F8.salmon-set4.jpg',
      },
    },
    {
      productId: '2',
      productName: 'Philadelphia LOVE set',
      categoryId: '2',
      weight: 1000,
      chunks: 40,
      price: 109,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/21/1L8GWC.Philadelphia-LOVE-set.jpg',
        x2: 'https://i.im.ge/2022/09/21/1LRMoq.Philadelphia-LOVE-set2x.jpg',
      },
    },
    {
      productId: '3',
      productName: '5 Philadelphia set',
      categoryId: '2',
      weight: 1120,
      chunks: 40,
      price: 115,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/22/1LK4CP.5-Philadelphia-set.jpg',
        x2: 'https://i.im.ge/2022/09/22/1LKBv1.5-Philadelphia-set2x.jpg',
      },
    },
    {
      productId: '4',
      productName: 'Philadelphia and salmon set',
      categoryId: '2',
      weight: 1260,
      chunks: 36,
      price: 124,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/22/1LVFDL.Philadelphia-and-salmon-set.jpg',
        x2: 'https://i.im.ge/2022/09/22/1LVOCG.Philadelphia-and-salmon-set2x.jpg',
      },
      largeImage: {
        x1: 'https://i.im.ge/2022/09/22/1hKOZy.Philadelphia-and-salmon-set3.jpg',
        x2: 'https://i.im.ge/2022/09/22/1hKFmJ.Philadelphia-and-salmon-set4.jpg',
      },
    },
    {
      productId: '5',
      productName: '6 Philadelphia set',
      categoryId: '2',
      weight: 1320,
      chunks: 30,
      price: 122,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/22/1ht9YY.6-Philadelphia-set.jpg',
        x2: 'https://i.im.ge/2022/09/22/1htjBD.6-Philadelphia-set2x.jpg',
      },
    },
    {
      productId: '6',
      productName: 'Top set',
      categoryId: '2',
      weight: 1020,
      chunks: 40,
      price: 115,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/22/1htxhm.top-set.jpg',
        x2: 'https://i.im.ge/2022/09/22/1ht3br.top-set32x.jpg',
      },
    },
    {
      productId: '7',
      productName: 'Kamikaze set',
      categoryId: '2',
      weight: 1200,
      chunks: 52,
      price: 115,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/22/1htW1L.kamikaze-set.jpg',
        x2: 'https://i.im.ge/2022/09/22/1htZmG.kamikaze-set2x.jpg',
      },
    },
    {
      productId: '8',
      productName: 'Yakuza set',
      categoryId: '2',
      weight: 1270,
      chunks: 50,
      price: 119,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/22/1htvaz.yakuza-set.jpg',
        x2: 'https://i.im.ge/2022/09/22/1htJA6.yakuza-set2x.jpg',
      },
    },
    // {
    //   productId: '',
    //   productName: '',
    //   categoryId: '',
    //   weight: 0,
    //   chunks: 0,
    //   price: 0,
    //   smallImage: {
    //     x1: '',
    //     x2: '',
    //   },
    // },
    {
      productId: '1',
      productName: 'Diabolo',
      categoryId: '1',
      weight: 41,
      chunks: 1,
      price: 50,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
        x2: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
      },
    },
    {
      productId: '2',
      productName: 'Hawaii',
      categoryId: '1',
      weight: 41,
      chunks: 1,
      price: 48,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
        x2: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
      },
    },
    {
      productId: '3',
      productName: 'Pepperoni',
      categoryId: '1',
      weight: 41,
      chunks: 1,
      price: 48,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
        x2: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
      },
    },
    {
      productId: '4',
      productName: 'Vegetarian Pizza',
      categoryId: '1',
      weight: 41,
      chunks: 1,
      price: 53,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
        x2: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
      },
    },
    {
      productId: '5',
      productName: 'Carbonara',
      categoryId: '1',
      weight: 41,
      chunks: 1,
      price: 54,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
        x2: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
      },
    },
    {
      productId: '6',
      productName: 'Margarita',
      categoryId: '1',
      weight: 41,
      chunks: 1,
      price: 45,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
        x2: 'https://i.im.ge/2022/09/22/1hCnp0.52034884657-1aa7ed551e-o.png',
      },
    },
  ],
  reviews: [
    {
      id: '1',
      date: '02.10.22',
      name: 'Margarita',
      description:
        'Your delivery and your meals are the best in Warsaw! ) always very tasty, on time, always politely couriers and girls by phone',
    },
    {
      id: '2',
      date: '13.06.22',
      name: 'Kasper',
      description:
        'Your delivery and your meals are the best in Warsaw! ) always very tasty, on time, always politely couriers and girls by phone',
    },
    {
      id: '3',
      date: '22.05.22',
      name: 'Tomek',
      description:
        'Your delivery and your meals are the best in Warsaw! ) always very tasty, on time, always politely couriers and girls by phone',
    },
    {
      id: '4',
      date: '12.11.21',
      name: 'Monika',
      description:
        'Your delivery and your meals are the best in Warsaw! ) always very tasty, on time, always politely couriers and girls by phone',
    },
  ],
};
