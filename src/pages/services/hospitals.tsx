export interface Hospital {
    name: string,
    address: string
  }
  
  interface Pagination {
    page: number,
    perPage: number
  }
  
  export const getHospitals = ({ page, perPage }: Pagination): Hospital[] => {
    console.log(page, perPage)
    return [{ name: 'hospital 1', address: 'rua aquela' }]
  
  }