interface ISmallImage {
  x1: string;
  x2: string;
}

interface ICategories {
  categoryId: string;
  categoryName: string;
  fullName: string;
  smallImage: ISmallImage;
  soon: boolean;
  doubleCard: boolean;
}
interface IProducts {
  productId: string;
  productName: string;
  categoryId: string;
  weight: number;
  chunks: number;
  price: number;
  smallImage: ISmallImage;
}

interface BeckEnd {
  categories: ICategories[];
  products: IProducts[];
}

export const beckEnd: BeckEnd = {
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
      price: 1550,
      smallImage: {
        x1: 'https://i.im.ge/2022/09/21/1Lg3ND.salmon-set.jpg',
        x2: 'https://i.im.ge/2022/09/21/1LgYV4.salmon-set2x.jpg',
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
  ],
};
