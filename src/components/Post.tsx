import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";


interface Author {
  name: string,
  role: string,
  avatarUrl: string
}
interface Content {
  type: 'link' | 'paragraph',
  content: string
}
interface PostProps {
  author: Author,
  publishedAt: Date,
  content: Content[]
}

export const Post = ({ author, publishedAt, content }: PostProps) => {
  const [comments, setCommets] = useState(["Um post muito bacana"]);
  const [textComment, setTextComment] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH'h'mm",
    {
      locale: ptBR,
    }
  );


  const handleAddNewComment = (event: FormEvent) => {
    event.preventDefault(); // Evitando o reload do envio do formulário

    setCommets([...comments, textComment]);
    setTextComment("");
  };

  const handleNewComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')
    setTextComment(event.target.value);
  };

  const handleInvalidComment = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const deleteComment = (commnetToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commnetToDelete)

    setCommets(commentsWithoutDeletedOne)
  }

  const isNewCommentsIsEmpyt = textComment.length === 0
  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <p>{author.role}</p>
          </div>
        </div>
        <time
          title="23 de janeiro de 2023 as 17H23"
          dateTime="20223-01-23 17:13:00"
        >
          {" "}
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleAddNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          name="comment"
          value={textComment}
          onChange={handleNewComment}
          onInvalid={handleInvalidComment}
          placeholder="Escreva um comentário..."
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentsIsEmpyt}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment} content={comment}  onDeleteComment={deleteComment}/>
        ))}
      </div>
      
    </article>
  );
};
