import Image from "next/image"
export default function Hero() {
    return(
        <div className="w-full h-screen">
            <div className="absolute z-10 w-full h-full sm:flex">
                <div className="hidden sm:flex w-full"></div>
            <div className="w-full h-full flex flex-col items-start justify-start text-white p-4 pt-34 lg:pt-52 xl:pl-40 xl:pt-40 2xl:pt-96">
                <p className="font-bold lg:text-2xl xl:text-3xl 2xl:text-5xl">Empowering Farmers, Sustaining Nature</p>
                <p className="lg:text-xl xl:text-2xl 2xl:text-4xl">Promoting sustainable agriculture and organic farming in Maridi.</p>
            </div>
            </div>
            <div className="absolute w-full h-full">
                <Image src="/img/hero.jpg" alt="" width={1920} height={1280} className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}