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
  Card,
  Divider,
  Space,
  Modal,
  Typography,
} from 'antd';
import style from './index.less';

import happyface from '../NHGPhomescreen/images/happyface.png';
import warningicon from './warningicon.jpeg';

import chestpain from '../NHGPhomescreen/images/chestpain.jpeg';
import breathlessness from '../NHGPhomescreen/images/Breathlessness.jpeg';
import epos_antibioticsprogram_Y from '../NHGPhomescreen/icon/epos_antibioticsprogram_Y.png';
import epos_chas_Y from '../NHGPhomescreen/icon/epos_chas_AMBER.png';
import epos_medifund_Y from '../NHGPhomescreen/icon/epos_medifund_Y.png';
import epos_PG_Y from '../NHGPhomescreen/icon/epos_PG_Y.png';
import epos_infectiousdiseases_Y from '../NHGPhomescreen/icon/epos_infectiousdiseases_Y.png';
import epos_tlc_Y from '../NHGPhomescreen/icon/epos_tlc_Y.png';
import epos_immunosupressed_Y from '../NHGPhomescreen/icon/epos_immunosupressed_Y.png';
import epos_cancer_Y from '../NHGPhomescreen/icon/cancer.png';
import epos_anticoagulants_Y from '../NHGPhomescreen/icon/anti-coagulants.png';
import epos_bisphosphonatetherapy_Y from '../NHGPhomescreen/icon/bisphosphonatetherapy.png';
import epos_otherfinancalassistance_Y from '../NHGPhomescreen/icon/otherfinancalassistance.png';
import epos_safcoverage_Y from '../NHGPhomescreen/icon/SAFcoverage.png';
import epos_outstandingpayment_Y from '../NHGPhomescreen/icon/outstandingpayment.png';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;

