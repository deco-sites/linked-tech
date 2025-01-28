import Accordion from "../islands/Accordion.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Components{
  /**
   * @label Component type: {component}
   * @description Choose the type of component
   */
  component?: "paragraph" | "big-number" | "image" | "title" | "list";
  paragraph?: { text?: string };
  title?: {
    text?: string
    size?: "big" | "small";
  };
  image?: {
    src?: ImageWidget
    height?: number;
    width?: number;
  };
  list?: string[];
  bigNumber?: { text?: string };
}

interface Props {
  title?: string;
  content?: Components[];
}

function AccordionContent({
  title,
  content,
}: Props) {
  return (
    <div
      id="accordion-component"
      class="
        bg-white xl:bg-neutrals-dark-10
        xl:py-[8px]
        w-full
      "
    >
      <div class="
        border-b border-neutrals-dark-10 xl:border-none
        mx-auto
        w-full xl:w-[706px]
      ">
        <Accordion title={title} content={content} />
      </div>
    </div>
  )
}

export default AccordionContent;
