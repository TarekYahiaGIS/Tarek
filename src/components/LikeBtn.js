import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Like() {
  const getUri = "https://porfolio-backend.vercel.app/likes/getLikes";
  const postUri = "https://porfolio-backend.vercel.app/likes/updateLikes";

  const [numLike, updateLike] = useState(0);
  const [likeCounter, updateCounter] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [likeClass, updateClass] = useState("far fa-heart");

  useEffect(() => {
    axios
      .get(getUri)
      .then((res) => {
        updateLike(res.data.data);
        setBtnDisabled(false);
      })
      .catch((err) => {
        console.error("Failed to fetch likes:", err);
      });
  }, []);

  const clickHandler = () => {
    updateClass("far fa-heart animate-like");
    updateLike((prev) => prev + 1);
    updateCounter((prev) => prev + 1);

    if (likeCounter >= 2) {
      setBtnDisabled(true); // Disable after 3rd click
    }

    axios
      .post(postUri)
      .then((res) => console.log(res.data.status))
      .catch((err) => console.error("Failed to update likes:", err));

    setTimeout(() => {
      updateClass("far fa-heart");
    }, 500);
  };

  return (
    <Nav.Item className="like-item">
      <Button className="like-btn" onClick={clickHandler} disabled={btnDisabled}>
        <i className={likeClass} style={{ color: "#fb6fcd" }}></i> {numLike}
      </Button>
    </Nav.Item>
  );
}

export default Like;
