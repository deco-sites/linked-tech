import { TextArea } from "apps/admin/widgets.ts";

interface Props {
  content?: TextArea;
}

function TermosDeUsoEPrivacidade ({ content = "" }: Props) {
  return(
    <div
      class="
        content-terms-and-privacy
        xl:mx-auto
        px-4 pt-[56px] pb-[120px] xl:pt-[80px] xl:pb-[160px]
        w-full xl:max-w-[706px]
      "
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default TermosDeUsoEPrivacidade;