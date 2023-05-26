import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Post = ({ title = '', desc = '', tag = '' }) => {
    return (
        <div className="border-b border-grey-lighter pb-8">
            <a href="#"
                className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-primary dark:hover:text-secondary">
                {title}
            </a>
            <p className="pr-2 font-body font-light text-primary dark:text-primary">
                {desc}
            </p>
            <div className="flex items-center pt-4">
                <p className="pr-2 font-body font-light text-primary dark:text-primary">
                    July 19, 2020
                </p>
                <span className="font-body text-grey dark:text-primary">//</span>
                <p className="pl-2 font-body font-light text-primary dark:text-primary">
                    4 min read
                </p>
            </div>
        </div>
    )
}
const Elderly = () => {
    return (
        <div className="bg-white">
            <Header />
            <div className="container mx-auto">               
                <h1 className="pb-8 pt-5 font-body text-4xl font-semibold  text-white dark:text-primary md:text-4xl lg:text-4xl">
                    Idoso
                </h1>

                <div className="pt-3 sm:w-3/4">
                    <p className="font-body text-xl font-light text-primary dark:text-primary">
                        Cuidados, dicas e soluções para manter a saúde dos idosos no convívio com seus gatos!
                    </p>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="pt-3 lg:pt-12">
                    <Post title="10 Dicas Essenciais para uma Casa Segura para Gatos" desc="Descubra como criar um ambiente seguro e livre de riscos para o seu gato, com dicas sobre plantas tóxicas, produtos de limpeza seguros e precauções em ambientes externos." />
                    <Post title="Os Melhores Brinquedos para Manter Seu Gato Ativo e Entretido" desc="Explore uma variedade de brinquedos interativos que estimulam o exercício físico e mental do seu gato, mantendo-o entretido e evitando comportamentos indesejados." />
                    <Post title="Alimentação Adequada: Nutrição e Dietas para Gatos" desc="Aprenda sobre as necessidades nutricionais dos gatos, os diferentes tipos de alimentos disponíveis, como escolher a ração ideal e dicas para evitar problemas de alimentação" />
                    <Post title="Cuidados com a Pelagem: Como Manter o Pelo do seu Gato Saudável" desc="Descubra os segredos para manter a pelagem do seu gato brilhante e saudável, incluindo técnicas de escovação, banho adequado e dicas para lidar com nós e bolas de pelo." />
                    <Post title="A Importância da Caixa de Areia: Dicas de Higiene e Treinamento" desc="Saiba como escolher a caixa de areia correta, como ensinar seu gato a usá-la, dicas de higiene e soluções para problemas de eliminação inadequada." />
                    <Post title="Cuidando da Saúde do seu Gato: Exames Veterinários e Vacinação" desc="Descubra a importância de levar seu gato ao veterinário regularmente, quais exames são essenciais, o calendário de vacinação recomendado e dicas para lidar com visitas ao consultório." />
                    <Post title="Dicas para Lidar com o Estresse em Gatos: Técnicas de Relaxamento" desc="Explore estratégias para ajudar seu gato a lidar com situações estressantes, incluindo técnicas de relaxamento, uso de feromônios sintéticos e criação de ambientes tranquilos." />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Elderly