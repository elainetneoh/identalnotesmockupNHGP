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

  Modal, Checkbox, Card, Table,

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
const {Column} = Table;

const data = [
  {
    key: '1',
    date: '4/1/2021',
    nric: 'S1234567D',
    baseclinic:'WDL',
    doctorname:'Susanna Tan Li Wen',
    timein:'11:01',
    timeout:'16:47',
    description:'Filling (2 Surfaces)',
    cliniclocation:'GLN',
    instrumenttype:'Crepe',
    sterilizationdate:'4/1/2021',
    autoclaveno:'11',
    lotno:'111',
    loadno:'11',
    expirydate:'10/1/2021',
    remarks:'3/1/2022'
  },
];

const Recallform: React.FC = () => {
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
  console.log(moment());
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  return (
    <div className={style.Globalsettings}>
      <Row>
        <Col span={24}>
          <Form labelCol={{ span: 0 }} wrapperCol={{ span: 500 }} layout='horizontal'>
            <Row gutter={{xs:4}}>
              <Col span={4}>
                <Form.Item label="Date from" labelCol={{span:10}}>
                  <DatePicker style={{width:"100%"}}/>
                </Form.Item>
                <Form.Item label="Sterilization Date" labelCol={{span:10}}>
                  <DatePicker style={{width:"100%"}}/>
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item label="To" labelCol={{span:5}}>
                  <DatePicker style={{width:"90%"}}/>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Row>
                  <Col span={5}>
                    <Select style={{width:"95%"}}>
                      <Option>All</Option>
                    </Select>
                  </Col>
                  <Col span={11}>
                    <Select style={{width:"100%"}}>
                      <Option>All clinics</Option>
                    </Select>
                  </Col>
                  <Col span={7}>
                    <Form.Item label="Patient ID" labelCol={{span:10}}>
                      <Input style={{width:"100%"}}/>
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={9}>
                    <Form.Item label="Autoclave No" labelCol={{span:13}}>
                      <Input style={{width:"100%"}}/>
                    </Form.Item>
                  </Col>
                  <Col span={7}>
                    <Form.Item label="Lot No" labelCol={{span:10}}>
                      <Input style={{width:"100%"}}/>
                    </Form.Item>
                  </Col>
                  <Col span={7}>
                    <Form.Item label="Load No" labelCol={{span:10}}>
                      <Input style={{width:"100%"}}/>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={5}>
                <Row gutter={{xs:4, sm:8}}>
                  <Col>
                    <Button type="primary"> Generate </Button>
                  </Col>
                  <Col>
                    <Button type="primary"> Export to CSV </Button>
                  </Col>
                  <Col>
                    <Button type="primary"> Export to Excel </Button>
                  </Col>
                </Row>
              </Col>
              <Col span={4}>
                <Form.Item label="Total number of records" labelCol={{span:15}}>
                  <Input defaultValue="1" style={{width:"100%"}}/>
                </Form.Item>
                <Form.Item label="Total number of Patient" labelCol={{span:15}}>
                  <Input defaultValue="1" style={{width:"100%"}}/>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <Divider/>
          <Card>
            <Table
              pagination={false}
              rowSelection={{
                ...rowSelection
              }}
              scroll={{ x: 1500 }}
              style={{width:"100%",height:1000}}
              dataSource={data}
            >
              <Column
                title= 'Date'
                dataIndex= 'date'
                key='date'
                width= {150}
                fixed= 'left'
              />
              <Column
                title= 'NRIC'
                dataIndex= 'nric'
                key='nric'
                width={150}
                fixed= 'left'
              />
              <Column
                title= 'Base Clinic'
                dataIndex= 'baseclinic'
                key='baseclinic'
                width={200}

              />
              <Column
                title= 'Doctor Name'
                dataIndex= 'doctorname'
                key='doctorname'
                width={250}
              />
              <Column
                title= 'Time In'
                dataIndex= 'timein'
                key='timein'
                width={150}
              />
              <Column
                title= 'Time Out'
                dataIndex= 'timeout'
                key='timeout'
                width={150}
              />
              <Column
                title= 'Description'
                dataIndex= 'description'
                key='description'
                width={350}
              />
              <Column
                title= 'Tooth No'
                dataIndex= 'toothnumber'
                key='toothnumber'
                width={150}
              />
              <Column
                title= 'Clinic Location'
                dataIndex= 'cliniclocation'
                key='cliniclocation'
                width={200}
              />
              <Column
                title= 'Instrument Type'
                dataIndex= 'instrumenttype'
                key='instrumenttype'
                width={200}
              />
              <Column
                title= 'Sterilization Date'
                dataIndex= 'sterilizationdate'
                key='sterilizationdate'
                width={200}
              />
              <Column
                title= 'Autoclave No'
                dataIndex= 'autoclaveno'
                key='autoclaveno'
                width={200}
              />
              <Column
                title= 'Lot No'
                dataIndex= 'lotno'
                key='lotno'
                width={150}
              />
              <Column
                title= 'Load No'
                dataIndex= 'loadno'
                key='loadno'
                width={150}
              />
              <Column
                title= 'Expiry Date'
                dataIndex= 'expirydate'
                key='expirydate'
                width={200}
              />
              <Column
                title= 'Remarks'
                dataIndex= 'remarks'
                key='remarks'
                width={250}
              />
            </Table>
            <Row gutter={{xs:4,sm:8}}>
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
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Recallform;
