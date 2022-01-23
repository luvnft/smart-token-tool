import {FC} from 'react';
import {makeStyles} from '@mui/styles';
import {Box} from '@mui/system';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  box: {
    background: '#ffccff',
    borderRadius: '8px',
    padding: '5px',
    marginBottom: '1em',
    maxWidth: '20em',
  },
});

const WalletAddress: FC<{address: string}> = ({address}) => {
  const styles = useStyles();
  return (
    <Box component="div" className={styles.box}>
      <Typography
        component='div'
        fontSize='16px'
      > Your address:
      </Typography>
      <Typography
        component='div'
        fontSize='20px'
      >{address}
      </Typography>
    </Box>
  );
}

export default WalletAddress;
