import { ConsoleLogRecordExporter } from "deco/deps.ts";
import Icon from "site/components/ui/Icon.tsx";

const share = () => {
  const url = window.location.href;
  const encodedMessage = encodeURIComponent(url);
  const whatsappURL = `https://wa.me/?text=${encodedMessage}`;
  
  console.log(url);

  window.open(whatsappURL, "_blank");
}

function Share() {
  return (
    <button onClick={() => share()}>
      <Icon
        id="Share"
        width={24}
        height={24}
        strokeWidth={2}
        class="scale-100"
      />
    </button>
  );
}

export default Share;