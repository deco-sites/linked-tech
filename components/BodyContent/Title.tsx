interface Props {
  text?: string;
  size?: "big" | "small";
}

function Title({
  text,
  size,
}: Props) {
  const HeadingTag = size === 'big' ? 'h2' : 'h3';

  return (
    <HeadingTag
      class={`
        text-neutrals-dark-100
        font-medium
        mb-[40px] xl:mb-[60px]

        ${size === 'big' && 'leading-[115%] text-[28px] xl:text-[48px] tracking-[-0.56px] xl:tracking-[-0.96px]'}
        ${size === 'small' && 'leading-[115%] text-[22px] xl:text-[30px] tracking-[-0.44px] xl:tracking-[-0.6px]'}
      `}
    >
      {text}
    </HeadingTag>
  );
}

export default Title;
