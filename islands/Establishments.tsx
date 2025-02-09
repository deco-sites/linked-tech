import { useState, useEffect } from "preact/hooks";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import { getIconEstablishments } from "site/islands/ConteudoPrincipal.tsx";
import { EstablishmentsItem } from "site/sections/ConteudoPrincipal.tsx";

function EstablishmentsIsland () {
  const [establishments, setEstablishment] = useState<EstablishmentsItem[]>([]);

  useEffect(() => {
    const dataLinkedString = sessionStorage.getItem("dataLinked");

    if (dataLinkedString) {
      try {
        const dataLinked = JSON.parse(dataLinkedString);
        setEstablishment(dataLinked.establishments || []);
      } catch (error) {
        console.error("Erro ao parsear dataLinked do sessionStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    console.log(establishments);
  }, [establishments]);

  return (
    <div class="
      flex
      flex-wrap
      justify-center
      gap-2 xl:gap-4
    ">
      {establishments.map((item, index) => (
        <a
          href={item.url || ""}
          class="
            bg-primary-light
            flex items-center
            font-semibold
            bg-neutrals-white-10
            text-[16px] xl:text-[18px] text-neutrals-dark-100
            px-4 py-2 xl:px-6 xl:py-3
            rounded-full
            transition-colors

            hover:bg-linked-secondary
          "
          key={index}
        >
          <Icon
            id={getIconEstablishments(item.name || "") as AvailableIcons}
            width={24}
            height={24}
            strokeWidth={2}
            class="
              scale-[0.70] xl:scale-100
            "
          />
          <span class="ml-[4px] xl:ml-[8px]">{item.name}</span>
        </a>
      ))}
    </div>
  )
}

export default EstablishmentsIsland;