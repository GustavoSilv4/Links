import { Card } from '../components/Card'

export function Projects() {
  return (
    <div className=" mt-8 flex flex-col justify-start items-center md:grid md:grid-cols-2 md:justify-items-center md:mx-10 lg:mx-32 xl:grid-cols-3 2xl:mx-72">
      <Card
        img="https://imgur.com/q5Kchhj.png"
        title="Todo-List"
        desc="Esse Todo-list consiste em um desafio proposto no primeiro módulo do curso ignite da Rocketseat, para colocarmos em prática tudo que nós aprendemos neste módulo."
        link="https://todolist.gustavosilv4.com.br"
        learning={[
          'Conceitos básicos de React (Componentes, Props, useState, Imutabilidade)',
          'CSS Modules;',
          'TypeScript.',
        ]}
        tech={['ReactJS;', 'CSS Modules;', 'TypeScript.']}
      />
      <Card
        img="https://imgur.com/9VL7aBW.png"
        title="Coffee-Delivery"
        desc="Esse projeto consistiu em site para delivery de cafés, projeto proposto no segundo módulo do curso ignite da Rocketseat, para colocarmos em prática tudo que nós aprendemos neste módulo. "
        link="https://coffee-delivery.gustavosilv4.com.br"
        learning={[
          'Conceitos básicos de React (Componentes, Props, useState, Imutabilidade)',
          'CSS Modules;',
          'TypeScript.',
        ]}
        tech={['ReactJS;', 'CSS Modules;', 'TypeScript.']}
      />
    </div>
  )
}
