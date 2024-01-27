import { Titulo as TituloEstilo } from './styles'

export type TituloProps = {
  children: string
  fontSize?: number
  textAlingn?: string
}

const Titulo = (props: TituloProps) => {
  return (
    <>
      <TituloEstilo textAlingn={props.textAlingn} fontSize={props.fontSize}>
        {props.children}
      </TituloEstilo>
    </>
  )
}

export default Titulo
