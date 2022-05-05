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
import capture from './images/Capture.png';
import ckeditorpic from './images/ckeditorpic.png';
import { useForm } from 'antd/lib/Form/Form';
import Orthodontics from './components/Orthodontics';
import CarePlan from './components/CarePlan';
import Chart from './components/Chart';
import ChartExtraction from './components/ChartExtraction';
import ChartFilling from './components/ChartFilling';
import PrintProcedureTertiary from './components/PrintProcedureTertiary';

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
    // procedure: 'PERIAPICAL SURGERY (Tooth :17, 19, 22) ',
    procedure: 'EXTRACTION (Tooth 13,14) ',
    procedurecode: (
      <Select defaultValue="DLJ001">
        <option value="DLA001">DLA001 </option>
        <option value="DLJ001">DLJ001 </option>
        <option value="DLB031">DLB031</option>
      </Select>
    ),
    unit: '2',
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
      <Input defaultValue="13,14" />
    ),
  },
  {
    key: '2',
    // procedure: 'Consultation',
    procedure: 'FILLING, TOOTH COLOURED, 1 SURFACE',
    procedurecode: (
      <Select defaultValue="DLB031">
        <option value="DLA001">DLA001 </option>
        <option value="DLJ001">DLJ001 </option>
        <option value="DLB031">DLB031</option>
      </Select>
    ),
    unit: '1',
    price: '10',
    toothnumber: <Input defaultValue="16" />,
    // toothnumber: <Input defaultValue="16"/>,
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
  {
    key: '15',
    // consumables: 'Implant, Crown, Simple',
    consumables: '',
    consumablescode: '',
    unit: '',
    price: '',
    lotnumber: '',
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
  const [showCarePlanRemarks, setShowCarePlanRemarks] = useState(false);
  const [showCarePlanPanel, setShowCarePlanPanel] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [showChartExtraction, setShowChartExtraction] = useState(false);
  const [showChartFilling, setShowChartFilling] = useState(false);
  const [showdelete, setshowdelete] = useState(false);
  const showdeletee = () => {
    setshowdelete(true);
  };

  const handleCanceldelete = () => {
    setshowdelete(false);
  };

  const handleOkdelete = () => {
    setshowdelete(false);
  };

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

  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const showModal3 = () => {
    setIsModalVisible3(true);
  };

  const handleOk3 = () => {
    setIsModalVisible3(false);
  };
  const handleCancel3 = () => {
    setIsModalVisible3(false);
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
          {showChart ? (
            <Chart />
          ) : showChartExtraction ? (
            <ChartExtraction />
          ) : showChartFilling ? (
            <ChartFilling />
          ) : (
            <Collapse defaultActiveKey={['2']}>
              <Panel header="History Notes" key="a1" className="boldheader">
                <Image src={capture} style={{ height: 180 }} />
              </Panel>
            </Collapse>
          )}
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
              style={{ width: '7%' }}
              defaultValue={{ value: 'Completed' }}
            >
              <Option value="Completed">Completed</Option>
            </Select>
            <pre> </pre>
            <Button style={{ width: '4%' }}>New</Button>
            <pre> </pre>
            <Button>Save As Final</Button>
            <pre> </pre>
            <Button>Save As Draft</Button>
            <pre> </pre>
            <Button style={{ width: '5%' }}>Delete</Button>
            <pre> </pre>
            <Button style={{ width: '5%' }}>Unlock</Button>
            <pre> </pre>
            {/* <Select style={{ width: '5%' }} defaultValue={{ value: 'Print' }}>
              <Option value="Print">Print</Option>
            </Select> */}
            <Button style={{ width: '5%' }} onClick={showModal3}>
              Print
            </Button>
            <PrintProcedureTertiary
              isVisible={isModalVisible3}
              handleOk={handleOk3}
              handleCancel={handleCancel3}
            />
            <pre> </pre>
            {/* <Button style={{ width: '9%' }}>Prescribe Drug</Button>
            <pre> </pre> */}
            <Form
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 200 }}
              layout="horizontal"
            >
              <Form.Item label="Case No">
                <Input style={{ width: '75%' }} />
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
                  <Col span={5}>
                    <Form.Item
                      label="Date"
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <DatePicker style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      label="Location"
                      labelCol={{ span: 6 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      label="Visit Type"
                      labelCol={{ span: 8 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '64%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Row>
                      <pre> </pre>
                      <Button
                        style={{ background: 'red', width: '37%' }}
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
                  <Col span={5}>
                    <Form.Item
                      label="Doctor"
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      label="Speciality"
                      labelCol={{ span: 6 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      label="Dental Assistant"
                      labelCol={{ span: 8 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '64%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Row>
                      <pre> </pre>
                      <Button style={{ background: 'grey', width: '37%' }}>
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
                        // showHeader={false}
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
                            // <Input defaultValue={16} />
                            <Input />
                          }
                          dataIndex="toothnumber"
                          key="toothnumber"
                          width="8%"
                        />
                        <Column
                          // title="Procedure"
                          // title="CONSULTATION(PACKAGE)"
                          title="CONSULTATION(PACKAGE)"
                          dataIndex="procedure"
                          key="procedure"
                          width="70%"
                        />
                        <Column
                          // title="Procedure code"
                          title={
                            <Select defaultValue="DLA001">
                              <option value="DLA001">DLA001 </option>
                              <option value="DLJ001">DLJ001 </option>
                              <option value="DLB031">DLB031</option>
                            </Select>
                          }
                          // "DLA000"
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
                          title="45"
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
                                  <a
                                    onClick={() => {
                                      setShowChartFilling(true);
                                    }}
                                  >
                                    Add
                                  </a>
                                  <a onClick={showdeletee}>Delete</a>
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
                              <a
                                onClick={() => {
                                  setShowChartExtraction(true);
                                }}
                              >
                                Add
                              </a>
                              <a>Delete</a>
                            </Space>
                          )}
                        />
                      </Table>
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Button
                      style={{ width: '70%', marginLeft: 15 }}
                      onClick={() => {
                        setShowChart(true);
                      }}
                    >
                      Chart
                    </Button>
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
                        title="LOT00113321"
                        dataIndex="lotnumber"
                        key="LotNo"
                        width="10%"
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
                              <a onClick={showdeletee}>Delete</a>
                              <Modal
                                title=""
                                visible={showdelete}
                                onOk={handleOkdelete}
                                onCancel={handleCanceldelete}
                                width={600}
                                style={{ fontSize: 20 }}
                              >
                                <Text>
                                  Are you sure you want to delete tooth no. 12?
                                </Text>
                              </Modal>
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
              <Text></Text>
            </Col>
            <Col span={10} />
            <Col span={12}>
              <Row>
                <Button
                  style={{ color: 'black', width: '19%' }}
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
                  onClick={() => {
                    setShowCarePlanPanel(true);
                  }}
                  style={{ color: 'black', width: '12%' }}
                >
                  Care Plan
                </Button>

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
                    <Collapse accordion defaultActiveKey={['2']}>
                      <Panel header="Sign in" key="1">
                        <Row>
                          <Col span={3}>
                            <Checkbox />
                          </Col>
                          <Col span={21}>
                            <Text style={{ fontSize: 20 }}>
                              Patient identity and records verified
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={3}>
                            <Checkbox />
                          </Col>
                          <Col span={21}>
                            <Text style={{ fontSize: 20 }}>
                              Medical history and diagnosis updated
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={3}>
                            <Checkbox />
                          </Col>
                          <Col span={21}>
                            <Text style={{ fontSize: 20 }}>
                              {/* Correct site */}
                              Medications reviewed
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={3}>
                            <Checkbox />
                          </Col>
                          <Col span={21}>
                            <Text style={{ fontSize: 20 }}>
                              {/* Correct radiographs/ medical records */}
                              Side and site of operation confirmed and marked if
                              applicable
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={3}>
                            <Checkbox />
                          </Col>
                          <Col span={21}>
                            <Text style={{ fontSize: 20 }}>
                              {/* Functionality of equipment */}
                              Procedure reviewed and consented for
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={3}>
                            <Checkbox />
                          </Col>
                          <Col span={21}>
                            <Text style={{ fontSize: 20 }}>
                              {/* Review of anticoagulant/ antiplatelet */}
                              Equipment available and functional
                            </Text>
                          </Col>
                        </Row>

                        <pre> </pre>

                        <Row className={style['recorded-by']}>
                          <strong style={{ fontSize: '17px' }}>
                            Recorded by:
                          </strong>

                          <div>
                            <Col span={1}></Col>
                            <Input />
                            <p className={style.amphersands}>@</p>
                            <TimePicker />
                          </div>
                        </Row>
                      </Panel>
                      {/* </Collapse> */}

                      {/* <Collapse defaultActiveKey={['1']}> */}
                      <Panel header="Time Out" key="2">
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
                              {/* Correct site */}
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
                              {/* Correct radiographs/ medical records */}
                              Correct radiographs/ documents
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={3}>
                            <Checkbox />
                          </Col>
                          <Col span={21}>
                            <Text style={{ fontSize: 20 }}>
                              {/* Functionality of equipment */}
                              Equipment functional
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={3}>
                            <Checkbox />
                          </Col>
                          <Col span={21}>
                            <Text style={{ fontSize: 20 }}>
                              {/* Review of anticoagulant/ antiplatelet */}
                              Instruments processed
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={3}>
                            <Checkbox />
                          </Col>
                          <Col span={21}>
                            <Text style={{ fontSize: 20 }}>
                              {/* Review of anticoagulant/ antiplatelet */}
                              Anti-coagulant/platelet reviewed (Manually ticked)
                            </Text>
                          </Col>
                        </Row>

                        <pre> </pre>

                        <Row className={style['recorded-by']}>
                          <strong style={{ fontSize: '17px' }}>
                            Recorded by:
                          </strong>

                          <div>
                            <Col span={1}></Col>
                            <Input />
                            <p className={style.amphersands}>@</p>
                            <TimePicker />
                          </div>
                        </Row>
                      </Panel>

                      {/* <Collapse defaultActiveKey={['1']}> */}

                      {/* </Collapse> */}

                      {/* <Collapse defaultActiveKey={['3']}> */}
                      {/* <Panel header="Sign Out" key="2">
                        <Row>
                          <Col span={3}>
                            <Text style={{ fontSize: 20 }}>Time : </Text>
                          </Col>

                          <Col span={17}>
                            <TimePicker></TimePicker>
                          </Col>
                        </Row>
                        <pre> </pre>
                        <Row>
                          <Col span={3}>
                            <Checkbox />
                          </Col>
                          <Col span={21}>
                            <Text style={{ fontSize: 20 }}>
                              Procedure unchanged
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={3}>
                            <Checkbox />
                          </Col>
                          <Col span={21}>
                            <Text style={{ fontSize: 20 }}>
                              Complete instrument and needle count
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={3}>
                            <Checkbox />
                          </Col>
                          <Col span={21}>
                            <Text style={{ fontSize: 20 }}>
                              Labelling of specimens (if applicable) 
                            </Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={3}>
                            <Checkbox />
                          </Col>
                          <Col span={21}>
                            <Text style={{ fontSize: 20 }}>
                              Functioning equipment
                            </Text>
                          </Col>
                        </Row>

                        <pre> </pre>

                        <strong>
                          <Text style={{ fontSize: 20 }}> Documented by:</Text>
                        </strong>
                        <Row>
                          <Input style={{ width: '60%' }} />
                          <Button style={{ fontSize: 20, height: '40px' }}>
                            Export
                          </Button>
                        </Row>
                        <p />
                        {/* <Row>
                      <Col span={19} />
                      <Col>
                        <Button style={{ fontSize: 20, height: '40px' }}>
                          Export
                        </Button>
                      </Col>
                    </Row> 
                      </Panel> */}
                      {/* </Collapse> */}

                      {/* <Collapse defaultActiveKey={['2']}> */}
                      {/* <Panel header="Fall risk" key="4"> */}

                      {/* <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>
                              Extraction/Root Canal Treatment (No giddiness
                              after procedure)
                            </Text>
                            <br></br>
                            <Text style={{ fontSize: 20 }}>
                              Patient is discharged after bleeding stops, not
                              feeling giddy and has pain score less than 4.
                            </Text>
                          </Col>
                        </Row> */}
                      {/* <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>
                              Extraction/Root Canal Treatment (Giddiness after
                              procedure)
                            </Text>
                            <br></br>
                            <Text style={{ fontSize: 20 }}>
                              1. Patient is assisted to recovery room.
                            </Text>
                            <br></br>
                            <Text style={{ fontSize: 20 }}>
                              2. Patient is only discharged after bleeding
                              stops, not feeling giddy and pain score less than
                              4.
                            </Text>
                          </Col>
                        </Row> */}
                      {/* <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>
                              Surgical procedures under LA
                            </Text>
                            <br></br>
                            <Text style={{ fontSize: 20 }}>
                              1. Patient is assisted to recovery room.
                            </Text>
                            <br></br>
                            <Text style={{ fontSize: 20 }}>
                              2. Patient is only discharged after bleeding
                              stops, not feeling giddy and pain score less than
                              4.
                            </Text>
                          </Col>
                        </Row> */}
                      {/* <Row>
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
                    </Row> */}
                      {/* <p />
                    <strong>
                      <Text style={{ fontSize: 20 }}> Time Out: </Text>
                    </strong>
                    <TimePicker />
                    <p /> */}
                      {/* <pre> </pre>
                        <strong>
                          <Text style={{ fontSize: 20 }}> Documented by:</Text>
                        </strong>
                        <Row>
                          <Input style={{ width: '60%' }} />
                          <Button style={{ fontSize: 20, height: '40px' }}>
                            Export
                          </Button>
                        </Row>
                        <p /> */}
                      {/* <Row>
                      <Col span={19} />
                      <Col>
                        <Button style={{ fontSize: 20, height: '40px' }}>
                          Export
                        </Button>
                      </Col>
                    </Row> */}
                      {/* </Panel> */}

                      <Panel header="Sign Out" key="3">
                        {/* <Row>
                          <Col span={3}>
                            <Text style={{ fontSize: 20 }}>Time : </Text>
                          </Col>
                          <Col span={21}>
                            <TimePicker></TimePicker>
                          </Col>
                        </Row> 
                        <pre> </pre> */}
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>
                              Procedure as planned
                            </Text>
                          </Col>
                        </Row>

                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>
                              Instrument, needle and swab counts complete
                            </Text>
                          </Col>
                        </Row>

                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>
                              Specimen(s) labelled (manually ticked)
                            </Text>
                          </Col>
                        </Row>

                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>
                              Equipment(s) functional
                            </Text>
                          </Col>
                        </Row>

                        <pre> </pre>

                        <Row className={style['recorded-by']}>
                          <strong style={{ fontSize: '17px' }}>
                            Recorded by:
                          </strong>

                          <div>
                            <Col span={1}></Col>
                            <Input />
                            <p className={style.amphersands}>@</p>
                            <TimePicker />
                          </div>
                        </Row>
                      </Panel>
                      <Panel header="Discharge" key="4">
                        {/* <Row>
                          <Col span={3}>
                            <Text style={{ fontSize: 20 }}>Time : </Text>
                          </Col>
                          <Col span={21}>
                            <TimePicker></TimePicker>
                          </Col>
                        </Row>  */}
                        {/* <pre> </pre> */}
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>
                              Assisted to recovery
                            </Text>
                          </Col>
                        </Row>

                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>
                              Discharged without bleeding/giddiness/pain or
                              score less than 4
                            </Text>
                          </Col>
                        </Row>

                        <pre> </pre>

                        {/* <strong>
                          <Text style={{ fontSize: 20 }}> Documented by:</Text>
                        </strong>
                        <Row>
                          <Input style={{ width: '60%' }} />
                          <Button style={{ fontSize: 20, height: '40px' }}>
                            Export
                          </Button>
                        </Row>
 */}

                        <Row className={style['recorded-by']}>
                          <strong style={{ fontSize: '17px' }}>
                            Recorded by:
                          </strong>

                          <div>
                            <Col span={1}></Col>
                            <Input />
                            <p className={style.amphersands}>@</p>
                            <TimePicker />
                          </div>
                        </Row>
                      </Panel>
                    </Collapse>
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
                    <Collapse defaultActiveKey={['b1']}>
                      <Panel
                        header="Notes"
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
                        {/* <CKEditor
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
                       <span style="background-color:lightgrey;">Complaint/History(Dental/Social):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <br>
                       <br>
                       <br>
                       <span style="background-color:lightgrey;">Examination/ Findings /Investigation:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <br>
                       <br>
                       <br>
                       <span style="background-color:lightgrey;">Diagnosis/Treatment/Prescription/Next Visit:
                       <br>
                       <br>
                       <br>
                       <span style="background-color:lightgrey;">Patient Education Material:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <br>
                       <br>
                       &nbsp;
                   </p>'
                        /> */}
                        <Image
                          src={ckeditorpic}
                          style={{ height: 350, width: 1800 }}
                        ></Image>
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
                        {showCarePlanRemarks ? (
                          <>
                            <p>This is a test remarks for demo purpose</p>
                            <p>This is a test remarks for demo purpose</p>
                            <p>This is a test remarks for demo purpose</p>
                            <p>This is a test remarks for demo purpose</p>
                            <p>This is a test remarks for demo purpose</p>
                            <p>This is a test remarks for demo purpose</p>
                            <p>This is a test remarks for demo purpose</p>
                            <p>This is a test remarks for demo purpose</p>
                          </>
                        ) : (
                          ''
                        )}
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
          {showCarePlanPanel ? (
            <CarePlan
              CreateClicked={() => {
                setShowCarePlanRemarks(true);
              }}
            />
          ) : (
            <Orthodontics />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ProcedureTertiary;
