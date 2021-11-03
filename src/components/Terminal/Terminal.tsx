import React, {useState} from 'react';
import './Terminal.css';
import enterKey from "./../../img/enterKey.svg";

export default function Terminal(props: any) {

    const id = {
        age: 23,
        job: "Fullstack Developer & Software Architect",
        proExpYears: 5,
        isOpenToWork: false
    }

    const defaultContent =
        <p>
            guest@sornin.com/home$ : cat home.txt<br/>
            Welcome to Sornin's portfolio<br/>
            {id.job}<br/>
            Age : {id.age}<br/>
            Years of professional experience : {id.proExpYears}<br/>
            Is Open To Work : {id.isOpenToWork ? <span>Yes, please contact me !</span> :  <span>No, sorry but for any questions, feel free to contact me buy using <span className="app-codeSnippet terminal-codeSnippet">contact</span> command</span>}
        </p>

    const [content, setContent] = useState(defaultContent)

    function onCommand(command: string) {

    }

    return (
        <div className="terminal-root">
            <div className="terminal-contentContainer">
                {content}
            </div>
            <div className="terminal-inputContainer">
                <TerminalInput submitHandler={onCommand}/>
            </div>
        </div>
    )
}

function TerminalInput(props: any) {

    const [content, setContent] = useState("")

    function handleKeyPress(event: React.KeyboardEvent) {
        if (event.key !== "Enter") return;
        handleSubmit()
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value)
    }

    function handleSubmit() {
        props.submitHandler(content)
    }
    return (
        <div className="terminalInput-root">
            <input onChange={event => handleChange(event)} onKeyPress={event => handleKeyPress(event)} className="terminalInput-input" placeholder="Run a command, type man for manual"/>
            <img onClick={() => handleSubmit()} className="terminalInput-enterInput" src={enterKey} alt="Send"/>
        </div>


    )
}

enum TerminalStates {
    DEFAULT
}

class TerminalManager {

    private static instance: TerminalManager;
    private state: TerminalStates;

    constructor() {
        TerminalManager.instance = this;
        this.state = TerminalStates.DEFAULT;
    }
}