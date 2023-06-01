import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Contact = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="container mx-auto">
        <div>
          <h1 className="pb-8 pt-5 font-body text-4xl font-semibold  text-primary dark:text-primary md:text-4xl lg:text-4xl">
            Equipe
          </h1>
          <ul className="list-disc pl-10 flex flex-wrap gap-2">
            <li className="font-body text-lg font-light text-primary p-4 min-w-[200px] text-center list-none border-green-dark bg-green-light dark:text-primary">
              <span className="font-medium">Fabiola Tagliatti</span>
            </li>
            <li className="font-body text-lg font-light  text-primary p-4 min-w-[200px] text-center list-none border-green-dark bg-green-light dark:text-primary">
              <span className="font-medium">Gilson Fais</span>
            </li>
            <li className="font-body text-lg font-light  text-primary p-4 min-w-[200px] text-center list-none border-green-dark bg-green-light dark:text-primary">
              <span className="font-medium">Ivan Zegales Laura</span>
            </li>
            <li className="font-body text-lg font-light  text-primary p-4 min-w-[200px] text-center list-none border-green-dark bg-green-light dark:text-primary">
              <span className="font-medium">Lucas Koji Kaeriyama</span>
            </li>
            <li className="font-body text-lg font-light  text-primary p-4 min-w-[200px] text-center list-none border-green-dark bg-green-light dark:text-primary">
              <span className="font-medium">Marco Antonio Oliveira Filho</span>
              <a
                href="https://www.linkedin.com/in/maanolfi"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2"
              >
                <img
                  src="linkedin.svg"
                  alt="rodrigo github"
                  height={30}
                  width={30}
                />
                Marco
              </a>
            </li>
            <li className="font-body text-lg font-light  text-primary p-4 min-w-[200px] text-center list-none border-green-dark bg-green-light dark:text-primary">
              <span className="font-medium">Rodrigo Queiroz Yamagushi</span>
              <a
                href="https://github.com/teddiur/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <img
                  src="github-mark.svg"
                  alt="rodrigo github"
                  height={30}
                  width={30}
                />
                teddiur
              </a>
            </li>
          </ul>
        </div>
        <div className="py-16 lg:py-20">
          <h1 className="pt-5 font-body text-4xl font-semibold  text-primary dark:text-primary md:text-4xl lg:text-4xl">
            Contato
          </h1>
          <div className="pr-2 pt-3 sm:pt-0">
            <p className="font-body text-xl font-light  text-primary dark:text-primary">
              Tem alguma dúvida, sugestão, elogio? Escreve aqui.
            </p>
          </div>
          <form className="pt-16">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:mr-3 sm:w-1/2">
                <label className="block pb-3 font-body font-medium  text-primary dark:text-primary">
                  Seu nome
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Como devo te chamar?"
                  className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light  text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-primary"
                />
              </div>
              <div className="w-full pt-6 sm:ml-3 sm:w-1/2 sm:pt-0">
                <label className="block pb-3 font-body font-medium  text-primary dark:text-primary">
                  Endereço de email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Escreva seu email aqui"
                  className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light  text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-primary"
                />
              </div>
            </div>
            <div className="w-full pt-6 sm:pt-10">
              <label className="block pb-3 font-body font-medium  text-primary dark:text-primary">
                Mensagem
              </label>
              <textarea
                id="message"
                cols={30}
                rows={9}
                className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light  text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:text-primary"
              ></textarea>
            </div>
            <button className="mt-10 mb-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-primary transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl">
              Mandar mensagem
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
