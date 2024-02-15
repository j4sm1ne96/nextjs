import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import jsonData from '../../data.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ContainedButtons(this: any) {
    const data = jsonData.data.team.subTeamCard;
    let titles = []
    for (var i = 0; i < data.length; i++) {
        const titledata = JSON.stringify(data[i].title);
        const parsedtitle = JSON.parse(titledata);
        titles.push(parsedtitle)
    }

    let jobdesc = []
    for (var i = 0; i < data.length; i++) {
        const jobs = JSON.stringify(data[i].body);
        const parsedjob = JSON.parse(jobs);
        jobdesc.push(parsedjob)
    }

    let placeholder = []
    for (var i = 0; i < data.length; i++) {
        const placeholders = JSON.stringify(data[0].video[0].placeholder?.url);
        const parsedholder = JSON.parse(placeholders);
        placeholder.push(parsedholder);
    }

    let video = []
    for (var i = 0; i < data.length; i++) {
        const videodata = JSON.stringify(data[0].video[0].video?.url);
        const parsedvideo = JSON.parse(videodata)
        video.push(parsedvideo);
    }

    let cta = []
    for (var i = 0; i < data.length; i++) {
        const ctadata = JSON.stringify(data[0].cta[0].href);
        const parsedcta = JSON.parse(ctadata)
        cta.push(parsedcta);
    }

    const array = [];

    let handleChangeButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let currentindex = e.currentTarget.value;
        array.push({currentindex});
        console.log(currentindex);
    }
    let index = array.length;

  return (
    <Stack spacing={2}>
        <Box sx = {{display: {xs: 'none', sm: 'block'}, width: 1000, padding: 2, textAlign: 'center'}}>
            <Button onClick={(e) => handleChangeButton(e)} value={0} id='0' variant="outlined" sx={{margin:1}}>{titles[0]}</Button>
            <Button onClick={(e) => handleChangeButton(e)} value={1} id='1' variant="outlined" sx={{margin:1}}>{titles[1]}</Button>
            <Button onClick={(e) => handleChangeButton(e)} value={2} id='2' variant="outlined" sx={{margin:1}}>{titles[2]}</Button>
            <Button onClick={(e) => handleChangeButton(e)} value={3} id='3' variant="outlined" sx={{margin:1}}>{titles[3]}</Button>
            <Button onClick={(e) => handleChangeButton(e)} value={4} id='4' variant="outlined" sx={{margin:1}}>{titles[4]}</Button>
            <Button onClick={(e) => handleChangeButton(e)} value={5} id='5' variant="outlined" sx={{margin:1}}>{titles[5]}</Button>
            <Button onClick={(e) => handleChangeButton(e)} value={6} id='6' variant="outlined" sx={{margin:1}}>{titles[6]}</Button>
        </Box>
        <Card className = 'cardborder' sx={{display: {xs: 'none', sm: 'flex'}, width: 1000, borderBottom: 5, borderColor: '#FF7800'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: 500}}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography gutterBottom variant="h5" component="div">
                <h2>{titles[index]}</h2>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <p>{jobdesc[index]}</p>
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" size="small" href={cta[index]} target='_blank'>Find Jobs</Button>
            </CardActions>
        </Box>
        <CardMedia
            sx={{ width: 500}}
            image={placeholder[index]}
        />
        </Card>
    </Stack>
  );
}