import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

function MyTable(props) {
  const [data, setData] = useState(props.data);
  useEffect(() => { setData(props.data) }, [props.data]);
  return (
    <Table
      rowKey={props.rowKey}
      columns={props.columns}
      dataSource={data}
      pagination={{ defaultPageSize: props.defaultPageSize || 10 }}
      showHeader={props.showHeader || true}
    >
    </Table>
  )
}

export default MyTable;