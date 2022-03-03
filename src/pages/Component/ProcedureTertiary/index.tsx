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
  Tooltip,
  List,
  Popover,
} from 'antd';
import ProForm, { ProFormCheckbox } from '@ant-design/pro-form';
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
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Editor from '@medisys/ckeditor5-custom-build';
// import {Highlight} from '@ckeditor/ckeditor5-highlight'
import { Divider } from 'antd';
import { Modal, Image } from 'antd';
import dentalChart from './images/DentalChart.jpeg';
import capture from './images/Capture.png';
import { useForm } from 'antd/lib/Form/Form';
const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const format = 'HH:mm';
const { TabPane } = Tabs;
const { Column } = Table;

function buttonClick(e: any) {
  e.stopPropagation();
}

const children = [];
for (let i = 11; i < 19; i++) {
  children.push(<Option key={i}>{i}</Option>);
}

// const careplanarray = [];
// for (let i = 0; i < 9; i++) {
//   careplanarray.push(<Option key={i}>{i}</Option>);
// }

function handleChange(value: any) {
  console.log(`selected ${value}`);
  const z = `${value}`;
  console.log({ z });
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
    // procedure: 'Consultation',
    procedure: 'PERIAPICAL SURGERY (Tooth :17, 19, 22) ',
    procedurecode: 'DLA001',
    unit: '1',
    price: '35',
    toothnumber: (
      // <Select
      //   mode="multiple"
      //   allowClear
      //   style={{ width: '100%' }}
      //   placeholder="Please select"
      //   defaultValue={['17', '19', '22']}
      //   onChange={handleChange}
      // >
      //   {children}
      // </Select>
      <Input placeholder="ToothNo"></Input>
    ),
  },
  // {
  //   key: '2',
  //   procedure:
  //     'Teeth (4 or more), Impacted, Removal of Bone with Division of Teeth',
  //   procedurecode: 'SSF010T',
  //   unit: '1',
  //   price: '4B',
  //   toothnumber: '24',
  // },
];
const data3 = [
  {
    key: '14',
    // consumables: 'Implant, Crown, Simple',
    consumables: 'SPECIAL TRAY',
    consumablescode: (
      <Tooltip title="description" placement="topLeft">
        <Text>DLH012</Text>
      </Tooltip>
    ),
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
  const formItemLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 10 },
  };

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

  const [IsModaldepartmentVisible, setIsModaldepartmentVisible] = useState(
    false,
  );
  const showModaldepartment = () => {
    setIsModaldepartmentVisible(true);
  };

  const handleOkdepartment = () => {
    setIsModaldepartmentVisible(false);
  };

  const handleCanceldepartment = () => {
    setIsModaldepartmentVisible(false);
  };

  const [isModalVisibletimeout, setIsModalVisibletimeout] = useState(false);
  const showModaltimeout = () => {
    setIsModalVisibletimeout(true);
  };
  const handleOktimeout = () => {
    setIsModalVisibletimeout(false);
  };

  const handleCanceltimeout = () => {
    setIsModalVisibletimeout(false);
  };

  const [isModalVisiblesignout, setIsModalVisiblesignout] = useState(false);
  const showModalsignout = () => {
    setIsModalVisiblesignout(true);
  };
  const handleOksignout = () => {
    setIsModalVisiblesignout(false);
  };

  const handleCancelsignout = () => {
    setIsModalVisiblesignout(false);
  };

  const children = [];
  for (let i = 11; i < 19; i++) {
    children.push(<Option key={i}>{i}</Option>);
  }

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  console.log(moment());
  return (
    <div className={style.ProcedureTer}>
      <Row className={style.fixedHeader}>
        <Col span={24}>
          <Collapse defaultActiveKey={['2']}>
            <Panel
              header="Complaint/History (Dental / Social)"
              key="a1"
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
            <Button>Archive</Button>
            <StepBackwardFilled style={{ fontSize: 25, color: 'royalblue' }} />
            <CaretLeftFilled style={{ fontSize: 25, color: 'royalblue' }} />
            <Input style={{ width: '2%', height: '30px' }} />
            <Text style={{ fontSize: 16 }}> of 42 </Text>
            <CaretRightOutlined style={{ fontSize: 25, color: 'royalblue' }} />
            <StepForwardOutlined style={{ fontSize: 25, color: 'royalblue' }} />
            <pre> </pre>
            <Select
              style={{ width: '10%' }}
              defaultValue={{ value: 'Completed' }}
            >
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
            <Select style={{ width: '5%' }} defaultValue={{ value: 'Print' }}>
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
                <Input style={{ width: '76%' }} />
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
                      labelCol={{ span: 5 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '64%' }} />
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
                    <Form.Item
                      label="Dental Assistant"
                      labelCol={{ span: 6 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '78%' }} />
                    </Form.Item>
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
          {/* <Divider /> */}

          <Row gutter={{ xs: 4 }}>
            <Col span={22}>
              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 500 }}
                layout="horizontal"
              >
                <Row>
                  <Col span={13}>
                    <Form.Item
                      label="Diagnoses"
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <Table
                        style={{ width: '99%' }}
                        pagination={false}
                        dataSource={data1}
                        size="small"
                      >
                        <Column
                          title="Transposed/rotated tooth"
                          dataIndex="diagnosis"
                          key="diagnosis"
                        />

                        <Column
                          title="5243"
                          dataIndex="diagnosescode"
                          key="diagnosescode"
                          width="15%"
                        />
                        <Column
                          width="15%"
                          title={() => {
                            return (
                              // <div>
                              //   <Button  style={{ width: '80%' }}>
                              //     Add
                              //   </Button>
                              // </div>
                              <Space size="middle">
                                <a>Add</a>
                                <a>Delete</a>
                              </Space>
                            );
                          }}
                          key="action"
                          render={() => (
                            <Space size="middle">
                              <a>Add</a>
                              <a>Delete</a>
                            </Space>
                            // <div>
                            //   <Button  style={{ width: '80%' }}>
                            //     Delete
                            //   </Button>
                            // </div>
                          )}
                        />
                      </Table>
                    </Form.Item>
                  </Col>

                  <Col span={1}></Col>
                  <Col span={3}>
                    <Form.Item
                      label="Time in"
                      labelCol={{ span: 7 }}
                      labelAlign={'left'}
                    >
                      <TimePicker format={format} style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                      label="Time Out"
                      labelCol={{ span: 7 }}
                      labelAlign={'left'}
                    >
                      <TimePicker format={format} style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                </Row>
                {/* <Divider /> */}
                <Row>
                  <Col span={17}>
                    <Form.Item label="Consult/Rev/Procedure">
                      <Table
                        // style={{ width: '100%' }}
                        pagination={false}
                        dataSource={data2}
                        size="small"
                      >
                        <Column
                          //  title="Tooth No."
                          title={
                            // <Select
                            //   mode="multiple"
                            //   allowClear
                            //   style={{ width: '100%' }}
                            //   placeholder="Please select"
                            //   defaultValue={['11']}
                            //   onChange={handleChange}
                            // >
                            //   {children}
                            // </Select>
                            <Input placeholder="ToothNo"></Input>
                          }
                          dataIndex="toothnumber"
                          key="toothnumber"
                          width="25%"
                        />
                        <Column
                          // title="Procedure"
                          title="CONSULTATION(PACKAGE)"
                          dataIndex="procedure"
                          key="procedure"
                          width="70%"
                        />
                        <Column
                          // title="Procedure code"
                          title="DLA000"
                          dataIndex="procedurecode"
                          key="procedurecode"
                          width="10%"
                        />
                        <Column
                          // title="Unit"
                          title="1"
                          dataIndex="unit"
                          key="unit"
                          width="5%"
                        />
                        <Column
                          // title="Price"
                          title="0"
                          dataIndex="price"
                          key="price"
                          width="5%"
                        />
                        <Column
                          title={() => {
                            return (
                              <div>
                                {/* <Button type="primary" icon={<PlusOutlined />}> */}
                                {/* <Button
                                  type="primary"
                                  style={{ width: '100%' }}
                                >
                                  Add
                                </Button> */}

                                <Space size="middle">
                                  <a>Add</a>
                                  <a>Delete</a>
                                </Space>
                              </div>
                            );
                          }}
                          key="action"
                          render={() => (
                            // <Space size="middle">
                            //   {/* <a>Edit</a> */}
                            //   <a>Delete</a>
                            // </Space>
                            // <Button type="primary" style={{ width: '100%' }}>
                            //   Delete
                            // </Button>
                            <Space size="middle">
                              <a>Add</a>
                              <a>Delete</a>
                            </Space>
                          )}
                        />
                      </Table>
                    </Form.Item>
                  </Col>
                  <Col span={2}></Col>
                  <Col span={3}>
                    <Button style={{ width: '70%' }} onClick={showModal}>
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
              {/* <Divider /> */}

              <Row>
                <Col span={17}>
                  <Form.Item label="Xray/Lab/Consumables">
                    <Table
                      // style={{ width: '80%' }}
                      pagination={false}
                      dataSource={data3}
                      size="small"
                    >
                      <Column
                        // title="Consumables"
                        title="LAB SERVICES"
                        dataIndex="consumables"
                        key="consumables"
                        width="70%"
                      />
                      <Column
                        // title="Consumables code"
                        title="DLL051"
                        dataIndex="consumablescode"
                        key="consumablescode"
                        width="10%"
                      />
                      <Column
                        // title="Unit"
                        title="1"
                        dataIndex="unit"
                        key="unit"
                        width="5%"
                      />
                      <Column
                        // title="Price"
                        title="21"
                        dataIndex="price"
                        key="price"
                        width="5%"
                      />
                      {/* <Column
                        title="Lot Number"
                        dataIndex="lotnumber"
                        key="lotnumber"
                        width="15%"
                      /> */}
                      <Column
                        width="10%"
                        title={() => {
                          return (
                            // <div>
                            //   <Button type="primary" style={{ width: '85%' }}>
                            //     Add
                            //   </Button>
                            // </div>
                            <Space size="middle">
                              <a>Add</a>
                              <a>Delete</a>
                            </Space>
                          );
                        }}
                        key="action"
                        render={() => (
                          // <Space size="middle">
                          //   {/* <a>Edit</a> */}
                          //   <a>Delete</a>
                          // </Space>
                          // <Button type="primary" style={{ width: '85%' }}>
                          //   Delete
                          // </Button>
                          <Space size="middle">
                            <a>Add</a>
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
            <Col span={10} />
            <Col span={12}>
              <Row>
                <Button
                  style={{ color: 'black', width: '18%' }}
                  onClick={showModaldepartment}
                >
                  Departmental Template
                </Button>

                <Modal
                  title="Template for Procedure"
                  visible={IsModaldepartmentVisible}
                  onOk={handleOkdepartment}
                  onCancel={handleCanceldepartment}
                  style={{ fontSize: 20 }}
                  width={1300}
                  bodyStyle={{ height: 600 }}
                >
                  <Row>
                    <Col>
                      <Text>
                        <Button>Append</Button>
                      </Text>
                    </Col>
                    <pre> </pre>

                    <Col>
                      <Button style={{ width: 80 }}>Insert</Button>
                    </Col>

                    <pre> </pre>

                    <Col>
                      <Button>Overwrite</Button>
                    </Col>
                  </Row>

                  <pre> </pre>

                  <Row gutter={{ sm: 8 }}>
                    <Col span={24}>
                      <Form
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 100 }}
                        layout="horizontal"
                      >
                        <Form.Item
                          label="Template Code"
                          name="Template Code"
                          labelCol={{ span: 3 }}
                          labelAlign={'left'}
                        >
                          <Row>
                            <Select
                              style={{ width: '150%' }}
                              defaultValue={{ value: 'TOSPTemplate' }}
                            >
                              <Option value="END">END Template</Option>
                              <Option value="TOSPTemplate">
                                TOSP Template
                              </Option>
                            </Select>

                            {/* <Button
                                type="primary"
                                htmlType="submit"
                                style={{ width: '10%' }}
                              >
                                Find
                              </Button> */}
                          </Row>
                        </Form.Item>

                        <CKEditor
                          style={{ width: '90%' }}
                          editor={Editor}
                          // data="<div style='text-decoration: underline;'><strong>History:<br><br>Findings: <br><br>Investigation: <br><br><br></strong></div>"
                          data="<div style='  background-color: rgb(25, 156, 25)'><strong>Pre-op Procedure: <br><br><br> Procedure Description: <br><br><br>Findings:<br><br><br>Operative Procedure:<br><Br><br>Post-Operative Instruction:</strong></div>"
                        />
                        <pre> </pre>

                        <Form.Item
                          label="Sort Order"
                          name="Sort Order"
                          labelCol={{ span: 2 }}
                          labelAlign={'left'}
                        >
                          <Row>
                            <Input
                              style={{ width: '7%' }}
                              placeholder="2"
                            ></Input>

                            <pre> </pre>
                          </Row>
                        </Form.Item>

                        <Form.Item
                          name="Sort Order"
                          labelCol={{ span: 2 }}
                          labelAlign={'left'}
                        >
                          <Row>
                            <Col>
                              {' '}
                              <Button type="primary">New</Button>
                            </Col>
                            <pre> </pre>
                            <Col>
                              {' '}
                              <Button type="primary">Save</Button>
                            </Col>
                            <pre> </pre>
                            <Col>
                              {' '}
                              <Button type="primary">Delete</Button>
                            </Col>
                            <pre> </pre>
                            <Col>
                              {' '}
                              <Button type="primary">Cancel</Button>
                            </Col>
                          </Row>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>
                </Modal>

                <pre style={{ fontSize: '30' }}> </pre>
                <Button
                  onClick={showModal2}
                  style={{ color: 'black', width: '13%' }}
                >
                  Care Plan
                </Button>
                <Modal
                  title="Care Plan"
                  visible={isModalVisible2}
                  //  footer={[]}
                  onOk={handleOk2}
                  //  onOk={() => {
                  //   handleOk2;
                  // }}
                  onCancel={handleCancel2}
                  width={600}
                  style={{ fontSize: 20 }}
                >
                  {/* <ProForm
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 200 }}
            layout="horizontal"
            
          > */}

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
                        <ProFormCheckbox></ProFormCheckbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={5}>
                        <Text style={{ fontSize: 17 }}>Orthodontics</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={2}>
                        <ProFormCheckbox></ProFormCheckbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={3}>
                        <Text style={{ fontSize: 17 }}>Scaling</Text>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={2}>
                        <ProFormCheckbox></ProFormCheckbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={3}>
                        <Text style={{ fontSize: 17 }}>Filling</Text>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={2}>
                        <ProFormCheckbox></ProFormCheckbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={5}>
                        <Text style={{ fontSize: 17 }}>Extraction</Text>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={2}>
                        <ProFormCheckbox></ProFormCheckbox>
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

                    <Row>
                      <Col span={2}>
                        <ProFormCheckbox></ProFormCheckbox>
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

                    <Row>
                      <Col span={2}>
                        <ProFormCheckbox></ProFormCheckbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={5}>
                        <Text style={{ fontSize: 17 }}>Endodontics</Text>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={2}>
                        <ProFormCheckbox></ProFormCheckbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={5}>
                        <Text style={{ fontSize: 17 }}>Periodontics</Text>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={2}>
                        <ProFormCheckbox></ProFormCheckbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={3}>
                        <Text style={{ fontSize: 17 }}>OMS</Text>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={2}>
                        <ProFormCheckbox></ProFormCheckbox>
                      </Col>
                      <Col span={5}>
                        <Button>Update</Button>
                      </Col>
                      <Col span={10}>
                        <Text style={{ fontSize: 17 }}>Oral Medicine</Text>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={2}>
                        <ProFormCheckbox></ProFormCheckbox>
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
                <Button
                  style={{ color: 'black', width: '13%' }}
                  onClick={showModaltimeout}
                >
                  Time Out
                </Button>

                <Modal
                  title=""
                  visible={isModalVisibletimeout}
                  onOk={handleOktimeout}
                  onCancel={handleCanceltimeout}
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
                        <Text style={{ fontSize: 20 }}>Correct patient</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={3}>
                        <Checkbox />
                      </Col>
                      <Col span={21}>
                        <Text style={{ fontSize: 20 }}>Correct procedure</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={3}>
                        <Checkbox />
                      </Col>
                      <Col span={21}>
                        <Text style={{ fontSize: 20 }}>Correct site</Text>
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
                        <Text style={{ fontSize: 20 }}>Consent taken</Text>
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
                      <Text style={{ fontSize: 20 }}> Time Out: </Text>
                    </strong>
                    <TimePicker />
                    <p />
                    <strong>
                      <Text style={{ fontSize: 20 }}> Documented by:</Text>
                    </strong>
                    <Row>
                      <Input style={{ width: '60%' }} />
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

                <Button style={{ color: 'black', width: '12%' }}>Audit1</Button>
                <pre> </pre>
                <Button style={{ color: 'black', width: '12%' }}>Audit2</Button>
                <pre> </pre>
                <Button style={{ color: 'black', width: '13%' }}>
                  Addendum
                </Button>
                <pre> </pre>
                <Button style={{ color: 'black', width: '13%' }}>
                  Template
                </Button>
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
                        key="b1"
                        className="boldheader"
                        extra={
                          <div>
                            {/* <Button
                              onClick={buttonClick}
                              style={{ color: 'red' }}
                            >
                               END Template
                            </Button> */}
                            {/* <span> </span>
                            <Button
                              onClick={buttonClick}
                              style={{ color: 'red' }}
                            >
                              TOSP Template
                            </Button> */}
                          </div>
                        }
                      >
                        <CKEditor
                          //style={{ width: '90%'}}

                          editor={Editor}
                          // config={{
                          //   toolbar: [
                          //     'bold',
                          //     'italic',
                          //     'underline',
                          //     'bulletedList',
                          //     'numberedList',
                          //     'link',
                          //     '|',
                          //     'imageUpload',
                          //     'highlight'
                          //   ],

                          // }}
                          // data="<div style='text-decoration: underline;'><strong>History:<br><br>Findings: <br><br>Investigation: <br><br><br></strong></div>"
                          // data= "<p>Complaint/History(Dental/Social): <br><br><br>Examination/ Findings /Investigation: <br><br><br> Diagnosis/Treatment/Prescription/Next Visit:<br><br><br>Patient Education Material:</p>"
                          // data='<p><span style="background-color:hsl(180, 75%, 60%)";>Complaint/History(Dental/Social):&nbsp;</span><br><br><br><span style="background-color:hsl(60, 75%, 60%);">Examination/ Findings /Investigation:&nbsp;</span><br><br><br><span style="background-color:hsl(90, 75%, 60%);">Diagnosis/Treatment/Prescription/Next Visit:</span><br><br><br><span style="background-color:hsl(30, 75%, 60%);">Patient Education Material:<br><br></span></p>'
                          // data='<p><span style="background-color:hsl(180, 75%, 60%);"<Input>Complaint/History(Dental/Social):</Input>'
                          data='<p>
                       <span style="background-color:hsl(180,75%,60%);">Complaint/History(Dental/Social):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <br>
                       <br>
                       <br>
                       <span style="background-color:hsl(60,75%,60%);">Examination/ Findings /Investigation:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <br>
                       <br>
                       <br>
                       <span style="background-color:hsl(90,75%,60%);">Diagnosis/Treatment/Prescription/Next Visit:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <br>
                       <br>
                       <br>
                       <span style="background-color:hsl(30,75%,60%);">Patient Education Material:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <br>
                       <br>
                       &nbsp;
                   </p>'
                        />
                      </Panel>
                      <Panel
                        header="Care Plan"
                        key="c1"
                        className="boldheader"
                        // extra={
                        //   <Button
                        //     onClick={buttonClick}
                        //     style={{ color: 'red' }}
                        //   >
                        //     Template
                        //   </Button>
                        // }
                      >
                        <CKEditor
                          style={{ width: '90%' }}
                          editor={Editor}
                          data="<br></br>"
                        />
                      </Panel>

                      {/* <Panel
                        header="CarePlan"
                        key="1"
                        className="boldheader"
                        // extra={
                        //   <Button
                        //     onClick={buttonClick}
                        //     style={{ color: 'red' }}
                        //   >
                        //     Template
                        //   </Button>
                        // }
                      >
                        <CKEditor
                          style={{ width: '90%' }}
                          editor={ClassicEditor}
                          data="<br></br>"
                          //data="<div style='text-decoration: underline;'><strong>Complaint/History(Dental / Social): <br><br>Examination/Findings/Investigations: <br><br>Diagnosis/Treatment/Prescription/Next Visit: <br><br>Patient Education Material: <br></strong></div>"
                        />
                      </Panel> */}
                    </Collapse>
                  </div>
                </Form.Item>
              </Col>
              <Col span={1} />
            </Row>
          </Form>
        </Col>
        <Col span={3}>
          <Tabs tabPosition="bottom" style={{ height: '60%' }}>
            <TabPane tab="Care Plan" key="d1">
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
            <TabPane tab="Image" key="d2" style={{ width: '90%' }}>
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
            <TabPane tab="Instrument" key="d3" style={{ width: '90%' }}>
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
