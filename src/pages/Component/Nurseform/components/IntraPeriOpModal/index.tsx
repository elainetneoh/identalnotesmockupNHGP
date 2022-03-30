import { Input, Select, Row, Typography, Modal } from 'antd';

import style from './index.less';
import PreOp from './PreOp';
import Discharge from './Discharge';
import PeriOp from './PeriOp';

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
      className={style.wrapper}
    >
      <Row gutter={{ xs: 8 }}>
        <PreOp span={12} />
        {/* <PeriOp span={8} /> */}
        <Discharge span={12} />
      </Row>
    </Modal>
  );
};

export default IntraPeriOpModal;
