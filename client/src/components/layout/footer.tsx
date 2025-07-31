import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { STORE_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">{STORE_INFO.name}</h3>
                <p className="text-sm text-gray-400">{STORE_INFO.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner for fresh vegetables and fruits in Chennai. 
              We bring quality produce from local farms directly to your doorstep.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                <span>{STORE_INFO.phone}</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                <span>{STORE_INFO.email}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto text-sm justify-start">
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto text-sm justify-start">
                    Products
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/products?category=vegetables">
                  <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto text-sm justify-start">
                    Vegetables
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/products?category=fruits">
                  <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto text-sm justify-start">
                    Fruits
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto text-sm justify-start">
                    Contact Us
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/orders">
                  <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto text-sm justify-start">
                    Order Tracking
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto text-sm justify-start">
                    My Account
                  </Button>
                </Link>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto text-sm justify-start" disabled>
                  Help Center
                  <span className="ml-2 text-xs text-gray-500">Soon</span>
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto text-sm justify-start" disabled>
                  Return Policy
                  <span className="ml-2 text-xs text-gray-500">Soon</span>
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto text-sm justify-start" disabled>
                  Privacy Policy
                  <span className="ml-2 text-xs text-gray-500">Soon</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 {STORE_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Phone className="w-5 h-5" />
                <span className="sr-only">Call Us</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
