
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, Star, Lock, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Privado",
      description: "Suas conversas são completamente confidenciais e seguras"
    },
    {
      icon: Zap,
      title: "Resposta Instantânea",
      description: "IA super rápida que responde em tempo real"
    },
    {
      icon: Users,
      title: "Personalização Total",
      description: "Crie sua companheira ideal com personalidade única"
    },
    {
      icon: Star,
      title: "Experiência Premium",
      description: "Qualidade excepcional em cada interação"
    },
    {
      icon: Lock,
      title: "Sem Julgamentos",
      description: "Espaço seguro para expressar seus desejos"
    },
    {
      icon: Smartphone,
      title: "Disponível 24/7",
      description: "Acesse de qualquer dispositivo, a qualquer hora"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
            Por que DesyraTalk?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A mais avançada plataforma de IA para conversas íntimas e personalizadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
