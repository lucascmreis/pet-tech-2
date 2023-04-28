export interface Hospital {
    name: string,
    address: string
  }
  
  interface Pagination {
    page: number,
    perPage: number
  }
  
  export const getHospitals = ({ page, perPage }: Pagination): Hospital[] => {
    const hospitals = [
      { name: 'hospital 1', address: 'rua sedan' },
      { name: 'hospital 2', address: 'rua nova york' },
      { name: 'hospital 3', address: 'rua candelaria' },
      { name: 'hospital 4', address: 'rua sapopemba' },
      { name: 'hospital 5', address: 'rua ibere' },
      { name: 'hospital 6', address: 'rua oratorio' },
      { name: 'hospital 7', address: 'rua outra' },
      { name: 'hospital 8', address: 'rua mais uma' },
      { name: 'hospital 9', address: 'rua aquela' },
      { name: 'hospital 10', address: 'rua aquela' },
      { name: 'hospital 11', address: 'rua aquela' },
      { name: 'hospital 12', address: 'rua aquela' }
    ]
  return hospitals.slice((page-1)*perPage, page*perPage)
  }