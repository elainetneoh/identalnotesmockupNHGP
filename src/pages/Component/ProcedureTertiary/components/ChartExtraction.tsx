import React from 'react';
import { Collapse, Image } from 'antd';
import DentalChart4 from '../images/DentalChart44.png';

const ChartExtraction: React.FC = () => {
  const { Panel } = Collapse;

  return (
    <Collapse defaultActiveKey={['chart']}>
      <Panel header="Chart" key={'chart'}>
        <a>
          <Image src={DentalChart4} preview={false} />
        </a>
      </Panel>
    </Collapse>
  );
};

export default ChartExtraction;
