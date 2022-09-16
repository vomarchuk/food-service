interface SmallImage {
  x1: string;
  x2: string;
}

interface Categories {
  categoryId: string;
  name: string;
  fullName: string;
  smallImage: SmallImage;
  soon: boolean;
}
interface BeckEnd {
  categories: Categories[];
}

export const beckEnd: BeckEnd = {
  categories: [
    {
      categoryId: '1',
      name: 'pizza',
      fullName: 'Pizza',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OkzMY.pizzaS.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OkHID.pizzaS2.jpg',
      },
      soon: false,
    },
    {
      categoryId: '2',
      name: 'sets',
      fullName: 'Sets',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OHdHq.sets.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OHsOp.sets2x.png',
      },
      soon: false,
    },
    {
      categoryId: '3',
      name: 'wok',
      fullName: 'WOK',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OB0aJ.Rectangle-17.png',
        x2: 'https://i.im.ge/2022/09/17/1OHLhm.WOK2x.jpg',
      },
      soon: false,
    },
    {
      categoryId: '4',
      name: 'rolls',
      fullName: 'Rolls',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OHthJ.rolls.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OHyby.rolls2x.jpg',
      },
      soon: false,
    },
    {
      categoryId: '5',
      name: 'sushi',
      fullName: 'Sushi',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OHb1K.sushi.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OH3pF.sushi2x.jpg',
      },
      soon: false,
    },
    {
      categoryId: '6',
      name: 'soups',
      fullName: 'Soups',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OHzpC.soups.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OHp2q.soups2x.jpg',
      },
      soon: true,
    },
    {
      categoryId: '7',
      name: 'salads',
      fullName: 'Salads',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OHBif.salads.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OH4l1.salads2x.jpg',
      },
      soon: true,
    },
    {
      categoryId: '8',
      name: 'drinks',
      fullName: 'Drinks',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OpTC0.drinks.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OpQ7W.drinks2x.jpg',
      },
      soon: false,
    },
    {
      categoryId: '10',
      name: 'cornDog',
      fullName: 'Corn Dog',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1Op9MM.corn-god.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OpjDY.corn-dog2x.jpg',
      },
      soon: false,
    },
    {
      categoryId: '9',
      name: 'promotions',
      fullName: 'Promotions',
      smallImage: {
        x1: 'https://i.im.ge/2022/09/17/1OnPN6.promotions.jpg',
        x2: 'https://i.im.ge/2022/09/17/1OntfF.promotions2x.jpg',
      },
      soon: false,
    },
  ],
};
