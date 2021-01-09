import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
const ButtonC = ({type, variant, color, onClick, text}) => {
    const classes = useStyles();
    return (
        <Button
            type={type}
            fullWidth
            variant={variant}
            color={color}
            className={classes.submit}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}
const useStyles = makeStyles((theme) => ({    
    submit: {
      margin: theme.spacing(5, 0, 2),
    },
  }));

export default ButtonC
