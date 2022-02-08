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
  InputNumber,
  Tabs,
  Collapse,
  Modal,
  Checkbox,
  Card,
  Table,
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
const { Column } = Table;

const data = [
  {
    key: '1',
    date: '4/1/2021',
    surgeon: 'Susanna Tan Li Wen',
    speciality: 'Orthodontics',
    institution: 'KTPH',
    careplan: 'Care Plan',
  },
];
const { Panel } = Collapse;
const CarePlan: React.FC = () => {
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
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  function buttonClick(e: any) {
    e.stopPropagation();
    setIsModalVisible2(true);
  }

  return (
    <div className={style.Globalsettings}>
      <Col span={24}>
        <Collapse defaultActiveKey={['1']}>
          <Panel
            header="Summary"
            key="1"
            className="boldheader"
            extra={
              <div>
                <Button onClick={buttonClick} style={{ color: 'red' }}>
                  Update
                </Button>
                <span> </span>
              </div>
            }
          >
            <Row>
              <Col span={5} />
              <Col>
                <Row>
                  <Modal
                    title=""
                    visible={isModalVisible2}
                    onOk={handleOk2}
                    onCancel={handleCancel2}
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
                </Row>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form
                  labelCol={{ span: 0 }}
                  wrapperCol={{ span: 500 }}
                  layout="horizontal"
                >
                  <Row gutter={{ xs: 4 }}>
                    <Col span={4}>
                      <Form.Item label="Date from">
                        <DatePicker style={{ width: '100%' }} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>

                <Card>
                  <Table
                    pagination={false}
                    rowSelection={{
                      ...rowSelection,
                    }}
                    scroll={{ x: 1500 }}
                    style={{ width: '100%', height: 250 }}
                    dataSource={data}
                  >
                    <Column
                      title="Date"
                      dataIndex="date"
                      key="date"
                      width={75}
                      fixed="left"
                    />
                    <Column
                      title="Surgeon"
                      dataIndex="surgeon"
                      key="surgeon"
                      width={75}
                      fixed="left"
                    />
                    <Column
                      title="Speciality"
                      dataIndex="speciality"
                      key="speciality"
                      width={75}
                    />
                    <Column
                      title="Institution"
                      dataIndex="institution"
                      key="institution"
                      width={100}
                    />
                    <Column
                      title="Care Plan"
                      dataIndex="careplan"
                      key="careplan"
                      width={250}
                    />
                  </Table>
                  {/* <Row gutter={{xs:4,sm:8}}>
                    <Col>
                    <Button type="primary">Select All</Button>
                    </Col>
                    <Col>
                    <Button type="primary">Unselect All</Button>
                    </Col>
                    <Col>
                    <Button type="primary">Recall:</Button>
                    </Col>
                    <Col span={16}>
                    <Input style={{width:"100%"}}/>
                    </Col>
                    <Col>
                    <Button type="primary">Period:</Button>
                    </Col>
                    <Col>
                    <InputNumber min={1} max={10} defaultValue={3}/>
                    </Col>
                    <Col>
                    <Button type="primary">Recall</Button>
                    </Col>
                    <Col>
                    <Button type="primary">Undo</Button>
                    </Col>
                  </Row> */}
                </Card>
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </Col>
    </div>
  );
};

export default CarePlan;
