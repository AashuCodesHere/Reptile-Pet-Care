import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">ReptileCare Pro</h3>
            <p className="text-white/80 mb-6">
              Your trusted partner in reptile care, providing expert tools and guidance for healthy, happy reptile pets.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Care Guides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Care Guides</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Bearded Dragons</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leopard Geckos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ball Pythons</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blue-Tongue Skinks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Habitat Setup</a></li>
            </ul>
          </div>
          
          {/* Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tools</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Temperature Monitor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Humidity Tracker</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feeding Schedule</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Monitor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Automation</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-4">
              Get expert tips and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="earth" className="shrink-0">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80">
            © 2024 ReptileCare Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;