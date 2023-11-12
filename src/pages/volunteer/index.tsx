import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Content } from "../home/Home";

const Volunteer = () => {
  return (
    <>
      <div className="bg-white">
        <Header />
        <div className="container mx-auto">
          <h1 className="pt-5 font-body text-4xl font-semibold  text-white dark:text-primary md:text-4xl lg:text-4xl">
            Veterinário Voluntário
          </h1>

          <div className="pt-3 sm:w-3/4 mb-4">
            <p className="font-body text-xl font-light text-primary dark:text-primary">
              Escolha uma opcao
            </p>
          </div>
          <div className="flex min-h-full my-12 ">
            <div className="flex p-6 rounded-3xl bg-[#059669]/50 hover:bg-[#059669]/100  text-center align-center justify-center  w-100 mx-12 ">
              <Link to="register" className="">
                <Content
                  title="Veterinário"
                  desc="Cadastre sua agenda e local de atendimento"
                />
              </Link>
            </div>
            <div className="flex p-6 rounded-3xl bg-[#0ea5e9]/50 hover:bg-[#0ea5e9]/100  text-center align-center justify-center  w-100 mx-12 ">
              <Link to="agenda" className="">
                <Content
                  title="Paciente"
                  desc="Consulte os horarios disponiveis para antendimento"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />;
    </>
  );
};

export default Volunteer;
