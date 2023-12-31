import { Children } from "react"
import styles from "./Button.module.css"

interface Props {
  children: String;
  // onClickHandle : () => void
}

export const Button = ({children}: Props) => {
  return (
    <button className={styles.button} >{children}</button>
  )
}

export default Button
