import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import jsonData from '../../data.json';
import StackMob from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function BasicSelect() {

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

  const [title, setTitle] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTitle(event.target.value as string);
  };

  let index = 0;

  return (
    <StackMob spacing={2}>
        <Box sx={{ minWidth: 200, marginTop: 4}}>
        <FormControl sx={{ minWidth: 200, marginTop: 4, display: { xs: 'flex', sm: 'none'}}}>
            <InputLabel id="demo-simple-select-label">Select a sub-team</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={title}
            label="title"
            onChange={handleChange}
            >
            <MenuItem disabled value="">
                <p>Select a sub-team</p>
            </MenuItem>
            <MenuItem value={titles[0]}>{titles[0]}</MenuItem>
            <MenuItem value={titles[1]}>{titles[1]}</MenuItem>
            <MenuItem value={titles[2]}>{titles[2]}</MenuItem>
            <MenuItem value={titles[3]}>{titles[3]}</MenuItem>
            <MenuItem value={titles[4]}>{titles[4]}</MenuItem>
            <MenuItem value={titles[5]}>{titles[5]}</MenuItem>
            <MenuItem value={titles[6]}>{titles[6]}</MenuItem>
            </Select>
        </FormControl>
        </Box>
        <Card className='cardborder' sx={{display: { xs: 'block', sm: 'none'}, maxWidth: 345 }}> 
            <CardContent>
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
            <CardMedia
                component="img"
                height="140"
                image={placeholder[index]}
            />
        </Card>
    </StackMob>
  );
}