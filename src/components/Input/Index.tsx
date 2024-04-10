import { ForwardedRef, forwardRef } from "react";
import styles from "./Input.module.css";

const Index = forwardRef((props: any, ref: ForwardedRef<HTMLInputElement>) => {
    return <input className={styles.input} ref={ref} />;
});

Index.displayName = "Input";

export default Index;
