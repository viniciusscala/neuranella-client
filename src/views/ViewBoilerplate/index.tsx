import React, { ReactElement } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Container, Card } from './styles';

function ViewBoilerplate(): ReactElement {
  return (
    <Container>
      <Card>
        <header>
          Upload do arquivo
        </header>
        <Upload action="http://127.0.0.1:8000/files" directory>
          <Button icon={<UploadOutlined />}>Enviar diretório</Button>
        </Upload>
      </Card>
    </Container>
  );
}

export default ViewBoilerplate;
