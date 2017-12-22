import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { RedirectToIndex } from 'components/Route'

import Component from './index'
import ListComponent from './List'
import AddComponent from './Add'

export default function (path, store) {
  return <Route path={path} component={Component}
    icon='icon-users' text='Member' navbar>
    <IndexRoute i18n='list' navbar component={ListComponent} />
    <Route path='add' navbar component={AddComponent} />
    <RedirectToIndex from='*' />
  </Route>
}
