import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Hospital, getHospitals } from '../services/hospitals';
import { GoBack, Icon, ItemTitle, PageContainer, PageTitle } from './styledHospitals';

function Home() {
  const [hospitals, setHospitals] = useState<Hospital[]>([])
  useEffect(() => {
    setHospitals(getHospitals({ page: 1, perPage: 10 }))

  }, [])

  return (
    <PageContainer>
      <Link to="/"><GoBack title="voltar">{'<'}</GoBack></Link>
      <PageTitle>Hospitais e Clínicas</PageTitle>
      {hospitals.map(({ address, name }) => {
        return (
          <div key={name} className="p-2 border-black border-2 min-w-[200px] max-w-fit flex flex-col justify-center items-center">
            <ItemTitle>{name}</ItemTitle>
            <p>{address}</p>
            <Icon src="phone.png"/>
          </div>
        )
      })}
    </PageContainer>
  );
}

export default Home;
