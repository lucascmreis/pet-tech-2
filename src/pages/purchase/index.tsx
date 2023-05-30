import Header from '../../components/Header'
import Footer from '../../components/Footer'


const Purchase = () => {
    return (
        <div className="bg-white">
            <Header />
            <div className="container mx-auto">
                <div>
                    <div className="border-b border-grey-lighter pb-8 sm:pb-12">
                        <h1 className="pb-8 pt-5 font-body text-4xl font-semibold  text-white dark:text-primary md:text-4xl lg:text-4xl">
                            Comprar ou adotar
                        </h1>
                        <div className="flex items-center pt-5 sm:pt-8">
                            <p className="pr-2 font-body font-light text-primary dark:text-primary">
                                July 19, 2020
                            </p>
                            <span className="vdark:text-primary font-body text-grey">//</span>
                            <p className="pl-2 font-body font-light text-primary dark:text-primary">
                                4 min read
                            </p>
                        </div>
                    </div>
                    <div
                        className="prose prose max-w-none border-b border-grey-lighter py-8 dark:prose-dark sm:py-12"
                    >
                        <p>
                            Comparar a compra de gatos com a adoção de gatos é um tema relevante quando se discute a responsabilidade de trazer um novo felino para o lar. Ambas as opções têm suas peculiaridades e é essencial entender os prós e os contras antes de tomar uma decisão.
                        </p>
                        <p>
                            Ao comprar um gato de raça pura de um criador ou loja de animais, você geralmente tem a garantia de conhecer a linhagem, a aparência e algumas características do animal. Além disso, alguns compradores podem ter preferências específicas em termos de temperamento, pelagem ou raça. A compra de gatos pode ser uma opção adequada para aqueles que buscam gatos com traços específicos ou desejam participar de competições de beleza felina.
                        </p>
                        <p>
                            Por outro lado, a adoção de gatos de abrigos ou resgates é uma opção que merece consideração. Existem inúmeros gatos abandonados ou sem lar esperando por uma segunda chance. A adoção de um gato resgatado oferece a oportunidade de dar a ele um lar amoroso e seguro. Os gatos adotados geralmente são esterilizados, vacinados e examinados por um veterinário, o que pode economizar custos iniciais de cuidados de saúde. Além disso, muitos gatos resgatados são misturas de raças ou possuem características únicas, tornando-os igualmente especiais e adoráveis.
                        </p>
                        <p>
                            Ao adotar um gato, você está contribuindo para a redução do número de animais abandonados e auxiliando organizações que trabalham arduamente para cuidar desses animais necessitados. Adicionalmente, a conexão emocional que se estabelece ao adotar um gato pode ser profundamente gratificante, pois você está oferecendo uma nova vida a um ser que precisava desesperadamente de amor e segurança.
                        </p>
                        <p>
                            Independentemente da escolha, é crucial lembrar que trazer um gato para casa requer compromisso e responsabilidade. Todos os gatos precisam de cuidados adequados, incluindo alimentação adequada, atenção veterinária regular, estímulo físico e mental, e um ambiente seguro. É importante dedicar tempo e recursos para fornecer um ambiente saudável e amoroso, independentemente de ter comprado ou adotado um gato.
                        </p>
                        <p>
                            No final das contas, tanto a compra como a adoção de gatos podem ser ótimas opções, dependendo das necessidades e preferências individuais. O importante é garantir que a decisão seja tomada com consciência, considerando o bem-estar do gato e contribuindo para a promoção do cuidado animal responsável.
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Purchase