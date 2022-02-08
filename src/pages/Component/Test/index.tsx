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
  Popconfirm,
  Typography,
  Divider,
  Slider,
  Grid,
  Table,
  Tag,
  Space,
  Breadcrumb,
  Tabs,
  Tooltip,
  Alert,
} from 'antd';
import style from './index.less';
import happyface from '../NHGPhomescreen/images/happyface.png';
import warningicon from '../KTPHhomescreen/warningicon.jpeg';

import epos_antibioticsprogram_Y from '../NHGPhomescreen/icon/epos_antibioticsprogram_Y.png';
import epos_chas_Y from '../NHGPhomescreen/icon/epos_chas_AMBER.png';
import epos_medifund_Y from '../NHGPhomescreen/icon/epos_medifund_Y.png';
import epos_PG_Y from '../NHGPhomescreen/icon/epos_PG_Y.png';
import epos_infectiousdiseases_Y from '../NHGPhomescreen/icon/epos_infectiousdiseases_Y.png';
import epos_tlc_Y from '../NHGPhomescreen/icon/epos_tlc_Y.png';
import epos_immunosupressed_Y from '../NHGPhomescreen/icon/epos_immunosupressed_Y.png';
import chestpain from '../NHGPhomescreen/images/chestpain.jpeg';
import breathlessness from '../NHGPhomescreen/images/Breathlessness.jpeg';
import epos_cancer_Y from '../NHGPhomescreen/icon/cancer.png';
import epos_anticoagulants_Y from '../NHGPhomescreen/icon/anti-coagulants.png';
import epos_bisphosphonatetherapy_Y from '../NHGPhomescreen/icon/bisphosphonatetherapy.png';
import epos_otherfinancalassistance_Y from '../NHGPhomescreen/icon/otherfinancalassistance.png';
import epos_safcoverage_Y from '../NHGPhomescreen/icon/SAFcoverage.png';
import epos_outstandingpayment_Y from '../NHGPhomescreen/icon/outstandingpayment.png';

import { Radio } from 'antd';
import { ProPageHeader } from '@ant-design/pro-layout';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;

const { useBreakpoint } = Grid;

const { TabPane } = Tabs;

const Test: React.FC = (props) => {
  function callback(key: any) {
    console.log(key);
  }

  console.log(props);

  return <h1>Hello {props.name}</h1>;
};

export default Test;
