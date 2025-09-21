import { type Order } from '../constants/orders';

// Re-export Order type for use in other files
export type { Order };

// Mock API configuration
const DELAY_MS = 500; // Simulate network delay

// Mock data - expanded dataset for pagination
const mockOrders: Order[] = [
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: "NC",
      initials: "NC"
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: {
      label: "In Progress",
      color: "text-blue-500",
      dotColor: "bg-blue-500"
    }
  },
  {
    id: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: "KM",
      initials: "KM"
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: {
      label: "Complete",
      color: "text-green-500",
      dotColor: "bg-green-500"
    }
  },
  {
    id: "#CM9803",
    user: {
      name: "Drew Cano",
      avatar: "DC",
      initials: "DC"
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: {
      label: "Pending",
      color: "text-cyan-500",
      dotColor: "bg-cyan-500"
    }
  },
  {
    id: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: "OD",
      initials: "OD"
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: {
      label: "Approved",
      color: "text-yellow-500",
      dotColor: "bg-yellow-500"
    }
  },
  {
    id: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar: "AL",
      initials: "AL"
    },
    project: "E-commerce Site",
    address: "Cottage Street San Francisco",
    date: "2 days ago",
    status: {
      label: "In Progress",
      color: "text-blue-500",
      dotColor: "bg-blue-500"
    }
  },
  {
    id: "#CM9806",
    user: {
      name: "Koray Okumus",
      avatar: "KO",
      initials: "KO"
    },
    project: "Mobile App",
    address: "Oak Avenue Los Angeles",
    date: "3 days ago",
    status: {
      label: "Complete",
      color: "text-green-500",
      dotColor: "bg-green-500"
    }
  },
  {
    id: "#CM9807",
    user: {
      name: "Sarah Wilson",
      avatar: "SW",
      initials: "SW"
    },
    project: "Portfolio Website",
    address: "Main Street New York",
    date: "1 week ago",
    status: {
      label: "Pending",
      color: "text-cyan-500",
      dotColor: "bg-cyan-500"
    }
  },
  {
    id: "#CM9808",
    user: {
      name: "Mike Chen",
      avatar: "MC",
      initials: "MC"
    },
    project: "Blog Platform",
    address: "Park Avenue Chicago",
    date: "2 weeks ago",
    status: {
      label: "Approved",
      color: "text-yellow-500",
      dotColor: "bg-yellow-500"
    }
  },
  // Additional orders for pagination testing
  {
    id: "#CM9809",
    user: {
      name: "Emma Davis",
      avatar: "ED",
      initials: "ED"
    },
    project: "Landing Page",
    address: "Sunset Boulevard Los Angeles",
    date: "3 weeks ago",
    status: {
      label: "Complete",
      color: "text-green-500",
      dotColor: "bg-green-500"
    }
  },
  {
    id: "#CM9810",
    user: {
      name: "James Wilson",
      avatar: "JW",
      initials: "JW"
    },
    project: "Mobile App",
    address: "Broadway New York",
    date: "1 month ago",
    status: {
      label: "In Progress",
      color: "text-blue-500",
      dotColor: "bg-blue-500"
    }
  },
  {
    id: "#CM9811",
    user: {
      name: "Lisa Brown",
      avatar: "LB",
      initials: "LB"
    },
    project: "Admin Dashboard",
    address: "Market Street San Francisco",
    date: "1 month ago",
    status: {
      label: "Pending",
      color: "text-cyan-500",
      dotColor: "bg-cyan-500"
    }
  },
  {
    id: "#CM9812",
    user: {
      name: "David Miller",
      avatar: "DM",
      initials: "DM"
    },
    project: "E-commerce Site",
    address: "Fifth Avenue New York",
    date: "2 months ago",
    status: {
      label: "Approved",
      color: "text-yellow-500",
      dotColor: "bg-yellow-500"
    }
  },
  {
    id: "#CM9813",
    user: {
      name: "Anna Garcia",
      avatar: "AG",
      initials: "AG"
    },
    project: "Client Project",
    address: "Rodeo Drive Beverly Hills",
    date: "2 months ago",
    status: {
      label: "Complete",
      color: "text-green-500",
      dotColor: "bg-green-500"
    }
  },
  {
    id: "#CM9814",
    user: {
      name: "Tom Anderson",
      avatar: "TA",
      initials: "TA"
    },
    project: "Portfolio Website",
    address: "Michigan Avenue Chicago",
    date: "3 months ago",
    status: {
      label: "In Progress",
      color: "text-blue-500",
      dotColor: "bg-blue-500"
    }
  },
  {
    id: "#CM9815",
    user: {
      name: "Maria Rodriguez",
      avatar: "MR",
      initials: "MR"
    },
    project: "Blog Platform",
    address: "Canal Street New Orleans",
    date: "3 months ago",
    status: {
      label: "Pending",
      color: "text-cyan-500",
      dotColor: "bg-cyan-500"
    }
  },
  {
    id: "#CM9816",
    user: {
      name: "John Smith",
      avatar: "JS",
      initials: "JS"
    },
    project: "Landing Page",
    address: "Bourbon Street New Orleans",
    date: "4 months ago",
    status: {
      label: "Approved",
      color: "text-yellow-500",
      dotColor: "bg-yellow-500"
    }
  },
  {
    id: "#CM9817",
    user: {
      name: "Jennifer Lee",
      avatar: "JL",
      initials: "JL"
    },
    project: "Mobile App",
    address: "Beale Street Memphis",
    date: "4 months ago",
    status: {
      label: "Complete",
      color: "text-green-500",
      dotColor: "bg-green-500"
    }
  },
  {
    id: "#CM9818",
    user: {
      name: "Robert Taylor",
      avatar: "RT",
      initials: "RT"
    },
    project: "Admin Dashboard",
    address: "Peachtree Street Atlanta",
    date: "5 months ago",
    status: {
      label: "In Progress",
      color: "text-blue-500",
      dotColor: "bg-blue-500"
    }
  },
  {
    id: "#CM9819",
    user: {
      name: "Susan White",
      avatar: "SW",
      initials: "SW"
    },
    project: "E-commerce Site",
    address: "Las Vegas Boulevard Las Vegas",
    date: "5 months ago",
    status: {
      label: "Pending",
      color: "text-cyan-500",
      dotColor: "bg-cyan-500"
    }
  },
  {
    id: "#CM9820",
    user: {
      name: "Michael Johnson",
      avatar: "MJ",
      initials: "MJ"
    },
    project: "Client Project",
    address: "Ocean Drive Miami",
    date: "6 months ago",
    status: {
      label: "Approved",
      color: "text-yellow-500",
      dotColor: "bg-yellow-500"
    }
  }
];

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface OrderFilters {
  search?: string;
  status?: string[];
  date?: string;
  project?: string[];
  sortField?: string;
  sortDirection?: 'asc' | 'desc';
}

