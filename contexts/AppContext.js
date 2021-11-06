import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { pubClient } from '../config/api'

const App = createContext({})

const AppContext = (props) => {
    
    
    const AppContextValue = {
       msg:"Hello"
    }
    return <Auth.Provider value={AppContextValue}>
        {props.children}
        </Auth.Provider>
}


export default AppContext
export { App }

