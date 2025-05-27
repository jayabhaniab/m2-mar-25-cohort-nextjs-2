// import styles from "./Button.module.css";

// export default function Button({text}) {
//     return (
//         <button className={styles.button}>{text}</button>
//     )
// }




"use client";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
`;

export default function Button({text}) {
    return <StyledButton>{text}</StyledButton>
}