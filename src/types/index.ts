export type ObjectValues<T> = T[keyof T];

export type MenuItem = {
  id?: string;
  name: string;
  description: string;
  price?: number;
};

export const ORDER_STATUS = {
  ordered: "ordered",
  inProgress: "inProgress",
  fulfilled: "fulfilled",
} as const;

export type OrderStatus = ObjectValues<typeof ORDER_STATUS>;

export const ORDER_OPTIONS_TYPE = {
  hot: "hot",
  iced: "iced",
} as const;

export type OrderOptionsType = ObjectValues<typeof ORDER_OPTIONS_TYPE>;

export const ORDER_OPTIONS_MILK = {
  almond: "Almond",
  oat: "Oat",
  soy: "Soy",
} as const;

export type OrderOptionsMilk = ObjectValues<typeof ORDER_OPTIONS_MILK>;

export const ORDER_OPTIONS_SWEETNESS = {
  regular: "Regular",
  half: "Half",
  extra: "Extra",
} as const;

export type OrderOptionsSweetness = ObjectValues<
  typeof ORDER_OPTIONS_SWEETNESS
>;

export const ORDER_OPTIONS_TOPPINGS = {
  whipCream: "Whipped Cream",
  sweetCream: "Coconut Sweet Cream",
} as const;

export type OrderOptionsToppings = ObjectValues<typeof ORDER_OPTIONS_TOPPINGS>;

export type OrderOptions = {
  type: OrderOptionsType;
  milk: OrderOptionsMilk;
  sweetness: OrderOptionsSweetness;
  toppings: OrderOptionsToppings;
};

export type Order = {
  id?: string;
  orderItem: string;
  orderedBy: string;
  status: OrderStatus;
  createdAt: Date;
  orderOptions: OrderOptions;
};
