import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch} from 'react-router'
import { DrizzleProvider } from 'drizzle-react'
import { LoadingContainer } from 'drizzle-react-components'
import { history, store } from './store'

//Components
import App from './App';
import drizzleOptions from './drizzleOptions';
import Bounties from "./components/bounty/bount-details/Bounties";
import Dashboard from "./components/dashboard/Dashboard";
import Fulfilment from "./components/bounty-fulfilment/Fulfilment";
import PostBountyContainer from "./components/bounty/post-bounty/PostBountyContainer";
import BountyHomeContainer from "./components/bounty-home/BountyHomeContainer";
import BountyListContainer from "./components/bounty/bounty-list/BountyListContainer";
import BountyDashboardContainer from "./components/bounty-dashboard/BountyDashboardContainer";
import BountyDetailsContainer from "./components/bounty/bount-details/BountyDetailsContainer";
import BountyFulfilmentContainer from "./components/bounty-fulfilment/BountyFulfilmentContainer";


ReactDOM.render((
        <DrizzleProvider options={drizzleOptions} store={store} >
            <LoadingContainer>
                <Router history={history} store={store}>
                    <App >
                        <Switch>
                            <Route exact path='/' component={BountyHomeContainer}/>
                            <Route path='/post-bounty' component={PostBountyContainer}/>
                            <Bounties>
                                <Route exact path='/bounties/list' component={BountyListContainer}/>
                                <Route path='/bounties/list/:bountyId' component={BountyDetailsContainer}/>
                                <Dashboard>
                                    <Route exact path='/dashboard' component={BountyDashboardContainer}/>
                                    <Fulfilment>
                                        <Route path='/fulfil/bounty/:bountyId' component={BountyFulfilmentContainer}/>
                                    </Fulfilment>
                                </Dashboard>
                            </Bounties>
                        </Switch>
                    </App>
                </Router>
            </LoadingContainer>
        </DrizzleProvider>
    ),
    document.getElementById('root')
);
