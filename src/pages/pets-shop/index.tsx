import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PetsShop = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="container mx-auto rounded bg-blue-light shadow">
        <div className="mb-5 max-w-[600px] mx-auto">
          <h3 className="font-body text-xl font-light text-primary dark:text-primary">
            PetLove
          </h3>
          <p className="font-body text-xl font-light text-primary dark:text-primary">
            O Pet Shop Utinga é um estabelecimento em Santo André, São Paulo,
            especializado em cuidados e serviços para animais de estimação, com
            foco em gatos. Oferecem uma ampla variedade de produtos e serviços
            para atender às necessidades dos felinos, incluindo alimentos
            nutritivos, acessórios, produtos de higiene e serviços de banho e
            tosa. No Pet Shop Utinga, eles se preocupam com o bem-estar e a
            saúde dos gatos, e estão comprometidos em fornecer um ambiente
            acolhedor e atendimento de qualidade para esses adoráveis
            companheiros felinos.
          </p>
          <p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29244.19766332244!2d-46.53685769999998!3d-23.6213729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4292745d090d%3A0xce3310e0400af493!2sPet%20Shop%20Utinga!5e0!3m2!1spt-BR!2sbr!4v1685581258049!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
        </div>
        <div className="mb-5 max-w-[600px] mx-auto  rounded bg-blue-light shadow">
          <h3 className="font-body text-xl font-light text-primary dark:text-primary">
            Pet Love
          </h3>
          <p className="font-body text-xl font-light text-primary dark:text-primary">
            A Pet Love é dedicada ao bem-estar dos animais de estimação em Santo
            André, São Paulo. Oferecemos uma variedade de serviços, incluindo
            cuidados médicos, como consultas veterinárias e vacinação, além de
            serviços de banho e tosa. Nossa equipe altamente qualificada está
            comprometida em fornecer cuidados amorosos e atendimento
            personalizado para garantir o melhor cuidado possível aos animais. A
            Pet Love é uma referência na promoção do bem-estar animal e na busca
            por lares amorosos para os animais abandonados.
          </p>
          <p>
            <div className="flex justify-center p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31184.76432057781!2d-46.54813654649033!3d-23.644393858550494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spet%20love!5e0!3m2!1spt-BR!2sbr!4v1685582447590!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PetsShop;
