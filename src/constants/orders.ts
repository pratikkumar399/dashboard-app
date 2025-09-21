export interface Order {
  id: string;
  user: {
    name: string;
    avatar: string;
    initials: string;
  };
  project: string;
  address: string;
  date: string;
  status: {
    label: string;
    color: string;
    dotColor: string;
  };
}

export const orders: Order[] = [
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
  }
];
