// import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import Icon from "site/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import Paragraph from "../components/BodyContent/Paragraph.tsx";
import List from "site/components/BodyContent/List.tsx";
import Title from "site/components/BodyContent/Title.tsx";
import BigNumber from "site/components/BodyContent/BigNumber.tsx";
import { Components } from "../sections/AccordionContent.tsx";

interface Props {
  title?: string;
  content?: Components[];
}

const AccordionStyles = () => {
  setTimeout(() => {
    const accordionComponents = document.querySelectorAll('[data-js="accordion-component"]');

    if (accordionComponents.length > 0) {
      accordionComponents[0].classList.add("first");
      accordionComponents[accordionComponents.length - 1].classList.add("last");
    }
  }, 500);
}

const toggleAccordion = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  const content = button?.nextElementSibling;

  if (content) {
    if (content.classList.contains("closed")) {
      button.classList.remove("closed");
      button.classList.add("open");

      content.classList.remove("closed");
      content.classList.add("open");
    } else if (content.classList.contains("open")) {
      button.classList.remove("open");
      button.classList.add("closed");

      content.classList.remove("open");
      content.classList.add("closed");
    }
  }
};

function Accordion({ title, content }: Props) {
  useEffect(() => {
    AccordionStyles(); // Chama a função AccordionStyles quando o componente for montado
  }, []);
  
  return (
    <div class="accordion bg-white">
      <div class="accordion-item">
        <button
          class="
            closed
            font-semibold
            py-[24px] px-[16px]
            relative
            text-neutrals-dark-100
            text-[16px]
            text-left
            w-full
          "
          onClick={(event) => toggleAccordion(event)}
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

        <div class="accordion-content closed">
          <div class="p-[16px]">
            {content?.map((component, index) => {
              switch (component.component) {
                case "paragraph": 
                  return <Paragraph key={index} text={component.paragraph?.text}/>;
                  
                case "image":
                  return (
                    <Image
                      key={index}
                      class="mx-auto mb-[40px] xl:mb-[60px]"
                      src={component.image?.src || ""}
                      width={component.image?.width || 0}
                      height={component.image?.height || 0}
                    />
                  );

                case "big-number":
                  return <BigNumber key={index} text={component.bigNumber?.text} />;

                case "title":
                  return (
                    <Title
                      key={index}
                      text={component.title?.text}
                      size={component.title?.size}
                    />
                  );

                case "list":
                  return <List key={index} list={component.list}/>;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
