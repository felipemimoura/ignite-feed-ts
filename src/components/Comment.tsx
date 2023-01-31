import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";
interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void
}
export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);
  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeCount = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/felipemimoura.png"
        alt="Imagem de perfil do usuário"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Moura</strong>
              <time
                title="23 de janeiro de 2023 as 17H23"
                dateTime="20223-01-23 17:13:00"
              >
                {" "}
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
