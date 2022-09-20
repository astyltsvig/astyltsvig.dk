import styles from './Navigation.module.css'

export default function Navigation() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navlinks}>
				<div className={styles.menu}>
					<a href='/'>Home</a>
					<a href='/about'>About</a>
					<a href='/cases'>Cases</a>
				</div>
			</div>
		</nav>
	)
}
