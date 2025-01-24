interface Props {
  list?: string[];
}

function List({
  list,
}: Props) {
  return (
    <ul class="list-disc list-inside mb-[40px] xl:mb-[60px]">
      {list?.map((item, index) => {
        return (
          <li
            key={index}
            class="
              font-normal xl:font-light
              pb-[4px]
              text-neutrals-dark-80
              text-[16px] xl:text-[18px]
              leading-[120%] xl:leading-[150%]

              last:pb-0
            "
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
