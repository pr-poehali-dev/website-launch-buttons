import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 font-montserrat">
          Готовы начать трансформацию?
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Свяжитесь с нами для консультации и обсуждения вашего проекта
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center text-gray-300">
            <Icon name="Mail" size={20} className="mr-2 text-blue-400" />
            <span>info@consulting.com</span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-gray-600"></div>

          <div className="flex items-center text-gray-300">
            <Icon name="Phone" size={20} className="mr-2 text-blue-400" />
            <span>+7 (495) 123-45-67</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
