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
`
export const PageTitle = tw.h1`
text-4xl
font-extrabold
text-center
mb-10
`

export const ItemTitle = tw.h2`
text-2xl
font-bold
`

export const Icon = tw.img`
w-8
h-8`

export const GoBack = tw.div`
absolute
top-4
left-2
md:top-6
md:left-5
text-white
text-2xl`