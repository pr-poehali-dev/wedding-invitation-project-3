import React from 'react';

const WeddingInvitation = () => {
  const guests = [
    'Светлана Агапова', 'Александр Агапов', 'Андрей Тимофеев', 'Ольга Тимофеева',
    'Роман Кирилин', 'Екатерина Кирилина', 'Ксения Кирилина', 'Артем Кирилин',
    'Николай Морозов', 'Михаил Морозов', 'Кристина Маркова', 'Михаил Русов',
    'Жанна Жимерина', 'Наталья Барышникова', 'Надежда Новикова', 'Сергей Новиков',
    'Татьяна Тимофеева', 'Анастасия Чегодайкина', 'Наталья Савина', 'Сергей Савин',
    'Ирина Лихонина', 'Игорь Лихонин', 'Егор Тарасов', 'Софья Тарасова',
    'Егор Тупицын', 'Ева Рождественская', 'Леонид Гончаренко', 'Лилия Гончаренко',
    'Даниил Зиборов', 'Алевтина Шиянова', 'Максим Симонов', 'Анастасия Захарова',
    'Сергей Захаров', 'Татьяна Скворцова', 'Егор Стаханов', 'Оксана Матюшкина',
    'Лидия Никулина', 'Никита Никулин'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5F3] to-[#E8D5D3]">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div 
            className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(248, 245, 243, 0.85), rgba(248, 245, 243, 0.85)), url('/img/d3e7e7ba-36fb-44fc-8c96-bc6f7964fd28.jpg')`
            }}
          >
            <div className="text-center px-6">
              <h1 className="font-serif text-4xl md:text-6xl font-light text-[#A8998A] mb-4 tracking-wide">
                Дмитрий <span className="text-[#C9A9A6] text-3xl md:text-5xl">♥</span> Валерия
              </h1>
              <p className="text-lg md:text-xl text-[#C9A9A6] font-light mb-6">
                Приглашаем Вас разделить с нами самый важный день
              </p>
              <div className="inline-block bg-[#E8D5D3] px-6 md:px-8 py-3 md:py-4 rounded-full text-[#A8998A] font-medium text-lg md:text-xl">
                11 сентября 2025
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-12">
            {/* Event Details */}
            <h2 className="font-serif text-2xl md:text-3xl text-[#A8998A] text-center mb-8">
              Детали торжества
            </h2>
            
            <div className="bg-[#F8F5F3] rounded-2xl p-6 md:p-8 mb-8">
              <div className="space-y-6">
                <div className="text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4 mb-4">
                    <span className="text-2xl">🕒</span>
                    <div className="text-lg">
                      <div><strong>Сбор гостей:</strong> 15:30</div>
                      <div><strong>Начало церемонии:</strong> 16:00</div>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
                    <span className="text-2xl">📍</span>
                    <div className="text-lg">
                      <div><strong>Свадебная площадка "Воздух"</strong></div>
                      <div>село Высокое, 125</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guests List */}
            <h2 className="font-serif text-2xl md:text-3xl text-[#A8998A] text-center mb-8">
              Наши дорогие гости
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8">
              {guests.map((guest, index) => (
                <div 
                  key={index}
                  className="bg-[#F8F5F3] hover:bg-[#E8D5D3] transition-all duration-300 hover:-translate-y-1 px-4 py-3 rounded-lg text-center font-medium text-[#A8998A]"
                >
                  {guest}
                </div>
              ))}
            </div>

            {/* Dress Code */}
            <div className="bg-[#E8D5D3] rounded-2xl p-6 md:p-8 text-center mb-8">
              <h3 className="font-serif text-xl md:text-2xl text-[#A8998A] mb-4">
                Дресс-код
              </h3>
              <p className="text-base md:text-lg mb-2">
                Просим быть в удобной одежде. По желанию можно обувь без каблука.
              </p>
              <p className="text-base md:text-lg font-medium">
                Просим обойтись без черных и белых цветов в одежде.
              </p>
            </div>

            {/* Charity Section */}
            <div className="bg-[#D4C4B8] rounded-2xl p-6 md:p-8 text-center mb-8">
              <h3 className="font-serif text-xl md:text-2xl text-[#A8998A] mb-4">
                Вместо цветов
              </h3>
              <p className="text-base md:text-lg mb-2">
                Просим вместо цветов принести корм для бездомных животных.
              </p>
              <p className="text-base md:text-lg">
                Мы передадим его в приют для животных <strong>"Любимец"</strong>.
              </p>
            </div>

            {/* Final Message */}
            <div className="text-center">
              <p className="font-serif text-xl md:text-2xl text-[#C9A9A6] italic leading-relaxed">
                Мы будем рады разделить с Вами этот особенно важный для нас день
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return <WeddingInvitation />;
};

export default Index;