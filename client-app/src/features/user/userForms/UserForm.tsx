import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { User } from "../../../app/models/user";

interface Props {
    activity : User | undefined;
    closeUserForm : () => void;
    }

export default function UserForm({closeUserForm}: Props){
    return(
        <Segment clearing>
            <Form>
                <Form.Input placeholder='First Name' />
                <Form.Input placeholder='Last Name' />
                <Form.Input placeholder='Email' />
                <Form.Input placeholder='City' />
                <Form.Input placeholder='Date Of birth' />

                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeUserForm} floated='right' positive type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}