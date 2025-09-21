"use client"

import  { useState, useEffect } from 'react';
import { useTheme } from '../contexts/theme-context';


export const ProjectionsChart = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const { theme } = useTheme();
  
    useEffect(() => {
      // Trigger animation shortly after component mounts
      const timer = setTimeout(() => setIsAnimated(true), 100);
      return () => clearTimeout(timer);
    }, []);
  
    const chartData = [
      { month: 'Jan', actual: 16, projection: 4 },
      { month: 'Feb', actual: 20, projection: 5 },
      { month: 'Mar', actual: 17, projection: 4 },
      { month: 'Apr', actual: 22, projection: 6 },
      { month: 'May', actual: 14, projection: 4 },
      { month: 'Jun', actual: 20, projection: 5 },
    ];
  
    const maxValue = 30;
  
    return (
      <div className={`p-6 rounded-2xl col-span-1 lg:col-span-2 w-full h-full flex flex-col ${theme === 'light' ? 'bg-[#F7F9FB]' : 'bg-[#27272a]'}`}>
        <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-slate-800' : 'text-slate-200'}`}>Projections vs Actuals</h3>
        <div className="flex-grow flex mt-6 space-x-2 items-end">
          {/* Y-Axis Labels */}
          <div className={`flex flex-col justify-between h-full text-sm pb-6 pr-2 ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
            <span>30M</span>
            <span>20M</span>
            <span>10M</span>
            <span>0</span>
          </div>
  
          {/* Chart Area (baseline at bottom) */}
          <div className="flex-1 flex flex-col">
              <div className={`relative w-full border-b flex justify-between items-end px-6 pt-4 ${theme === 'light' ? 'border-slate-300' : 'border-slate-600/70'}`}>
              {/* Grid Lines */}
              <div className="pointer-events-none absolute top-0 left-0 w-full h-[136px] flex flex-col justify-between">
                <div className={`w-full h-px ${theme === 'light' ? 'bg-slate-300/60' : 'bg-slate-600/40'}`}></div>
                <div className={`w-full h-px ${theme === 'light' ? 'bg-slate-300/60' : 'bg-slate-600/40'}`}></div>
                <div className={`w-full h-px ${theme === 'light' ? 'bg-slate-300/60' : 'bg-slate-600/40'}`}></div>
                <div className="w-full h-px"></div>
              </div>

              {chartData.map((data, index) => {
                const actualHeight = (data.actual / maxValue) * 100;
                const projectionHeight = (data.projection / maxValue) * 100;
  
                return (
                  <div key={data.month} className="flex flex-col items-center  w-1/6 z-10">
                    <div className="w-10 mx-auto h-[112px] flex flex-col-reverse">
                        <div
                            className="bg-[#b9cbe6] w-full  transition-all ease-out duration-1000"
                            style={{ height: isAnimated ? `${actualHeight}%` : '0%', transitionDelay: `${index * 100}ms` }}
                        ></div>
                        <div
                            className="bg-[#546070] w-full rounded-t-lg transition-all ease-out duration-1000"
                            style={{ height: isAnimated ? `${projectionHeight}%` : '0%', transitionDelay: `${index * 100}ms` }}
                        ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* X-Axis labels below the baseline */}
            <div className="flex justify-between px-6 pt-2">
              {chartData.map((data) => (
                <div key={`label-${data.month}`} className="w-1/6 text-center">
                  <span className={`text-sm ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  