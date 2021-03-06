import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Posts from './posts/Posts'
import Post from './posts/Post'
import PostEdit from './posts/PostEdit'
import PostNew from './posts/PostNew'
import Search from './search/Search'
import Account from './account/Account'
import Error from './Error'
import {
  PageContainer,
} from '../styles/layout'

const Routes = ({location}) => (
  // https://codesandbox.io/embed/YE6l8EmR9
  <TransitionGroup key="transition-group" component={PageContainer}>
    <CSSTransition key={location.pathname} classNames="fade" timeout={1000} mountOnEnter={true} unmountOnExit={true}>
      <Switch location={location}>
        <Route exact path="/" component={Posts} />
        <Route path="/new" component={PostNew} />
        <Route path="/search" component={Search} />
        <Route path="/account" component={Account} />
        <Route path="/:slug/edit" render={ ({match}) => <PostEdit slug={match.params.slug} /> } />
        <Route path="/:slug" render={ ({match}) => <Post slug={match.params.slug} /> } />
        <Route component={Error} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
)

export default withRouter(Routes)
