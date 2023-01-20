import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { User } from "../../app/models/user";

interface Props{
    userProfile : User[];
    selectUser:(id:string) => void;
}

export default function UserList ({userProfile, selectUser}:Props){
   return(
    <Segment>
         <Item.Group divided>
                {userProfile.map(user => (
                    <Item key={user.id}>
                        <Item.Content>
                            <Item.Header as='a'>{user.firstName}</Item.Header>
                            <Item.Meta>{user.dateOfBirth}</Item.Meta>
                            <Item.Description>
                                <div>{user.lastName}</div>
                                <div>{user.city}</div>
                            </Item.Description>

                            <Item.Extra>
                                <Button onClick={() => selectUser(user.id)} floated='right' content='View' color="blue" />
                                <Label basic content={user.email}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
    </Segment>
   )
}