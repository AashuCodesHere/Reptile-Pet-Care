import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThermometerSun, Droplets, Calendar, Home, Heart, Settings } from "lucide-react";

const CareTools = () => {
  const tools = [
    {
      icon: ThermometerSun,
      title: "Temperature Monitor",
      description: "Track basking and cool zones for optimal thermal gradients",
      features: ["Real-time alerts", "Species-specific ranges", "Day/night cycles"],
    },
    {
      icon: Droplets,
      title: "Humidity Tracker",
      description: "Maintain perfect moisture levels for your reptile's health",
      features: ["Automatic logging", "Seasonal adjustments", "Misting reminders"],
    },
    {
      icon: Calendar,
      title: "Feeding Schedule",
      description: "Never miss a meal with customized feeding plans",
      features: ["Age-based portions", "Supplement tracking", "Growth monitoring"],
    },
    {
      icon: Home,
      title: "Habitat Setup",
      description: "Step-by-step guides for perfect terrarium environments",
      features: ["Equipment lists", "Layout planning", "Safety checks"],
    },
    {
      icon: Heart,
      title: "Health Monitor",
      description: "Track wellness indicators and vet appointments",
      features: ["Weight tracking", "Shed schedules", "Behavior notes"],
    },
    {
      icon: Settings,
      title: "Care Automation",
      description: "Smart reminders and routine management",
      features: ["Custom alerts", "Task scheduling", "Progress reports"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional Care Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to provide expert-level care for your reptile companions, 
            with tools designed by herpetology specialists.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-forest-secondary/30">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-forest-primary to-forest-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{tool.title}</CardTitle>
                <CardDescription className="text-base">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-forest-secondary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="earth" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareTools;