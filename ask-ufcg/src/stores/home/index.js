import { action, observable, runInAction } from 'mobx'
import DadosEstaticosService from '../../utils/dadosEstaticosService'
import { showErrorApiNotification } from '../../utils/notification'
import imagePic from '../../assets/perfil_not_found.png'
import imageNotFound from '../../assets/link_not_valid.jpg'
import HomeService from '../../services/home'

class HomeIndexStore {
  @observable object = null
  @observable loading = false
  @observable filterAsks = 'new'
  @observable allAsksForCards = []
  LENGTH_MAX = 60

  constructor(entity, service, entityName) {
    this.entity = entity
    this.service = service
    this.entityName = entityName
  }

  @action
  updateFilterAsks = (value) => {
    this._toggleButtonColor(value)
    this.filterAsks = value
    this.getAllAsksByFilter()
  }

  _toggleButtonColor = (value) => {
    const button = document.getElementById(value)
    if (!button.classList.contains('new-tag')) {
      const buttons = document.getElementsByClassName('home-tag-button')
      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== value) {
          buttons[i].classList.remove('new-tag')
          if (!buttons[i].classList.contains('other-tag')) {
            buttons[i].classList.add('other-tag')
          }
        }
      }
      button.classList.remove('other-tag')
      button.classList.add('new-tag')
    }
  }

  @action
  updateAttributeDecoratorKeyEventValue = (key, event) => {
    this.object[key] = event.target.value
  }

  @action
  updateAttributeDecoratorKeyValue = (key, value) => {
    this.object[key] = value
  }

  @action
  init = () => {
    this.object = this.entity
    this.loadAllAsks()
  }

  _checkImgOnline = (imageUrl) => {
    var img = new Image()
    img.src = imageUrl
    return img.height > 0
  }

  @action
  searchQuestions = (title) => {
    this.loading = true
    HomeService.getAllAsksBySearch(title, this.filterAsks)
      .then((response) => {
        runInAction(`Load All Asks`, () => {
          const content = response && response.data && response.data ? response.data : []
          if (content.length > 0) {
            this.allAsks = content
            this.allAsksForCards = content.map((ask) => {
              const askTitle = ask.title
                ? ask.title.length >= this.LENGTH_MAX
                  ? ask.title.substring(0, this.LENGTH_MAX)
                  : ask.title
                : ''
              const askDescription = ask.content
                ? ask.content.length >= this.LENGTH_MAX
                  ? ask.content.substring(0, this.LENGTH_MAX)
                  : ask.content
                : ''
              const tags = ask.tags ?? []
              const askCreatedAt = ask.createdAt
              const askTags = tags.map((item) => {
                let result = undefined
                DadosEstaticosService.getLabelsDisciplinas().forEach((disciplina) => {
                  if (disciplina.value === item) {
                    result = disciplina.label
                  }
                })
                return result
              })
              const linkAvatar =
                !ask.author.linkAvatar || this._checkImgOnline(ask.author.linkAvatar)
                  ? ask.author.linkAvatar || imagePic
                  : imageNotFound

              return {
                userphoto: linkAvatar,
                username: ask.author.firstName,
                title: askTitle,
                description: askDescription,
                tags: askTags,
                createdAt: askCreatedAt,
                id: ask.id,
              }
            })
          } else {
            this.allAsks = content
            this.allAsksForCards = content
            return this.allAsksForCards
          }
        })
      })
      .catch((error) => {
        runInAction(`Error on load All Asks`, () => {
          showErrorApiNotification(error)
        })
      })
      .finally(() => {
        this.loading = false
      })
  }

  @action
  getAllAsksByFilter = () => {
    this.loading = true
    HomeService.getAllAsksByFilter(this.filterAsks)
      .then((response) => {
        runInAction(`Load All Asks`, () => {
          const content = response && response.data && response.data ? response.data : []
          if (content.length > 0) {
            this.allAsks = content
            this.allAsksForCards = content.map((ask) => {
              const askTitle = ask.title
                ? ask.title.length >= this.LENGTH_MAX
                  ? ask.title.substring(0, this.LENGTH_MAX)
                  : ask.title
                : ''
              const askDescription = ask.content
                ? ask.content.length >= this.LENGTH_MAX
                  ? ask.content.substring(0, this.LENGTH_MAX)
                  : ask.content
                : ''
              const tags = ask.tags ?? []
              const askCreatedAt = ask.createdAt
              const askTags = tags.map((item) => {
                let result = undefined
                DadosEstaticosService.getLabelsDisciplinas().forEach((disciplina) => {
                  if (disciplina.value === item) {
                    result = disciplina.label
                  }
                })
                return result
              })
              const linkAvatar =
                !ask.author.linkAvatar || this._checkImgOnline(ask.author.linkAvatar)
                  ? ask.author.linkAvatar || imagePic
                  : imageNotFound

              return {
                userphoto: linkAvatar,
                username: ask.author.firstName,
                title: askTitle,
                description: askDescription,
                tags: askTags,
                createdAt: askCreatedAt,
                id: ask.id,
              }
            })
          } else {
            this.allAsks = content
            this.allAsksForCards = content
            return this.allAsksForCards
          }
        })
      })
      .catch((error) => {
        runInAction(`Error on load All Asks`, () => {
          showErrorApiNotification(error)
        })
      })
      .finally(() => {
        this.loading = false
      })
  }

  @action
  loadAllAsks = () => {
    this.loading = true
    HomeService.getAllAsks()
      .then((response) => {
        runInAction(`Load All Asks`, () => {
          const content = response && response.data && response.data ? response.data : []
          if (content.length > 0) {
            this.allAsks = content
            this.allAsksForCards = content.map((ask) => {
              const askTitle = ask.title
                ? ask.title.length >= this.LENGTH_MAX
                  ? ask.title.substring(0, this.LENGTH_MAX)
                  : ask.title
                : ''
              const askDescription = ask.content
                ? ask.content.length >= this.LENGTH_MAX
                  ? ask.content.substring(0, this.LENGTH_MAX)
                  : ask.content
                : ''
              const tags = ask.tags ?? []
              const askTags = tags.map((item) => {
                let result = undefined
                DadosEstaticosService.getLabelsDisciplinas().forEach((disciplina) => {
                  if (disciplina.value === item) {
                    result = disciplina.label
                  }
                })
                return result
              })
              const linkAvatar =
                !ask.author.linkAvatar || this._checkImgOnline(ask.author.linkAvatar)
                  ? ask.author.linkAvatar || imagePic
                  : imageNotFound

              return {
                userphoto: linkAvatar,
                username: ask.author.firstName,
                title: askTitle,
                description: askDescription,
                tags: askTags,
                createdAt: ask.createdAt,
                id: ask.id,
                answered: ask.answered,
                answers: ask.answers,
                qtdDislikes: ask.qtdDislikes,
                qtdLikes: ask.qtdLikes,
              }
            })
          } else {
            this.allAsks = content
            this.allAsksForCards = content
            return this.allAsksForCards
          }
        })
      })
      .catch((error) => {
        runInAction(`Error on load All Asks`, () => {
          showErrorApiNotification(error)
        })
      })
      .finally(() => {
        this.loading = false
      })
  }
}

export default HomeIndexStore
