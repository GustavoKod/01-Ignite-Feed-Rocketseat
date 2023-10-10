
import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1695192665858-09995afefef0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" alt="" />

            <div className={styles.profile}>
                <Avatar 
                    src="https://portalpopline.com.br/wp-content/uploads/2022/12/avatar-capa-3.jpg"/>
                <strong>Avatar</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu Perfil</a>
            </footer>
        </aside>
    )
}

export default Sidebar