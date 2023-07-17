import { Children } from "react"

interface Props {
  children: String;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  onClickHandle : () => void
}
export const Button = ({children, color='primary', onClickHandle}: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClickHandle}>{children}</button>
  )
}

export default Button
