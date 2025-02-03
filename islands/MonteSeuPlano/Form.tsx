import { useSignal } from "@preact/signals";
import Icon from "site/components/ui/Icon.tsx";
import { openRequestForm } from "site/islands/MonteSeuPlano/FixedBar.tsx";

function Form () {
  const steps = [
    {
      label: "Primeiramente, qual o seu nome completo?",
      field: {
        name: "fullname",
        type: "text",
        placeholder: "Digite seu nome"
      }
    },
    {
      label: "Agora informe também o seu e-mail",
      field: {
        name: "email",
        type: "email",
        placeholder: "Digite seu e-mail"
      }
    },
    {
      label: "Qual seu telefone? Por favor, informe o DDD e o número",
      field: {
        name: "phone",
        type: "phone",
        placeholder: "Digite seu telefone"
      }
    }
  ];

  const currentStep = useSignal(0);
  const transitioning = useSignal(false);

  // Fields form
  const fullName = useSignal("");

  // Validação
  const isInvalid = fullName.value.length <= 2;

  const nextStep = () => {
    if (currentStep.value < steps.length - 1) {
      transitioning.value = true;
      setTimeout(() => {
        currentStep.value += 1;
        transitioning.value = false;
      }, 300);
    }
  };

  const prevStep = () => {
    if (currentStep.value > 0) {
      transitioning.value = true;
      setTimeout(() => {
        currentStep.value -= 1;
        transitioning.value = false;
      }, 300);
    }
  };

  const getInputProps = () => {
    if (currentStep.value === 0) {
      return {
        value: fullName.value,
        onInput: (e: Event) => (fullName.value = (e.target as HTMLInputElement).value),
        placeholder: "Digite seu nome completo",
      };
    } else if (currentStep.value === 1) {
      // return {
      //   value: phone.value,
      //   onInput: (e) => (phone.value = e.target.value),
      //   placeholder: "Digite seu telefone",
      // };
    }
  };

  return (
    <div
      id="wrap-request-form"
      class="
        hidden opacity-0 transition-opacity duration-300
        bg-white xl:bg-[linear-gradient(to_right,theme(colors.neutrals-dark-100)_35%,white_35%)]
        fixed
        left-0
        h-[100%]
        top-0
        w-[100%]
      "
    >
      <div class="
        h-full
        xl:mx-auto
        w-full xl:max-w-[1460px]

        xl:relative
        xl:before:absolute
        xl:before:content-['']
        xl:before:w-[35%]
        xl:before:h-full
        xl:before:bg-neutrals-dark-100
      ">
        <div
          class="
            header
            flex items-center
            mb-4 xl:mb-12 xl:mx-auto
            px-4 py-6 xl:py
            relative
            w-full
          "
        >
          <button onClick={() => openRequestForm()}>
            <Icon
              id="ChevronLeft"
              width={32}
              height={32}
              strokeWidth={2}
              class="
                xl:absolute
                cursor-pointer
                xl:left-4
                text-neutrals-dark-100 xl:text-white
              "
            />
          </button>

          <div class="xl:w-[35%] xl:text-center">
            <div class="xl:inline-block">
              <p class="
                font-secondary
                font-light
                hidden xl:block
                text-[12px]
                text-neutrals-white-100
              ">
                Passo {currentStep.value + 1} de {steps.length}
              </p>

              <progress
                class="
                  absolute left-1/2 -translate-x-1/2
                  xl:relative xl:left-auto xl:translate-none
                  transform xl:transform-none
                  w-[45%] xl:w-[322px]
                "
                id="file"
                max={steps.length}
                value={currentStep.value + 1}
              />
            </div>
          </div>
        </div>

        <div class="
          h-[400px] xl:h-[400px]
          overflow-x-hidden
          relative
        ">
          {steps.map((step, index) => (
            <fieldset
              key={index}
              class={`
                absolute top-0
                xl:flex
                xl:mx-auto
                px-4 xl:px-0
                xl:w-full xl:max-w-[1460px]
                z-[10]

                transition-all duration-300
                ${currentStep.value === index ? "opacity-100 translate-x-0" : 
                  currentStep.value > index ? "opacity-0 -translate-x-12 pointer-events-none" : 
                  "opacity-0 translate-x-12 pointer-events-none"}
              `}
            >
              <div class="xl:pl-4 xl:pr-12 xl:w-[35%]">
                <legend class="
                  font-light
                  leading-[140%]
                  text-[14px] xl:text-[16px]
                  text-neutrals-dark-80 xl:text-neutrals-white-100
                ">
                  Solicitar plano
                </legend>
                <label
                  class="
                    block
                    leading-[115%]
                    pt-[8px] pb-[60px]
                    text-[28px] xl:text-[32px]
                    text-neutrals-dark-100 xl:text-neutrals-white-100
                    tracking-[-0.56px] xl:tracking-[-0.64px]
                  "
                  htmlFor={step.field.name}
                >
                  {step.label}
                </label>
              </div>
              <div class="xl:pt-[31px] xl:px-12 xl:w-[65%]">
                <input
                  class="
                    border-b-2
                    border-neutrals-dark-100
                    font-normal xl:font-medium
                    xl:leading-[115%]
                    pb-[8px] xl:pb-[14px]
                    text-[18px] xl:text-[32px]
                    xl:tracking-[-0.64px]
                    w-full
                  "
                  type={step.field.type}
                  id={step.field.name}
                  name={step.field.name}
                  placeholder={step.field.placeholder}
                  { ...getInputProps() }
                />
              </div>
            </fieldset>
          ))}

          {/* <fieldset class={`
            hidden xl:hidden
            absolute top-0
            xl:flex
            xl:mx-auto
            px-4 xl:px-0
            xl:w-full xl:max-w-[1460px]
            z-[10]

            transition-all duration-300
            ${step.value === 2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"}
          `}>
            <div class="xl:pl-4 xl:pr-12 xl:w-[35%]">
              <legend class="
                font-light
                leading-[140%]
                text-[14px] xl:text-[16px]
                text-neutrals-dark-80 xl:text-neutrals-white-100
              ">
                Solicitar plano
              </legend>
              <label
                class="
                  block
                  leading-[115%]
                  pt-[8px] pb-[60px]
                  text-[28px] xl:text-[32px]
                  text-neutrals-dark-100 xl:text-neutrals-white-100
                  tracking-[-0.56px] xl:tracking-[-0.64px]
                "
                htmlFor="full-name"
              >
                Agora informe também o seu e-mail, Júlio.
              </label>
            </div>
            <div class="xl:pt-[31px] xl:px-12 xl:w-[65%]">
              <input
                class="
                  border-b-2
                  border-neutrals-dark-100
                  font-normal xl:font-medium
                  xl:leading-[115%]
                  pb-[8px] xl:pb-[14px]
                  xl:text-[18px] xl:text-[32px]
                  xl:tracking-[-0.64px]
                  w-full
                "
                type="text"
                id="full-name"
                name="full-name"
                value=""
                placeholder="Digite seu e-mail"
              />
            </div>
          </fieldset> */}
        </div>

        {/* {currentStep.value > 0 && (
          <button
            class="bg-gray-500 text-white px-4 py-2 rounded-lg"
            onClick={prevStep}
            disabled={transitioning.value}
          >
            Voltar
          </button>
        )} */}

        <button
          class="
            absolute
            rounded-[50%] xl:rounded-lg
            bg-neutrals-dark-100
            bottom-8 xl:bottom-12
            h-[52px] xl:h-auto
            xl:py-[8px] 
            xl:pl-[24px] xl:pr-[12px]
            right-4 xl:right-12
            text-[0px] text-center xl:text-[18px]
            text-primary-medium
            w-[52px] xl:w-auto

            disabled:bg-neutrals-dark-10
            disabled:text-neutrals-dark-20
          "
          onClick={nextStep}
          disabled={transitioning.value || isInvalid}
        >
          {currentStep.value === steps.length - 1 ? "Finalizar" : "Próximo passo"}
          <Icon
            id="Arrow"
            width={32}
            height={32}
            strokeWidth={2}
            class="
              inline-block
              xl:ml-2
              transform rotate-180
              xl:scale-[0.8]
            "
          />
        </button>
      </div>
    </div>
  )
}

export default Form;