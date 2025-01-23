import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Items {
  image?: ImageWidget;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

interface Props {
  items?: Items[];
}

function PagePlansOptionals({
  items
}: Props) {
  return (
    <div class="
      bg-white
      w-full
    ">
      <div class="
        mx-auto
        mb-[80px] xl:mb[64px]
        w-full xl:w-[1460px]
      ">
        {items && items.map((item) => (
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
            <h3 className="
              font-semibold
              leading-[115%]
              pt-[16px] xl:pt-[24px]
              pb-[8px] xl:pb-[16px]
              text-neutrals-dark-100
              text-[22px] xl:text-[26px]
              tracking-[-0.44px]
            ">
              {item.title}
            </h3>
            <p className="
              font-normal
              text-neutrals-dark-80
              text-[16px] xl:text-[18px]
            ">
              {item.description}
            </p>
            <button className="
              border border-neutrals-dark-100
              rounded-md
              mt-[32px]
              px-4 py-2
              text-neutrals-dark-100
              text-[16px] xl:text-[18px]
              
              xl:hover:bg-neutrals-dark-100
              xl:hover:text-white
            ">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PagePlansOptionals;
