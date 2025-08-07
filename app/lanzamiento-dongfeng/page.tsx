import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SecondTextScroll from "@/components/second-text";
import FirstTextScroll from "@/components/first-text";
import ArmandoTextScroll from "@/components/armando-text";
import ThirdTextScroll from "@/components/third-text";
import FourthTextScroll from "@/components/fourth-text";
import FifthTextScroll from "@/components/fifth-text";
import SixthTextScroll from "@/components/sixth-text";

const HomePage = () => {
    return (
        <>
            <div className="relative w-full h-96 sm:h-167 md:h-167 flex flex-col items-center text-center">
                <Image
                    src="/fondo.svg"
                    alt="fondo"
                    fill
                    priority
                    className="object-cover z-0"/>

                <Image
                    src="/texto_1.svg"
                    alt="texto"
                    width={280}
                    height={100}
                    className="absolute z-10 top-[15%] left-1/2 -translate-x-1/2"
                />

                <div className="absolute z-10 top-[35%]">
                    <FirstTextScroll />
                </div>

                <ArmandoTextScroll />

                <div className="absolute z-10 top-[75%]">
                    <SecondTextScroll />
                </div>
            </div>

            <div className="bg-white h-1 my-1"/>
            
            <Image src={"/img17.jpg"} alt={"imagen_de_camiones"} width={800} height={500} className="w-full h-auto"/>
            
            <div className="bg-[#ec1a2d] h-1 my-1"/>

            <div className="flex justify-start my-10">
                <Badge variant={"outline"} className="text-destructive bg-white font-bold rounded-s-none rounded-e-2xl px-15">Fecha</Badge>
            </div>

            <div className="text-center">
                <ThirdTextScroll />
                <br />
                <br />
                <FourthTextScroll />
            </div>

            <div className="text-center">
                <a href="https://maps.app.goo.gl/g1qCRRVge4Y88Jw67" target="_blank" rel="noopener noreferrer">
                    <Button variant={"default"} size={"sm"} className="bg-[#ed1b2f] rounded-2xl text-xs font-extrabold px-8 my-10">CÓMO LLEGAR</Button>
                </a>
            </div>

            <div className="text-center mb-10">
                <FifthTextScroll />
            </div>

            <div className="bg-white h-1 my-1"/>

            <Image src={"/img16.jpg"} alt={"imagen_de_camión"} width={800} height={500} className="w-full h-auto"/>
            
            <div className="bg-[#ec1a2d] h-1 my-1"/>
            
            <div className="relative w-full h-96 sm:h-167 md:h-167 flex flex-col items-center text-center">
                <Image src="/fondo.svg" alt="fondo" fill priority className="object-cover z-0"/>

                <div className="absolute z-10 top-[15%] left-0">
                    <Badge variant={"default"} className="bg-[#ed1b2f] font-bold rounded-s-none rounded-e-2xl px-15">Asistencia</Badge>
                </div>

                <div className="absolute z-10 top-[40%]">
                    <SixthTextScroll />
                </div>

                <div className="absolute z-10 top-[75%]">
                   <a href="https://invitacion.influenci.ar" target="_blank" rel="noopener noreferrer">
                        <Button variant={"default"} size={"sm"} className="bg-[#ed1b2f] rounded-2xl text-xs font-extrabold px-8">CONFIRMAR</Button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default HomePage;