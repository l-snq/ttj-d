import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <div>
          *****************************************************************************
        </div>
        <h1>Hi. My name is ttjd. Welcome to my site.</h1>
        <div className={styles.description}>
          <p>
              I am a programmer, modder and overall I love to tinker with things.
            I have been programming since i was 14 years old. What started as just making mods for a game quickly grew into an obsession with building software.
            <a href={'https://github.com/tastetest/'}>My portfolio</a>
          </p>
        </div>
    </main>
  );
}
