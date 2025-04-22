import { useEffect, useState } from "react";

const clientList = [
  {
    name: "Haier",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Haier_logo.svg/824px-Haier_logo.svg.png",
    category: "Electronics",
  },
  {
    name: "Godrej",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/2560px-Godrej_Logo.svg.png",
    category: "Consumer Goods",
  },
  {
    name: "Tata",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/837px-Tata_logo.svg.png",
    category: "Conglomerate",
  },
  {
    name: "Samsung",
    logo: "https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png",
    category: "Electronics",
  },
  {
    name: "LG",
    logo: "https://images.seeklogo.com/logo-png/8/1/lg-electronics-logo-png_seeklogo-83711.png",
    category: "Electronics",
  },
  {
    name: "Reliance",
    logo: "https://i.pinimg.com/736x/de/64/63/de646309009817507baf01587f107106.jpg",
    category: "Conglomerate",
  },
  {
    name: "supreme ",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Supreme-Logo.png",
    category: "Conglomerate",
  },
  {
    name: "Whirlpool ",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbVNsf1CC4y8qHS8MQbC7TJB6BKQSb81V9g&s",
    category: "Electronics",
  },
  {
    name: "Mahindra",
    logo: "https://w7.pngwing.com/pngs/1020/483/png-transparent-mahindra-mahindra-logo-car-brand-india-car-company-text-trademark.png",
    category: "Automotive",
  },
  {
    name: "Bajaj",
    logo: "https://1000logos.net/wp-content/uploads/2020/06/Bajaj-Logo.png",
    category: "Automotive",
  },
];

const Clients = () => {
  const [visibleClients, setVisibleClients] = useState(clientList);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isHovered, setIsHovered] = useState(null);

  // Get unique categories
  const categories = [
    "All",
    ...new Set(clientList.map((client) => client.category)),
  ];

  // Filter clients by category
  useEffect(() => {
    if (activeCategory === "All") {
      setVisibleClients(clientList);
    } else {
      setVisibleClients(
        clientList.filter((client) => client.category === activeCategory)
      );
    }
  }, [activeCategory]);

  // Animation effect to shuffle the clients every few seconds (only when category is 'All')
  useEffect(() => {
    if (activeCategory !== "All") return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        // Create a shuffled version of the client list for visual interest
        const shuffled = [...clientList].sort(() => Math.random() - 0.5);
        setVisibleClients(shuffled);
        setTimeout(() => setIsAnimating(false), 300);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeCategory]);

  return (
    <section
      id="clients"
      className="py-24 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section header with improved styling */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Our Trusted Partners
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We are proud to collaborate with industry leaders who trust us for
            high-quality plastic components that meet their exacting standards
            and drive innovation.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveCategory(category);
                  setTimeout(() => setIsAnimating(false), 300);
                }, 300);
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Clients grid with improved layout and animations */}
        <div className="relative overflow-hidden py-8">
          {/* Top border decoration */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

          {/* Grid layout with improved card styling */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {visibleClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className={`flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-500 ${
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                } ${
                  isHovered === index
                    ? "ring-2 ring-blue-400 transform -translate-y-2"
                    : ""
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-12 w-auto object-contain mb-3"
                />
                <span
                  className={`text-sm font-medium transition-opacity ${
                    isHovered === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom border decoration */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
        </div>

        {/* Testimonial quote */}
        <div className="mt-16 text-center">
          <div className="text-5xl text-blue-200 mb-4">"</div>
          <p className="text-gray-700 italic text-lg max-w-3xl mx-auto mb-2">
            We value the trusted partnerships we've built with our clients over
            the years, delivering consistent quality and reliability that drives
            mutual success.
          </p>
          <div className="text-blue-600 font-medium">- Leadership Team</div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 font-medium">
            Become Our Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
