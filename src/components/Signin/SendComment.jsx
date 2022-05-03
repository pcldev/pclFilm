import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import sendBtn from "../../assets/sendBtn.png";
import styles from "./SendComment.module.scss";
function SendComment(props) {
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const sendComment = async (e) => {
    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser;
    const clone_message = message;
    setMessage("");
    await db.collection("comments").add({
      text: clone_message,
      photoURL,
      uid,
      movie_id: id,
      name: displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <div className={styles.sendComment}>
      <form onSubmit={sendComment}>
        <input
          type="text"
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.stopPropagation()}
          onKeyUp={(e) => e.stopPropagation()}
          onKeyPress={(e) => e.stopPropagation()}
          required
        />
        <button type="submit" className={` ${styles.btn_send}`}>
          <img src={sendBtn} alt="" />
        </button>
      </form>
    </div>
  );
}

export default SendComment;
