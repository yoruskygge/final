import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem} from 'framework7-react';

export const Int = () => {
    return (
        <Page>
            <Navbar title="Namekians" backLink="Back" sliding />
            <ContentBlock>
                <List mediaList>
                    <ListItem
                        link="/puck/"
                        media="<img src='img/piccolo.png' widht='80' height='80'>"
                        title="Piccolo"
                        text="Z Fighter"
                    ></ListItem>
                    <ListItem
                        link="/str/"
                        media="<img src='img/str.png' widht='80' height='80'>"
                        title="Raigor"
                        text="Raigor Stone Hoof"
                    ></ListItem>
                    <ListItem
                        link="/str/"
                        media="<img src='img/str.png' widht='80' height='80'>"
                        title="Raigor"
                        text="Raigor Stone Hoof"
                    ></ListItem>
                    <ListItem
                        link="/str/"
                        media="<img src='img/str.png' widht='80' height='80'>"
                        title="Raigor"
                        text="Raigor Stone Hoof"
                    ></ListItem>
                    <ListItem
                        link="/str/"
                        media="<img src='img/str.png' widht='80' height='80'>"
                        title="Raigor"
                        text="Raigor Stone Hoof"
                    ></ListItem>
                </List>
            </ContentBlock>
        </Page>
    );
};
