import React from "react";
import styles from "./photography.module.css";
import Header from "../components/Header";

export default ()=>{
    return(
        <div className={styles.photo}>
            <h1>This is h1</h1>
            <h2>This is h2</h2>
            <h3>This is h3</h3>
            <h4>This is h4</h4>
            <Header text="This is a header from Photography" subtext="The is the sub heading from Photography"/>
        </div>
       
    );
}