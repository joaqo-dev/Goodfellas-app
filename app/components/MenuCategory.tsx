import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AspectRatio } from "./ui/aspect-ratio";

interface HaircutItem {
  name: string;
  price: string;
  description?: string;
  popular?: boolean;
  image?: string;
}

interface MenuCategoryProps {
  items: HaircutItem[];
}

export function MenuCategory({ items }: MenuCategoryProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Card
          key={index}
          className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 hover:border-yellow-400/30 transition-all duration-300 overflow-hidden group"
        >
          <div className="flex flex-col">
            {item.image && (
              <div className="relative overflow-hidden">
                <AspectRatio ratio={1}>
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </AspectRatio>
                {item.popular && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-yellow-400 text-black border-0 shadow-lg">
                      Popular
                    </Badge>
                  </div>
                )}
              </div>
            )}
            <div className="px-4 py-3 flex items-center justify-between">
              <h3 className="text-zinc-100 text-base font-normal">
                {item.name}
              </h3>
              <div className="text-yellow-400 text-lg font-normal">
                ${item.price}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
