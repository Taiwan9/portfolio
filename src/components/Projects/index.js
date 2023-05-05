import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imageCard from '../../assets/img/portfolio.png'
import imageCard2 from '../../assets/img/pixel-img.png'
import imageCard3 from '../../assets/img/projeto5.png'
import Loader from 'react-loaders';

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
                            <AnimatedLetters strArray={['P','r','o','j','e','t','o','s']}
                                idx={15}
                                letterClass={letterClass}></AnimatedLetters>
                        </h1>
                        <p>
                   Aqui estão alguns dos meus projetos, pessoais e profissionais, o que me permitiram
                   aprimorar ainda mais as minhas técnicas e habilidades tanto individual quanto em equipe
                   <h4>Vamos fazer algo incrível juntos</h4>
                    </p>
                </div>
                <div className='card-project'>
                    
                <Card sx={{ maxWidth: 345 }} className='card'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageCard}
                        title="Portfolio"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                        Porfolio
                        </Typography>
                        <Typography sx={{ fontSize: 13 }} variant="body2" color="text">
                        Projeto realizado em React com o propósito de  aplicar meus conhecimentos
                        e divulgar meus trabalhos.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium"  href='https://github.com/' target="_blank">Site</Button>
                        <Button size="medium"  href='https://github.com/Taiwan9/portfolio' target="_blank">Repositório</Button>
                    </CardActions>
                    </Card>
                <Card sx={{ maxWidth: 345 }} className='card'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageCard2}
                        title="Projeto-01"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Projeto E-commerce
                        </Typography>
                        <Typography sx={{ fontSize: 13 }} variant="body2" color="text">
                        Projeto realizado em equipe com o propósito de  aplicar meus conhecimentos, esse projeto
                        foi pensado em imitar a realidade de um dev profissional.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium"  href=' https://pixelplay-store.netlify.app/' target="_blank">Site</Button>
                        <Button size="medium"  href='https://github.com/Marcos9868/pp_ecommerce_front' target="_blank">Repositório</Button>
                    </CardActions>
                    </Card>
                <Card sx={{ maxWidth: 345 }} className='card'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageCard3}
                        title="Project-01"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                        Projeto-05
                        </Typography>
                        <Typography sx={{ fontSize: 13 }} variant="body2" color="text">
                        Projeto realizado em HTML e CSS, um site de paginação responsiva completa
                        em breve será atualizada aplicando o JavaScript
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large"  href='https://taiwan9.github.io/Projeto-05/' target="_blank">Site</Button>
                        <Button size="large"  href='https://github.com/Taiwan9/Projeto-05' target="_blank">Repositório</Button>
                    </CardActions>
                    </Card>
                </div>
            </div>
            <Loader type="pacman"></Loader>
        </>
    )
}

export default Project