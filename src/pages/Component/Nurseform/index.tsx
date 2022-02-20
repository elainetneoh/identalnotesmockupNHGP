import React, { useState } from 'react';
import {
  Input,
  Button,
  Form,
  Select,
  Row,
  Col,
  DatePicker,
  Typography,
  TimePicker,
  Tabs,
  Modal,
  Checkbox,
  Card,
  Space,
  Table,
  List,
} from 'antd';
import style from './index.less';
import {
  StepBackwardFilled,
  CaretLeftFilled,
  CaretRightOutlined,
  StepForwardOutlined,
  CloseOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import moment from 'moment';
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react';
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from 'antd';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const format = 'HH:mm';
const { TabPane } = Tabs;

const Nurseform: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Column } = Table;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  const data3 = [
    {
      key: '1',
      consumables: 'Implant, Crown, Simple',
      code: 'BPC012',
      unit: '1',
      price: '300',
      lotnumber: 'LOT00332211',
    },
    {
      key: '1',
      consumables: 'Create and fix',
      code: 'HPB013',
      unit: '2',
      price: '200',
      lotnumber: 'LOT00332212',
    },
    {
      key: '1',
      consumables: 'Replace',
      code: 'HKK014',
      unit: '3',
      price: '100',
      lotnumber: 'LOT00332213',
    },
    {
      key: '1',
      consumables: 'Crown',
      code: 'PLK014',
      unit: '4',
      price: '700',
      lotnumber: 'LOT00332214',
    },
    {
      key: '1',
      consumables: 'Simple',
      code: 'HDR014',
      unit: '5',
      price: '800',
      lotnumber: 'LOT00332215',
    },
  ];
  console.log(moment());
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
            <Select style={{ width: '5%' }}>
              <Option value="Print">Print</Option>
            </Select>
            <pre> </pre>
            <Button> SMS</Button>
          </Row>
          <Row>
            <Col span={22}>
              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 500 }}
                layout="horizontal"
              >
                <Row>
                  <Col span={8}>
                    <Form.Item
                      label="Date"
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <DatePicker style={{ width: '70%' }} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={8}>
                    <Form.Item
                      label="Nurse"
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <Input style={{ width: '70%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={2} />
                  <Col>
                    <Form.Item
                      label="Time in"
                      labelCol={{ span: 9 }}
                      labelAlign={'left'}
                    >
                      <TimePicker format={format} style={{ width: '110%' }} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={8}>
                    <Form.Item
                      label="location"
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '70%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={2} />
                  <Col>
                    <Form.Item
                      label="Time out"
                      labelCol={{ span: 9 }}
                      labelAlign={'left'}
                    >
                      <TimePicker format={format} style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <Divider />

          <div style={{ color: 'red' }}>
            *This will be linked to TOSP procedure for Billing
          </div>

          <Row>
            <Col span={21}>
              {/* <Form.Item label="Material and consumables"> */}
              <Form.Item label="">
                <Table
                  style={{ width: '99%' }}
                  pagination={false}
                  dataSource={data3}
                  size="small"
                >
                  <Column
                    title="Consumables"
                    dataIndex="consumables"
                    key="consumables"
                    width="8%"
                  />
                  <Column title="Code" dataIndex="code" key="code" width="5%" />
                  <Column title="Unit" dataIndex="unit" key="unit" width="5%" />
                  <Column
                    title="Price"
                    dataIndex="price"
                    key="price"
                    width="5%"
                  />
                  <Column
                    title="Lot Number"
                    dataIndex="lotnumber"
                    key="lotnumber"
                    width="5%"
                  />
                  <Column
                    width="1%"
                    title={() => {
                      return (
                        <div>{/* <Button type="primary">Add</Button> */}</div>
                      );
                    }}
                    key="action"
                    render={() => (
                      <Space size="middle">
                        <a>Add </a>
                        <a>Delete</a>
                      </Space>
                    )}
                  />
                </Table>
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={1}>
              <Text>Notes</Text>
            </Col>
            <Col span={17} />
            <Col>
              <Row>
                {/*start*/}
                <Button onClick={showModal2}>INTRAOP</Button>
                <Modal
                  title="INTRAOP"
                  visible={isModalVisible2}
                  onOk={handleOk2}
                  onCancel={handleCancel2}
                  width={1000}
                  style={{ fontSize: 20 }}
                >
                  <Row gutter={{ xs: 8 }}>
                    <Col span={22}>
                      <Card>
                        <Row>
                          <Text
                            style={{
                              backgroundColor: 'black',
                              width: '100%',
                              height: '50px',
                              color: 'white',
                              fontSize: 25,
                              paddingLeft: '35px',
                            }}
                          >
                            Intra-Operative Check List:
                          </Text>
                        </Row>
                        <Row style={{ marginTop: '25px' }} gutter={16}>
                          <Col span={24}>
                            <Form.Item
                              name={'Operation'}
                              label="Operation"
                              labelCol={{ span: 4 }}
                              labelAlign="left"
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={24}>
                            <Form.Item
                              name={'Procedure Room'}
                              label="Procedure Room"
                              labelCol={{ span: 4 }}
                              labelAlign="left"
                            >
                              <Select>
                                <Option value="OR1">OR1</Option>
                                <Option value="OR2">OR2</Option>
                                <Option value="OR3">OR3</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name={'Surgeon'}
                              label="Surgeon"
                              labelAlign="left"
                              labelCol={{ span: 8 }}
                            >
                              <Select>
                                <Option value="Surgone A">Surgone A</Option>
                                <Option value="Surgone B">Surgone B</Option>
                                <Option value="Surgone C">Surgone C</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name={'Assistant'}
                              label="Assistant"
                              labelAlign="left"
                              labelCol={{ span: 8 }}
                            >
                              <Select>
                                <Option value="Assistant A">Assistant A</Option>
                                <Option value="Assistant B">Assistant B</Option>
                                <Option value="Assistant C">Assistant C</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name={'Scrub Nurse'}
                              label="Scrub Nurse"
                              labelAlign="left"
                              labelCol={{ span: 8 }}
                            >
                              <Select>
                                <Option value="Scrub Nurse A">
                                  Scrub Nurse A
                                </Option>
                                <Option value="Scrub Nurse B">
                                  Scrub Nurse B
                                </Option>
                                <Option value="Scrub Nurse C">
                                  Scrub Nurse C
                                </Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name={'Circulating Nurse'}
                              label="Circulating Nurse"
                              labelAlign="left"
                              labelCol={{ span: 8 }}
                            >
                              <Select>
                                <Option value="Circulating Nurse A">
                                  Circulating Nurse A
                                </Option>
                                <Option value="Circulating Nurse B">
                                  Circulating Nurse B
                                </Option>
                                <Option value="Circulating Nurse C">
                                  Circulating Nurse C
                                </Option>
                              </Select>
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name={'Surgery Start'}
                              label="Surgery Start"
                              labelAlign="left"
                              labelCol={{ span: 8 }}
                            >
                              <DatePicker
                                showTime
                                showSecond={false}
                                style={{ width: '100%' }}
                              />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name={'Surgery End'}
                              label="Surgery End"
                              labelAlign="left"
                              labelCol={{ span: 8 }}
                            >
                              <DatePicker
                                showTime
                                showSecond={false}
                                style={{ width: '100%' }}
                              />
                            </Form.Item>

                            <Form.Item
                              name={'Time Out'}
                              label="Time Out"
                              labelAlign="left"
                              labelCol={{ span: 8 }}
                            >
                              <DatePicker
                                showTime
                                showSecond={false}
                                style={{ width: '100%' }}
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={16}>
                          <Col span={12}>
                            <List
                              header={<div>Sign In</div>}
                              bordered
                              dataSource={[
                                'Patient Identification',
                                'Confirmed Consent',
                                'Site of Operation',
                              ]}
                              renderItem={(item) => (
                                <List.Item>
                                  <Checkbox>{item}</Checkbox>
                                </List.Item>
                              )}
                              footer={
                                <>
                                  <div>Allergy</div>
                                  <div>
                                    <TextArea style={{ height: 150 }} />
                                  </div>
                                </>
                              }
                            />
                          </Col>
                          <Col span={12}>
                            <List
                              header={<div>Sign Out</div>}
                              bordered
                              dataSource={[
                                'Instruments',
                                'Sharps and Swabs',
                                'Specimens',
                              ]}
                              renderItem={(item) => (
                                <List.Item>
                                  <Checkbox>{item}</Checkbox>
                                </List.Item>
                              )}
                              footer={
                                <>
                                  <div>Post-op concern and management </div>
                                  <div>
                                    <TextArea style={{ height: 150 }} />
                                  </div>
                                </>
                              }
                            />
                          </Col>
                        </Row>

                        <Text style={{ fontSize: 20 }}> Remarks:</Text>

                        <TextArea style={{ height: 80 }} />

                        <Text style={{ fontSize: 20 }}> Recorded by:</Text>

                        <Row>
                          <Input style={{ width: '65%' }} />
                          <Text style={{ fontSize: 20 }}>@</Text>
                          <TimePicker style={{ width: '32%' }} />
                        </Row>
                        <p />
                        <Row>
                          <Col span={21} />
                          <Col>
                            <Button
                              style={{
                                fontSize: 20,
                                height: '40px',
                                width: '100%',
                              }}
                            >
                              Export
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                </Modal>
                <pre> </pre>

                {/*end*/}

                <Button onClick={showModal}>PERIOP</Button>
                <Modal
                  title="PERIOP"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  width={1400}
                  style={{ fontSize: 20 }}
                >
                  <Row gutter={{ xs: 8 }}>
                    <Col span={11}>
                      <Card>
                        <Row>
                          <Text
                            style={{ backgroundColor: 'black', width: '5%' }}
                          />
                          <Text
                            style={{
                              backgroundColor: 'black',
                              width: '95%',
                              height: '50px',
                              color: 'white',
                              fontSize: 25,
                            }}
                          >
                            Pre-operative Check List
                          </Text>
                        </Row>
                        <strong>
                          <Text style={{ fontSize: 20 }}>
                            Pre-Operative Review:{' '}
                          </Text>
                        </strong>
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>
                              Correct patient
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>Valid consent</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>
                              Operation site & side verified
                            </Text>
                          </Col>
                        </Row>
                        <p />
                        <strong>
                          <Text style={{ fontSize: 20 }}> Parameters:</Text>
                        </strong>
                        <Form
                          labelCol={{ span: 0 }}
                          wrapperCol={{ span: 500 }}
                          layout="horizontal"
                          labelAlign={'left'}
                        >
                          <div>
                            <Form.Item label="PR/min" labelCol={{ span: 4 }}>
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                            <Form.Item label="BP/mmHg" labelCol={{ span: 4 }}>
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                            <Form.Item
                              label="O2 saturation"
                              labelCol={{ span: 4 }}
                            >
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                            <Form.Item
                              label="Pain score"
                              labelCol={{ span: 4 }}
                            >
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                          </div>
                        </Form>
                        <strong>
                          <Text style={{ fontSize: 20 }}> Remarks:</Text>
                        </strong>
                        <TextArea style={{ height: 80 }} />
                        <p />
                        <strong>
                          <Text style={{ fontSize: 20 }}> Recorded by:</Text>
                        </strong>
                        <Row>
                          <Input style={{ width: '60%' }} />
                          <Text style={{ fontSize: 20 }}>@</Text>
                          <TimePicker style={{ width: '30%' }} />
                        </Row>
                        <p />
                        <Row>
                          <Col span={19} />
                          <Col>
                            <Button style={{ fontSize: 20, height: '40px' }}>
                              Export
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Col>

                    <Col span={2}></Col>

                    <Col span={11}>
                      <Card>
                        <Row>
                          <Text
                            style={{ backgroundColor: 'black', width: '5%' }}
                          />
                          <Text
                            style={{
                              backgroundColor: 'black',
                              width: '95%',
                              height: '50px',
                              color: 'white',
                              fontSize: 25,
                            }}
                          >
                            Pre-Discharge Check List:
                          </Text>
                        </Row>
                        <strong>
                          <Text style={{ fontSize: 20 }}>
                            {' '}
                            Pre-Discharge Review:
                          </Text>
                        </strong>
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>
                              No active bleeding
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>Not dizzy</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>
                              Not in severe pain
                            </Text>
                          </Col>
                        </Row>
                        <p />
                        <strong>
                          <Text style={{ fontSize: 20 }}> Parameters:</Text>
                        </strong>
                        <Form
                          labelCol={{ span: 0 }}
                          wrapperCol={{ span: 500 }}
                          layout="horizontal"
                          labelAlign={'left'}
                        >
                          <div>
                            <Form.Item label="PR/min" labelCol={{ span: 4 }}>
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                            <Form.Item label="BP/mmHg" labelCol={{ span: 4 }}>
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                            <Form.Item
                              label="O2 saturation"
                              labelCol={{ span: 4 }}
                            >
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                            <Form.Item
                              label="Pain score"
                              labelCol={{ span: 4 }}
                            >
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                          </div>
                        </Form>
                        <strong>
                          <Text style={{ fontSize: 20 }}> Remarks:</Text>
                        </strong>
                        <TextArea style={{ height: 80 }} />
                        <p />
                        <strong>
                          <Text style={{ fontSize: 20 }}> Recorded by:</Text>
                        </strong>
                        <Row>
                          <Input style={{ width: '60%' }} />
                          <Text style={{ fontSize: 20 }}>@</Text>
                          <TimePicker style={{ width: '30%' }} />
                        </Row>
                        <p />
                        <Row>
                          <Col span={19} />
                          <Col>
                            <Button style={{ fontSize: 20, height: '40px' }}>
                              Export
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                    {/*
                    <Col span={8}>
                      <Card>
                        <Row>
                          <Text
                            style={{ backgroundColor: 'black', width: '5%' }}
                          />
                          <Text
                            style={{
                              backgroundColor: 'black',
                              width: '95%',
                              height: '50px',
                              color: 'white',
                              fontSize: 25,
                            }}
                          >
                            Intra-Operative Check List:
                          </Text>
                        </Row>
                        <strong>
                          <Text style={{ fontSize: 20 }}>
                            {' '}
                            Intra-Operative Review:
                          </Text>
                        </strong>
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>Test 1</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>Test 2</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>Test 3</Text>
                          </Col>
                        </Row>
                        <p />
                        <strong>
                          <Text style={{ fontSize: 20 }}> Parameters:</Text>
                        </strong>
                        <Form
                          labelCol={{ span: 0 }}
                          wrapperCol={{ span: 500 }}
                          layout="horizontal"
                          labelAlign={'left'}
                        >
                          <div>
                            <Form.Item label="PR/min" labelCol={{ span: 4 }}>
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                            <Form.Item label="BP/mmHg" labelCol={{ span: 4 }}>
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                            <Form.Item
                              label="O2 saturation"
                              labelCol={{ span: 4 }}
                            >
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                            <Form.Item
                              label="Pain score"
                              labelCol={{ span: 4 }}
                            >
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                          </div>
                        </Form>
                        <strong>
                          <Text style={{ fontSize: 20 }}> Remarks:</Text>
                        </strong>
                        <TextArea style={{ height: 80 }} />
                        <p />
                        <strong>
                          <Text style={{ fontSize: 20 }}> Recorded by:</Text>
                        </strong>
                        <Row>
                          <Input style={{ width: '60%' }} />
                          <Text style={{ fontSize: 20 }}>@</Text>
                          <TimePicker style={{ width: '30%' }} />
                        </Row>
                        <p />
                        <Row>
                          <Col span={19} />
                          <Col>
                            <Button style={{ fontSize: 20, height: '40px' }}>
                              Export
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                          */}
                  </Row>
                </Modal>
                <pre> </pre>

                <Button onClick={showModal1}>Discharge</Button>
                <Modal
                  title="Discharge"
                  visible={isModalVisible1}
                  onOk={handleOk1}
                  onCancel={handleCancel1}
                  width={600}
                  style={{ fontSize: 20 }}
                >
                  <Card>
                    <strong>
                      <Text style={{ fontSize: 20 }}> Discharged with:</Text>
                    </strong>
                    <Row>
                      <Col span={2}>
                        <Checkbox />
                      </Col>
                      <Col span={22}>
                        <Text style={{ fontSize: 20 }}>Procedure summary</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={2}>
                        <Checkbox />
                      </Col>
                      <Col span={22}>
                        <Text style={{ fontSize: 20 }}>
                          Postoperative instructions
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={2}>
                        <Checkbox />
                      </Col>
                      <Col span={22}>
                        <Text style={{ fontSize: 20 }}>Gauze pack</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={2}>
                        <Checkbox />
                      </Col>
                      <Col span={22}>
                        <Text style={{ fontSize: 20 }}>
                          Instructions to collect medication
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={2}>
                        <Checkbox />
                      </Col>
                      <Col span={22}>
                        <Text style={{ fontSize: 20 }}>Review appointment</Text>
                      </Col>
                    </Row>
                    <p />
                    <strong>
                      <Text style={{ fontSize: 20 }}> Remarks:</Text>
                    </strong>
                    <TextArea style={{ height: 80 }} />
                    <p />
                    <strong>
                      <Text style={{ fontSize: 20 }}> Recorded by:</Text>
                    </strong>
                    <Row>
                      <Input style={{ width: '60%' }} />
                      <Text style={{ fontSize: 20 }}>@</Text>
                      <TimePicker style={{ width: '30%' }} />
                    </Row>
                    <p />
                    <Row>
                      <Col span={19} />
                      <Col>
                        <Button style={{ fontSize: 20, height: '40px' }}>
                          Export
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Modal>
                <pre> </pre>
                <Button>Template</Button>
              </Row>
            </Col>
          </Row>
          <Form
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 200 }}
            layout="horizontal"
          >
            <Row>
              <Col span={23}>
                <Form.Item labelCol={{ span: 5 }} labelAlign={'left'}>
                  <div className="App">
                    <CKEditor
                      style={{ width: '90%' }}
                      editor={ClassicEditor}
                      data="<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"
                    />
                  </div>
                </Form.Item>
              </Col>
              <col span={1} />
            </Row>
          </Form>
        </Col>
        <Col span={3}>
          <Tabs tabPosition="bottom" style={{ height: '100%' }}>
            <TabPane tab="Instrument" key="1" style={{ width: '90%' }}>
              <Row>
                <Button type="primary" icon={<PlusOutlined />}>
                  Add
                </Button>
                <pre> </pre>
                <Button type="primary" icon={<CloseOutlined />}>
                  delete
                </Button>
              </Row>
              <TextArea style={{ height: 1200 }} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default Nurseform;
