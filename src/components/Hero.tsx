import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-green-600 text-white py-20 lg:py-32 pb-0">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold font-montserrat mb-6 leading-tight">
          быстро и не заметно спрячем
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Icon name="FileText" size={20} className="mr-2" />
            Изучить документацию
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://t.me/xxx_fac", "_blank")}
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Связаться в Telegram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
