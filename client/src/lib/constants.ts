export const STORE_INFO = {
  name: "Nellai Vegetable Shop",
  tagline: "Fresh & Organic",
  address: "Old No.11, Kamarajapuram Main Rd, Kamarajapuram, Gowriwakkam, Sembakkam, Chennai, Tamil Nadu 600073",
  phone: "+91 9884388147",
  email: "nellaivegetableshop@gmail.com",
  hours: "Monday - Sunday: 7:00 AM - 9:00 PM",
};

export const PRODUCT_CATEGORIES = [
  { value: "vegetables", label: "Vegetables", color: "from-green-500 to-green-600" },
  { value: "fruits", label: "Fruits", color: "from-purple-500 to-pink-500" },
  { value: "leafy-greens", label: "Leafy Greens", color: "from-green-600 to-green-700" },
  { value: "root-vegetables", label: "Root Vegetables", color: "from-orange-500 to-red-500" },
  { value: "specialty", label: "Specialty Items", color: "from-yellow-500 to-orange-500" },
];

export const ORDER_STATUS_COLORS = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  processing: "bg-purple-100 text-purple-800",
  shipped: "bg-indigo-100 text-indigo-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};
