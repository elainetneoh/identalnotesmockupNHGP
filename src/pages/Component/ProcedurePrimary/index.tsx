import React, { useState } from 'react';
import {
  Input,
  Button,
  Form,
  Select,
  Row,
  Col,
  Typography,
  TimePicker,
  Table,
  Tabs,
  Modal,
  Checkbox,
  Card,
  Image,
} from 'antd';
import style from './index.less';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react';
// @ts-ignore
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Editor from '@medisys/ckeditor5-custom-build';
import { Divider } from 'antd';
import { Collapse } from 'antd';
import HistoryNotes from './components/HistoryNotes';
import ProcedureForm from './components/ProcedureForm';
import toolbar from './images/toolbar.png';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const format = 'HH:mm';
const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Column } = Table;

{
  /* <CKEditor
  style={{ height: '-5px' }}
  editor={Editor}
// data="<br><br><br>"
/> */
}

const ProcedurePrimary: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showChart, setShowChart] = useState(false);

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
      <HistoryNotes showChart={showChart} />
      <br />

      <Row>
        <Col span={21}>
          <ProcedureForm setShowChart={setShowChart} />

          <Form
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 200 }}
            layout="horizontal"
          >
            <Row>
              <Col span={21}>
                <Divider />

                <Image src={toolbar} width="100%" />

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
                    <TextArea rows={5} cols={50}></TextArea>
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
                    <TextArea rows={5} cols={50}></TextArea>
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
                    <TextArea rows={5} cols={50}></TextArea>
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
                    <TextArea rows={5} cols={50}></TextArea>
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
                      editor={Editor}
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
                      editor={Editor}
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
                      editor={Editor}
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
                      editor={Editor}
                      data="<br><br><br>"
                    />
                  </div>
                </Form.Item>
              </Col>
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
