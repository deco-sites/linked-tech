interface Items {
  number?: string;
  text?: string;
}

interface Props {
  title?: string;
  items?: Items[];
}

function WhyLinked({
  title,
  items,
}: Props) {
  return (
    <div class="
      bg-neutrals-dark-100
      pt-[64px] xl:pt-[120px]
      pb-[130px] xl:pb-[140px]
      w-full
    ">
      <div class="
        flex flex-col xl:flex-row xl:gap-4
        mx-auto
        px-4
        w-full xl:w-[1460px]
      ">
        <div class="text-white rounded w-full xl:max-w-[460px]">
          <h3 class="
            font-medium
            leading-[110%] xl:leading-[115%]
            mb-[77px]
            text-primary-light
            text-[32px] xl:text-[40px]
            text-center xl:text-left
            tracking-[-0.64px]
          ">
            {title}
          </h3>
        </div>

        <div class="flex flex-wrap gap-[32px] xl:gap-x-16 xl:gap-y-20">
          {items?.map((item, index) => (
            <div
              class="
                text-primary-light
                xl:w-[44%]
              "
              key={index}
            >
              <strong class="
                block
                font-thin
                text-[72px] xl:text-[110px]
                leading-[100%]
                mb-[23px]
                tracking-[-1.44px] xl:tracking-[-2.2px]
              ">
                {item.number}
              </strong>

              <p class="
                font-normal xl:font-light
                leading-[120%] xl:leading-[140%]
                text-[16px] xl:text-[18px]
              ">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyLinked;
