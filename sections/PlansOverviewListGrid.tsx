import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Optionals {
  icon?: ImageWidget,
  text?: string;
}

interface Props {
  step?: number;
  title?: string;
  description?: string;
  optionals?: Optionals[];
  button?: string;
}

function PlansOverviewListGrid({
  step,
  title,
  description,
  optionals,
  button,
}: Props) {
  return (
    <section
      class="
        bg-primary-light
        pb-[100px] xl:pb-[130px]
      "
    >
      <div
        class="
          flex flex-col items-center
          mx-auto
          w-full xl:w-[1460px]
        "
      >
        <span
          class="
            bg-neutrals-dark-100
            flex items-center justify-center
            font-medium
            h-[64px] xl:h-[86px]
            leading-[115%]
            tracking-[-0.64px] xl:tracking-[-0.96px]
            mt-[-32px] xl:mt-[-43px]
            rounded-full
            text-[32px] xl:text-[48px]
            text-linked-secondary
            w-[64px] xl:w-[86px]
            z-10
          "
        >
          {step}
        </span>
        <h3
          class="
            not-br-desktop
            font-medium
            pt-4
            text-[28px] xl:text-[32px]
            leading-[115%]
            tracking-[-0.56px] xl:tracking-[-0.6px]
            text-neutrals-dark-100
          "
          dangerouslySetInnerHTML={{ __html: title || "" }}
        >
        </h3>
        <p
          class="
            font-normal xl:font-light
            pt-4
            pb-[40px] xl:pb-[54px]
            text-neutrals-dark-80
            text-center
            text-[16px]
            leading-[140%]
          "
          dangerouslySetInnerHTML={{ __html: description || "" }}
        >
        </p>

        <div
          class="
            flex
            mb-4
            px-4 xl:px-0
            w-full
          "
        >
          {optionals && optionals.length > 0 && (
            <div className="
              grid grid-cols-2
              xl:flex xl:justify-center xl:gap-[76px]
              w-full
            ">
              {optionals.map((optional, index) => (
                <div
                  key={index}
                  className={`
                    ${ index === 0 ? "border-r-[1px] border-b-[1px] xl:border-r-0 xl:border-b-0" : null }
                    ${ index === 1 ? "border-b-[1px] xl:border-b-0" : null }
                    ${ index === 2 ? "border-r-[1px] xl:border-r-0" : null }
                    border-neutrals-dark-10
                    flex flex-col items-center text-center
                    p-4 xl:p-0
                    w-full xl:w-[111px]
                  `}
                >
                  {optional.icon && (
                    <div class="
                      bg-white
                      rounded-full
                      flex items-center justify-center
                      h-[64px] xl:h-[88px]
                      w-[64px] xl:w-[88px]
                    ">
                      <Image
                        src={optional.icon}
                        width={90}
                        height={90}
                      />
                    </div>
                  )}

                  {optional.text && (
                    <p 
                      class="
                        font-normal xl:font-light
                        text-[16px] text-neutrals-dark-100
                        leading-[140%]
                        pt-4
                        w-[111px] xl:w-full
                      "
                    >
                      {optional.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          class="
            border border-neutrals-dark-100 rounded-md
            font-semibold
            mt-[40px] xl:mt-[70px]
            py-[14px] px-[22px]
            w-full xl:w-auto
            max-w-[320px] xl:max-w-none
            text-[16px] xl:text-[18px]
            text-neutrals-dark-100
            transition-colors

            hover:bg-neutrals-dark-100
            hover:text-white
          "
        >
          {button}
        </button>
      </div>
    </section>
  )
}

export default PlansOverviewListGrid;