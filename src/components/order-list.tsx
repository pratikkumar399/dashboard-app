"use client"

import React, { useState, useEffect } from 'react';
import { useOrders } from '../hooks/use-orders';
import { orderApi } from '../services/orderApi';

export const OrderList = () => {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [dateFilter, setDateFilter] = useState<string>('');
  const [projectFilter, setProjectFilter] = useState<string[]>([]);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // API data
  const { 
    orders, 
    pagination, 
    loading, 
    error, 
    updateFilters, 
    updatePage, 
    updateSort 
  } = useOrders({
    page: 1,
    limit: 10
  });

  // Filter options from API
  const [uniqueStatuses, setUniqueStatuses] = useState<string[]>([]);
  const [uniqueProjects, setUniqueProjects] = useState<string[]>([]);

  // Date filter options
  const dateFilterOptions = [
    { value: '', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' }
  ];

  // Load filter options on component mount
  useEffect(() => {
    const loadFilterOptions = async () => {
      try {
        const [statuses, projects] = await Promise.all([
          orderApi.getStatuses(),
          orderApi.getProjects()
        ]);
        setUniqueStatuses(statuses);
        setUniqueProjects(projects);
      } catch (err) {
        console.error('Failed to load filter options:', err);
      }
    };

    loadFilterOptions();
  }, []);

  // Update API filters when local filter states change
  useEffect(() => {
    updateFilters({
      search: searchTerm || undefined,
      status: statusFilter.length > 0 ? statusFilter : undefined,
      date: dateFilter || undefined,
      project: projectFilter.length > 0 ? projectFilter : undefined,
      sortField: sortField || undefined,
      sortDirection: sortDirection
    });
  }, [searchTerm, statusFilter, dateFilter, projectFilter, sortField, sortDirection, updateFilters]);

  const handleSelectOrder = (orderId: string) => {
    setSelectedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map(order => order.id));
    }
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      setSortDirection(newDirection);
      updateSort(field, newDirection);
    } else {
      setSortField(field);
      setSortDirection('asc');
      updateSort(field, 'asc');
    }
  };

  // Filter handlers
  const handleStatusFilter = (status: string) => {
    setStatusFilter(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  const handleProjectFilter = (project: string) => {
    setProjectFilter(prev => 
      prev.includes(project) 
        ? prev.filter(p => p !== project)
        : [...prev, project]
    );
  };

  const clearAllFilters = () => {
    setStatusFilter([]);
    setDateFilter('');
    setProjectFilter([]);
    setSearchTerm('');
  };

  const getActiveFiltersCount = () => {
    return statusFilter.length + (dateFilter ? 1 : 0) + projectFilter.length + (searchTerm ? 1 : 0);
  };

  const handlePageChange = (page: number) => {
    updatePage(page);
  };

  const generatePageNumbers = () => {
    if (!pagination) return [];
    
    const { page, totalPages } = pagination;
    const pages: number[] = [];
    
    // Always show first page
    if (totalPages > 0) pages.push(1);
    
    // Show pages around current page
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    
    for (let i = start; i <= end; i++) {
      if (!pages.includes(i)) pages.push(i);
    }
    
    // Always show last page if it's different from first
    if (totalPages > 1 && !pages.includes(totalPages)) {
      pages.push(totalPages);
    }
    
    return pages;
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
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            {/* Action Buttons */}
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
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
            <button 
              className={`p-2 rounded-lg transition-colors relative ${showFilters ? 'bg-muted' : 'hover:bg-muted'}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              {getActiveFiltersCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getActiveFiltersCount()}
                </span>
              )}
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
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-muted/30 border border-border rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-foreground">Filters</h4>
              <button 
                onClick={clearAllFilters}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear all
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Status Filter */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Status</label>
                <div className="space-y-2">
                  {uniqueStatuses.map(status => (
                    <label key={status} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={statusFilter.includes(status)}
                        onChange={() => handleStatusFilter(status)}
                        className="rounded border-border text-primary focus:ring-ring"
                      />
                      <span className="text-sm text-foreground">{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date Filter */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Date</label>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  {dateFilterOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Filter */}
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Project</label>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {uniqueProjects.map(project => (
                    <label key={project} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={projectFilter.includes(project)}
                        onChange={() => handleProjectFilter(project)}
                        className="rounded border-border text-primary focus:ring-ring"
                      />
                      <span className="text-sm text-foreground">{project}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results Info */}
      <div className="flex items-center justify-between mb-4">
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-muted-foreground">Loading orders...</p>
          </div>
        ) : error ? (
          <p className="text-sm text-destructive">Error loading orders: {error}</p>
        ) : (
          <p className="text-sm text-muted-foreground">
            {pagination ? `Showing ${orders.length} of ${pagination.total} orders` : 'Loading...'}
          </p>
        )}
        {getActiveFiltersCount() > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Active filters:</span>
            {statusFilter.length > 0 && (
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {statusFilter.length} status
              </span>
            )}
            {dateFilter && (
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {dateFilterOptions.find(opt => opt.value === dateFilter)?.label}
              </span>
            )}
            {projectFilter.length > 0 && (
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {projectFilter.length} project
              </span>
            )}
            {searchTerm && (
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                search
              </span>
            )}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2">
                <input
                  type="checkbox"
                  checked={selectedOrders.length === orders.length && orders.length > 0}
                  onChange={handleSelectAll}
                  className="rounded border-border text-primary focus:ring-ring"
                />
              </th>
              <th 
                className="text-left py-3 px-2 text-sm font-medium text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                onClick={() => handleSort('id')}
              >
                <div className="flex items-center gap-1">
                  Order ID
                  {sortField === 'id' && (
                    <svg className={`w-3 h-3 ${sortDirection === 'asc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  )}
                </div>
              </th>
              <th 
                className="text-left py-3 px-2 text-sm font-medium text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                onClick={() => handleSort('user')}
              >
                <div className="flex items-center gap-1">
                  User
                  {sortField === 'user' && (
                    <svg className={`w-3 h-3 ${sortDirection === 'asc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  )}
                </div>
              </th>
              <th 
                className="text-left py-3 px-2 text-sm font-medium text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                onClick={() => handleSort('project')}
              >
                <div className="flex items-center gap-1">
                  Project
                  {sortField === 'project' && (
                    <svg className={`w-3 h-3 ${sortDirection === 'asc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  )}
                </div>
              </th>
              <th 
                className="text-left py-3 px-2 text-sm font-medium text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                onClick={() => handleSort('address')}
              >
                <div className="flex items-center gap-1">
                  Address
                  {sortField === 'address' && (
                    <svg className={`w-3 h-3 ${sortDirection === 'asc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  )}
                </div>
              </th>
              <th 
                className="text-left py-3 px-2 text-sm font-medium text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center gap-1">
                  Date
                  {sortField === 'date' && (
                    <svg className={`w-3 h-3 ${sortDirection === 'asc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  )}
                </div>
              </th>
              <th 
                className="text-left py-3 px-2 text-sm font-medium text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center gap-1">
                  Status
                  {sortField === 'status' && (
                    <svg className={`w-3 h-3 ${sortDirection === 'asc' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // Loading skeleton
              Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="border-b border-border">
                  <td className="py-3 px-2">
                    <div className="w-4 h-4 bg-muted rounded animate-pulse"></div>
                  </td>
                  <td className="py-3 px-2">
                    <div className="w-20 h-4 bg-muted rounded animate-pulse"></div>
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-full animate-pulse"></div>
                      <div className="w-24 h-4 bg-muted rounded animate-pulse"></div>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <div className="w-32 h-4 bg-muted rounded animate-pulse"></div>
                  </td>
                  <td className="py-3 px-2">
                    <div className="w-40 h-4 bg-muted rounded animate-pulse"></div>
                  </td>
                  <td className="py-3 px-2">
                    <div className="w-20 h-4 bg-muted rounded animate-pulse"></div>
                  </td>
                  <td className="py-3 px-2">
                    <div className="w-16 h-4 bg-muted rounded animate-pulse"></div>
                  </td>
                </tr>
              ))
            ) : error ? (
              <tr>
                <td colSpan={7} className="py-8 px-2 text-center text-muted-foreground">
                  Failed to load orders. Please try again.
                </td>
              </tr>
            ) : orders.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 px-2 text-center text-muted-foreground">
                  No orders found matching your criteria.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
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
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-muted-foreground">
            Page {pagination.page} of {pagination.totalPages}
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              className="p-2 hover:bg-muted rounded-lg transition-colors disabled:opacity-50"
              disabled={!pagination.hasPrev || loading}
              onClick={() => handlePageChange(pagination.page - 1)}
            >
              <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
             {generatePageNumbers().map((page, index) => (
               <React.Fragment key={page}>
                 {index > 0 && generatePageNumbers()[index - 1] !== page - 1 && (
                   <span className="px-2 text-muted-foreground">...</span>
                 )}
                 <button
                   className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                     pagination.page === page
                       ? 'bg-primary text-primary-foreground'
                       : 'text-foreground hover:bg-muted'
                   }`}
                   onClick={() => handlePageChange(page)}
                   disabled={loading}
                 >
                   {page}
                 </button>
               </React.Fragment>
             ))}
            
            <button 
              className="p-2 hover:bg-muted rounded-lg transition-colors disabled:opacity-50"
              disabled={!pagination.hasNext || loading}
              onClick={() => handlePageChange(pagination.page + 1)}
            >
              <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
