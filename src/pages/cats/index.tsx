import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Posts from '../../components/Posts'

const Elderly = () => {
    return (
        <div className="bg-primary">
            <Header />
            <Posts title="Gatos" desc="Cuidados com a saude do seu bichano! Como evitar contaminacoes!" />
            <Footer />
        </div>
    )
}

export default Elderly