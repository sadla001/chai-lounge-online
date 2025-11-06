import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import masalaChaiImg from "@/assets/masala-chai.jpg";
import cardamomChaiImg from "@/assets/cardamom-chai.jpg";
import gingerChaiImg from "@/assets/ginger-chai.jpg";
import kashmiriChaiImg from "@/assets/kashmiri-chai.jpg";

const chaiVarieties = [
  {
    name: "Elaichi Chai",
    description: "Delicate and aromatic with premium green cardamom",
    price: "$16.00",
    image: cardamomChaiImg,
  },
  {
    name: "Masala Chai",
    description: "Our signature blend with cardamom, cinnamon, ginger, and cloves",
    price: "$20.00",
    image: masalaChaiImg,
  },
  {
    name: "Ginger Chai",
    description: "Bold and warming with fresh ginger root",
    price: "$15.00",
    image: gingerChaiImg,
  },
  {
    name: "Madras Coffee",
    description: "Traditional pink tea with crushed almonds and pistachios",
    price: "$20.00",
    image: kashmiriChaiImg,
  },
];

const ChaiMenu = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Chai Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each cup is brewed fresh to order with premium ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chaiVarieties.map((chai, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={chai.image}
                  alt={chai.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{chai.name}</CardTitle>
                <CardDescription className="text-base">
                  {chai.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">{chai.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChaiMenu;
