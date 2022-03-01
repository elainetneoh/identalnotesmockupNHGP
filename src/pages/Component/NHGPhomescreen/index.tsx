import React, { useState } from 'react';
import {
  Input,
  Button,
  Form,
  Select,
  Row,
  Col,
  DatePicker,
  Checkbox,
  Image,
  Space,
  Card,
  Divider,
  Modal,
  Typography,
  Radio,
  Table,
} from 'antd';
import style from './index.less';
import chestpain from './images/chestpain.jpeg';
import breathlessness from './images/Breathlessness.jpeg';

import epos_antibioticsprogram_Y from './icon/epos_antibioticsprogram_Y.png';
import epos_chas_Y from './icon/epos_chas_AMBER.png';
import epos_medifund_Y from './icon/epos_medifund_Y.png';
import epos_PG_Y from './icon/epos_PG_Y.png';
import epos_infectiousdiseases_Y from './icon/epos_infectiousdiseases_Y.png';
import epos_tlc_Y from './icon/epos_tlc_Y.png';
import epos_immunosupressed_Y from './icon/epos_immunosupressed_Y.png';
import epicIndicator1 from './icon/epicIndicator1.png';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const { Column } = Table;

const NEHRhomescreen: React.FC = () => {
  const [fall, setClass] = useState<boolean>(false);
  const [patientAlertModalVisible, setPatientAlertModalVisible] =
    useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  let isToggledOn = true;
  function togglefunction() {
    if (isToggledOn) {
      setPatientAlertModalVisible(true);
    } else {
      setPatientAlertModalVisible(false);
    }
  }

  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleBtnClick1 = () => {
    setClass((pre) => !pre);
  };
  const [explain, setClass1] = useState<string>('defualt');
  const handleBtnClick2 = () => {
    setClass1('breathlessness');
  };
  const handleBtnClick3 = () => {
    setClass1('chestpain');
  };

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

  const [isModalVisiblesearchpatient, setIsModalVisiblesearchpatient] =
    useState(false);

  const showModalsearchpatient = () => {
    setIsModalVisiblesearchpatient(true);
  };

  const handleOksearchpatient = () => {
    setIsModalVisiblesearchpatient(false);
  };

  const handleCancelsearchpatient = () => {
    setIsModalVisiblesearchpatient(false);
  };

  const [isPregnantConsentSigned, setIsPregnantConsentSigned] = useState(false);
  const [pregnantModalVisible, setPregnantModalVisible] = useState(false);
  const [Signature, setSignatureVisible] = useState(true);
  const [EDDDate, setEDDDateVisible] = useState(true);
  const showwEDD = () => {
    setEDDDateVisible(false);
    setSignatureVisible(true);
  };

  const noshowwEDD = () => {
    setEDDDateVisible(true);
    setSignatureVisible(false);
  };
  return (
    <div className={style.NEHRhome}>
      <Row gutter={{ sm: 8 }}>
        <Col span={12}>
          <Row gutter={{ sm: 8 }}>
            <Col span={20}>
              <Divider
                orientation="left"
                style={{ borderColor: 'black' }}
              ></Divider>
              {/* <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 100 }}
                layout="horizontal"
              >
                <Form.Item
                  label="NRIC/FIN"
                  name="NRIC/FIN"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Row>
                    <Input style={{ width: '55%' }} />
                    <pre> </pre>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: '21%' }}
                    >
                      Verify
                    </Button>
                    <pre> </pre>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: '21%' }}
                    >
                      Label
                    </Button>
                  </Row>
                </Form.Item>
              </Form> */}

              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 100 }}
                layout="horizontal"
              >
                <Form.Item
                  label="NRIC/FIN"
                  name="NRIC/FIN"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Row>
                    <Input style={{ width: '55%' }} />
                    <pre> </pre>
                    <Button htmlType="submit" style={{ width: '21%' }}>
                      Verify
                    </Button>
                    <pre> </pre>
                    <Button
                      // type="primary"
                      htmlType="submit"
                      style={{ width: '21%' }}
                    >
                      Label
                    </Button>
                  </Row>
                </Form.Item>
              </Form>

              {/* <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 100 }}
                layout="horizontal"
              >
                <Form.Item
                  label="UIN"
                  name="UIN"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Row>
                    <Input style={{ width: '55%' }} />
                    <pre> </pre>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: '21%' }}
                    >
                      Generate
                    </Button>
                    <pre> </pre>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: '21%' }}
                    >
                      UIN Label
                    </Button>
                  </Row>
                </Form.Item>
              </Form> */}

              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 100 }}
                layout="horizontal"
              >
                <Form.Item
                  label="UIN"
                  name="UIN"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Row>
                    <Input style={{ width: '55%' }} />
                    <pre> </pre>

                    {/* <Input style={{ width: '10%' }} placeholder="Lab" />
                <pre> </pre> */}

                    <Button
                      // type="primary"
                      htmlType="submit"
                      style={{ width: '21%' }}
                    >
                      Generate
                    </Button>
                    <pre> </pre>
                    <Button
                      // type="primary"
                      htmlType="submit"
                      style={{ width: '21%' }}
                    >
                      UIN Label
                    </Button>
                  </Row>
                </Form.Item>
              </Form>

              {/* <Form
                labelCol={{ span: 0 }}
                //wrapperCol={{ span: 200 }}
                layout="horizontal"
              >
                <Form.Item
                  label="Old NRIC/FIN"
                  name="Patient ID"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                > */}
              {/* <Row>
                    <Input style={{ width: '100%' }} /> */}

              {/* <Button type="primary" htmlType="submit">
                      Verify
  </Button>*/}
              {/* </Row>
                </Form.Item>
              </Form> */}
              {/* <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 200 }}
                layout="horizontal"
              > */}
              {/* <Form.Item
                  label="Name"
                  name="Name"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Input />
                </Form.Item>
                <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
                  <Col span={12}>
                    <Form.Item
                      label="Gender"
                      name="Gender"
                      labelCol={{ span: 8 }}
                      labelAlign={'left'}
                    >
                      <Select
                        defaultValue="Select one"
                        style={{ width: '80%' }}
                      >
                        <Option value="Male">M</Option>
                        <Option value="Female">F</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Document Type" name="DocumentType">
                      <Select
                        defaultValue="Select one"
                        style={{ width: '80%' }}
                      >
                        <Option value="P">P</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label="Date of Birth"
                  name="Dateofbirth"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                  label="Home no"
                  name="Homenumber"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Office no"
                  name="Officenumber"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Handphone no"
                  name="Hpnumber"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Row>
                    <Input style={{ width: '91%' }} />
                    <pre> </pre>
                    <Button type="primary" htmlType="submit">
                      SMS
                    </Button>
                  </Row>
                </Form.Item>
                <Form.Item
                  label="Nationality"
                  name="Nationality"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Input />
                </Form.Item>
              </Form>
              <Row>
                <Col span={4}>
                  <p>Address:</p>
                </Col>
                <Col span={20}>
                  <Form
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 200 }}
                    layout="vertical"
                  >
                    <Row gutter={{ xs: 2 }}>
                      <Col span={8}>
                        <Form.Item label="Building No" name="Buildingnumber">
                          <Input style={{ width: '70%' }} />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Floor" name="Floor">
                          <Input style={{ width: '70%' }} />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Unit" name="Unit">
                          <Input style={{ width: '70%' }} />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item label="Street" name="Street">
                      <Input />
                    </Form.Item>
                    <Row gutter={{ xs: 2 }}>
                      <Col span={8}>
                        <Form.Item label="Postal Code" name="Postalcode">
                          <Input style={{ width: '70%' }} />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Country" name="Country">
                          <Input />
                        </Form.Item>
                      </Col> */}
              {/* </Row>
                  </Form> */}
              {/* </Col> */}
              {/* </Row> */}
              {/* <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 200 }}
                layout="horizontal"
              >
                <Form.Item
                  label="Language"
                  name="PatientLanguage"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="Email"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Referral Source"
                  name="ReferralSource"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Row>
                    <Select defaultValue="TTSH" style={{ width: '50%' }}>
                      <Option value="TTHS">TTHS</Option>
                      <Option value="KTPH">KTPH</Option>
                    </Select>
                    <pre> </pre>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: '20%' }}
                    >
                      Refresh CMIS
                    </Button>
                  </Row>
                </Form.Item>
                <Form.Item
                  label="Allergy"
                  name="Allergy"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <TextArea style={{ height: 60 }} />
                </Form.Item>
                <Form.Item
                  label="Medical Alert"
                  name="MedicalAlert"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <TextArea style={{ height: 80 }} />
                </Form.Item>
              </Form> */}

              {/* </Col> */}

              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 200 }}
                layout="horizontal"
              >
                {/* <Form.Item
              label="Old NRIC/FIN"
              name="OldNRIC/FIN"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Input />
            </Form.Item> */}
                <Form.Item
                  label={<p style={{ fontSize: 15 }}>Name</p>}
                  name="Name"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Input />
                </Form.Item>

                {/* <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}> */}
                {/* <Col span={12}> */}
                {/* <Form.Item
                  label="Gender"
                  name="Gender"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Select defaultValue="Select one" style={{ width: '30%' }}>
                    <Option value="Male">M</Option>
                    <Option value="Female">F</Option>
                  </Select>
                </Form.Item> */}
                {/* </Col> */}

                {/* <Col span={12}>
                <Form.Item label="Document Type" name="DocumentType">
                  <Select defaultValue="Select one" style={{ width: '49%' }}>
                    <Option value="SC">SC</Option>
                    <Option value="PR">PR</Option>
                    <Option value="Non-residence">Non-residence</Option>
                    <Option value="PG">PG</Option>
                    <Option value="MG">MG</Option>
                  </Select>
                  <span> </span>
                  <Input style={{ width: '49%' }} placeholder="CHAS"></Input>
                </Form.Item>
              </Col> */}
                {/* </Row> */}

                {/* <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}> */}
                {/* <Col span={12}> */}

                <Form.Item
                  label="Gender"
                  name="Gender"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Row>
                    <Col span={15}>
                      <Select
                        defaultValue="Select one"
                        style={{ width: '40%' }}
                      >
                        <Option value="Male">M</Option>
                        <Option value="Female">F</Option>
                      </Select>
                    </Col>

                    <Col span={9}>
                      <Form.Item
                        label="Document Type"
                        // name="DocumentType"
                        // labelCol={{ span: 6 }}
                        // style={{ width: '65%' }}
                        // labelAlign={'left'}
                      >
                        <Select
                          defaultValue="Select one"
                          style={{ width: '100%' }}
                        >
                          <Option value="SC">SC</Option>
                          <Option value="PR">PR</Option>
                          <Option value="Non-residence">Non-residence</Option>
                          <Option value="PG">PG</Option>
                          <Option value="MG">MG</Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* <Form.Item
                  label="CHAS"
                  name="CHAS"
                  labelCol={{ span: 15 }}
                  style={{ width: '65%' }}
                 // labelAlign={'left'}
                >
                  <Select defaultValue="Select one" style={{ width: '100%' }}>
                    <Option value="NIL">NIL</Option>
                    <Option value="Blue">Blue</Option>
                    <Option value="Orange">Orange</Option>
                  </Select>
                </Form.Item> */}

                    {/* <Form.Item
  label="Document Type"
  name="DocumentType"
  labelCol={{ span: 6 }}
  style={{ width: '65%' }}
  labelAlign={'left'}
>
  <Select defaultValue="Select one" style={{ width: '50%' }}>
    <Option value="SC">SC</Option>
    <Option value="PR">PR</Option>
    <Option value="Non-residence">Non-residence</Option>
    <Option value="PG">PG</Option>
    <Option value="MG">MG</Option>
  </Select>
</Form.Item> */}
                  </Row>
                </Form.Item>

                <Form.Item
                  label="Date of Birth"
                  name="Dateofbirth"
                  // labelCol={{ span: 8 }}
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Row>
                    <Col span={15}>
                      <DatePicker style={{ width: '40%' }}></DatePicker>
                    </Col>

                    {/* <DatePicker style={{ width: '30%' }}></DatePicker> */}
                    {/* </Form.Item> */}
                    {/* </Col> */}

                    {/* <Col span={10}> */}

                    <Col span={9}>
                      <Form.Item
                        label="CHAS"
                        name="CHAS"
                        labelCol={{ span: 9 }}
                        //style={{ width: '65%' }}
                        labelAlign={'left'}
                      >
                        <Select
                          defaultValue="Select one"
                          style={{ width: '100%' }}
                        >
                          <Option value="NIL">NIL</Option>
                          <Option value="Blue">Blue</Option>
                          <Option value="Orange">Orange</Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* <Form.Item
  label="Document Type"
  name="DocumentType"
  labelCol={{ span: 6 }}
  //style={{ width: '65%' }}
  //labelAlign={'left'}
