import { TextArea } from "apps/admin/widgets.ts";

interface Props {
  /**
  * @description The description of name.
  * @default Click here to tweak this text however you want
  */
  content?: TextArea;
}

function TitlePage({
  content,
}: Props) {
  return (
    <div class="
      bg-white
      body-content
      section-title-page
      w-full"
    >
      <div class="
        mx-auto
        relative
        px-4 pt-8 pb-16
        w-full xl:w-[706px]
      ">
        {content && (
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        )}
      </div>
    </div>
  );
}

export default TitlePage;
