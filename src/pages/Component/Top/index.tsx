import React from 'react';
import style from './index.less';
import Nurseform from '@/pages/Component/Nurseform';
import { Button, Image } from 'antd';
import { Contains } from '@/pages/Contains';
import Surgicalform from '@/pages/Component/Surgicalform';
import DaySurgicalform from '@/pages/Component/Daysurgery';
import Bottom from '@/pages/Component/Bottom';
import dentalChart from '@/pages/Component/ProcedureTertiary/images/DentalChart.jpeg';


const Top: React.FC = () => {

  return (
    <Contains.Consumer>
      {({ div, setdiv }) =>(
      <div >
        <div>{ div.top === '0' && (
          <div className={style.scrollable}>
          </div>

        )}
          { div.top === 'C1' && (
            <div className={style.scrollable}>
              <Image src={dentalChart} style={{width:"100%"}}/>
            </div>
          )}</div>
      </div>

      )}
    </Contains.Consumer>
    );
}
export default Top;
