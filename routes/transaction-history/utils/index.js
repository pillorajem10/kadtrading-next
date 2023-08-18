export const getOrderItemsId = (list) => {
  const orderItemIds = list.orders.map(order => {
    return order.items.map(oi => oi._id);
  });
  return { orderItemIds };
};
