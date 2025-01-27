import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Paragraph from "../components/BodyContent/Paragraph.tsx";
import List from "site/components/BodyContent/List.tsx";
import Title from "site/components/BodyContent/Title.tsx";
import BigNumber from "site/components/BodyContent/BigNumber.tsx";

interface Components {
  /**
   * @label Component type: {component}
   * @description Choose the type of component
   */
  component: "paragraph" | "big-number" | "image" | "title" | "list";
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
};

interface Props {
  // content?: TextArea;
  /**
   * @label Component type: {component}
   * @description Choose the type of component
   */
  components?: Components[];
}

function BodyContent({
  // content,
  components,
}: Props) {
  return (
    <div class="
      bg-white
      w-full"
    >
      <div class="
        body-content
        mx-auto
        relative
        px-4 xl:px-0
        w-full xl:w-[706px]
      ">
        {components?.map((component, index) => {
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
  );
}

export default BodyContent;
