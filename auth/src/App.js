import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/styles'

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
})

export default ({onSignIn, history}) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin">
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signup">
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}
