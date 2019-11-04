import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './title';
// import Ataa from '../services/attaaCoin.service'
import { useState, useEffect } from 'react';
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  // const [totalSupply, setTotalSupply] = useState();
  // const TotalSupplyMount = async () => {
  //     const account = await Ataa.Service.init();
  //     console.log("account", account);
  //     const totalSupply = await Ataa.Service.getTotalSupply();
  //     setTotalSupply(totalSupply);
  //     console.log("total",totalSupply);
  // };
  // useEffect(() => {
  //   TotalSupplyMount();
  // });
  return (
    <React.Fragment>
      <Title>Total Supply</Title>
      <Typography component="p" variant="h4">
       {/* {totalSupply} */}
       400
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
    </React.Fragment>
  );
}