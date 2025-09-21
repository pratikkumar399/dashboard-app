import { products } from "@/constants/products"

export const TopSellingProducts = () => {

  return (
    <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border">
      {/* Header */}
      <h3 className="text-lg font-bold text-foreground mb-6">Top Selling Products</h3>
      
      {/* Table */}
      <div className="w-full">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 mb-4 pb-3 border-b border-muted-foreground/20">
          <div className="text-sm text-muted-foreground font-normal text-left">
            Name
          </div>
          <div className="text-sm text-muted-foreground font-normal text-right">
            Price
          </div>
          <div className="text-sm text-muted-foreground font-normal text-right">
            Quantity
          </div>
          <div className="text-sm text-muted-foreground font-normal text-right">
            Amount
          </div>
        </div>
        
        {/* Table Rows */}
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 h-[40px]">
              <div className="text-sm text-foreground font-normal text-left">
                {product.name}
              </div>
              <div className="text-sm text-foreground font-normal text-right">
                {product.price}
              </div>
              <div className="text-sm text-foreground font-normal text-right">
                {product.quantity}
              </div>
              <div className="text-sm text-foreground font-normal text-right">
                {product.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
