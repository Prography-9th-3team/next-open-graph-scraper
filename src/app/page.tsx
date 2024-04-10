/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState } from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Index";
import Input from "@/components/Input/Index";
import { IOpenGraphResponse } from "./api/og/route";

export default function Home() {
    const [state, setState] = useState<IOpenGraphResponse>();
    const inputRef = useRef(null);

    const fetchGetOgData = async () => {
        if (inputRef.current) {
            const target = inputRef.current as HTMLInputElement;
            const value = target.value;

            fetch("/api/og?url=" + value, {
                method: "get",
            })
                .then((res) => res.json())
                .then((data) => setState(data));
        }
    };

    const handleGetMetaData = () => {
        console.time();
        fetchGetOgData();
        console.timeEnd();
    };

    return (
        <main className={styles.main}>
            <Input ref={inputRef} />
            <Button handleOnClick={handleGetMetaData}>OG 가져오기</Button>

            {state && (
                <div>
                    <img src={state.image} alt={state.title} height={300} />
                    <h1>{state.title}</h1>
                    <p>{state.description}</p>
                </div>
            )}
        </main>
    );
}
