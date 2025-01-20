import Icon from "../components/ui/Icon.tsx";

interface Props {
  items?: {
    label?: string;
  }[];
}

const getIconId = (label: string) => {
  switch (label) {
    case "A la carte":
      return "ALaCarte";
    case "Bar":
      return "Bar";
    case "Cafeteria":
      return "Cafeteria";
    case "Fast-food":
      return "FastFood";
    case "Padaria":
      return "Padaria";
    case "Pizzaria":
      return "Pizzaria";
    case "Self-Service":
      return "SelfService";
    case "Sorveteria":
      return "Sorveteria";
    case "Redes e franquias":
      return "RedesEFranquias";
    default:
      return "Outros";
  }
};

function Establishments({ items = [] }: Props) {
  return (
    <div class="
      w-full
      pt-28 pb-28
    ">
      <div class="
        mx-auto
        max-w-[888px]
        px-4
      ">
        <h2 class="
          text-[24px] xl:text-[48px]
          text-center
          text-neutrals-dark-100
          font-semibold
          mb-16
          leading-[115%]
          tracking-[-0.96px]
        ">
          Soluções para todos os tipos<br />
          de estabelecimentos
        </h2>

        <div class="
          flex
          flex-wrap
          justify-center
          gap-4
        ">
          {items.map((item) => (
            <button
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
            >
              <Icon
                id={getIconId(item.label || "")}
                width={24}
                height={24}
                strokeWidth={2}
                class="
                  scale-[0.70] xl:scale-100
                "
              />
              <span class="ml-[4px] xl:ml-[8px]">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Establishments;
