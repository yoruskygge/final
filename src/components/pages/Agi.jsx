import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem} from 'framework7-react';

export const Agi = () => {
    return (
        <Page>
            <Navbar title="Multiple choice" backLink="Back" sliding />
             <ContentBlock>
                <List mediaList>
                    <ListItem
                        link="/yurnero/"
                        media="<img src='img/controller.png' widht='80' height='80'>"
                        title="All About Games"
                        text=""
                    ></ListItem>
                   
                </List>
            </ContentBlock>
        </Page>
    );
};
