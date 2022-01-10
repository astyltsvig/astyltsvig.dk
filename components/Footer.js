import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="mailto:astyltsvig@gmail.com">astyltsvig@gmail.com</a>
        {"\n"}
        CVR: 36163771
      </footer>
    </>
  )
}
