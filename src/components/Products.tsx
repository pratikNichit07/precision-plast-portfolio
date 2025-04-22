import { useState, useEffect } from "react";
import { Car, Home, Palette, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const [activeTab, setActiveTab] = useState("automotive");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabData = {
    automotive: {
      title: "Automotive Components",
      description:
        "High-quality plastic components for the automotive industry with precision engineering and durability.",
      items: [
        {
          name: "Fuel Opening Lids",
          image: "/image1.jpg",
          description:
            "Durable and precisely engineered fuel caps designed for perfect fitment and long-lasting performance.",
          features: [
            "UV-resistant material",
            "Custom finishes available",
            "OEM specifications",
          ],
        },
        {
          name: "Air Vents",
          image: "/image2.jpg",
          description:
            "Customizable interior air vents with adjustable flow control and seamless dashboard integration.",
          features: [
            "Directional control",
            "Multiple design options",
            "Quiet operation",
          ],
        },
        {
          name: "Car Interior Parts",
          image: "/image3.jpg",
          description:
            "Premium interior components featuring superior aesthetics and ergonomic design.",
          features: [
            "Soft-touch options",
            "Custom textures",
            "High impact resistance",
          ],
        },
        {
          name: "Dashboard Components",
          image: "/image4.jpg",
          description:
            "Precision-molded dashboard parts with excellent finishing and dimensional accuracy.",
          features: [
            "Anti-glare surfaces",
            "Integration with electronics",
            "Heat resistant",
          ],
        },
        {
          name: "Console Trims",
          image: "/image5.jpg",
          description:
            "Elegant console trim solutions with customizable textures and finishes for premium vehicle interiors.",
          features: [
            "Premium finishes",
            "Custom branding options",
            "Easy installation",
          ],
        },
      ],
      image: "/back1.jpg",
      color: "from-blue-600 to-blue-800",
    },
    appliances: {
      title: "Home Appliances",
      description:
        "Reliable plastic parts for leading home appliance manufacturers designed for longevity and performance.",
      items: [
        {
          name: "Washing Machine Parts",
          image: "/image6.jpg",
          description:
            "Water-resistant components engineered for durability in high-moisture environments.",
          features: [
            "Moisture resistant",
            "Long-lasting durability",
            "Vibration dampening",
          ],
        },
        {
          name: "Refrigerator Components",
          image: "/image7.jpg",
          description:
            "Temperature-resistant shelving and storage solutions designed for optimal cooling efficiency.",
          features: [
            "Temperature resistant",
            "Food-grade materials",
            "Customizable designs",
          ],
        },
        {
          name: "Air Conditioner Parts",
          image: "/image8.jpg",
          description:
            "Precision components for HVAC systems that ensure proper airflow and thermal regulation.",
          features: [
            "Weather resistant",
            "Insulative properties",
            "Precision engineering",
          ],
        },
        {
          name: "Kitchen Appliance Housings",
          image: "/image9.jpg",
          description:
            "Heat-resistant and durable housings for kitchen appliances with customizable finishes.",
          features: [
            "Heat resistant",
            "Stain resistant",
            "Dishwasher safe options",
          ],
        },
        {
          name: "Control Panel Frames",
          image: "/image10.jpg",
          description:
            "Ergonomic control panel frames with precise dimensional tolerances for seamless interface integration.",
          features: [
            "Touch-compatible surfaces",
            "LED integration options",
            "Scratch resistant",
          ],
        },
      ],
      image: "/back2.jpg",
      color: "from-blue-600 to-blue-800",
    },
    capabilities: {
      title: "Manufacturing Capabilities",
      description:
        "Advanced manufacturing processes and material expertise to meet diverse industry requirements.",
      items: [
        {
          name: "In-Mold Decoration (IMD)",
          image: "/image11.jpg",
          description:
            "Premium surface decoration technology that combines printing and injection molding for superior aesthetics.",
          features: [
            "Scratch resistant graphics",
            "Complex designs possible",
            "Reduced assembly steps",
          ],
        },
        {
          name: "Advanced Materials",
          image: "/image12.jpg",
          description:
            "Extensive range of engineering polymers to meet specific application requirements and industry standards.",
          features: [
            "ABS, Nylon, PP, PC materials",
            "Custom blends available",
            "Material testing",
          ],
        },
        {
          name: "Precision Molding",
          image: "/image13.jpg",
          description:
            "State-of-the-art molding technology ensuring tight tolerances and exceptional dimensional accuracy.",
          features: [
            "Tight tolerances",
            "Complex geometries",
            "Multi-cavity tooling",
          ],
        },
        {
          name: "Surface Finishing",
          image: "/image14.jpg",
          description:
            "Comprehensive finishing processes including texturing, painting, and specialized surface treatments.",
          features: [
            "Soft-touch coatings",
            "Metallic finishes",
            "Antimicrobial options",
          ],
        },
        {
          name: "Assembly Services",
          image: "/image15.jpg",
          description:
            "Complete assembly capabilities from component integration to final product packaging.",
          features: [
            "In-line testing",
            "Full traceability",
            "Just-in-time delivery",
          ],
        },
      ],
      image: "/back3.jpg",
      color: "from-blue-600 to-blue-800",
    },
  };

  // Item details modal
  const ItemDetailsModal = ({ item, onClose }) => {
    if (!item) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div
          className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {item.name}
            </h3>
            <p className="text-gray-600 mb-6">{item.description}</p>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Star className="h-5 w-5 text-amber-500 mr-2" />
                Key Features
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              onClick={onClose}
            >
              Request Information
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="products"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 transform-none"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Products & Solutions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We specialize in manufacturing high-quality plastic components for
            diverse industries, utilizing advanced molding technologies and
            premium materials.
          </p>
        </div>

        <Tabs
          defaultValue="automotive"
          onValueChange={setActiveTab}
          className="w-full"
        >
          {/* Responsive tabs - horizontal on desktop, vertical on mobile */}
          <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
            <TabsList className="bg-gray-100 p-1 rounded-lg flex flex-nowrap">
              <TabsTrigger
                value="automotive"
                className={`flex items-center gap-2 px-4 py-3 sm:px-6 rounded-lg whitespace-nowrap transition-all duration-300 ${
                  activeTab === "automotive"
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-gray-200"
                }`}
              >
                <Car className="h-5 w-5" />
                <span className="hidden sm:inline">Automotive</span>
                <span className="sm:hidden">Auto</span>
              </TabsTrigger>
              <TabsTrigger
                value="appliances"
                className={`flex items-center gap-2 px-4 py-3 sm:px-6 rounded-lg whitespace-nowrap transition-all duration-300 ${
                  activeTab === "appliances"
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-gray-200"
                }`}
              >
                <Home className="h-5 w-5" />
                <span className="hidden sm:inline">Home Appliances</span>
                <span className="sm:hidden">Home</span>
              </TabsTrigger>
              <TabsTrigger
                value="capabilities"
                className={`flex items-center gap-2 px-4 py-3 sm:px-6 rounded-lg whitespace-nowrap transition-all duration-300 ${
                  activeTab === "capabilities"
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-gray-200"
                }`}
              >
                <Palette className="h-5 w-5" />
                <span className="hidden sm:inline">Capabilities</span>
                <span className="sm:hidden">Capabilities</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(tabData).map((tab) => (
            <TabsContent
              key={tab}
              value={tab}
              className="focus-visible:outline-none focus-visible:ring-0 transition-all duration-500"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-8 transition-all duration-500">
                {/* Header with responsive grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center mb-8 md:mb-12">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                      {tabData[tab].title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {tabData[tab].description}
                    </p>
                    <div className="hidden md:block">
                      <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
                        Learn More
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 overflow-hidden rounded-xl shadow-md">
                    <div
                      className={`h-2 bg-gradient-to-r ${tabData[tab].color}`}
                    ></div>
                    <img
                      src={tabData[tab].image}
                      alt={tabData[tab].title}
                      className="w-full h-48 sm:h-64 md:h-72 object-cover transform transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="order-3 md:hidden">
                    <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2">
                      Learn More
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Product card grid - responsive based on screen size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                  {tabData[tab].items.map((item, index) => (
                    <Card
                      key={index}
                      className="bg-white rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
                      style={{ transitionDelay: `${index * 75}ms` }}
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="h-40 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                        />
                        <h4 className="absolute bottom-3 left-4 right-4 text-white font-semibold text-lg z-20 drop-shadow-md">
                          {item.name}
                        </h4>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {item.description}
                        </p>
                        <div className="flex justify-end mt-3">
                          <span className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">
                            Details
                            <ChevronRight className="h-3 w-3" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">
            Need Custom Solutions?
          </h3>
          <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
            Our engineering team can work with you to develop custom plastic
            components tailored to your specific requirements.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors font-medium">
            Request Consultation
          </button>
        </div>
      </div>

      {/* Details Modal */}
      {selectedItem && (
        <ItemDetailsModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
};

export default Products;
