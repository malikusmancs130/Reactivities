import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { User } from '../models/user';
import { Activity } from '../models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import UserDashboard from '../../features/user/userDashboard';
import {v4 as uuid} from 'uuid';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  const [userProfile, SetUserProfiles] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [editUser, setEditUser] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data);
      })
  }, [])

  useEffect(() => {
    axios.get<User[]>('http://localhost:5000/api/userProfile')
      .then(
        response => {
          SetUserProfiles(response.data);
        }
      )
  }, []
  )

  function handleSelectActivity(id : string)
  {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity(){
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string)
  {
    id? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true)
  }

  function handleFormClose(){
    setEditMode(false);
  }


  function handleSelectedUser(id : string)
  {
    setSelectedUser(userProfile.find(x => x.id === id));
  }

  function handleCancelSelectUser(){
    setSelectedUser(undefined);
  }

  function handleUserFormOpen(id?: string)
  {
    id? handleSelectedUser(id) : handleCancelSelectUser();
    setEditUser(true)
  }

  function handleUserFormClose(){
    setEditUser(false);
  }

  function handleCreateOrEditActivity(activity: Activity){
    activity.id ? setActivities([...activities.filter(x => x.id !== activity.id), activity]) 
    : setActivities([...activities,{... activity,id:uuid()}]);

    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id:string){
    setActivities([...activities.filter(x=>x.id !== id)])
  }

  return (
    <>
      <NavBar openForm ={handleFormOpen} openUserForm ={handleUserFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard 
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity ={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          eidtMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          />
        <UserDashboard 
        userProfiles={userProfile}
        selectedUser={selectedUser}
        selectUser ={handleSelectedUser}
        cancelSelectUser={handleCancelSelectUser}
        eidtUserMode={editUser}
        openUserForm={handleUserFormOpen}
        closeUserForm={handleUserFormClose}
         />
      </Container>

    </>
  );
}

export default App;