const KTPHhomescreen: React.FC = () => {
  const [fall, setClass1] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleBtnClick1 = () => {
    setClass1((pre) => !pre);
  };

  const [explain, setClass2] = useState<string>('defualt');
  const handleBtnClick2 = () => {
    setClass2('breathlessness');
  };
  const handleBtnClick3 = () => {
    setClass2('chestpain');
  };

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
    <div className={style.KTPHhome}>
      <Row gutter={{ sm: 8 }}>
        <Col span={9}>
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
                  style={{ width: '20%' }}
                >
                  Verify
                </Button>
                <pre> </pre>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '20%' }}
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
                  style={{ width: '20%' }}
                >
                  Generate
                </Button>
                <pre> </pre>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '20%' }}
                >
                  UIN Label
                </Button>
              </Row>
            </Form.Item>
          </Form>

          <Form
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 200 }}
            layout="horizontal"
          >
            <Form.Item
              label="Old NRIC/FIN"
              name="OldNRIC/FIN"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Input />
            </Form.Item>
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
                  <Select defaultValue="Select one" style={{ width: '80%' }}>
                    <Option value="Male">M</Option>
                    <Option value="Female">F</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Document Type" name="DocumentType">
                  <Select defaultValue="Select one" style={{ width: '80%' }}>
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
              <DatePicker style={{ width: '70%' }} />
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
                <Input style={{ width: '84%' }} />
                <pre> </pre>
                <Button type="primary" htmlType="submit">
                  SMS
                </Button>
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
            <Row gutter={{ xs: 4, sm: 8 }}>
              <Col span={24}>
                <Row>
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
                      type="primary"
                      htmlType="submit"
                      style={{ width: '100%' }}
                    >
                      Refresh CMIS
                    </Button>
                  </Col>
                </Row>
                <Form.Item
                  label="Allergy"
                  name="Allergy"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <TextArea style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                  label="Medical Alert"
                  name="MedicalAlert"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <TextArea style={{ height: 90 }} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
        、<Col span={0} />
        <Col span={1}>
          <Space>
            <Col>
              <Image src={epos_antibioticsprogram_Y} width={60} />
              <Image src={epos_medifund_Y} width={60} />
              <Image src={epos_chas_Y} width={60} />
              <Image src={epos_PG_Y} width={60} />
              <Image src={epos_infectiousdiseases_Y} width={60} />
              <Image src={epos_tlc_Y} width={60} />
              <Image src={epos_immunosupressed_Y} width={60} />

              <Divider></Divider>
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
        </Col>
        <Col span={2} />
        <Col span={11}>
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

              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 200 }}
                layout="vertical"
              >
                <Form.Item
                  label="Medical condition(s) not stated above"
                  name="Ltmp"
                >
                  <TextArea style={{ height: 60 }} />
                </Form.Item>
                <Form.Item label="Are you on long term medication " name="Ltmp">
                  <TextArea style={{ height: 60 }} />
                </Form.Item>
                <Form.Item label="Do you have any allergies" name="allergies">
                  <TextArea style={{ height: 60 }} />
                </Form.Item>
                <Form.Item
                  label="Are you a carrier of any infectious desease eg.Hepatitis B, HIV"
                  name="Infectious"
                >
                  <TextArea style={{ height: 60 }} />
                </Form.Item>
                <Form.Item
                  label="Do you have any significant past medical or family history"
                  name="Pasthistory"
                >
                  <TextArea style={{ height: 60 }} />
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
                    <TextArea style={{ height: 300 }} />
                  </div>
                )}
                {explain === 'chestpain' && (
                  <div>
                    <Card style={{ height: 300 }}>
                      <Image src={chestpain} />
                    </Card>
                  </div>
                )}
                {explain === 'breathlessness' && (
                  <div>
                    <Card style={{ height: 300 }}>
                      <Image src={breathlessness} />
                    </Card>
                  </div>
                )}
              </div>

              <div className={style.marginTop}>
                <Row>
                  <Col span={17}>
                    {/*  <Image src={epos_PG_Y} width={70} />
                            <Image src={epos_infectiousdiseases_Y} width={70} />
                     <Image src={warningicon} width={70} />
                     
                      <Image src={epos_immunosupressed_Y} width={70} />
                      <Image src={epos_infectiousdiseases_Y} width={70} />
                     
                      <Image src={epos_anticoagulants_Y} width={70} />
                      <Image src={epos_cancer_Y} width={70} />
                <Image src={happyface} width={70} />  */}
                    <Row>
                      <Col span={8}>
                        <Image src={epos_cancer_Y} width={70} />
                      </Col>
                      <Col span={8}>
                        <Image src={epos_bisphosphonatetherapy_Y} width={70} />
                      </Col>
                      <Col>
                        <Image src={epos_anticoagulants_Y} width={70} />
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: 10 }}></Row>

                    <Row>
                      <Button
                        className={fall ? style.fallrish : style.nonfallrisk}
                        onClick={handleBtnClick1}
                      >
                        Fall Risk
                      </Button>
                    </Row>
                    <Row style={{ marginBottom: 20 }}></Row>
                    <Row>
                      {' '}
                      <Image src={happyface} width={70} />{' '}
                    </Row>
                    <Row style={{ marginBottom: 20 }}></Row>

                    <Form.Item label="Pain Score" name="Painscore">
                      <Select defaultValue="0" style={{ width: '70%' }}>
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
                    <Row style={{ marginBottom: 30 }}></Row>
                    <Form
                      labelCol={{ span: 0 }}
                      wrapperCol={{ span: 200 }}
                      layout="vertical"
                    >
                      <Form.Item label="Updated On:" name="updatedon">
                        <Input style={{ width: '90%' }} />
                      </Form.Item>
                      <Form.Item label="Updated By:" name="Updatedby">
                        <Input style={{ width: '90%' }} />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Confirm
                        </Button>
                      </Form.Item>
                    </Form>
                  </Col>
                  {/*<Col span={6}>
                    <Image src={epos_antibioticsprogram_Y} width={70} />
                    <Image src={epos_immunosupressed_Y} width={70} />
                    <Image src={epos_infectiousdiseases_Y} width={70} />
                    <Image src={epos_PG_Y} width={70} />
                    <Image src={warningicon} width={70} />
                  </Col>
                  <Col span={6}>
                    <Image src={epos_bisphosphonatetherapy_Y} width={70} />
                    <Image src={epos_anticoagulants_Y} width={70} />
                    <Image src={epos_cancer_Y} width={70} />
                    <Image src={happyface} width={70} />
                </Col>*/}
                </Row>
              </div>
            </Col>
          </Row>
          <Form
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 200 }}
            layout="vertical"
          >
            <Form.Item label="Comment" name="Comment">
              <TextArea style={{ height: 100 }} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row gutter={{ xs: 4, sm: 8, md: 12 }}>
        <Col span={12}>
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
              <Button type="primary" htmlType="submit">
                Search Patient
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row gutter={{ xs: 4, sm: 8, md: 12 }}>
            <Col>
              <Button type="primary" htmlType="submit">
                Dialog
              </Button>
            </Col>
            <Col>
              <Button type="primary" htmlType="submit">
                Blank Form
              </Button>
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
        </Col>
      </Row>
    </div>
  );
};

export default KTPHhomescreen;
