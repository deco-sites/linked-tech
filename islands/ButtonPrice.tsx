import { useState, useEffect } from "preact/hooks";

function ButtonPrice() {
  const [price, setPrice] = useState("0,00"); // Valor padrão

  useEffect(() => {
    const dataLinkedString = sessionStorage.getItem("dataLinked");

    if (dataLinkedString) {
      try {
        const dataLinked = JSON.parse(dataLinkedString);
        setPrice(dataLinked.price || "0,00");
      } catch (error) {
        console.error("Erro ao parsear dataLinked do sessionStorage", error);
      }
    }
  }, []);

  return (
    <button class="
      bg-neutrals-dark-100 xl:bg-primary-medium
      font-semibold
      py-[14px] px-[22px]
      rounded-lg
      text-[16px] xl:text-[18px]
      text-primary-medium xl:text-neutrals-dark-100
      w-full
    ">
      Monte seu plano a partir de R$ {price}
    </button>
  );
}

export default ButtonPrice;
