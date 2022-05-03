import React from "react";
import Chat from "./Chat";
import styles from "./ListChat.module.scss";
function ListChat(props) {
  const filterData = props.messages.filter((msg) => msg.movie_id === props.id);
  return (
    <div className={styles.listChat}>
      {filterData.length === 0 ? (
        <p>No comments yet!</p>
      ) : (
        filterData.map(
          ({ movie_id, text, photoURL, name, createdAt }, index) => (
            <Chat
              key={index}
              photoURL={photoURL}
              name={name}
              text={text}
              createdAt={createdAt?.seconds * 1000}
            />
          )
        )
      )}
    </div>
  );
}

export default ListChat;
