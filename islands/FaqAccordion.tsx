import { signal } from "@preact/signals";
import Icon from "site/components/ui/Icon.tsx";
import { Props } from "site/sections/DuvidasComuns.tsx";

interface AccordionProps {
  title?: Props['title'];
  doubts: Props['doubts'];
}

const mainAccordion = signal<boolean>(true);
const openStates = signal<boolean[]>([]);

function Accordion({
  title,
  doubts
}: AccordionProps) {
  const toggleMainAccordion = () => {
    mainAccordion.value = !mainAccordion.value;
  };

  if (openStates.value.length !== doubts?.length) {
    openStates.value = Array(doubts?.length).fill(false);
  }

  const toggleAccordion = (index: number) => {
    openStates.value = openStates.value.map((isOpen, i) =>
      i === index ? !isOpen : isOpen
    );
  };

  return (
    <div class="
      mx-auto
      xl:max-w-[706px]
      xl:py-[64px]
    ">
      <div class="main-accordion">
        <button
          class={`
            ${mainAccordion.value ? "open" : "closed"}
            font-semibold
            py-[24px] px-[16px]
            relative
            text-neutrals-dark-100
            text-[16px]
            text-left
            w-full
          `}
          onClick={() => toggleMainAccordion()}
        >
          {title}
          <Icon
            id="ChevronDown"
            width={24}
            height={24}
            strokeWidth={2}
            class="
              absolute
              pointer-events-none
              right-[16px]
              text-primary-medium
            "
          />
        </button>
      </div>

      <div class={`
        faq-accordion
        accordion
        bg-white
        ${mainAccordion.value ? "open" : "closed"}
      `}>
        {doubts && doubts.map((doubt, index) => {
          const isOpen = openStates.value[index];

          return(
            <div
              class="
                accordion-item
                border-b border-neutrals-dark-10 last:border-0
                mx-4
              "
              key={index}
            >
              <button
                class={`
                  ${isOpen ? "open" : "closed"}
                  font-semibold
                  py-[24px] pl-[34px]
                  relative
                  text-neutrals-dark-100
                  text-[16px]
                  text-left
                  w-full
                `}
                onClick={() => toggleAccordion(index)}
              >
                {doubt.question}
                <Icon
                  id="ChevronDown"
                  width={24}
                  height={24}
                  strokeWidth={2}
                  class="
                    absolute
                    pointer-events-none
                    left-0
                    text-primary-medium
                  "
                />
              </button>

              <div class={`
                accordion-content
                ${isOpen ? "open" : "closed"}
              `}>
                <p class="
                  pt-[8px] pb-[24px]
                  text-[16px] text-neutrals-dark-100
                ">
                  {doubt.answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Accordion;
