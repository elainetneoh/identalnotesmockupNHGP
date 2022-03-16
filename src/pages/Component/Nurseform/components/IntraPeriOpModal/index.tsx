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
  Tabs,
  Modal,
  Checkbox,
  Card,
  List,
} from 'antd';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;

const IntraPeriOpModal = ({
  isVisible,
  handleOk,
  handleCancel,
}: {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}) => {
  return (
    <Modal
      title="INTRA-PERI-OP"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1400}
      style={{ fontSize: 20 }}
    >
      <Row gutter={{ xs: 8 }}>
        <Col span={8} style={{ background: 'blue' }}>
          <Card>
            <Row>
              <Text style={{ backgroundColor: 'black', width: '5%' }} />
              <Text
                style={{
                  backgroundColor: 'black',
                  width: '95%',
                  height: '50px',
                  color: 'white',
                  fontSize: 25,
                }}
              >
                Pre-operative Check List
              </Text>
            </Row>
            <strong>
              <Text style={{ fontSize: 20 }}>Pre-Operative Review: </Text>
            </strong>
            <Row>
              <Col span={2}>
                <Checkbox />
              </Col>
              <Col span={22}>
                <Text style={{ fontSize: 20 }}>Correct patient</Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox />
              </Col>
              <Col span={22}>
                <Text style={{ fontSize: 20 }}>Valid consent</Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox />
              </Col>
              <Col span={22}>
                <Text style={{ fontSize: 20 }}>
                  Operation site & side verified
                </Text>
              </Col>
            </Row>
            <p />
            <strong>
              <Text style={{ fontSize: 20 }}> Parameters:</Text>
            </strong>
            <Form
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 500 }}
              layout="horizontal"
              labelAlign={'left'}
            >
              <div>
                <Form.Item label="PR/min" labelCol={{ span: 4 }}>
                  <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item label="BP/mmHg" labelCol={{ span: 4 }}>
                  <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item label="O2 saturation" labelCol={{ span: 4 }}>
                  <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item label="Pain score" labelCol={{ span: 4 }}>
                  <Input style={{ width: '50%' }} />
                </Form.Item>
              </div>
            </Form>
            <strong>
              <Text style={{ fontSize: 20 }}> Remarks:</Text>
            </strong>
            <TextArea style={{ height: 80 }} />
            <p />
            <strong>
              <Text style={{ fontSize: 20 }}> Recorded by:</Text>
            </strong>
            <Row>
              <Input style={{ width: '60%' }} />
              <Text style={{ fontSize: 20 }}>@</Text>
              <TimePicker style={{ width: '30%' }} />
            </Row>
            <p />
            <Row>
              <Col span={19} />
              <Col>
                <Button style={{ fontSize: 20, height: '40px' }}>Export</Button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Row>
              <Text
                style={{
                  backgroundColor: 'black',
                  width: '100%',
                  height: '50px',
                  color: 'white',
                  fontSize: 25,
                  paddingLeft: '35px',
                }}
              >
                Intra-Operative Check List:
              </Text>
            </Row>
            <Row style={{ marginTop: '25px' }} gutter={16}>
              <Col span={24}>
                <Form.Item
                  name={'Operation'}
                  label="Operation"
                  labelCol={{ span: 4 }}
                  labelAlign="left"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name={'Procedure Room'}
                  label="Procedure Room"
                  labelCol={{ span: 4 }}
                  labelAlign="left"
                >
                  <Select>
                    <Option value="OR1">OR1</Option>
                    <Option value="OR2">OR2</Option>
                    <Option value="OR3">OR3</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={'Surgeon'}
                  label="Surgeon"
                  labelAlign="left"
                  labelCol={{ span: 8 }}
                >
                  <Select>
                    <Option value="Surgone A">Surgone A</Option>
                    <Option value="Surgone B">Surgone B</Option>
                    <Option value="Surgone C">Surgone C</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={'Assistant'}
                  label="Assistant"
                  labelAlign="left"
                  labelCol={{ span: 8 }}
                >
                  <Select>
                    <Option value="Assistant A">Assistant A</Option>
                    <Option value="Assistant B">Assistant B</Option>
                    <Option value="Assistant C">Assistant C</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={'Scrub Nurse'}
                  label="Scrub Nurse"
                  labelAlign="left"
                  labelCol={{ span: 8 }}
                >
                  <Select>
                    <Option value="Scrub Nurse A">Scrub Nurse A</Option>
                    <Option value="Scrub Nurse B">Scrub Nurse B</Option>
                    <Option value="Scrub Nurse C">Scrub Nurse C</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={'Circulating Nurse'}
                  label="Circulating Nurse"
                  labelAlign="left"
                  labelCol={{ span: 8 }}
                >
                  <Select>
                    <Option value="Circulating Nurse A">
                      Circulating Nurse A
                    </Option>
                    <Option value="Circulating Nurse B">
                      Circulating Nurse B
                    </Option>
                    <Option value="Circulating Nurse C">
                      Circulating Nurse C
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={'Surgery Start'}
                  label="Surgery Start"
                  labelAlign="left"
                  labelCol={{ span: 8 }}
                >
                  <DatePicker
                    showTime
                    showSecond={false}
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={'Surgery End'}
                  label="Surgery End"
                  labelAlign="left"
                  labelCol={{ span: 8 }}
                >
                  <DatePicker
                    showTime
                    showSecond={false}
                    style={{ width: '100%' }}
                  />
                </Form.Item>

                <Form.Item
                  name={'Time Out'}
                  label="Time Out"
                  labelAlign="left"
                  labelCol={{ span: 8 }}
                >
                  <DatePicker
                    showTime
                    showSecond={false}
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <List
                  header={<div>Sign In</div>}
                  // header={<div>Time Out</div>}
                  bordered
                  dataSource={[
                    'Patient Identification',
                    'Confirmed Consent',
                    'Site of Operation',
                    // 'Correct patient',
                    // 'Correct procedure',
                    // 'Correct site',
                    // 'Correct radiographs/ medical records',
                    // 'Functionality of equipment',
                    // 'Review of anticoagulant/ antiplatelet'
                  ]}
                  renderItem={(item) => (
                    <List.Item>
                      <Checkbox>{item}</Checkbox>
                    </List.Item>
                  )}
                  footer={
                    <>
                      <div>Allergy</div>
                      <div>
                        <TextArea style={{ height: 150 }} />
                      </div>
                    </>
                  }
                />
              </Col>
              <Col span={12}>
                <List
                  header={<div>Sign Out</div>}
                  bordered
                  dataSource={[
                    // 'Instruments',
                    // 'Sharps and Swabs',
                    // 'Specimens',
                    <Checkbox>Instruments</Checkbox>,
                    <Checkbox>Sharps and Swabs</Checkbox>,
                    <Checkbox>Specimens</Checkbox>,
                    // <Checkbox>Procedure unchanged</Checkbox>,
                    // <Checkbox>Complete instrument and needle count</Checkbox>,
                    // <Checkbox>Labelling of specimens (if applicable)</Checkbox>,
                    // <Checkbox>Functioning equipment</Checkbox>,
                    // <Row style={{ marginBottom: 70 }}></Row>,

                    <Text>
                      {' '}
                      Post-op concern and management{' '}
                      <TextArea style={{ height: 150 }}></TextArea>{' '}
                    </Text>,
                  ]}
                  renderItem={(item) => (
                    <List.Item>
                      {/* <Checkbox>{item}</Checkbox> */}
                      {item}
                    </List.Item>
                  )}
                  // footer={
                  //   <>

                  //     <div>Post-op concern and management </div>
                  //     <div>
                  //       <TextArea style={{ height: 150 }} />
                  //     </div>
                  //   </>
                  // }
                />
              </Col>
            </Row>

            <Text style={{ fontSize: 20 }}> Remarks:</Text>

            <TextArea style={{ height: 80 }} />

            <Text style={{ fontSize: 20 }}> Recorded by:</Text>

            <Row>
              <Input style={{ width: '65%' }} />
              <Text style={{ fontSize: 20 }}>@</Text>
              <TimePicker style={{ width: '32%' }} />
            </Row>
            <p />
            <Row>
              <Col span={21} />
              <Col>
                <Button
                  style={{
                    fontSize: 20,
                    height: '40px',
                    width: '100%',
                  }}
                >
                  Export
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Row>
              <Text style={{ backgroundColor: 'black', width: '5%' }} />
              <Text
                style={{
                  backgroundColor: 'black',
                  width: '95%',
                  height: '50px',
                  color: 'white',
                  fontSize: 25,
                }}
              >
                Pre-Discharge Check List:
              </Text>
            </Row>
            <strong>
              <Text style={{ fontSize: 20 }}> Pre-Discharge Review:</Text>
            </strong>
            <Row>
              <Col span={2}>
                <Checkbox />
              </Col>
              <Col span={22}>
                <Text style={{ fontSize: 20 }}>No active bleeding</Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox />
              </Col>
              <Col span={22}>
                <Text style={{ fontSize: 20 }}>Not dizzy</Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox />
              </Col>
              <Col span={22}>
                <Text style={{ fontSize: 20 }}>Not in severe pain</Text>
              </Col>
            </Row>
            <p />
            <strong>
              <Text style={{ fontSize: 20 }}> Parameters:</Text>
            </strong>
            <Form
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 500 }}
              layout="horizontal"
              labelAlign={'left'}
            >
              <div>
                <Form.Item label="PR/min" labelCol={{ span: 4 }}>
                  <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item label="BP/mmHg" labelCol={{ span: 4 }}>
                  <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item label="O2 saturation" labelCol={{ span: 4 }}>
                  <Input style={{ width: '50%' }} />
                </Form.Item>
                <Form.Item label="Pain score" labelCol={{ span: 4 }}>
                  <Input style={{ width: '50%' }} />
                </Form.Item>
              </div>
            </Form>
            <strong>
              <Text style={{ fontSize: 20 }}> Remarks:</Text>
            </strong>
            <TextArea style={{ height: 80 }} />
            <p />
            <strong>
              <Text style={{ fontSize: 20 }}> Recorded by:</Text>
            </strong>
            <Row>
              <Input style={{ width: '60%' }} />
              <Text style={{ fontSize: 20 }}>@</Text>
              <TimePicker style={{ width: '30%' }} />
            </Row>
            <p />
            <Row>
              <Col span={19} />
              <Col>
                <Button style={{ fontSize: 20, height: '40px' }}>Export</Button>
              </Col>
            </Row>
          </Card>
        </Col>
        {/*
                    <Col span={8}>
                      <Card>
                        <Row>
                          <Text
                            style={{ backgroundColor: 'black', width: '5%' }}
                          />
                          <Text
                            style={{
                              backgroundColor: 'black',
                              width: '95%',
                              height: '50px',
                              color: 'white',
                              fontSize: 25,
                            }}
                          >
                            Intra-Operative Check List:
                          </Text>
                        </Row>
                        <strong>
                          <Text style={{ fontSize: 20 }}>
                            {' '}
                            Intra-Operative Review:
                          </Text>
                        </strong>
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>Test 1</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>Test 2</Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={22}>
                            <Text style={{ fontSize: 20 }}>Test 3</Text>
                          </Col>
                        </Row>
                        <p />
                        <strong>
                          <Text style={{ fontSize: 20 }}> Parameters:</Text>
                        </strong>
                        <Form
                          labelCol={{ span: 0 }}
                          wrapperCol={{ span: 500 }}
                          layout="horizontal"
                          labelAlign={'left'}
                        >
                          <div>
                            <Form.Item label="PR/min" labelCol={{ span: 4 }}>
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                            <Form.Item label="BP/mmHg" labelCol={{ span: 4 }}>
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                            <Form.Item
                              label="O2 saturation"
                              labelCol={{ span: 4 }}
                            >
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                            <Form.Item
                              label="Pain score"
                              labelCol={{ span: 4 }}
                            >
                              <Input style={{ width: '50%' }} />
                            </Form.Item>
                          </div>
                        </Form>
                        <strong>
                          <Text style={{ fontSize: 20 }}> Remarks:</Text>
                        </strong>
                        <TextArea style={{ height: 80 }} />
                        <p />
                        <strong>
                          <Text style={{ fontSize: 20 }}> Recorded by:</Text>
                        </strong>
                        <Row>
                          <Input style={{ width: '60%' }} />
                          <Text style={{ fontSize: 20 }}>@</Text>
                          <TimePicker style={{ width: '30%' }} />
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
                    </Col>
                          */}
      </Row>
    </Modal>
  );
};

export default IntraPeriOpModal;
