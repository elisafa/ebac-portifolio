import { Card, LinkBotao } from './styles'

import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
