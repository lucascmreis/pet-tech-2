import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HospitalRepository, IHospital } from '../services/hospitals';
import { GoBack, Icon, ItemCard, ItemTitle, PageContainer, PageTitle, PhoneLine } from './styledHospitals';

function Home() {
  const [hospitals, setHospitals] = useState<IHospital[]>([])
  const [hospitalRepository] = useState<HospitalRepository>(() => new HospitalRepository(10))

  useEffect(() => {
    async function first() {
      const firstHospitals = await hospitalRepository.getFirstPage()
      setHospitals(firstHospitals)
    }
    first()

  }, [hospitalRepository])

  return (
    <PageContainer>
      <Link to="/"><GoBack title="voltar">VOLTAR</GoBack></Link>
      <PageTitle>Hospitais e Clínicas</PageTitle>
      {hospitals.map(({ address, name, phone }) => {
        return (
          <ItemCard key={name} className="">
            <ItemTitle>{name}</ItemTitle>
            <p>{address}</p>
            <PhoneLine>
              <Icon src="phone.png" /> {phone}
            </PhoneLine>
          </ItemCard>
        )
      })}
    </PageContainer>
  );
}

export default Home;
