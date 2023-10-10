import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'



interface Author {
    name: string; 
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishiedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;

}

export function Post({ post }: PostProps) {

    const [comments, setComments] = useState([
        'Post bem bacana eim?!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publisedDateFormated = format(post.publishiedAt, "d 'de' LLLL 'ás' HH:mm'h'", { locale: ptBR })

    const publisedDateRelativeToNow = formatDistanceToNow(post.publishiedAt, {
        locale: ptBR,
        addSuffix: true
    })


    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);

        setNewCommentText('')

    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;

        })
        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('esse campó é obrigatório')
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header >
                <div className={styles.author}>
                    <Avatar
                        src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publisedDateFormated} dateTime={post.publishiedAt.toISOString()}>
                    {publisedDateRelativeToNow}
                </time>
            </header>


            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    }
                    else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }

                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

                <strong>Deixe seu Feedback</strong>

                <textarea
                    name='comment'
                    value={newCommentText}
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })}
            </div>

        </article>
    )
}
