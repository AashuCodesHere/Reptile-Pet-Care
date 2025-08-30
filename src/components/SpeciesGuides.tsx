import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import geckoImage from "@/assets/gecko-care.jpg";
import snakeImage from "@/assets/snake-care.jpg";
import skinkImage from "@/assets/skink-care.jpg";
import { ArrowRight, Star } from "lucide-react";

const SpeciesGuides = () => {
  const species = [
    {
      name: "Bearded Dragons",
      image: geckoImage,
      difficulty: "Beginner",
      temperature: "75-85°F",
      humidity: "30-40%",
      description: "The perfect starter reptile with docile temperament and fascinating behaviors.",
      carePoints: ["UVB lighting essential", "Omnivorous diet", "Social interaction"],
      popular: true,
    },
    {
      name: "Leopard Geckos",
      image: geckoImage,
      difficulty: "Beginner",
      temperature: "70-80°F",
      humidity: "30-40%",
      description: "Low-maintenance nocturnal geckos perfect for apartment living.",
      carePoints: ["No UVB needed", "Insectivore diet", "Easy handling"],
      popular: true,
    },
    {
      name: "Ball Pythons",
      image: snakeImage,
      difficulty: "Intermediate",
      temperature: "78-88°F",
      humidity: "50-60%",
      description: "Gentle giants known for their beautiful patterns and calm nature.",
      carePoints: ["High humidity needs", "Secure enclosure", "Feeding response"],
      popular: false,
    },
    {
      name: "Blue-Tongue Skinks",
      image: skinkImage,
      difficulty: "Intermediate",
      temperature: "75-85°F",
      humidity: "40-60%",
      description: "Intelligent lizards with dog-like personalities and unique blue tongues.",
      carePoints: ["Omnivorous appetite", "Ground dwelling", "Regular handling"],
      popular: false,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-forest-secondary/20 text-forest-secondary";
      case "Intermediate":
        return "bg-earth-warm/20 text-earth-warm";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-sand-beige/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Species Care Guides
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive care guides tailored to each species' unique needs, 
            from beginner-friendly reptiles to more advanced species.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {species.map((animal, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-warm transition-all duration-300">
              <div className="relative">
                <img 
                  src={animal.image} 
                  alt={`${animal.name} care guide`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {animal.popular && (
                  <Badge className="absolute top-4 left-4 bg-forest-primary text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                <Badge className={`absolute top-4 right-4 ${getDifficultyColor(animal.difficulty)}`}>
                  {animal.difficulty}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{animal.name}</CardTitle>
                <CardDescription className="text-base">
                  {animal.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">Temperature</div>
                    <div className="font-semibold text-forest-primary">{animal.temperature}</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">Humidity</div>
                    <div className="font-semibold text-forest-primary">{animal.humidity}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Key Care Points:</h4>
                  <ul className="space-y-2">
                    {animal.carePoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-forest-secondary rounded-full mr-3" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-forest-primary group-hover:text-white group-hover:border-forest-primary transition-colors">
                  View Complete Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeciesGuides;