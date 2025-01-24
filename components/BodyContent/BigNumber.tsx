interface Props {
  text?: string;
}

function BigNumber({
  text,
}: Props) {
  return (
    <span class="
      block
      font-thin
      leading-[100%]
      text-neutrals-dark-100
      text-[72px] xl:text-[110px]
      tracking-[-1.44px] xl:tracking-[-2.2px]
      mb-[8px] xl:mb-[18px]
    ">
      {text}
    </span>
  );
}

export default BigNumber;
