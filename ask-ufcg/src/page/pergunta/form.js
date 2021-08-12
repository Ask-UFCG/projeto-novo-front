import { observer } from 'mobx-react';
import './form.css';
import React from 'react';
import { Input, Button, Select, Form } from 'antd';
import PerguntaFormStore from '../../stores/pergunta/form';
import Pergunta from '../../domain/pergunta';
import PerguntaService from '../../services/pergunta';
import TextArea from 'antd/lib/input/TextArea';
import DadosEstaticosService from '../../utils/dadosEstaticosService';
import LeftMenu from '../../components/LeftMenu/index.js';
import { userContext } from '../../userContext';

@observer
class PerguntaForm extends React.Component {
  formRef = React.createRef();

  constructor() {
    super();
    this.store = new PerguntaFormStore(Pergunta, PerguntaService, 'Pergunta');
  }
  onFinish = (user, token) => {
    this.store.saveQuestion(user, token, this.goToHomePage);
  };

  goToHomePage = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    this.store.init();
  }

  render() {
    return (
      <userContext.Consumer>
        {({ user, token }) => {
          return (
            <div className='new-ask-page'>
              <LeftMenu />
              <div className='new-ask'>
                <div className='new-ask-form'>
                  <h4>Crie uma nova pergunta para a comunidade</h4>
                  <Form
                    onFinish={() => this.onFinish(user, token)}
                    ref={this.formRef}
                    layout='vertical'
                  >
                    <Form.Item
                      name='categorias'
                      label='Categorias'
                      rules={[
                        {
                          required: true,
                          message: 'Por favor escolhe suas categorias!',
                        },
                      ]}
                    >
                      <Select
                        mode='multiple'
                        style={{ width: '100%' }}
                        placeholder='Escolha as categorias'
                        options={DadosEstaticosService.getLabelsDisciplinas()}
                        maxTagCount={5}
                        onChange={(e) => {
                          this.store.updateAttributeDecoratorKeyValue(
                            'tags',
                            e
                          );
                        }}
                        listHeight={160}
                      />
                    </Form.Item>
                    <Form.Item
                      name='titulo'
                      label='Titulo'
                      rules={[
                        {
                          required: true,
                          message: 'Por favor escolha um titulo!',
                        },
                      ]}
                    >
                      <Input
                        placeholder={'Escreva um titulo que chame atenção'}
                        onChange={(value) =>
                          this.store.updateAttributeDecoratorKeyEventValue(
                            'title',
                            value
                          )
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name='descricao'
                      label='Descrição'
                      rules={[
                        {
                          required: true,
                          message: 'Por favor descreva sua pergunta!',
                        },
                      ]}
                    >
                      <TextArea
                        placeholder={'Escreva uma descrição detalhada'}
                        onChange={(value) =>
                          this.store.updateAttributeDecoratorKeyEventValue(
                            'content',
                            value
                          )
                        }
                        autosize={{ maxRows: 20, minRows: 20 }}
                        style={{
                          height: '224px',
                          maxHeight: '224px',
                          minHeight: '224px',
                        }}
                      />
                    </Form.Item>
                    <Button
                      type='primary'
                      htmlType='submit'
                      className='style-button'
                      size={'large'}
                    >
                      Cadastrar nova pergunta
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          );
        }}
      </userContext.Consumer>
    );
  }
}

export default PerguntaForm;
