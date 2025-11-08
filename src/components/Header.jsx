import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

function Header() {

    const projectInfo = "The Resume Builder App aims to solve this problem by providing an easy-to-use platform that helps users design and generate personalized resumes quickly and efficiently.The app offers a user-friendly interface where individuals can input their personal details, educational background, work experience, and skills. It then formats the information into a clean, professional template that can be customized to match the user’s career goals and industry standards."

  return (
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'50px'} src="https://www.thegreatapps.com/application/upload/Apps/2019/07/resume-maker-app-147.png" alt="logo" />
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>rBuilder</Link>
          </Typography>
          <Tooltip title ={projectInfo}>
          <Button color="inherit">About Us</Button>
        </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header