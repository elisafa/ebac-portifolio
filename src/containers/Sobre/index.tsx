import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => {
  return (
    <>
      <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo="secundario">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          possimus ex ducimus placeat aliquam facilis, nihil incidunt vel quia
          non pariatur, eligendi unde qui maxime minus fugiat porro quam
          officia!
        </Paragrafo>
        <GithubSecao>
          <img src="https://github-readme-stats.vercel.app/api?username=elisafa&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=elisafa&layout=compact&langs_count=7&theme=dracula" />
        </GithubSecao>
      </section>
    </>
  )
}

export default Sobre
