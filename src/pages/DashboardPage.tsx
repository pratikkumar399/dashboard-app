import { ProjectionsChart } from "../components/bar-chart";
import { StatCard } from "../components/stat-card";
import { RevenueLineChart } from "../components/revenue-line-chart";
import { RevenueByLocation } from "../components/revenue-by-location";
import { TopSellingProducts } from "../components/top-selling-products";
import { TotalSales } from "../components/total-sales";

export const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-[28px] p-12">
      <div>
        <div className="w-full flex flex-col lg:flex-row gap-[28px]">
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <StatCard title="Customers" value="3,781" change="+11.01%" light={true} />
              <StatCard title="Orders" value="1,219" change="-0.03%" />
              <StatCard title="Revenue" value="$695" change="+15.03%" />
              <StatCard title="Growth" value="30.1%" change="+6.08%" light={true} />
            </div>
          </div>
          <div className="flex-1 flex items-stretch">
            <ProjectionsChart />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[28px] w-full">
        <div className="lg:w-[70%] w-full min-w-2">
          <RevenueLineChart />
        </div>
        <div className="lg:w-[30%] w-full min-w-0">
          <RevenueByLocation />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[28px] w-full">
        <div className="lg:w-[70%] w-full min-w-0">
          <TopSellingProducts />
        </div>
        <div className="lg:w-[30%] w-full min-w-0">
          <TotalSales />
        </div>
      </div>
    </div>
  );
};
