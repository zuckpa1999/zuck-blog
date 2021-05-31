import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useLayoutEffect, useState } from "react";
export default function Cardblog({ date, topic, tags, image }) {
  const classes = useStyles();
  const [width] = useMediaQuery();
  function useMediaQuery() {
    const [screenSize, setScreenSize] = useState([0, 0]);

    useLayoutEffect(() => {
      function updateScreenSize() {
        setScreenSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateScreenSize);
      updateScreenSize();
      return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return screenSize;
  }
  return (
    <Card
      className={width <= 600 ? classes.rootCardMobile : classes.rootCardTablet}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={topic}
          height="140"
          image={image}
          title={topic}
        />
        <CardContent>
          <div className={classes.cardContentDetailFirstRow}>
            <Typography className={classes.cardContentTopic}>
              {topic}
            </Typography>
            <Typography className={classes.cardContentDate}>{date}</Typography>
          </div>
          <div className={classes.cardContentDetailSecondRow}>
            {tags === undefined
              ? null
              : tags.map((tag) => (
                  <Button variant="outlined" className={classes.cardContentTag}>
                    <Typography className={classes.cardContentText}>
                      {tag === undefined ? null : tag}
                    </Typography>
                  </Button>
                ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
const useStyles = makeStyles((theme) => ({
  rootCardMobile: {
    marginTop: "3%",
    width: "93%",
  },
  rootCardTablet: {
    marginTop: "3%",
    width: "88%",
  },
  cardContentTopic: {
    fontSize: "1.22em",
  },
  cardContentText: {
    fontSize: "0.6em",
    fontWeight: 350,
  },
  cardContentDate: {
    /* marginLeft: "16%", */
    marginTop: "2%",
    fontSize: "0.8em",
    fontWeight: 180,
    color: "#8B8282",
    right: "50px",
  },
  cardContentTag: {
    borderRadius: "15em",
    marginRight: "2%",
  },
  cardContentDetailFirstRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContentDetailSecondRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: "2%",
  },
}));
