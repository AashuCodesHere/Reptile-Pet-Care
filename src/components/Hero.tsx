import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-reptile.jpg";
import { ThermometerSun, Droplets, Calendar, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest-primary/80 to-earth-warm/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Expert <span className="text-sand-beige">Reptile Care</span> at Your Fingertips
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Professional tools and guides for temperature monitoring, habitat setup, and species-specific care for your scaly companions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <ThermometerSun className="mr-2" />
            Start Monitoring
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
            <BookOpen className="mr-2" />
            Care Guides
          </Button>
        </div>
        
        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-full px-6 py-3">
            <ThermometerSun className="w-5 h-5 mr-2" />
            <span>Temperature Tracking</span>
          </div>
          <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-full px-6 py-3">
            <Droplets className="w-5 h-5 mr-2" />
            <span>Humidity Monitoring</span>
          </div>
          <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-full px-6 py-3">
            <Calendar className="w-5 h-5 mr-2" />
            <span>Feeding Schedules</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;