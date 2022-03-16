import React from 'react';
import {
  DatePicker,
  Button,
  TimePicker,
  Input,
  Select,
  Divider,
  Table,
  Space,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import style from './index.less';
import Toolbar from './Toolbar';

const timeFormat = 'HH:mm';

const data = [
  {
    key: '2',
    procedure: 'Filling (3surface)',
    procedurecode: 'DBK003',
    unit: '1',
    price: '64.3',
    totalprice: '64.3',
    diagnosis: 'Abrasion',
    toothnumber: '21',
  },
];

const ProcedureForm = ({
  setShowChart,
}: {
  setShowChart: (b: boolean) => void;
}) => {
  const addButton = () => (
    <div>
      <Button type="primary" icon={<PlusOutlined />}>
        Add
      </Button>
    </div>
  );

  const editDeleteButton = () => (
    <Space size="middle">
      <a>Edit</a>
      <a>Delete</a>
    </Space>
  );

  return (
    <div className={style.wrapper}>
      {/**First row */}
      <Toolbar className={style.toolbar} />

      <label className={style['visitno-label']}>Visit No. :</label>
      <Input className={style['visitno-field']} />

      {/**2nd row */}
      <label className={style['date-label']}>Date :</label>
      <DatePicker className={style['date-field']} />

      <label className={style['ref-label']}>Ref :</label>
      <Input className={style['ref-field']} />

      <label className={style['location-label']}>Location :</label>
      <Input className={style['location-field']} />

      <label className={style['time-in-label']}>Time In :</label>
      <TimePicker className={style['time-in-field']} format={timeFormat} />

      <Button className={style['bill-btn']}>Bill</Button>

      {/**3rd row */}
      <label className={style['doctor-label']}>Doctor :</label>
      <Select className={style['doctor-field']}>
        <Select.Option value="a">a</Select.Option>
      </Select>

      <label className={style['appt-label']}>Appt :</label>
      <Select className={style['appt-field']}>
        <Select.Option value="a">a</Select.Option>
      </Select>

      <label className={style['visit-label']}>Visit Type :</label>
      <Select className={style['visit-field']}>
        <Select.Option value="a">a</Select.Option>
      </Select>

      <label className={style['time-out-label']}>Time Out :</label>
      <TimePicker className={style['time-out-field']} />

      {/**Fourth row */}
      <Divider className={style.divider} />

      {/**Fifth row */}
      <label className={style['procedure-label']}>Procedure / Diagnosis</label>
      <Table
        className={style['procedure-table']}
        pagination={false}
        dataSource={data}
      >
        <Table.Column
          title="Tooth No."
          dataIndex="toothnumber"
          key="toothnumber"
        />
        <Table.Column title="Procedure" dataIndex="procedure" key="procedure" />
        <Table.Column
          title="Procedure Code"
          dataIndex="procedurecode"
          key="procedurecode"
        />
        <Table.Column title="Unit" dataIndex="unit" key="unit" />
        <Table.Column title="Price" dataIndex="price" key="price" />
        <Table.Column
          title="Total Price"
          dataIndex="totalprice"
          key="totalprice"
        />
        <Table.Column title="Diagnosis" dataIndex="diagnosis" key="diagnosis" />
        <Table.Column
          title={addButton}
          key="action"
          render={editDeleteButton}
        />
      </Table>

      {/**Outlier */}
      <Button className={style['chart-btn']} onClick={() => setShowChart(true)}>
        Chart
      </Button>
    </div>
  );
};

export default ProcedureForm;
