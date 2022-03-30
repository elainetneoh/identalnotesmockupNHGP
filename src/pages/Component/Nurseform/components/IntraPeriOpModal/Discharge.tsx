import { Input, Row, Col, TimePicker, Checkbox, Card, Button } from 'antd';

import style from './index.less';

const { TextArea } = Input;

const Discharge = ({ span }: { span: number }) => {
  return (
    <Col span={span}>
      <Card>
        <Row className={style.header}>
          <h1>Pre-Discharge Check List</h1>
        </Row>

        {/**Checkbox */}
        <Row className={style['checkbox-list']}>
          <Checkbox>No active bleeding</Checkbox>
          <Checkbox>Not dizzy</Checkbox>
          <Checkbox>Not in severe pain</Checkbox>
        </Row>

        {/**Parameters */}
        <Row className={style['field-list']}>
          <strong className={style.h2}>Parameters</strong>
          <div>
            <label className={style['parametertext']}>PR/min:</label>
            <Input className={style['parametertextbox']} />
          </div>

          <div>
            <label className={style['parametertext']}>Bp/mmHg:</label>
            <Input className={style['parametertextbox']} />
          </div>

          <div>
            <label className={style['parametertext']}>O₂ saturation:</label>
            <Input className={style['parametertextbox']} />
          </div>

          <div>
            <label className={style['parametertext']}>Pain score:</label>
            <Input className={style['parametertextbox']} />
          </div>
        </Row>

        {/**Discharged with */}
        {/* <Row className={style['checkbox-list']}>
          <strong className={style.h2}>Discharged with:</strong>
          <Checkbox>Procedure summary</Checkbox>
          <Checkbox>Postoperative instructions</Checkbox>
          <Checkbox>Medical certificate</Checkbox>
          <Checkbox>Gauze pack</Checkbox>
          <Checkbox>Instructions to collect medication</Checkbox>
          <Checkbox>Appointment for review, if any</Checkbox>
        </Row> */}

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
