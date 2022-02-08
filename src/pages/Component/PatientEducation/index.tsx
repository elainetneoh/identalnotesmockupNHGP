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
    procedure: 'IBUPROFEN 100MG / 5ML SUSP',
    procedurecode: '2',
    unit: '3',
    price: '5',
    totalprice: '1',
    diagnosis: 'TAKE [U] MLS 3 TIMES DAILY FOR 5 DAYS.',
    unitcost: '1.4',
    totalcost: '1.4',
    baseuom: 'Btl',
    class: 'Analgesics',
    remarks: '5-10mg/kg/dose 6-8 hourly.',
    toothnumber: <Select placeholder="IBUPROFEN 100MG / 5ML SUSP"></Select>,
  },
  {
    key: '1',
    procedure: 'DICLOFENAC SODIUM 25MG TAB',
    procedurecode: '2',
    unit: '3',
    price: '5',
    totalprice: '30',
    diagnosis: 'TAKE 2 TABLET(S) 3 TIMES DAILY FOR 5 DAYS.',
    unitcost: '0.1',
    totalcost: '3',
    baseuom: 'Tab',
    class: 'SL1',
    remarks: '5-10mg/kg/dose 6-8 hourly.',
    toothnumber: <Select placeholder="DICLOFENAC SODIUM 25MG TAB"></Select>,
  },
];

const PatientEducation: React.FC = () => {
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
            <Text style={{ fontSize: 16 }}> of 1 </Text>
            <CaretRightOutlined style={{ fontSize: 25, color: 'royalblue' }} />
            <StepForwardOutlined style={{ fontSize: 25, color: 'royalblue' }} />
            <pre> </pre>

            <Button>New</Button>
            <pre> </pre>
            <Button>Delete</Button>
            <pre> </pre>
            <Button>Save As Final</Button>
            <pre> </pre>

            <Button>Unlock</Button>
            <pre> </pre>
            <Button>Print</Button>
            <pre> </pre>

            {/*<Form
              labelCol={{ span: 30 }}
              wrapperCol={{ span: 300 }}
              layout="horizontal"
            >
              <Form.Item label="Visit No">
                <Input style={{ width: '70%' }} />
              </Form.Item>
            </Form>*/}
          </Row>

          <Row>
            <Text>General</Text>
          </Row>
          <Row>
            <Col span={22}>
              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 100 }}
                layout="horizontal"
              >
                <Row>
                  <Col span={6}>
                    <Form.Item
                      label="Reference No"
                      labelCol={{ span: 11 }}
                      labelAlign={'left'}
                    >
                      <Input style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={7}>
                    <Form.Item
                      label="Date"
                      labelCol={{ span: 5 }}
                      labelAlign={'left'}
                    >
                      <DatePicker style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      label="Original"
                      labelCol={{ span: 8 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '90%' }}>
                        <Option value="a" children={undefined}></Option>
                      </Select>
                    </Form.Item>
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
                      label="Time"
                      labelCol={{ span: 11 }}
                      labelAlign={'left'}
                    >
                      <TimePicker style={{ width: '90%' }}></TimePicker>
                    </Form.Item>
                  </Col>
                  <Col span={7}>
                    <Form.Item
                      label="Doctor"
                      labelCol={{ span: 5 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '90%' }}>
                        <Option value="a" children={undefined}></Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  {/* <Col span={5}>
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

          */}
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
            <Row>Prescription</Row>
            <Row>
              <Col span={24}>
                <Form.Item label="" labelCol={{ span: 3 }} labelAlign={'left'}>
                  <br></br>
                  <Table
                    style={{ width: '99%' }}
                    pagination={false}
                    dataSource={data}
                  >
                    <Column title="" width="5%" />
                    <Column
                      title="Select Drug"
                      dataIndex="toothnumber"
                      key="toothnumber"
                      width="15%"
                    />
                    <Column
                      title="DrugName"
                      dataIndex="procedure"
                      key="procedure"
                      width="35%"
                    />
                    <Column
                      title="Dose(Tab/Mls)"
                      dataIndex="procedurecode"
                      key="procedurecode"
                      width="5%"
                    />
                    <Column
                      title="Frequency"
                      dataIndex="unit"
                      key="unit"
                      width="5%"
                    />
                    <Column
                      title="Duration/Days"
                      dataIndex="price"
                      key="price"
                      width="5%"
                    />
                    <Column
                      title="Quantity"
                      dataIndex="totalprice"
                      key="totalprice"
                      width="5%"
                    />
                    <Column
                      title="DosageInstruction"
                      dataIndex="diagnosis"
                      key="diagnosis"
                      width="35%"
                    />

                    <Column
                      title="UnitCost"
                      dataIndex="unitcost"
                      key="diagnosis"
                      width="5%"
                    />

                    <Column
                      title="TotalCost"
                      dataIndex="totalcost"
                      key="diagnosis"
                      width="25%"
                    />

                    <Column
                      title="BaseUOM"
                      dataIndex="baseuom"
                      key="diagnosis"
                      width="5%"
                    />

                    <Column
                      title="Class"
                      dataIndex="class"
                      key="diagnosis"
                      width="25%"
                    />

                    <Column
                      title="Remarks"
                      dataIndex="remarks"
                      key="diagnosis"
                      width="35%"
                    />
                    {/*  <Column
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
                    /> */}
                  </Table>
                </Form.Item>

                <Row>
                  <Checkbox>Hide Auxillary Instruction </Checkbox>
                </Row>

                <Divider />

                <TextArea
                  style={{ height: 400 }}
                  placeholder="DRUG NAME : IBUPROFEN 100MG / 5ML SUSP "
                ></TextArea>
                <pre></pre>

                <Row>
                  <pre></pre>
                  <Button>Add</Button>
                  <pre> </pre>
                  <Button>Del</Button>
                </Row>

                <Row>
                  <Text>Summary</Text>
                </Row>
                <Row>
                  <Text>Total No. Of Items: 2</Text>
                </Row>
                <Row>
                  <Text>Total Amount: $4.40</Text>
                </Row>
                <Row>
                  <br></br>
                </Row>
                <Row>
                  <Text>Record owner: lendon.</Text>
                </Row>

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

              {/*<Col span={2}>
                <Button style={{ width: '85%' }}>Chart</Button>
                  </Col>*/}

              <col span={2} />
            </Row>
          </Form>
        </Col>
        {/*<Col span={3}>
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
                </Col> */}
      </Row>
    </div>
  );
};

export default PatientEducation;
