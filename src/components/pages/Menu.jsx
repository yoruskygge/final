import React from 'react';
import {Page, ContentBlock, ContentBlockTitle, Navbar, List, ListItem} from 'framework7-react';

export const Menu = () => {
    return (
        <Page>
            <Navbar title="MENU" sliding />
            <ContentBlockTitle>Choose a game</ContentBlockTitle>
            <ContentBlock>
                <List mediaList>
                    <ListItem
                        link="/str/"
                        media="<img src='img/ABCD.jpg' widht='50' height='50'>"
                        title="Multiple choice"
                        text="this have 4 choices to choose ."
                    ></ListItem>
                    <ListItem
                        link="/agi/"
                        media="<img src='img/thumb.jpg' widht='50' height='50'>"
                        title="True or False"
                        text="have 2 choices."
                    ></ListItem>
                    <ListItem
                        link="//"
                        media=""
                        title=""
                        text=""
                    ></ListItem>
                </List>
            </ContentBlock>
        </Page>
    );
};
