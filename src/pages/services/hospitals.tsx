export interface Hospital {
    name: string,
    address: string
    phone: string
  }
  
  interface Pagination {
    page: number,
    perPage: number
  }
  
  export const getHospitals = ({ page, perPage }: Pagination): Hospital[] => {
    const hospitals = [
      { name: 'hospital 1', phone: '(11) 98989-1414', address: 'rua sedan' },
      { name: 'hospital 2', phone: '(11) 98989-1414', address: 'rua nova york' },
      { name: 'hospital 3', phone: '(11) 98989-1414', address: 'rua candelaria' },
      { name: 'hospital 4', phone: '(11) 98989-1414', address: 'rua sapopemba' },
      { name: 'hospital 5', phone: '(11) 98989-1414', address: 'rua ibere' },
      { name: 'hospital 6', phone: '(11) 98989-1414', address: 'rua oratorio' },
      { name: 'hospital 7', phone: '(11) 98989-1414', address: 'rua outra' },
      { name: 'hospital 8', phone: '(11) 98989-1414', address: 'rua mais uma' },
      { name: 'hospital 9', phone: '(11) 98989-1414', address: 'rua aquela' },
      { name: 'hospital 10', phone: '(11) 98989-1414', address: 'rua aquela' },
      { name: 'hospital 11', phone: '(11) 98989-1414', address: 'rua aquela' },
      { name: 'hospital 12', phone: '(11) 98989-1414', address: 'rua aquela' }
    ]
  return hospitals.slice((page-1)*perPage, page*perPage)
  }