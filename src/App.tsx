import React from 'react';
import './App.css';
import SideNavigation, {Tabs} from "./components/SideNavigation/SideNavigation";
import Terminal from "./components/Terminal/Terminal";

function App() {

    function onTabClick(tab: number) {
        //ON TAB CLICK
    }

    function onThemeClick(theme: string) {
        //ON THEME CLICK
    }


  return (
      <div className="app-root">
          <SideNavigation tabClickHandler/>
          <div className="app-terminalContainer">
              <div className="app-hints">
                  <Hint hintClass="hint-hintTerminal" content={<span>You can use the terminal below or use the side navigation panel</span>}/>
                  <Hint hintClass="hint-hintManual" content={<span>Type <span className="app-codeSnippet">man</span> for manual</span>}/>
              </div>
              <div className="app-terminal">
                  <Terminal/>
              </div>
          </div>
      </div>
  );
}

function Hint(props: any) {
    return (
        <div className={'hint-root ' + props.hintClass}>
            {props.content}
        </div>
    )
}

export default App;
