import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Integrations {
  image?: ImageWidget;
}

interface Categories {
  title?: string;
  list?: Integrations[];
}

interface Props {
  categories?: Categories[];
}

function PagePlansIntegrations ({
  categories,
}: Props) {
  return (
    <div class="
      bg-white
      w-full
    ">
      <div class="
        mx-auto
        py-[24px] xl:py-[64px]
        px-4 xl:px-0
        w-full xl:max-w-[706px]
      ">
        <p class="
          text-neutrals-dark-80
          text-[16px] xl:text-[18px]
        ">
          Nossa lista aumenta a cada dia.<br/>
          Confira todas as integrações:
        </p>
        {categories && categories.map((category, index) => (
          <div key={index}>
            <h4 class="
              font-normal
              pt-[40px]
              pb-4
              text-neutrals-dark-100
              text-[16px] xl:text-[18px]
            ">
              {category.title}
            </h4>
            <ul class="flex flex-wrap gap-[8px]">
              {category.list && category.list.map((integration, index) => (
                <li
                  class="w-[calc(33.33%-8px)] xl:w-[108px] flex-shrink-0"
                  key={index}
                >
                  <Image
                    class="w-full"
                    src={integration.image || ""}
                    height={107}
                    width={107}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* {items && items.map((item) => (
          <div class="
            border-b border-neutrals-dark-10 last:border-b-0
            mx-auto
            py-[40px] xl:py-[80px]
            w-[calc(100%-32px)] xl:max-w-[706px]
          ">
            <div class="
              bg-white
              border border-neutrals-dark-10
              rounded-full
              flex items-center justify-center
              h-[64px] xl:h-[88px]
              w-[64px] xl:w-[88px]
            ">
              <Image
                src={item.image || ""}
                width={90}
                height={90}
              />
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default PagePlansIntegrations;
