import React, {FC} from 'react';
import css from "./ContentLayout.module.css"

interface LayoutProps {
    children: React.ReactNode;
}

const ContentLayout: FC<LayoutProps> = ({children}) => {
    return (
        <div className={css.container}>
            {children}
        </div>
    );
};

export default ContentLayout;