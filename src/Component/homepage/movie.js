import React, { useEffect, useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import { Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { useHistory} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import FavoriteIcon from "@material-ui/icons/Favorite";



const axios = require("axios");


const Movie = () => {

  const history = useHistory()

  const onplay=()=>{
    history.push("./video")
    console.log(movies.index)
  }
//   const toogleVisiblity = () => {
//     setVisiblity((v) => !v);
    
// };

  const url = "https://forbit.tech/movizo/movies";

  const [movies,setmovies] = useState([]);


  useEffect(() => {
    if(movies.length===0){
      axios
      .get(url)
      .then((response) => {
        console.log(response.data)
        setmovies(response.data);
        
      })
      .catch((err) => console.log(err));
    }
   
  },[]);

 
  return (
   
   
        <Box>
          
           
      <Grid container display="flex">
        
        {movies.map((movies, index) => {
          return (
            <Grid item xs={2}  key={index} >
              <Card  style={{ maxWidth: 250, margin: 10 }}>
                <CardHeader subheader={movies.release_date} />
                <CardMedia
                  style={{
                    height: 0,
                    paddingTop: "56%", // 16:9
                  }}
                  image={movies.image_url}
                />
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    component="p"
                    style={{ textAlign: "center", height: 20 }}
                  >
                    {movies.title}
                  
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <Typography variant="subtitle1" >{movies.imdb_rating}</Typography>
                <Button  onClick={onplay}>play</Button>
             
              
                </CardActions>
                
        
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
   
  );
};

export default Movie;
