import React from 'react'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card'
import classes from './Register.module.css'

export default function Register() {
  return (
    <div>
      <Card variant="outlined" className={classes['login-container']}>
       <TextField  id="outlined-basic" label="Outlined" variant="outlined"  />
       <TextField  id="outlined-basic" label="Outlined" variant="outlined"  />
      </Card>
    </div>
  )
}
