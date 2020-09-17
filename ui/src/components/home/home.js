import React, { Component } from 'react';
import { Layout } from 'antd';

import Dashboard from '../user/dashboard';

const { Content } = Layout;

class Home extends Component {
  render() {
    return (
      <Layout>
        <Content className="site-layout" style={{ marginTop: 20 }}>
          <Dashboard />
        </Content>
      </Layout>
    );
  }
}

export default Home;