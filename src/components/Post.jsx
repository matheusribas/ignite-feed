import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar}
            src="https://github.com/matheusribas.png"
          />
          <div className={styles.authorInfo}>
            <strong>Matheus Felipe</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='02 de Agosto às 16:07h' dateTime='2022-08-02 16:07:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href='#'>jane.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Escreva um comentário...'
        />
        
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}