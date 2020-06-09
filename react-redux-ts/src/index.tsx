import React from 'react'
import ReactDOM from 'react-dom'

export default function App(): JSX.Element {
    function getSentence (firstPart: string, lastPart: string): string {
        return `This is a ${firstPart} ${lastPart} compiled with webpack & babel`
    }
    return (
        <div>
            <h1>Hello World</h1>
    <h2>{getSentence("React-Redux app", "with TypeScript")}</h2>
        </div>
    )
}

const root = document.getElementById('app-root')

ReactDOM.render(<App />, root)
