import Image from "next/image";
import { AnimatedGroup } from "../ui/animated-group";

export default function Banner(){
    return(
        <AnimatedGroup
      className='md:grid grid-cols-2 gap-4 mt-20 p-8 md:grid-cols-3 lg:grid-cols-4 flex flex-col'
      preset='scale'
      
    >
      <Image
      width={300}
      height={500}
        src='/banner.png'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-[4px] border'
      />
      <Image
      width={300}
      height={500}
        src='/habitue.png'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-[4px] border'
      />
      <Image
      width={300}
      height={500}
        src='/scorpion.png'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-[4px]  border'
      />
      <Image
      width={300}
      height={500}
        src='/iree.png'
        alt='impressionist painting, uploaded to Cosmos'
        className='h-auto w-full rounded-[4px] border '
      />
    </AnimatedGroup>
    )
}