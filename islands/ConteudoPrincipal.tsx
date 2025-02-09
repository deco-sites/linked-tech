import { useEffect } from "preact/hooks";
import { Props, EstablishmentsItem } from "site/sections/ConteudoPrincipal.tsx";

interface PropsIsland {
  price?: Props['price'];
  establishments?: EstablishmentsItem[]
}

export const getIconEstablishments = (label: string): string => {
  const iconsMap: Record<string, string> = {
    "A la carte": "ALaCarte",
    "Bar": "Bar",
    "Cafeteria": "Cafeteria",
    "Fast-food": "FastFood",
    "Padaria": "Padaria",
    "Pizzaria": "Pizzaria",
    "Self-Service": "SelfService",
    "Sorveteria": "Sorveteria",
    "De rua": "DeRua",
    "Japonês": "Japones",
    "Redes e franquias": "RedesEFranquias",
    "Fine-dining": "FineDining",
    "Churrascaria": "Churrascaria",
    "Outros": "Outros"
  };

  return iconsMap[label];
}

function CommonContentIslands({
  price,
  establishments = []
}: PropsIsland) {
  useEffect(() => {
    if (price !== undefined || establishments.length > 0 ) {
      const sanitizedEstablishments = establishments.map((item) => ({
        name: String(item.name), // Garante que name é string
        url: String(item.url),   // Garante que url é string
      }));

      sessionStorage.setItem("dataLinked", JSON.stringify({ price, establishments: sanitizedEstablishments })); 
    }
  }, [price, establishments]);

  return (<div class="hidden"></div>)
}

export default CommonContentIslands;
