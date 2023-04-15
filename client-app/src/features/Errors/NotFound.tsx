import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound () {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name="search">
                    Oop-s Not Found
                </Icon>
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities'>
                    Return to activities page
                </Button>
            </Segment.Inline>
        </Segment>
    )
}