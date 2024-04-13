import React from "react";
import type { Order } from "../types";

const SAMPLE_ORDER: Order = {
  createdAt: new Date(Date.now()),
  orderItemId: "",
  orderItemName: "Spanish Latte",
  orderedBy: "Tony Boules",
  status: "ordered",
  orderOptions: {
    milk: "Oat",
    refresherType: null,
    sweetness: "Regular",
    toppings: "Whipped Cream",
    type: "Iced",
  },
};

export function OrdersManager() {
  return (
    <div className="omw">
      <div className="omw_body">
        <div className="omw_body__current">
          <h3>Current Orders</h3>

          <OrderedCard order={SAMPLE_ORDER} />
        </div>

        <div className="sep" />

        <div className="omw_body__fulfilled">
          <h3>Fulfilled</h3>
        </div>
      </div>
    </div>
  );
}

function OrderedCard({ order }: { order: Order }) {
  return (
    <div className="o_card">
      <div className="o_card__header">
        <div>
          <h4 className="o_card__title">{order.orderItemName}</h4>
          <p className="o_card__by">{order.orderedBy}</p>
        </div>
        <button>Done</button>
      </div>

      <h4 className="o_card__sub">Options:</h4>
      <div className="o_card__options">
        {Object.entries(order.orderOptions).map(([k, v]) => (
          <React.Fragment key={k}>
            {v && (
              <div className="o_card__option">
                <h5>{k}:</h5>
                <p>{v}</p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
