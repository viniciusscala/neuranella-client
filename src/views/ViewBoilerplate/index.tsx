import React, { ReactElement } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Container, Card } from './styles';

function ViewBoilerplate(): ReactElement {
  return (
    <Container>
      <Card>
        <header>
          Testee
        </header>
        <Upload>
          <Button icon={<UploadOutlined />}>Clica aqui em pf!!</Button>
        </Upload>
      </Card>
    </Container>
  );
}

export default ViewBoilerplate;
