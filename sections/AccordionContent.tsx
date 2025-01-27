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
    <div class="
      mx-auto
      w-full xl:w-[706px]
    ">
      <Accordion title={title} content={content} />
    </div>
  )
}

export default AccordionContent;
