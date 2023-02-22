import './Banner.css'

interface BannerProps {
    imagem: string
    alt?: string
}

const Banner = ({ imagem, alt }: BannerProps) => {

    return (
        <header className="banner">
            <img src={imagem} alt={alt} />
        </header>
    )
}

export default Banner