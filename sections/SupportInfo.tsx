import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface List {
  icon?: ImageWidget,
  text?: string;
}

interface Props {
  image?: ImageWidget;
  title?: string;
  list?: List[];
}

function SupportInfo({
  image,
  title,
  list,
}: Props) {
  return (
    <section
      class="
        bg-neutrals-dark-100
        px-4
        pt-[78px] xl:pt-[56px]
        pb-[55px] xl:pb-[120px]
      "
    >
      <div
        class="
          flex flex-col items-center
          mx-auto
          w-full xl:w-[1460px]
        "
      >
        {image && (
          <Image
            class="
              mb-[40px]
              rounded-[160px]
            "
            src={image}
            width={234}
            height={338}
          />
        )}

        {title && (
          <h3
            class="
              font-medium
              leading-[115%]
              mb-[32px] xl:mb-[38px]
              pt-4
              text-center
              text-[28px] xl:text-[48px]
              tracking-[-0.56px] xl:tracking-[-0.96px]
              text-primary-light
            "
            dangerouslySetInnerHTML={{ __html: title || "" }}
          >
          </h3>
        )}

        <div
          class="
            flex
            mb-4
            w-full
          "
        >
          {list && list.length > 0 && (
            <div className="
              grid grid-cols-2
              xl:flex xl:justify-center xl:gap-[32px]
              w-full
            ">
              {list.map((item, index) => (
                <div
                  key={index}
                  className={`
                    ${ index === 0 ? "border-r-[1px] border-b-[1px] xl:border-r-0 xl:border-b-0" : null }
                    ${ index === 1 ? "border-b-[1px] xl:border-b-0" : null }
                    ${ index === 2 ? "border-r-[1px] xl:border-r-0" : null }
                    border-neutrals-white-20
                    flex flex-col items-center text-center
                    p-4 xl:p-0
                    w-full xl:w-[203px]
                  `}
                >
                  {item.icon && (
                    <div class="
                      flex items-center justify-center
                      h-[32px]
                      w-[32px]
                    ">
                      <Image
                        src={item.icon}
                        width={32}
                        height={32}
                      />
                    </div>
                  )}

                  {item.text && (
                    <p 
                      class="
                        font-normal xl:font-light
                        text-[14px] xl:text-[16px] text-neutrals-white-80
                        leading-[120%] xl:leading-[140%]
                        mt-4
                        xl:px-[8px]
                        min-h-[48px] xl:min-h-[44px]
                        w-full
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
    </section>
  )
}

export default SupportInfo;