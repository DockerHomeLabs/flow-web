import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { RedirectToIndex } from 'components/Route'

import Component from './index'
import ListComponent from './List'
import CreateComponent from './Create'

export default function (path, store) {
  return <Route path={path} component={Component}
    icon='icon-agents' navbar text='Agent'>
    <IndexRoute navbar i18n='list' component={ListComponent} />
    <Route path='create' navbar component={CreateComponent} />
    <RedirectToIndex from='*' />
  </Route>
}
