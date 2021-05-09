import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    appbar: {
        background: 'none',
        fontFamily: 'nunito',
    },
    icon: {
        color: '#0000FF',
        fontSize: '2rem',
    },
    insta: {
        color: '#C3144F',
        fontSize: '2rem',
    },
    wpp: {
        color: '#008000',
        fontSize: '2rem',
    },
    appbarTitle: {
        flexGrow: '1',
        color: '#FF0000',
        //fontSize:'2rem',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    colorText: {
        color: '#0000FF',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#FF0000',
        fontSize: '4.5rem',

    },
    goDown: {
        color: '#0000FF',
        fontSize: '4rem',
    },
}));
export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true);
    }, [])
    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation={0} >
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle} >
                        Talk&<span className={classes.colorText}>Learn</span>.
                        </h1>


                    <IconButton>
                        <a href="https://www.instagram.com/talkandlearnidiomas/" target="blank">
                            <InstagramIcon className={classes.insta} />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://api.whatsapp.com/send?phone=55318655-4463" target="blank">
                            <WhatsAppIcon className={classes.wpp} />
                        </a>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse 
                in={checked}
                {...(checked ? { timeout: 3000 } : {})}
                collapsedHeight={50}
                >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Conheça <br /> <span className={classes.colorText}>Nossos</span> Cursos
                    </h1>
                    <Scroll to={"place-to-vist"}  smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
};

