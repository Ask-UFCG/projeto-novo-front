import { message, notification } from 'antd'

export const showNotification = (type, title, description) => {
  const msg = `${title ? title + '! ' : ''}${description ? description : ''}`
  switch (type) {
    case 'error':
      message.error(msg)
      break
    case 'success':
      message.success(msg)
      break
    default:
      message.info(msg)
      break
  }
}

export const showErrorNotification = (msgError) => {
  showNotification('error', null, msgError)
}

export const showErrorApiNotification = (error) => {
  showNotification('error', null, _getMensagemErro(error))
}

const _getMensagemErro = (error) => {
  let msg = 'Ocorreu um erro inesperado'

  if (!error.response) {
    return msg
  }

  const status = error.response.status

  if (status === 503 && error.response.data.data) {
    error.response.data = error.response.data.data
  }

  if (status) {
    switch (status) {
      case 400:
        msg = 'Ocorreu um erro na requisição solicitada'
        break
      case 404:
        msg = 'Não encontrada a requisição solicitada'
        break
      case 408:
        msg = 'Expirou o tempo de comunicação'
        break
      case 409:
        msg = 'Existe uma nova versão do objeto sendo atualizado'
        break
      case 406:
      case 500:
      case 503: {
        let msgTemp = _gerarMensagemErro500(error, status)
        msg = msgTemp ? msgTemp : msg
        break
      }
      default:
        msg = 'Ocorreu um erro no servidor'
        break
    }
  }
  return msg
}

const _gerarMensagemErro500 = (error, status) => {
  let mensagem = ''

  if (_existeMensagemRegraNegocioDoBanco(error.response.data.error)) {
    mensagem = _capturarMensagemRegraNegocioDoBanco(error.response.data.error)
  } else if (error.response.data.error.indexOf('Could not get JDBC Connection') !== -1) {
    mensagem = 'Ocorreu um erro na comunicação com o banco de dados'
  } else if (
    error.response.data.error.indexOf('Already exists a object with the same identifier') !== -1
  ) {
    mensagem = 'Já existe um objeto com a mesma identificação'
  } else if (
    error.response &&
    error.response.data &&
    error.response.data.error &&
    typeof error.response.data.error === 'string'
  ) {
    if (status !== 503) {
      mensagem = error.response.data.error
    }
  }
  return mensagem
}

const _existeMensagemRegraNegocioDoBanco = (msg) => {
  let posicaoEncontrada = -1

  if (typeof msg === 'string') {
    posicaoEncontrada = msg.search(/^.*?PSQL\d*:\s*([^,]*)/)
  }

  return posicaoEncontrada > -1
}

const _capturarMensagemRegraNegocioDoBanco = (msg) => {
  const aMensagensORA = msg.match(/^.*?PSQL\d*:\s*([^\n]*)/)

  let msgORA = ''
  if (aMensagensORA && aMensagensORA.length > 0) {
    msgORA = aMensagensORA[1]

    const aMensagensORA2 = msgORA.match(/.*?PSQL\d*:\s*([^\n]*)/)
    if (aMensagensORA2 && aMensagensORA2.length > 0) {
      const msg2 = aMensagensORA2[1]
      msgORA = msgORA.replace(msg2, '')
      if (msgORA === '') {
        const newOra = (msg2 || '').indexOf('PSQL') > 0 ? (msg2 || '').indexOf('PSQL') : 0
        msgORA = (msg2 || '').substring(0, newOra)
      }
    }
  } else {
    msgORA = msg.match(/^.*?PSQL\d*:\s*([^\n]*)/)[0]
  }

  if (
    msgORA.includes('is mutating') ||
    msgORA.includes('child record found') ||
    msgORA.includes('registro filho localizado')
  ) {
    msgORA = 'Não é permitida a exclusão do registro, pois existem registros filhos'
  }

  if (msgORA.includes('unique constraint')) {
    msgORA =
      'Não é permitida a inclusão do registro, os principais campos informados já existem na base de dados'
  }
  return msgORA
}

export const openInformingNotification = (message, description) => {
  notification.open({
    message: message,
    description: description,
  })
}
