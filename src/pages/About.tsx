import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    aboutBox: {
      background: "rgba(70,70,70, 0.5)",
      marginTop: "6rem",
      height: "500px",
      width: "1000px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    aboutText: {
      color: "#000",
      opacity: "0.5",
      padding: "1rem",
    },
  })
);

const About: React.FunctionComponent = () => {
  /* Material-UI - classes */
  const classes = useStyles();

  return (
    <Grid container className={classes.aboutBox}>
      <Typography className={classes.aboutText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum
        maxime enim excepturi eligendi aperiam, ut laboriosam, cum nam nemo
        tempora consequuntur harum consequatur. Sit iure mollitia harum hic
        nesciunt dicta ipsum voluptas molestiae temporibus dolorum aperiam
        consequatur dolore odit asperiores doloribus, repellendus provident sint
        voluptate itaque labore a velit? Ipsum soluta esse omnis natus inventore
        delectus quisquam consectetur hic repellat, magni dolore illo commodi?
        Ut facilis labore distinctio repellat hic quis minus quas? Placeat
        laborum voluptate fuga quis harum. Provident voluptatum porro iure
        labore fugit ea non quidem consequatur voluptas! Delectus quaerat
        pariatur veritatis alias tenetur dolores libero laudantium odio rem
        atque totam magni quasi natus quia blanditiis cum, voluptate distinctio
        ipsum, unde facere. Aliquid numquam eos itaque corrupti nam accusantium
        qui sed accusamus iusto deleniti? Assumenda earum nihil aperiam sunt qui
        deleniti veritatis quo nostrum exercitationem, expedita fugit harum
        ipsam esse? Alias vel praesentium ea iste laborum, perspiciatis
        repellendus fugiat, odit ratione deleniti perferendis eos nihil earum
        vitae quas veritatis, non accusamus magni voluptate sit quam tenetur
        dicta nesciunt. Corporis cumque tempora ullam eveniet vero iusto?
        Asperiores ipsa fuga id dolor dolore aliquam reiciendis, delectus odit
        magnam libero accusamus, debitis optio, aut rem. Eaque officia illum
        minus blanditiis?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        commodi rem expedita quaerat tempore aliquam ullam odit esse enim omnis
        fugiat earum blanditiis inventore, quibusdam harum delectus nostrum
        facere corporis adipisci? Reprehenderit, nostrum placeat voluptas
        deserunt numquam obcaecati esse minus, molestias modi nisi eligendi
        tempora tempore commodi inventore temporibus recusandae quam, neque sint
        unde dolor blanditiis voluptate ratione. Perferendis, ipsa, incidunt
        aperiam nam quia sapiente maiores itaque iusto necessitatibus inventore,
        fugit optio culpa tempore. Perspiciatis animi quas in qui laborum ipsa
        placeat ex provident nobis, dolorum repudiandae corrupti nemo optio
        sapiente modi quos sunt rem? Labore cupiditate maxime necessitatibus
        alias!
      </Typography>
    </Grid>
  );
};

export default About;
