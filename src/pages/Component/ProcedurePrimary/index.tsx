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
  Table,
  Tabs,
  Modal,
  Checkbox,
  Card,
  Space,
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
import { Collapse } from 'antd';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const format = 'HH:mm';
const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Column } = Table;

const data = [
  {
    key: '1',
    procedure: 'Filling (3surface)',
    procedurecode: 'DBK003',
    unit: '1',
    price: '64.3',
    totalprice: '64.3',
    diagnosis: 'Abrasion',
    toothnumber: '21',
  },
];

const ProcedurePrimary: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  console.log(moment());

  function buttonClick(e: any) {
    e.stopPropagation();
    setIsModalVisible(true);
  }
  return (
    <div className={style.ProcedurePri}>
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
            <Button>Delete</Button>
            <pre> </pre>
            <Button>Unlock</Button>
            <pre> </pre>
            <Select style={{ width: '5%' }}>
              <Option value="Print">Print</Option>
            </Select>
            <pre> </pre>
            <Button style={{ color: 'red' }}>Audit(LAOP)</Button>
            <pre> </pre>
            <Button style={{ color: 'red' }}>Audit(REST)</Button>
            <pre> </pre>
            <Button>Prescribe Drug</Button>
            <pre> </pre>
            <Form
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 200 }}
              layout="horizontal"
            >
              <Form.Item label="Visit No">
                <Input style={{ width: '70%' }} />
              </Form.Item>
            </Form>
          </Row>
          <Row>
            <Col span={22}>
              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 500 }}
                layout="horizontal"
              >
                <Row>
                  <Col span={6}>
                    <Form.Item
                      label="Date"
                      labelCol={{ span: 5 }}
                      labelAlign={'left'}
                    >
                      <DatePicker style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Ref"
                      labelCol={{ span: 3 }}
                      labelAlign={'left'}
                    >
                      <Input style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item label="Location">
                      <Input style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>

                  <Col span={5}>
                    <Form.Item
                      label="Time in"
                      labelCol={{ span: 6 }}
                      labelAlign={'left'}
                    >
                      <TimePicker style={{ width: '90%' }} format={format} />
                    </Form.Item>
                  </Col>
                  <Col span={2}>
                    <Button style={{ background: 'red' }}>Bill</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col span={22}>
              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 500 }}
                layout="horizontal"
              >
                <Row>
                  <Col span={6}>
                    <Form.Item
                      label="Doctor"
                      labelCol={{ span: 5 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '90%' }}>
                        <Option value=""></Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Appt"
                      labelCol={{ span: 3 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '90%' }}>
                        <Option value="a" children={undefined}></Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col span={5}>
                    <Form.Item
                      label="Visit Type"
                      labelCol={{ span: 6 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '90%' }}>
                        <Option value="a" children={undefined}></Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      label="Time Out"
                      labelCol={{ span: 6 }}
                      labelAlign={'left'}
                    >
                      <TimePicker style={{ width: '90%' }} format={format} />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <Divider />
          <Form
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 200 }}
            layout="horizontal"
          >
            <Row>
              <Col span={21}>
                <Form.Item
                  label="Procedure/Diagnoses"
                  labelCol={{ span: 3 }}
                  labelAlign={'left'}
                >
                  <Table
                    style={{ width: '99%' }}
                    pagination={false}
                    dataSource={data}
                  >
                    <Column
                      title="Tooth No."
                      dataIndex="toothnumber"
                      key="toothnumber"
                      width="5%"
                    />
                    <Column
                      title="Procedure"
                      dataIndex="procedure"
                      key="procedure"
                    />
                    <Column
                      title="Procedure code"
                      dataIndex="procedurecode"
                      key="procedurecode"
                    />
                    <Column
                      title="Unit"
                      dataIndex="unit"
                      key="unit"
                      width="5%"
                    />
                    <Column
                      title="Price"
                      dataIndex="price"
                      key="price"
                      width="10%"
                    />
                    <Column
                      title="Total Price"
                      dataIndex="totalprice"
                      key="totalprice"
                      width="10%"
                    />
                    <Column
                      title="Diagnosis"
                      dataIndex="diagnosis"
                      key="diagnosis"
                      width="25%"
                    />
                    <Column
                      width="10%"
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
                </Form.Item>

                <Divider />

                <CKEditor
                  style={{ height: '-5px' }}
                  editor={ClassicEditor}
                  // data="<br><br><br>"
                />
                <br></br>
                <Collapse defaultActiveKey={['1']}>
                  <Panel
                    header="Complaint/History (Dental / Social)"
                    key="1"
                    className="boldheader"
                    extra={
                      <div>
                        <Button onClick={buttonClick} style={{ color: 'red' }}>
                          Template
                        </Button>
                        <span> </span>
                      </div>
                    }
                  >
                    {/*<CKEditor
                      style={{ width: '90%' }}
                      editor={ClassicEditor}
                      data="<br><br><br>"
                    />*/}
                    <TextArea rows="5" cols="50"></TextArea>
                  </Panel>
                  <Panel
                    header="Examination/Frindings/Investigations"
                    key="1"
                    className="boldheader"
                    extra={
                      <div>
                        <Button onClick={buttonClick} style={{ color: 'red' }}>
                          Template
                        </Button>
                        <span> </span>
                      </div>
                    }
                  >
                    {/*<CKEditor
                      style={{ width: '90%' }}
                      editor={ClassicEditor}
                      data="<br><br><br>"
                    />*/}
                    <TextArea rows="5" cols="50"></TextArea>
                  </Panel>
                  <Panel
                    header="Diagnosis/Treatment/Prescription/Next Visit"
                    key="1"
                    className="boldheader"
                    extra={
                      <div>
                        <Button onClick={buttonClick} style={{ color: 'red' }}>
                          Time Out
                        </Button>
                        <span> </span>
                        <Button onClick={buttonClick} style={{ color: 'red' }}>
                          Sign Out
                        </Button>
                        <Button style={{ color: 'red' }}>Template</Button>
                      </div>
                    }
                  >
                    <Row>
                      <Col span={5} />
                      <Col>
                        <Row>
                          <Modal
                            title=""
                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            width={600}
                            style={{ fontSize: 20 }}
                          >
                            <Card>
                              <Row>
                                <Col span={2}>
                                  <Checkbox />
                                </Col>
                                <Col span={22}>
                                  <Text style={{ fontSize: 20 }}>
                                    Pre-procedure Verification
                                  </Text>
                                </Col>
                              </Row>
                              <Row>
                                <Col span={3}>
                                  <Checkbox />
                                </Col>
                                <Col span={21}>
                                  <Text style={{ fontSize: 20 }}>
                                    Correct patient
                                  </Text>
                                </Col>
                              </Row>
                              <Row>
                                <Col span={3}>
                                  <Checkbox />
                                </Col>
                                <Col span={21}>
                                  <Text style={{ fontSize: 20 }}>
                                    Correct procedure
                                  </Text>
                                </Col>
                              </Row>
                              <Row>
                                <Col span={3}>
                                  <Checkbox />
                                </Col>
                                <Col span={21}>
                                  <Text style={{ fontSize: 20 }}>
                                    Correct site
                                  </Text>
                                </Col>
                              </Row>
                              <Row>
                                <Col span={3}>
                                  <Checkbox />
                                </Col>
                                <Col span={21}>
                                  <Text style={{ fontSize: 20 }}>
                                    Correct documents/radiographs
                                  </Text>
                                </Col>
                              </Row>
                              <Row>
                                <Col span={3}>
                                  <Checkbox />
                                </Col>
                                <Col span={21}>
                                  <Text style={{ fontSize: 20 }}>
                                    Functioning Equipment
                                  </Text>
                                </Col>
                              </Row>
                              <Row>
                                <Col span={3}>
                                  <Checkbox />
                                </Col>
                                <Col span={21}>
                                  <Text style={{ fontSize: 20 }}>
                                    Consent taken
                                  </Text>
                                </Col>
                              </Row>
                              <Row>
                                <Col span={2}>
                                  <Checkbox />
                                </Col>
                                <Col span={22}>
                                  <Text style={{ fontSize: 20 }}>
                                    Site Marking Done (Dental Chart)
                                  </Text>
                                </Col>
                              </Row>
                              <p />
                              <strong>
                                <Text style={{ fontSize: 20 }}>
                                  {' '}
                                  Time Out:{' '}
                                </Text>
                              </strong>
                              <TimePicker />
                              <p />
                              <strong>
                                <Text style={{ fontSize: 20 }}>
                                  {' '}
                                  Documented by:
                                </Text>
                              </strong>
                              <Row>
                                <Input style={{ width: '60%' }} />
                              </Row>
                              <p />
                              <Row>
                                <Col span={19} />
                                <Col>
                                  <Button
                                    style={{ fontSize: 20, height: '40px' }}
                                  >
                                    Export
                                  </Button>
                                </Col>
                              </Row>
                            </Card>
                          </Modal>
                        </Row>
                      </Col>
                    </Row>
                    {/*<CKEditor
                      style={{ width: '90%' }}
                      editor={ClassicEditor}
                      data="<br><br><br>"
                    />*/}
                    <TextArea rows="5" cols="50"></TextArea>
                  </Panel>
                  <Panel
                    header="Patient Education Material"
                    key="1"
                    className="boldheader"
                    extra={
                      <div>
                        <Button onClick={buttonClick} style={{ color: 'red' }}>
                          Template
                        </Button>
                        <span> </span>
                      </div>
                    }
                  >
                    {/*<CKEditor
                      style={{ width: '90%' }}
                      editor={ClassicEditor}
                      data="<br><br><br>"
                    />*/}
                    <TextArea rows="5" cols="50"></TextArea>
                  </Panel>
                </Collapse>

                <Form.Item
                  hidden={true}
                  label="Complaint/History(Dental / Social)"
                  labelCol={{ span: 5 }}
                  labelAlign={'left'}
                >
                  <div className="App">
                    <CKEditor
                      style={{ width: '90%' }}
                      editor={ClassicEditor}
                      data="<br><br><br>"
                    />
                  </div>
                </Form.Item>

                <Form.Item
                  hidden={true}
                  label="Examination/Frindings/Investigations"
                  labelCol={{ span: 5 }}
                  labelAlign={'left'}
                >
                  <div className="App">
                    <CKEditor
                      style={{ width: '90%' }}
                      editor={ClassicEditor}
                      data="<br><br><br>"
                    />
                  </div>
                </Form.Item>

                <Form.Item
                  hidden={true}
                  label="Diagnosis/Treatment/Prescription/Next Visit"
                  labelCol={{ span: 5 }}
                  labelAlign={'left'}
                >
                  <div className="App">
                    <CKEditor
                      style={{ width: '90%' }}
                      editor={ClassicEditor}
                      data="<br><br><br>"
                    />
                  </div>
                </Form.Item>
                {/*<Divider/>*/}
                <Form.Item
                  hidden={true}
                  label="Patient Education Material"
                  labelCol={{ span: 5 }}
                  labelAlign={'left'}
                >
                  <div className="App">
                    <CKEditor
                      style={{ width: '90%' }}
                      editor={ClassicEditor}
                      data="<br><br><br>"
                    />
                  </div>
                </Form.Item>
              </Col>

              <Col span={2}>
                <Button style={{ width: '85%' }}>Chart</Button>
              </Col>

              <col span={2} />
            </Row>
          </Form>
        </Col>
        <Col span={3}>
          <Tabs tabPosition="bottom" style={{ height: 1000 }}>
            <TabPane tab="Image" key="1">
              <Row>
                <Button type="primary" icon={<PlusOutlined />}>
                  Add
                </Button>
                <pre> </pre>
                <Button type="primary" icon={<CloseOutlined />}>
                  delete
                </Button>
              </Row>
              <TextArea style={{ height: 900 }} />
            </TabPane>
            <TabPane tab="Instrument" key="2">
              <Row>
                <Button type="primary" icon={<PlusOutlined />}>
                  Add
                </Button>
                <pre> </pre>
                <Button type="primary" icon={<CloseOutlined />}>
                  delete
                </Button>
              </Row>
              <TextArea style={{ height: 900 }} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default ProcedurePrimary;
