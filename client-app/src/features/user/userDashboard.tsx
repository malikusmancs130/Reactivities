import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { User } from '../../app/models/user';
import UserDetails from './userdetails/UserDetails';
import UserForm from './userForms/UserForm';
import UserList from './UserList';

interface Props {
    userProfiles: User[];
    selectedUser: User | undefined;
    selectUser: (id: string) => void;
    cancelSelectUser: () => void;
    eidtUserMode : boolean;
    openUserForm : (id:string) => void;
    closeUserForm : () =>void;
}

export default function UserDashboard({ userProfiles, selectUser, selectedUser,
            eidtUserMode, openUserForm, closeUserForm, cancelSelectUser }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <UserList userProfile={userProfiles} selectUser={selectUser} />
            </Grid.Column>

            <Grid.Column width='6'>
               { selectedUser && !eidtUserMode &&
                    <UserDetails 
                    userProfile={selectedUser} 
                    cancelSelectUser={cancelSelectUser}
                    openUserForm={openUserForm} />  }
            </Grid.Column>

            <UserForm  closeUserForm={closeUserForm} activity ={selectedUser}/>

        </Grid>
    )
}