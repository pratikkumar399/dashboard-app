"use client"

import { useState, useEffect } from 'react';
import WorldMapSvg from '../assets/World Map.svg';

export const RevenueByLocation = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const locationData = [
    { name: "New York", revenue: 72, maxRevenue: 100 },
    { name: "San Francisco", revenue: 39, maxRevenue: 100 },
    { name: "Sydney", revenue: 25, maxRevenue: 100 },
    { name: "Singapore", revenue: 61, maxRevenue: 100 },
  ];

  const mapMarkers = [
    { x: 25, y: 35, name: "New York" },
    { x: 15, y: 40, name: "San Francisco" },
    { x: 75, y: 60, name: "Singapore" },
    { x: 85, y: 75, name: "Sydney" },
  ];

  return (
    <div className="bg-card text-card-foreground p-6 rounded-2xl h-[368px] flex flex-col border border-border">
      {/* Header */}
      <h3 className="text-lg font-medium text-foreground mb-4">Revenue by Location</h3>

      {/* World Map */}
      <div className="relative mb-4 flex-1 ">
        <div className="relative w-full">
          {/* World Map SVG */}
          <div className="w-full h-[112px]">
            <img 
              src={WorldMapSvg} 
              alt="World Map"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0.8) contrast(1.2)' }}
            />
          </div>

          {/* Location Markers */}
          {mapMarkers.map((marker, index) => (
            <div
              key={marker.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${marker.x}%`,
                top: `${marker.y}%`,
                opacity: isAnimated ? 1 : 0,
                transition: `opacity 0.6s ease-in-out ${index * 0.2}s`,
              }}
            >
              <div 
                className="w-3 h-3 rounded-full shadow-lg"
                style={{ backgroundColor: 'oklch(var(--chart-1))' }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Location List with Progress Bars */}
      <div className="space-y-3">
        {locationData.map((location, index) => {
          const percentage = (location.revenue / location.maxRevenue) * 100;
          
          return (
            <div
              key={location.name}
              className="space-y-1"
              style={{
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(10px)',
                transition: `all 0.6s ease-in-out ${index * 0.1 + 0.4}s`,
              }}
            >
              <div className="flex justify-between items-center">
                <span className="text-foreground text-sm font-medium">
                  {location.name}
                </span>
                <span className="text-foreground text-sm font-medium">
                  {location.revenue}K
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isAnimated ? `${percentage}%` : '0%',
                    transitionDelay: `${index * 0.1 + 0.6}s`,
                    backgroundColor: '#A8C5DA',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
