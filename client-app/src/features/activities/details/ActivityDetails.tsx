import { observer } from 'mobx-react-lite';
import  { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../stores/store'
import ActivityDetailedHeader from './ActivityDeatailedHeader';
import ActivityDetailChat from './ActivityDetailedChat';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailSidebar from './ActivityDetailedSidebar';


export default observer(  function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity : activity, loadActivity , loadingInitial} = activityStore;
    const {id} = useParams();
    
    useEffect (()=> {
        if(id) loadActivity(id);
    }, [id, loadActivity])

    if (loadingInitial || !activity) return <LoadingComponent/>;
    
    return (
       <Grid>
        <Grid.Column width={10}>
            <ActivityDetailedHeader activity={activity}/>
            <ActivityDetailedInfo activity={activity}/>
            <ActivityDetailChat/>
        </Grid.Column>
        <Grid.Column width={6}>
            <ActivityDetailSidebar attendess={activity.attendees!} />
        </Grid.Column>
       </Grid>
    )
})