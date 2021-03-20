import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageCard from './imageCard'
import place from '../static/places'
import useWindowPosition from '../hooks/useWindowPosition'


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column',
        }
    },
}));
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const classes = useStyles();
    const checked = useWindowPosition('header')
    return(
        <div className={classes.root} id="place-to-vist">
            <ImageCard place={place[0]} checked={checked} />
            <ImageCard place={place[1]} checked={checked} />
        </div>
    )
}