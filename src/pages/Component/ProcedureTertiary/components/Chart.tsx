import React, { useState } from 'react';
import { Collapse, Image, Popconfirm } from 'antd';
import DentalChart1 from '../images/DentalChart1.jpg';
import DentalChart2 from '../images/DentalChart2.jpg';
import DentalChart3 from '../images/DentalChart3.jpg';

const Chart: React.FC = () => {
  const [image, setImage] = useState(1);
  const { Panel } = Collapse;
  const changeImage = () => {
    if (image === 3) setImage(1);
    else setImage((pre) => pre + 1);
  };
  const getImage = () => {
    switch (image) {
      case 1:
        return DentalChart1;
      case 2:
        return DentalChart2;
      case 3:
        return DentalChart3;
    }
  };
  return (
    <Collapse defaultActiveKey={['chart']}>
      <Panel header="Chart" key={'chart'}>
        <a>
          <Image onClick={changeImage} src={getImage()} preview={false} />
        </a>
      </Panel>
    </Collapse>
  );
};

export default Chart;
