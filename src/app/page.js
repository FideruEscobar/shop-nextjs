import dynamic from 'next/dynamic'

const ProductsCard = dynamic(() => import('../components/ui/Card'))

export default function Home() {

  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <br/>
      <ProductsCard/>
    </div>
  );
}
