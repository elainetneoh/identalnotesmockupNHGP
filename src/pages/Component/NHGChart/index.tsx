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
import DentalChart from './images/DentalChart.jpeg';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const format = 'HH:mm';
const { TabPane } = Tabs;
const { Column } = Table;

const { Panel } = Collapse;
const NHGPChart: React.FC = () => {
  return (
    <div className={style.Globalsettings}>
      <Col span={24}>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="NHG Chart" key="1" className="boldheader">
            <Card>
              <Image src={DentalChart} />
            </Card>
          </Panel>
        </Collapse>
      </Col>
    </div>
  );
};

export default NHGPChart;
