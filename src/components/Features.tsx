import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "TrendingUp",
      title: "Стратегический анализ",
      description:
        "Глубокий анализ рынка и конкурентов для принятия обоснованных решений",
    },
    {
      icon: "Target",
      title: "Целевое планирование",
      description:
        "Разработка четких бизнес-целей и пошагового плана их достижения",
    },
    {
      icon: "Users",
      title: "Командная работа",
      description:
        "Построение эффективных процессов и развитие человеческого капитала",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 font-montserrat text-slate-900">
          Наши ключевые компетенции
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name={feature.icon} size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-montserrat text-slate-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
