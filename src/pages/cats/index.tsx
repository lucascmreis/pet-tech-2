import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Post = ({ name = '', desc = '', src = '' }) => {
    return (
        <div className="flex w-1/3 flex-wrap p-2">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div style={{
                    backgroundImage: `url(${src})`,
                    width: '100%',
                    height: 300,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}
const Elderly = () => {
    return (
        <div className="bg-white">
            <Header />
            <div className="container mx-auto">
                <h1 className="pt-5 font-body text-4xl font-semibold  text-white dark:text-primary md:text-4xl lg:text-4xl">
                    Gatos
                </h1>

                <div className="pt-3 sm:w-3/4">
                    <p className="font-body text-xl font-light text-primary dark:text-primary">
                        Cuidados com a saúde do seu bichano! Como evitar contaminações!
                    </p>
                </div>
                <div className="-m-1 flex flex-wrap md:-m-2 pt-10">
                    <Post
                        src="https://images.unsplash.com/photo-1604916287784-c324202b3205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
                        name="Luna"
                        desc="Descrição: Luna é uma gata preta de olhos verdes brilhantes. Ela é muito brincalhona e adora perseguir bolinhas de lã."
                    />
                    <Post
                        src="https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        name="Simba"
                        desc=" Descrição: Simba é um gato laranja com listras pretas. Ele é um tanto preguiçoso, mas adora cochilar ao sol e receber carinho na barriga."
                    />
                    <Post
                        src="https://images.unsplash.com/photo-1606208427954-aa8319c4815e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        name="Mia"
                        desc="Descrição: Mia é uma gata branca e cinza com manchas delicadas. Ela é bastante curiosa e está sempre explorando novos cantinhos da casa."
                    />
                    <Post
                        src="https://images.unsplash.com/photo-1472053217156-31b42df2319c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        name="Oliver"
                        desc="Descrição: Oliver é um gato cinza de pelos longos. Ele é um verdadeiro galanteador, adora brincar e é extremamente afetuoso com todos."
                    />
                    <Post
                        src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80"
                        name="Chloe"
                        desc="Descrição: Chloe é uma gata tigrada de pelos curtos. Ela é uma excelente caçadora e adora passar horas perseguindo insetos no jardim."
                    />
                    <Post
                        src="https://images.unsplash.com/photo-1588943011511-ef303c037195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        name="Max"
                        desc="Descrição: Max é um gato preto e branco com um olhar penetrante. Ele é um tanto reservado, mas quando se solta, mostra um lado brincalhão e amoroso."
                    />
                    <Post
                        src="https://images.unsplash.com/photo-1555036803-4b8b34490116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        name="Bella"
                        desc="Descrição: Bella é uma gata siamesa de olhos azuis brilhantes. Ela é muito falante e adora 'conversar' com seus donos, expressando suas opiniões."
                    />
                    <Post
                        src="https://images.unsplash.com/photo-1610121172299-5f3c7c55bccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        name="Milo"
                        desc="Descrição: Milo é um gato marrom com manchas pretas. Ele é um explorador nato e está sempre se aventurando pelos lugares mais inusitados da casa."
                    />
                    <Post
                        src="https://images.unsplash.com/photo-1653645065498-a52a1046d3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        name="Lucy"
                        desc="Descrição: Lucy é uma gata tricolor de pelos macios. Ela é uma verdadeira companheira e gosta de se aconchegar no colo de seus donos enquanto assistem TV."
                    />
                    <Post
                        src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        name="Charlie"
                        desc="Descrição: Charlie é um gato ruivo de porte imponente. Ele é um verdadeiro líder entre os felinos, sempre defendendo seu território com garra e coragem."
                    />
                    <Post
                        src="https://images.unsplash.com/photo-1604916287784-c324202b3205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
                        name="Luna"
                        desc="Descrição: Luna é uma gata preta de olhos verdes brilhantes. Ela é muito brincalhona e adora perseguir bolinhas de lã."
                    />
                    <Post
                        src="https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        name="Simba"
                        desc=" Descrição: Simba é um gato laranja com listras pretas. Ele é um tanto preguiçoso, mas adora cochilar ao sol e receber carinho na barriga."
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Elderly