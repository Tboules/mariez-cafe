import React from "react";
import type { Order } from "../types";
import {
  collection,
  query,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { clientDb } from "../firebase/client";

export function OrdersManager() {
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [fulfilled, setFulfilled] = React.useState<Order[]>([]);

  React.useEffect(() => {
    const q = query(collection(clientDb, "orders"));
    const unsub = onSnapshot(q, (snap) => {
      const tempOrders: Order[] = [];
      const tempFulfilled: Order[] = [];

      snap.forEach((doc) => {
        const t = doc.data() as Order;
        t.id = doc.id;

        if (t.status == "ordered") {
          tempOrders.push(t);
        } else {
          tempFulfilled.push(t);
        }
      });

      setOrders(tempOrders);
      setFulfilled(tempFulfilled);
    });

    return unsub;
  }, []);

  return (
    <div className="omw">
      <div className="omw_body">
        <div className="omw_body__current">
          <h3>Current Orders</h3>

          {orders.reverse().map((order) => (
            <OrderedCard key={order.id} order={order} />
          ))}
        </div>

        <div className="sep" />

        <div className="omw_body__fulfilled">
          <h3>Fulfilled</h3>

          {fulfilled.reverse().map((fulfilledOrder) => (
            <OrderedCard key={fulfilledOrder.id} order={fulfilledOrder} />
          ))}
        </div>
      </div>
    </div>
  );
}

async function fulfillOrder(o: Order) {
  console.log(o);
  if (!o.id) return;

  const orderRef = doc(clientDb, "orders", o.id);
  o.status = "fulfilled";
  await updateDoc(orderRef, o);
}

function OrderedCard({ order }: { order: Order }) {
  return (
    <div className="o_card">
      <div className="o_card__header">
        <div>
          <h4 className="o_card__title">{order.orderItemName}</h4>
          <p className="o_card__by">{order.orderedBy}</p>
        </div>
        {order.status == "ordered" && (
          <button onClick={() => fulfillOrder(order)}>Done</button>
        )}
      </div>

      {order.status == "ordered" && (
        <>
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
        </>
      )}
    </div>
  );
}
