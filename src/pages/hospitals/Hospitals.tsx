import { useEffect, useState } from 'react';
import { Container } from './styledHospitals';
import { getHospitals, Hospital } from '../../services/hospitals'

function Home() {
  const [hospitals, setHospitals] = useState<Hospital[]>([])
  useEffect(() => {
    setHospitals(getHospitals({ page: 1, perPage: 10 }))

  }, [])
  console.log(hospitals)

  return (
    <Container>
      Aqui haverá os hospitais
      {hospitals.map(({ address, name }) => {
        return (
          <div key={name} className="p-2 border-black border-2 min-w-[200px] max-w-fit flex flex-col justify-center items-center">
            <h2 className='font-xl'>{name}</h2>
            <p>{address}</p>
          </div>
        )
      })}
    </Container>
  );
}

export default Home;
