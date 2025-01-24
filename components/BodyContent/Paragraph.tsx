interface Props {
  text?: string;
}

function Paragraph({
  text,
}: Props) {
  return (
    <p class="
      text-neutrals-dark-80
      text-[16px] xl:text-[18px]
      font-normal xl:font-light
      leading-[120%] xl:leading-[140%]
      mb-[40px] xl:mb-[60px]
    ">
      {text}
    </p>
  );
}

export default Paragraph;
