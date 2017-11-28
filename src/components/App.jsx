import React, {PropTypes} from 'react';
import {
	Framework7App, Statusbar, View, Pages, Page, ContentBlock, ContentBlockTitle, 
	Views, Button
} from 'framework7-react';

import {routes} from '../routes';

const MainViews = (props, context) => {
	return (
		<Views>
			<View id="main-view" align="center" layout="dark" navbarThrough dynamicNavbar={true} main url="/">

				{/* Pages */}
				<Pages>
					<Page>
						<ContentBlockTitle>Simple Quiz</ContentBlockTitle>
						<ContentBlock>
							<p><img role="presentation" src="img/atom.png" width="100%"/></p>
						</ContentBlock>

						<ContentBlock inner>
							<p>This is a simple App for Simple Quiz developed using Framework7+react.</p>
						</ContentBlock>
						<ContentBlock>
							<Button raised color="black" bg="orange" href="/menu/">Start</Button>
						</ContentBlock>
					</Page>
				</Pages>
			</View>
		</Views>
	);
};

MainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};

export const App = () => (	
	//Change themeType to "material" to use the Material theme
	<Framework7App themeType="material" routes={routes}>		
		<Statusbar />		
		<MainViews />
	</Framework7App>  
);
