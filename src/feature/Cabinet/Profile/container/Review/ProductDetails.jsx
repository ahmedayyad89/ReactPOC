import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import useStyles from "./styles";

// const products = [
//   { name: "Product 1", desc: "A nice thing", price: "$9.99" },
//   { name: "Product 2", desc: "Another thing", price: "$3.45" },
//   { name: "Product 3", desc: "Something else", price: "$6.51" },
//   { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
//   { name: "Shipping", desc: "", price: "Free" },
// ];

function ProductDetails(props) {
  const classes = useStyles();
  console.log(props, "-=--==-=-=-=-=-=-==- at details");
  return (
    <List disablePadding>
      {/* {products.map(product => (
        <ListItem className={classes.listItem} key={product.name}>
          <ListItemText primary={product.name} secondary={product.desc} />
          <Typography variant="body2">{product.price}</Typography>
        </ListItem>
      ))} */}
      <ListItem className={classes.listItem}>
        <ListItemText primary="Full Name" />
        <Typography
          gutterBottom
        >{`${props.values.firstName} ${props.values.lastName}`}</Typography>
        <br />
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary="Address" />
        <Typography gutterBottom>{`${props.values.address}`}</Typography>
        <br />
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary="City" />
        <Typography gutterBottom>{`${props.values.city}`}</Typography>
        <br />

        {/* <ListItemText primary="LastName" />
        <Typography variant="subtitle1" className={classes.total}>
          {props.values.Lastname}
        </Typography> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary="State" />
        <Typography gutterBottom>{`${props.values.state}`}</Typography>
        <br />

        {/* <ListItemText primary="LastName" />
        <Typography variant="subtitle1" className={classes.total}>
          {props.values.Lastname}
        </Typography> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary="Country" />
        <Typography gutterBottom>{`${props.values.country}`}</Typography>
        <br />
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary="Zipcode" />
        <Typography gutterBottom>{`${props.values.zipcode}`}</Typography>
        <br />
      </ListItem>
      {Object.keys(props.filePreviews).map((fileName, index) => (
        <>
          {props.filePreviews[fileName].length > 0 && (
            <>
              <ListItem className={classes.listItem} key={index}>
                <ListItemText
                  primary={fileName.slice(0, fileName.length - 1)}
                />
                {props.filePreviews[fileName].map((file, anotherIndex) => (
                  <img
                    key={anotherIndex}
                    alt="example"
                    style={{ width: "100px" }}
                    src={file.preview}
                  />
                ))}
              </ListItem>
            </>
          )}
        </>
      ))}
    </List>
  );
}

export default ProductDetails;
