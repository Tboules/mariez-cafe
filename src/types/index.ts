export type ObjectValues<T> = T[keyof T];

export const DRINK_CATEGORIES = {
  latte: 1,
  nonCoffee: 2,
  matcha: 3,
  refresher: 4,
} as const;

export type DrinkCategory = ObjectValues<typeof DRINK_CATEGORIES>;

export const MENU_ITEM_DRINK_TYPES = {
  iced: "Iced",
  hot: "Hot",
  either: "Either",
} as const;

export type MenuItemDrinkTypes = ObjectValues<typeof MENU_ITEM_DRINK_TYPES>;

export type MenuItem = {
  id?: string;
  name: string;
  description: string;
  price?: number;
  drinkTypes: MenuItemDrinkTypes;
  milk: boolean;
  isRefresher?: boolean;
  isTea?: boolean;
  category: DrinkCategory;
};

export const ORDER_STATUS = {
  ordered: "ordered",
  inProgress: "inProgress",
  fulfilled: "fulfilled",
} as const;

export type OrderStatus = ObjectValues<typeof ORDER_STATUS>;

export const ORDER_OPTIONS_TYPE = {
  hot: "Hot",
  iced: "Iced",
} as const;

export type OrderOptionsType = ObjectValues<typeof ORDER_OPTIONS_TYPE>;

export const ORDER_OPTIONS_MILK = {
  almond: "Almond",
  oat: "Oat",
  soy: "Soy",
} as const;

export type OrderOptionsMilk = ObjectValues<typeof ORDER_OPTIONS_MILK>;

export const ORDER_OPTIONS_REFRESHER = {
  original: "Original",
  greenTea: "Green Tea",
  blackTea: "Black Tea",
  lemonade: "Lemonade",
  appleJuice: "Apple Juice",
} as const;

export type OrderOptionsRefresher = ObjectValues<
  typeof ORDER_OPTIONS_REFRESHER
>;

export const ORDER_OPTIONS_SWEETNESS = {
  regular: "Regular",
  half: "Half",
  extra: "Extra",
  none: "None",
} as const;

export type OrderOptionsSweetness = ObjectValues<
  typeof ORDER_OPTIONS_SWEETNESS
>;

export const ORDER_OPTIONS_TOPPINGS = {
  none: "None",
  whipCream: "Whipped Cream",
  sweetCream: "Coconut Sweet Cream",
} as const;

export type OrderOptionsToppings = ObjectValues<typeof ORDER_OPTIONS_TOPPINGS>;

export type OrderOptions = {
  type: OrderOptionsType | null;
  milk: OrderOptionsMilk | null;
  refresherType: OrderOptionsRefresher | null;
  sweetness: OrderOptionsSweetness | null;
  toppings: OrderOptionsToppings | null;
};

export type Order = {
  id?: string;
  orderItemId?: string;
  orderItemName: string;
  orderedBy: string;
  status: OrderStatus;
  createdAt: Date;
  orderOptions: OrderOptions;
};
