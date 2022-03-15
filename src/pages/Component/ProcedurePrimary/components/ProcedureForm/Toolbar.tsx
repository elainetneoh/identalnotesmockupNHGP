import React from 'react';
import { Input, Select, Button } from 'antd';
import { StepBackwardFilled, CaretLeftFilled } from '@ant-design/icons';
import { StepForwardOutlined, CaretRightOutlined } from '@ant-design/icons';

import style from './Toolbar.less';

const Toolbar = ({ className }: { className?: string }) => (
  <div className={`${style.wrapper} ${className}`}>
    <div className={style.archive}>
      <StepBackwardFilled />
      <CaretLeftFilled />
      <Input />
      <p>of 42</p>
      <CaretRightOutlined />
      <StepForwardOutlined />
    </div>

    <Select className={style['select-status']} defaultValue="1">
      <Select.Option value="1">Completed</Select.Option>
      <Select.Option value="2">Incomplete</Select.Option>
    </Select>

    <Button>New</Button>
    <Button>Save As Final</Button>
    <Button>Delete</Button>
    <Button>Unlock</Button>

    <Select defaultValue="1">
      <Select.Option value="1">Print</Select.Option>
    </Select>

    <Button className={style['red-text']}>
      Audit(minor surgical procedure)
    </Button>
    <Button className={style['red-text']}>Audit(REST)</Button>

    <Button>Prescribe Drug</Button>
  </div>
);

export default Toolbar;
