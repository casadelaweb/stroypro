// Импортируем слайдер
import Swiper from './libs/swiper-bundle.js'
// Импортируем ленивую загрузку
import LazyLoad from './libs/lazyload.esm.js'
// Импортируем фенсибокс
import Fancybox from './libs/fancybox.esm.js'
// Импортируем псевдоселекты
import PseudoSelect from './libs/pseudo-select.js'
// Импортируем маску
import IMask from './libs/imask.js'
import noUiSlider from './libs/nouislider.js'

// Скрипты приложения
function App() {
  // Прослушиваем загрузку документа
  document.addEventListener('DOMContentLoaded', function () {
    // Обновляем страницу при перевороте экрана
    window.addEventListener('orientationchange', function () {
      window.location.reload()
    })

    // Навигация
    function Navigation() {
      // Получаем ссылки на категории внутри большого меню
      const links = document.body.querySelectorAll('.navigation-menu-categories-link')
      // Получаем контейнеры с подкатегориями
      const contents = document.body.querySelectorAll('.navigation-menu-category-content')

      // Перебираем все ссылки
      links.forEach((link, index) => {
        // Получаем нужное окно по порядковому номеру
        const content = contents[index]

        function toggleMenuContent() {
          // Деактивируем все ссылки
          links.forEach((element) => {
            element.classList.remove('activated')
          })
          // Активируем текущую ссылку
          link.classList.add('activated')

          // Деактивируем все окна
          contents.forEach((element) => {
            element.classList.remove('activated')
          })
          // Проверка на пустоту
          if (content) {
            // Активируем нужное окно
            content.classList.add('activated')
          }
        }

        // Прослушиваем наведение мыши на ссылку
        link.addEventListener('mouseenter', toggleMenuContent)
        link.addEventListener('touchstart', toggleMenuContent)
      })

      // По-умолчанию активируем первый элемент
      const firstElements = [
        links[0],
        contents[0],
      ]

      firstElements.forEach((element) => {
        element.classList.add('activated')
      })

      // получаем навигацию
      const nav = document.body.querySelector('.navigation')
      // получаем нижнюю панель навигации с быстрыми ссылками
      const navBottom = nav.querySelector('.navigation-bottom')
      // Прослушиваем скролл
      document.addEventListener('scroll', function () {
        // На сколько будем смещать навигацию
        const offset = nav.querySelector('.navigation-top').offsetHeight

        // Если проскролили больше чем на высоту навигации
        if (window.scrollY > nav.offsetHeight) {
          // Смещаем навигацию и изменяем стили
          nav.style.transform = `translateY(-${ offset }px)`
          navBottom.classList.add('scrolled')
          // nav.querySelector(".navigation-menu-button").classList.add("scrolled");
        } else {
          // возвращаем в исходное положение
          nav.style.transform = 'translateY(0)'
          navBottom.classList.remove('scrolled')
          // nav.querySelector(".navigation-menu-button").classList.remove("scrolled");
        }
      })
    }

    Navigation()

    // Маска для телефона
    document.body.querySelectorAll('[type=\'tel\']').forEach((element) => {
      IMask(element, { mask: '+{7}(000)000-00-00', })
    })

    // Активируем псевдоселект
    new PseudoSelect({})

    // Главная страница
    function pageIndex() {
      // Общие для всех слайдеров настройки
      const generalSettings = {
        speed: 334,
        grabCursor: true,

        // Ленивая загрузка слайдов
        preloadImages: true,
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNext: true,
        },
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
      }

      new Swiper('.header-banner-mobile-slider .swiper-container', {
        ...generalSettings,
        loop: true,
        pagination: {
          el: '.header-banner-mobile-slider .swiper-pagination',
          clickable: true,
        },
      })

      new Swiper('.our-partners-slider .swiper-container', {
        ...generalSettings,
        loop: true,
        // Навигация
        navigation: {
          nextEl: '.our-partners-slider .swiper-button-next',
          prevEl: '.our-partners-slider .swiper-button-prev',
        },
        // Адаптивность
        breakpoints: {
          0: {
            slidesPerView: 2.2,
            spaceBetween: 15,
          },
          767.5: {
            // slidesPerView: 2,
            slidesPerView: 3.0,
            spaceBetween: 20,
          },
          1023.5: {
            // slidesPerView: 3.0,
            spaceBetween: 30,
          },
          1199.5: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        },
      })

      // Объекты построенные из наших материалов
      new Swiper('.objects-our-materials-slider .swiper-container', {
        ...generalSettings,
        loop: false,
        pagination: {
          el: '.objects-our-materials-slider .swiper-pagination',
          clickable: true,
        },
        slidesPerView: 2.2,
        spaceBetween: 20,
        // Адаптивность
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          539.5: { slidesPerView: 1, },
          767.5: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1199.5: { slidesPerView: 2.2, },
        },
      })

      // Популярные товары
      new Swiper('.popular-slider .swiper-container', {
        ...generalSettings,
        loop: true,

        navigation: {
          nextEl: '.popular-slider .swiper-button-next',
          prevEl: '.popular-slider .swiper-button-prev',
        },
        // Адаптивность
        breakpoints: {
          0: {
            slidesPerView: 1.6,
            spaceBetween: 15,
          },
          539.5: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          767.5: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1023.5: {
            slidesPerView: 3.5,
            spaceBetween: 15,
          },
          1199.5: {
            slidesPerView: 5.0,
            spaceBetween: 27,
          },
        },
      })
    }

    pageIndex()

    // Добавляем фенсибокс глобально
    window.Fancybox = Fancybox

    // Ленивая загрузка
    const lazyLoadInstance = new LazyLoad({
      // По-возможности использовать нативную ленивую загрузку
      use_native: true,
    })
    lazyLoadInstance.update()

    // Корзина

    // Обновить стоимость во всех карточках корзины
    function updateCartCardsSummary() {
      // Получаем все карточки на странице корзины
      const cards = document.body.querySelectorAll('[data-cart=card]')

      // Проверка на пустоту
      if (cards.length > 0) {
        // Проходимся по каждой карточке
        cards.forEach((card) => {
          // Получаем актуальную цену
          let price = card.querySelector('[data-cart=price]').textContent
          // Получаем актуальное количество
          let quantity = card.querySelector('[data-cart=quantity]').value
          // Получаем контейнер для стоимости
          const summaryElement = card.querySelector('[data-cart=summary]')

          // Удаляем все пробелы
          price = price.replace(/\s/g, '')
          quantity = quantity.replace(/\s/g, '')

          // Преобразуем число
          price = parseInt(price)
          quantity = parseInt(quantity)

          if (!Number.isInteger(quantity) || quantity < 0) {
            quantity = 0
          }

          // Рассчитываем финальную стоимость
          let summaryValue = price * quantity
          // Разделяем на разряды
          summaryValue = summaryValue.toLocaleString()
          // Подставляем значение в нужный элемент
          summaryElement.textContent = summaryValue
        })
      }
    }

    // Обновляем блок с финальным расчетом стоимости
    function updateCartResult() {
      // Контейнер для промежуточного результата
      const resultGoods = document.body.querySelector('[data-cart=result-goods]')
      // Контейнер для финальный результат
      const resultFinal = document.body.querySelector('[data-cart=result-final]')
      // На текущий момент нет разницы между промежуточным и финальным результатом

      // Контейнер для количества товаров
      const resultQuantity = document.body.querySelector('[data-cart=result-quantity]')

      // Получаем все карточки на странице и сразу преобразуем коллекцию в массив
      const cardsAll = [ ...document.body.querySelectorAll('[data-cart=card]'), ]
      // Фильтруем карточки (не должно быть display:none)
      const cardsFiltered = cardsAll.filter((card) => getComputedStyle(card).display !== 'none')

      // Получаем блок с заглушкой
      const thumbEmpty = document.body.querySelector('[data-cart=thumb-empty]')

      // Резервируем переменную для значения
      let resultValue = 0

      // Проверка на пустоту
      if (cardsFiltered.length > 0) {
        // Собираем стоимость из всех карточек на странице
        cardsFiltered.forEach((card) => {
          const cardSummary = card.querySelector('[data-cart=summary]')
          if (cardSummary) {
            let value = cardSummary.textContent
            value = value.replace(/\s/g, '')
            value = parseInt(value)

            resultValue = resultValue + value
          }
        })

        // Проверка на пустоту
        if (thumbEmpty) {
          // Скрываем блок есть карточки есть
          thumbEmpty.style.display = 'none'
        }
      } else {
        // Проверка на пустоту
        if (thumbEmpty) {
          // Показываем блок если карточек нет
          thumbEmpty.style.display = 'block'
        }
      }

      // Проверка на пустоту
      if (resultGoods) {
        // Присваиваем значение и делим по разрядам
        resultGoods.textContent = resultValue.toLocaleString()
      }
      // Проверка на пустоту
      if (resultFinal) {
        // Присваиваем значение и делим по разрядам
        resultFinal.textContent = resultValue.toLocaleString()
      }
      // Проверка на пустоту
      if (resultQuantity) {
        // Резервируем переменную со значением по-умолчанию 0
        let value = 0
        // Если на странице есть карточки
        if (cardsAll.length > 0) {
          // Присваиваем значение длинны полученного массива
          value = cardsFiltered.length
        }
        // Вносим значение в нужный блок
        resultQuantity.textContent = value
      }
    }

    // Обновляем после загрузки страницы
    // Также они вызываются при клике по документу и при вводе данных
    updateCartCardsSummary()
    updateCartResult()

    function quantityInputValidate(input) {
      // Записываем принятый инпут в переменную
      //const input = input;
      //  Получаем значение
      let value = input.value
      // Удаляем все пробелы
      value = value.replace(/\s/g, '')
      // Приводим к целому числу
      value = parseInt(value)

      // Если значение не является целым числом или меньше нуля
      if (!Number.isInteger(value) || value < 0) {
        // Приравнять к нулю
        value = 0
      }

      // Максимальное значение по умолчанию
      let max = 999
      // Проверяем задано ли кастомное максимальное значение
      if (input.hasAttribute('data-value-max')) {
        let custom = input.getAttribute('data-value-max')
        // Удаляем все пробелы
        custom = custom.replace(/\s/g, '')
        // Приводим к целому числу
        custom = parseInt(custom)
        // Переопределяем
        max = custom
      }

      if (value > max) {
        value = max
      }

      // Минимальное значение по умолчанию
      let min = 0
      // Проверяем задано ли кастомное минимальное значение
      if (input.hasAttribute('data-value-min')) {
        let custom = input.getAttribute('data-value-min')
        // Удаляем все пробелы
        custom = custom.replace(/\s/g, '')
        // Приводим к целому числу
        custom = parseInt(custom)
        // Переопределяем
        min = custom
      }

      if (value < min) {
        value = min
      }

      // Присваиваем значение
      input.value = value
    }

    // Прослушиваем клик по документу
    document.addEventListener('click', function (event) {
      // Переключаем класс активированного состояние
      // Используется для навигации
      if (event.target.closest('[data-toggle]')) {
        // Получаем кнопку
        const button = event.target.closest('[data-toggle]')
        // Получаем селекторы, удаляем все пробелы и делим их по запятой
        const selectors = button.getAttribute('data-toggle').replace(/\s/g, '').split(',')
        // Перебираем массив селекторов
        selectors.forEach((selector) => {
          // Получаем целевые элементы на странице
          const targets = document.body.querySelectorAll(selector)
          // Проверка на пустоту
          if (targets.length > 0) {
            // Перебираем все целевые элементы
            targets.forEach((target) => {
              // Переключаем класс
              target.classList.toggle('activated')
            })
          }
        })
      }

      // Переключаем возможность скролла для мобильной навигации
      if (event.target.closest('.navigation-mobile-button')) {
        document.body.querySelector('html').classList.toggle('locked')
        document.body.querySelector('body').classList.toggle('locked')
      }

      // Мобильное навигационное меню

      // Деактивируем внутри мобильного меню при клике на кнопку открытия/закрытия меню
      if (event.target.closest('.navigation-mobile-button')) {
        // Исполняем с небольшой задержкой
        setTimeout(() => {
          document.body.querySelectorAll('[data-menu-layer]').forEach((element) => {
            element.classList.remove('activated')
          })
        }, 334)
      }

      // Кнопка вперед в меню
      if (event.target.closest('[data-menu-next]')) {
        const button = event.target.closest('[data-menu-next]')
        const parent = button.parentNode
        const layer = parent.querySelector('[data-menu-layer]')

        layer.classList.add('activated')

        // Скроллим наверх внутри меню с небольшой задержкой
        setTimeout(function () {
          document.body.querySelector('.navigation-mobile-fullscreen').scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }, 167)

        // console.log(parent, layer);
      }
      // Кнопка назад в меню
      else if (event.target.closest('[data-menu-prev]')) {
        const button = event.target.closest('[data-menu-prev]')
        const current = { layer: button.closest('[data-menu-layer]'), }

        current.layer.classList.remove('activated')
      }

      // Вкладки
      if (event.target.closest('[data-tab]')) {
        // Переключаем вкладки
        const targetSelector = event.target.closest('[data-tab]').getAttribute('data-tab')

        document.body.querySelectorAll('.tab').forEach((tab) => {
          tab.classList.remove('activated')
        })
        document.body.querySelectorAll('[data-tab]').forEach((tab) => {
          tab.classList.remove('activated')
        })

        document.body.querySelectorAll(targetSelector).forEach((element) => {
          element.classList.add('activated')
        })
        event.target.closest('[data-tab]').classList.add('activated')
      }

      // Небольшая анимация при добавлении в корзину
      if (event.target.closest('[data-add-to-cart]')) {
        const icons = [
          document.body.querySelector('.navigation-cart-quantity'),
          document.body.querySelector('.navigation-mobile-cart-quantity'),
        ]

        icons.forEach((icon) => {
          icon.classList.add('cart-animation-in-progress')
        })

        setTimeout(() => {
          icons.forEach((icon) => {
            icon.classList.remove('cart-animation-in-progress')
          })
        }, 500)
      }

      // Фильтры в каталоге
      if (event.target.closest('[data-open-filters]')) {
        document.body.querySelector('.catalog-inner-aside').classList.add('activated')
        document.body.querySelector('.overlay').classList.add('activated')
        document.body.querySelector('html').classList.add('locked')
        document.body.querySelector('body').classList.add('locked')
      }
      // Закрываем фильтры при клике на оверлей
      if (event.target.closest('.overlay')) {
        document.body.querySelector('.catalog-inner-aside').classList.remove('activated')
        document.body.querySelector('.overlay').classList.remove('activated')
        document.body.querySelector('html').classList.remove('locked')
        document.body.querySelector('body').classList.remove('locked')
      }

      // Корзина
      if (
        // При клике на кнопку увеличить или уменьшить кол-во товара (в карточке)
        event.target.closest('.quantity-button') ||
        // При клике на кнопку удалить карточку из корзины
        event.target.closest('[data-cart=remove]') ||
        // Клике на кнопку удалить все товары из корзины
        event.target.closest('[data-cart=remove-all]')
      ) {
        setTimeout(function () {
          // Обновляем стоимость в карточках корзины
          updateCartCardsSummary()
          // Обновляем суммарные стоимость в корзине
          updateCartResult()
        }, 25)
      }

      // Кнопка уменьшить/добавить количество товаров в корзине
      if (event.target.closest('.quantity-button')) {
        // Объект с текущими элементами
        const current = {
          // Кнопка на которую кликнули
          button: event.target.closest('.quantity-button'),
          // Поле ввода
          input: event.target.closest('.quantity-container').querySelector('.quantity-input'),
        }

        // Передаем инпут на проверку
        quantityInputValidate(current.input)

        // Уменьшаем
        if (current.button.classList.contains('quantity-button-decrement')) {
          // Сразу преобразуем результат в число
          current.input.value = parseInt(current.input.value) - 1

          // Получаем минимальное значение (если оно не задано, задаем 0 по-умолчанию)
          const min = current.input.getAttribute('data-value-min') ? parseInt(current.input.getAttribute('data-value-min')) : 0
          // Если текущее значение меньше минимального
          if (current.input.value < min + 1) {
            current.input.value = min
          }
        }

        // Увеличиваем
        if (current.button.classList.contains('quantity-button-increment')) {
          // Сразу преобразуем результат в число
          current.input.value = parseInt(current.input.value) + 1
        }
      }
    })

    // Прослушиваем ввод данных
    document.addEventListener('input', function (event) {
      // quantityInputValidate(event);

      if (event.target.classList.contains('quantity-input')) {
        // Передаем инпут на проверку
        quantityInputValidate(event.target)
      }

      // Обновляем корзину
      updateCartCardsSummary()
      updateCartResult()
    })

    // Прослушиваем потерю фокуса у полей ввода
    document.addEventListener('focusout', function (event) {
      // Если потеря фокуса у инпута в форме
      if (
        // event.target.classList.contains("form-input") &&
        event.target.hasAttribute('required')
      ) {
        // Поле ввода
        const input = event.target
        // Подсказка для поля ввода
        const note = input.parentNode.querySelector('.form-input-note')

        // Если значение пустое
        if (input.value.length > 0) {
          input.classList.remove('error')

          // Проверка на пустоту
          if (note) {
            note.classList.remove('activated')
          }
        } else {
          input.classList.add('error')

          // Проверка на пустоту
          if (note) {
            // Показываем подсказку, если она есть
            note.classList.add('activated')
          }
        }
      }

      // Если потеря фокуса у инпута для добавления в корзину
      if (event.target.classList.contains('quantity-input')) {
        // Если значение пустое
        if (!event.target.closest('.quantity-input').value.length > 0) {
          // Задать 0
          event.target.closest('.quantity-input').value = 0
        }
      }
    })

    // Каталог - детальная страница товара
    function CatalogDetail() {
      const sliderThumbs = new Swiper('.catalog-detail-sliders-thumbs .swiper-container', {
        direction: 'vertical',
        loop: false,
        grabCursor: false,
        mousewheel: true,
        speed: 334,

        // Рассчитано чтобы высота слайда была 97пикс
        slidesPerView: 4.476,
        spaceBetween: 8,

        slidesPerGroup: 1,

        slideToClickedSlide: true,

        // Ленивая загрузка
        preloadImages: true,
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNext: true,
        },
        watchSlidesProgress: true,
        watchSlidesVisibility: true,

        // Адаптивность
        breakpoints: {
          0: { slidesPerView: 4, },
          374.5: { slidesPerView: 4, },
          539.5: { slidesPerView: 4, },
          767.5: { slidesPerView: 5, },
          1023.5: { slidesPerView: 4, },
          1199.5: { slidesPerView: 5, },
          1371.5: { slidesPerView: 4.476, },
        },
      })

      new Swiper('.catalog-detail-sliders-main .swiper-container', {
        direction: 'horizontal',
        loop: false,
        grabCursor: false,
        mousewheel: true,
        speed: 334,

        slidesPerView: 1,
        spaceBetween: 24,
        slidesPerGroup: 1,

        slideToClickedSlide: true,

        // Ленивая загрузка
        preloadImages: true,
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNext: true,
        },
        watchSlidesProgress: true,
        watchSlidesVisibility: true,

        thumbs: { swiper: sliderThumbs, },
      })
    }

    CatalogDetail()

    // Range slider для фильтров каталога
    const catalogRangeSlider = document.getElementById('catalog-inner-range-slider')
    // Проверка на пустоту
    if (catalogRangeSlider) {
      // Получаем минимальную и максимальную цену
      const prices = {
        min: parseInt(catalogRangeSlider.getAttribute('data-price-min')),
        max: parseInt(catalogRangeSlider.getAttribute('data-price-max')),
      }

      // Инициализация range slider'а
      noUiSlider.create(catalogRangeSlider, {
        start: [
          prices.min,
          prices.max,
        ],
        connect: true,
        range: {
          min: prices.min,
          max: prices.max,
        },
        tooltips: true,
        format: {
          from: function (value) {
            return parseInt(value)
          },
          to: function (value) {
            return parseInt(value)
          },
        },
      })

      // Связываем с полями ввода
      const inputMin = document.getElementById('catalog-inner-range-slider-min')
      const inputMax = document.getElementById('catalog-inner-range-slider-max')

      catalogRangeSlider.noUiSlider.on('update', function (values, handle) {
        const currentValue = values[handle]

        if (handle) {
          // Сразу приводим к целому числу
          inputMax.value = currentValue
        } else {
          // Сразу приводим к целому числу
          inputMin.value = currentValue
        }
      })

      inputMin.addEventListener('change', function () {
        catalogRangeSlider.noUiSlider.set([
          this.value,
          null,
        ])
      })

      inputMax.addEventListener('change', function () {
        catalogRangeSlider.noUiSlider.set([
          null,
          this.value,
        ])
      })
    }
  })
}

// Экспортируем скрипты приложения
export default App
