"use client";

import React from "react";
import styles from "./Button.module.css";

interface Props {
    children: React.ReactNode;
    handleOnClick: () => void;
}

const Index = (props: Props) => {
    const { children, handleOnClick, ...rest } = props;

    return (
        <button className={styles.button} onClick={handleOnClick} {...rest}>
            {children}
        </button>
    );
};

export default Index;
