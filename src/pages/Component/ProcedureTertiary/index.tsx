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
  Card,
  Space,
  Collapse,
  Checkbox,
  Menu,
  Dropdown,
  Radio,
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
import { Modal, Image } from 'antd';
import dentalChart from './images/DentalChart.jpeg';
import capture from './images/Capture.png';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const format = 'HH:mm';
const { TabPane } = Tabs;
const { Column } = Table;

function buttonClick(e: any) {
  e.stopPropagation();
}

const data1 = [
  {
    key: '1',
    diagnosis: 'Exostosis of jaw',
    diagnosescode: '52681',
  },
];
const data2 = [
  {
    key: '1',
    procedure: 'Consultation',
    procedurecode: 'DLA001',
    unit: '1',
    price: '35',
    toothnumber: '21',
  },
  {
    key: '2',
    procedure:
      'Teeth (4 or more), Impacted, Removal of Bone with Division of Teeth',
    procedurecode: 'SSF010T',
    unit: '1',
    price: '4B',
    toothnumber: '24',
  },
];
const data3 = [
  {
    key: '1',
    consumables: 'Implant, Crown, Simple',
    consumablescode: 'DLH012',
    unit: '1',
    price: '300',
    lotnumber: 'LOT00332211',
  },
];

const menu = (
  <Menu>
    <Menu.Item key="1">View Plan</Menu.Item>
    <Menu.Item key="2">Delete</Menu.Item>
    <Menu.Item key="3">Update</Menu.Item>
    <Menu.Item key="4">Start treatment</Menu.Item>
    <Menu.Item key="5">End treatment</Menu.Item>
    <Menu.Item key="6">Follow up</Menu.Item>
  </Menu>
);

