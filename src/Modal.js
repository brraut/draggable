import { Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useRef, useState } from "react";

function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsDragging(false);
  };
  const modalRef = useRef(null);
  const headerRef = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isDragging, setIsDragging] = useState(0);

  function handleCheck({ target }) {
    if (target != headerRef.current) {
      setIsDragging(false);
    }
  }
  function onMouseMove({ movementX, movementY }) {
    const modal = modalRef.current;

    if (isDragging) {
      let position = window.getComputedStyle(modal);
      let left = parseInt(position.left);
      let top = parseInt(position.top);
      setX(left + movementX);
      setY(top + movementY);
    }
  }

  function onMouseDown(e) {
    console.log("down");
    setIsDragging(true);
  }

  function onMouseUp() {
    console.log("up");
    setIsDragging(false);
  }

  const styles = {
    position: "absolute",
    top: ` ${y ? y + "px" : "50%"}`,
    left: ` ${x ? x + "px" : "50%"}`,
    transform: `translate(-50%, -50%)`,
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const headerStyle = {
    cursor: "all-scroll",
    padding: "10px",
    background: "gray",
    display: "flex",
    justifyContent: "space-between",
  };

  const container = {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
  };
  // const classes = styles();
  const handleWindow = () => {
    let newVariable = window.open(
      "/modalPage",
      "scrollbars=1, resizable=1, directories=1, toolbar=1, height= 400, width=400 fullscreen=0"
    );
    newVariable.modalComponent = "this is from modal";
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ ...container }} onMouseMove={handleCheck}>
          <div style={{ ...styles }} ref={modalRef}>
            <div
              className="header"
              onMouseMove={onMouseMove}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              style={{ ...headerStyle }}
              ref={headerRef}
            >
              Header Goes here
              <span onClick={handleWindow}>window</span>
              <span onClick={handleClose}>close</span>
            </div>
            <ChildComponent />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Home;

const ChildComponent = () => {
  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </>
  );
};
