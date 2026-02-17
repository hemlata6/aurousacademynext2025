'use client';

import React from 'react'
import Grid from '@mui/material/Grid2';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import Endpoints from '@/constant/endpoints';
import moment from 'moment';
import parse from 'html-react-parser';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AnnouncementDialog = ({ handleClose, data, from }) => {
  console.log(from);
  return (
    <div>
      <Grid container>
        <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }} position={'relative'}>
          <Box m={'20px'}>
            <Grid container>
              <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                display={'flex'}
                justifyContent={from === 'section1' ? 'flex-end' : 'start'}
                alignItems={'end'}
                p={'5px'}
              >
                {
                  from === 'section1' ? <IconButton><CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} /></IconButton> : <IconButton><ArrowBackIcon onClick={handleClose} sx={{ cursor: 'pointer' }} /></IconButton>
                }
              </Grid>
              <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <Typography
                  fontSize={'18px'}
                  fontWeight={'500'}
                  textAlign={'center'}
                  sx={{
                    textDecoration: 'underline'
                  }}
                  py={1}
                >
                  {data?.title}
                </Typography>
                <Typography
                  fontSize={'18px'}
                  fontWeight={'500'}
                  textAlign={'end'}
                >
                  {moment(data?.createdAt).format('DD MMMM YYYY')}
                </Typography>
                <Box>
                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                    p={2}
                  >
                    <img width={['40%', '40%']} height={'100%'} alt='' src={Endpoints.mediaBaseUrl + data?.image} />
                  </Box>
                  <Typography
                    fontSize={'16px'}
                    fontWeight={'500'}
                    textAlign={'center'}
                  >
                    {parse(data?.announcement || '')}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default AnnouncementDialog


