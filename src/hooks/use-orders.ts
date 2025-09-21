import { useState, useEffect, useCallback } from 'react';
import { type Order, type OrderQueryParams, type PaginatedResponse } from '../services/orderApi';
import { orderApi } from '../services/orderApi';

export interface UseOrdersReturn {
  orders: Order[];
  pagination: PaginatedResponse<Order>['pagination'] | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  updateFilters: (filters: Partial<OrderQueryParams>) => void;
  updatePage: (page: number) => void;
  updateSort: (field: string, direction: 'asc' | 'desc') => void;
}

export const useOrders = (initialParams: OrderQueryParams = {}) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [pagination, setPagination] = useState<PaginatedResponse<Order>['pagination'] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<OrderQueryParams>({
    page: 1,
    limit: 10,
    ...initialParams
  });

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await orderApi.getOrders(params);
      setOrders(response.data);
      setPagination(response.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch orders');
      setOrders([]);
      setPagination(null);
    } finally {
      setLoading(false);
    }
  }, [params]);

  const updateFilters = useCallback((newFilters: Partial<OrderQueryParams>) => {
    setParams(prev => ({
      ...prev,
      ...newFilters,
      page: 1 // Reset to first page when filters change
    }));
  }, []);

  const updatePage = useCallback((page: number) => {
    setParams(prev => ({
      ...prev,
      page
    }));
  }, []);

  const updateSort = useCallback((field: string, direction: 'asc' | 'desc') => {
    setParams(prev => ({
      ...prev,
      sortField: field,
      sortDirection: direction,
      page: 1 // Reset to first page when sorting changes
    }));
  }, []);

  const refetch = useCallback(async () => {
    await fetchOrders();
  }, [fetchOrders]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return {
    orders,
    pagination,
    loading,
    error,
    refetch,
    updateFilters,
    updatePage,
    updateSort
  };
};
