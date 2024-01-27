import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
  textAlingn?: string
}

const Paragrafo = ({
  textAlingn,
  fontSize,
  children,
  tipo = 'principal'
}: Props) => {
  return (
    <P textAlingn={textAlingn} fontSize={fontSize} tipo={tipo}>
      {children}
    </P>
  )
}

export default Paragrafo
