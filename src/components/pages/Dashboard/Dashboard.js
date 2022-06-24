import React from "react";
import styles from "./dashboard.module.css";
import axiosInstance from "../../../services/service";
import { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Dashboard = () => {
  const [shortLinks, setShortLinks] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axiosInstance
      .get("shortcut/list/")
      .then((res) => {
        setShortLinks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className={styles["dashboard_heading"]}>
        <h1>Dashboard</h1>
        <div className={styles["shortcut_container"]}>
          <div className={styles["shortcut_items"]}>
            {shortLinks?.map((shortLink, id) => {
              return (
                <a
                  href={shortLink.url}
                  target="_blank"
                  rel="noreferrer"
                  key={id}
                >
                  <Tooltip title={shortLink.name} placement="bottom">
                    <img
                      src={shortLink.url + "favicon.ico"}
                      alt="icon"
                      className={styles["shortcut-icons"]}
                    />
                  </Tooltip>
                </a>
              );
            })}

              <Tooltip title="Create Shortcut" placement="bottom">
                <Button
                  onClick={handleOpen}
                  className={styles["create_shortcut"]}
                  sx={{pt: 1,color: "#40BCDF"}}
                >
                  <FontAwesomeIcon icon={faPlus} size="3x" />
                </Button>
              </Tooltip>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2 }}
                    >
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
          </div>
        </div>
      </div>
      <div className={styles.dashboard_body}></div>
    </>
  );
};

export default Dashboard;
