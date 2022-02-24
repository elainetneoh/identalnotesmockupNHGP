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
  return (
    <div className={style.NEHRhome}>
      <Row gutter={{ sm: 8 }}>
        <Col span={12}>
          <Row gutter={{ sm: 8 }}>
            <Col span={20}>
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
              </Form>

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
              </Form>
              <Form
                labelCol={{ span: 0 }}
                //wrapperCol={{ span: 200 }}
                layout="horizontal"
              >
                <Form.Item
                  label="Old NRIC/FIN"
                  name="Patient ID"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Row>
                    <Input style={{ width: '100%' }} />

                    {/* <Button type="primary" htmlType="submit">
                      Verify
  </Button>*/}
                  </Row>
                </Form.Item>
              </Form>
              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 200 }}
                layout="horizontal"
              >
                <Form.Item
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
              </Form>
            </Col>
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

                  <Image src={epos_antibioticsprogram_Y} width={60} />
                  <Image src={epicIndicator1} width={60} />
                  <Image src={epicIndicator1} width={60} />
                  <Image src={epicIndicator1} width={60} />
                  <Image src={epicIndicator1} width={60} />
                  <Image src={epos_infectiousdiseases_Y} width={60} />
                  <Image src={epos_tlc_Y} width={60} />
                  <Image src={epos_immunosupressed_Y} width={60} />
                </Col>
              </Space>
            </Col>
          </Row>
          <div className={style.marginTop}>
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
                <Button type="primary" htmlType="submit" onClick={showModal}>
                  Search Patient
                </Button>

                <Modal
                  title="Search Patient"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
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
                </Modal>
              </Col>
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
          </div>
        </Col>

        <Col span={12}>
          <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
            <Col span={12}>
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
            </Col>
            <Col span={12}>
              <Button type="primary" style={{ background: 'darkcyan' }}>
                NEHR
              </Button>
              <p />
              <div>
                {explain === 'defualt' && (
                  <div>
                    <TextArea style={{ height: 310 }} />
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
              <Row style={{ marginBottom: 210 }}></Row>
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
          <Row>
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
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default NEHRhomescreen;
