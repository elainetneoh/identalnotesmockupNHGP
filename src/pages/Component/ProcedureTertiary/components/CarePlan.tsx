import React from 'react';
import { Row, Col, Card, Checkbox, Button, Input } from 'antd';
import style from '../index.less';
import { TextAreaRef } from 'antd/lib/input/TextArea';

type CarePlanProps = {
  CreateClicked: () => void;
};

const CarePlan: React.FC<CarePlanProps> = (props) => {
  const { CreateClicked } = props;
  const { TextArea } = Input;

  const options = [
    { label: 'Orthodontics', value: 'Orthodontics' },
    { label: 'Scaling', value: 'Scaling' },
    { label: 'Filling', value: 'Filling' },
    { label: 'Extraction', value: 'Extraction' },
    { label: 'Fixed prosthodontics', value: 'FillFixed prosthodonticsing' },
    { label: 'Removable prosthodontics', value: 'Removable prosthodontics' },
    { label: 'Endodontics', value: 'Endodontics' },
    { label: 'Periodontics', value: 'Periodontics' },
    { label: 'OMS', value: 'OMS' },
    { label: 'Oral Medicine', value: 'Oral Medicine' },
    {
      label: 'Return to GP/SAF/polyclinic',
      value: 'Return to GP/SAF/polyclinic',
    },
  ];
  return (
    <Card className={style.careplansection}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Checkbox.Group options={options} />
        </Col>

        <Col span={24}>
          <TextArea />
        </Col>

        <Col span={24}>
          <Button onClick={CreateClicked}>Confirm Care Plan Created</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default CarePlan;
