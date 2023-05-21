import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Posts from '../../components/Posts'

const Elderly = () => {
    return (
        <div className="bg-primary">
            <Header />
            <Posts title="Idoso" desc="Cuidadaos, dicas e solucoes para manter a saude dos idoso no convivio com seus gatos!" />
            <Footer />
        </div>
    )
}

export default Elderly