'use strict'

// Создаем класс для псевдо селекта
export default class PseudoSelect {
  // Принимаем объект с настройками
  constructor(options) {
    // Инициализируем объект
    this.init()
  }

  // Проверить успешность заполнения селекта
  checkIfValid(select) {
    const current = select.querySelector('.pseudo-select-current')
    const main = select.querySelector('.pseudo-select-main')
    if (current.getAttribute('value') == '' && current.hasAttribute('required')) {
      main.classList.add('error')
      main.setAttribute('title', 'Это поле обязательное, заполните его')
    } else if (current.hasAttribute('required') && current.getAttribute('value') != '') {
      main.classList.remove('error')
      main.classList.add('success')
      main.removeAttribute('title')
    }
  }

  // Закрыть все селекты на странице
  closeAllSelects() {
    // Задаем массив селекторов
    const selectors = [
      '.pseudo-select',
      '.pseudo-select-icon',
      '.pseudo-select-main',
      '.pseudo-select-list',
    ]

    // Перебираем массив селекторов
    selectors.forEach((selector) => {
      // Получаем все элементы на странице по селектору
      document.querySelectorAll(selector).forEach((element) => {
        // Деактивируем элемент
        element.classList.remove('activated')
      })
    })

    document.querySelectorAll('.pseudo-select').forEach((select) => {
      this.checkIfValid(select)
    })
  }

  // Закрыть текущий селект
  closeCurrentSelect(select) {
    select.classList.remove('activated')
    select.querySelector('.pseudo-select-icon').classList.remove('activated')
    select.querySelector('.pseudo-select-main').classList.remove('activated')
    select.querySelector('.pseudo-select-list').classList.remove('activated')

    this.checkIfValid(select)
  }

  markSelectedItems(select) {
    // Получаем список значений
    const list = select.querySelector('.pseudo-select-list')
    const current = select.querySelector('.pseudo-select-current')
    const placeholder = select.querySelector('.pseudo-select-placeholder')
    // Собираем все инпуты внутри списка
    list.querySelectorAll('input').forEach((input) => {
      const item = input.closest('.pseudo-select-list-item')
      // Проверяем, отмечен ли текущий инпут
      if (input.checked) {
        item.classList.add('selected')

        current.setAttribute('value', input.getAttribute('value'))
        current.classList.add('activated')
        placeholder.classList.add('activated')
      } else {
        item.classList.remove('selected')
      }
    })
  }

  // Инициализация
  init() {
    // Отмечаем элементы списка у которых отмечен input
    document.querySelectorAll('.pseudo-select').forEach((select) => {
      this.markSelectedItems(select)
    })

    // Прослушиваем клик по документу
    document.addEventListener('click', (event) => {
      // Если кликнули по псевдоселекту или внутри него
      if (event.target.closest('.pseudo-select')) {
        const current = {
          select: event.target.closest('.pseudo-select'),
          main: event.target.closest('.pseudo-select').querySelector('.pseudo-select-main'),
          icon: event.target.closest('.pseudo-select').querySelector('.pseudo-select-icon'),
          placeholder: event.target.closest('.pseudo-select').querySelector('.pseudo-select-placeholder'),
          list: event.target.closest('.pseudo-select').querySelector('.pseudo-select-list'),
          current: event.target.closest('.pseudo-select').querySelector('.pseudo-select-current'),
        }

        // Если кликнули по главной части
        if (event.target.closest('.pseudo-select-main')) {
          current.list.classList.toggle('activated')
          current.icon.classList.toggle('activated')

          if (current.list.classList.contains('activated')) {
            this.checkIfValid(current.select)
          }
        }

        // Если кликнули по элементу списка
        // Сработает, если input внутри label
        if (event.target.closest('.pseudo-select-list-item input')) {
          // Запрещаем всплытие события от input к label
          event.stopPropagation()

          // Отмечаем элементы списка у которых отмечен input
          this.markSelectedItems(current.select)

          this.checkIfValid(current.select)

          setTimeout(this.closeCurrentSelect(current.select), 125)
        }
      } else {
        // Закрываем все селекты если кликнули вне селекта
        this.closeAllSelects()
      }
    })
  }
}
