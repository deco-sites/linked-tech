import { useEffect } from "preact/hooks";

interface Props {
  price?: string;
}

function CommonContentIslands({
  price,
}: Props) {
  useEffect(() => {
    if (price !== undefined) {
      sessionStorage.setItem("dataLinked", JSON.stringify({ price })); 
    }
  }, [price]);

  return (<div class="hidden"></div>)
}

export default CommonContentIslands;
