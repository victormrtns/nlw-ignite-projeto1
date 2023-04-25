import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react';
export function Sidebar (){
    return(
        // Classe pai é o aside className, referencio ela no css
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
             src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
             />
            <div className={styles.profile}>
                <img className= {styles.avatar} src="https://avatars.githubusercontent.com/u/88071929?v=4"/>
                <strong>Victor Hugo</strong>
                <span>Full Stack Developer</span>
            </div>

            <footer>
                <a href="#">
                <PencilLine size = {20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}