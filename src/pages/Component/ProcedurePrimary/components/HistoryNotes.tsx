import React from 'react';
import { Row, Col, Collapse, Image } from 'antd';

import capture from '../../ProcedureTertiary/images/Capture.png';
import Chart from '../../ProcedureTertiary/components/Chart';

import style from '../index.less';

const HistoryNotes = ({ showChart }: { showChart: boolean }) => {
  return (
    <Row className={style.fixedHeader}>
      <Col span={24}>
        {showChart ? (
          <Chart />
        ) : (
          <Collapse defaultActiveKey={['2']}>
            <Collapse.Panel
              header="History Notes"
              key="a1"
              className="boldheader"
            >
              <Image src={capture} style={{ height: 200 }} />
            </Collapse.Panel>
          </Collapse>
        )}
      </Col>
    </Row>
  );
};

export default HistoryNotes;
