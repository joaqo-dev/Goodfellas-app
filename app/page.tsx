"use client";

import { useState } from "react";
import { MenuCategory } from "./components/MenuCategory";
import { Scissors, User, Star, Crown, Sparkles } from "lucide-react";
import { Card } from "./components/ui/card";

function App() {
  const [activeCategory, setActiveCategory] = useState("clasicos");

  const categories = {
    clasicos: [
      {
        name: "Corte Clásico",
        price: "15.000",
        popular: true,
        image:
          "https://images.unsplash.com/photo-1759408174071-f2971472dc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYmFyYmVyJTIwaGFpcmN1dHxlbnwxfHx8fDE3NjA2NzI3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Corte Ejecutivo",
        price: "18.000",
        image:
          "https://images.unsplash.com/photo-1671869239603-8d73133e0e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYWlyY3V0JTIwbWVufGVufDF8fHx8MTc2MDY3Mjc2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Corte Tradicional",
        price: "16.000",
        image:
          "https://images.unsplash.com/photo-1759408174071-f2971472dc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYmFyYmVyJTIwaGFpcmN1dHxlbnwxfHx8fDE3NjA2NzI3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Degradado Clásico",
        price: "17.000",
        image:
          "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWRlJTIwaGFpcmN1dCUyMGJhcmJlcnNob3B8ZW58MXx8fHwxNzYwNjcyNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    modernos: [
      {
        name: "Fade Completo",
        price: "20.000",
        popular: true,
        image:
          "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWRlJTIwaGFpcmN1dCUyMGJhcmJlcnNob3B8ZW58MXx8fHwxNzYwNjcyNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Taper Fade",
        price: "22.000",
        image:
          "https://images.unsplash.com/photo-1684778243737-bd5b1d4c1b75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXBlciUyMGZhZGUlMjBoYWlyY3V0fGVufDF8fHx8MTc2MDY3Mjc2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Undercut",
        price: "21.000",
        image:
          "https://images.unsplash.com/photo-1759675905700-a1b5efedc05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcmN1dCUyMG1lbiUyMGhhaXJzdHlsZXxlbnwxfHx8fDE3NjA2NzI3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Pompadour Moderno",
        price: "23.000",
        image:
          "https://images.unsplash.com/photo-1594910344569-a542a5f4bdff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb21wYWRvdXIlMjBoYWlyY3V0fGVufDF8fHx8MTc2MDY3Mjc2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Texturizado",
        price: "20.000",
        image:
          "https://images.unsplash.com/photo-1742157574049-4df3bc760926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0dXJlZCUyMGhhaXJjdXQlMjBtZW58ZW58MXx8fHwxNzYwNjcyNzY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    premium: [
      {
        name: "Servicio Completo",
        price: "35.000",
        popular: true,
        image:
          "https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXJiZXJzaG9wJTIwc2VydmljZXxlbnwxfHx8fDE3NjA2NzI3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Corte Premium",
        price: "25.000",
        image:
          "https://images.unsplash.com/photo-1671869239603-8d73133e0e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYWlyY3V0JTIwbWVufGVufDF8fHx8MTc2MDY3Mjc2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Fade Premium",
        price: "28.000",
        image:
          "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWRlJTIwaGFpcmN1dCUyMGJhcmJlcnNob3B8ZW58MXx8fHwxNzYwNjcyNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Corte + Barba",
        price: "30.000",
        image:
          "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBncm9vbWluZyUyMGJlYXJkfGVufDF8fHx8MTc2MDY3Mjc2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    barba: [
      {
        name: "Perfilado de Barba",
        price: "10.000",
        image:
          "https://images.unsplash.com/photo-1599102991024-ed6032d5e7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHRyaW0lMjBiYXJiZXJzaG9wfGVufDF8fHx8MTc2MDY3Mjc2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Barba Completa",
        price: "15.000",
        popular: true,
        image:
          "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBncm9vbWluZyUyMGJlYXJkfGVufDF8fHx8MTc2MDY3Mjc2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Afeitado Clásico",
        price: "18.000",
        image:
          "https://images.unsplash.com/photo-1758171669999-f2f137991e70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJhcmJlciUyMHNoYXZlfGVufDF8fHx8MTc2MDY3Mjc2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Diseño de Barba",
        price: "12.000",
        image:
          "https://images.unsplash.com/photo-1599102991024-ed6032d5e7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHRyaW0lMjBiYXJiZXJzaG9wfGVufDF8fHx8MTc2MDY3Mjc2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    ninos: [
      {
        name: "Corte Niño (hasta 10 años)",
        price: "12.000",
        image:
          "https://images.unsplash.com/photo-1650066701653-8afec7bca688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwaGFpcmN1dCUyMGJhcmJlcnxlbnwxfHx8fDE3NjA2MzkyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Corte Niño Premium",
        price: "15.000",
        popular: true,
        image:
          "https://images.unsplash.com/photo-1650066701653-8afec7bca688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwaGFpcmN1dCUyMGJhcmJlcnxlbnwxfHx8fDE3NjA2MzkyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Corte Adolescente",
        price: "16.000",
        image:
          "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWRlJTIwaGFpcmN1dCUyMGJhcmJlcnNob3B8ZW58MXx8fHwxNzYwNjcyNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    koko: [
      {
        name: "Perfilado de Barba",
        price: "10.000",
        image:
          "https://images.unsplash.com/photo-1599102991024-ed6032d5e7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHRyaW0lMjBiYXJiZXJzaG9wfGVufDF8fHx8MTc2MDY3Mjc2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Barba Completa",
        price: "15.000",
        popular: true,
        image:
          "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBncm9vbWluZyUyMGJlYXJkfGVufDF8fHx8MTc2MDY3Mjc2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Afeitado Clásico",
        price: "18.000",
        image:
          "https://images.unsplash.com/photo-1758171669999-f2f137991e70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJhcmJlciUyMHNoYXZlfGVufDF8fHx8MTc2MDY3Mjc2OHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        name: "Diseño de Barba",
        price: "12.000",
        image:
          "https://images.unsplash.com/photo-1599102991024-ed6032d5e7ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHRyaW0lMjBiYXJiZXJzaG9wfGVufDF8fHx8MTc2MDY3Mjc2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
  };

  const categoryConfig = [
    {
      id: "clasicos",
      name: "Clásicos",
      icon: Star,
    },
    {
      id: "modernos",
      name: "Modernos",
      icon: Sparkles,
    },
    {
      id: "premium",
      name: "Premium",
      icon: Crown,
    },
    {
      id: "barba",
      name: "Barba",
      icon: Scissors,
    },
    {
      id: "ninos",
      name: "Niños",
      icon: User,
    },
    {
      id: "koko",
      name: "jjkkj",
      icon: User,
    },
  ];

  const currentCategory = categoryConfig.find(
    (cat) => cat.id === activeCategory
  );
  const CurrentIcon = currentCategory?.icon || Star;

  return (
    <div className="h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="flex-shrink-0 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Scissors className="w-6 h-6 text-yellow-400" />
              <h1 className="text-yellow-400 tracking-wider text-2xl font-playfair">
                GOODFELLAS
              </h1>
              <Scissors className="w-6 h-6 text-yellow-400 -scale-x-100" />
            </div>
            <p className="text-zinc-400 text-sm tracking-widest">BARBERÍA</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 max-w-2xl overflow-y-auto">
        <div className="mb-6 text-center">
          <p className="text-zinc-400 text-sm">
            Nuestros servicios profesionales
          </p>
        </div>

        {/* Category Selector - Scroll Horizontal */}
        <div className="mb-8">
          <div className="flex gap-3 overflow-x-auto pb-4 pt-2 px-2 scrollbar-hide snap-x snap-mandatory">
            {categoryConfig.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <Card
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex-shrink-0 snap-center cursor-pointer transition-all duration-300 
                    ${
                      isActive
                        ? "bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 border-yellow-400/50 scale-105"
                        : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                    }
                  `}
                  style={{ minWidth: "140px" }}
                >
                  <div className="p-4 text-center">
                    <div
                      className={`
                      w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center
                      ${isActive ? "bg-yellow-400" : "bg-zinc-800"}
                    `}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          isActive ? "text-black" : "text-zinc-400"
                        }`}
                      />
                    </div>
                    <h3
                      className={`text-sm ${
                        isActive ? "text-yellow-400" : "text-zinc-300"
                      }`}
                    >
                      {category.name}
                    </h3>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Current Category Header */}
        <div className="mb-5">
          <h2 className="text-zinc-100 flex items-center gap-2">
            <CurrentIcon className="w-5 h-5 text-yellow-400" />
            {currentCategory?.name}
          </h2>
        </div>

        {/* Menu Items */}
        <MenuCategory
          items={categories[activeCategory as keyof typeof categories]}
        />

        {/* Footer */}
        <footer className="mt-12 text-center pb-8">
          <div className="border-t border-zinc-800 pt-6">
            <p className="text-zinc-500 text-sm mb-2">
              Todos los precios están en pesos chilenos
            </p>
            <p className="text-zinc-600 text-xs">
              Goodfellas Barbería © {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </main>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default App;
