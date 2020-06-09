import React from "react"

export const Store = React.createContext()

const initialState  = {}

function reducer(){

}

export function StoreProvider(){
    return <Store.Provider value='test'>{props.children}</Store.Provider>
}