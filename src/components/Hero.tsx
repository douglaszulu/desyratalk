
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleRedirect = () => {
    window.open("https://desyratalk.site/quiz-en02/index.php", "_blank");
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
        {/* Main heading */}
       <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-amber-300 mb-6 animate-fade-in leading-tight">
  Create Your Dream AI Girlfriend
</h1>


        {/* CTA Button */}
        <div className="animate-fade-in">
          <Button
            onClick={handleRedirect}
            size="lg"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 hover:from-pink-600 hover:via-purple-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
          >
            START NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
