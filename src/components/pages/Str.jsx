import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem} from 'framework7-react';

export const Str = () => {
    return (
        <Page>
            <Navbar title="Multiple choice" backLink="Back" sliding />
            <ContentBlock>
                <List mediaList>
                    <ListItem
                        link="/axe/"
                        media="<img src='img/controller.png' widht='80' height='80'>"
                        title="All About Game"
                        text=""
                    ></ListItem>
                  
                </List>
            </ContentBlock>
        </Page>
    );
};
