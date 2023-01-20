import React from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'
import { User } from '../../../app/models/user';

interface Props {
    userProfile: User;
    cancelSelectUser:()=> void;
    openUserForm: (id:string) => void;
}

export default function UserDetails({ userProfile,cancelSelectUser, openUserForm }: Props) {
    return (
        <Card>
           
            <Card.Content>
                <Card.Header>
                    {userProfile.firstName}
                </Card.Header>
                <Card.Meta> {userProfile.lastName}</Card.Meta>
                <Card.Description>
                    <span>{userProfile.dateOfBirth}</span>
                    <span>{userProfile.email}</span>
                </Card.Description>

            </Card.Content>

            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={()=> openUserForm(userProfile.id)} color='blue' content='Edit' />
                    <Button onClick={cancelSelectUser} color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}