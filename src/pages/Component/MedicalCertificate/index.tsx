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
  Checkbox,
  Radio,
} from 'antd';
import style from './index.less';
import {
  StepBackwardFilled,
  CaretLeftFilled,
  CaretRightOutlined,
  StepForwardOutlined,
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons';

import Test from '../../component/Test';

import { Divider } from 'antd';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const { Column } = Table;
const format = 'HH:mm';

const data = [
  {
    key: '1',
    issuedDate: '19/09/2020',
    period: '0',
    LOC: 'HOUP',
  },
  {
    key: '1',
    issuedDate: '29/09/2020',
    period: '0',
    LOC: 'GLND-SUB',
  },
  {
    key: '1',
    issuedDate: '9/10/2020',
    period: '0',
    LOC: 'GLND-SUB',
  },
  {
    key: '1',
    issuedDate: '9/10/2021',
    period: '1',
    LOC: 'AMKP',
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

const MedicalCertificate: React.FC = () => {
  return (
    <div className={style.Globalsettings}>
      <Form
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 200 }}
        layout="horizontal"
      ></Form>
      <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
        <Col span={7}>
          <Card style={{ height: 880 }}>
            <Row>
              <Text>Medical Certificate</Text>
            </Row>

            <pre></pre>
            <Row>
              <Text>MC History</Text>
            </Row>

            <pre></pre>

            <Divider></Divider>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="Institution"
                  labelCol={{ span: 13 }}
                  labelAlign={'left'}
                >
                  <Select style={{ width: '280%' }} />
                </Form.Item>
              </Col>
              <Col span={7}></Col>

              <Col span={5}>
                <Form.Item
                  label="Status"
                  labelCol={{ span: 12 }}
                  labelAlign={'left'}
                >
                  <Select style={{ width: '280%' }} />
                </Form.Item>
              </Col>
            </Row>

            <Divider></Divider>

            <Row>
              <Table
                style={{ width: '99%' }}
                pagination={false}
                dataSource={data}
              >
                <Column
                  width="15%"
                  title="Issued Date"
                  dataIndex="issuedDate"
                  key="issuedDate"
                />
                <Column
                  title="Period"
                  dataIndex="period"
                  key="sgd"
                  width="10%"
                />

                <Column width="15%" title="LOC" dataIndex="LOC" key="LOC" />
              </Table>
            </Row>
          </Card>
        </Col>

        <Col span={13}>
          <Card style={{ height: 280, width: 1300 }}>
            <Row>
              <Text>Preview</Text>
            </Row>

            <pre></pre>

            <Divider></Divider>
            <Row>
              <TextArea style={{ height: 150 }}></TextArea>
            </Row>
          </Card>

          <pre></pre>

          <Card style={{ height: 600, width: 1300 }}>
            <Row>
              <Text>Current MC</Text>
            </Row>

            <pre></pre>

            <Divider></Divider>

            <Row>
              <StepBackwardFilled
                style={{ fontSize: 25, color: 'royalblue' }}
              />
              <CaretLeftFilled style={{ fontSize: 25, color: 'royalblue' }} />
              {/*<Input style={{ width: '2%', height: '30px' }} />*/}
              <Text style={{ fontSize: 16 }}> 13 of 13 </Text>
              <CaretRightOutlined
                style={{ fontSize: 25, color: 'royalblue' }}
              />
              <StepForwardOutlined
                style={{ fontSize: 25, color: 'royalblue' }}
              />

              <pre> </pre>

              <Button>New</Button>
              <pre> </pre>
              <Button>Delete</Button>
              <pre> </pre>
              <Button>Cancel MC</Button>
              <pre> </pre>
              <Button>Print</Button>
              <pre> </pre>
              <Button style={{ color: 'red' }}>Audit(MC)</Button>
              <pre> </pre>
              <Col offset={9}>
                <Button style={{ color: 'black' }}>
                  {' '}
                  <SearchOutlined />
                  Search MC
                </Button>
              </Col>
              <pre> </pre>
            </Row>

            <Row>
              <Col span={12}>
                <pre></pre>
                <Row>
                  <Text> Type of Leave Granted</Text>
                  <br></br>
                </Row>

                <Row>
                  <Col span={9}>
                    <Checkbox style={{ fontSize: 16 }}>
                      Outpatient Sick Leave
                    </Checkbox>
                  </Col>
                  <Col span={10}>
                    <Checkbox style={{ fontSize: 16 }}>
                      Hospitalization Leave
                    </Checkbox>
                  </Col>
                </Row>

                <Row>
                  <Col span={9}>
                    <Checkbox style={{ fontSize: 16 }}>
                      Sterilisation Leave
                    </Checkbox>
                  </Col>
                  <Col span={9}>
                    <Checkbox style={{ fontSize: 16 }}>
                      Maternity Leave
                    </Checkbox>
                  </Col>
                </Row>

                <Row>
                  <Col span={9}>
                    <Radio style={{ fontSize: 16 }}>Fit to Attend Court</Radio>
                  </Col>
                  <Col span={10}>
                    <Radio style={{ fontSize: 16 }}>
                      Unfit to Attend Court
                    </Radio>
                  </Col>
                </Row>

                <Row style={{ width: 500 }}>
                  <Text>Remarks</Text>
                  <TextArea style={{ height: 300 }}></TextArea>
                </Row>
              </Col>

              <Col span={9}>
                <Row>
                  <pre></pre>
                  <Checkbox>Time Chit</Checkbox>
                </Row>
                <Row>
                  <Col span={7}>
                    <pre></pre>
                    <Text>Start Time:</Text>
                    <br></br>
                    <br></br>
                    <Text>End Time:</Text>
                  </Col>

                  <Col span={16}>
                    <pre></pre>
                    <TimePicker
                      style={{ width: '75%', height: 30 }}
                      format={format}
                    />
                    <pre></pre>
                    <TimePicker
                      style={{ width: '75%', height: 30 }}
                      format={format}
                    />
                    <br></br>
                  </Col>
                </Row>

                <pre></pre>
                <Row>
                  <Checkbox>Unfit for Duty</Checkbox>
                </Row>
                <Row>
                  <Col span={7}>
                    <pre></pre>
                    <Text>No of Day(s)</Text>
                    <pre></pre>
                    <Text>From Date:</Text>
                    <br></br>
                    <br></br>
                    <Text>To Date (Inclusive):</Text>
                  </Col>

                  <Col span={17}>
                    <pre></pre>
                    <Select style={{ width: '70%', height: 30 }}></Select>
                    <pre></pre>
                    <TimePicker
                      style={{ width: '70%', height: 30 }}
                      format={format}
                    />
                    <pre></pre>
                    <TimePicker
                      style={{ width: '70%', height: 30 }}
                      format={format}
                    />
                    <br></br>
                  </Col>
                </Row>

                <pre></pre>

                <Row>
                  <Checkbox>Fit for Light</Checkbox>
                </Row>
                <Row>
                  <Col span={7}>
                    <pre></pre>
                    <Text>No of Day(s)</Text>
                    <pre></pre>
                    <Text>From Date:</Text>
                    <br></br>
                    <br></br>
                    <Text>To Date: </Text>
                  </Col>

                  <Col span={17}>
                    <pre></pre>
                    <Select style={{ width: '70%', height: 30 }}></Select>
                    <pre></pre>
                    <DatePicker style={{ width: '70%', height: 30 }} />
                    <pre></pre>
                    <DatePicker
                      style={{ width: '70%', height: 30 }}
                      format={format}
                    />
                    <br></br>
                  </Col>
                </Row>
                {/*<Row>
                  <Test name = "eileen"></Test>
                  <Test name = "ali"></Test>
                  <Test name = "meiling"></Test>
                </Row>*/}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <p />
    </div>
  );
};
export default MedicalCertificate;
