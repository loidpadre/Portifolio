
import Link from "next/link";
import { TextEffect } from "../ui/text-effect";
import { Tilt } from "../ui/tilt";
import Image from "next/image";

export default function Projects() {
    return (
        <div className="text-center md:mt-60 mt-20" id="projects">
            <TextEffect per='char' preset='fade' className="text-zinc-500 text-lg">
                VEJA ALGUNS PROJETOS QUE ESTÃO NO AR!
     
            </TextEffect>
            <hr className="mt-10" />
            <div className="md:flex mt-10 md:flex-row justify-center items-center fmd:gap-10 flex flex-col gap-5">
                <Link href="https://habituee.vercel.app/" target="_blank">
                <Tilt rotationFactor={8} isRevese>
                    <div
                        style={{
                            borderRadius: '12px',
                        }}
                        className='flex max-w-[480px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
                    >
                        <Image
                        height={500}
                            width={500}
                            src='/habitue.png'
                            alt='Ghost in the shell - Kôkaku kidôtai'
                            className='h-48 w-full object-cover'
                        />
                        <div className='p-4 py-6'>

                            <p className='text-zinc-700 dark:text-zinc-400'>Habitue</p>
                        </div>
                    </div>
                </Tilt>
                </Link>
                <Link href="https://africanthoughts-com.vercel.app/" target="_blank">
                <Tilt rotationFactor={8} isRevese>
                    <div
                        style={{
                            borderRadius: '12px',
                        }}
                        className='flex max-w-[480px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
                    >
                        <Image
                        height={500}
                            src='/banner.png'
                            alt='habitue'
                            width={500}
                            className='h-48 w-full object-cover'
                        />
                        <div className='p-4 py-6'>

                            <p className='text-zinc-700 dark:text-zinc-400'>AfricanThoughts</p>
                        </div>
                    </div>
                </Tilt>
                </Link>
                <Link href="https://beatful-shoping-cart.vercel.app/Home" target="_blank">
                <Tilt rotationFactor={8} isRevese>
                    <div
                        style={{
                            borderRadius: '12px',
                        }}
                        className='flex max-w-[480px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
                    >
                        <Image
                            width={500}
                            height={500}
                            src='/shop.png'
                            alt='Ghost in the shell - Kôkaku kidôtai'
                            className='h-48 w-full object-cover'
                        />
                        <div className='p-4 py-6'>

                            <p className='text-zinc-700 dark:text-zinc-400'>Shoping cart</p>
                        </div>
                    </div>
                </Tilt>
                </Link>
            </div>
                        
            <div className="md:mt-60 mt-20 justify-center flex flex-col items-center">
            <div className="text-center my-10">
                            <h1 className="text-lg text-zinc-500">UMA DEMOSTRAÇÃO!</h1>
                            <hr />
                        </div>
                <video width="900" controls autoPlay
                    muted
                    loop
                    className="rounded">
                    <source src="/video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                </video>
            </div>
        </div>
    )
}