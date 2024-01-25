import { Grid, Card } from '@mui/material';
import styles from './ActivityEditor.module.css';
import ActivityForm from './activityForm/ActivityForm';

const ActivityEditor = () => {
  return (
    <Card sx={{ my: 5 }}>
      <Grid container spacing={3}>
        <Grid item md={7} sm={12}>
          <div className={styles.backgroundImage}></div>
        </Grid>
        <Grid item md={5} sm={12}>
          <ActivityForm />
        </Grid>
      </Grid>
    </Card>
  );
};

export default ActivityEditor;
