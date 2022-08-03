import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img 
        src="https://github.com/matheusribas.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <div>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Matheus Felipe</strong>
                <time title='02 de Agosto às 16:07h' dateTime='2022-08-02 16:07:00'>Cerca de 1h atrás</time>
              </div>

              <button title='Deletar comentário'>
                <Trash size={24} />
              </button>
            </header>

            <p>Muito bom Devon, parabéns!!</p>
          </div>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}