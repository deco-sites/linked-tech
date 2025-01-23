export interface ListItem {
  text?: string;
  url?: string;
  /**
  * @title Ajustar altura da linha
  * @description Ajustar altura da linha quando falta texto para acompanhar a lista de comparação lado a lado
  */
  lines?: "1" | "2" | "3";
}

interface ListProps {
  list1?: ListItem[];
  list2?: ListItem[];
}

function List({
  list1 = [],
  list2 = [],
}: ListProps ) {
  return (
    <div class="flex gap-[24px]">
      <ul class="mt-[32px] mb-[64px] pl-4 w-[50%] xl:px-[40px]">
        {list1.map((item, index) => (
          <li
            class={`
              font-normal
              mb-[10px] last:mb-0
              text-neutrals-dark-80
              text-[16px]

              ${item.lines === "2" ? "min-h-[48px] xl:min-h-0" : item.lines === "3" ? "min-h-[72px] xl:min-h-0" : ""}
            `}
            key={index}
          >
            {item.url
              ? (
                <a
                  class="
                    underline
                    xl:decoration-1
                    xl:hover:decoration-0
                  "
                  href={item.url}
                  title={item.text}
                >
                  {item.text}
                </a>
              )
              : item.text
            }
          </li>
        ))}
      </ul>

      <ul class="mt-[32px] mb-[64px] pr-4 w-[50%] xl:px-[40px]">
        {list2.map((item, index) => (
          <li
            class={`
              font-normal
              mb-[10px] last:mb-0
              text-neutrals-dark-80
              text-[16px]

              ${item.lines === "2" ? "min-h-[48px] xl:min-h-0" : item.lines === "3" ? "min-h-[72px] xl:min-h-0" : ""}
            `}
            key={index}
          >
            {item.url
              ? (
                <a
                  class="
                    underline
                    xl:decoration-1
                    xl:hover:decoration-0
                  "
                  href={item.url}
                  title={item.text}
                >
                  {item.text}
                </a>
              )
              : item.text
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;