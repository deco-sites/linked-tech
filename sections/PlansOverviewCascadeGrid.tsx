import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Integrations {
  icon?: ImageWidget,
  text?: string;
}

interface Props {
  step?: number;
  title?: string;
  description?: string;
  integrations?: Integrations[];
  button?: string;
}

function PlansOverviewCascadetGrid({
  step,
  title,
  description,
  integrations,
  button,
}: Props) {
  return (
    <section
      class="
        bg-white
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
            pt-4 px-4
            leading-[115%]
            tracking-[-0.56px] xl:tracking-[-0.6px]
            text-neutrals-dark-100 text-center text-[28px] xl:text-[32px]
          "
          dangerouslySetInnerHTML={{ __html: title || "" }}
        >
        </h3>
        <p
          class="
            font-normal xl:font-light
            pt-4
            pb-[32px] xl:pb-[54px]
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
            mb-[70px] xl:mb-[48px]
            px-4 xl:px-0
          "
        >
          {integrations && integrations.length > 0 && (
            <div className="flex justify-centerw-full">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center ml-[-12px]`}
                >
                    <div class="
                      bg-white
                      border-2 border-neutrals-dark-10
                      flex items-center justify-center 
                      rounded-full
                      h-[67px] xl:h-[94px]
                      w-[67px] xl:w-[94px]
                    ">
                      {integration.icon && (
                        <Image
                          src={integration.icon}
                          width={94}
                          height={94}
                          class="rounded-full"
                        />
                      )}

                      {!integration.icon && integration.text && (
                        <p class="
                          font-normal
                          text-neutrals-dark-100 text-[19px] xl:text-[26px]
                        ">
                          {integration.text}
                        </p>
                      )}
                    </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          class="
            border border-neutrals-dark-100 rounded-md
            font-semibold
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

export default PlansOverviewCascadetGrid;