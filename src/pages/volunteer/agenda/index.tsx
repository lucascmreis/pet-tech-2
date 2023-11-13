import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Calendar from "../../../components/Calendar";
import { notify } from "../../../utils/toast";
import Button from "../../../components/Button";

interface IFormInput {
  name: string;
  email?: string;
  date: Date;
  details: string;
}

const Agenda = () => {
  const methods = useForm<IFormInput>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // TODO: handle api call to submit data
    console.log(data);

    notify();
    navigate("/");

    return;
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="py-16 lg:py-20">
          <h1 className="pt-5 font-body text-4xl font-semibold  text-primary dark:text-[#ba724e] md:text-4xl lg:text-4xl">
            Selecione uma data para atendimento
          </h1>

          <div className="pr-2 pt-3 sm:pt-0">
            <p className="font-body text-xl font-light m-2 text-primary dark:text-primary">
              Navegue pelo calendário e encontre vagas disponíveis para realizar
              sua consulta.
            </p>
            <p className="font-body text-xl font-light m-2 text-primary dark:text-primary">
              Em seguida preencha o formulário abaixo com os seus dados
            </p>
          </div>

          <FormProvider {...methods}>
            <form className="pt-16" onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="flex flex-col justify-left">
                <div className="text-primary  dark:text-primary my-3 w-full pt-6  sm:w-1/2 sm:pt-0">
                  <label className="block pb-2 font-body font-medium  text-primary dark:text-primary">
                    Data
                  </label>
                  <Calendar name="date" hasCalendarList />
                </div>

                <div className="w-full sm:mr-3 sm:w-1/2">
                  <label className="block pb-3 font-body font-medium  text-primary dark:text-primary">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Como devo te chamar?"
                    className="w-full border border-secondary rounded-lg placeholder-opacity-50 focus:ring-blue   px-5 py-4 font-body font-light  text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none  dark:text-primary"
                    {...methods.register("name")}
                  />
                </div>

                <div className="w-full pt-6  sm:w-1/2 sm:pt-0 my-6">
                  <label className="block pb-3 font-body font-medium  text-primary dark:text-primary">
                    Endereço de email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Escreva seu email aqui"
                    className="w-full border border-secondary rounded-lg placeholder-opacity-50 focus:ring-blue   px-5 py-4 font-body font-light  text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none  dark:text-primary"
                    {...methods.register("email")}
                  />
                </div>
              </div>

              <div className="w-full pt-6 sm:pt-10">
                <label className="block pb-3 font-body font-medium  text-primary dark:text-primary">
                  Informaçōes do paciente
                </label>
                <textarea
                  id="message"
                  cols={30}
                  rows={9}
                  placeholder="Por favor, descreva aqui as informaçōes do paciente"
                  className="w-full border border-secondary rounded-lg placeholder-opacity-50 focus:ring-blue   px-5 py-4 font-body font-light  text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none  dark:text-primary"
                  {...methods.register("details")}
                />
              </div>

              <Button>Confirmar consulta</Button>
            </form>
          </FormProvider>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Agenda;
