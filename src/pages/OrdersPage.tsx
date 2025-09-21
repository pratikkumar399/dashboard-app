import { OrderList } from "../components/order-list";

export const OrdersPage = () => {
  return (
    <div className="flex flex-col gap-4 p-12">
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-foreground">Order Management</h1>
        </div>
        <OrderList />
      </div>
    </div>
  );
};
