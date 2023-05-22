import tw from "tailwind-styled-components"

export const PageContainer = tw.div`
flex
flex-col
w-full
bg-slate-500
min-h-screen
justify-start
items-center
pt-3
sm:pt-5
bg-blue-bg
pb-10
`
export const PageTitle = tw.h1`
text-4xl
font-extrabold
text-center
mb-10
text-slate-200
mt-10
sm:mt-0
`

export const ItemTitle = tw.h2`
text-2xl
font-bold
`
export const ItemCard = tw.div`
p-2
 border-collapse
 mb-4
 border-black
 border-2
 min-w-[300px]
 max-w-fit
 flex flex-col
  justify-center
  items-center
  bg-slate-200
  rounded
`

export const Icon = tw.img`
w-8
h-8
`

export const GoBack = tw.div`
absolute
top-4
left-2
md:top-6
md:left-5
text-white
text-2xl
underline
`

export const PhoneLine = tw.div`
flex
justify-center
items-center
`

export const Button = tw.button`
rounded
bg-green
p-2
border-2
outline-2
outline
mt-2
text-white
`

export const Form = tw.form`
flex
flex-col
p-2
rounded
`

export const Input = tw.input`
p-2
border-b-2
`

export const ErrorMessage = tw.p`
text-pink
`