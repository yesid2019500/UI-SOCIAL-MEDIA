import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import React, { useState } from 'react';


const StyledModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent: "center"
})

const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  // justifyContent: "center"
  gap:"10px",
  marginBottom: "20px"
})

const Add = () => {

    const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip onClick={e=> setOpen(true)}
    title="Delete"
     sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30} }}
     
     
     >
     <Fab color="primary" aria-label="add">
        <AddIcon />
    </Fab>
    </Tooltip>
<StyledModal
  open={open}
  onClose={e=> setOpen(false)}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
   
   <Typography variant="h6" color="gray" textAlign="center" >
      Crate post
   </Typography>
   <UserBox>
   <Avatar alt="Travis Howard" src="https://images.mediotiempo.com/hmjMf0u6c-IwdqWInhPFxIgd_M8=/936x566/uploads/media/2020/08/19/samuel-eto-o-3.jpg" />

   <Typography variant="span" fontWeight={500} color="gray" textAlign="center" >
      Yessi Angulo
   </Typography>
   </UserBox>
   <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind ?"
          variant="standard"
        />
         <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
        </Stack>
        <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add