export interface OrderQueryParams extends OrderFilters {
  page?: number;
  limit?: number;
}

// Utility function to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Filter and sort logic
const filterAndSortOrders = (
  orders: Order[],
  filters: OrderFilters
): Order[] => {
  let filtered = orders.filter(order => {
    // Search filter
    const matchesSearch = !filters.search || 
      order.id.toLowerCase().includes(filters.search.toLowerCase()) ||
      order.user.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      order.project.toLowerCase().includes(filters.search.toLowerCase()) ||
      order.address.toLowerCase().includes(filters.search.toLowerCase());

    // Status filter
    const matchesStatus = !filters.status || filters.status.length === 0 || 
      filters.status.includes(order.status.label);

    // Date filter
    const matchesDate = !filters.date || 
      (filters.date === 'today' && order.date === 'Just now') ||
      (filters.date === 'yesterday' && order.date === 'Yesterday') ||
      (filters.date === 'week' && (order.date === 'Just now' || order.date === 'A minute ago' || order.date === '1 hour ago' || order.date === 'Yesterday')) ||
      (filters.date === 'month' && !order.date.includes('week') && !order.date.includes('weeks'));

    // Project filter
    const matchesProject = !filters.project || filters.project.length === 0 || 
      filters.project.includes(order.project);

    return matchesSearch && matchesStatus && matchesDate && matchesProject;
  });

  // Apply sorting if specified
  if (filters.sortField) {
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (filters.sortField) {
        case 'id':
          aValue = a.id;
          bValue = b.id;
          break;
        case 'user':
          aValue = a.user.name;
          bValue = b.user.name;
          break;
        case 'project':
          aValue = a.project;
          bValue = b.project;
          break;
        case 'address':
          aValue = a.address;
          bValue = b.address;
          break;
        case 'date': {
          const dateOrder = ['Just now', 'A minute ago', '1 hour ago', 'Yesterday', '2 days ago', '3 days ago', '1 week ago', '2 weeks ago', '1 month ago', '2 months ago', '3 months ago', '4 months ago', '5 months ago', '6 months ago'];
          aValue = dateOrder.indexOf(a.date);
          bValue = dateOrder.indexOf(b.date);
          break;
        }
        case 'status':
          aValue = a.status.label;
          bValue = b.status.label;
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return filters.sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return filters.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  return filtered;
};

// Mock API functions
export const orderApi = {
  // Get paginated orders with filters
  async getOrders(params: OrderQueryParams = {}): Promise<PaginatedResponse<Order>> {
    await delay(DELAY_MS);

    const {
      page = 1,
      limit = 10,
      ...filters
    } = params;

    const filteredOrders = filterAndSortOrders(mockOrders, filters);
    const total = filteredOrders.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredOrders.slice(startIndex, endIndex);

    return {
      data: paginatedData,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    };
  },

  // Get all orders (for filter options)
  async getAllOrders(): Promise<Order[]> {
    await delay(DELAY_MS);
    return mockOrders;
  },

  // Get unique statuses
  async getStatuses(): Promise<string[]> {
    await delay(DELAY_MS);
    return [...new Set(mockOrders.map(order => order.status.label))];
  },

  // Get unique projects
  async getProjects(): Promise<string[]> {
    await delay(DELAY_MS);
    return [...new Set(mockOrders.map(order => order.project))];
  },

  // Get order by ID
  async getOrderById(id: string): Promise<Order | null> {
    await delay(DELAY_MS);
    return mockOrders.find(order => order.id === id) || null;
  }
};
