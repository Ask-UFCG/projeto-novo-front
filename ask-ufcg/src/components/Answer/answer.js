import React from 'react'
import { Button, Divider, Form, Input, Tooltip } from 'antd'
import { observer } from 'mobx-react'
import Answer from '../../domain/answer'
import AnswerService from '../../services/answer'
import { ReactComponent as MessageIcon } from '../../assets/message-square.svg'
import Comment from '../Comment/index.js'
import './answer.css'
import AnswerFormStore from '../../stores/answer/form'
import { userContext } from '../../userContext'
import { getValueDateWithHours } from '../../utils/date'
import imageNotFound from '../../assets/perfil_not_found.png'
import { CheckCircleOutlined } from '@ant-design/icons'

@observer
class AnswerComponent extends React.Component {
  formRef = React.createRef()

  constructor(props) {
    super(props)
    this.store = new AnswerFormStore(Answer, AnswerService, 'Resposta ')
    this.idAuthorQuestion = this.props.idAuthorQuestion
    this.state = { showInputComment: false, showComments: false }
  }

  componentDidMount() {
    const { content } = this.props
    this.store.init(content)
  }

  _handleShowInputComment = () => {
    this.setState((oldState) => ({
      showInputComment: !oldState.showInputComment,
    }))
  }

  _handleShowComments = () => {
    this.setState((oldState) => ({
      showComments: !oldState.showComments,
    }))
  }

  render() {
    if (this.store.object) {
      return (
        <userContext.Consumer>
          {({ user, token }) => {
            return (
              <div className="answer-content">
                <div className="answer-card">
                  <div className="user-answer-card">
                    <img
                      src={this.store.object.author.linkAvatar ?? imageNotFound}
                      alt="nome do usuario"
                    />
                    <p>
                      {this.store.object.author.firstName + ' ' + this.store.object.author.lastName}
                    </p>
                    <div className="user-answer-card-solved">
                      {this.store.object.solution ? (
                        <Tooltip title="Solução para pergunta">
                          <CheckCircleOutlined style={{ color: 'green', fontSize: '200%' }} />
                        </Tooltip>
                      ) : !user ? (
                        ''
                      ) : this.idAuthorQuestion === user.id ? (
                        <Button
                          style={{ backgroundColor: '#47ff85' }}
                          onClick={() => {
                            this.store.updateAttributeDecoratorKeyValue('solution', true)
                            this.store.markAsSolution(token)
                          }}
                        >
                          Marcar como solução
                        </Button>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>

                  <p className="answer-description">{this.store.object.content}</p>
                  <Divider />

                  <div className="date-align">
                    {'Postada em: ' + getValueDateWithHours(this.store.object.createdAt)}
                    <div className="main-answer-add-comment">
                      {user ? (
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="style-button"
                          onClick={() => this._handleShowInputComment()}
                        >
                          <MessageIcon className="sent-icon-answer" />
                          {this.state.showInputComment ? 'Cancelar' : 'Adicionar um Comentário'}
                        </Button>
                      ) : (
                        ''
                      )}
                      <Button
                        type="primary"
                        className="style-button"
                        onClick={this._handleShowComments}
                      >
                        {this.state.showComments ? 'Esconder Comentários' : 'Exibir Comentários'}
                      </Button>
                    </div>
                  </div>
                </div>
                {this.store.object.comments && this.state.showComments
                  ? this.store.object.comments.map((comment) => <Comment content={comment} />)
                  : ''}
                <div
                  className="input-comment-card"
                  style={!this.state.showInputComment ? { display: 'none' } : {}}
                >
                  <Form layout="vertical" ref={this.formRef}>
                    <Form.Item>
                      <Input
                        value={this.store.comment.content}
                        onChange={(value) => {
                          this.store.updateAttributeDecoratorKeyCommentEventValue('content', value)
                        }}
                      />
                    </Form.Item>
                    {user ? (
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="style-button"
                          onClick={() => this.store.addComment(user, token)}
                        >
                          <MessageIcon className="sent-icon-answered" />
                          Comentar
                        </Button>
                      </Form.Item>
                    ) : (
                      ''
                    )}
                  </Form>
                </div>
              </div>
            )
          }}
        </userContext.Consumer>
      )
    }
    return ''
  }
}

export default AnswerComponent
