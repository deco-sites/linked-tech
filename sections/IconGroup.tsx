import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  items?: Array<{
    image?: ImageWidget;
    text?: string;
  }>;
}

function IconGroup({
  items
}: Props) {
  return (
    <div class="
      bg-white
      w-full
    ">
      <div class="
        flex flex-col items-center
        mx-auto
        px-4 xl:px-0
        w-full xl:w-[1460px]
      ">
        {items && items.length > 0 && (
          <div className="
            grid grid-cols-2 xl:grid-cols-3
            flex-wrap
            xl:flex
            w-full xl:w-[706px]
          ">
            {items.map((item, index) => (
              <div
                key={index}
                className={`
                  border-neutrals-dark-10 
                  flex flex-col items-center text-center
                  xl:mx-auto
                  p-4 xl:p-8
                  w-full xl:w-auto

                  odd:border-r-[1px] xl:odd:border-r-0
                  ${index === items.length - 1 || index === items.length - 2 ? "border-b-0" : "border-b-[1px]"}
                  xl:border-0
                `}
              >
                {item.image && (
                  <div class="
                    bg-white
                    rounded-full
                    flex items-center justify-center
                    h-[32px] xl:h-[48px]
                    w-[32px] xl:w-[48px]
                  ">
                    <Image
                      class="w-full"
                      src={item.image}
                      width={48}
                      height={48}
                    />
                  </div>
                )}

                {item.text && (
                  <p 
                    class="
                      font-normal xl:font-light
                      text-[16px] text-neutrals-dark-100
                      leading-[140%]
                      pt-4
                      w-[111px] xl:w-full
                    "
                  >
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default IconGroup;