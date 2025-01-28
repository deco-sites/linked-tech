import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  title?: string;
  clients?: {
    image: ImageWidget;
    name: string;
    type: string;
    location: string;
  }[];
}

function OurClients({ title, clients }: Props) {
  return (
    <div class="
      mx-auto
      py-[64px] xl:py-[120px]
      px-4 xl:px-8
      w-full xl:w-[1460px]
    ">
      <h3 class="
        font-medium
        pb-[48px] xl:pb-[64px]
        text-neutrals-dark-100
        text-[28px] xl:text-[32px]
      ">
        {title}
      </h3>
      <ul class="
        flex flex-wrap
        gap-x-[24px] gap-y-[32px]
      ">
        {clients?.map((client) => (
          <li class="
            text-center
            w-[calc(50%-12px)] xl:w-[calc(13%-28px)]
          ">
            <Image
              class="block mx-auto mb-[12px]"
              src={client.image}
              alt={client.name}
              title={client.name}
              width={100}
              height={100}
            />
            <p class="
              font-normal
              text-neutrals-dark-100
              text-[16px]
            ">
              {client.name}
            </p>
            <p class="
              font-normal
              text-neutrals-dark-100
              text-[13.5px]
            ">
              {client.type}
              <br />
              {client.location}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OurClients;
