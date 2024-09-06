const cards = [
    {
      title: 'Horton Plains',
      description:
        "Horton Plains National Park is a misty, high-altitude plateau offering stunning vistas, rich biodiversity, and the famous World's End cliff.",
      image: '/images/card1.png',
    },
    {
      title: 'Kandy',
      description:
        "Kandy, Sri Lanka's cultural capital, is home to the sacred Temple of the Tooth Relic, a major Buddhist pilgrimage site.",
      image: '/images/card2.png',
    },
    {
      title: 'Ella',
      description:
        "Ella is a tranquil hill town nestled in Sri Lanka's central highlands, known for its breathtaking scenery and tea plantations.",
      image: '/images/card3.png',
    },
    {
      title: 'Mirissa',
      description:
        'Mirissa is a tropical paradise on Sri Lanka’s southern coast, renowned for its pristine beaches, vibrant nightlife, and whale watching.',
      image: '/images/card4.png',
    },
  ];
  
  export default function CardGrid() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src={card.image} alt={card.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    );
  }
  