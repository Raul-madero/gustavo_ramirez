import Image from "next/image"
import { Container, Carousel, CarouselCaption, CarouselItem } from "react-bootstrap"
import blog from "../../img/construir.jpg"
import importacion from "../../img/importaciones.jpg"

const Temas = () => {
    return (
        <Container className="d-flex flex-column align-items-center justify-content-center mt-5">
            <h2 className="text-center">Temas de interes</h2>
            <Carousel className="mt-2">
                <CarouselItem>
                    <Image alt="Temas" style={{maxWidth: "100%", height: "300px"}} src={blog} />
                    <CarouselCaption>
                        <h3 className="text-bg-dark bg-opacity-50">Vas a Construir</h3>
                        <p className="text-bg-dark bg-opacity-50">Conoce los tramites ante IMSS</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <Image style={{maxWidth: "500px", height: "300px"}} alt="Temas" src={importacion} />
                    <CarouselCaption>
                        <h3 className="text-bg-dark bg-opacity-50">Importacion de bienes, ¿Deducible?</h3>
                        <p className="text-bg-dark bg-opacity-50">¿Se pueden deducir los bienes que importamos, conoce mas aqui.</p>
                    </CarouselCaption>
                </CarouselItem>
            </Carousel>
        </Container>
    )
}

export default Temas