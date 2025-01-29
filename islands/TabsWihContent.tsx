
import { signal } from "@preact/signals";
import { Props } from "site/sections/PaginaSobreLinkedCultura.tsx";

interface TabsProps {
  tabs: Props['abas'];
}

const activeIndex = signal(0);


function TabsWihContent({ tabs }: TabsProps) {
  return (
    <>
      <ul class="
        flex justify-center
      ">
        {tabs && tabs.map((item, index) => (
          <li
            class={`
              border-b-2
              ${ activeIndex.value === index ? "border-neutrals-dark-100" : "border-neutrals-dark-20" }
              font-semibold
              py-4
              ${ activeIndex.value === index ? "text-neutrals-dark-100" : "text-neutrals-dark-80" }
              text-[16px] xl:text-[18px]
              text-center
              w-1/3
            `}
            key={index}
          >
            <button onClick={() => { activeIndex.value = index; console.log(activeIndex.value) }}>{item.nome}</button>
          </li>
        ))}
      </ul>
      
      <div class="
        mt-[40px]
        min-h-[274px] xl:min-h-[154px]
        relative
      ">
        {tabs && tabs.map((item, index) => (
          <div
            class={`
              absolute top-0 left-0
              px-4
              w-full
              transition-opacity duration-200
              ${ activeIndex.value === index ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
            key={index}
          >
            <p class="
              font-semibold
              leading-[115%]
              text-[22px] xl:text-[24px]
              tracking-[-0.44px]
              text-neutrals-dark-100
            ">
              {item.conteúdo}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TabsWihContent;