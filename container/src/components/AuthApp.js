import { mount } from 'auth/AuthApp'
import React, { useRef, useEffect} from 'react'

import { useHistory } from 'react-router-dom'

export default () => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const {onParentNaviage} = mount(
            ref.current,
            {
                onNavigate: ({pathname: nextPathname}) => {
                    const {pathname} = history.location
                    if(pathname !== nextPathname){
                        history.push(nextPathname)
                    }
                }
            }
        )
        history.listen(onParentNaviage)
    }, [])
    
    return <div ref = {ref} />
}