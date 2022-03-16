import {
  Input,
  Row,
  Col,
  Typography,
  TimePicker,
  Checkbox,
  Card,
  Button,
  Form,
  Divider,
} from 'antd';

import style from './index.less';

const PeriOp = ({ span }: { span: number }) => {
  return (
    <Col span={span}>
      <Card>
        <Row className={style.header}>
          <h1>Peri-Op</h1>
        </Row>

        {/**Sign in */}
        <Row className={style['checkbox-list']}>
          <strong className={style.h2}>Sign In</strong>

          <Checkbox>Patient identified, consent obtained</Checkbox>
          <Checkbox>Procedure reviewed</Checkbox>
          <Checkbox>Site of operation confirmed</Checkbox>
          <Checkbox>Antithrombotic therapy reviewed (if applicable)</Checkbox>
          <Checkbox>Allergies, if any</Checkbox>
        </Row>

        <Row className={style['recorded-by']}>
          <strong className={style.h2}>Recorded by:</strong>
          <div>
            <Input />
            <p className={style.amphersand}>@</p>
            <TimePicker />
          </div>
        </Row>

        <Row className={style['export']}>
          <Button>Export</Button>
        </Row>

        <Divider />

        {/**Time-out */}
        <Row className={style['checkbox-list']}>
          <strong className={style.h2}>Time-Out</strong>

          <Checkbox>Correct patient</Checkbox>
          <Checkbox>Correct procedure</Checkbox>
          <Checkbox>Correct site</Checkbox>
          <Checkbox>Correct radiographs {`&`} medical records</Checkbox>
          <Checkbox>Functioning equipment</Checkbox>
          <Checkbox>Instrument processed</Checkbox>
        </Row>

        <Row className={style['recorded-by']}>
          <strong className={style.h2}>Recorded by:</strong>
          <div>
            <Input />
            <p className={style.amphersand}>@</p>
            <TimePicker />
          </div>
        </Row>

        <Row className={style['export']}>
          <Button>Export</Button>
        </Row>

        <Divider />

        {/**Sign out */}
        <Row className={style['checkbox-list']}>
          <strong className={style.h2}>Sign-Out</strong>

          <Checkbox>Procedure as planned</Checkbox>
          <Checkbox>Instruments, sharps and swab counts correct</Checkbox>
          <Checkbox>Specimen(s) labelled (if applicable)</Checkbox>
          <Checkbox>Equipment functional</Checkbox>
          <Checkbox>Assisted to recovery room</Checkbox>
        </Row>

        <Row className={style['recorded-by']}>
          <strong className={style.h2}>Recorded by:</strong>
          <div>
            <Input />
            <p className={style.amphersand}>@</p>
            <TimePicker />
          </div>
        </Row>

        <Row className={style['export']}>
          <Button>Export</Button>
        </Row>
      </Card>
    </Col>
  );
};

export default PeriOp;
