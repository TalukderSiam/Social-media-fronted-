import { Avatar, CardHeader, IconButton } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@material-ui/core';
const PopularUserCard = () => {
  return (
    <div>
       <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Button size='small'>
            Follow
          </Button>
        }
        title="Talukder siam"
        subheader="siam"
      />
    </div>
  )
}

export default PopularUserCard
