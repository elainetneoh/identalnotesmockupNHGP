import React, { useMemo, useState } from 'react';
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

  const [isCheckBox1Click, setisCheckBox1Click] = useState(false);
  const [isCheckBox2Click, setisCheckBox2Click] = useState(false);
  const [isCheckBox3Click, setisCheckBox3Click] = useState(false);
  const [isCheckBox4Click, setisCheckBox4Click] = useState(false);
  function toggleCheckBox1() {
    setisCheckBox1Click(!isCheckBox1Click);
  }
  function toggleCheckBox2() {
    setisCheckBox2Click(!isCheckBox2Click);
  }
  function toggleCheckBox3() {
    setisCheckBox3Click(!isCheckBox3Click);
  }
  function toggleCheckBox4() {
    setisCheckBox4Click(!isCheckBox4Click);
  }

  function buttonClick(e: any) {
    e.stopPropagation();
    setIsModalVisible(true);
  }
  const footer = useMemo(
    () => [
      <Button key="Cancel"> Cancel</Button>,
      <Button key="Export">Export</Button>,
    ],
    [],
  );
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
                <Collapse defaultActiveKey={['1', '2', '3', '4', '5']}>
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
                    key="2"
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
                    key="3"
                    className="boldheader"
                    extra={
                      <div>
                        <Button onClick={buttonClick} style={{ color: 'red' }}>
                          Time Out
                        </Button>
                        <span> </span>
                        {/* <Button onClick={buttonClick} style={{ color: 'red' }}>
                          Sign Out
                        </Button> */}
                        <Button style={{ color: 'red' }}>Template</Button>
                      </div>
                    }
                  >
                    <Row>
                      <Col span={5} />
                      <Col>
                        <Row>
                          {/* <Modal
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
                          </Modal> */}

                          <Modal
                            title=""
                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            width={600}
                            style={{ fontSize: 20 }}
                            // footer={footer}
                            footer={false}
                            closable={false}
                          >
                            <Row>
                              {/* <Col span={2}>
                        <Checkbox onClick={toggleCheckBox1}></Checkbox>
                      </Col> */}
                              {/* <Col span={22}> */}
                              <Col span={24}>
                                <Collapse accordion defaultActiveKey={['2']}>
                                  <Panel
                                    disabled
                                    showArrow={false}
                                    header={
                                      <Checkbox
                                        onClick={toggleCheckBox1}
                                        className={style['ant-checkbox-input']}
                                      >
                                        <strong>Sign In</strong>
                                      </Checkbox>
                                    }
                                    key="1"
                                    style={{
                                      backgroundColor: isCheckBox1Click
                                        ? 'red'
                                        : 'white',
                                    }}
                                    extra={
                                      <div>
                                        @ <TimePicker />
                                        <span> </span>
                                      </div>
                                    }
                                  >
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
                                          Medications reviewed (include blood
                                          thinners)
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
                                          Side and site of operation confirmed
                                          and marked if applicable
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

                                    {/* <Row className={style['recorded-by']}>
                              <strong style={{ fontSize: '17px' }}>
                                Recorded by:
                              </strong>

                              <div>
                                <Col span={1}></Col>
                                <Input style={{ width: 160 }} />
                                <p className={style.amphersands}>@</p>
                                <TimePicker />
                              </div>
                            </Row> */}
                                  </Panel>

                                  <Panel
                                    showArrow={false}
                                    header={
                                      <Checkbox
                                        onClick={toggleCheckBox2}
                                        className={style['ant-checkbox-input']}
                                      >
                                        <strong>Time Out</strong>
                                      </Checkbox>
                                    }
                                    key="2"
                                    style={{
                                      backgroundColor: isCheckBox2Click
                                        ? 'red'
                                        : 'white',
                                    }}
                                    extra={
                                      <div>
                                        @ <TimePicker />
                                        <span> </span>
                                      </div>
                                    }
                                  >
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
                                          Correct site marking on dental chart
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

                                    <pre> </pre>

                                    {/* <Row className={style['recorded-by']}>
                              <strong style={{ fontSize: '17px' }}>
                                Recorded by:
                              </strong>

                              <div>
                                <Col span={1}></Col>
                                <Input style={{ width: 160 }} />
                                <p className={style.amphersands}>@</p>
                                <TimePicker />
                              </div>
                            </Row> */}
                                  </Panel>
                                  <Panel
                                    disabled
                                    showArrow={false}
                                    header={
                                      <Checkbox
                                        onClick={toggleCheckBox3}
                                        className={style['ant-checkbox-input']}
                                      >
                                        <strong>Sign Out</strong>
                                      </Checkbox>
                                    }
                                    key="3"
                                    style={{
                                      backgroundColor: isCheckBox3Click
                                        ? 'red'
                                        : 'white',
                                    }}
                                    extra={
                                      <div>
                                        @ <TimePicker />
                                        <span> </span>
                                      </div>
                                    }
                                  >
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
                                          Instrument, needle and swab counts
                                          complete
                                        </Text>
                                      </Col>
                                    </Row>

                                    <Row>
                                      <Col span={2}>
                                        <Checkbox />
                                      </Col>
                                      <Col span={22}>
                                        <Text style={{ fontSize: 20 }}>
                                          Specimen(s) labelled
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

                                    {/* <Row className={style['recorded-by']}>
                              <strong style={{ fontSize: '17px' }}>
                                Recorded by:
                              </strong>

                              <div>
                                <Col span={1}></Col>
                                <Input style={{ width: 160 }} />
                                <p className={style.amphersands}>@</p>
                                <TimePicker />
                              </div>
                            </Row> */}
                                  </Panel>
                                </Collapse>
                              </Col>
                            </Row>

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

                            {/* <Row> */}
                            {/* <Col span={2}>
                        <Checkbox onClick={toggleCheckBox4}></Checkbox>
                      </Col> */}
                            {/* <Col span={22}> */}
                            {/* <Collapse defaultActiveKey={['1']}>
                          <Panel
                            header=""
                            key="4"
                            style={{
                              backgroundColor: isCheckBox4Click
                                ? 'red'
                                : 'white',
                            }}
                          > */}
                            {/* <Row>
                          <Col span={3}>
                            <Text style={{ fontSize: 20 }}>Time : </Text>
                          </Col>
                          <Col span={21}>
                            <TimePicker></TimePicker>
                          </Col>
                        </Row>  */}
                            {/* <pre> </pre> */}
                            {/* <Row>
                              <Col span={2}>
                                <Checkbox />
                              </Col>
                              <Col span={22}>
                                <Text style={{ fontSize: 20 }}>
                                  Assisted to recovery
                                </Text>
                              </Col>
                            </Row> */}
                            {/* 
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
                            </Row> */}

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

                            {/* </Panel>
                        </Collapse>
                      </Col>
                    </Row> */}
                            <pre> </pre>

                            <Row className={style['recorded-by']}>
                              <Card style={{ width: 560 }}>
                                <strong
                                  style={{
                                    fontSize: '17px',
                                    marginLeft: '3px',
                                  }}
                                >
                                  Recorded by:
                                  <Input
                                    style={{ width: 300, marginLeft: '5px' }}
                                  />
                                  <Button style={{ marginLeft: '5px' }}>
                                    Export
                                  </Button>
                                </strong>

                                <div>
                                  {/* <Col span={2}></Col>
                                <Input style={{ width: 10 }} /> */}
                                  {/* <p className={style.amphersands}>@</p>
                                <TimePicker /> */}
                                </div>
                              </Card>
                            </Row>
                          </Modal>
                        </Row>
                      </Col>
                    </Row>
                    <TextArea rows={5} cols={50}></TextArea>
                  </Panel>
                  <Panel
                    header="Care Plan"
                    key="4"
                    className="boldheader"
                    extra={
                      <div>
                        <Button onClick={buttonClick} style={{ color: 'red' }}>
                          Import from Previous Visit
                        </Button>
                        <span> </span>
                        <Button onClick={buttonClick} style={{ color: 'red' }}>
                          Template
                        </Button>
                      </div>
                    }
                  >
                    <TextArea
                      rows={5}
                      cols={50}
                      placeholder="1. Filling on XXX date
2. Extraction on xxx date"
                    ></TextArea>
                  </Panel>

                  <Panel
                    header="Patient Education Material"
                    key="5"
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
