import React from 'react';
import {
  Input,
  Button,
  Form,
  Select,
  Row,
  Col,
  Typography,
  Table,
  DatePicker,
  TimePicker,
  Space,
  Card,
} from 'antd';
import style from './index.less';
import {
  StepBackwardFilled,
  CaretLeftFilled,
  CaretRightOutlined,
  StepForwardOutlined,
  PlusOutlined,
} from '@ant-design/icons';

import { Divider } from 'antd';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const { Column } = Table;

const data = [
  {
    key: '1',
    estcharges: 'Operation',
    sgd: '1071',
  },
  {
    key: '1',
    estcharges: 'Estimated Total',
    sgd: '1071',
  },
];
const data2 = [
  {
    key: '1',
    MWL: 'Operation',
    sgd: '1850',
  },
  {
    key: '2',
    MWL: 'Daily hospital charges',
    sgd: '300',
  },
];
const DaySurgicalform: React.FC = () => {
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
            <Button>New</Button>
            <pre> </pre>
            <Button>Save As Final</Button>
            <pre> </pre>
            <Button>Save As Draft</Button>
            <pre> </pre>
            <Button>Delete</Button>
            <pre> </pre>
            <Button>Unlock</Button>
            <pre> </pre>
            <Select style={{ width: '5%' }} defaultValue="Print">
              <Option value="Print">Print</Option>
            </Select>
            <pre> </pre>
            <Button> SMS</Button>
          </Row>
        </Col>
      </Row>
      <Divider />
      <Form
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 200 }}
        layout="horizontal"
      >
        <Row gutter={{ xs: 4, sm: 8 }}>
          <Col span={16}>
            <Form.Item
              labelAlign={'left'}
              labelCol={{ span: 4 }}
              label="Operation"
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 4, sm: 8 }}>
          <Col span={16}>
            <Form.Item
              labelAlign={'left'}
              labelCol={{ span: 4 }}
              label="Operation Description"
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={2}>
            <Button style={{ width: '70%' }}>Template</Button>
          </Col>
        </Row>
        <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
          <Col span={10}>
            <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
              <Col span={16}>
                <Form.Item
                  labelAlign={'left'}
                  labelCol={{ span: 10 }}
                  label="Code"
                >
                  <Row gutter={{ xs: 4, sm: 16 }}>
                    <Col span={8}>
                      <Input />
                    </Col>
                    <Col span={16}>
                      <Select defaultValue="SF800T">
                        <Option value="SF800T">SF800T</Option>
                      </Select>
                    </Col>
                  </Row>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  labelAlign={'left'}
                  labelCol={{ span: 12 }}
                  label="Keyword Filter"
                >
                  <Select style={{ width: '120%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
              <Col span={16}>
                <Form.Item
                  labelAlign={'left'}
                  labelCol={{ span: 10 }}
                  label="Anaesthesia"
                >
                  <Select defaultValue="LwS">
                    <Option value="LwS">Local with sedation</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
              <Col span={22}>
                <Form.Item
                  labelAlign={'left'}
                  labelCol={{ span: 7 }}
                  label="Admission Status"
                >
                  <Row gutter={{ xs: 4, sm: 16 }}>
                    <Col span={12}>
                      <Select defaultValue="SDA">
                        <Option value="SDA">Same day admission</Option>
                      </Select>
                    </Col>
                    <Col span={12}>
                      <Select defaultValue="Medical">
                        <Option value="Medical">Medical</Option>
                      </Select>
                    </Col>
                  </Row>
                  <p />
                  <Row gutter={{ xs: 4, sm: 16 }}>
                    <Col span={12}>
                      <Select defaultValue="Subsidised">
                        <Option value="Subsidised">Subsidised</Option>
                      </Select>
                    </Col>
                    <Col span={12}>
                      <Select defaultValue="Elective">
                        <Option value="Elective">Elective</Option>
                      </Select>
                    </Col>
                  </Row>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={10}>
            <Row gutter={{ xs: 4, sm: 22 }}>
              <Col span={14}>
                <Form.Item
                  labelAlign={'left'}
                  labelCol={{ span: 7 }}
                  label="Date of Surgery"
                >
                  <DatePicker style={{ width: '105%' }} />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Button style={{ width: '100%' }}>Retrieve</Button>
              </Col>
            </Row>
            <Row gutter={{ xs: 4, sm: 22 }}>
              <Col span={14}>
                <Form.Item
                  labelAlign={'left'}
                  labelCol={{ span: 7 }}
                  label="Reporting Time"
                >
                  <TimePicker style={{ width: '105%' }} />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Button style={{ width: '100%' }}>Launch</Button>
              </Col>
            </Row>
            <Row gutter={{ xs: 4, sm: 22 }}>
              <Col span={14}>
                <Form.Item
                  labelAlign={'left'}
                  labelCol={{ span: 7 }}
                  label="Surgeon"
                >
                  <Input style={{ width: '105%' }} />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
      <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
        <Col span={10}>
          <Card style={{ height: 580 }}>
            <Table
              style={{ width: '99%' }}
              pagination={false}
              dataSource={data}
            >
              <Column
                title="Estimated Changes"
                dataIndex="estcharges"
                key="estcharges"
              />
              <Column title="SGD" dataIndex="sgd" key="sgd" width="10%" />

              <Column
                width="15%"
                title={() => {
                  return (
                    <div>
                      <Button type="primary" icon={<PlusOutlined />}>
                        Add
                      </Button>
                    </div>
                  );
                }}
                key="action"
                render={() => (
                  <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                  </Space>
                )}
              />
            </Table>
          </Card>
        </Col>

        <Col span={8}>
          <Row gutter={{ xs: 8, sm: 10 }}>
            <Col span={20}>
              <Table
                style={{ width: '99%' }}
                pagination={false}
                dataSource={data2}
              >
                <Column
                  title="Medisave Withdrawal Limit"
                  dataIndex="MWL"
                  key="MWL"
                />
                <Column title="SGD" dataIndex="sgd" key="sgd" width="10%" />

                <Column
                  width="15%"
                  title={() => {
                    return (
                      <div>
                        <Button type="primary" icon={<PlusOutlined />}>
                          Add
                        </Button>
                      </div>
                    );
                  }}
                  key="action"
                  render={() => (
                    <Space size="middle">
                      <a>Edit</a>
                      <a>Delete</a>
                    </Space>
                  )}
                />
              </Table>
            </Col>
          </Row>
          <p />
          <Row gutter={{ xs: 8, sm: 10 }}>
            <Col span={20}>
              <Card title="Special Instructions (Patient)">
                <TextArea style={{ height: 80 }} />
              </Card>
            </Col>
            <Col span={4}>
              <Button>Template</Button>
            </Col>
          </Row>
          <p />
          <Row gutter={{ xs: 8, sm: 10 }}>
            <Col span={20}>
              <Card title="Special Instructions (For office use only)">
                <TextArea style={{ height: 80 }} />
              </Card>
            </Col>
            <Col span={4}>
              <Button>Template</Button>
            </Col>
          </Row>
        </Col>

        <Col span={6}>
          <Card title="Acknowledged By">
            <Row>
              <Col>
                <Button>Thumb Print</Button>
              </Col>
              <Col span={4} />
              <Col>
                <Button>Signature</Button>
              </Col>
            </Row>
            <TextArea style={{ height: 80 }} />
            <p />
            <Form
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 200 }}
              layout="horizontal"
            >
              <Form.Item
                labelAlign={'left'}
                labelCol={{ span: 7 }}
                label="Name"
              >
                <Input />
              </Form.Item>
              <Form.Item
                labelAlign={'left'}
                labelCol={{ span: 7 }}
                label="NRIC"
              >
                <Input />
              </Form.Item>
              <Form.Item
                labelAlign={'left'}
                labelCol={{ span: 7 }}
                label="Relationship"
              >
                <Input />
              </Form.Item>
              <Form.Item
                labelAlign={'left'}
                labelCol={{ span: 7 }}
                label="Date"
              ></Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
      <p />

      <Form
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 200 }}
        layout="horizontal"
      >
        <Row>
          <Col span={10}>
            <Form.Item
              labelAlign={'left'}
              labelCol={{ span: 5 }}
              label="Entered by"
              style={{ width: '70%' }}
            >
              <Row>
                <pre> </pre>
                <Select style={{ width: '50%' }} />
                <pre> </pre>
                <DatePicker style={{ width: '40%' }} />
              </Row>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              labelAlign={'left'}
              labelCol={{ span: 4 }}
              label="Counselled by"
              style={{ width: '100%' }}
            >
              <Row>
                <Input style={{ width: '30%' }} />
                <pre> </pre>
                <DatePicker style={{ width: '25%' }} />
              </Row>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default DaySurgicalform;
