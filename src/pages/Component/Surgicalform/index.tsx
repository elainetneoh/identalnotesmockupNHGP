import React from 'react';
import { Input, Button, Form, Select, Row, Col, Typography, Table } from 'antd';
import style from './index.less';
import {
  StepBackwardFilled,
  CaretLeftFilled,
  CaretRightOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';

import { Divider } from 'antd';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const { Column } = Table;
const Surgicalform: React.FC = () => {
  return (
    <div className={style.Globalsettings}>
      <Row>
        <Col span={21}>
          <Row>
            <StepBackwardFilled style={{ fontSize: 25, color: 'royalblue' }} />
            <CaretLeftFilled style={{ fontSize: 25, color: 'royalblue' }} />
            <Input style={{ width: '2%', height: '30px' }} />
            <Text style={{ fontSize: 16 }}> of 42 </Text>
            <CaretRightOutlined style={{ fontSize: 25, color: 'royalblue' }} />
            <StepForwardOutlined style={{ fontSize: 25, color: 'royalblue' }} />
            <pre> </pre>
            <Select style={{ width: '10%' }}>
              <Option value="Completed">Completed</Option>
            </Select>
            <pre> </pre>
            <Button>Import</Button>
            <pre> </pre>
            <Button>Delete</Button>
            <pre> </pre>
            <Button>Audit 1</Button>
            <pre> </pre>
            <Button>Audit 2</Button>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider orientation="left">Admission Details</Divider>
          <Form labelCol={{ span: 0 }} wrapperCol={{ span: 200 }} layout="horizontal">
            <Row>
              <Col span={10}>
                <Form.Item labelCol={{ span: 6 }} labelAlign={'left'} label="Operation date">
                  <Input style={{ width: '60%' }} />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item labelCol={{ span: 6 }} labelAlign={'left'} label="Admit type">
                  <Input style={{ width: '60%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <Form.Item labelCol={{ span: 6 }} labelAlign={'left'} label="Nature of operation">
                  <Input style={{ width: '60%' }} />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item labelCol={{ span: 6 }} labelAlign={'left'} label="Financial status">
                  <Input style={{ width: '60%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <Form.Item labelCol={{ span: 6 }} labelAlign={'left'} label="Surgical typer">
                  <Input style={{ width: '60%' }} />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item labelCol={{ span: 6 }} labelAlign={'left'} label="Operation theatre">
                  <Input style={{ width: '60%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <Form.Item labelCol={{ span: 6 }} labelAlign={'left'} label="Anaesthesia">
                  <Input style={{ width: '60%' }} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider orientation="left">Preoperative Review</Divider>
          <Form labelCol={{ span: 0 }} wrapperCol={{ span: 200 }} layout="horizontal">
            <Row>
              <Col span={10}>
                <Form.Item labelCol={{ span: 6 }} labelAlign={'left'} label="Surgeon">
                  <Input style={{ width: '60%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <Form.Item labelCol={{ span: 6 }} labelAlign={'left'} label="Date / Time">
                  <Input style={{ width: '60%' }} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <Form labelCol={{ span: 0 }} wrapperCol={{ span: 200 }} layout="vertical">
            <Form.Item labelCol={{ span: 6 }} labelAlign={'left'} label="Comment">
              <TextArea style={{ height: 100, width: '90%' }} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider orientation="left">Operative Details</Divider>
          <Form labelCol={{ span: 0 }} wrapperCol={{ span: 200 }} layout="horizontal">
            <Row>
              <Col span={10}>
                <Form.Item labelCol={{ span: 6 }} labelAlign={'left'} label="Surgery start at">
                  <Input style={{ width: '60%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <Form.Item labelCol={{ span: 6 }} labelAlign={'left'} label="Surgery end at">
                  <Input style={{ width: '60%' }} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider orientation="left">Operators</Divider>
          <Form labelCol={{ span: 0 }} wrapperCol={{ span: 200 }} layout="vertical">
            <Row gutter={{ xs: 16 }}>
              <Col span={10}>
                <Form.Item labelAlign={'left'} label="Surgeon">
                  <Table style={{ width: '99%' }} pagination={false}>
                    <Column title="No." dataIndex="number" key="number" width="10%" />
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="MCR" dataIndex="mcr" key="mcr" width="10%" />
                  </Table>
                </Form.Item>
              </Col>
              <Col span={1} />
              <Col span={11}>
                <Form.Item labelAlign={'left'} label="Anaesthetist">
                  <Table style={{ width: '97%' }} pagination={false}>
                    <Column title="No." dataIndex="number" key="number" width="10%" />
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="MCR" dataIndex="mcr" key="mcr" width="10%" />
                  </Table>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider orientation="left">Diagnosis</Divider>
          <Form labelCol={{ span: 0 }} wrapperCol={{ span: 200 }} layout="vertical">
            <Form.Item labelAlign={'left'} label="Fixed diagnosis">
              <Table style={{ width: '90%' }} pagination={false}>
                <Column title="No." dataIndex="number" key="number" width="10%" />
                <Column title="Diagnosis" dataIndex="diagnosis" key="diagnosis" />
                <Column title="Code" dataIndex="code" key="code" width="10%" />
              </Table>
            </Form.Item>
            <Form.Item labelAlign={'left'} label="Other diagnosis">
              <TextArea style={{ height: 100, width: '90%' }} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider orientation="left">Operation Details</Divider>
          <Form labelCol={{ span: 0 }} wrapperCol={{ span: 200 }} layout="vertical">
            <Form.Item labelAlign={'left'} label="Operation">
              <Table style={{ width: '90%' }} pagination={false}>
                <Column title="Operation" dataIndex="operation" key="operation" />

                <Column title="Code" dataIndex="code" key="code" width="10%" />
                <Column title="Table" dataIndex="table" key="table" width="10%" />
              </Table>
            </Form.Item>
            <Form.Item labelAlign={'left'} label="Operation description">
              <TextArea style={{ height: 100, width: '90%' }} />
            </Form.Item>
            <Form.Item labelAlign={'left'} label="Findings">
              <TextArea style={{ height: 100, width: '90%' }} />
            </Form.Item>
            <Form.Item labelAlign={'left'} label="Operative procedure">
              <TextArea style={{ height: 100, width: '90%' }} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider orientation="left">Post-Operative Medication</Divider>
          <Form labelCol={{ span: 0 }} wrapperCol={{ span: 200 }} layout="vertical">
            <Form.Item labelAlign={'left'} label="Medication">
              <TextArea style={{ height: 100, width: '90%' }} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider orientation="left">Discharge Advice</Divider>
          <Form labelCol={{ span: 0 }} wrapperCol={{ span: 200 }} layout="vertical">
            <Form.Item labelAlign={'left'} label="Advice">
              <TextArea style={{ height: 100, width: '90%' }} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default Surgicalform;
