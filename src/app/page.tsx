import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Star, Users, Zap, Shield, Mail, Phone, MapPin, CheckCircle, Instagram, CreditCard, TrendingUp, Lock, Building2, UserCheck, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KM</span>
            </div>
            <span className="font-bold text-xl">Kevin Montell</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Contact</a>
            <a href="http://instagram.com/kevinmontell" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700">
                <Instagram className="mr-2 h-4 w-4" />
                Follow @kevinmontell
              </Button>
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          ✨ Professional Credit & Financial Services
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          BUILD, REBUILD &{" "}
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            REPAIR CREDIT
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto px-4">
          Professional credit repair and financial services for individuals and businesses. 
          From credit counseling to account creation, we help you achieve financial success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a href="#contact">
            <Button size="lg" className="text-lg px-6 md:px-8 py-4 md:py-6 bg-green-600 hover:bg-green-700 w-full sm:w-auto">
              Start Credit Repair
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="http://instagram.com/kevinmontell" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto">
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </Button>
          </a>
        </div>
        
        {/* Social Proof */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-600 dark:text-slate-400 px-4">
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm md:text-base">4.9/5</span>
          </div>
          <Separator orientation="vertical" className="h-6 hidden sm:block" />
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-sm md:text-base">500+ Clients Helped</span>
          </div>
          <Separator orientation="vertical" className="h-6 hidden sm:block" />
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-sm md:text-base">Average 100+ Point Increase</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
            Comprehensive credit repair and financial services for individuals and businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-lg md:text-xl">Credit Report Analysis</CardTitle>
              <CardDescription className="text-sm md:text-base">
                Comprehensive review of your credit reports from all three major bureaus to identify errors and opportunities for improvement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Identify errors and inaccuracies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Review all three credit bureaus</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Detailed analysis report</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-lg md:text-xl">Dispute Resolution</CardTitle>
              <CardDescription className="text-sm md:text-base">
                Professional dispute letters and follow-up with credit bureaus to remove negative items and improve your credit score.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Professional dispute letters</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Bureau communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Progress tracking</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-lg md:text-xl">Credit Counseling</CardTitle>
              <CardDescription className="text-sm md:text-base">
                Personalized guidance for personal and business credit. Learn strategies to build and maintain excellent credit scores.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Personal credit advice</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Business credit guidance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Long-term strategies</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <CardTitle className="text-lg md:text-xl">Account Creation Services</CardTitle>
              <CardDescription className="text-sm md:text-base">
                Professional assistance in creating financial accounts from scratch for individuals and businesses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Business account setup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Personal account creation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Documentation assistance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle className="text-lg md:text-xl">Credit Card Services</CardTitle>
              <CardDescription className="text-sm md:text-base">
                Expert guidance on credit card selection, application, and management for optimal credit building.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Credit card recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Application assistance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm">Credit utilization strategies</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white dark:bg-slate-900 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                About Kevin Montell
              </h2>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-6">
                As a certified financial advisor (Asesor Financiero), I specialize in helping individuals 
                and businesses rebuild their credit and achieve financial freedom. With years of experience 
                in credit repair and financial planning, I provide comprehensive solutions that work.
              </p>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8">
                My mission is to empower you with the knowledge and tools needed to take control of your 
                financial future. From personal credit repair to business account creation, I offer 
                personalized attention and proven strategies for success.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="http://instagram.com/kevinmontell" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Instagram className="mr-2 h-5 w-5" />
                    Follow @kevinmontell
                  </Button>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Why Choose Kevin?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-200 flex-shrink-0" />
                  <span className="text-sm md:text-base">Certified Financial Advisor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-200 flex-shrink-0" />
                  <span className="text-sm md:text-base">Personal & Business Services</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-200 flex-shrink-0" />
                  <span className="text-sm md:text-base">Proven Track Record</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-200 flex-shrink-0" />
                  <span className="text-sm md:text-base">Ongoing Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Real Results, Real Stories
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
            See how our clients have transformed their credit scores and financial lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">752</div>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">Average Credit Score After Service</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">Average Point Increase</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">Happy Clients Served</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Contact Us Today
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
            Ready to start your credit repair journey? Get in touch and let's discuss how we can help you achieve your financial goals.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Get Your Free Consultation
              </h3>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8">
                Don't wait to improve your credit score. Contact me today for a free consultation and start your journey to financial freedom.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Instagram</p>
                    <a href="http://instagram.com/kevinmontell" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors">
                      @kevinmontell
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl md:text-2xl">Ready to Get Started?</CardTitle>
                <CardDescription className="text-base md:text-lg">
                  Message me on Instagram for a free consultation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="http://instagram.com/kevinmontell" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6">
                    <Instagram className="mr-2 h-5 w-5" />
                    Message on Instagram
                  </Button>
                </a>
                <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4 space-y-1">
                  <p>✨ Free consultation available</p>
                  <p>📱 Quick response on Instagram</p>
                  <p>💼 Professional service guaranteed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-sm">KM</span>
                </div>
                <span className="font-bold text-xl">Kevin Montell</span>
              </div>
              <p className="text-slate-400 mb-4 text-sm md:text-base">
                Professional credit repair and financial services to help you build, rebuild, and repair your credit for a better financial future.
              </p>
              <div className="flex space-x-4">
                <a href="http://instagram.com/kevinmontell" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm md:text-base">
                <li><a href="#services" className="hover:text-white transition-colors">Credit Report Analysis</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Dispute Resolution</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Credit Counseling</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Account Creation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm md:text-base">
                <li><a href="#about" className="hover:text-white transition-colors">About Kevin</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="http://instagram.com/kevinmontell" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm md:text-base">
                <li><a href="http://instagram.com/kevinmontell" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Follow on Instagram</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm md:text-base text-center md:text-left">
              © 2024 Kevin Montell - Asesor Financiero. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="http://instagram.com/kevinmontell" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm md:text-base">
                Follow @kevinmontell
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
