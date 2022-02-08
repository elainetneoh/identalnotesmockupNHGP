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
  Image,
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
import consentimage from './icon/consentimage.png';

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

const Consent: React.FC = () => {
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
        <Col span={17}>
          <Row>
            <StepBackwardFilled style={{ fontSize: 25, color: 'royalblue' }} />
            <CaretLeftFilled style={{ fontSize: 25, color: 'royalblue' }} />
            <Input style={{ width: '2%', height: '30px' }} />
            <Text style={{ fontSize: 16 }}> of 42 </Text>
            <CaretRightOutlined style={{ fontSize: 25, color: 'royalblue' }} />
            <StepForwardOutlined style={{ fontSize: 25, color: 'royalblue' }} />

            <pre> </pre>
            <Button>New</Button>
            <pre> </pre>
            <Button>Save</Button>
            <pre> </pre>
            <Button>Delete</Button>
            <pre> </pre>
            <Button>Cancel</Button>
            <pre> </pre>
            <Button>Print</Button>
            <pre> </pre>
          </Row>

          <Row></Row>
          <Divider />

          <Text style={{ fontSize: 18 }}>
            <strong>NATURE OF OPERATION / PROCEDURE</strong>
          </Text>
          <Row>
            <Col span={23}>
              <TextArea
                placeholder="the nature of operation is"
                style={{ height: 300 }}
              ></TextArea>
              <pre></pre>
            </Col>
          </Row>
          <Row>
            <Text style={{ fontSize: 18 }}>
              <strong>CONSENT FORMS</strong>
            </Text>
          </Row>
          <Row>
            <Select style={{ width: '50%' }}>
              <Option value="Completed">Completed</Option>
            </Select>
          </Row>
          <pre></pre>
          <Row>
            <Text style={{ fontSize: 18 }}>
              <strong>SIGNATORIES</strong>
            </Text>
          </Row>

          <Form
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 200 }}
            layout="horizontal"
          >
            <Row>
              <Col span={23}>
                <br></br>
                <Collapse defaultActiveKey={['1']}>
                  <Panel header="Consenter" key="1" className="boldheader">
                    {/*<CKEditor
                      style={{ width: '90%' }}
                      editor={ClassicEditor}
                      data="<br><br><br>"
                    />*/}
                    <TextArea
                      rows="5"
                      cols="50"
                      placeholder="Relationship: &#10;Name: &#10;NRIC/FIN: &#10;"
                    ></TextArea>
                    <Row>
                      <Col span={2}>
                        <Text>Dated: </Text>
                      </Col>

                      <Col span={8}>
                        <Text>13/01/2022 </Text>
                      </Col>

                      <Col span={7}>
                        <Button>Thumbprint</Button>
                      </Col>
                      <Col span={7}>
                        <Button>Signature</Button>
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>
                <pre> </pre>
                <Collapse>
                  <Panel header="Clinician" key="0" className="boldheader">
                    {/*<CKEditor
                      style={{ width: '90%' }}
                      editor={ClassicEditor}
                      data="<br><br><br>"
                    />*/}
                    <TextArea
                      rows="5"
                      cols="50"
                      placeholder="Relationship: &#10;Name: &#10;NRIC/FIN: &#10;"
                    ></TextArea>
                    <Row>
                      <Col span={2}>
                        <Text>Dated: </Text>
                      </Col>

                      <Col span={8}>
                        <Text>13/01/2022 </Text>
                      </Col>

                      <Col span={7}>
                        <Button>Thumbprint</Button>
                      </Col>
                      <Col span={7}>
                        <Button>Signature</Button>
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>

                <pre> </pre>

                <Collapse>
                  <Panel header="Interpreter" key="0" className="boldheader">
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
                    <TextArea
                      rows="5"
                      cols="50"
                      placeholder="Relationship: &#10;Name: &#10;NRIC/FIN: &#10;"
                    ></TextArea>
                    <Row>
                      <Col span={2}>
                        <Text>Dated: </Text>
                      </Col>

                      <Col span={8}>
                        <Text>13/01/2022 </Text>
                      </Col>

                      <Col span={7}>
                        <Button>Thumbprint</Button>
                      </Col>
                      <Col span={7}>
                        <Button>Signature</Button>
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>

                <pre> </pre>

                <Collapse>
                  <Panel header="Witness" key="0" className="boldheader">
                    {/*<CKEditor
                      style={{ width: '90%' }}
                      editor={ClassicEditor}
                      data="<br><br><br>"
                    />*/}
                    <TextArea
                      rows="5"
                      cols="50"
                      placeholder="Relationship: &#10;Name: &#10;NRIC/FIN: &#10;"
                    ></TextArea>
                    <Row>
                      <Col span={2}>
                        <Text>Dated: </Text>
                      </Col>

                      <Col span={8}>
                        <Text>13/01/2022 </Text>
                      </Col>

                      <Col span={7}>
                        <Button>Thumbprint</Button>
                      </Col>
                      <Col span={7}>
                        <Button>Signature</Button>
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>
              </Col>

              <Col span={2} />
            </Row>

            <pre></pre>
            <Row>
              <Text style={{ fontSize: 20 }}>
                This Consent Form has been saved as final by Elaine on
                15/10/2022 5:49:16 pm.
              </Text>
            </Row>
          </Form>
        </Col>
        <Col span={7}>
          <Row>
            <Text style={{ fontSize: 18 }}>Preview</Text>
          </Row>
          <Row>
            <Text style={{ fontSize: 18 }}>
              CONSENT FOR DENTAL TREATMENT/OPERATION/PROCEDURE
            </Text>
          </Row>
          <Row>
            <Card style={{ height: 1200, width: 700 }}>
              <Image src={consentimage} width={600} height={1100} />
            </Card>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Consent;
