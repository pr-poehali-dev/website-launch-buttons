import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-slate-900 text-white py-20 lg:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold font-montserrat mb-6 leading-tight">
          быстро и не заметно спрячем
        </h1>

        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
          Трансформируем ваш бизнес с помощью стратегического мышления,
          инновационных решений и проверенных методологий
        </p>

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
