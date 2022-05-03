import React from "react";
import { resizeImage } from "../../share/tools";
import { calculateCreatedTime } from "../../share/utils";
import styles from "./Chat.module.scss";
function Chat(props) {
  return (
    <div className={styles.chat}>
      <img
        src={resizeImage(props.photoURL, "60", "60")}
        alt={`${props.name} `}
      />
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>{props.name}</h3>
          <p>{calculateCreatedTime(props.createdAt)}</p>
        </div>

        <p className={styles.message}>{props.text}</p>
      </div>
    </div>
  );
}

export default Chat;
