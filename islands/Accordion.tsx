// import { signal } from "@preact/signals";
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

const toggleAccordion = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  const content = button?.nextElementSibling;

  if (content) {
    if (content.classList.contains("closed")) {
      content.classList.remove("closed");
      content.classList.add("open");
    } else if (content.classList.contains("open")) {
      content.classList.remove("open");
      content.classList.add("closed");
    }
  }
};

function Accordion({ title, content }: Props) {
  return (
    <div class="accordion">
      <div class="accordion-item">
        <button
          class="
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
              top-[50%] translate-y-[-50%]
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
