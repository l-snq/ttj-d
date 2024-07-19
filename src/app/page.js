import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
	<div className={styles.description}>
		<h1>Hi. My name is lsnq. Welcome to my site.</h1>
		  <p>
		      I am a programmer, modder and overall I love to tinker with things.
		    I have been programming since i was 14 years old. What started as just making mods for a game quickly grew into an obsession with building software.
		    <a href={'https://github.com/l-snq/'}> 🤠 My portfolio 🤠</a>
		  </p>
		  <p>
	  		Feel free to check out my latest project an app launcher for wlroots based compositors in linux:
	  		<a className={styles.project} href={'https://github.com/l-snq/tau/'}>👉 Tau 👈</a>
	  		
		  </p>
        </div>
        <div className={styles.description}>
        </div>
    </main>
  );
}
