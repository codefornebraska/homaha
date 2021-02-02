import React from 'react';
import {Typography, makeStyles} from "@material-ui/core";
import {Card} from "@material-ui/core";
import {Phone} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 900,
    width: '100%',
    flexDirection: 'column',
    margin: '0 auto',
    marginBottom: 20,
    padding: 20
  },
  stats: {
    display: 'flex',
    flexDirection: 'row'
  },
  statColumn: {
    marginRight: 20,
  },
  phone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}))

export default function Shelter(props) {
  const shelter = props.shelter
  const classes = useStyles();

  const yesResponse = (
    <span style={{color: 'lightgreen'}}>
            Yes
        </span>
  )

  const noResponse = (
    <span style={{color: 'red'}}>
            No
        </span>
  )

  return (
    <Card className={classes.card} gutterbottom>
      <div>
        <Typography variant={'h5'}>{shelter.name}</Typography>
        <div className={classes.phone}>
          <Typography style={{paddingRight: 20}}>{shelter.phone}</Typography>
          <a href={'tel:' + shelter.phone} style={{color: 'white'}}><Phone/></a>
        </div>
      </div>
      <div>{shelter.address}</div>
      <Typography color={shelter.availableCapacity < 1 ? 'error' : 'primary'} variant={'h5'} component={'h5'}>Available
        beds: {shelter.availableCapacity}</Typography>
      <br/>
      <div className={classes.stats}>
        <div className={classes.statColumn}>
          <div>
            Allow Intox: {shelter.allowIntox ? yesResponse : noResponse}
           </div>
          <div>
            Allow Narcotic: {shelter.allowNarcotic ? yesResponse : noResponse}
          </div>
        </div>
        <div className={classes.statColumn}>
          <div>
            Allow Single Male: {shelter.allowsSingleMale ? yesResponse : noResponse}
          </div>
          <div>
            Allow Family Male: {shelter.allowFamilyMale ? yesResponse : noResponse}
          </div>
          <div>
            Allow Female: {shelter.allowsFemale ? yesResponse : noResponse}
          </div>
          <div>
            Allow Children: {shelter.allowsChildren ? yesResponse : noResponse}
          </div>
        </div>
      </div>
    </Card>
  )
}