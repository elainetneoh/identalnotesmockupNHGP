import React from 'react';
import { Collapse, Image } from 'antd';
import DentalChart5 from '../images/DentalChart55.png';

const ChartFilling: React.FC = () => {
  const { Panel } = Collapse;

  return (
    <Collapse defaultActiveKey={['chart']}>
      <Panel header="Chart" key={'chart'}>
        <a>
          <Image src={DentalChart5} preview={false} />
        </a>
      </Panel>
    </Collapse>
  );
};

export default ChartFilling;
