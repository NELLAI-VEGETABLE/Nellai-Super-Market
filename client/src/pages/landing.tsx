import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Truck, ShieldCheck, Heart, Phone, Mail, MapPin, Clock } from "lucide-react";
import { STORE_INFO } from "@/lib/constants";

export default function Landing() {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-gray-900">{STORE_INFO.name}</h1>
                  <p className="text-xs text-gray-500">{STORE_INFO.tagline}</p>
                </div>
              </div>
            </div>
            <Button onClick={handleLogin} className="bg-primary hover:bg-primary/90">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fresh Vegetables
              <span className="block text-3xl md:text-5xl">Delivered Daily</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Get farm-fresh vegetables and fruits delivered to your doorstep in Chennai. 
              Quality guaranteed, always fresh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleLogin}
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3"
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Categories</h2>
            <p className="text-lg text-gray-600">Fresh produce organized for your convenience</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Leafy Greens</h3>
                <p className="text-sm text-gray-600">Spinach, Lettuce, Kale</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="font-semibold text-lg">Root Vegetables</h3>
                <p className="text-sm text-gray-600">Carrots, Onions, Potatoes</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Fresh Fruits</h3>
                <p className="text-sm text-gray-600">Apples, Bananas, Oranges</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="font-semibold text-lg">Specialty Items</h3>
                <p className="text-sm text-gray-600">Herbs, Exotic Veggies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Nellai Vegetable Shop?</h2>
            <p className="text-lg text-gray-600">Quality and freshness you can trust</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day delivery across Chennai. Fresh produce delivered within hours of your order.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% fresh guarantee. If you're not satisfied, we'll refund or replace your order.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Locally Sourced</h3>
              <p className="text-gray-600">Supporting local farmers and bringing you the freshest produce from nearby farms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Have questions? We're here to help!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Store</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">{STORE_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">{STORE_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">{STORE_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Store Hours</h4>
                    <p className="text-gray-600">{STORE_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Shop?</h3>
              <p className="text-gray-600 mb-8">
                Sign in to start shopping for fresh vegetables and fruits. 
                Join thousands of happy customers in Chennai!
              </p>
              <Button onClick={handleLogin} size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3">
                Sign In to Shop
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <p className="text-gray-400 mb-4">
                Your trusted partner for fresh vegetables and fruits in Chennai. 
                We bring quality produce from local farms directly to your doorstep.
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                  {STORE_INFO.address}
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                  {STORE_INFO.phone}
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                  {STORE_INFO.email}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto" onClick={handleLogin}>Home</Button></li>
                <li><Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto" onClick={handleLogin}>Products</Button></li>
                <li><Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto" onClick={handleLogin}>Categories</Button></li>
                <li><Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto" onClick={handleLogin}>About Us</Button></li>
                <li><Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</Button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2024 {STORE_INFO.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
