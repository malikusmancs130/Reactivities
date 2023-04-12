
import { observer } from 'mobx-react-lite';
import { Grid } from 'semantic-ui-react'
import { useStore } from '../../../stores/store';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

export default observer(function ActivityDashboard() {
    const {activityStore}  = useStore();
    const {selectedActivity, eidtMode} = activityStore;

    return (
        <Grid>
            <Grid.Column width='10'>
             <ActivityList />
            </Grid.Column>

            <Grid.Column width='6'>
                {selectedActivity  && !eidtMode &&
                <ActivityDetails />}
                   { eidtMode &&
                <ActivityForm /> }
            </Grid.Column>
        </Grid>
    )
})