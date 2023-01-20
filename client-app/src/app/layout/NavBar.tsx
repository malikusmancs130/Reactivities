import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
    openForm : () => void;
    openUserForm: ()=>void;
}

export default function NavBar({openForm,openUserForm}: Props) {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight:'10px'}} />
                    Reactivities
                </Menu.Item>

                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button onClick={openForm} positive content='Create Activity' />
                    <Button onClick={openUserForm} positive content='Create User' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}