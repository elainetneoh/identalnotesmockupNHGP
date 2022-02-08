import { Button, Layout } from 'antd';
import MainMenu from '@/pages/Component/Menu';
import { Contains } from '@/pages/Contains';
import Bottom from '@/pages/Component/Bottom';
import React from 'react';
import Top from '@/pages/Component/Top';
import ReactSplit, { SplitDirection } from '@devbookhq/splitter';
import style from './index.less';
import SplitPane from 'react-split-pane';


const { Header, Content, Sider } = Layout;


const Workspace: React.FC = () => {
  return (
    <div>
      <Layout style={{ height: "100%"}}>
        <Header>
          <div>
          </div>
        </Header>
        <Layout>
          <Sider>
            <MainMenu />
          </Sider>
          <Content style={{ minHeight: 725,marginLeft:"20px",marginRight:"0px"}}>
            <div >
              <Contains.Consumer>
                {({ div, setdiv }) =>(
                  <div>
                    {div.top === '0' && (
                      <div className={style.height}>
                        <Contains.Provider value={{div,setdiv}}>
                          <Bottom />
                        </Contains.Provider>
                      </div>
                    )}
                    {div.top !== '0' && (
                      <div className={style.height}>
                        <Contains.Provider value={{div,setdiv}}>
                            <Top/>
                            <Bottom/>
                        </Contains.Provider>
                      </div>
                    )}
                  </div>
                )}
              </Contains.Consumer>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Workspace;

