interface CardProps {
  img: string
  title: string
  desc: string
  link: string
  learning: [string?, string?, string?, string?, string?, string?]
  tech: [string?, string?, string?, string?, string?, string?, string?]
}

export function Card({ img, title, desc, learning, tech, link }: CardProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-gray-700 w-80 h-96 rounded-[4px] mb-8 hover:-translate-y-5 transition duration-300">
      <div className="bg-grayTheme-900 mx-4 mt-4 mb-2 h-36 rounded-md overflow-hidden">
        <img className="w-full" src={img} alt="" />
      </div>

      <div className="mx-4 text-center">
        <span className="text-2xl font-bold">{title}</span>
      </div>

      <div className="border-b-2 border-background mx-4 my-2"></div>

      <div className="mx-4 mt-1 max-h-40 overflow-y-auto scrollbar-hide">
        <h5 className="text-center text-lg font-semibold">Aprendizados</h5>
        <br />
        {learning.map((learn) => (
          <h5 className="text-center mb-1">{learn}</h5>
        ))}
        <div className="border-b-2 border-background my-4 "></div>
        <h5 className="text-center text-lg font-semibold">Tecnologias</h5>
        <br />
        {tech.map((learn) => (
          <h5 className="text-center mb-1">{learn}</h5>
        ))}
        <div className="border-b-2 border-background my-4 "></div>
        <h5 className="text-center text-lg font-semibold">Descrição</h5>
        <br />
        <span className="text-white text-base">{desc}</span>
      </div>
    </a>
  )
}
