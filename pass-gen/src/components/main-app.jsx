import "../styles/main-app.css";
import { useState } from 'react';
import { GenPassFormF } from './form.jsx';
import { PasswordList } from './passwordList.jsx';

export function MainWin() {

    const [allGeneratedPass, setAllGeneratedPass] = useState([])

    return(
        <main className="Main">
            <GenPassFormF allGeneratedPass={allGeneratedPass} setAllGeneratedPass={setAllGeneratedPass} />
            <PasswordList allGeneratedPass={allGeneratedPass} />
        </main>
    )
};