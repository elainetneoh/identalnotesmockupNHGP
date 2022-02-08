import React from 'react';
import {
  Input,
  Button,
  Form,
  Select,
  Row,
  Col,
  Typography,
  Table,
  DatePicker,
  TimePicker,
  Space,
  Card,
  Image,
} from 'antd';
import style from './index.less';
import {
  StepBackwardFilled,
  CaretLeftFilled,
  CaretRightOutlined,
  StepForwardOutlined,
  PlusOutlined,
  SearchOutlined,
  FileOutlined,
} from '@ant-design/icons';

import epos_antibioticsprogram_Y from './icon/epos_antibioticsprogram_Y.png';
import epos_chas_Y from './icon/epos_chas_AMBER.png';
import epos_medifund_Y from './icon/epos_medifund_Y.png';
import epos_PG_Y from './icon/epos_PG_Y.png';
import epos_infectiousdiseases_Y from './icon/epos_infectiousdiseases_Y.png';
import epos_tlc_Y from './icon/epos_tlc_Y.png';
import epos_immunosupressed_Y from './icon/epos_immunosupressed_Y.png';
import epicIndicator1 from './icon/epicIndicator1.png';
import toothsmile6 from './icon/toothsmile6.png';
import toothsmile5 from './icon/toothsmile5.jpg';
import toothsmile1 from './icon/toothsmile1.jpg';
import toothsmile2 from './icon/toothsmile2.jpg';
import toothsmile3 from './icon/toothsmile3.jpg';
import toothsmile4 from './icon/toothsmile4.jpg';

import { Divider } from 'antd';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const { Column } = Table;

const data = [
  {
    key: '1',
    estcharges: 'Operation',
    sgd: '1071',
  },
  {
    key: '1',
    estcharges: 'Estimated Total',
    sgd: '1071',
  },
];
const data2 = [
  {
    key: '1',
    MWL: 'Operation',
    sgd: '1850',
  },
  {
    key: '2',
    MWL: 'Daily hospital charges',
    sgd: '300',
  },
];
const Xray: React.FC = () => {
  return (
    <div className={style.Globalsettings}>
      <Divider />
      <Form
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 200 }}
        layout="horizontal"
      >
        <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
          <Col span={10}></Col>
          <Col span={10}></Col>
        </Row>
      </Form>
      <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
        <Col span={3}>
          <Card style={{ height: 800 }}>
            <Row>
              <Col span={5}>
                <SearchOutlined />
              </Col>
              <Col>
                <Text> View All Images</Text>
              </Col>
            </Row>
            <pre></pre>
            <Row>
              <pre></pre>
              <Col span={5}>
                <FileOutlined />
              </Col>
              <Col>
                <Text> Root</Text>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={16}>
          <Card style={{ height: 800 }}>
            <Row>
              <Col>
                <Button>Add</Button>
              </Col>
              <pre> </pre>
              <Col>
                <Button>Delete</Button>
              </Col>
              <pre> </pre>
              <Col>
                <Button>Scanner</Button>
              </Col>
              <pre> </pre>
              <Col>
                <Button>Export To Library</Button>
              </Col>
              <pre> </pre>
              <Col>
                <Button>Hide Grouping</Button>
              </Col>
              <pre> </pre>
              <Col>
                <Button>Import From CliniView</Button>
              </Col>
              <pre> </pre>
            </Row>

            <Row>
              <Row></Row>
              <Row>
                <Text>Root</Text>
                <Card style={{ height: 700, width: 1400 }}>
                  <Image src={toothsmile6} width={200} />
                  <Image src={toothsmile1} width={200} />
                  <Image src={toothsmile2} width={200} />
                  <Image src={toothsmile3} width={200} />
                  <Image src={toothsmile4} width={200} />
                  <Image src={toothsmile5} width={200} />
                </Card>
              </Row>
            </Row>
          </Card>
        </Col>

        <Col span={5}>
          <Card title="Image Info" style={{ height: 800 }}>
            <Form
              labelCol={{ span: 0 }}
              wrapperCol={{ span: 200 }}
              layout="horizontal"
            >
              <Form.Item
                labelAlign={'left'}
                labelCol={{ span: 7 }}
                label="Title"
              >
                <Input />
              </Form.Item>
              <Form.Item
                labelAlign={'left'}
                labelCol={{ span: 7 }}
                label="Last Update"
              >
                <Input />
              </Form.Item>
              <Form.Item
                labelAlign={'left'}
                labelCol={{ span: 7 }}
                label="Description"
              ></Form.Item>
              <TextArea style={{ height: 580 }}></TextArea>
            </Form>
          </Card>
        </Col>
      </Row>
      <p />
    </div>
  );
};
export default Xray;
