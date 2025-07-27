import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleRedirect = () => {
    window.open("https://desyratalk.site/quiz-es/index.php", "_blank");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/7f1e35e7-3e7a-4a66-9c7b-365031061820.png')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/f6e0d576-ccfc-462d-ae96-fd747cf20e0f.png" 
            alt="DesyraTalk Logo" 
            className="h-20 md:h-24 mx-auto filter drop-shadow-2xl"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-amber-300 mb-6 animate-fade-in leading-tight">
          Crea tu Diosa de los Sueños
        </h1>

        {/* Subtitle (removido se não for usado) */}
        {/* <div className="text-lg md:text-2xl text-amber-200 mb-8 animate-fade-in font-light">
          Seu subtítulo aqui (opcional)
        </div> */}

        {/* CTA Button */}
        <div className="animate-fade-in">
          <Button
            onClick={handleRedirect}
            size="lg"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 hover:from-pink-600 hover:via-purple-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
          >
            COMENZAR AHORA
          </Button>
        </div>
      </div> {/* Fechamento da div "relative z-10" */}
    </div> {/* Fechamento da div principal */}
  );
};

export default Hero;
