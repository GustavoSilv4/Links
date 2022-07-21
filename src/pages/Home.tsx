import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Screencast,
} from 'phosphor-react'

import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="w-full mt-16 flex flex-col justify-center items-center">
      <div className="bg-gray-700 p-10 rounded-lg drop-shadow-md">
        <header className="flex flex-col gap-6 justify-center items-center">
          <div className="rounded-full outline outline-4 outline-redTheme-600 p-1">
            <img
              className="w-24 rounded-full "
              src="https://github.com/gustavosilv4.png"
              alt="Foto Github"
            />
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-3xl font-bold">Gustavo Silva</h1>
            <span className="text-lg text-gray-400">Front-end Developer</span>
          </div>
        </header>

        <main className="w-80 flex flex-col gap-4 justify-center items-center mt-12">
          <a
            className="w-full flex justify-center items-center gap-2 text-center font-bold bg-redTheme-700 p-4 rounded-md hover:bg-redTheme-900 transition-colors"
            href="https://github.com/gustavosilv4">
            <GithubLogo size={25} weight="light" /> GITHUB
          </a>
          <a
            className="w-full flex justify-center items-center gap-2 text-center font-bold bg-redTheme-700 p-4 rounded-md hover:bg-redTheme-900 transition-colors"
            href="https://www.instagram.com/gustavo_silva48/">
            <InstagramLogo size={25} weight="light" /> INSTAGRAM
          </a>
          <a
            className="w-full flex justify-center items-center gap-2 text-center font-bold bg-redTheme-700 p-4 rounded-md hover:bg-redTheme-900 transition-colors"
            href="https://www.linkedin.com/in/gustavo-silva-3b7a15234/">
            <LinkedinLogo size={25} weight="light" /> LINKEDIN
          </a>

          <Link
            to={{ pathname: '/projects' }}
            className="w-full flex justify-center items-center gap-2 text-center font-bold bg-redTheme-700 p-4 rounded-md hover:bg-redTheme-900 transition-colors">
            <Screencast size={25} weight="light" /> PROJETOS
          </Link>
        </main>
      </div>

      <footer className="mt-12">
        <span>Criado por Gustavo Silva 😁</span>
      </footer>
    </div>
  )
}