const ProcedureTertiary: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { Panel } = Collapse;

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
  console.log(moment());
  return (
    <div className={style.ProcedureTer}>
      <Row className={style.fixedHeader}>
        <Col span={24}>
          <Collapse defaultActiveKey={['1']}>
            <Panel
              header="Complaint/History (Dental / Social)"
              key="1"
              className="boldheader"
            >
              <Image src={capture} style={{ height: 200 }} />
            </Panel>
          </Collapse>
        </Col>
      </Row>
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
            {/* <Button style={{ width: '9%' }}>Prescribe Drug</Button>
            <pre> </pre> */}
            <Form
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 200 }}
              layout="horizontal"
            >
              <Form.Item label="Case No">
                <Input style={{ width: '80%' }} />
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
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <DatePicker style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Location"
                      labelCol={{ span: 6 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={7}>
                    <Form.Item
                      label="Visit Type"
                      labelCol={{ span: 6 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Row>
                      <pre> </pre>
                      <Button
                        style={{ background: 'red', width: '40%' }}
                        onClick={showModal1}
                      >
                        Bill
                      </Button>
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
                            <Text style={{ fontSize: 20 }}> Instruction:</Text>
                          </strong>
                          <TextArea style={{ height: 80 }} />
                          <p />

                          <Row>
                            <Col span={2}>
                              <Checkbox />
                            </Col>
                            <Col span={22}>
                              <Text style={{ fontSize: 20 }}>
                                In recovery room
                              </Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={2}>
                              <Checkbox />
                            </Col>
                            <Col span={22}>
                              <Text style={{ fontSize: 20 }}>
                                Proceed to pharmacy
                              </Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={2}>
                              <Checkbox />
                            </Col>
                            <Col span={22}>
                              <Text style={{ fontSize: 20 }}>
                                For surgical appointment
                              </Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={2}>
                              <Checkbox />
                            </Col>
                            <Col span={22}>
                              <Text style={{ fontSize: 20 }}>
                                Awaiting denture collection
                              </Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={2}>
                              <Checkbox />
                            </Col>
                            <Col span={22}>
                              <Text style={{ fontSize: 20 }}>
                                Book 2 one hour slots 3 weeks apart for
                                impression making and implant crown delivery
                                respectively
                              </Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={2}>
                              <Checkbox />
                            </Col>
                            <Col span={22}>
                              <Text style={{ fontSize: 20 }}>
                                Standard precautions
                              </Text>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={2}>
                              <Checkbox />
                            </Col>
                            <Col span={22}>
                              <Text style={{ fontSize: 20 }}>See prn</Text>
                            </Col>
                          </Row>
                          <p />
                        </Card>
                      </Modal>
                    </Row>
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
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Speciality"
                      labelCol={{ span: 6 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    {/* <Form.Item
                      label="Visit Type"
                      labelCol={{ span: 6 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '90%' }} />
                    </Form.Item> */}
                  </Col>

                  <Col span={1} />
                  <Col span={5}>
                    <Row>
                      <pre> </pre>
                      <Button style={{ background: 'grey', width: '40%' }}>
                        Amend Bill
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <Divider />
          <Row gutter={{ xs: 4 }}>
            <Col span={22}>
              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 500 }}
                layout="horizontal"
              >
                <Row>
                  <Col span={17}>
                    <Form.Item
                      label="Diagnoses"
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <Table
                        style={{ width: '99%' }}
                        pagination={false}
                        dataSource={data1}
                      >
                        <Column
                          title="Diagnosis"
                          dataIndex="diagnosis"
                          key="diagnosis"
                        />
                        <Column
                          title="Diagnoses Code"
                          dataIndex="diagnosescode"
                          key="diagnosescode"
                          width="15%"
                        />
                        <Column
                          width="20%"
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
                              {/* <a>Edit</a> */}
                              <a>Delete</a>
                            </Space>
                          )}
                        />
                      </Table>
                    </Form.Item>
                  </Col>

                  <Col span={1}></Col>
                  <Col span={4}>
                    <Form.Item
                      label="Time in"
                      labelCol={{ span: 8 }}
                      labelAlign={'left'}
                    >
                      <TimePicker format={format} />
                    </Form.Item>
                    <Form.Item
                      label="Time Out"
                      labelCol={{ span: 8 }}
                      labelAlign={'left'}
                    >
                      <TimePicker format={format} />
                    </Form.Item>
                  </Col>
                </Row>
                <Divider />
                <Row>
                  <Col span={21}>
                    <Form.Item label="Consult/Rev/Procedure">
                      <Table
                        style={{ width: '99%' }}
                        pagination={false}
                        dataSource={data2}
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
                          width="10%"
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
                          width="5%"
                        />
                        <Column
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
                  </Col>
                  <Col span={3}>
                    <Button style={{ width: '95%' }} onClick={showModal}>
                      Chart
                    </Button>
                    <Modal
                      title="Dental Chart"
                      visible={isModalVisible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      width={1200}
                    >
                      <Image src={dentalChart} />
                    </Modal>
                  </Col>
                </Row>
              </Form>
              <Divider />

              <Row>
                <Col span={21}>
                  <Form.Item label="Xray/Lab/Consumables">
                    <Table
                      style={{ width: '99%' }}
                      pagination={false}
                      dataSource={data3}
                    >
                      <Column
                        title="Consumables"
                        dataIndex="consumables"
                        key="consumables"
                      />
                      <Column
                        title="Consumables code"
                        dataIndex="consumablescode"
                        key="consumablescode"
                        width="10%"
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
                        width="5%"
                      />
                      <Column
                        title="Lot Number"
                        dataIndex="lotnumber"
                        key="lotnumber"
                        width="15%"
                      />
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
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={1}>
              <Text>Notes</Text>
            </Col>
            <Col span={12} />
            <Col>
              <Row>
                <Button onClick={showModal2}>Care Plan</Button>
                <Modal
                  title="Care Plan"
                  visible={isModalVisible2}
                  onOk={handleOk2}
                  onCancel={handleCancel2}
                  width={600}
                  style={{ fontSize: 20 }}
                >
                  <Row>
                    <Col span={1}> </Col>
                    <Col span={3}>
                      <Text>
                        <strong>Create</strong>
                      </Text>
                    </Col>

                    <Col span={3}>
                      <Text>
                        <strong>Update</strong>
                      </Text>
                    </Col>
                  </Row>
                  <Card>
                    <Row>
                      <Col span={2}>
                        <Checkbox></Checkbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={3}>
                        <Text style={{ fontSize: 17 }}>Scaling</Text>
                      </Col>
                    </Row>
                    <pre></pre>

                    <Row>
                      <Col span={2}>
                        <Checkbox></Checkbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={3}>
                        <Text style={{ fontSize: 17 }}>Filling</Text>
                      </Col>
                    </Row>
                    <pre></pre>

                    <Row>
                      <Col span={2}>
                        <Checkbox></Checkbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={5}>
                        <Text style={{ fontSize: 17 }}>Extraction</Text>
                      </Col>
                    </Row>

                    <pre></pre>

                    <Row>
                      <Col span={2}>
                        <Checkbox></Checkbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={8}>
                        <Text style={{ fontSize: 17 }}>
                          Fixed prosthodontics
                        </Text>
                      </Col>
                    </Row>
                    <pre></pre>

                    <Row>
                      <Col span={2}>
                        <Checkbox></Checkbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={10}>
                        <Text style={{ fontSize: 17 }}>
                          Removable prosthodontics
                        </Text>
                      </Col>
                    </Row>

                    <pre></pre>
                    <Row>
                      <Col span={2}>
                        <Checkbox></Checkbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={5}>
                        <Text style={{ fontSize: 17 }}>Endodontics</Text>
                      </Col>
                    </Row>

                    <pre></pre>
                    <Row>
                      <Col span={2}>
                        <Checkbox></Checkbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={5}>
                        <Text style={{ fontSize: 17 }}>Periodontics</Text>
                      </Col>
                    </Row>

                    <pre></pre>
                    <Row>
                      <Col span={2}>
                        <Checkbox></Checkbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={5}>
                        <Text style={{ fontSize: 17 }}>Orthodontics</Text>
                      </Col>
                    </Row>
                    <pre></pre>

                    <Row>
                      <Col span={2}>
                        <Checkbox></Checkbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={3}>
                        <Text style={{ fontSize: 17 }}>OMS</Text>
                      </Col>
                    </Row>
                    <pre></pre>

                    <Row>
                      <Col span={2}>
                        <Checkbox></Checkbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={10}>
                        <Text style={{ fontSize: 17 }}>Oral Medicine</Text>
                      </Col>
                    </Row>
                    <pre></pre>
                    <Row>
                      <Col span={2}>
                        <Checkbox></Checkbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={13}>
                        <Text style={{ fontSize: 17 }}>
                          Return to GP/SAF/polyclinic
                        </Text>
                      </Col>
                    </Row>

                    <pre> </pre>
                    <pre> </pre>
                    <pre> </pre>

                    <Row>
                      <Col span={10}>
                        <Button>Confirm Care Plan Created</Button>
                      </Col>
                    </Row>
                  </Card>
                </Modal>

                <pre style={{ fontSize: '30' }}> </pre>
                <Button style={{ color: 'red' }}>Time Out</Button>
                <pre> </pre>
                <Button>Audit1</Button>
                <pre> </pre>
                <Button style={{ color: 'red' }}>Audit2</Button>
                <pre> </pre>
                <Button style={{ color: 'gray' }}>Addendum</Button>
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
                    <Collapse defaultActiveKey={['1']}>
                      <Panel
                        header="Assesment"
                        key="1"
                        className="boldheader"
                        extra={
                          <div>
                            <Button
                              onClick={buttonClick}
                              style={{ color: 'red' }}
                            >
                              Template
                            </Button>
                            <span> </span>
                          </div>
                        }
                      >
                        <CKEditor
                          style={{ width: '90%' }}
                          editor={ClassicEditor}
                          data="<div style='text-decoration: underline;'><strong>History:<br><br>Findings: <br><br>Investigation: <br><br><br></strong></div>"
                        />
                      </Panel>
                      <Panel
                        header="Procedure"
                        key="1"
                        className="boldheader"
                        extra={
                          <Button
                            onClick={buttonClick}
                            style={{ color: 'red' }}
                          >
                            Template
                          </Button>
                        }
                      >
                        <CKEditor
                          style={{ width: '90%' }}
                          editor={ClassicEditor}
                          data="<br></br>"
                        />
                      </Panel>

                      <Panel
                        header="CarePlan"
                        key="1"
                        className="boldheader"
                        extra={
                          <Button
                            onClick={buttonClick}
                            style={{ color: 'red' }}
                          >
                            Template
                          </Button>
                        }
                      >
                        <CKEditor
                          style={{ width: '90%' }}
                          editor={ClassicEditor}
                          data="<br></br>"
                          //data="<div style='text-decoration: underline;'><strong>Complaint/History(Dental / Social): <br><br>Examination/Findings/Investigations: <br><br>Diagnosis/Treatment/Prescription/Next Visit: <br><br>Patient Education Material: <br></strong></div>"
                        />
                      </Panel>
                    </Collapse>
                  </div>
                </Form.Item>
              </Col>
              <col span={1} />
            </Row>
          </Form>
        </Col>
        <Col span={3}>
          <Tabs tabPosition="bottom" style={{ height: '60%' }}>
            <TabPane tab="Care Plan" key="1">
              <Card size="small" style={{ width: '90%' }}>
                <Dropdown overlay={menu} trigger={['contextMenu']}>
                  <div
                    className="site-dropdown-context-menu"
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <strong>
                      <p style={{ fontSize: 20, width: '60%' }}>Orthodontics</p>
                      <p style={{ width: '40%' }}>Shirely Tan</p>
                    </strong>
                    <p style={{ fontSize: 10, textAlign: 'right' }}>
                      Updated on 08 Mar 18
                    </p>
                  </div>
                </Dropdown>
              </Card>

              <Card size="small" style={{ width: '90%' }}>
                <Dropdown overlay={menu} trigger={['contextMenu']}>
                  <div
                    className="site-dropdown-context-menu"
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <strong>
                      <p style={{ fontSize: 20, width: '30%' }}>Scaling</p>
                      <p style={{ width: '35%' }}>Shirley Tan</p>
                    </strong>
                    <p style={{ fontSize: 10, textAlign: 'right' }}>
                      Updated on 08 Mar 18
                    </p>
                  </div>
                </Dropdown>
                {/*<strong>
                  <p style={{ fontSize: 20 }}>Scaling</p>
                  <p>Shirely Tan</p>
                </strong>
                <p style={{ fontSize: 10, textAlign: 'right' }}>
                  Updated on 08 Mar 18
               </p>*/}
              </Card>
              <Card size="small" style={{ width: '90%' }}>
                <Dropdown overlay={menu} trigger={['contextMenu']}>
                  <div
                    className="site-dropdown-context-menu"
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <strong>
                      <p style={{ fontSize: 20, width: '30%' }}>Extraction</p>
                      <p style={{ width: '35%' }}>Shirley Tan</p>
                    </strong>
                    <p style={{ fontSize: 10, textAlign: 'right' }}>
                      Updated on 08 Mar 18
                    </p>
                  </div>
                </Dropdown>
              </Card>
              <Card size="small" style={{ width: '90%' }}>
                <Dropdown overlay={menu} trigger={['contextMenu']}>
                  <div
                    className="site-dropdown-context-menu"
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    <strong>
                      <p style={{ fontSize: 20, width: '25%' }}>Filling</p>
                      <p style={{ width: '35%' }}>Shirley Tan</p>
                    </strong>
                    <p style={{ fontSize: 10, textAlign: 'right' }}>
                      Updated on 08 Mar 18
                    </p>
                  </div>
                </Dropdown>
              </Card>
              <Card size="small" style={{ width: '90%' }}>
                <strong>
                  <p style={{ fontSize: 20 }}></p>
                  <p></p>
                </strong>
                <pre> </pre>
                <pre> </pre>
                <pre> </pre>
                <pre> </pre>
                <pre> </pre>
                <pre> </pre>
                <pre> </pre>
                <pre> </pre>
                <p style={{ fontSize: 10, textAlign: 'right' }}></p>
              </Card>
            </TabPane>
            <TabPane tab="Image" key="2" style={{ width: '90%' }}>
              <Row>
                <Button type="primary" icon={<PlusOutlined />}>
                  Add
                </Button>
                <pre> </pre>
                <Button type="primary" icon={<CloseOutlined />}>
                  delete
                </Button>
              </Row>
              <TextArea style={{ height: 800 }} />
            </TabPane>
            <TabPane tab="Instrument" key="3" style={{ width: '90%' }}>
              <Row>
                <Button type="primary" icon={<PlusOutlined />}>
                  Add
                </Button>
                <pre> </pre>
                <Button type="primary" icon={<CloseOutlined />}>
                  delete
                </Button>
              </Row>
              <TextArea style={{ height: 800 }} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default ProcedureTertiary;