>
  <Select defaultValue="Select one" style={{ width: '50%' }}>
    <Option value="SC">SC</Option>
    <Option value="PR">PR</Option>
    <Option value="Non-residence">Non-residence</Option>
    <Option value="PG">PG</Option>
    <Option value="MG">MG</Option>
  </Select>
</Form.Item> */}
                  </Row>

                  {/* <Form.Item
                  label="Document Type"
                  name="DocumentType"
                 labelCol={{ span: 6 }}
                // style={{ width: '100%' }}
                // labelAlign={'right'}
                >
                  <Select defaultValue="Select one" >
                    <Option value="SC">SC</Option>
                    <Option value="PR">PR</Option>
                    <Option value="Non-residence">Non-residence</Option>
                    <Option value="PG">PG</Option>
                    <Option value="MG">MG</Option>
                  </Select>
                </Form.Item> */}
                  {/* <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '30%' }}
                  onClick={showModal}
                  className={fall ? style.fallrish : style.nonfallrisk}
                >
                  Financial Assistance
                </Button> */}
                  {/* <Modal
                  title="Financial"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  width={600}
                  style={{ fontSize: 20 }}
                >
                  <Card>
                    <Row>
                      <Col span={2}>
                        <button>Edit</button>
                      </Col>
                      <pre> </pre>
                      <Col>
                        <button>Save</button>
                      </Col>
                      <pre> </pre>
                      <Col>
                        <button>Delete</button>
                      </Col>
                      <Row></Row>
                    </Row>

                    <Row gutter={{ sm: 8 }}>
                      <Col span={10}>
                        <Form
                          labelCol={{ span: 0 }}
                          wrapperCol={{ span: 100 }}
                          layout="horizontal"
                        >
                          <Form.Item
                            label="Card Type"
                            name="cardType"
                            labelCol={{ span: 4 }}
                            labelAlign={'left'}
                            style={{ width: '500px' }}
                          >
                            <Select
                              defaultValue="TTSH"
                              style={{ width: '80%' }}
                            >
                              <Option value="TTHS">TTHS</Option>
                              <Option value="KTPH">KTPH</Option>
                            </Select>
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>

                    <Row gutter={{ sm: 8 }}>
                      <Col span={10}>
                        <Form
                          labelCol={{ span: 0 }}
                          wrapperCol={{ span: 100 }}
                          layout="horizontal"
                        >
                          <Form.Item
                            label="Issue Date"
                            name="issueDate"
                            labelCol={{ span: 4 }}
                            labelAlign={'left'}
                            style={{ width: '500px' }}
                          >
                            <DatePicker style={{ width: '80%' }}></DatePicker>
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>

                    <Row gutter={{ sm: 8 }}>
                      <Col span={10}>
                        <Form
                          labelCol={{ span: 0 }}
                          wrapperCol={{ span: 100 }}
                          layout="horizontal"
                        >
                          <Form.Item
                            label="Expiry Date"
                            name="expiryDate"
                            labelCol={{ span: 4 }}
                            labelAlign={'left'}
                            style={{ width: '500px' }}
                          >
                            <DatePicker style={{ width: '80%' }}></DatePicker>
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>

                    <Row gutter={{ sm: 8 }}>
                      <Col span={10}>
                        <Form
                          labelCol={{ span: 0 }}
                          wrapperCol={{ span: 100 }}
                          layout="horizontal"
                        >
                          <Form.Item
                            label="Remarks"
                            name="remarks"
                            labelCol={{ span: 4 }}
                            labelAlign={'left'}
                            style={{ width: '500px' }}
                          >
                            <TextArea style={{ width: '80%' }}></TextArea>
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>

                    <Row style={{ marginBottom: 80 }}></Row>

                    <Text>Updated By : Elaine - 7/Jan/2021 17:08 </Text>

                    <p />
                  </Card>
                </Modal> */}
                </Form.Item>

                {/*<Form.Item label="Document Type" name="DocumentType">
                  <Select defaultValue="Select one" style={{ width: '49%' }}>
                    <Option value="P">P</Option>
                  </Select>
                  <span> </span>
                  <Input style={{ width: '49%' }} placeholder='PG'></Input>
                </Form.Item>*/}
                {/* </Col> */}
                {/* </Row> */}

                <Form.Item
                  label="Nationality"
                  name="Nationality"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Row>
                    <Col span={15}>
                      {/* <Input style={{ width: '30%' }} /> */}
                      <Select
                        defaultValue="Select one"
                        style={{ width: '40%' }}
                      >
                        <Option value="SC">Singaporean</Option>
                        <Option value="PR">Malaysian</Option>
                        <Option value="PR">Indonesian</Option>
                      </Select>
                    </Col>

                    <Col span={6}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: '150%' }}
                        onClick={showModal}
                        className={fall ? style.fallrish : style.nonfallrisk}
                      >
                        Financial Assistance
                      </Button>
                      <Modal
                        title="Financial"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        width={600}
                        style={{ fontSize: 20 }}
                      >
                        <Card>
                          <Row>
                            <Col span={2}>
                              <button>Edit</button>
                            </Col>
                            <pre> </pre>
                            <Col>
                              <button>Save</button>
                            </Col>
                            <pre> </pre>
                            <Col>
                              <button>Delete</button>
                            </Col>
                            <Row></Row>
                          </Row>

                          <Row gutter={{ sm: 8 }}>
                            <Col span={10}>
                              <Form
                                labelCol={{ span: 0 }}
                                wrapperCol={{ span: 100 }}
                                layout="horizontal"
                              >
                                <Form.Item
                                  label="Card Type"
                                  name="cardType"
                                  labelCol={{ span: 4 }}
                                  labelAlign={'left'}
                                  style={{ width: '500px' }}
                                >
                                  <Select
                                    defaultValue="TTSH"
                                    style={{ width: '80%' }}
                                  >
                                    <Option value="TTHS">TTHS</Option>
                                    <Option value="KTPH">KTPH</Option>
                                  </Select>
                                </Form.Item>
                              </Form>
                            </Col>
                          </Row>

                          <Row gutter={{ sm: 8 }}>
                            <Col span={10}>
                              <Form
                                labelCol={{ span: 0 }}
                                wrapperCol={{ span: 100 }}
                                layout="horizontal"
                              >
                                <Form.Item
                                  label="Issue Date"
                                  name="issueDate"
                                  labelCol={{ span: 4 }}
                                  labelAlign={'left'}
                                  style={{ width: '500px' }}
                                >
                                  <DatePicker
                                    style={{ width: '80%' }}
                                  ></DatePicker>
                                </Form.Item>
                              </Form>
                            </Col>
                          </Row>

                          <Row gutter={{ sm: 8 }}>
                            <Col span={10}>
                              <Form
                                labelCol={{ span: 0 }}
                                wrapperCol={{ span: 100 }}
                                layout="horizontal"
                              >
                                <Form.Item
                                  label="Expiry Date"
                                  name="expiryDate"
                                  labelCol={{ span: 4 }}
                                  labelAlign={'left'}
                                  style={{ width: '500px' }}
                                >
                                  <DatePicker
                                    style={{ width: '80%' }}
                                  ></DatePicker>
                                </Form.Item>
                              </Form>
                            </Col>
                          </Row>

                          <Row gutter={{ sm: 8 }}>
                            <Col span={10}>
                              <Form
                                labelCol={{ span: 0 }}
                                wrapperCol={{ span: 100 }}
                                layout="horizontal"
                              >
                                <Form.Item
                                  label="Remarks"
                                  name="remarks"
                                  labelCol={{ span: 4 }}
                                  labelAlign={'left'}
                                  style={{ width: '500px' }}
                                >
                                  <TextArea style={{ width: '80%' }}></TextArea>
                                </Form.Item>
                              </Form>
                            </Col>
                          </Row>

                          <Row style={{ marginBottom: 80 }}></Row>

                          <Text>Updated By : Elaine - 7/Jan/2021 17:08 </Text>

                          <p />
                        </Card>
                      </Modal>
                    </Col>
                  </Row>
                </Form.Item>

                {/* <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
            <Col span={12}> */}

                {/* <Form.Item
              label="Document Type"
              name="DocumentType"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            > */}
                {/* <Select defaultValue="Select one" style={{ width: '30%' }}>
                <Option value="SC">SC</Option>
                <Option value="PR">PR</Option>
                <Option value="Non-residence">Non-residence</Option>
                <Option value="PG">PG</Option>
                <Option value="MG">MG</Option>
              </Select> */}
                {/* <span> </span>
                  <Input style={{ width: '49%' }} placeholder="CHAS"></Input> */}
                {/* </Form.Item> */}
                {/* </Col> */}

                {/* <Form.Item
              label="CHAS"
              name="CHAS"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Select defaultValue="Select one" style={{ width: '30%' }}>
                <Option value="NIL">NIL</Option>
                <Option value="Blue">Blue</Option>
                <Option value="Orange">Orange</Option>
              </Select>
            </Form.Item> */}

                {/* <Row>
                  <Col span={14}> */}
                {/*  */}
                {/* </Col> */}
                {/* <Col span={6}> */}

                {/* </Col>
                </Row> */}

                {/* </Row> */}

                <Form.Item
                  label="Language"
                  name="PatientLanguage"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Form.Item name="languageFromSAP">
                    {/* <Row>
                 <Col span={7}> */}
                    <Row>
                      <Select style={{ width: '25%' }}>
                        <Option value="English">English</Option>
                        <Option value="Chinese">Chinese</Option>
                        <Option value="Malay">Malay</Option>
                        <Option value="Tamil">Tamil</Option>
                        <Option value="Others">Others</Option>
                      </Select>
                      {/* </Col> */}

                      <pre> </pre>

                      {/* <Col span={8}> */}
                      <Select style={{ width: '25%' }}>
                        <Option value="English">English</Option>
                        <Option value="Chinese">Chinese</Option>
                        <Option value="Malay">Malay</Option>
                        <Option value="Tamil">Tamil</Option>
                        <Option value="Others">Others</Option>
                      </Select>
                    </Row>
                    {/* </Col>
                </Row> */}
                  </Form.Item>

                  {/* <Form.Item name="languageFromUI">
                <Select style={{ width: '40%' }}>
                  <Option value="English">English</Option>
                  <Option value="Chinese">Chinese</Option>
                  <Option value="Malay">Malay</Option>
                  <Option value="Tamil">Tamil</Option>
                  <Option value="Others">Others</Option>
                </Select>
              </Form.Item> */}
                </Form.Item>

                <Form.Item
                  label="Referral Source"
                  name="ReferralSource"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Row>
                    <Select defaultValue="TTSH" style={{ width: '25%' }}>
                      <Option value="TTHS">TTHS</Option>
                      <Option value="KTPH">KTPH</Option>
                    </Select>

                    {/* <pre> </pre>

                <Form.Item
                  label="Document Type"
                  name="DocumentType"
                  labelCol={{ span: 6 }}
                  style={{ width: '65%' }}
                  labelAlign={'left'}
                >
                  <Select defaultValue="Select one" style={{ width: '50%' }}>
                    <Option value="SC">SC</Option>
                    <Option value="PR">PR</Option>
                    <Option value="Non-residence">Non-residence</Option>
                    <Option value="PG">PG</Option>
                    <Option value="MG">MG</Option>
                  </Select>
                </Form.Item> */}
                  </Row>
                </Form.Item>

                <Divider orientation="left" style={{ borderColor: 'black' }}>
                  {/* Contact Details */}
                </Divider>

                <Form.Item
                  label="Home no"
                  name="Homenumber"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Office no"
                  name="Officenumber"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Handphone no"
                  name="Hpnumber"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Row>
                    <Input style={{ width: '90%' }} />
                    <pre> </pre>
                    <Button htmlType="submit">SMS</Button>
                  </Row>
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="Email"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Input />
                </Form.Item>
                {/* <Form.Item
              label="Nationality"
              name="Nationality"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Input />
            </Form.Item> */}
              </Form>
              <Row>
                <Col span={4}>
                  <p>Address:</p>
                </Col>
                <Col span={20}>
                  <Form
                    labelCol={{ span: 0 }}
                    wrapperCol={{ span: 200 }}
                    layout="vertical"
                  >
                    <Row gutter={{ xs: 2 }}>
                      <Col span={8}>
                        <Form.Item label="Building No" name="Buildingnumber">
                          <Input style={{ width: '96%' }} />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Floor" name="Floor">
                          <Input style={{ width: '96%' }} />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Unit" name="Unit">
                          <Input style={{ width: '100%' }} />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item label="Street" name="Street">
                      <Input />
                    </Form.Item>
                    <Row gutter={{ xs: 2 }}>
                      <Col span={8}>
                        <Form.Item label="Postal Code" name="Postalcode">
                          <Input style={{ width: '96%' }} />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="Country" name="Country">
                          <Input style={{ width: '90%' }} />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>

              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 200 }}
                layout="horizontal"
              >
                <Divider
                  orientation="left"
                  style={{ borderColor: 'black' }}
                ></Divider>

                {/* <Row>
              <Col span={20}></Col>

              <Col span={3}>
            <Button htmlType="submit" style={{ width: '130%' }}>
                  Refresh CMIS
                </Button>

                </Col>
            </Row> */}

                <Form.Item

                // labelCol={{ span: 4 }}
                // labelAlign={'right'}
                >
                  <Col offset={20}>
                    <Button htmlType="submit" style={{ width: '100%' }}>
                      Refresh CMIS
                    </Button>
                  </Col>
                </Form.Item>

                <Row gutter={{ xs: 4, sm: 8 }}>
                  <Col span={24}>
                    {/* <Row>
                  <Col span={14}>
                    <Form.Item
                      label="Referral Source"
                      name="ReferralSource"
                      labelCol={{ span: 7 }}
                      labelAlign={'left'}
                    >
                      <Select defaultValue="TTSH" style={{ width: '90%' }}>
                        <Option value="TTHS">TTHS</Option>
                        <Option value="KTPH">KTPH</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Button
                      htmlType="submit"
                      style={{ width: '100%' }}
                    >
                      Refresh CMIS
                    </Button>
                  </Col>
                </Row> */}
                    <Form.Item
                      label="Allergy"
                      name="Allergy"
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <TextArea style={{ width: '100%', height: 150 }} />
                    </Form.Item>

                    <Row>
                      <Col span={4}>
                        <Text>Travel / Medical Alert :</Text>

                        {/*<Form.Item
                  label="Travel / Medical Alert"
                  name="MedicalAlert"
                  labelCol={{ span: 24 }}
                  labelAlign={'left'}
                  
                >
                
                 
                {/*<TextArea style={{height:200}}></TextArea> */}

                        {/*</Form.Item>*/}

                        <pre></pre>

                        <pre></pre>
                        <pre></pre>
                        <pre></pre>
                        <pre></pre>
                        <Space direction="vertical">
                          {/* <Button
                        style={{ width: 120 }}
                        className={fall ? style.fallrish : style.nonfallrisk}
                        type="ghost"
                        // danger
                        htmlType="submit"
                        onClick={() => {
                          setPatientAlertModalVisible(true);
                        }}
                      >
                        Patient Alert
                      </Button>

                      <Button
                        style={{ width: 120 }}
                        // type="primary"
                        htmlType="submit"
                        onClick={showModal2}
                      >
                        Dialog
                      </Button> */}
                        </Space>

                        {/* <Modal
                      title="Dialog"
                      visible={isModalVisible2}
                      onOk={handleOk2}
                      onCancel={handleCancel2}
                      width={500}
                      bodyStyle={{ height: 300 }}
                      style={{ fontSize: 20, left: -500, top: 720 }}
                    >
                      <Row>
                        <Col>
                          <button>Clear</button>
                        </Col>
                        <pre> </pre>
                        <Col>
                          <button>Save</button>
                        </Col>
                        <pre> </pre>
                        <Col>
                          <button>Delete</button>
                        </Col>
                        <Row></Row>
                      </Row>

                      <Row gutter={{ sm: 8 }}>
                        <Col>
                          <TextArea
                            style={{ width: 700, height: 100 }}
                          ></TextArea>
                        </Col>
                      </Row>

                      <Row style={{ marginBottom: 80 }}></Row>

                      <Text>Saved on 7/Jan/2021 17:08 </Text>

                      <p />
                    </Modal> */}

                        {/* <Modal
                      visible={patientAlertModalVisible}
                      title="Patient Alert"
                      onOk={() => {
                        setPatientAlertModalVisible(false);
                      }}
                      width={500}
                      bodyStyle={{ height: 300 }}
                      style={{ fontSize: 20, left: -500, top: 720 }}
                    >
                      Paitent alert content here ...
                    </Modal> */}
                      </Col>

                      <Col span={20}>
                        <TextArea style={{ height: 150 }}></TextArea>
                      </Col>
                    </Row>

                    <pre></pre>
                  </Col>
                </Row>

                <Row gutter={{ xs: 4, sm: 8 }}>
                  <Col span={4}>
                    <Space direction="vertical">
                      <Button
                        style={{ width: 120 }}
                        className={fall ? style.fallrish : style.nonfallrisk}
                        type="ghost"
                        // danger
                        htmlType="submit"
                        onClick={() => {
                          togglefunction();
                        }}
                      >
                        Patient Alert
                      </Button>

                      <Button
                        style={{ width: 120 }}
                        // type="primary"
                        htmlType="submit"
                        onClick={showModal2}
                      >
                        Dialog
                      </Button>
                    </Space>
                  </Col>

                  <Col span={20}>
                    <TextArea
                      style={{ height: 160 }}
                      hidden={patientAlertModalVisible}
                    ></TextArea>
                  </Col>
                </Row>

                <pre></pre>

                <Form.Item>
                  {/* <Button htmlType="submit">New/Retrieve Patient</Button>
           
            <span> </span>
              <Button
                //type="primary"
                // style={{ background: 'orange', border: 'orange' }}
                htmlType="submit"
              >
                Examine
              </Button>

              <span> </span>
          
              <Button htmlType="submit">Search Patient</Button>
         
             <pre> </pre>
              
              <Button 
                htmlType="submit"
                style={{ width: '10%', background: 'orange' }}
              >
                Audit
              </Button>
               */}

                  <Row>
                    <Col span={6}>
                      <Button
                        htmlType="submit"
                        style={{ fontSize: 18, height: 40, width: '100%' }}
                      >
                        New/Retrieve Patient
                      </Button>
                    </Col>
                    <pre> </pre>
                    <Col span={4}>
                      <Button
                        //type="primary"
                        // style={{ background: 'orange', border: 'orange' }}
                        htmlType="submit"
                        style={{ fontSize: 18, height: 40, width: '100%' }}
                      >
                        Examine
                      </Button>
                    </Col>
                    <pre> </pre>
                    <Col span={4}>
                      <Button
                        htmlType="submit"
                        style={{ fontSize: 18, height: 40, width: '100%' }}
                        onClick={showModalsearchpatient}
                      >
                        Search Patient
                      </Button>

                      <Modal
                        title="Search Patient"
                        visible={isModalVisiblesearchpatient}
                        onOk={handleOksearchpatient}
                        onCancel={handleCancelsearchpatient}
                        width={1500}
                        bodyStyle={{ height: 800 }}
                        style={{ fontSize: 20 }}
                      >
                        <Card>
                          <Row gutter={{ sm: 8 }}>
                            <Col span={20}>
                              <Form
                                labelCol={{ span: 2 }}
                                wrapperCol={{ span: 100 }}
                                layout="horizontal"
                              >
                                <Form.Item
                                  label="Search for string"
                                  name="Search for string"
                                  labelCol={{ span: 3 }}
                                  labelAlign={'left'}
                                >
                                  <Row>
                                    <Input style={{ width: '80%' }}></Input>

                                    <pre> </pre>

                                    <Button
                                      type="primary"
                                      htmlType="submit"
                                      style={{ width: '10%' }}
                                    >
                                      Find
                                    </Button>
                                  </Row>
                                </Form.Item>
                              </Form>
                            </Col>
                          </Row>

                          <Row>
                            <Col span={10}>
                              <Divider
                                orientation="left"
                                orientationMargin="0"
                                style={{ width: '50%' }}
                              >
                                Search Fields
                              </Divider>
                              <Row>
                                <Radio style={{ fontSize: 18 }}>NRIC/FIN</Radio>
                              </Row>

                              <Row>
                                <Radio style={{ fontSize: 18 }}>
                                  Patient Name
                                </Radio>
                              </Row>

                              <Row>
                                <Radio style={{ fontSize: 18 }}>Home No</Radio>
                              </Row>

                              <Row>
                                <Radio style={{ fontSize: 18 }}>
                                  Handphone No
                                </Radio>
                              </Row>

                              <Row>
                                <Radio style={{ fontSize: 18 }}>Email</Radio>
                              </Row>

                              <Row>
                                <Radio style={{ fontSize: 18 }}>
                                  Contact No of NOK
                                </Radio>
                              </Row>

                              <Row>
                                <Radio style={{ fontSize: 18 }}>
                                  Patient Number
                                </Radio>
                              </Row>

                              <Row>
                                <Radio style={{ fontSize: 18 }}>
                                  Case Number
                                </Radio>
                              </Row>

                              <Row>
                                <Radio style={{ fontSize: 18 }}>
                                  UIN Number
                                </Radio>
                              </Row>
                            </Col>

                            <Col span={10}>
                              <Divider
                                orientation="left"
                                orientationMargin="0"
                                style={{ width: '50%' }}
                              >
                                Search Options
                              </Divider>

                              <Row>
                                <Radio style={{ fontSize: 18 }}>
                                  Starts With
                                </Radio>
                              </Row>

                              <Row>
                                <Radio style={{ fontSize: 18 }}>
                                  Partial String
                                </Radio>
                              </Row>

                              <Row>
                                <Radio style={{ fontSize: 18 }}>
                                  Exact String
                                </Radio>
                              </Row>
                            </Col>
                          </Row>

                          <Row>
                            <Col span={21}>
                              <Form.Item>
                                <Table
                                  style={{ width: '99%' }}
                                  pagination={false}
                                  //dataSource={data3}
                                >
                                  <Column
                                    title="Patient NRIC"
                                    dataIndex="PatientNRIC"
                                    key="consumables"
                                    width="20%"
                                  />
                                  <Column
                                    title="Patient Name"
                                    dataIndex="patientname"
                                    key="consumablescode"
                                    width="10%"
                                  />
                                  <Column
                                    title="Gender"
                                    dataIndex="gender"
                                    key="unit"
                                    width="10%"
                                  />
                                  <Column
                                    title="DOB"
                                    dataIndex="dob"
                                    key="price"
                                    width="10%"
                                  />
                                  <Column
                                    title="Nationality"
                                    dataIndex="nationality"
                                    key="lotnumber"
                                    width="10%"
                                  />
                                  <Column
                                    title="Email"
                                    dataIndex="email"
                                    key="lotnumber"
                                    width="10%"
                                  />
                                  <Column
                                    title="Postal Code"
                                    dataIndex="postalcode"
                                    key="lotnumber"
                                    width="10%"
                                  />
                                  <Column
                                    title="Country"
                                    dataIndex="country"
                                    key="lotnumber"
                                    width="10%"
                                  />
                                  <Column
                                    width="15%"
                                    title={() => {
                                      return <div></div>;
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

                          <p />
                        </Card>
                      </Modal>
                    </Col>
                    <pre> </pre>
                    <Col span={3} offset={4}>
                      {/* <Button
                    htmlType="submit"
                    style={{ width: '130%', background: 'orange' }}
                  >
                    Audit
                  </Button> */}

                      <Select
                        defaultValue="Audit"
                        style={{ width: '180%', fontSize: 18 }}
                      >
                        <Option value="DA">Document Audit</Option>
                        <Option value="XA">Xray Audit</Option>
                      </Select>
                    </Col>
                  </Row>
                </Form.Item>
              </Form>
            </Col>
            <Col span={0} />
            {/*<Col span={1}>
          <Space>
            <Col>
            

              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
                onClick={showModal}
              >
                {' '}
                Financial
              </Button>
              <Modal
                title="Financial"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={600}
                style={{ fontSize: 20 }}
              >
                <Card>
                  <Row>
                    <Col span={2}>
                      <button>Edit</button>
                    </Col>
                    <pre> </pre>
                    <Col>
                      <button>Save</button>
                    </Col>
                    <pre> </pre>
                    <Col>
                      <button>Delete</button>
                    </Col>
                    <Row></Row>
                  </Row>

                  <Row gutter={{ sm: 8 }}>
                    <Col span={10}>
                      <Form
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 100 }}
                        layout="horizontal"
                      >
                        <Form.Item
                          label="Card Type"
                          name="cardType"
                          labelCol={{ span: 4 }}
                          labelAlign={'left'}
                          style={{ width: '500px' }}
                        >
                          <Select defaultValue="TTSH" style={{ width: '80%' }}>
                            <Option value="TTHS">TTHS</Option>
                            <Option value="KTPH">KTPH</Option>
                          </Select>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>

                  <Row gutter={{ sm: 8 }}>
                    <Col span={10}>
                      <Form
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 100 }}
                        layout="horizontal"
                      >
                        <Form.Item
                          label="Issue Date"
                          name="issueDate"
                          labelCol={{ span: 4 }}
                          labelAlign={'left'}
                          style={{ width: '500px' }}
                        >
                          <DatePicker style={{ width: '80%' }}></DatePicker>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>

                  <Row gutter={{ sm: 8 }}>
                    <Col span={10}>
                      <Form
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 100 }}
                        layout="horizontal"
                      >
                        <Form.Item
                          label="Expiry Date"
                          name="expiryDate"
                          labelCol={{ span: 4 }}
                          labelAlign={'left'}
                          style={{ width: '500px' }}
                        >
                          <DatePicker style={{ width: '80%' }}></DatePicker>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>

                  <Row gutter={{ sm: 8 }}>
                    <Col span={10}>
                      <Form
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 100 }}
                        layout="horizontal"
                      >
                        <Form.Item
                          label="Remarks"
                          name="remarks"
                          labelCol={{ span: 4 }}
                          labelAlign={'left'}
                          style={{ width: '500px' }}
                        >
                          <TextArea style={{ width: '80%' }}></TextArea>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>

                  <Row style={{ marginBottom: 80 }}></Row>

                  <Text>Updated By : Elaine - 7/Jan/2021 17:08 </Text>

                  <p />
                </Card>
              </Modal>
            </Col>
          </Space>
        </Col>*/}
            <Col span={1} />
            <Col span={2}>
              <Space>
                <Col>
                  <Image src={epos_medifund_Y} width={60} />
                  <Image src={epos_chas_Y} width={60} />
                  <Image src={epos_PG_Y} width={60} />

                  <pre> </pre>
                  <pre> </pre>
                  <pre> </pre>
                  <pre> </pre>
                  <pre> </pre>
                  <pre> </pre>
                  <pre> </pre>
                  <pre> </pre>
                  <pre> </pre>

                  <Image src={epos_antibioticsprogram_Y} width={60} />
                  {/* <Image src={epicIndicator1} width={60} />
                  <Image src={epicIndicator1} width={60} />
                  <Image src={epicIndicator1} width={60} />
                  <Image src={epicIndicator1} width={60} /> */}
                  <Image src={epos_infectiousdiseases_Y} width={60} />
                  <Image src={epos_tlc_Y} width={60} />
                  <Image src={epos_immunosupressed_Y} width={60} />
                </Col>
              </Space>
            </Col>
          </Row>
          {/* <div className={style.marginTop}>
            <Row gutter={{ xs: 4, sm: 8, md: 12 }}>
              <Col>
                <Button type="primary" htmlType="submit">
                  New/Retrieve Patient
                </Button>
              </Col>
              <Col>
                <Button
                  type="primary"
                  style={{ background: 'orange', border: 'orange' }}
                  htmlType="submit"
                >
                  Examine
                </Button>
              </Col>
              <Col>
                <Button type="primary" htmlType="submit" onClick={showModalsearchpatient}>
                  Search Patient
                </Button>

                {/* <Modal
                  title="Search Patient"
                  visible={isModalVisiblesearchpatient}
                  onOk={handleOksearchpatient}
                  onCancel={handleCancelsearchpatient}
                  width={1500}
                  bodyStyle={{ height: 800 }}
                  style={{ fontSize: 20 }}
                >
                  <Card>
                    <Row gutter={{ sm: 8 }}>
                      <Col span={20}>
                        <Form
                          labelCol={{ span: 2 }}
                          wrapperCol={{ span: 100 }}
                          layout="horizontal"
                        >
                          <Form.Item
                            label="Search for string"
                            name="Search for string"
                            labelCol={{ span: 3 }}
                            labelAlign={'left'}
                          >
                            <Row>
                              <Input style={{ width: '80%' }}></Input>

                              <pre> </pre>

                              <Button
                                type="primary"
                                htmlType="submit"
                                style={{ width: '10%' }}
                              >
                                Find
                              </Button>
                            </Row>
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={10}>
                        <Divider
                          orientation="left"
                          orientationMargin="0"
                          style={{ width: '50%' }}
                        >
                          Search Fields
                        </Divider>
                        <Row>
                          <Radio style={{ fontSize: 18 }}>NRIC/FIN</Radio>
                        </Row>

                        <Row>
                          <Radio style={{ fontSize: 18 }}>Patient Name</Radio>
                        </Row>

                        <Row>
                          <Radio style={{ fontSize: 18 }}>Home No</Radio>
                        </Row>

                        <Row>
                          <Radio style={{ fontSize: 18 }}>Handphone No</Radio>
                        </Row>

                        <Row>
                          <Radio style={{ fontSize: 18 }}>Email</Radio>
                        </Row>

                        <Row>
                          <Radio style={{ fontSize: 18 }}>
                            Contact No of NOK
                          </Radio>
                        </Row>

                        <Row>
                          <Radio style={{ fontSize: 18 }}>Patient Number</Radio>
                        </Row>

                        <Row>
                          <Radio style={{ fontSize: 18 }}>Case Number</Radio>
                        </Row>

                        <Row>
                          <Radio style={{ fontSize: 18 }}>UIN Number</Radio>
                        </Row>
                      </Col>

                      <Col span={10}>
                        <Divider
                          orientation="left"
                          orientationMargin="0"
                          style={{ width: '50%' }}
                        >
                          Search Options
                        </Divider>

                        <Row>
                          <Radio style={{ fontSize: 18 }}>Starts With</Radio>
                        </Row>

                        <Row>
                          <Radio style={{ fontSize: 18 }}>Partial String</Radio>
                        </Row>

                        <Row>
                          <Radio style={{ fontSize: 18 }}>Exact String</Radio>
                        </Row>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={21}>
                        <Form.Item>
                          <Table
                            style={{ width: '99%' }}
                            pagination={false}
                            //dataSource={data3}
                          >
                            <Column
                              title="Patient NRIC"
                              dataIndex="PatientNRIC"
                              key="consumables"
                              width="20%"
                            />
                            <Column
                              title="Patient Name"
                              dataIndex="patientname"
                              key="consumablescode"
                              width="10%"
                            />
                            <Column
                              title="Gender"
                              dataIndex="gender"
                              key="unit"
                              width="10%"
                            />
                            <Column
                              title="DOB"
                              dataIndex="dob"
                              key="price"
                              width="10%"
                            />
                            <Column
                              title="Nationality"
                              dataIndex="nationality"
                              key="lotnumber"
                              width="10%"
                            />
                            <Column
                              title="Email"
                              dataIndex="email"
                              key="lotnumber"
                              width="10%"
                            />
                            <Column
                              title="Postal Code"
                              dataIndex="postalcode"
                              key="lotnumber"
                              width="10%"
                            />
                            <Column
                              title="Country"
                              dataIndex="country"
                              key="lotnumber"
                              width="10%"
                            />
                            <Column
                              width="15%"
                              title={() => {
                                return <div></div>;
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

                    <p />
                  </Card>
                </Modal> */}
          {/* </Col>
              <Col>
                <Select
                  style={{ backgroundColor: 'dodgerblue' }}
                  defaultValue="audit"
                >
                  <Option value="audit">Audit</Option>
                  <Option value="document">
                    <Button>Document Audit</Button>
                  </Option>
                  <Option value="Xray">
                    <Button>X-Ray Audit</Button>
                  </Option>
                </Select>
              </Col>

              <Col>
                <Button type="primary" htmlType="submit">
                  Print
                </Button>
              </Col>
              <Col>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Col>
              <Col>
                <Button type="primary" htmlType="submit">
                  Cancel
                </Button>
              </Col>
            </Row>
          </div>  */}
        </Col>

        <Col span={12}>
          <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
            <Col span={12} style={{ fontSize: 20 }}>
              <strong>
                <p style={{ textAlign: 'center', marginBottom: '1px' }}>
                  Health Questionnaire
                </p>
                <p style={{ marginBottom: '1px' }}>Do you get on exertion</p>
              </strong>
              <Row>
                <Col span={2}>
                  <Checkbox style={{ height: 5 }} />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    onClick={handleBtnClick3}
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Chest pain
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    onClick={handleBtnClick2}
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Breathlessness
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Palpitations
                  </Button>
                </Col>
              </Row>

              <strong>
                <p style={{ marginBottom: '1px' }}>
                  Do you have the following?
                </p>
              </strong>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Heart Disease
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    High Blood Pressure
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Chronic Cough/Asthma
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Diabetes
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Stroke
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Epilepsy
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Cancer
                  </Button>
                </Col>
              </Row>

              <pre></pre>

              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 200 }}
                layout="vertical"
              >
                <Form.Item
                  label={
                    <strong style={{ fontSize: '20px' }}>
                      Past or present medical condition not stated above.
                    </strong>
                  }
                  name="Ltmp"
                >
                  <TextArea style={{ height: 130 }} />
                </Form.Item>
                <Form.Item
                  label={
                    <strong style={{ fontSize: '20px' }}>
                      Are you on long term medication?{' '}
                    </strong>
                  }
                  name="Ltmp"
                >
                  <TextArea style={{ height: 130 }} />
                </Form.Item>
                <Form.Item
                  label={
                    <strong style={{ fontSize: '20px' }}>
                      Do you have any allergies?
                    </strong>
                  }
                  name="allergies"
                >
                  <TextArea style={{ height: 130 }} />
                </Form.Item>
                <Form.Item
                  label={
                    <strong style={{ fontSize: '20px' }}>
                      Are you a carrier of any infectious desease eg.Hepatitis
                      B, HIV?
                    </strong>
                  }
                  name="Infectious"
                >
                  <TextArea style={{ height: 130 }} />
                </Form.Item>
                <Form.Item
                  label={<strong style={{ fontSize: '20px' }}>Comments</strong>}
                  name="Infectious"
                >
                  <TextArea style={{ height: 140 }} />
                </Form.Item>

                <Form
                  labelCol={{ span: 0 }}
                  wrapperCol={{ span: 200 }}
                  layout="vertical"
                >
                  {/* <Form.Item label={ 
                    <strong style={{fontSize:"20px"}}>Comment</strong>} name="Comment" >
              <TextArea style={{ height: 140 ,width:490}} />
            </Form.Item> */}

                  <Form.Item name="Comment">
                    <Button style={{ fontSize: 18, height: 40 }}>
                      Blank Form
                    </Button>
                    <span> </span>
                    <Button
                      htmlType="submit"
                      style={{ fontSize: 18, height: 40 }}
                    >
                      Print
                    </Button>
                    <span> </span>
                    <Button
                      htmlType="submit"
                      style={{ fontSize: 18, height: 40 }}
                    >
                      Save
                    </Button>
                    <span> </span>
                    <Button
                      htmlType="submit"
                      style={{ fontSize: 18, height: 40 }}
                    >
                      Cancel
                    </Button>
                  </Form.Item>
                </Form>
                {/* <Form.Item
                  label="Do you have any significant past medical or family history"
                  name="Pasthistory"
                >
                  <TextArea style={{ height: 90 }} />
                </Form.Item> */}
              </Form>
            </Col>
            {/* <Col span={12}>
              <strong>
                <p style={{ textAlign: 'center', marginBottom: '1px' }}>
                  Health Questionnaire
                </p>
                <p style={{ marginBottom: '1px' }}>Do you get on exertion</p>
              </strong>
              <Row>
                <Col span={2}>
                  <Checkbox style={{ height: 5 }} />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    onClick={handleBtnClick3}
                    style={{ color: '#0645AD', height: 5 }}
                  >
                    Chest pain
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    onClick={handleBtnClick2}
                    style={{ color: '#0645AD', height: 5 }}
                  >
                    Breathlessness
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button type="text" style={{ color: '#0645AD', height: 5 }}>
                    Palpitations
                  </Button>
                </Col>
              </Row>

              <strong>
                <p style={{ marginBottom: '1px' }}>
                  Do you have the following?
                </p>
              </strong>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button type="text" style={{ color: '#0645AD', height: 5 }}>
                    Heart Disease
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button type="text" style={{ color: '#0645AD', height: 5 }}>
                    High Blood Pressure
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button type="text" style={{ color: '#0645AD', height: 5 }}>
                    Chronic Cough/Asthma
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button type="text" style={{ color: '#0645AD', height: 5 }}>
                    Diabetes
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button type="text" style={{ color: '#0645AD', height: 5 }}>
                    Stroke
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button type="text" style={{ color: '#0645AD', height: 5 }}>
                    Epilepsy
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button type="text" style={{ color: '#0645AD', height: 5 }}>
                    Chronic kidney Disease/Dialysis
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox />
                </Col>
                <Col span={22}>
                  <Button type="text" style={{ color: '#0645AD', height: 5 }}>
                    Cancer
                  </Button>
                </Col>
              </Row>
              <Divider></Divider>

              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 200 }}
                layout="vertical"
              >
                <Form.Item
                  label="Are you on long term medication or pregnant"
                  name="Ltmp"
                >
                  <TextArea style={{ height: 80 }} />
                </Form.Item>
                <Form.Item label="Do you have any allergies" name="allergies">
                  <TextArea style={{ height: 80 }} />
                </Form.Item>
                <Form.Item
                  label="Are you a carrier of any infectious desease eg.Hepatitis B, HIV"
                  name="Infectious"
                >
                  <TextArea style={{ height: 80 }} />
                </Form.Item>
                <Form.Item
                  label="Do you have any significant past medical or family history"
                  name="Pasthistory"
                >
                  <TextArea style={{ height: 80 }} />
                </Form.Item>
              </Form>
            </Col> */}
            <Col span={12}>
              <Button type="primary" style={{ background: 'darkcyan' }}>
                NEHR
              </Button>
              <p />
              <div>
                {explain === 'defualt' && (
                  <div>
                    <TextArea style={{ height: 420 }} />
                  </div>
                )}
                {explain === 'chestpain' && (
                  <div>
                    <Card style={{ height: 310 }}>
                      <Image src={chestpain} />
                    </Card>
                  </div>
                )}
                {explain === 'breathlessness' && (
                  <div>
                    <Card style={{ height: 310 }}>
                      <Image src={breathlessness} />
                    </Card>
                  </div>
                )}
              </div>

              <p />
              <Row style={{ marginBottom: 230 }}></Row>
              <Button
                className={fall ? style.fallrish : style.nonfallrisk}
                onClick={handleBtnClick1}
              >
                Fall Risk
              </Button>
              <p />
              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 200 }}
                layout="vertical"
              >
                <Form.Item label="Pain Score" name="Painscore">
                  <Select defaultValue="0" style={{ width: '30%' }}>
                    <Option value="0">0</Option>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                    <Option value="9">9</Option>
                    <Option value="10">10</Option>
                  </Select>
                </Form.Item>
              </Form>
              <p />

              <Row>
                {' '}
                <Button size="large" style={{ width: '60%' }}>
                  Bisphosnate Therapy
                </Button>
              </Row>
              <pre></pre>
              <Row>
                {' '}
                <Button size="large" style={{ width: '60%' }}>
                  Radiotherapy
                </Button>
              </Row>
              <pre></pre>
              <Row>
                {' '}
                <Button size="large" style={{ width: '60%' }}>
                  Anti-coagulant Therapy
                </Button>
              </Row>
              <pre></pre>

              <Row>
                {' '}
                <Button
                  size="large"
                  style={{
                    width: '60%',
                    backgroundColor: isPregnantConsentSigned ? 'red' : 'white',
                  }}
                  onClick={() => {
                    setPregnantModalVisible(true);
                  }}
                >
                  {isPregnantConsentSigned
                    ? 'Xray'
                    : // ? 'Pregnancy '
                      'Xray'}
                </Button>
                <Modal
                  visible={pregnantModalVisible}
                  //title="Pregnancy"
                  onOk={() => {
                    setPregnantModalVisible(false);
                    //  setIsPregnantConsentSigned(true);
                  }}
                  width={'30%'}
                >
                  <Row gutter={[16, 24]}>
                    <Col span={7}>Is Pregnant :</Col>
                    <Col span={12}>
                      <Radio.Group buttonStyle="solid">
                        <Radio.Button
                          onClick={() => {
                            showwEDD();
                            setIsPregnantConsentSigned(true);
                          }}
                          //  onClick={() =>{ setIsPregnantConsentSigned(true);setEDDDateVisible(false);
                          // setSignatureVisible(true);}}
                          type="primary"
                          value={true}
                        >
                          Yes
                        </Radio.Button>
                        <Radio.Button
                          value={false}
                          onClick={() => {
                            noshowwEDD();
                            setIsPregnantConsentSigned(false);
                          }}
                        >
                          {/* //  onClick={() =>{ setIsPregnantConsentSigned(false);setEDDDateVisible(true); */}
                          {/* //      setSignatureVisible(false);}}> */}
                          No
                        </Radio.Button>
                      </Radio.Group>
                    </Col>

                    <Col span={24} hidden={Signature} style={{ height: 200 }}>
                      <TextArea
                        style={{ height: 200 }}
                        placeholder="Signature"
                      />
                    </Col>
                    {/* <Col span={7} hidden={Signature}>
                            Date of Signature :
                          </Col>
                          <Col span={12} hidden={Signature}>
                            <DatePicker />
                          </Col> */}

                    <Col span={7} hidden={Signature}>
                      Name :
                    </Col>
                    <Col span={12} hidden={Signature}>
                      <Input></Input>
                    </Col>
                    {/* <Col span={7}>Sign Consent of X-Ray :</Col> */}

                    {/* <Col span={12}>
                            <TextArea />
                          </Col> */}
                    {/* <Col span={7}>Remarks :</Col>
                          <Col span={12}>
                            <TextArea />
                          </Col> */}
                    <Col span={7} hidden={Signature}>
                      NRIC :
                    </Col>
                    <Col span={12} hidden={Signature}>
                      <Input></Input>
                    </Col>
                  </Row>
                </Modal>
              </Row>

              <Row style={{ marginBottom: 30 }}></Row>

              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 200 }}
                layout="vertical"
              >
                <Form.Item label="Updated On:" name="updatedon">
                  <Input style={{ width: '60%' }} />
                </Form.Item>
                <Form.Item label="Updated By:" name="Updatedby">
                  <Input style={{ width: '60%' }} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Confirm
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          {/* <Row>
            <Col span={24}>
              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 200 }}
                layout="vertical"
              >
                <Form.Item label="Comment" name="Comment">
                  <TextArea style={{ height: 120 }} />
                </Form.Item>
              </Form>
            </Col>
          </Row> */}
        </Col>
      </Row>
    </div>
  );
};

export default NEHRhomescreen;
