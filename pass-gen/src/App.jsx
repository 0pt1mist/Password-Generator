import { Header } from './components/header.jsx';
import { HeadInfo } from './components/head-info.jsx';
import { MainWin } from './components/main-app.jsx';
import { GenPassFormF } from './components/form.jsx';
import { PasswordList } from './components/passwordList.jsx';

import { useState } from 'react';

function App() {

  const [allGeneratedPass, setAllGeneratedPass] = useState('')

  return (
    <div className="App">
      <Header />
      <HeadInfo />
      <GenPassFormF allGeneratedPass={allGeneratedPass} setAllGeneratedPass={setAllGeneratedPass} />
      <PasswordList allGeneratedPass={allGeneratedPass} />
    </div>
  );
}
export default App;
