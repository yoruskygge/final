import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Puck = () => {
    return (
        <Page>
            <Navbar title="Piccolo" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="50">
                            <div><img src="img/piccolo.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="60">
                            <div>Piccolo's Lore and abilities</div>
                        </GridCol>
                    </GridRow>
                </CardHeader>

                <CardContent>

                    {/* ================================ */}
                    {/* Description */}
                    {/* ================================ */}
                    <ContentBlockTitle><p>Lore</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <p>
                            Piccolo Jr. (ピッコロ・ジュニア Pikkoro Junia), usually just called Piccolo also known as Ma Junior, is a Namekian and also the final child and reincarnation of the Demon King Piccolo, later becoming the reunification of the Nameless Namekian after fusing with Kami. According to Grand Elder Guru, Piccolo, along with Kami and King Piccolo, are part of the Dragon Clan, who were the original creators of the Dragon Balls.

A wise and cunning warrior who was originally a ruthless enemy of Goku, Piccolo later becomes a permanent member of the Dragon Team, largely due to forming a mutual respect to Goku and even more from forming a close bond with Goku's first-born son Gohan                        </p><br/>
                        <p>Namekian also have special ability they can regenerate part of their body.</p>
                   
                    </ContentBlock>
                    <ContentBlockTitle><p>Abilities</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>Demon Hand - The Namekian Demon Clan's ability to stretch their arms is one of Piccolo's signature offensive techniques - being his own unique ability.[7] Under the name "Demon Hand", Piccolo uses this technique in fights in order to gain a ranged advantage on opponents while still engaging in physical combat.</div><br/>
                        <div>Scatter Shot - A rapid fire technique where Piccolo fires off many energy spheres which explode when they hit something. Piccolo eventually managed to develop a more complex Scatter Shot technique dubbed the Hellzone Grenade, which is used the same way, however the blasts are controlled by Piccolo - generally to surround the opponent - before they are all guided straight at the foe at the same time.</div><br/>
                        <div>Special Beam Cannon - A very powerful technique developed by Piccolo for the purpose of killing Goku. The technique requires a high charging period in order to be used to it's full potential, but when unleashed it is devastating - being capable of even severely wounding beings stronger than Piccolo thanks to it's piercing properties.</div><br/>
                    </ContentBlock>
                    <ContentBlockTitle><p>Transformation</p></ContentBlockTitle>
                    <div>Great Namekian-In this state Piccolo is referred to as Giant Piccolo. Piccolo transforms into a Great Namek when he battles against Goku in the finale of the 23rd World Martial Arts Tournament, and later when fighting against Super Garlic Jr. Piccolo's size greatly increases, his strength and weight increases, and the form does not impact his speed in a violent way, however his ki does not increase.</div><br/>
                    <div>Super Namekian-After fusing with Nail and becoming much more powerful, Piccolo became a "Super-Namek". Later, Piccolo re-fused with Kami, he powers up to levels well beyond any of the existing Warrior-type Namekians ever before. Krillin called him a "Super Namekian" because of his new and extraordinary powers, able to far eclipse the strength of an untrained Super Saiyan and with training was able to rival and in some cases surpass a trained Super Saiyan. As a Super Namek, his figure doesn't change, but his power, strength and speed are sharply enhanced. While using his Super Namek power against Android 17, Piccolo gains a large blue and white aura.</div><br/>
                    <div>Fusion with Nail-During the Frieza Saga, Piccolo uses the Namekian Fusion with Nail, which greatly boosts his strength and power beyond his previous limitations. After the fusion, Piccolo is said to be a Super-Namek. With this, Piccolo is able to fight against Frieza evenly while the tyrant is in his 2nd Form. Through further training, Piccolo in this form is able to easily overpower Android 20 and according to Krillin Piccolo's power rivaled that of a Super Saiyan. According to Nail if Piccolo had fused with him while he was "whole" he would have been capable of defeating Frieza.</div><br/>
                    {/* ================================ */}
                    {/* Skills */}
                    {/* ================================ */}
                    <ContentBlockTitle><p>Close with</p></ContentBlockTitle>
                    <div>Goku-his rival</div><br/>
                    <div>Gohan-Piccolo's student</div><br/>
                    <div>Pan-Gohan's Daugther </div><br/>
                    <ContentBlockTitle><p>Villain</p></ContentBlockTitle>
                    <div>Raditz-Piccolo killed Raditz</div><br/>
                    <div>Nappa</div><br/>
                    <div>Frieza-Frieza was deafeted by Goku in namek</div><br/>
                    <div>Cell-Defeted by Gohan</div><br/>
                    <div>Buu-Defeted by the Energy Ball of Goku</div><br/>
                    <div>Baby-Died after Goku use 10xkamehameha</div><br/>
                    <div>Babidi-was killed by Buu</div><br/>
                    <ContentBlock inner>
                        {/* Skill 1 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                       
                                    </GridCol>
                                    <GridCol width="80">
                                        <div></div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 1 Description here */}
                                    <ContentBlock>
                                        <div>
                                           
                                        </div>
                                    </ContentBlock>
                                    {/* 'Skill 1 Info here */}
                                    <ContentBlock>
                                        <p></p>
                                      
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>

                        {/* 'Skill 2 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                       
                                    </GridCol>
                                    <GridCol width="80">
                                        <div></div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 2 Description here */}
                                    <ContentBlock>
                                        <div>
                                           
                                        {/* 'Skill 2 Description here */}
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>

                        {/* Skill 3 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        
                                    </GridCol>
                                    <GridCol width="80">
                                        <div></div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 3 Description here */}
                                    <ContentBlock>
                                        <div>
                                      
                                        {/* 'Skill 3 Description here */}
                                        </div>
                                    </ContentBlock>
                                    {/*' Skill 3 Skill info here */}
                                    <ContentBlock>
                                        
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>

                        {/* Skill 4 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                       
                                    </GridCol>
                                    <GridCol width="80">
                                        <div></div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 4 Description here */}
                                    <ContentBlock>
                                        <div>
                                           
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                      
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>


                    </ContentBlock>

                </CardContent>
            </Card>
        </Page>
    );
};
