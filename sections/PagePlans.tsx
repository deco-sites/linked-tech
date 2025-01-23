import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import List, { ListItem } from "../components/PagePlans/List.tsx";

interface Plans {
  icon?: ImageWidget;
  title?: string;
  description?: string;
  price?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface Modules {
  title?: string;
  module1?: ListItem[];
  module2?: ListItem[];
}

interface Features {
  title?: string;
  feature1?: ListItem[];
  feature2?: ListItem[];
}

interface Connectivity {
  title?: string;
  connectivity1?: ListItem[];
  connectivity2?: ListItem[];
}

interface Devices {
  title?: string;
  devices1?: ListItem[];
  devices2?: ListItem[];
}

interface Optionals {
  title?: string;
  optionals1?: ListItem[];
  optionals2?: ListItem[];
}

interface Props {
  plans?: Plans[];
  modules?: Modules;
  features?: Features;
  connectivity?: Connectivity;
  devices?: Devices;
  optionals?: Optionals;
}

function PagePlans({
  plans,
  modules,
  features,
  connectivity,
  devices,
  optionals,
}: Props) {
  return (
    <div class="
      bg-white
      w-full
    ">
      <div class="
        mx-auto
        mb-[32px] xl:mb[64px]
        w-full xl:w-[1460px]
      ">
        {plans && plans.length > 0 && (
          <div className="
            xl:border xl:rounded-lg
            flex
            mt-[48px] xl:mt-[80px]
            mb-[64px] xl:mb-[100px]
            mx-auto
            w-full xl:max-w-[706px]
          ">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`
                  ${index === 0 ? 'xl:border-r' : null}
                  flex flex-col
                  xl:p-[40px]
                  w-[50%] xl:w-[353px]
                `}
              >
                {plan.title && (
                  <h3 className={`
                    border-b border-neutrals-dark-10
                    flex items-center
                    font-semibold
                    mt-[8px]
                    mb-[20px] xl:mb-[30px]
                    pb-4 xl:pb-4
                    text-neutrals-dark-100
                    text-[18px] xl:text-[26px]
                    leading-[115%]

                    ${index === 0 ? 'pl-4 pr-[12px] xl:pl-0 xl:pr-0' : null}
                    ${index === 1 ? 'pl-[12px] pr-4 xl:pl-0 xl:pr-0' : null}
                  `}>
                    {plan.icon && (
                      <Image
                        class="mr-2"
                        src={plan.icon}
                        height={32}
                        width={32}
                      />
                    )}

                    {plan.title}
                  </h3>
                )}

                {plan.description && (
                  <p class={`
                    font-light
                    leading-[140%]
                    min-h-[156px] xl:min-h-[126px]
                    text-neutrals-dark-80
                    text-[16px] xl:text-[18px]
                    ${index === 0 ? 'pl-4 pr-[12px] xl:pl-0 xl:pr-0' : null}
                    ${index === 1 ? 'pl-[12px] pr-4 xl:pl-0 xl:pr-0' : null}
                  `}>
                    {plan.description}
                  </p>
                )}

                {plan.price && (
                  <p class={`
                    font-bold
                    my-[32px]
                    text-neutrals-dark-80
                    text-[16px] xl:text-[18px]

                    ${index === 0 ? 'pl-4 pr-[12px] xl:pl-0 xl:pr-0' : null}
                    ${index === 1 ? 'pl-[12px] pr-4 xl:pl-0 xl:pr-0' : null}
                  `}>
                    A partir de<br />
                    R$ {plan.price}
                  </p>
                )}

                {plan.buttonLink && plan.buttonText && (
                  <a
                    class={`
                      border border-neutrals-dark-100 rounded-lg
                      font-semibold
                      py-[10px]
                      text-center
                      text-[16px]
                      transition-colors

                      hover:bg-neutrals-dark-100 hover:text-white

                      ${index === 0 ? 'ml-4 mr-[12px] xl:ml-0 xl:mr-0' : null}
                      ${index === 1 ? 'ml-[12px] mr-4 xl:ml-0 xl:mr-0' : null}
                    `}
                    href={plan.buttonLink}
                    title={plan.buttonText}
                  >
                    {plan.buttonText}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {modules && (
          <div class="
            mx-auto
            w-full xl:max-w-[706px]
          ">
            <h3 className={`
              border-b border-neutrals-dark-10
              flex items-center
              font-semibold
              pb-4 xl:pb-4
              pl-4 xl:pl-[40px]
              text-neutrals-dark-100
              text-[18px] xl:text-[26px]
              leading-[115%]
            `}>
              {modules.title}
            </h3>

            <List list1={modules.module1} list2={modules.module2} />
          </div>
        )}

        {features && (
          <div class="
            mx-auto
            w-full xl:max-w-[706px]
          ">
            <h3 className={`
              border-b border-neutrals-dark-10
              flex items-center
              font-semibold
              pb-4 xl:pb-4
              pl-4 xl:pl-[40px]
              text-neutrals-dark-100
              text-[18px] xl:text-[26px]
              leading-[115%]
            `}>
              {features.title}
            </h3>

            <List list1={features.feature1} list2={features.feature2} />
          </div>
        )}

        {connectivity && (
          <div class="
            mx-auto
            w-full xl:max-w-[706px]
          ">
            <h3 className={`
              border-b border-neutrals-dark-10
              flex items-center
              font-semibold
              pb-4 xl:pb-4
              pl-4 xl:pl-[40px]
              text-neutrals-dark-100
              text-[18px] xl:text-[26px]
              leading-[115%]
            `}>
              {connectivity.title}
            </h3>

            <List list1={connectivity.connectivity1} list2={connectivity.connectivity2} />
          </div>
        )}

        {devices && (
          <div class="
            mx-auto
            w-full xl:max-w-[706px]
          ">
            <h3 className={`
              border-b border-neutrals-dark-10
              flex items-center
              font-semibold
              pb-4 xl:pb-4
              pl-4 xl:pl-[40px]
              text-neutrals-dark-100
              text-[18px] xl:text-[26px]
              leading-[115%]
            `}>
              {devices.title}
            </h3>

            <List list1={devices.devices1} list2={devices.devices2} />
          </div>
        )}

        {optionals && (
          <div class="
            mx-auto
            w-full xl:max-w-[706px]
          ">
            <h3 className={`
              border-b border-neutrals-dark-10
              flex items-center
              font-semibold
              pb-4 xl:pb-4
              pl-4 xl:pl-[40px]
              text-neutrals-dark-100
              text-[18px] xl:text-[26px]
              leading-[115%]
            `}>
              {optionals.title}
            </h3>

            <List list1={optionals.optionals1} list2={optionals.optionals2} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PagePlans;

