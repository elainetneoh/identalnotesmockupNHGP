import React, { useState } from 'react';
import { Collapse, Image } from 'antd';
import Tooth_23 from '../images/Tooth_23.jpg';
import Tooth_23_Circle from '../images/Tooth_23_Circle.jpg';

const Chart: React.FC = () => {
  const [image, setImage] = useState(Tooth_23);
  const { Panel } = Collapse;
  return (
    <Collapse defaultActiveKey={['chart']}>
      <Panel header="Chart" key={'chart'}>
        <a>
          <Image
            onClick={() => setImage(Tooth_23_Circle)}
            src={image}
            preview={false}
          />
        </a>
      </Panel>
    </Collapse>
  );
};

export default Chart;
