import  { useState } from 'react'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void ;
}
export function Comment({ content, onDeleteComment }: CommentProps) {
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((i) => {
            return i + 1
        });
    }
    

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/119521842?v=4" alt=""  />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Moraes</strong>
                            <time title="2023-09-28 às 14:59" dateTime='2023-09-28 14:59'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>
                        {content}
                    </p>

                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp  />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
                
            </div>



        </div>
    )
}
