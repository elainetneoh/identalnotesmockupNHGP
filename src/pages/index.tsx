import {Button, Layout, Menu,} from 'antd';
import React, { useContext, useState } from 'react';
import MainMenu from '@/pages/Component/Menu';
import Bottom from '@/pages/Component/Bottom';
import Nurseform from '@/pages/Component/Nurseform';
import { Contains } from '@/pages/Contains';
import Workspace from '@/pages/Component/Workspace';

const App:React.FC = () =>  {
  const [div, setdiv] = useState({
    top:"0",
    bot:"0"
  });
  const value = { div, setdiv };

  return (
    <Contains.Provider value={value}>
      <Workspace/>
    </Contains.Provider>
  )
}


export default App;

