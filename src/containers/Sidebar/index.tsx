import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => {
  return (
    <>
      <aside>
        <SidebarContainer>
          <Avatar />
          <Titulo textAlingn={'center'} fontSize={20}>
            Elisafá
          </Titulo>
          <Paragrafo textAlingn={'center'} fontSize={16} tipo="secundario">
            elisafa
          </Paragrafo>
          <Descricao tipo="principal" textAlingn={'center'}>
            Engenheiro FullStack
          </Descricao>
          <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
        </SidebarContainer>
      </aside>
    </>
  )
}

export default Sidebar
