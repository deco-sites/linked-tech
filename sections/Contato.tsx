import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

interface Props {
  text?: string;
  channels?: {
    buttonIcon?: "E-mail" | "Telefone" | "WhatsApp";
    buttonText?: string;
    buttonUrl?: string;
    description?: string;
  }[];
}

const getIconId = (icon: string) => {
  switch (icon) {
    case "E-mail":
      return "Email";
    case "Telefone":
      return "Phone";
    default:
      return "WhatsApp";
  }
};

function Contato ({
  text,
  channels
}: Props) {
  return (
    <div class="
      mx-auto
      px-4 pt-[40px] pb-[80px]
      w-full xl:w-[706px]
    ">
      {
        text && (
          <p class="
            font-normal
            pb-[40px]
            text-[18px]
            text-neutrals-dark-80
          ">
            Nosso time está à disposição para te atender todos os dias, inclusive nos feriados.
          </p>
        )
      }
      {
        channels && channels.length > 0 && (
          channels?.map((channel, index) => (
            <div
              key={index}
              class="
                border-b border-neutrals-dark-10
                last:border-0
                flex flex-col flex-wrap items-center
                py-[32px]
              "
            >
              <a
                class="
                  bg-neutrals-dark-100
                  flex justify-center
                  font-semibold
                  px-20px py-[10px]
                  rounded-lg
                  text-[16px]
                  text-primary-medium
                  w-full xl:w-[420px]

                  transition-colors
                  xl:hover:bg-primary-medium
                  xl:hover:text-neutrals-dark-100
                "
                href={channel.buttonUrl}
                title={channel.buttonText}
              >
                {channel.buttonText}
                <Icon
                  id={getIconId(channel.buttonIcon as AvailableIcons)}
                  width={22}
                  height={22}
                  strokeWidth={2}
                  class="ml-[10px]"
                />
              </a>
              <p class="
                py-[16px]
                text-[14px]
                text-neutrals-dark-80
              ">
                {channel.description}
              </p>
            </div>
          ))
        )
      }
    </div>
  )
}

export default Contato;