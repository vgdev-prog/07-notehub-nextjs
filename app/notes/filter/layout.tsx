import {ReactNode} from "react";
import css from './layout.module.css';

interface NotesLayoutProps {
    children: ReactNode;
    sidebar: ReactNode;
}

const NotesLayout = ({children, sidebar, modal}: NotesLayoutProps) => {
    return (
        <div className={css.container}>
            <div className={css.sidebar}>
                {sidebar}
            </div>
            <div className={css.main}>
                {children}
            </div>
        </div>
    );
};

export default NotesLayout;