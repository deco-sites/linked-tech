interface Props {
  /**
   * @title Título principal
   */
  mainTitle?: string;
}

function PlansOverviewMain({
  mainTitle = "Título",
}: Props) {
  return (
    <div class="
      bg-primary-light
      w-full
    ">
      <div class="
        relative
        mx-auto
        xl:max-w-[1460px]
        w-full
        px-4
        pt-[110px]
        pb-[160px]

        after:bg-[#003330]
        after:bottom-0
        after:content-['']
        afeter:block
        after:absolute
        after:left-[50%]
        after:h-[110px]
        after:w-[1px]
      ">
        <h2
          class="
            not-br-mobile
            font-medium	
            text-[32px] xl:text-[48px]
            text-center
            text-linked-primary
            mx-auto
            leading-[110%] xl:leading-[115%]
            tracking-[-0.64px] xl:tracking-[-0.96px]
            w-[260px] xl:w-full
          "
          dangerouslySetInnerHTML={{ __html: mainTitle }}
        >
        </h2>
      </div>
    </div>
  );
}

export default PlansOverviewMain;
