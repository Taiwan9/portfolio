import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imageCard from '../../assets/img/logoName.png'

const Project = () =>{

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return(
        <>
            <div className="container project-page">
                <div className="text-zone">
                        <h1>
                            <AnimatedLetters strArray={['P','r','o','j','e','c','t','s']}
                                idx={15}
                                letterClass={letterClass}></AnimatedLetters>
                        </h1>
                        <p>
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                    </p>

                    <Card sx={{ maxWidth: 345 }} className='card-project'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageCard}
                        title="Project-01"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Project