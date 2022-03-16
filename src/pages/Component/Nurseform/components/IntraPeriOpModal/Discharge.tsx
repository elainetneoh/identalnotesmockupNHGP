import { Input, Row, Col, TimePicker, Checkbox, Card, Button } from 'antd';

import style from './index.less';

const { TextArea } = Input;

const Discharge = ({ span }: { span: number }) => {
  return (
    <Col span={span}>
      <Card>
        <Row className={style.header}>
          <h1>Discharge</h1>
        </Row>

        {/**Checkbox */}
        <Row className={style['checkbox-list']}>
          <Checkbox>Not dizzy</Checkbox>
          <Checkbox>No active bleeding</Checkbox>
          <Checkbox>Not in severe pain</Checkbox>
        </Row>

        {/**Parameters */}
        <Row className={style['field-list']}>
          <strong className={style.h2}>Parameter</strong>
          <div>
            <label>PR/min:</label>
            <Input />
          </div>

          <div>
            <label>Bp/mmHg:</label>
            <Input />
          </div>

          <div>
            <label>O₂ saturation:</label>
            <Input />
          </div>

          <div>
            <label>Pain score:</label>
            <Input />
          </div>
        </Row>

        {/**Discharged with */}
        <Row className={style['checkbox-list']}>
          <strong className={style.h2}>Discharged with:</strong>
          <Checkbox>Procedure summary</Checkbox>
          <Checkbox>Postoperative instructions</Checkbox>
          <Checkbox>Medical certificate</Checkbox>
          <Checkbox>Gauze pack</Checkbox>
          <Checkbox>Instructions to collect medication</Checkbox>
          <Checkbox>Appointment for review, if any</Checkbox>
        </Row>

        {/**Remarks */}
        <Row className={style.remarks}>
          <strong className={style.h2}>Remarks</strong>
          <TextArea className={style['remarks-textarea']} />
        </Row>

        {/**Recorded by */}
        <Row className={style['recorded-by']}>
          <strong className={style.h2}>Recorded by:</strong>
          <div>
            <Input />
            <p className={style.amphersand}>@</p>
            <TimePicker />
          </div>
        </Row>

        {/**Export */}
        <Row className={style['export']}>
          <Button>Export</Button>
        </Row>
      </Card>
    </Col>
  );
};

export default Discharge;
