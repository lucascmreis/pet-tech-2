import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactPaginate from 'react-paginate';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { HospitalRepository, IHospital } from '../../services/hospitals';
import { Button, ErrorMessage, Form, Icon, Input, ItemCard, ItemTitle, PageContainer, PageTitle, PhoneLine } from './styledHospitals';

type FormValues = {
  name: string,
  address: string,
  phone: string
}

function Home() {
  const [hospitals, setHospitals] = useState<IHospital[]>([])
  const [totalPages, setTotalPages] = useState<number>(0)
  const [hospitalRepository] = useState<HospitalRepository>(() => new HospitalRepository(10))
  const dialogRef = useRef<HTMLDialogElement>(null)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();

  useEffect(() => {
    async function first() {
      const firstHospitals = await hospitalRepository.getFirstPage()
      setHospitals(firstHospitals)
      const total = await hospitalRepository.getTotal() / hospitalRepository.perPage;
      setTotalPages(Math.ceil(total))
    }
    first()

  }, [hospitalRepository])

  const refresh = async () => {
    const hosps = await hospitalRepository.getFirstPage()
    setHospitals(hosps)
  }


  return (
    <div className="bg-white">
      <Header />
      <PageContainer>
        <div className="flex items-center pb-6">
          <h3
            className="ml-3 font-body text-2xl font-semibold text-primary dark:text-primary"
          >
            <PageTitle>Hospitais e Clínicas</PageTitle>
          </h3>
        </div>
        {hospitals.map(({ address, name, phone }) => {
          return (
            <ItemCard key={name + address} className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6">
              <span className="w-9/10 pr-8">
                <h4 className="font-body text-lg font-semibold text-primary dark:text-primary">
                  <ItemTitle>{name}</ItemTitle>
                </h4>
                <p className="font-body font-light text-primary dark:text-primary">{address}</p>
              </span>
              <span className="w-1/10">
                <PhoneLine>
                  <Icon src="phone.png" /> {phone}
                </PhoneLine>
              </span>
            </ItemCard>
          )
        })}
        <ReactPaginate
          breakLabel="..."
          nextLabel="próximo >"
          previousLabel="< anterior"
          onPageChange={() => { }}
          pageCount={totalPages}
          renderOnZeroPageCount={null}
          className="flex gap-2 text-primary text-lg"
          activeClassName='text-green-400 underline'
        />

        <Button
          className="ml-3 font-body text-2xl bg-blue-light font-semibold text-primary dark:text-secondary"
          onClick={() => dialogRef.current?.showModal()
          }>Adicionar Hospital ou Clínica</Button>
        <dialog
          ref={dialogRef}
        >
          <Form
            onSubmit={handleSubmit(async (hospital) => {
              await hospitalRepository.addHospital(hospital)
              dialogRef.current?.close()
              reset()
              await refresh()
            })}
          >
            <label htmlFor="name">Nome da Clínica ou Hospital*</label>
            <Input id="name" {...register('name', { required: "Campo obrigatório" })} />
            {errors.name && <ErrorMessage role="alert">{errors.name?.message}</ErrorMessage>}
            <label htmlFor="phone">Telefone para Contato*</label>
            <Input id="phone" {...register('phone', {
              required: "Campo obrigatório",
              pattern: /^\(\d{2}\) \d{5}-\d{4}$/
            })} />
            {errors.phone && <ErrorMessage role="alert">{errors.phone?.message || 'O telefone tem que ser no formato (99) 99999-9999'}</ErrorMessage>}
            <label htmlFor="address">Endereço</label>
            <Input id="address" {...register('address', { required: "Campo obrigatório" })} />
            {errors.address && <ErrorMessage role="alert">{errors.address?.message}</ErrorMessage>}
            <Button
              type="submit"
            >Salvar</Button>
          </Form>
          <Button className='bg-pink' onClick={() => dialogRef.current?.close()}>Fechar</Button>
        </dialog>
      </PageContainer>
      <Footer />
    </div>
  );
}

export default Home;
