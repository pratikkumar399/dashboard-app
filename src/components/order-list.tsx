"use client"

import { useState } from 'react';
import { orders as ordersData, type Order } from '@/constants/orders';

export const OrderList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const orders = ordersData;

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectOrder = (orderId: string) => {
    setSelectedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map(order => order.id));
    }
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getAvatarColor = (initials: string) => {
    const colors = [
      'bg-purple-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-red-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-teal-500'
    ];
    
    // Handle undefined, null, or empty string
    if (!initials || initials.length === 0) {
      return colors[0]; // Default to first color
    }
    
    const index = initials.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-medium text-foreground mb-4">Order List</h3>
        
        {/* Action Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Action Buttons */}
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
            <button 
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => handleSort('date')}
            >
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2">
                <input
                  type="checkbox"
                  checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                  onChange={handleSelectAll}
                  className="rounded border-border text-primary focus:ring-ring"
                />
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Order ID</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">User</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Project</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Address</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Date</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr 
                key={order.id}
                className={`border-b border-border hover:bg-muted/50 transition-colors ${
                  selectedOrders.includes(order.id) ? 'bg-muted/30' : ''
                }`}
              >
                <td className="py-3 px-2">
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => handleSelectOrder(order.id)}
                    className="rounded border-border text-primary focus:ring-ring"
                  />
                </td>
                <td className="py-3 px-2 text-sm text-foreground font-medium">{order.id}</td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${getAvatarColor(order.user.initials || order.user.name)} flex items-center justify-center text-white text-xs font-medium`}>
                      {order.user.initials || order.user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm text-foreground">{order.user.name}</span>
                  </div>
                </td>
                <td className="py-3 px-2 text-sm text-foreground">{order.project}</td>
                <td className="py-3 px-2 text-sm text-foreground">{order.address}</td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-foreground">{order.date}</span>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${order.status.dotColor}`}></div>
                    <span className={`text-sm ${order.status.color}`}>{order.status.label}</span>
                    {order.status.label === 'Rejected' && (
                      <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-2 mt-6">
        <button 
          className="p-2 hover:bg-muted rounded-lg transition-colors disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
        >
          <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {[1, 2, 3, 4, 5].map(page => (
          <button
            key={page}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentPage === page
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-muted'
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        
        <button 
          className="p-2 hover:bg-muted rounded-lg transition-colors disabled:opacity-50"
          disabled={currentPage === 5}
          onClick={() => setCurrentPage(prev => Math.min(5, prev + 1))}
        >
          <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
