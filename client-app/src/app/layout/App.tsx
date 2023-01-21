import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { User } from '../models/user';
import { Activity } from '../models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import UserDashboard from '../../features/user/userDashboard';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';
import user from '../api/user';
import LoadingComponent from './LoadingComponent';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [userProfile, SetUserProfiles] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [editUser, setEditUser] = useState(false);

  useEffect(() => {
    agent.Activities.list().then(response => {
      let activities: Activity[] = [];
      response.forEach(activity => {
        activity.date = activity.date.split('T')[0];
        activities.push(activity);
      })
      setActivities(response);
      setLoading(false);
    })
  }, [])

  useEffect(() => {
    user.UserProfile.list()
      .then(
        response => {
          let userProfiles: User[] = [];
          response.forEach(userProfile => {
            userProfile.dateOfBirth = userProfile.dateOfBirth.split('T')[0];
            userProfiles.push(userProfile);
          })
          SetUserProfiles(response);
        }
      )
  }, []
  )

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true)
  }

  function handleFormClose() {
    setEditMode(false);
  }


  function handleSelectedUser(id: string) {
    setSelectedUser(userProfile.find(x => x.id === id));
  }

  function handleCancelSelectUser() {
    setSelectedUser(undefined);
  }

  function handleUserFormOpen(id?: string) {
    id ? handleSelectedUser(id) : handleCancelSelectUser();
    setEditUser(true)
  }

  function handleUserFormClose() {
    setEditUser(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    setSubmitting(true);
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter(x => x.id !== activity.id), activity])
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })
    }
    else {
      activity.id=uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity ])
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }


  function handleDeleteActivity(id: string) {
    setSubmitting(true);
    agent.Activities.delete(id).then(()=> {
      setActivities([...activities.filter(x => x.id !== id)])
      setSubmitting(false);
    })

  }

  if (loading) return <LoadingComponent content='Loading app' />
  return (
    <>
      <NavBar openForm={handleFormOpen} openUserForm={handleUserFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          eidtMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting = {submitting}
        />
        <UserDashboard
          userProfiles={userProfile}
          selectedUser={selectedUser}
          selectUser={handleSelectedUser}
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
