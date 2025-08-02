import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
    return (
        <>
            <div className="relative w-full h-96 sm:h-167 md:h-167 flex flex-col items-center text-center">
                <Image src="/fondo.svg" alt="fondo" fill priority className="object-cover z-0"/>

                <Image
                    src="/texto_1.svg"
                    alt="texto"
                    width={280}
                    height={100}
                    className="absolute z-10 top-[15%] left-1/2 -translate-x-1/2"
                />

                <div style={{ fontFamily: "helvetica" }} className="absolute z-10 top-[35%]">
                    <p>Inauguración del primer concesionario</p>
                    <p>Oficial Dongfeng en Argentina</p>
                </div>

                <Image
                    src="/armando.svg"
                    alt="texto"
                    width={400}
                    height={200}
                    className="absolute z-10 top-[55%] left-1/2 -translate-x-1/2"
                />

                <div style={{ fontFamily: "helvetica" }} className="absolute z-10 top-[75%]">
                    <p>El futuro del transporte comercial</p>
                    <p>en Córdoba está por llegar</p>
                </div>
            </div>

            <div className="bg-white h-1 my-1"/>
            
            <Image src={"/img17.jpg"} alt={"imagen_de_camiones"} width={800} height={500} className="w-full h-auto"/>
            
            <div className="bg-[#ec1a2d] h-1 my-1"/>

            <div className="flex justify-start my-10">
                <Badge variant={"outline"} className="text-destructive bg-white font-bold rounded-s-none rounded-e-2xl px-15">Fecha</Badge>
            </div>

            <div style={{ fontFamily: "helvetica"}}  className="text-center">
                <div className="text-4xl space-y-0">
                    <p>jueves</p>
                    <p>14.08.25</p>
                </div>
                <br />
                <br />
                <p>19:00hs</p>
                <p>Av. Juan B. Justo 5181,</p>
                <p>X5001GZA Córdoba.</p>
            </div>

            <div className="text-center">
                <a href="https://maps.app.goo.gl/g1qCRRVge4Y88Jw67" target="_blank" rel="noopener noreferrer">
                    <Button variant={"default"} size={"sm"} className="bg-[#ed1b2f] rounded-2xl text-xs font-extrabold px-8 my-10">CÓMO LLEGAR</Button>
                </a>
            </div>

            <div style={{ fontFamily: "helvetica" }}  className="text-center mb-10">
                <p>Vestimenta sugerida:</p>
                <p>Elegante sport.</p>
            </div>

            <div className="bg-white h-1 my-1"/>
            <Image src={"/img16.jpg"} alt={"imagen_de_camión"} width={800} height={500} className="w-full h-auto"/>
            <div className="bg-[#ec1a2d] h-1 my-1"/>
            
            <div className="relative w-full h-96 sm:h-167 md:h-167 flex flex-col items-center text-center">
                <Image src="/fondo.svg" alt="fondo" fill priority className="object-cover z-0"/>

                <div className="absolute z-10 top-[15%] left-0">
                    <Badge variant={"default"} className="bg-[#ed1b2f] font-bold rounded-s-none rounded-e-2xl px-15">Asistencia</Badge>
                </div>
                <div style={{ fontFamily: "helvetica" }} className="absolute z-10 top-[40%]">
                    <p>Te pedimos que confirmes tu asistencia.</p>
                    <p>Recibirás por e-mail un código QR para</p>
                    <p>tu acreditación el día del evento.</p>
                </div>

                <div className="absolute z-10 top-[75%]">
                   <a href="/" target="_blank" rel="noopener noreferrer">
                        <Button variant={"default"} size={"sm"} className="bg-[#ed1b2f] rounded-2xl text-xs font-extrabold px-8">CONFIRMAR</Button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default HomePage