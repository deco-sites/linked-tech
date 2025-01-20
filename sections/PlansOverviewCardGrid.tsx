import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

interface Plans {
  icon?: ImageWidget,
  title?: string,
  list?: string[];
}

interface Props {
  step?: number;
  title?: string;
  description?: string;
  plans?: Plans[];
  button?: string;
}

function PlansOverviewCardGrid({
  step,
  title,
  description,
  plans,
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
        <h3 class="
          font-medium
          pt-4
          text-[28px] xl:text-[32px]
          leading-[115%]
          tracking-[-0.56px] xl:tracking-[-0.6px]
          text-neutrals-dark-100
        ">
          {title}
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
            px-4 xl:px-0
            w-full xl:max-w-[706px]
          "
        >
          {plans && plans.length > 0 && (
            <div className="flex xl:border xl:rounded-lg w-full">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`
                    ${index === 0 ? 'xl:border-r' : null}
                    xl:p-[42px] flex flex-col w-[50%] xl:w-[353px]

                    odd:pr-[8px]
                    odd:xl:pr-[42px]
                    even:pl-[8px]
                    even:xl:pl-[42px]
                  `}
                >
                  {plan.icon && (
                    <Image
                      src={plan.icon}
                      height={32}
                      width={32}
                    />
                  )}

                  {plan.title && (
                    <h3 className="
                      border-b border-neutrals-dark-10
                      flex items-center
                      font-semibold
                      mt-[8px] pb-2 xl:pb-4
                      text-neutrals-dark-100
                      text-[18px] xl:text-[26px]
                      leading-[115%]
                    ">
                      {plan.title}
                      <Icon
                        id="ChevronRight"
                        width={28}
                        height={28}
                        strokeWidth={2}
                        class="hidden xl:block ml-4 text-linked-secondary"
                      />
                    </h3>
                  )}

                  {plan.list && (
                    <ul className="text-sm text-gray-600">
                      {plan.list.map((item, index) => (
                        <li
                          key={index}
                          className={`
                            flex items-center
                            font-light xl:font-normal
                            py-1 xl:py-0
                            text-neutrals-dark-80
                            text-[16px] xl:text-[18px]
                            leading-[100%] xl:leading-[150%]
                            ${index === 0 ? 'my-[30px]' : 'mb-0'}
                          `}
                        >
                          <Icon
                            id="ChevronRight"
                            width={12}
                            height={12}
                            strokeWidth={2}
                            class="mr-2 text-linked-secondary"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <button class="
          border border-neutrals-dark-100 rounded-md
          font-semibold
          mt-[40px]
          py-[14px] px-[22px]
          w-full xl:w-auto
          max-w-[320px] xl:max-w-none
          text-[16px] xl:text-[18px]
          text-neutrals-dark-100
          transition-colors

          hover:bg-neutrals-dark-100
          hover:text-white
        ">
          {button}
        </button>
      </div>
    </section>
  )
}

export default PlansOverviewCardGrid;