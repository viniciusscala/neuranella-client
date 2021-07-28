import React, { ReactElement } from 'react';
// import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Container, Card } from './styles';

function ViewBoilerplate(): ReactElement {
  return (
    <Container>
      <Card>
        <header>
          Upload do arquivo
        </header>
        {/* <Upload action="http://127.0.0.1:8000/files" directory>
          <Button icon={<UploadOutlined />}>Enviar diretório</Button>
        </Upload> */}
        <button
          onClick={async () => {
            try {
              const response = await axios.post('http://127.0.0.1:8000/files', {
                file_name: 'patch_3',
                file_extension: 'raw',
              });
              console.log(response, 'resposta');
            } catch (error) {
              console.log(error);
            }
          }}
          type="button"
        >
          teste
        </button>
      </Card>
    </Container>
  );
}

export default ViewBoilerplate;
