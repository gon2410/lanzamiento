import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const HomePage = () => {
    return (
        <>
            <div className="flex justify-start my-25">
                <Badge variant={"default"} className="bg-[#ed1b2f] rounded-s-none rounded-e-2xl px-15 ">Evento</Badge>
            </div>
            <div className="text-center my-25">
                <p>ARMANDO DEL RIO</p>
                <p>CONCESIONARIO OFICIAL</p>
                <br />
                <br />
                <br />
                <p className="text-xl">Lanzamiento oficial en Argentina.</p>
                <br />
                <br />
                <p className="text-xl">Una nueva generación de líderes</p>
                <p className="text-xl">desembarca en el país.</p>
                <br />
                <p className="text-sm">El futuro del transporte comercial está por comenzar.</p>
            </div>
            <div className="bg-white h-1 my-1"/>
            <Image src={"/img17.jpg"} alt={"segunda_imagen_de_camión"} width={800} height={500} className="w-full h-auto"/>
            <div className="bg-[#ec1a2d] h-1 my-1"/>
            <div className="flex justify-start my-10">
                <Badge variant={"outline"} className="text-destructive bg-white rounded-s-none rounded-e-2xl px-15">Fecha</Badge>
            </div>

            <div className="text-center mb-10">
                <p className="text-2xl">jueves</p>
                <p>14.08.25</p>
                <br />
                <br />
                <p>19:00hs</p>
                <p>Av. Juan B. Justo 5181,</p>
                <p>X5001GZA Córdoba.</p>
                <br />
                <a href="https://maps.app.goo.gl/g1qCRRVge4Y88Jw67" target="_blank" rel="noopener noreferrer">
                    <Button variant={"default"} size={"sm"} className="bg-[#ed1b2f] rounded-2xl text-xs font-extrabold px-8 my-10">CÓMO LLEGAR</Button>
                </a>
                <br />
                <br />
                <p>Vestimenta sugerida:</p>
                <p>Elegante sport.</p>
            </div>

            <div className="bg-white h-1 my-1"/>
            <Image src={"/img16.jpg"} alt={"imagen_de_camión"} width={800} height={500} className="w-full h-auto"/>
            <div className="bg-[#ec1a2d] h-1 my-1"/>
            
            <div className="flex justify-start my-10">
                <Badge variant={"default"} className="bg-[#ed1b2f] rounded-s-none rounded-e-2xl px-15">Asistencia</Badge>
            </div>

            <div className="text-center mb-15">
                <p>Te pedimos que confirmes tu asistencia.</p>
                <p>Recibirás por e-mail un código QR para</p>
                <p>tu acreditación el día del evento.</p>
                <br />
                <br />
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <Button variant={"default"} size={"sm"} className="bg-[#ed1b2f] rounded-2xl text-xs font-extrabold px-8">CONFIRMAR</Button>
                </a>
            </div>
        </>
    )
}

export default HomePage