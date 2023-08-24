import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
  ThumbUp,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";

function Post() {
  return (
    <Card sx={{my:3}} >
      <CardHeader
        avatar={
          <Avatar src="https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104_1280.jpg"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John Doe"
      />
      <CardMedia
        component="img"
        height="40%"
        image="https://images.pexels.com/photos/11629649/pexels-photo-11629649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Badge badgeContent={1}>
          <Checkbox icon={<ThumbUpOffAlt />} checkedIcon={<ThumbUp />} />
        </Badge>
        <Badge badgeContent={2}>
          <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </Badge>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
