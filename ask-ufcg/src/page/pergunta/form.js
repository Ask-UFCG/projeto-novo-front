import { observer } from 'mobx-react';
import './form.css';
import React from 'react';
import { Input, Button, Select } from 'antd';
import PerguntaFormStore from '../../stores/pergunta/form';
import Pergunta from '../../domain/pergunta';
import PerguntaService from '../../services/pergunta';
import TextArea from 'antd/lib/input/TextArea';
import DadosEstaticosService from '../../utils/dadosEstaticosService';
import LeftMenu from '../../components/LeftMenu/index.js';

@observer
class PerguntaForm extends React.Component {
  constructor() {
    super();
    this.store = new PerguntaFormStore(Pergunta, PerguntaService, 'Pergunta');
  }
  onFinish = (values) => {};

  onFinishFailed = (errorInfo) => {};

  componentDidMount() {
    this.store.init();
  }

  render() {
    return (
      <div className='new-ask-page'>
        <LeftMenu />
        <div className='new-ask'>
          <div className='new-ask-form'>
            <h4>Crie uma nova pergunta para a comunidade</h4>
            <Select
              mode='multiple'
              style={{ width: '100%' }}
              placeholder='Escolha as categorias'
              options={DadosEstaticosService.getLabelsDisciplinas()}
              maxTagCount={5}
              onChange={(e) => {
                this.store.updateAttributeDecoratorKeyValue('tags', e);
              }}
              listHeight={160}
            />
            <Input
              placeholder={'Escreva um titulo que chama atenção'}
              onChange={(value) =>
                this.store.updateAttributeDecoratorKeyEventValue('email', value)
              }
            />
            <TextArea
              placeholder={'Escreva um titulo que chama atenção'}
              onChange={(value) =>
                this.store.updateAttributeDecoratorKeyEventValue('email', value)
              }
              autosize={{ maxRows: 20, minRows: 20 }}
              style={{
                height: '224px',
                maxHeight: '224px',
                minHeight: '224px',
              }}
            />
            <Button
              type='primary'
              htmlType='submit'
              className='style-button'
              size={'large'}
            >
              Cadastrar nova pergunta
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default PerguntaForm;
