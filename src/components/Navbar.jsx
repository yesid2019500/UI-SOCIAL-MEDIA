import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolBar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}))

const Icons = styled(Box)(({theme})=>({
 display:"none", 
 gap: "20px",
 alignItems:"center",
//  condicion para responsive imagen
// si esta mas arriba de small
[theme.breakpoints.up("sm")]:{
  display:"flex"
}
}))

const UserBox = styled(Box)(({theme})=>({
  display:"flex", 
  gap: "10px",
  alignItems:"center",

  // responsive
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }

 }))

const Navbar = () => {

const [open, setOpen] = useState(false)



  return (
    <AppBar position="sticky">
     <StyledToolBar>
        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}} >
            YA DEV
        </Typography>
        {/* logo */}
            <Pets sx={{display:{xs:"block", sm:"none"}}} />
            <Search> 
                <InputBase placeholder='Search...' />
            </Search>
            <Icons>
              <Badge badgeContent={4} color="error">
                <Mail  />
              </Badge>
              <Badge badgeContent={4} color="error">
                <Notifications  />
              </Badge>
              <Avatar sx={{width:30, height:30}}
               src="https://images.mediotiempo.com/hmjMf0u6c-IwdqWInhPFxIgd_M8=/936x566/uploads/media/2020/08/19/samuel-eto-o-3.jpg"
               
               onClick={ e => setOpen(true)}
               />
            </Icons>
            <UserBox  onClick={ e => setOpen(true)} >
            <Avatar sx={{width:30, height:30}} src="https://images.mediotiempo.com/hmjMf0u6c-IwdqWInhPFxIgd_M8=/936x566/uploads/media/2020/08/19/samuel-eto-o-3.jpg"/>
            <Typography variant="span" >
                Yessi Angulo
            </Typography>
            </UserBox>
     </StyledToolBar>

     <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar