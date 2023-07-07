/******/
(function () { // webpackBootstrap
  /******/
  const __webpack_modules__ = ([
    /* 0 */,
    /* 1 */
    /***/ (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony import */
      const _libs_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2)
      /* harmony import */
      const _libs_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0__)
      /* harmony import */
      const _libs_lazyload_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3)
      /* harmony import */
      const _libs_fancybox_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4)
      /* harmony import */
      const _libs_pseudo_select_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5)
      /* harmony import */
      const _libs_imask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6)
      /* harmony import */
      const _libs_imask_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_libs_imask_js__WEBPACK_IMPORTED_MODULE_4__)
      /* harmony import */
      const _libs_nouislider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7)
      /* harmony import */
      const _libs_nouislider_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_libs_nouislider_js__WEBPACK_IMPORTED_MODULE_5__);
      // Импортируем слайдер


      // Импортируем ленивую загрузку


      // Импортируем фенсибокс


      // Импортируем псевдоселекты


      // Импортируем маску


      // Использовать строгий режим
      ('use strict')

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
            const links = document.querySelectorAll('.navigation-menu-categories-link')
            // Получаем контейнеры с подкатегориями
            const contents = document.querySelectorAll('.navigation-menu-category-content')

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
            const nav = document.querySelector('.navigation')
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
          document.querySelectorAll('[type=\'tel\']').forEach((element) => {
            const phoneMask = _libs_imask_js__WEBPACK_IMPORTED_MODULE_4___default()(element, { mask: '+{7}(000)000-00-00', })
          })

          // Активируем псевдоселект
          new _libs_pseudo_select_js__WEBPACK_IMPORTED_MODULE_3__.default({})

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

            const indexBannerMobile = new (_libs_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0___default())('.header-banner-mobile-slider .swiper-container', {
              ...generalSettings,
              loop: true,
              pagination: {
                el: '.header-banner-mobile-slider .swiper-pagination',
                clickable: true,
              },
            })

            const ourPartners = new (_libs_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0___default())('.our-partners-slider .swiper-container', {
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
                539.5: {
                  // slidesPerView: 2,
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
            const objectsOurMaterialsSlider = new (_libs_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0___default())('.objects-our-materials-slider .swiper-container', {
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
                1023.5: {
                  // slidesPerView: 2
                },
                1199.5: { slidesPerView: 2.2, },
              },
            })

            // Популярные товары
            const popularSlider = new (_libs_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0___default())('.popular-slider .swiper-container', {
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
          window.Fancybox = _libs_fancybox_esm_js__WEBPACK_IMPORTED_MODULE_2__.default

          // Ленивая загрузка
          const lazyLoadInstance = new _libs_lazyload_esm_js__WEBPACK_IMPORTED_MODULE_1__.default({
            // По-возможности использовать нативную ленивую загрузку
            use_native: true,
          })
          lazyLoadInstance.update()

          // Корзина

          // Обновить стоимость во всех карточках корзины
          function updateCartCardsSummary() {
            // Получаем все карточки на странице корзины
            const cards = document.querySelectorAll('[data-cart=card]')

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
            const resultGoods = document.querySelector('[data-cart=result-goods]')
            // Контейнер для финальный результат
            const resultFinal = document.querySelector('[data-cart=result-final]')
            // На текущий момент нет разницы между промежуточным и финальным результатом

            // Контейнер для количества товаров
            const resultQuantity = document.querySelector('[data-cart=result-quantity]')

            // Получаем все карточки на странице и сразу преобразуем коллекцию в массив
            const cardsAll = [ ...document.querySelectorAll('[data-cart=card]'), ]
            // Фильтруем карточки (не должно быть display:none)
            const cardsFiltered = cardsAll.filter((card) => getComputedStyle(card).display != 'none')

            // Получаем блок с заглушкой
            const thumbEmpty = document.querySelector('[data-cart=thumb-empty]')

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
                const targets = document.querySelectorAll(selector)
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
              document.querySelector('html').classList.toggle('locked')
              document.querySelector('body').classList.toggle('locked')
            }

            // Мобильное навигационное меню

            // Деактивируем внутри мобильного меню при клике на кнопку открытия/закрытия меню
            if (event.target.closest('.navigation-mobile-button')) {
              // Исполняем с небольшой задержкой
              setTimeout(() => {
                document.querySelectorAll('[data-menu-layer]').forEach((element) => {
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
                document.querySelector('.navigation-mobile-fullscreen').scroll({
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

              document.querySelectorAll('.tab').forEach((tab) => {
                tab.classList.remove('activated')
              })
              document.querySelectorAll('[data-tab]').forEach((tab) => {
                tab.classList.remove('activated')
              })

              document.querySelectorAll(targetSelector).forEach((element) => {
                element.classList.add('activated')
              })
              event.target.closest('[data-tab]').classList.add('activated')
            }

            // Небольшая анимация при добавлении в корзину
            if (event.target.closest('[data-add-to-cart]')) {
              const icons = [
                document.querySelector('.navigation-cart-quantity'),
                document.querySelector('.navigation-mobile-cart-quantity'),
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
              document.querySelector('.catalog-inner-aside').classList.add('activated')
              document.querySelector('.overlay').classList.add('activated')
              document.querySelector('html').classList.add('locked')
              document.querySelector('body').classList.add('locked')
            }
            // Закрываем фильтры при клике на оверлей
            if (event.target.closest('.overlay')) {
              document.querySelector('.catalog-inner-aside').classList.remove('activated')
              document.querySelector('.overlay').classList.remove('activated')
              document.querySelector('html').classList.remove('locked')
              document.querySelector('body').classList.remove('locked')
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
            const sliderThumbs = new (_libs_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0___default())('.catalog-detail-sliders-thumbs .swiper-container', {
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

            const sliderMain = new (_libs_swiper_bundle_js__WEBPACK_IMPORTED_MODULE_0___default())('.catalog-detail-sliders-main .swiper-container', {
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
            _libs_nouislider_js__WEBPACK_IMPORTED_MODULE_5___default().create(catalogRangeSlider, {
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
      /* harmony default export */
      __webpack_exports__['default'] = (App())


      /***/
    }),
    /* 2 */
    /***/ (function (module) {

      /**
       * Swiper 8.2.2
       * Most modern mobile touch slider and framework with hardware accelerated transitions
       * https://swiperjs.com
       *
       * Copyright 2014-2022 Vladimir Kharlampidi
       *
       * Released under the MIT License
       *
       * Released on: June 1, 2022
       */

      (function (global, factory) {
        true
          ? (module.exports = factory())
          : 0
      })(this, function () {
        'use strict'

        /**
         * SSR Window 4.0.2
         * Better handling for window object in SSR environment
         * https://github.com/nolimits4web/ssr-window
         *
         * Copyright 2021, Vladimir Kharlampidi
         *
         * Licensed under MIT
         *
         * Released on: December 13, 2021
         */

        /* eslint-disable no-param-reassign */
        function isObject$1(obj) {
          return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object
        }

        function extend$1(target, src) {
          if (target === void 0) {
            target = {}
          }

          if (src === void 0) {
            src = {}
          }

          Object.keys(src).forEach((key) => {
            if (typeof target[key] === 'undefined') target[key] = src[key]
            else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
              extend$1(target[key], src[key])
            }
          })
        }

        const ssrDocument = {
          body: {},

          addEventListener() {
          },

          removeEventListener() {
          },

          activeElement: {
            blur() {
            },

            nodeName: '',
          },

          querySelector() {
            return null
          },

          querySelectorAll() {
            return []
          },

          getElementById() {
            return null
          },

          createEvent() {
            return {
              initEvent() {
              },
            }
          },

          createElement() {
            return {
              children: [],
              childNodes: [],
              style: {},

              setAttribute() {
              },

              getElementsByTagName() {
                return []
              },
            }
          },

          createElementNS() {
            return {}
          },

          importNode() {
            return null
          },

          location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: '',
          },
        }

        function getDocument() {
          const doc = typeof document !== 'undefined' ? document : {}
          extend$1(doc, ssrDocument)
          return doc
        }

        const ssrWindow = {
          document: ssrDocument,
          navigator: { userAgent: '', },
          location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: '',
          },
          history: {
            replaceState() {
            },

            pushState() {
            },

            go() {
            },

            back() {
            },
          },
          CustomEvent: function CustomEvent() {
            return this
          },

          addEventListener() {
          },

          removeEventListener() {
          },

          getComputedStyle() {
            return {
              getPropertyValue() {
                return ''
              },
            }
          },

          Image() {
          },

          Date() {
          },

          screen: {},

          setTimeout() {
          },

          clearTimeout() {
          },

          matchMedia() {
            return {}
          },

          requestAnimationFrame(callback) {
            if (typeof setTimeout === 'undefined') {
              callback()
              return null
            }

            return setTimeout(callback, 0)
          },

          cancelAnimationFrame(id) {
            if (typeof setTimeout === 'undefined') {
              return
            }

            clearTimeout(id)
          },
        }

        function getWindow() {
          const win = typeof window !== 'undefined' ? window : {}
          extend$1(win, ssrWindow)
          return win
        }

        /**
         * Dom7 4.0.4
         * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
         * https://framework7.io/docs/dom7.html
         *
         * Copyright 2022, Vladimir Kharlampidi
         *
         * Licensed under MIT
         *
         * Released on: January 11, 2022
         */

        /* eslint-disable no-proto */

        function makeReactive(obj) {
          const proto = obj.__proto__
          Object.defineProperty(obj, '__proto__', {
            get() {
              return proto
            },

            set(value) {
              proto.__proto__ = value
            },
          })
        }

        class Dom7 extends Array {
          constructor(items) {
            if (typeof items === 'number') {
              super(items)
            } else {
              super(...(items || []))
              makeReactive(this)
            }
          }
        }

        function arrayFlat(arr) {
          if (arr === void 0) {
            arr = []
          }

          const res = []
          arr.forEach((el) => {
            if (Array.isArray(el)) {
              res.push(...arrayFlat(el))
            } else {
              res.push(el)
            }
          })
          return res
        }

        function arrayFilter(arr, callback) {
          return Array.prototype.filter.call(arr, callback)
        }

        function arrayUnique(arr) {
          const uniqueArray = []

          for (let i = 0; i < arr.length; i += 1) {
            if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i])
          }

          return uniqueArray
        }

        function qsa(selector, context) {
          if (typeof selector !== 'string') {
            return [ selector, ]
          }

          const a = []
          const res = context.querySelectorAll(selector)

          for (let i = 0; i < res.length; i += 1) {
            a.push(res[i])
          }

          return a
        }

        function $(selector, context) {
          const window = getWindow()
          const document = getDocument()
          let arr = []

          if (!context && selector instanceof Dom7) {
            return selector
          }

          if (!selector) {
            return new Dom7(arr)
          }

          if (typeof selector === 'string') {
            const html = selector.trim()

            if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
              let toCreate = 'div'
              if (html.indexOf('<li') === 0) toCreate = 'ul'
              if (html.indexOf('<tr') === 0) toCreate = 'tbody'
              if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr'
              if (html.indexOf('<tbody') === 0) toCreate = 'table'
              if (html.indexOf('<option') === 0) toCreate = 'select'
              const tempParent = document.createElement(toCreate)
              tempParent.innerHTML = html

              for (let i = 0; i < tempParent.childNodes.length; i += 1) {
                arr.push(tempParent.childNodes[i])
              }
            } else {
              arr = qsa(selector.trim(), context || document)
            } // arr = qsa(selector, document);
          } else if (selector.nodeType || selector === window || selector === document) {
            arr.push(selector)
          } else if (Array.isArray(selector)) {
            if (selector instanceof Dom7) return selector
            arr = selector
          }

          return new Dom7(arrayUnique(arr))
        }

        $.fn = Dom7.prototype // eslint-disable-next-line

        function addClass() {
          for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
            classes[_key] = arguments[_key]
          }

          const classNames = arrayFlat(classes.map((c) => c.split(' ')))
          this.forEach((el) => {
            el.classList.add(...classNames)
          })
          return this
        }

        function removeClass() {
          for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            classes[_key2] = arguments[_key2]
          }

          const classNames = arrayFlat(classes.map((c) => c.split(' ')))
          this.forEach((el) => {
            el.classList.remove(...classNames)
          })
          return this
        }

        function toggleClass() {
          for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            classes[_key3] = arguments[_key3]
          }

          const classNames = arrayFlat(classes.map((c) => c.split(' ')))
          this.forEach((el) => {
            classNames.forEach((className) => {
              el.classList.toggle(className)
            })
          })
        }

        function hasClass() {
          for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            classes[_key4] = arguments[_key4]
          }

          const classNames = arrayFlat(classes.map((c) => c.split(' ')))
          return (
            arrayFilter(this, (el) => {
              return classNames.filter((className) => el.classList.contains(className)).length > 0
            }).length > 0
          )
        }

        function attr(attrs, value) {
          if (arguments.length === 1 && typeof attrs === 'string') {
            // Get attr
            if (this[0]) return this[0].getAttribute(attrs)
            return undefined
          } // Set attrs

          for (let i = 0; i < this.length; i += 1) {
            if (arguments.length === 2) {
              // String
              this[i].setAttribute(attrs, value)
            } else {
              // Object
              for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName]
                this[i].setAttribute(attrName, attrs[attrName])
              }
            }
          }

          return this
        }

        function removeAttr(attr) {
          for (let i = 0; i < this.length; i += 1) {
            this[i].removeAttribute(attr)
          }

          return this
        }

        function transform(transform) {
          for (let i = 0; i < this.length; i += 1) {
            this[i].style.transform = transform
          }

          return this
        }

        function transition$1(duration) {
          for (let i = 0; i < this.length; i += 1) {
            this[i].style.transitionDuration = typeof duration !== 'string' ? `${ duration }ms` : duration
          }

          return this
        }

        function on() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5]
          }

          let [
            eventType,
            targetSelector,
            listener,
            capture,
          ] = args

          if (typeof args[1] === 'function') {
            [
              eventType,
              listener,
              capture,
            ] = args
            targetSelector = undefined
          }

          if (!capture) capture = false

          function handleLiveEvent(e) {
            const target = e.target
            if (!target) return
            const eventData = e.target.dom7EventData || []

            if (eventData.indexOf(e) < 0) {
              eventData.unshift(e)
            }

            if ($(target).is(targetSelector)) listener.apply(target, eventData)
            else {
              const parents = $(target).parents(); // eslint-disable-line

              for (let k = 0; k < parents.length; k += 1) {
                if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData)
              }
            }
          }

          function handleEvent(e) {
            const eventData = e && e.target ? e.target.dom7EventData || [] : []

            if (eventData.indexOf(e) < 0) {
              eventData.unshift(e)
            }

            listener.apply(this, eventData)
          }

          const events = eventType.split(' ')
          let j

          for (let i = 0; i < this.length; i += 1) {
            const el = this[i]

            if (!targetSelector) {
              for (j = 0; j < events.length; j += 1) {
                const event = events[j]
                if (!el.dom7Listeners) el.dom7Listeners = {}
                if (!el.dom7Listeners[event]) el.dom7Listeners[event] = []
                el.dom7Listeners[event].push({
                  listener,
                  proxyListener: handleEvent,
                })
                el.addEventListener(event, handleEvent, capture)
              }
            } else {
              // Live events
              for (j = 0; j < events.length; j += 1) {
                const event = events[j]
                if (!el.dom7LiveListeners) el.dom7LiveListeners = {}
                if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = []
                el.dom7LiveListeners[event].push({
                  listener,
                  proxyListener: handleLiveEvent,
                })
                el.addEventListener(event, handleLiveEvent, capture)
              }
            }
          }

          return this
        }

        function off() {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6]
          }

          let [
            eventType,
            targetSelector,
            listener,
            capture,
          ] = args

          if (typeof args[1] === 'function') {
            [
              eventType,
              listener,
              capture,
            ] = args
            targetSelector = undefined
          }

          if (!capture) capture = false
          const events = eventType.split(' ')

          for (let i = 0; i < events.length; i += 1) {
            const event = events[i]

            for (let j = 0; j < this.length; j += 1) {
              const el = this[j]
              let handlers

              if (!targetSelector && el.dom7Listeners) {
                handlers = el.dom7Listeners[event]
              } else if (targetSelector && el.dom7LiveListeners) {
                handlers = el.dom7LiveListeners[event]
              }

              if (handlers && handlers.length) {
                for (let k = handlers.length - 1; k >= 0; k -= 1) {
                  const handler = handlers[k]

                  if (listener && handler.listener === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture)
                    handlers.splice(k, 1)
                  } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture)
                    handlers.splice(k, 1)
                  } else if (!listener) {
                    el.removeEventListener(event, handler.proxyListener, capture)
                    handlers.splice(k, 1)
                  }
                }
              }
            }
          }

          return this
        }

        function trigger() {
          const window = getWindow()

          for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9]
          }

          const events = args[0].split(' ')
          const eventData = args[1]

          for (let i = 0; i < events.length; i += 1) {
            const event = events[i]

            for (let j = 0; j < this.length; j += 1) {
              const el = this[j]

              if (window.CustomEvent) {
                const evt = new window.CustomEvent(event, {
                  detail: eventData,
                  bubbles: true,
                  cancelable: true,
                })
                el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0)
                el.dispatchEvent(evt)
                el.dom7EventData = []
                delete el.dom7EventData
              }
            }
          }

          return this
        }

        function transitionEnd$1(callback) {
          const dom = this

          function fireCallBack(e) {
            if (e.target !== this) return
            callback.call(this, e)
            dom.off('transitionend', fireCallBack)
          }

          if (callback) {
            dom.on('transitionend', fireCallBack)
          }

          return this
        }

        function outerWidth(includeMargins) {
          if (this.length > 0) {
            if (includeMargins) {
              const styles = this.styles()
              return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'))
            }

            return this[0].offsetWidth
          }

          return null
        }

        function outerHeight(includeMargins) {
          if (this.length > 0) {
            if (includeMargins) {
              const styles = this.styles()
              return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'))
            }

            return this[0].offsetHeight
          }

          return null
        }

        function offset() {
          if (this.length > 0) {
            const window = getWindow()
            const document = getDocument()
            const el = this[0]
            const box = el.getBoundingClientRect()
            const body = document.body
            const clientTop = el.clientTop || body.clientTop || 0
            const clientLeft = el.clientLeft || body.clientLeft || 0
            const scrollTop = el === window ? window.scrollY : el.scrollTop
            const scrollLeft = el === window ? window.scrollX : el.scrollLeft
            return {
              top: box.top + scrollTop - clientTop,
              left: box.left + scrollLeft - clientLeft,
            }
          }

          return null
        }

        function styles() {
          const window = getWindow()
          if (this[0]) return window.getComputedStyle(this[0], null)
          return {}
        }

        function css(props, value) {
          const window = getWindow()
          let i

          if (arguments.length === 1) {
            if (typeof props === 'string') {
              // .css('width')
              if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props)
            } else {
              // .css({ width: '100px' })
              for (i = 0; i < this.length; i += 1) {
                for (const prop in props) {
                  this[i].style[prop] = props[prop]
                }
              }

              return this
            }
          }

          if (arguments.length === 2 && typeof props === 'string') {
            // .css('width', '100px')
            for (i = 0; i < this.length; i += 1) {
              this[i].style[props] = value
            }

            return this
          }

          return this
        }

        function each(callback) {
          if (!callback) return this
          this.forEach((el, index) => {
            callback.apply(el, [
              el,
              index,
            ])
          })
          return this
        }

        function filter(callback) {
          const result = arrayFilter(this, callback)
          return $(result)
        }

        function html(html) {
          if (typeof html === 'undefined') {
            return this[0] ? this[0].innerHTML : null
          }

          for (let i = 0; i < this.length; i += 1) {
            this[i].innerHTML = html
          }

          return this
        }

        function text(text) {
          if (typeof text === 'undefined') {
            return this[0] ? this[0].textContent.trim() : null
          }

          for (let i = 0; i < this.length; i += 1) {
            this[i].textContent = text
          }

          return this
        }

        function is(selector) {
          const window = getWindow()
          const document = getDocument()
          const el = this[0]
          let compareWith
          let i
          if (!el || typeof selector === 'undefined') return false

          if (typeof selector === 'string') {
            if (el.matches) return el.matches(selector)
            if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector)
            if (el.msMatchesSelector) return el.msMatchesSelector(selector)
            compareWith = $(selector)

            for (i = 0; i < compareWith.length; i += 1) {
              if (compareWith[i] === el) return true
            }

            return false
          }

          if (selector === document) {
            return el === document
          }

          if (selector === window) {
            return el === window
          }

          if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [ selector, ] : selector

            for (i = 0; i < compareWith.length; i += 1) {
              if (compareWith[i] === el) return true
            }

            return false
          }

          return false
        }

        function index() {
          let child = this[0]
          let i

          if (child) {
            i = 0 // eslint-disable-next-line

            while ((child = child.previousSibling) !== null) {
              if (child.nodeType === 1) i += 1
            }

            return i
          }

          return undefined
        }

        function eq(index) {
          if (typeof index === 'undefined') return this
          const length = this.length

          if (index > length - 1) {
            return $([])
          }

          if (index < 0) {
            const returnIndex = length + index
            if (returnIndex < 0) return $([])
            return $([ this[returnIndex], ])
          }

          return $([ this[index], ])
        }

        function append() {
          let newChild
          const document = getDocument()

          for (let k = 0; k < arguments.length; k += 1) {
            newChild = k < 0 || arguments.length <= k ? undefined : arguments[k]

            for (let i = 0; i < this.length; i += 1) {
              if (typeof newChild === 'string') {
                const tempDiv = document.createElement('div')
                tempDiv.innerHTML = newChild

                while (tempDiv.firstChild) {
                  this[i].appendChild(tempDiv.firstChild)
                }
              } else if (newChild instanceof Dom7) {
                for (let j = 0; j < newChild.length; j += 1) {
                  this[i].appendChild(newChild[j])
                }
              } else {
                this[i].appendChild(newChild)
              }
            }
          }

          return this
        }

        function prepend(newChild) {
          const document = getDocument()
          let i
          let j

          for (i = 0; i < this.length; i += 1) {
            if (typeof newChild === 'string') {
              const tempDiv = document.createElement('div')
              tempDiv.innerHTML = newChild

              for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0])
              }
            } else if (newChild instanceof Dom7) {
              for (j = 0; j < newChild.length; j += 1) {
                this[i].insertBefore(newChild[j], this[i].childNodes[0])
              }
            } else {
              this[i].insertBefore(newChild, this[i].childNodes[0])
            }
          }

          return this
        }

        function next(selector) {
          if (this.length > 0) {
            if (selector) {
              if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
                return $([ this[0].nextElementSibling, ])
              }

              return $([])
            }

            if (this[0].nextElementSibling) return $([ this[0].nextElementSibling, ])
            return $([])
          }

          return $([])
        }

        function nextAll(selector) {
          const nextEls = []
          let el = this[0]
          if (!el) return $([])

          while (el.nextElementSibling) {
            const next = el.nextElementSibling; // eslint-disable-line

            if (selector) {
              if ($(next).is(selector)) nextEls.push(next)
            } else nextEls.push(next)

            el = next
          }

          return $(nextEls)
        }

        function prev(selector) {
          if (this.length > 0) {
            const el = this[0]

            if (selector) {
              if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
                return $([ el.previousElementSibling, ])
              }

              return $([])
            }

            if (el.previousElementSibling) return $([ el.previousElementSibling, ])
            return $([])
          }

          return $([])
        }

        function prevAll(selector) {
          const prevEls = []
          let el = this[0]
          if (!el) return $([])

          while (el.previousElementSibling) {
            const prev = el.previousElementSibling; // eslint-disable-line

            if (selector) {
              if ($(prev).is(selector)) prevEls.push(prev)
            } else prevEls.push(prev)

            el = prev
          }

          return $(prevEls)
        }

        function parent(selector) {
          const parents = []; // eslint-disable-line

          for (let i = 0; i < this.length; i += 1) {
            if (this[i].parentNode !== null) {
              if (selector) {
                if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode)
              } else {
                parents.push(this[i].parentNode)
              }
            }
          }

          return $(parents)
        }

        function parents(selector) {
          const parents = []; // eslint-disable-line

          for (let i = 0; i < this.length; i += 1) {
            let parent = this[i].parentNode; // eslint-disable-line

            while (parent) {
              if (selector) {
                if ($(parent).is(selector)) parents.push(parent)
              } else {
                parents.push(parent)
              }

              parent = parent.parentNode
            }
          }

          return $(parents)
        }

        function closest(selector) {
          let closest = this; // eslint-disable-line

          if (typeof selector === 'undefined') {
            return $([])
          }

          if (!closest.is(selector)) {
            closest = closest.parents(selector).eq(0)
          }

          return closest
        }

        function find(selector) {
          const foundElements = []

          for (let i = 0; i < this.length; i += 1) {
            const found = this[i].querySelectorAll(selector)

            for (let j = 0; j < found.length; j += 1) {
              foundElements.push(found[j])
            }
          }

          return $(foundElements)
        }

        function children(selector) {
          const children = []; // eslint-disable-line

          for (let i = 0; i < this.length; i += 1) {
            const childNodes = this[i].children

            for (let j = 0; j < childNodes.length; j += 1) {
              if (!selector || $(childNodes[j]).is(selector)) {
                children.push(childNodes[j])
              }
            }
          }

          return $(children)
        }

        function remove() {
          for (let i = 0; i < this.length; i += 1) {
            if (this[i].parentNode) this[i].parentNode.removeChild(this[i])
          }

          return this
        }

        const Methods = {
          addClass,
          removeClass,
          hasClass,
          toggleClass,
          attr,
          removeAttr,
          transform,
          transition: transition$1,
          on,
          off,
          trigger,
          transitionEnd: transitionEnd$1,
          outerWidth,
          outerHeight,
          styles,
          offset,
          css,
          each,
          html,
          text,
          is,
          index,
          eq,
          append,
          prepend,
          next,
          nextAll,
          prev,
          prevAll,
          parent,
          parents,
          closest,
          find,
          children,
          filter,
          remove,
        }
        Object.keys(Methods).forEach((methodName) => {
          Object.defineProperty($.fn, methodName, {
            value: Methods[methodName],
            writable: true,
          })
        })

        function deleteProps(obj) {
          const object = obj
          Object.keys(object).forEach((key) => {
            try {
              object[key] = null
            } catch (e) {
              // no getter for object
            }

            try {
              delete object[key]
            } catch (e) {
              // something got wrong
            }
          })
        }

        function nextTick(callback, delay) {
          if (delay === void 0) {
            delay = 0
          }

          return setTimeout(callback, delay)
        }

        function now() {
          return Date.now()
        }

        function getComputedStyle$1(el) {
          const window = getWindow()
          let style

          if (window.getComputedStyle) {
            style = window.getComputedStyle(el, null)
          }

          if (!style && el.currentStyle) {
            style = el.currentStyle
          }

          if (!style) {
            style = el.style
          }

          return style
        }

        function getTranslate(el, axis) {
          if (axis === void 0) {
            axis = 'x'
          }

          const window = getWindow()
          let matrix
          let curTransform
          let transformMatrix
          const curStyle = getComputedStyle$1(el)

          if (window.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform

            if (curTransform.split(',').length > 6) {
              curTransform = curTransform
                .split(', ')
                .map((a) => a.replace(',', '.'))
                .join(', ')
            } // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case

            transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform)
          } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')
            matrix = transformMatrix.toString().split(',')
          }

          if (axis === 'x') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41 // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[12]) // Normal Browsers
            else curTransform = parseFloat(matrix[4])
          }

          if (axis === 'y') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42 // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[13]) // Normal Browsers
            else curTransform = parseFloat(matrix[5])
          }

          return curTransform || 0
        }

        function isObject(o) {
          return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object'
        }

        function isNode(node) {
          // eslint-disable-next-line
          if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
            return node instanceof HTMLElement
          }

          return node && (node.nodeType === 1 || node.nodeType === 11)
        }

        function extend() {
          const to = Object(arguments.length <= 0 ? undefined : arguments[0])
          const noExtend = [
            '__proto__',
            'constructor',
            'prototype',
          ]

          for (let i = 1; i < arguments.length; i += 1) {
            const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i]

            if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
              const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0)

              for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                const nextKey = keysArray[nextIndex]
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey)

                if (desc !== undefined && desc.enumerable) {
                  if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                    if (nextSource[nextKey].__swiper__) {
                      to[nextKey] = nextSource[nextKey]
                    } else {
                      extend(to[nextKey], nextSource[nextKey])
                    }
                  } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                    to[nextKey] = {}

                    if (nextSource[nextKey].__swiper__) {
                      to[nextKey] = nextSource[nextKey]
                    } else {
                      extend(to[nextKey], nextSource[nextKey])
                    }
                  } else {
                    to[nextKey] = nextSource[nextKey]
                  }
                }
              }
            }
          }

          return to
        }

        function setCSSProperty(el, varName, varValue) {
          el.style.setProperty(varName, varValue)
        }

        function animateCSSModeScroll(_ref) {
          const { swiper, targetPosition, side, } = _ref
          const window = getWindow()
          const startPosition = -swiper.translate
          let startTime = null
          let time
          const duration = swiper.params.speed
          swiper.wrapperEl.style.scrollSnapType = 'none'
          window.cancelAnimationFrame(swiper.cssModeFrameID)
          const dir = targetPosition > startPosition ? 'next' : 'prev'

          const isOutOfBound = (current, target) => {
            return (dir === 'next' && current >= target) || (dir === 'prev' && current <= target)
          }

          const animate = () => {
            time = new Date().getTime()

            if (startTime === null) {
              startTime = time
            }

            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0)
            const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2
            let currentPosition = startPosition + easeProgress * (targetPosition - startPosition)

            if (isOutOfBound(currentPosition, targetPosition)) {
              currentPosition = targetPosition
            }

            swiper.wrapperEl.scrollTo({ [side]: currentPosition, })

            if (isOutOfBound(currentPosition, targetPosition)) {
              swiper.wrapperEl.style.overflow = 'hidden'
              swiper.wrapperEl.style.scrollSnapType = ''
              setTimeout(() => {
                swiper.wrapperEl.style.overflow = ''
                swiper.wrapperEl.scrollTo({ [side]: currentPosition, })
              })
              window.cancelAnimationFrame(swiper.cssModeFrameID)
              return
            }

            swiper.cssModeFrameID = window.requestAnimationFrame(animate)
          }

          animate()
        }

        let support

        function calcSupport() {
          const window = getWindow()
          const document = getDocument()
          return {
            smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
            touch: !!('ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
            passiveListener: (function checkPassiveListener() {
              let supportsPassive = false

              try {
                const opts = Object.defineProperty({}, 'passive', {
                  // eslint-disable-next-line
                  get() {
                    supportsPassive = true
                  },
                })
                window.addEventListener('testPassiveListener', null, opts)
              } catch (e) {
                // No support
              }

              return supportsPassive
            })(),
            gestures: (function checkGestures() {
              return 'ongesturestart' in window
            })(),
          }
        }

        function getSupport() {
          if (!support) {
            support = calcSupport()
          }

          return support
        }

        let deviceCached

        function calcDevice(_temp) {
          const { userAgent, } = _temp === void 0 ? {} : _temp
          const support = getSupport()
          const window = getWindow()
          const platform = window.navigator.platform
          const ua = userAgent || window.navigator.userAgent
          const device = {
            ios: false,
            android: false,
          }
          const screenWidth = window.screen.width
          const screenHeight = window.screen.height
          const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

          let ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
          const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
          const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
          const windows = platform === 'Win32'
          let macos = platform === 'MacIntel' // iPadOs 13 fix

          const iPadScreens = [
            '1024x1366',
            '1366x1024',
            '834x1194',
            '1194x834',
            '834x1112',
            '1112x834',
            '768x1024',
            '1024x768',
            '820x1180',
            '1180x820',
            '810x1080',
            '1080x810',
          ]

          if (!ipad && macos && support.touch && iPadScreens.indexOf(`${ screenWidth }x${ screenHeight }`) >= 0) {
            ipad = ua.match(/(Version)\/([\d.]+)/)
            if (!ipad) ipad = [
              0,
              1,
              '13_0_0',
            ]
            macos = false
          } // Android

          if (android && !windows) {
            device.os = 'android'
            device.android = true
          }

          if (ipad || iphone || ipod) {
            device.os = 'ios'
            device.ios = true
          } // Export object

          return device
        }

        function getDevice(overrides) {
          if (overrides === void 0) {
            overrides = {}
          }

          if (!deviceCached) {
            deviceCached = calcDevice(overrides)
          }

          return deviceCached
        }

        let browser

        function calcBrowser() {
          const window = getWindow()

          function isSafari() {
            const ua = window.navigator.userAgent.toLowerCase()
            return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0
          }

          return {
            isSafari: isSafari(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
          }
        }

        function getBrowser() {
          if (!browser) {
            browser = calcBrowser()
          }

          return browser
        }

        function Resize(_ref) {
          const { swiper, on, emit, } = _ref
          const window = getWindow()
          let observer = null
          let animationFrame = null

          const resizeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return
            emit('beforeResize')
            emit('resize')
          }

          const createObserver = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return
            observer = new ResizeObserver((entries) => {
              animationFrame = window.requestAnimationFrame(() => {
                const { width, height, } = swiper
                let newWidth = width
                let newHeight = height
                entries.forEach((_ref2) => {
                  const { contentBoxSize, contentRect, target, } = _ref2
                  if (target && target !== swiper.el) return
                  newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize
                  newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize
                })

                if (newWidth !== width || newHeight !== height) {
                  resizeHandler()
                }
              })
            })
            observer.observe(swiper.el)
          }

          const removeObserver = () => {
            if (animationFrame) {
              window.cancelAnimationFrame(animationFrame)
            }

            if (observer && observer.unobserve && swiper.el) {
              observer.unobserve(swiper.el)
              observer = null
            }
          }

          const orientationChangeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return
            emit('orientationchange')
          }

          on('init', () => {
            if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
              createObserver()
              return
            }

            window.addEventListener('resize', resizeHandler)
            window.addEventListener('orientationchange', orientationChangeHandler)
          })
          on('destroy', () => {
            removeObserver()
            window.removeEventListener('resize', resizeHandler)
            window.removeEventListener('orientationchange', orientationChangeHandler)
          })
        }

        function Observer(_ref) {
          const { swiper, extendParams, on, emit, } = _ref
          const observers = []
          const window = getWindow()

          const attach = function (target, options) {
            if (options === void 0) {
              options = {}
            }

            const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver
            const observer = new ObserverFunc((mutations) => {
              // The observerUpdate event should only be triggered
              // once despite the number of mutations.  Additional
              // triggers are redundant and are very costly
              if (mutations.length === 1) {
                emit('observerUpdate', mutations[0])
                return
              }

              const observerUpdate = function observerUpdate() {
                emit('observerUpdate', mutations[0])
              }

              if (window.requestAnimationFrame) {
                window.requestAnimationFrame(observerUpdate)
              } else {
                window.setTimeout(observerUpdate, 0)
              }
            })
            observer.observe(target, {
              attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
              childList: typeof options.childList === 'undefined' ? true : options.childList,
              characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
            })
            observers.push(observer)
          }

          const init = () => {
            if (!swiper.params.observer) return

            if (swiper.params.observeParents) {
              const containerParents = swiper.$el.parents()

              for (let i = 0; i < containerParents.length; i += 1) {
                attach(containerParents[i])
              }
            } // Observe container

            attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren, }) // Observe wrapper

            attach(swiper.$wrapperEl[0], { attributes: false, })
          }

          const destroy = () => {
            observers.forEach((observer) => {
              observer.disconnect()
            })
            observers.splice(0, observers.length)
          }

          extendParams({
            observer: false,
            observeParents: false,
            observeSlideChildren: false,
          })
          on('init', init)
          on('destroy', destroy)
        }

        /* eslint-disable no-underscore-dangle */
        const eventsEmitter = {
          on(events, handler, priority) {
            const self = this
            if (!self.eventsListeners || self.destroyed) return self
            if (typeof handler !== 'function') return self
            const method = priority ? 'unshift' : 'push'
            events.split(' ').forEach((event) => {
              if (!self.eventsListeners[event]) self.eventsListeners[event] = []
              self.eventsListeners[event][method](handler)
            })
            return self
          },

          once(events, handler, priority) {
            const self = this
            if (!self.eventsListeners || self.destroyed) return self
            if (typeof handler !== 'function') return self

            function onceHandler() {
              self.off(events, onceHandler)

              if (onceHandler.__emitterProxy) {
                delete onceHandler.__emitterProxy
              }

              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key]
              }

              handler.apply(self, args)
            }

            onceHandler.__emitterProxy = handler
            return self.on(events, onceHandler, priority)
          },

          onAny(handler, priority) {
            const self = this
            if (!self.eventsListeners || self.destroyed) return self
            if (typeof handler !== 'function') return self
            const method = priority ? 'unshift' : 'push'

            if (self.eventsAnyListeners.indexOf(handler) < 0) {
              self.eventsAnyListeners[method](handler)
            }

            return self
          },

          offAny(handler) {
            const self = this
            if (!self.eventsListeners || self.destroyed) return self
            if (!self.eventsAnyListeners) return self
            const index = self.eventsAnyListeners.indexOf(handler)

            if (index >= 0) {
              self.eventsAnyListeners.splice(index, 1)
            }

            return self
          },

          off(events, handler) {
            const self = this
            if (!self.eventsListeners || self.destroyed) return self
            if (!self.eventsListeners) return self
            events.split(' ').forEach((event) => {
              if (typeof handler === 'undefined') {
                self.eventsListeners[event] = []
              } else if (self.eventsListeners[event]) {
                self.eventsListeners[event].forEach((eventHandler, index) => {
                  if (eventHandler === handler || (eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler)) {
                    self.eventsListeners[event].splice(index, 1)
                  }
                })
              }
            })
            return self
          },

          emit() {
            const self = this
            if (!self.eventsListeners || self.destroyed) return self
            if (!self.eventsListeners) return self
            let events
            let data
            let context

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2]
            }

            if (typeof args[0] === 'string' || Array.isArray(args[0])) {
              events = args[0]
              data = args.slice(1, args.length)
              context = self
            } else {
              events = args[0].events
              data = args[0].data
              context = args[0].context || self
            }

            data.unshift(context)
            const eventsArray = Array.isArray(events) ? events : events.split(' ')
            eventsArray.forEach((event) => {
              if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
                self.eventsAnyListeners.forEach((eventHandler) => {
                  eventHandler.apply(context, [
                    event,
                    ...data,
                  ])
                })
              }

              if (self.eventsListeners && self.eventsListeners[event]) {
                self.eventsListeners[event].forEach((eventHandler) => {
                  eventHandler.apply(context, data)
                })
              }
            })
            return self
          },
        }

        function updateSize() {
          const swiper = this
          let width
          let height
          const $el = swiper.$el

          if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
            width = swiper.params.width
          } else {
            width = $el[0].clientWidth
          }

          if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
            height = swiper.params.height
          } else {
            height = $el[0].clientHeight
          }

          if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
            return
          } // Subtract paddings

          width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10)
          height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10)
          if (Number.isNaN(width)) width = 0
          if (Number.isNaN(height)) height = 0
          Object.assign(swiper, {
            width,
            height,
            size: swiper.isHorizontal() ? width : height,
          })
        }

        function updateSlides() {
          const swiper = this

          function getDirectionLabel(property) {
            if (swiper.isHorizontal()) {
              return property
            } // prettier-ignore

            return {
              width: 'height',
              'margin-top': 'margin-left',
              'margin-bottom ': 'margin-right',
              'margin-left': 'margin-top',
              'margin-right': 'margin-bottom',
              'padding-left': 'padding-top',
              'padding-right': 'padding-bottom',
              marginRight: 'marginBottom',
            }[property]
          }

          function getDirectionPropertyValue(node, label) {
            return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0)
          }

          const params = swiper.params
          const { $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL, } = swiper
          const isVirtual = swiper.virtual && params.virtual.enabled
          const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length
          const slides = $wrapperEl.children(`.${ swiper.params.slideClass }`)
          const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length
          let snapGrid = []
          const slidesGrid = []
          const slidesSizesGrid = []
          let offsetBefore = params.slidesOffsetBefore

          if (typeof offsetBefore === 'function') {
            offsetBefore = params.slidesOffsetBefore.call(swiper)
          }

          let offsetAfter = params.slidesOffsetAfter

          if (typeof offsetAfter === 'function') {
            offsetAfter = params.slidesOffsetAfter.call(swiper)
          }

          const previousSnapGridLength = swiper.snapGrid.length
          const previousSlidesGridLength = swiper.slidesGrid.length
          let spaceBetween = params.spaceBetween
          let slidePosition = -offsetBefore
          let prevSlideSize = 0
          let index = 0

          if (typeof swiperSize === 'undefined') {
            return
          }

          if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize
          }

          swiper.virtualSize = -spaceBetween // reset margins

          if (rtl)
            slides.css({
              marginLeft: '',
              marginBottom: '',
              marginTop: '',
            })
          else
            slides.css({
              marginRight: '',
              marginBottom: '',
              marginTop: '',
            }) // reset cssMode offsets

          if (params.centeredSlides && params.cssMode) {
            setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '')
            setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '')
          }

          const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid

          if (gridEnabled) {
            swiper.grid.initSlides(slidesLength)
          } // Calc slides

          let slideSize
          const shouldResetSlideSize =
            params.slidesPerView === 'auto' &&
            params.breakpoints &&
            Object.keys(params.breakpoints).filter((key) => {
              return typeof params.breakpoints[key].slidesPerView !== 'undefined'
            }).length > 0

          for (let i = 0; i < slidesLength; i += 1) {
            slideSize = 0
            const slide = slides.eq(i)

            if (gridEnabled) {
              swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel)
            }

            if (slide.css("display") === "none") continue; // eslint-disable-line

            if (params.slidesPerView === 'auto') {
              if (shouldResetSlideSize) {
                slides[i].style[getDirectionLabel('width')] = ''
              }

              const slideStyles = getComputedStyle(slide[0])
              const currentTransform = slide[0].style.transform
              const currentWebKitTransform = slide[0].style.webkitTransform

              if (currentTransform) {
                slide[0].style.transform = 'none'
              }

              if (currentWebKitTransform) {
                slide[0].style.webkitTransform = 'none'
              }

              if (params.roundLengths) {
                slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true)
              } else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, "width");
                const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left')
                const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right')
                const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left')
                const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right')
                const boxSizing = slideStyles.getPropertyValue('box-sizing')

                if (boxSizing && boxSizing === 'border-box') {
                  slideSize = width + marginLeft + marginRight
                } else {
                  const { clientWidth, offsetWidth, } = slide[0]
                  slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth)
                }
              }

              if (currentTransform) {
                slide[0].style.transform = currentTransform
              }

              if (currentWebKitTransform) {
                slide[0].style.webkitTransform = currentWebKitTransform
              }

              if (params.roundLengths) slideSize = Math.floor(slideSize)
            } else {
              slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView
              if (params.roundLengths) slideSize = Math.floor(slideSize)

              if (slides[i]) {
                slides[i].style[getDirectionLabel('width')] = `${ slideSize }px`
              }
            }

            if (slides[i]) {
              slides[i].swiperSlideSize = slideSize
            }

            slidesSizesGrid.push(slideSize)

            if (params.centeredSlides) {
              slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween
              if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween
              if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween
              if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0
              if (params.roundLengths) slidePosition = Math.floor(slidePosition)
              if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition)
              slidesGrid.push(slidePosition)
            } else {
              if (params.roundLengths) slidePosition = Math.floor(slidePosition)
              if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition)
              slidesGrid.push(slidePosition)
              slidePosition = slidePosition + slideSize + spaceBetween
            }

            swiper.virtualSize += slideSize + spaceBetween
            prevSlideSize = slideSize
            index += 1
          }

          swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter

          if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
            $wrapperEl.css({ width: `${ swiper.virtualSize + params.spaceBetween }px`, })
          }

          if (params.setWrapperSize) {
            $wrapperEl.css({ [getDirectionLabel('width')]: `${ swiper.virtualSize + params.spaceBetween }px`, })
          }

          if (gridEnabled) {
            swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel)
          } // Remove last grid elements depending on width

          if (!params.centeredSlides) {
            const newSlidesGrid = []

            for (let i = 0; i < snapGrid.length; i += 1) {
              let slidesGridItem = snapGrid[i]
              if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem)

              if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
                newSlidesGrid.push(slidesGridItem)
              }
            }

            snapGrid = newSlidesGrid

            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
              snapGrid.push(swiper.virtualSize - swiperSize)
            }
          }

          if (snapGrid.length === 0) snapGrid = [ 0, ]

          if (params.spaceBetween !== 0) {
            const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight')
            slides
              .filter((_, slideIndex) => {
                if (!params.cssMode) return true

                if (slideIndex === slides.length - 1) {
                  return false
                }

                return true
              })
              .css({ [key]: `${ spaceBetween }px`, })
          }

          if (params.centeredSlides && params.centeredSlidesBounds) {
            let allSlidesSize = 0
            slidesSizesGrid.forEach((slideSizeValue) => {
              allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0)
            })
            allSlidesSize -= params.spaceBetween
            const maxSnap = allSlidesSize - swiperSize
            snapGrid = snapGrid.map((snap) => {
              if (snap < 0) return -offsetBefore
              if (snap > maxSnap) return maxSnap + offsetAfter
              return snap
            })
          }

          if (params.centerInsufficientSlides) {
            let allSlidesSize = 0
            slidesSizesGrid.forEach((slideSizeValue) => {
              allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0)
            })
            allSlidesSize -= params.spaceBetween

            if (allSlidesSize < swiperSize) {
              const allSlidesOffset = (swiperSize - allSlidesSize) / 2
              snapGrid.forEach((snap, snapIndex) => {
                snapGrid[snapIndex] = snap - allSlidesOffset
              })
              slidesGrid.forEach((snap, snapIndex) => {
                slidesGrid[snapIndex] = snap + allSlidesOffset
              })
            }
          }

          Object.assign(swiper, {
            slides,
            snapGrid,
            slidesGrid,
            slidesSizesGrid,
          })

          if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
            setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${ -snapGrid[0] }px`)
            setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${ swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2 }px`)
            const addToSnapGrid = -swiper.snapGrid[0]
            const addToSlidesGrid = -swiper.slidesGrid[0]
            swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid)
            swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid)
          }

          if (slidesLength !== previousSlidesLength) {
            swiper.emit('slidesLengthChange')
          }

          if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) swiper.checkOverflow()
            swiper.emit('snapGridLengthChange')
          }

          if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit('slidesGridLengthChange')
          }

          if (params.watchSlidesProgress) {
            swiper.updateSlidesOffset()
          }

          if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
            const backFaceHiddenClass = `${ params.containerModifierClass }backface-hidden`
            const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass)

            if (slidesLength <= params.maxBackfaceHiddenSlides) {
              if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass)
            } else if (hasClassBackfaceClassAdded) {
              swiper.$el.removeClass(backFaceHiddenClass)
            }
          }
        }

        function updateAutoHeight(speed) {
          const swiper = this
          const activeSlides = []
          const isVirtual = swiper.virtual && swiper.params.virtual.enabled
          let newHeight = 0
          let i

          if (typeof speed === 'number') {
            swiper.setTransition(speed)
          } else if (speed === true) {
            swiper.setTransition(swiper.params.speed)
          }

          const getSlideByIndex = (index) => {
            if (isVirtual) {
              return swiper.slides.filter((el) => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0]
            }

            return swiper.slides.eq(index)[0]
          } // Find slides currently in view

          if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
            if (swiper.params.centeredSlides) {
              (swiper.visibleSlides || $([])).each((slide) => {
                activeSlides.push(slide)
              })
            } else {
              for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i
                if (index > swiper.slides.length && !isVirtual) break
                activeSlides.push(getSlideByIndex(index))
              }
            }
          } else {
            activeSlides.push(getSlideByIndex(swiper.activeIndex))
          } // Find new height from highest slide in view

          for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== 'undefined') {
              const height = activeSlides[i].offsetHeight
              newHeight = height > newHeight ? height : newHeight
            }
          } // Update Height

          if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${ newHeight }px`)
        }

        function updateSlidesOffset() {
          const swiper = this
          const slides = swiper.slides

          for (let i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop
          }
        }

        function updateSlidesProgress(translate) {
          if (translate === void 0) {
            translate = (this && this.translate) || 0
          }

          const swiper = this
          const params = swiper.params
          const { slides, rtlTranslate: rtl, snapGrid, } = swiper
          if (slides.length === 0) return
          if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset()
          let offsetCenter = -translate
          if (rtl) offsetCenter = translate // Visible Slides

          slides.removeClass(params.slideVisibleClass)
          swiper.visibleSlidesIndexes = []
          swiper.visibleSlides = []

          for (let i = 0; i < slides.length; i += 1) {
            const slide = slides[i]
            let slideOffset = slide.swiperSlideOffset

            if (params.cssMode && params.centeredSlides) {
              slideOffset -= slides[0].swiperSlideOffset
            }

            const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween)
            const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween)
            const slideBefore = -(offsetCenter - slideOffset)
            const slideAfter = slideBefore + swiper.slidesSizesGrid[i]
            const isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1) || (slideAfter > 1 && slideAfter <= swiper.size) || (slideBefore <= 0 && slideAfter >= swiper.size)

            if (isVisible) {
              swiper.visibleSlides.push(slide)
              swiper.visibleSlidesIndexes.push(i)
              slides.eq(i).addClass(params.slideVisibleClass)
            }

            slide.progress = rtl ? -slideProgress : slideProgress
            slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress
          }

          swiper.visibleSlides = $(swiper.visibleSlides)
        }

        function updateProgress(translate) {
          const swiper = this

          if (typeof translate === 'undefined') {
            const multiplier = swiper.rtlTranslate ? -1 : 1 // eslint-disable-next-line

            translate = (swiper && swiper.translate && swiper.translate * multiplier) || 0
          }

          const params = swiper.params
          const translatesDiff = swiper.maxTranslate() - swiper.minTranslate()
          let { progress, isBeginning, isEnd, } = swiper
          const wasBeginning = isBeginning
          const wasEnd = isEnd

          if (translatesDiff === 0) {
            progress = 0
            isBeginning = true
            isEnd = true
          } else {
            progress = (translate - swiper.minTranslate()) / translatesDiff
            isBeginning = progress <= 0
            isEnd = progress >= 1
          }

          Object.assign(swiper, {
            progress,
            isBeginning,
            isEnd,
          })
          if (params.watchSlidesProgress || (params.centeredSlides && params.autoHeight)) swiper.updateSlidesProgress(translate)

          if (isBeginning && !wasBeginning) {
            swiper.emit('reachBeginning toEdge')
          }

          if (isEnd && !wasEnd) {
            swiper.emit('reachEnd toEdge')
          }

          if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
            swiper.emit('fromEdge')
          }

          swiper.emit('progress', progress)
        }

        function updateSlidesClasses() {
          const swiper = this
          const { slides, params, $wrapperEl, activeIndex, realIndex, } = swiper
          const isVirtual = swiper.virtual && params.virtual.enabled
          slides.removeClass(`${ params.slideActiveClass } ${ params.slideNextClass } ${ params.slidePrevClass } ${ params.slideDuplicateActiveClass } ${ params.slideDuplicateNextClass } ${ params.slideDuplicatePrevClass }`)
          let activeSlide

          if (isVirtual) {
            activeSlide = swiper.$wrapperEl.find(`.${ params.slideClass }[data-swiper-slide-index="${ activeIndex }"]`)
          } else {
            activeSlide = slides.eq(activeIndex)
          } // Active classes

          activeSlide.addClass(params.slideActiveClass)

          if (params.loop) {
            // Duplicate to all looped slides
            if (activeSlide.hasClass(params.slideDuplicateClass)) {
              $wrapperEl.children(`.${ params.slideClass }:not(.${ params.slideDuplicateClass })[data-swiper-slide-index="${ realIndex }"]`).addClass(params.slideDuplicateActiveClass)
            } else {
              $wrapperEl.children(`.${ params.slideClass }.${ params.slideDuplicateClass }[data-swiper-slide-index="${ realIndex }"]`).addClass(params.slideDuplicateActiveClass)
            }
          } // Next Slide

          let nextSlide = activeSlide.nextAll(`.${ params.slideClass }`).eq(0).addClass(params.slideNextClass)

          if (params.loop && nextSlide.length === 0) {
            nextSlide = slides.eq(0)
            nextSlide.addClass(params.slideNextClass)
          } // Prev Slide

          let prevSlide = activeSlide.prevAll(`.${ params.slideClass }`).eq(0).addClass(params.slidePrevClass)

          if (params.loop && prevSlide.length === 0) {
            prevSlide = slides.eq(-1)
            prevSlide.addClass(params.slidePrevClass)
          }

          if (params.loop) {
            // Duplicate to all looped slides
            if (nextSlide.hasClass(params.slideDuplicateClass)) {
              $wrapperEl.children(`.${ params.slideClass }:not(.${ params.slideDuplicateClass })[data-swiper-slide-index="${ nextSlide.attr('data-swiper-slide-index') }"]`).addClass(params.slideDuplicateNextClass)
            } else {
              $wrapperEl.children(`.${ params.slideClass }.${ params.slideDuplicateClass }[data-swiper-slide-index="${ nextSlide.attr('data-swiper-slide-index') }"]`).addClass(params.slideDuplicateNextClass)
            }

            if (prevSlide.hasClass(params.slideDuplicateClass)) {
              $wrapperEl.children(`.${ params.slideClass }:not(.${ params.slideDuplicateClass })[data-swiper-slide-index="${ prevSlide.attr('data-swiper-slide-index') }"]`).addClass(params.slideDuplicatePrevClass)
            } else {
              $wrapperEl.children(`.${ params.slideClass }.${ params.slideDuplicateClass }[data-swiper-slide-index="${ prevSlide.attr('data-swiper-slide-index') }"]`).addClass(params.slideDuplicatePrevClass)
            }
          }

          swiper.emitSlidesClasses()
        }

        function updateActiveIndex(newActiveIndex) {
          const swiper = this
          const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate
          const {
            slidesGrid,
            snapGrid,
            params,
            activeIndex: previousIndex,
            realIndex: previousRealIndex,
            snapIndex: previousSnapIndex,
          } = swiper
          let activeIndex = newActiveIndex
          let snapIndex

          if (typeof activeIndex === 'undefined') {
            for (let i = 0; i < slidesGrid.length; i += 1) {
              if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                  activeIndex = i
                } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                  activeIndex = i + 1
                }
              } else if (translate >= slidesGrid[i]) {
                activeIndex = i
              }
            } // Normalize slideIndex

            if (params.normalizeSlideIndex) {
              if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0
            }
          }

          if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate)
          } else {
            const skip = Math.min(params.slidesPerGroupSkip, activeIndex)
            snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup)
          }

          if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1

          if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
              swiper.snapIndex = snapIndex
              swiper.emit('snapIndexChange')
            }

            return
          } // Get real index

          const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10)
          Object.assign(swiper, {
            snapIndex,
            realIndex,
            previousIndex,
            activeIndex,
          })
          swiper.emit('activeIndexChange')
          swiper.emit('snapIndexChange')

          if (previousRealIndex !== realIndex) {
            swiper.emit('realIndexChange')
          }

          if (swiper.initialized || swiper.params.runCallbacksOnInit) {
            swiper.emit('slideChange')
          }
        }

        function updateClickedSlide(e) {
          const swiper = this
          const params = swiper.params
          const slide = $(e).closest(`.${ params.slideClass }`)[0]
          let slideFound = false
          let slideIndex

          if (slide) {
            for (let i = 0; i < swiper.slides.length; i += 1) {
              if (swiper.slides[i] === slide) {
                slideFound = true
                slideIndex = i
                break
              }
            }
          }

          if (slide && slideFound) {
            swiper.clickedSlide = slide

            if (swiper.virtual && swiper.params.virtual.enabled) {
              swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10)
            } else {
              swiper.clickedIndex = slideIndex
            }
          } else {
            swiper.clickedSlide = undefined
            swiper.clickedIndex = undefined
            return
          }

          if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide()
          }
        }

        const update = {
          updateSize,
          updateSlides,
          updateAutoHeight,
          updateSlidesOffset,
          updateSlidesProgress,
          updateProgress,
          updateSlidesClasses,
          updateActiveIndex,
          updateClickedSlide,
        }

        function getSwiperTranslate(axis) {
          if (axis === void 0) {
            axis = this.isHorizontal() ? 'x' : 'y'
          }

          const swiper = this
          const { params, rtlTranslate: rtl, translate, $wrapperEl, } = swiper

          if (params.virtualTranslate) {
            return rtl ? -translate : translate
          }

          if (params.cssMode) {
            return translate
          }

          let currentTranslate = getTranslate($wrapperEl[0], axis)
          if (rtl) currentTranslate = -currentTranslate
          return currentTranslate || 0
        }

        function setTranslate(translate, byController) {
          const swiper = this
          const { rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress, } = swiper
          let x = 0
          let y = 0
          const z = 0

          if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate
          } else {
            y = translate
          }

          if (params.roundLengths) {
            x = Math.floor(x)
            y = Math.floor(y)
          }

          if (params.cssMode) {
            wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y
          } else if (!params.virtualTranslate) {
            $wrapperEl.transform(`translate3d(${ x }px, ${ y }px, ${ z }px)`)
          }

          swiper.previousTranslate = swiper.translate
          swiper.translate = swiper.isHorizontal() ? x : y // Check if we need to update progress

          let newProgress
          const translatesDiff = swiper.maxTranslate() - swiper.minTranslate()

          if (translatesDiff === 0) {
            newProgress = 0
          } else {
            newProgress = (translate - swiper.minTranslate()) / translatesDiff
          }

          if (newProgress !== progress) {
            swiper.updateProgress(translate)
          }

          swiper.emit('setTranslate', swiper.translate, byController)
        }

        function minTranslate() {
          return -this.snapGrid[0]
        }

        function maxTranslate() {
          return -this.snapGrid[this.snapGrid.length - 1]
        }

        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
          if (translate === void 0) {
            translate = 0
          }

          if (speed === void 0) {
            speed = this.params.speed
          }

          if (runCallbacks === void 0) {
            runCallbacks = true
          }

          if (translateBounds === void 0) {
            translateBounds = true
          }

          const swiper = this
          const { params, wrapperEl, } = swiper

          if (swiper.animating && params.preventInteractionOnTransition) {
            return false
          }

          const minTranslate = swiper.minTranslate()
          const maxTranslate = swiper.maxTranslate()
          let newTranslate
          if (translateBounds && translate > minTranslate) newTranslate = minTranslate
          else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate
          else newTranslate = translate // Update progress

          swiper.updateProgress(newTranslate)

          if (params.cssMode) {
            const isH = swiper.isHorizontal()

            if (speed === 0) {
              wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate
            } else {
              if (!swiper.support.smoothScroll) {
                animateCSSModeScroll({
                  swiper,
                  targetPosition: -newTranslate,
                  side: isH ? 'left' : 'top',
                })
                return true
              }

              wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: -newTranslate,
                behavior: 'smooth',
              })
            }

            return true
          }

          if (speed === 0) {
            swiper.setTransition(0)
            swiper.setTranslate(newTranslate)

            if (runCallbacks) {
              swiper.emit('beforeTransitionStart', speed, internal)
              swiper.emit('transitionEnd')
            }
          } else {
            swiper.setTransition(speed)
            swiper.setTranslate(newTranslate)

            if (runCallbacks) {
              swiper.emit('beforeTransitionStart', speed, internal)
              swiper.emit('transitionStart')
            }

            if (!swiper.animating) {
              swiper.animating = true

              if (!swiper.onTranslateToWrapperTransitionEnd) {
                swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                  if (!swiper || swiper.destroyed) return
                  if (e.target !== this) return
                  swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd)
                  swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd)
                  swiper.onTranslateToWrapperTransitionEnd = null
                  delete swiper.onTranslateToWrapperTransitionEnd

                  if (runCallbacks) {
                    swiper.emit('transitionEnd')
                  }
                }
              }

              swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd)
              swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd)
            }
          }

          return true
        }

        const translate = {
          getTranslate: getSwiperTranslate,
          setTranslate,
          minTranslate,
          maxTranslate,
          translateTo,
        }

        function setTransition(duration, byController) {
          const swiper = this

          if (!swiper.params.cssMode) {
            swiper.$wrapperEl.transition(duration)
          }

          swiper.emit('setTransition', duration, byController)
        }

        function transitionEmit(_ref) {
          const { swiper, runCallbacks, direction, step, } = _ref
          const { activeIndex, previousIndex, } = swiper
          let dir = direction

          if (!dir) {
            if (activeIndex > previousIndex) dir = 'next'
            else if (activeIndex < previousIndex) dir = 'prev'
            else dir = 'reset'
          }

          swiper.emit(`transition${ step }`)

          if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
              swiper.emit(`slideResetTransition${ step }`)
              return
            }

            swiper.emit(`slideChangeTransition${ step }`)

            if (dir === 'next') {
              swiper.emit(`slideNextTransition${ step }`)
            } else {
              swiper.emit(`slidePrevTransition${ step }`)
            }
          }
        }

        function transitionStart(runCallbacks, direction) {
          if (runCallbacks === void 0) {
            runCallbacks = true
          }

          const swiper = this
          const { params, } = swiper
          if (params.cssMode) return

          if (params.autoHeight) {
            swiper.updateAutoHeight()
          }

          transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: 'Start',
          })
        }

        function transitionEnd(runCallbacks, direction) {
          if (runCallbacks === void 0) {
            runCallbacks = true
          }

          const swiper = this
          const { params, } = swiper
          swiper.animating = false
          if (params.cssMode) return
          swiper.setTransition(0)
          transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: 'End',
          })
        }

        const transition = {
          setTransition,
          transitionStart,
          transitionEnd,
        }

        function slideTo(index, speed, runCallbacks, internal, initial) {
          if (index === void 0) {
            index = 0
          }

          if (speed === void 0) {
            speed = this.params.speed
          }

          if (runCallbacks === void 0) {
            runCallbacks = true
          }

          if (typeof index !== 'number' && typeof index !== 'string') {
            throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${ typeof index }] given.`)
          }

          if (typeof index === 'string') {
            /**
             * The `index` argument converted from `string` to `number`.
             * @type {number}
             */
            const indexAsNumber = parseInt(index, 10)
            /**
             * Determines whether the `index` argument is a valid `number`
             * after being converted from the `string` type.
             * @type {boolean}
             */

            const isValidNumber = isFinite(indexAsNumber)

            if (!isValidNumber) {
              throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${ index }] given.`)
            } // Knowing that the converted `index` is a valid number,
            // we can update the original argument's value.

            index = indexAsNumber
          }

          const swiper = this
          let slideIndex = index
          if (slideIndex < 0) slideIndex = 0
          const {
            params,
            snapGrid,
            slidesGrid,
            previousIndex,
            activeIndex,
            rtlTranslate: rtl,
            wrapperEl,
            enabled,
          } = swiper

          if ((swiper.animating && params.preventInteractionOnTransition) || (!enabled && !internal && !initial)) {
            return false
          }

          const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex)
          let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup)
          if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1

          if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
            swiper.emit('beforeSlideChangeStart')
          }

          const translate = -snapGrid[snapIndex] // Update progress

          swiper.updateProgress(translate) // Normalize slideIndex

          if (params.normalizeSlideIndex) {
            for (let i = 0; i < slidesGrid.length; i += 1) {
              const normalizedTranslate = -Math.floor(translate * 100)
              const normalizedGrid = Math.floor(slidesGrid[i] * 100)
              const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100)

              if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
                  slideIndex = i
                } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
                  slideIndex = i + 1
                }
              } else if (normalizedTranslate >= normalizedGrid) {
                slideIndex = i
              }
            }
          } // Directions locks

          if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
              return false
            }

            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
              if ((activeIndex || 0) !== slideIndex) return false
            }
          }

          let direction
          if (slideIndex > activeIndex) direction = 'next'
          else if (slideIndex < activeIndex) direction = 'prev'
          else direction = 'reset' // Update Index

          if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
            swiper.updateActiveIndex(slideIndex) // Update Height

            if (params.autoHeight) {
              swiper.updateAutoHeight()
            }

            swiper.updateSlidesClasses()

            if (params.effect !== 'slide') {
              swiper.setTranslate(translate)
            }

            if (direction !== 'reset') {
              swiper.transitionStart(runCallbacks, direction)
              swiper.transitionEnd(runCallbacks, direction)
            }

            return false
          }

          if (params.cssMode) {
            const isH = swiper.isHorizontal()
            const t = rtl ? translate : -translate

            if (speed === 0) {
              const isVirtual = swiper.virtual && swiper.params.virtual.enabled

              if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = 'none'
                swiper._immediateVirtual = true
              }

              wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t

              if (isVirtual) {
                requestAnimationFrame(() => {
                  swiper.wrapperEl.style.scrollSnapType = ''
                  swiper._swiperImmediateVirtual = false
                })
              }
            } else {
              if (!swiper.support.smoothScroll) {
                animateCSSModeScroll({
                  swiper,
                  targetPosition: t,
                  side: isH ? 'left' : 'top',
                })
                return true
              }

              wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: t,
                behavior: 'smooth',
              })
            }

            return true
          }

          swiper.setTransition(speed)
          swiper.setTranslate(translate)
          swiper.updateActiveIndex(slideIndex)
          swiper.updateSlidesClasses()
          swiper.emit('beforeTransitionStart', speed, internal)
          swiper.transitionStart(runCallbacks, direction)

          if (speed === 0) {
            swiper.transitionEnd(runCallbacks, direction)
          } else if (!swiper.animating) {
            swiper.animating = true

            if (!swiper.onSlideToWrapperTransitionEnd) {
              swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return
                if (e.target !== this) return
                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd)
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd)
                swiper.onSlideToWrapperTransitionEnd = null
                delete swiper.onSlideToWrapperTransitionEnd
                swiper.transitionEnd(runCallbacks, direction)
              }
            }

            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd)
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd)
          }

          return true
        }

        function slideToLoop(index, speed, runCallbacks, internal) {
          if (index === void 0) {
            index = 0
          }

          if (speed === void 0) {
            speed = this.params.speed
          }

          if (runCallbacks === void 0) {
            runCallbacks = true
          }

          if (typeof index === 'string') {
            /**
             * The `index` argument converted from `string` to `number`.
             * @type {number}
             */
            const indexAsNumber = parseInt(index, 10)
            /**
             * Determines whether the `index` argument is a valid `number`
             * after being converted from the `string` type.
             * @type {boolean}
             */

            const isValidNumber = isFinite(indexAsNumber)

            if (!isValidNumber) {
              throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${ index }] given.`)
            } // Knowing that the converted `index` is a valid number,
            // we can update the original argument's value.

            index = indexAsNumber
          }

          const swiper = this
          let newIndex = index

          if (swiper.params.loop) {
            newIndex += swiper.loopedSlides
          }

          return swiper.slideTo(newIndex, speed, runCallbacks, internal)
        }

        /* eslint no-unused-vars: "off" */
        function slideNext(speed, runCallbacks, internal) {
          if (speed === void 0) {
            speed = this.params.speed
          }

          if (runCallbacks === void 0) {
            runCallbacks = true
          }

          const swiper = this
          const { animating, enabled, params, } = swiper
          if (!enabled) return swiper
          let perGroup = params.slidesPerGroup

          if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1)
          }

          const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup

          if (params.loop) {
            if (animating && params.loopPreventsSlide) return false
            swiper.loopFix() // eslint-disable-next-line

            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft
          }

          if (params.rewind && swiper.isEnd) {
            return swiper.slideTo(0, speed, runCallbacks, internal)
          }

          return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal)
        }

        /* eslint no-unused-vars: "off" */
        function slidePrev(speed, runCallbacks, internal) {
          if (speed === void 0) {
            speed = this.params.speed
          }

          if (runCallbacks === void 0) {
            runCallbacks = true
          }

          const swiper = this
          const { params, animating, snapGrid, slidesGrid, rtlTranslate, enabled, } = swiper
          if (!enabled) return swiper

          if (params.loop) {
            if (animating && params.loopPreventsSlide) return false
            swiper.loopFix() // eslint-disable-next-line

            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft
          }

          const translate = rtlTranslate ? swiper.translate : -swiper.translate

          function normalize(val) {
            if (val < 0) return -Math.floor(Math.abs(val))
            return Math.floor(val)
          }

          const normalizedTranslate = normalize(translate)
          const normalizedSnapGrid = snapGrid.map((val) => normalize(val))
          let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1]

          if (typeof prevSnap === 'undefined' && params.cssMode) {
            let prevSnapIndex
            snapGrid.forEach((snap, snapIndex) => {
              if (normalizedTranslate >= snap) {
                // prevSnap = snap;
                prevSnapIndex = snapIndex
              }
            })

            if (typeof prevSnapIndex !== 'undefined') {
              prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex]
            }
          }

          let prevIndex = 0

          if (typeof prevSnap !== 'undefined') {
            prevIndex = slidesGrid.indexOf(prevSnap)
            if (prevIndex < 0) prevIndex = swiper.activeIndex - 1

            if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
              prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1
              prevIndex = Math.max(prevIndex, 0)
            }
          }

          if (params.rewind && swiper.isBeginning) {
            const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1
            return swiper.slideTo(lastIndex, speed, runCallbacks, internal)
          }

          return swiper.slideTo(prevIndex, speed, runCallbacks, internal)
        }

        /* eslint no-unused-vars: "off" */
        function slideReset(speed, runCallbacks, internal) {
          if (speed === void 0) {
            speed = this.params.speed
          }

          if (runCallbacks === void 0) {
            runCallbacks = true
          }

          const swiper = this
          return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal)
        }

        /* eslint no-unused-vars: "off" */
        function slideToClosest(speed, runCallbacks, internal, threshold) {
          if (speed === void 0) {
            speed = this.params.speed
          }

          if (runCallbacks === void 0) {
            runCallbacks = true
          }

          if (threshold === void 0) {
            threshold = 0.5
          }

          const swiper = this
          let index = swiper.activeIndex
          const skip = Math.min(swiper.params.slidesPerGroupSkip, index)
          const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup)
          const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate

          if (translate >= swiper.snapGrid[snapIndex]) {
            // The current translate is on or after the current snap index, so the choice
            // is between the current index and the one after it.
            const currentSnap = swiper.snapGrid[snapIndex]
            const nextSnap = swiper.snapGrid[snapIndex + 1]

            if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
              index += swiper.params.slidesPerGroup
            }
          } else {
            // The current translate is before the current snap index, so the choice
            // is between the current index and the one before it.
            const prevSnap = swiper.snapGrid[snapIndex - 1]
            const currentSnap = swiper.snapGrid[snapIndex]

            if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
              index -= swiper.params.slidesPerGroup
            }
          }

          index = Math.max(index, 0)
          index = Math.min(index, swiper.slidesGrid.length - 1)
          return swiper.slideTo(index, speed, runCallbacks, internal)
        }

        function slideToClickedSlide() {
          const swiper = this
          const { params, $wrapperEl, } = swiper
          const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView
          let slideToIndex = swiper.clickedIndex
          let realIndex

          if (params.loop) {
            if (swiper.animating) return
            realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10)

            if (params.centeredSlides) {
              if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix()
                slideToIndex = $wrapperEl.children(`.${ params.slideClass }[data-swiper-slide-index="${ realIndex }"]:not(.${ params.slideDuplicateClass })`).eq(0).index()
                nextTick(() => {
                  swiper.slideTo(slideToIndex)
                })
              } else {
                swiper.slideTo(slideToIndex)
              }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
              swiper.loopFix()
              slideToIndex = $wrapperEl.children(`.${ params.slideClass }[data-swiper-slide-index="${ realIndex }"]:not(.${ params.slideDuplicateClass })`).eq(0).index()
              nextTick(() => {
                swiper.slideTo(slideToIndex)
              })
            } else {
              swiper.slideTo(slideToIndex)
            }
          } else {
            swiper.slideTo(slideToIndex)
          }
        }

        const slide = {
          slideTo,
          slideToLoop,
          slideNext,
          slidePrev,
          slideReset,
          slideToClosest,
          slideToClickedSlide,
        }

        function loopCreate() {
          const swiper = this
          const document = getDocument()
          const { params, $wrapperEl, } = swiper // Remove duplicated slides

          const $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl
          $selector.children(`.${ params.slideClass }.${ params.slideDuplicateClass }`).remove()
          let slides = $selector.children(`.${ params.slideClass }`)

          if (params.loopFillGroupWithBlank) {
            const blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup)

            if (blankSlidesNum !== params.slidesPerGroup) {
              for (let i = 0; i < blankSlidesNum; i += 1) {
                const blankNode = $(document.createElement('div')).addClass(`${ params.slideClass } ${ params.slideBlankClass }`)
                $selector.append(blankNode)
              }

              slides = $selector.children(`.${ params.slideClass }`)
            }
          }

          if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length
          swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10))
          swiper.loopedSlides += params.loopAdditionalSlides

          if (swiper.loopedSlides > slides.length) {
            swiper.loopedSlides = slides.length
          }

          const prependSlides = []
          const appendSlides = []
          slides.each((el, index) => {
            const slide = $(el)

            if (index < swiper.loopedSlides) {
              appendSlides.push(el)
            }

            if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
              prependSlides.push(el)
            }

            slide.attr('data-swiper-slide-index', index)
          })

          for (let i = 0; i < appendSlides.length; i += 1) {
            $selector.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass))
          }

          for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
            $selector.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass))
          }
        }

        function loopFix() {
          const swiper = this
          swiper.emit('beforeLoopFix')
          const {
            activeIndex,
            slides,
            loopedSlides,
            allowSlidePrev,
            allowSlideNext,
            snapGrid,
            rtlTranslate: rtl,
          } = swiper
          let newIndex
          swiper.allowSlidePrev = true
          swiper.allowSlideNext = true
          const snapTranslate = -snapGrid[activeIndex]
          const diff = snapTranslate - swiper.getTranslate() // Fix For Negative Oversliding

          if (activeIndex < loopedSlides) {
            newIndex = slides.length - loopedSlides * 3 + activeIndex
            newIndex += loopedSlides
            const slideChanged = swiper.slideTo(newIndex, 0, false, true)

            if (slideChanged && diff !== 0) {
              swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff)
            }
          } else if (activeIndex >= slides.length - loopedSlides) {
            // Fix For Positive Oversliding
            newIndex = -slides.length + activeIndex + loopedSlides
            newIndex += loopedSlides
            const slideChanged = swiper.slideTo(newIndex, 0, false, true)

            if (slideChanged && diff !== 0) {
              swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff)
            }
          }

          swiper.allowSlidePrev = allowSlidePrev
          swiper.allowSlideNext = allowSlideNext
          swiper.emit('loopFix')
        }

        function loopDestroy() {
          const swiper = this
          const { $wrapperEl, params, slides, } = swiper
          $wrapperEl.children(`.${ params.slideClass }.${ params.slideDuplicateClass },.${ params.slideClass }.${ params.slideBlankClass }`).remove()
          slides.removeAttr('data-swiper-slide-index')
        }

        const loop = {
          loopCreate,
          loopFix,
          loopDestroy,
        }

        function setGrabCursor(moving) {
          const swiper = this
          if (swiper.support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) return
          const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl
          el.style.cursor = 'move'
          el.style.cursor = moving ? 'grabbing' : 'grab'
        }

        function unsetGrabCursor() {
          const swiper = this

          if (swiper.support.touch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) {
            return
          }

          swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''
        }

        const grabCursor = {
          setGrabCursor,
          unsetGrabCursor,
        }

        function closestElement(selector, base) {
          if (base === void 0) {
            base = this
          }

          function __closestFrom(el) {
            if (!el || el === getDocument() || el === getWindow()) return null
            if (el.assignedSlot) el = el.assignedSlot
            const found = el.closest(selector)

            if (!found && !el.getRootNode) {
              return null
            }

            return found || __closestFrom(el.getRootNode().host)
          }

          return __closestFrom(base)
        }

        function onTouchStart(event) {
          const swiper = this
          const document = getDocument()
          const window = getWindow()
          const data = swiper.touchEventsData
          const { params, touches, enabled, } = swiper
          if (!enabled) return

          if (swiper.animating && params.preventInteractionOnTransition) {
            return
          }

          if (!swiper.animating && params.cssMode && params.loop) {
            swiper.loopFix()
          }

          let e = event
          if (e.originalEvent) e = e.originalEvent
          let $targetEl = $(e.target)

          if (params.touchEventsTarget === 'wrapper') {
            if (!$targetEl.closest(swiper.wrapperEl).length) return
          }

          data.isTouchEvent = e.type === 'touchstart'
          if (!data.isTouchEvent && 'which' in e && e.which === 3) return
          if (!data.isTouchEvent && 'button' in e && e.button > 0) return
          if (data.isTouched && data.isMoved) return // change target el for shadow root component

          const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== ''

          if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
            $targetEl = $(event.path[0])
          }

          const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${ params.noSwipingClass }`
          const isTargetShadow = !!(e.target && e.target.shadowRoot) // use closestElement for shadow root element to get the actual closest for nested shadow root element

          if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
            swiper.allowClick = true
            return
          }

          if (params.swipeHandler) {
            if (!$targetEl.closest(params.swipeHandler)[0]) return
          }

          touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX
          touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY
          const startX = touches.currentX
          const startY = touches.currentY // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

          const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection
          const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold

          if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
            if (edgeSwipeDetection === 'prevent') {
              event.preventDefault()
            } else {
              return
            }
          }

          Object.assign(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined,
          })
          touches.startX = startX
          touches.startY = startY
          data.touchStartTime = now()
          swiper.allowClick = true
          swiper.updateSize()
          swiper.swipeDirection = undefined
          if (params.threshold > 0) data.allowThresholdMove = false

          if (e.type !== 'touchstart') {
            let preventDefault = true

            if ($targetEl.is(data.focusableElements)) {
              preventDefault = false

              if ($targetEl[0].nodeName === 'SELECT') {
                data.isTouched = false
              }
            }

            if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
              document.activeElement.blur()
            }

            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault

            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
              e.preventDefault()
            }
          }

          if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
            swiper.freeMode.onTouchStart()
          }

          swiper.emit('touchStart', e)
        }

        function onTouchMove(event) {
          const document = getDocument()
          const swiper = this
          const data = swiper.touchEventsData
          const { params, touches, rtlTranslate: rtl, enabled, } = swiper
          if (!enabled) return
          let e = event
          if (e.originalEvent) e = e.originalEvent

          if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
              swiper.emit('touchMoveOpposite', e)
            }

            return
          }

          if (data.isTouchEvent && e.type !== 'touchmove') return
          const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0])
          const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX
          const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY

          if (e.preventedByNestedSwiper) {
            touches.startX = pageX
            touches.startY = pageY
            return
          }

          if (!swiper.allowTouchMove) {
            if (!$(e.target).is(data.focusableElements)) {
              swiper.allowClick = false
            }

            if (data.isTouched) {
              Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY,
              })
              data.touchStartTime = now()
            }

            return
          }

          if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
              // Vertical
              if ((pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())) {
                data.isTouched = false
                data.isMoved = false
                return
              }
            } else if ((pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
              return
            }
          }

          if (data.isTouchEvent && document.activeElement) {
            if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
              data.isMoved = true
              swiper.allowClick = false
              return
            }
          }

          if (data.allowTouchCallbacks) {
            swiper.emit('touchMove', e)
          }

          if (e.targetTouches && e.targetTouches.length > 1) return
          touches.currentX = pageX
          touches.currentY = pageY
          const diffX = touches.currentX - touches.startX
          const diffY = touches.currentY - touches.startY
          if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return

          if (typeof data.isScrolling === 'undefined') {
            let touchAngle

            if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
              data.isScrolling = false
            } else {
              // eslint-disable-next-line
              if (diffX * diffX + diffY * diffY >= 25) {
                touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI
                data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle
              }
            }
          }

          if (data.isScrolling) {
            swiper.emit('touchMoveOpposite', e)
          }

          if (typeof data.startMoving === 'undefined') {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
              data.startMoving = true
            }
          }

          if (data.isScrolling) {
            data.isTouched = false
            return
          }

          if (!data.startMoving) {
            return
          }

          swiper.allowClick = false

          if (!params.cssMode && e.cancelable) {
            e.preventDefault()
          }

          if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation()
          }

          if (!data.isMoved) {
            if (params.loop && !params.cssMode) {
              swiper.loopFix()
            }

            data.startTranslate = swiper.getTranslate()
            swiper.setTransition(0)

            if (swiper.animating) {
              swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend')
            }

            data.allowMomentumBounce = false // Grab Cursor

            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
              swiper.setGrabCursor(true)
            }

            swiper.emit('sliderFirstMove', e)
          }

          swiper.emit('sliderMove', e)
          data.isMoved = true
          let diff = swiper.isHorizontal() ? diffX : diffY
          touches.diff = diff
          diff *= params.touchRatio
          if (rtl) diff = -diff
          swiper.swipeDirection = diff > 0 ? 'prev' : 'next'
          data.currentTranslate = diff + data.startTranslate
          let disableParentSwiper = true
          let resistanceRatio = params.resistanceRatio

          if (params.touchReleaseOnEdges) {
            resistanceRatio = 0
          }

          if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false
            if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio
          } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false
            if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio
          }

          if (disableParentSwiper) {
            e.preventedByNestedSwiper = true
          } // Directions locks

          if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate
          }

          if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate
          }

          if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
            data.currentTranslate = data.startTranslate
          } // Threshold

          if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
              if (!data.allowThresholdMove) {
                data.allowThresholdMove = true
                touches.startX = touches.currentX
                touches.startY = touches.currentY
                data.currentTranslate = data.startTranslate
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY
                return
              }
            } else {
              data.currentTranslate = data.startTranslate
              return
            }
          }

          if (!params.followFinger || params.cssMode) return // Update active index in free mode

          if ((params.freeMode && params.freeMode.enabled && swiper.freeMode) || params.watchSlidesProgress) {
            swiper.updateActiveIndex()
            swiper.updateSlidesClasses()
          }

          if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
            swiper.freeMode.onTouchMove()
          } // Update progress

          swiper.updateProgress(data.currentTranslate) // Update translate

          swiper.setTranslate(data.currentTranslate)
        }

        function onTouchEnd(event) {
          const swiper = this
          const data = swiper.touchEventsData
          const { params, touches, rtlTranslate: rtl, slidesGrid, enabled, } = swiper
          if (!enabled) return
          let e = event
          if (e.originalEvent) e = e.originalEvent

          if (data.allowTouchCallbacks) {
            swiper.emit('touchEnd', e)
          }

          data.allowTouchCallbacks = false

          if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
              swiper.setGrabCursor(false)
            }

            data.isMoved = false
            data.startMoving = false
            return
          } // Return Grab Cursor

          if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false)
          } // Time diff

          const touchEndTime = now()
          const timeDiff = touchEndTime - data.touchStartTime // Tap, doubleTap, Click

          if (swiper.allowClick) {
            const pathTree = e.path || (e.composedPath && e.composedPath())
            swiper.updateClickedSlide((pathTree && pathTree[0]) || e.target)
            swiper.emit('tap click', e)

            if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
              swiper.emit('doubleTap doubleClick', e)
            }
          }

          data.lastClickTime = now()
          nextTick(() => {
            if (!swiper.destroyed) swiper.allowClick = true
          })

          if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
            data.isTouched = false
            data.isMoved = false
            data.startMoving = false
            return
          }

          data.isTouched = false
          data.isMoved = false
          data.startMoving = false
          let currentPos

          if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate
          } else {
            currentPos = -data.currentTranslate
          }

          if (params.cssMode) {
            return
          }

          if (swiper.params.freeMode && params.freeMode.enabled) {
            swiper.freeMode.onTouchEnd({ currentPos, })
            return
          } // Find current slide

          let stopIndex = 0
          let groupSize = swiper.slidesSizesGrid[0]

          for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
            const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup

            if (typeof slidesGrid[i + increment] !== 'undefined') {
              if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i
                groupSize = slidesGrid[i + increment] - slidesGrid[i]
              }
            } else if (currentPos >= slidesGrid[i]) {
              stopIndex = i
              groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2]
            }
          }

          let rewindFirstIndex = null
          let rewindLastIndex = null

          if (params.rewind) {
            if (swiper.isBeginning) {
              rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1
            } else if (swiper.isEnd) {
              rewindFirstIndex = 0
            }
          } // Find current slide size

          const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize
          const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup

          if (timeDiff > params.longSwipesMs) {
            // Long touches
            if (!params.longSwipes) {
              swiper.slideTo(swiper.activeIndex)
              return
            }

            if (swiper.swipeDirection === 'next') {
              if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment)
              else swiper.slideTo(stopIndex)
            }

            if (swiper.swipeDirection === 'prev') {
              if (ratio > 1 - params.longSwipesRatio) {
                swiper.slideTo(stopIndex + increment)
              } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
                swiper.slideTo(rewindLastIndex)
              } else {
                swiper.slideTo(stopIndex)
              }
            }
          } else {
            // Short swipes
            if (!params.shortSwipes) {
              swiper.slideTo(swiper.activeIndex)
              return
            }

            const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl)

            if (!isNavButtonTarget) {
              if (swiper.swipeDirection === 'next') {
                swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment)
              }

              if (swiper.swipeDirection === 'prev') {
                swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex)
              }
            } else if (e.target === swiper.navigation.nextEl) {
              swiper.slideTo(stopIndex + increment)
            } else {
              swiper.slideTo(stopIndex)
            }
          }
        }

        function onResize() {
          const swiper = this
          const { params, el, } = swiper
          if (el && el.offsetWidth === 0) return // Breakpoints

          if (params.breakpoints) {
            swiper.setBreakpoint()
          } // Save locks

          const { allowSlideNext, allowSlidePrev, snapGrid, } = swiper // Disable locks on resize

          swiper.allowSlideNext = true
          swiper.allowSlidePrev = true
          swiper.updateSize()
          swiper.updateSlides()
          swiper.updateSlidesClasses()

          if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
            swiper.slideTo(swiper.slides.length - 1, 0, false, true)
          } else {
            swiper.slideTo(swiper.activeIndex, 0, false, true)
          }

          if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
            swiper.autoplay.run()
          } // Return locks after resize

          swiper.allowSlidePrev = allowSlidePrev
          swiper.allowSlideNext = allowSlideNext

          if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow()
          }
        }

        function onClick(e) {
          const swiper = this
          if (!swiper.enabled) return

          if (!swiper.allowClick) {
            if (swiper.params.preventClicks) e.preventDefault()

            if (swiper.params.preventClicksPropagation && swiper.animating) {
              e.stopPropagation()
              e.stopImmediatePropagation()
            }
          }
        }

        function onScroll() {
          const swiper = this
          const { wrapperEl, rtlTranslate, enabled, } = swiper
          if (!enabled) return
          swiper.previousTranslate = swiper.translate

          if (swiper.isHorizontal()) {
            swiper.translate = -wrapperEl.scrollLeft
          } else {
            swiper.translate = -wrapperEl.scrollTop
          } // eslint-disable-next-line

          if (swiper.translate === 0) swiper.translate = 0
          swiper.updateActiveIndex()
          swiper.updateSlidesClasses()
          let newProgress
          const translatesDiff = swiper.maxTranslate() - swiper.minTranslate()

          if (translatesDiff === 0) {
            newProgress = 0
          } else {
            newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff
          }

          if (newProgress !== swiper.progress) {
            swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate)
          }

          swiper.emit('setTranslate', swiper.translate, false)
        }

        let dummyEventAttached = false

        function dummyEventListener() {
        }

        const events = (swiper, method) => {
          const document = getDocument()
          const { params, touchEvents, el, wrapperEl, device, support, } = swiper
          const capture = !!params.nested
          const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener'
          const swiperMethod = method // Touch Events

          if (!support.touch) {
            el[domMethod](touchEvents.start, swiper.onTouchStart, false)
            document[domMethod](touchEvents.move, swiper.onTouchMove, capture)
            document[domMethod](touchEvents.end, swiper.onTouchEnd, false)
          } else {
            const passiveListener =
              touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners
                ? {
                  passive: true,
                  capture: false,
                }
                : false
            el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener)
            el[domMethod](
              touchEvents.move,
              swiper.onTouchMove,
              support.passiveListener
                ? {
                  passive: false,
                  capture,
                }
                : capture
            )
            el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener)

            if (touchEvents.cancel) {
              el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener)
            }
          } // Prevent Links Clicks

          if (params.preventClicks || params.preventClicksPropagation) {
            el[domMethod]('click', swiper.onClick, true)
          }

          if (params.cssMode) {
            wrapperEl[domMethod]('scroll', swiper.onScroll)
          } // Resize handler

          if (params.updateOnWindowResize) {
            swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true)
          } else {
            swiper[swiperMethod]('observerUpdate', onResize, true)
          }
        }

        function attachEvents() {
          const swiper = this
          const document = getDocument()
          const { params, support, } = swiper
          swiper.onTouchStart = onTouchStart.bind(swiper)
          swiper.onTouchMove = onTouchMove.bind(swiper)
          swiper.onTouchEnd = onTouchEnd.bind(swiper)

          if (params.cssMode) {
            swiper.onScroll = onScroll.bind(swiper)
          }

          swiper.onClick = onClick.bind(swiper)

          if (support.touch && !dummyEventAttached) {
            document.addEventListener('touchstart', dummyEventListener)
            dummyEventAttached = true
          }

          events(swiper, 'on')
        }

        function detachEvents() {
          const swiper = this
          events(swiper, 'off')
        }

        const events$1 = {
          attachEvents,
          detachEvents,
        }

        const isGridEnabled = (swiper, params) => {
          return swiper.grid && params.grid && params.grid.rows > 1
        }

        function setBreakpoint() {
          const swiper = this
          const { activeIndex, initialized, loopedSlides = 0, params, $el, } = swiper
          const breakpoints = params.breakpoints
          if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) return // Get breakpoint for window width and update parameters

          const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el)
          if (!breakpoint || swiper.currentBreakpoint === breakpoint) return
          const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined
          const breakpointParams = breakpointOnlyParams || swiper.originalParams
          const wasMultiRow = isGridEnabled(swiper, params)
          const isMultiRow = isGridEnabled(swiper, breakpointParams)
          const wasEnabled = params.enabled

          if (wasMultiRow && !isMultiRow) {
            $el.removeClass(`${ params.containerModifierClass }grid ${ params.containerModifierClass }grid-column`)
            swiper.emitContainerClasses()
          } else if (!wasMultiRow && isMultiRow) {
            $el.addClass(`${ params.containerModifierClass }grid`)

            if ((breakpointParams.grid.fill && breakpointParams.grid.fill === 'column') || (!breakpointParams.grid.fill && params.grid.fill === 'column')) {
              $el.addClass(`${ params.containerModifierClass }grid-column`)
            }

            swiper.emitContainerClasses()
          } // Toggle navigation, pagination, scrollbar

          [
            'navigation',
            'pagination',
            'scrollbar',
          ].forEach((prop) => {
            const wasModuleEnabled = params[prop] && params[prop].enabled
            const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled

            if (wasModuleEnabled && !isModuleEnabled) {
              swiper[prop].disable()
            }

            if (!wasModuleEnabled && isModuleEnabled) {
              swiper[prop].enable()
            }
          })
          const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction
          const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged)

          if (directionChanged && initialized) {
            swiper.changeDirection()
          }

          extend(swiper.params, breakpointParams)
          const isEnabled = swiper.params.enabled
          Object.assign(swiper, {
            allowTouchMove: swiper.params.allowTouchMove,
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
          })

          if (wasEnabled && !isEnabled) {
            swiper.disable()
          } else if (!wasEnabled && isEnabled) {
            swiper.enable()
          }

          swiper.currentBreakpoint = breakpoint
          swiper.emit('_beforeBreakpoint', breakpointParams)

          if (needsReLoop && initialized) {
            swiper.loopDestroy()
            swiper.loopCreate()
            swiper.updateSlides()
            swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false)
          }

          swiper.emit('breakpoint', breakpointParams)
        }

        function getBreakpoint(breakpoints, base, containerEl) {
          if (base === void 0) {
            base = 'window'
          }

          if (!breakpoints || (base === 'container' && !containerEl)) return undefined
          let breakpoint = false
          const window = getWindow()
          const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight
          const points = Object.keys(breakpoints).map((point) => {
            if (typeof point === 'string' && point.indexOf('@') === 0) {
              const minRatio = parseFloat(point.substr(1))
              const value = currentHeight * minRatio
              return {
                value,
                point,
              }
            }

            return {
              value: point,
              point,
            }
          })
          points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10))

          for (let i = 0; i < points.length; i += 1) {
            const { point, value, } = points[i]

            if (base === 'window') {
              if (window.matchMedia(`(min-width: ${ value }px)`).matches) {
                breakpoint = point
              }
            } else if (value <= containerEl.clientWidth) {
              breakpoint = point
            }
          }

          return breakpoint || 'max'
        }

        const breakpoints = {
          setBreakpoint,
          getBreakpoint,
        }

        function prepareClasses(entries, prefix) {
          const resultClasses = []
          entries.forEach((item) => {
            if (typeof item === 'object') {
              Object.keys(item).forEach((classNames) => {
                if (item[classNames]) {
                  resultClasses.push(prefix + classNames)
                }
              })
            } else if (typeof item === 'string') {
              resultClasses.push(prefix + item)
            }
          })
          return resultClasses
        }

        function addClasses() {
          const swiper = this
          const {
            classNames,
            params,
            rtl,
            $el,
            device,
            support,
          } = swiper // prettier-ignore

          const suffixes = prepareClasses(
            [
              'initialized',
              params.direction,
              { 'pointer-events': !support.touch, },
              { 'free-mode': swiper.params.freeMode && params.freeMode.enabled, },
              { autoheight: params.autoHeight, },
              { rtl: rtl, },
              { grid: params.grid && params.grid.rows > 1, },
              { 'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column', },
              { android: device.android, },
              { ios: device.ios, },
              { 'css-mode': params.cssMode, },
              { centered: params.cssMode && params.centeredSlides, },
              { 'watch-progress': params.watchSlidesProgress, },
            ],
            params.containerModifierClass
          )
          classNames.push(...suffixes)
          $el.addClass([ ...classNames, ].join(' '))
          swiper.emitContainerClasses()
        }

        function removeClasses() {
          const swiper = this
          const { $el, classNames, } = swiper
          $el.removeClass(classNames.join(' '))
          swiper.emitContainerClasses()
        }

        const classes = {
          addClasses,
          removeClasses,
        }

        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
          const window = getWindow()
          let image

          function onReady() {
            if (callback) callback()
          }

          const isPicture = $(imageEl).parent('picture')[0]

          if (!isPicture && (!imageEl.complete || !checkForComplete)) {
            if (src) {
              image = new window.Image()
              image.onload = onReady
              image.onerror = onReady

              if (sizes) {
                image.sizes = sizes
              }

              if (srcset) {
                image.srcset = srcset
              }

              if (src) {
                image.src = src
              }
            } else {
              onReady()
            }
          } else {
            // image already loaded...
            onReady()
          }
        }

        function preloadImages() {
          const swiper = this
          swiper.imagesToLoad = swiper.$el.find('img')

          function onReady() {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return
            if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1

            if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
              if (swiper.params.updateOnImagesReady) swiper.update()
              swiper.emit('imagesReady')
            }
          }

          for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
            const imageEl = swiper.imagesToLoad[i]
            swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady)
          }
        }

        const images = {
          loadImage,
          preloadImages,
        }

        function checkOverflow() {
          const swiper = this
          const { isLocked: wasLocked, params, } = swiper
          const { slidesOffsetBefore, } = params

          if (slidesOffsetBefore) {
            const lastSlideIndex = swiper.slides.length - 1
            const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2
            swiper.isLocked = swiper.size > lastSlideRightEdge
          } else {
            swiper.isLocked = swiper.snapGrid.length === 1
          }

          if (params.allowSlideNext === true) {
            swiper.allowSlideNext = !swiper.isLocked
          }

          if (params.allowSlidePrev === true) {
            swiper.allowSlidePrev = !swiper.isLocked
          }

          if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false
          }

          if (wasLocked !== swiper.isLocked) {
            swiper.emit(swiper.isLocked ? 'lock' : 'unlock')
          }
        }

        const checkOverflow$1 = { checkOverflow, }

        const defaults = {
          init: true,
          direction: 'horizontal',
          touchEventsTarget: 'wrapper',
          initialSlide: 0,
          speed: 300,
          cssMode: false,
          updateOnWindowResize: true,
          resizeObserver: true,
          nested: false,
          createElements: false,
          enabled: true,
          focusableElements: 'input, select, option, textarea, button, video, label',
          // Overrides
          width: null,
          height: null,
          //
          preventInteractionOnTransition: false,
          // ssr
          userAgent: null,
          url: null,
          // To support iOS's swipe-to-go-back gesture (when being used in-app).
          edgeSwipeDetection: false,
          edgeSwipeThreshold: 20,
          // Autoheight
          autoHeight: false,
          // Set wrapper width
          setWrapperSize: false,
          // Virtual Translate
          virtualTranslate: false,
          // Effects
          effect: 'slide',
          // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
          // Breakpoints
          breakpoints: undefined,
          breakpointsBase: 'window',
          // Slides grid
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: false,
          centeredSlides: false,
          centeredSlidesBounds: false,
          slidesOffsetBefore: 0,
          // in px
          slidesOffsetAfter: 0,
          // in px
          normalizeSlideIndex: true,
          centerInsufficientSlides: false,
          // Disable swiper and hide navigation when container not overflow
          watchOverflow: true,
          // Round length
          roundLengths: false,
          // Touches
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: true,
          shortSwipes: true,
          longSwipes: true,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: true,
          allowTouchMove: true,
          threshold: 0,
          touchMoveStopPropagation: false,
          touchStartPreventDefault: true,
          touchStartForcePreventDefault: false,
          touchReleaseOnEdges: false,
          // Unique Navigation Elements
          uniqueNavElements: true,
          // Resistance
          resistance: true,
          resistanceRatio: 0.85,
          // Progress
          watchSlidesProgress: false,
          // Cursor
          grabCursor: false,
          // Clicks
          preventClicks: true,
          preventClicksPropagation: true,
          slideToClickedSlide: false,
          // Images
          preloadImages: true,
          updateOnImagesReady: true,
          // loop
          loop: false,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: false,
          loopPreventsSlide: true,
          // rewind
          rewind: false,
          // Swiping/no swiping
          allowSlidePrev: true,
          allowSlideNext: true,
          swipeHandler: null,
          // '.swipe-handler',
          noSwiping: true,
          noSwipingClass: 'swiper-no-swiping',
          noSwipingSelector: null,
          // Passive Listeners
          passiveListeners: true,
          maxBackfaceHiddenSlides: 10,
          // NS
          containerModifierClass: 'swiper-',
          // NEW
          slideClass: 'swiper-slide',
          slideBlankClass: 'swiper-slide-invisible-blank',
          slideActiveClass: 'swiper-slide-active',
          slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
          slideVisibleClass: 'swiper-slide-visible',
          slideDuplicateClass: 'swiper-slide-duplicate',
          slideNextClass: 'swiper-slide-next',
          slideDuplicateNextClass: 'swiper-slide-duplicate-next',
          slidePrevClass: 'swiper-slide-prev',
          slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
          wrapperClass: 'swiper-wrapper',
          // Callbacks
          runCallbacksOnInit: true,
          // Internals
          _emitClasses: false,
        }

        function moduleExtendParams(params, allModulesParams) {
          return function extendParams(obj) {
            if (obj === void 0) {
              obj = {}
            }

            const moduleParamName = Object.keys(obj)[0]
            const moduleParams = obj[moduleParamName]

            if (typeof moduleParams !== 'object' || moduleParams === null) {
              extend(allModulesParams, obj)
              return
            }

            if ([
              'navigation',
              'pagination',
              'scrollbar',
            ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
              params[moduleParamName] = { auto: true, }
            }

            if (!(moduleParamName in params && 'enabled' in moduleParams)) {
              extend(allModulesParams, obj)
              return
            }

            if (params[moduleParamName] === true) {
              params[moduleParamName] = { enabled: true, }
            }

            if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
              params[moduleParamName].enabled = true
            }

            if (!params[moduleParamName])
              params[moduleParamName] = { enabled: false, }
            extend(allModulesParams, obj)
          }
        }

        /* eslint no-param-reassign: "off" */
        const prototypes = {
          eventsEmitter,
          update,
          translate,
          transition,
          slide,
          loop,
          grabCursor,
          events: events$1,
          breakpoints,
          checkOverflow: checkOverflow$1,
          classes,
          images,
        }
        const extendedDefaults = {}

        class Swiper {
          constructor() {
            let el
            let params

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key]
            }

            if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
              params = args[0]
            } else {
              [ el, params, ] = args
            }

            if (!params) params = {}
            params = extend({}, params)
            if (el && !params.el) params.el = el

            if (params.el && $(params.el).length > 1) {
              const swipers = []
              $(params.el).each((containerEl) => {
                const newParams = extend({}, params, { el: containerEl, })
                swipers.push(new Swiper(newParams))
              })
              return swipers
            } // Swiper Instance

            const swiper = this
            swiper.__swiper__ = true
            swiper.support = getSupport()
            swiper.device = getDevice({ userAgent: params.userAgent, })
            swiper.browser = getBrowser()
            swiper.eventsListeners = {}
            swiper.eventsAnyListeners = []
            swiper.modules = [ ...swiper.__modules__, ]

            if (params.modules && Array.isArray(params.modules)) {
              swiper.modules.push(...params.modules)
            }

            const allModulesParams = {}
            swiper.modules.forEach((mod) => {
              mod({
                swiper,
                extendParams: moduleExtendParams(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper),
              })
            }) // Extend defaults with modules params

            const swiperParams = extend({}, defaults, allModulesParams) // Extend defaults with passed params

            swiper.params = extend({}, swiperParams, extendedDefaults, params)
            swiper.originalParams = extend({}, swiper.params)
            swiper.passedParams = extend({}, params) // add event listeners

            if (swiper.params && swiper.params.on) {
              Object.keys(swiper.params.on).forEach((eventName) => {
                swiper.on(eventName, swiper.params.on[eventName])
              })
            }

            if (swiper.params && swiper.params.onAny) {
              swiper.onAny(swiper.params.onAny)
            } // Save Dom lib

            swiper.$ = $ // Extend Swiper

            Object.assign(swiper, {
              enabled: swiper.params.enabled,
              el,
              // Classes
              classNames: [],
              // Slides
              slides: $(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],

              // isDirection
              isHorizontal() {
                return swiper.params.direction === 'horizontal'
              },

              isVertical() {
                return swiper.params.direction === 'vertical'
              },

              // Indexes
              activeIndex: 0,
              realIndex: 0,
              //
              isBeginning: true,
              isEnd: false,
              // Props
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: false,
              // Locks
              allowSlideNext: swiper.params.allowSlideNext,
              allowSlidePrev: swiper.params.allowSlidePrev,
              // Touch Events
              touchEvents: (function touchEvents() {
                const touch = [
                  'touchstart',
                  'touchmove',
                  'touchend',
                  'touchcancel',
                ]
                const desktop = [
                  'pointerdown',
                  'pointermove',
                  'pointerup',
                ]
                swiper.touchEventsTouch = {
                  start: touch[0],
                  move: touch[1],
                  end: touch[2],
                  cancel: touch[3],
                }
                swiper.touchEventsDesktop = {
                  start: desktop[0],
                  move: desktop[1],
                  end: desktop[2],
                }
                return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop
              })(),
              touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: now(),
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                isTouchEvent: undefined,
                startMoving: undefined,
              },
              // Clicks
              allowClick: true,
              // Touches
              allowTouchMove: swiper.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              // Images
              imagesToLoad: [],
              imagesLoaded: 0,
            })
            swiper.emit('_swiper') // Init

            if (swiper.params.init) {
              swiper.init()
            } // Return app instance

            return swiper
          }

          static get extendedDefaults() {
            return extendedDefaults
          }

          static get defaults() {
            return defaults
          }

          static extendDefaults(newDefaults) {
            extend(extendedDefaults, newDefaults)
          }

          static installModule(mod) {
            if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = []
            const modules = Swiper.prototype.__modules__

            if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
              modules.push(mod)
            }
          }

          static use(module) {
            if (Array.isArray(module)) {
              module.forEach((m) => Swiper.installModule(m))
              return Swiper
            }

            Swiper.installModule(module)
            return Swiper
          }

          enable() {
            const swiper = this
            if (swiper.enabled) return
            swiper.enabled = true

            if (swiper.params.grabCursor) {
              swiper.setGrabCursor()
            }

            swiper.emit('enable')
          }

          disable() {
            const swiper = this
            if (!swiper.enabled) return
            swiper.enabled = false

            if (swiper.params.grabCursor) {
              swiper.unsetGrabCursor()
            }

            swiper.emit('disable')
          }

          setProgress(progress, speed) {
            const swiper = this
            progress = Math.min(Math.max(progress, 0), 1)
            const min = swiper.minTranslate()
            const max = swiper.maxTranslate()
            const current = (max - min) * progress + min
            swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed)
            swiper.updateActiveIndex()
            swiper.updateSlidesClasses()
          }

          emitContainerClasses() {
            const swiper = this
            if (!swiper.params._emitClasses || !swiper.el) return
            const cls = swiper.el.className.split(' ').filter((className) => {
              return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0
            })
            swiper.emit('_containerClasses', cls.join(' '))
          }

          getSlideClasses(slideEl) {
            const swiper = this
            if (swiper.destroyed) return ''
            return slideEl.className
              .split(' ')
              .filter((className) => {
                return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0
              })
              .join(' ')
          }

          emitSlidesClasses() {
            const swiper = this
            if (!swiper.params._emitClasses || !swiper.el) return
            const updates = []
            swiper.slides.each((slideEl) => {
              const classNames = swiper.getSlideClasses(slideEl)
              updates.push({
                slideEl,
                classNames,
              })
              swiper.emit('_slideClass', slideEl, classNames)
            })
            swiper.emit('_slideClasses', updates)
          }

          slidesPerViewDynamic(view, exact) {
            if (view === void 0) {
              view = 'current'
            }

            if (exact === void 0) {
              exact = false
            }

            const swiper = this
            const { params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex, } = swiper
            let spv = 1

            if (params.centeredSlides) {
              let slideSize = slides[activeIndex].swiperSlideSize
              let breakLoop

              for (let i = activeIndex + 1; i < slides.length; i += 1) {
                if (slides[i] && !breakLoop) {
                  slideSize += slides[i].swiperSlideSize
                  spv += 1
                  if (slideSize > swiperSize) breakLoop = true
                }
              }

              for (let i = activeIndex - 1; i >= 0; i -= 1) {
                if (slides[i] && !breakLoop) {
                  slideSize += slides[i].swiperSlideSize
                  spv += 1
                  if (slideSize > swiperSize) breakLoop = true
                }
              }
            } else {
              // eslint-disable-next-line
              if (view === "current") {
                for (let i = activeIndex + 1; i < slides.length; i += 1) {
                  const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize

                  if (slideInView) {
                    spv += 1
                  }
                }
              } else {
                // previous
                for (let i = activeIndex - 1; i >= 0; i -= 1) {
                  const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize

                  if (slideInView) {
                    spv += 1
                  }
                }
              }
            }

            return spv
          }

          update() {
            const swiper = this
            if (!swiper || swiper.destroyed) return
            const { snapGrid, params, } = swiper // Breakpoints

            if (params.breakpoints) {
              swiper.setBreakpoint()
            }

            swiper.updateSize()
            swiper.updateSlides()
            swiper.updateProgress()
            swiper.updateSlidesClasses()

            function setTranslate() {
              const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate
              const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate())
              swiper.setTranslate(newTranslate)
              swiper.updateActiveIndex()
              swiper.updateSlidesClasses()
            }

            let translated

            if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
              setTranslate()

              if (swiper.params.autoHeight) {
                swiper.updateAutoHeight()
              }
            } else {
              if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true)
              } else {
                translated = swiper.slideTo(swiper.activeIndex, 0, false, true)
              }

              if (!translated) {
                setTranslate()
              }
            }

            if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
              swiper.checkOverflow()
            }

            swiper.emit('update')
          }

          changeDirection(newDirection, needUpdate) {
            if (needUpdate === void 0) {
              needUpdate = true
            }

            const swiper = this
            const currentDirection = swiper.params.direction

            if (!newDirection) {
              // eslint-disable-next-line
              newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
            }

            if (newDirection === currentDirection || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
              return swiper
            }

            swiper.$el.removeClass(`${ swiper.params.containerModifierClass }${ currentDirection }`).addClass(`${ swiper.params.containerModifierClass }${ newDirection }`)
            swiper.emitContainerClasses()
            swiper.params.direction = newDirection
            swiper.slides.each((slideEl) => {
              if (newDirection === 'vertical') {
                slideEl.style.width = ''
              } else {
                slideEl.style.height = ''
              }
            })
            swiper.emit('changeDirection')
            if (needUpdate) swiper.update()
            return swiper
          }

          mount(el) {
            const swiper = this
            if (swiper.mounted) return true // Find el

            const $el = $(el || swiper.params.el)
            el = $el[0]

            if (!el) {
              return false
            }

            el.swiper = swiper

            const getWrapperSelector = () => {
              return `.${ (swiper.params.wrapperClass || '').trim().split(' ').join('.') }`
            }

            const getWrapper = () => {
              if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = $(el.shadowRoot.querySelector(getWrapperSelector())) // Children needs to return slot items

                res.children = (options) => $el.children(options)

                return res
              }

              if (!$el.children) {
                return $($el).children(getWrapperSelector())
              }

              return $el.children(getWrapperSelector())
            } // Find Wrapper

            let $wrapperEl = getWrapper()

            if ($wrapperEl.length === 0 && swiper.params.createElements) {
              const document = getDocument()
              const wrapper = document.createElement('div')
              $wrapperEl = $(wrapper)
              wrapper.className = swiper.params.wrapperClass
              $el.append(wrapper)
              $el.children(`.${ swiper.params.slideClass }`).each((slideEl) => {
                $wrapperEl.append(slideEl)
              })
            }

            Object.assign(swiper, {
              $el,
              el,
              $wrapperEl,
              wrapperEl: $wrapperEl[0],
              mounted: true,
              // RTL
              rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
              rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
              wrongRTL: $wrapperEl.css('display') === '-webkit-box',
            })
            return true
          }

          init(el) {
            const swiper = this
            if (swiper.initialized) return swiper
            const mounted = swiper.mount(el)
            if (mounted === false) return swiper
            swiper.emit('beforeInit') // Set breakpoint

            if (swiper.params.breakpoints) {
              swiper.setBreakpoint()
            } // Add Classes

            swiper.addClasses() // Create loop

            if (swiper.params.loop) {
              swiper.loopCreate()
            } // Update size

            swiper.updateSize() // Update slides

            swiper.updateSlides()

            if (swiper.params.watchOverflow) {
              swiper.checkOverflow()
            } // Set Grab Cursor

            if (swiper.params.grabCursor && swiper.enabled) {
              swiper.setGrabCursor()
            }

            if (swiper.params.preloadImages) {
              swiper.preloadImages()
            } // Slide To Initial Slide

            if (swiper.params.loop) {
              swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true)
            } else {
              swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true)
            } // Attach events

            swiper.attachEvents() // Init Flag

            swiper.initialized = true // Emit

            swiper.emit('init')
            swiper.emit('afterInit')
            return swiper
          }

          destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) {
              deleteInstance = true
            }

            if (cleanStyles === void 0) {
              cleanStyles = true
            }

            const swiper = this
            const { params, $el, $wrapperEl, slides, } = swiper

            if (typeof swiper.params === 'undefined' || swiper.destroyed) {
              return null
            }

            swiper.emit('beforeDestroy') // Init Flag

            swiper.initialized = false // Detach events

            swiper.detachEvents() // Destroy loop

            if (params.loop) {
              swiper.loopDestroy()
            } // Cleanup styles

            if (cleanStyles) {
              swiper.removeClasses()
              $el.removeAttr('style')
              $wrapperEl.removeAttr('style')

              if (slides && slides.length) {
                slides.removeClass([
                  params.slideVisibleClass,
                  params.slideActiveClass,
                  params.slideNextClass,
                  params.slidePrevClass,
                ].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index')
              }
            }

            swiper.emit('destroy') // Detach emitter events

            Object.keys(swiper.eventsListeners).forEach((eventName) => {
              swiper.off(eventName)
            })

            if (deleteInstance !== false) {
              swiper.$el[0].swiper = null
              deleteProps(swiper)
            }

            swiper.destroyed = true
            return null
          }
        }

        Object.keys(prototypes).forEach((prototypeGroup) => {
          Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod]
          })
        })
        Swiper.use([
          Resize,
          Observer,
        ])

        function Virtual(_ref) {
          const { swiper, extendParams, on, emit, } = _ref
          extendParams({
            virtual: {
              enabled: false,
              slides: [],
              cache: true,
              renderSlide: null,
              renderExternal: null,
              renderExternalUpdate: true,
              addSlidesBefore: 0,
              addSlidesAfter: 0,
            },
          })
          let cssModeTimeout
          swiper.virtual = {
            cache: {},
            from: undefined,
            to: undefined,
            slides: [],
            offset: 0,
            slidesGrid: [],
          }

          function renderSlide(slide, index) {
            const params = swiper.params.virtual

            if (params.cache && swiper.virtual.cache[index]) {
              return swiper.virtual.cache[index]
            }

            const $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(`<
            div class

            =
            "${ swiper.params.slideClass }"
            data-swiper-slide-index

            =
            "${ index }"
            > ${ slide }<

            /
            div >`)
            if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index)
            if (params.cache) swiper.virtual.cache[index] = $slideEl
            return $slideEl
          }

          function update(force) {
            const { slidesPerView, slidesPerGroup, centeredSlides, } = swiper.params
            const { addSlidesBefore, addSlidesAfter, } = swiper.params.virtual
            const {
              from: previousFrom,
              to: previousTo,
              slides,
              slidesGrid: previousSlidesGrid,
              offset: previousOffset,
            } = swiper.virtual

            if (!swiper.params.cssMode) {
              swiper.updateActiveIndex()
            }

            const activeIndex = swiper.activeIndex || 0
            let offsetProp
            if (swiper.rtlTranslate) offsetProp = 'right'
            else offsetProp = swiper.isHorizontal() ? 'left' : 'top'
            let slidesAfter
            let slidesBefore

            if (centeredSlides) {
              slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter
              slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore
            } else {
              slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter
              slidesBefore = slidesPerGroup + addSlidesBefore
            }

            const from = Math.max((activeIndex || 0) - slidesBefore, 0)
            const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1)
            const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0)
            Object.assign(swiper.virtual, {
              from,
              to,
              offset,
              slidesGrid: swiper.slidesGrid,
            })

            function onRendered() {
              swiper.updateSlides()
              swiper.updateProgress()
              swiper.updateSlidesClasses()

              if (swiper.lazy && swiper.params.lazy.enabled) {
                swiper.lazy.load()
              }

              emit('virtualUpdate')
            }

            if (previousFrom === from && previousTo === to && !force) {
              if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                swiper.slides.css(offsetProp, `${ offset }px`)
              }

              swiper.updateProgress()
              emit('virtualUpdate')
              return
            }

            if (swiper.params.virtual.renderExternal) {
              swiper.params.virtual.renderExternal.call(swiper, {
                offset,
                from,
                to,
                slides: (function getSlides() {
                  const slidesToRender = []

                  for (let i = from; i <= to; i += 1) {
                    slidesToRender.push(slides[i])
                  }

                  return slidesToRender
                })(),
              })

              if (swiper.params.virtual.renderExternalUpdate) {
                onRendered()
              } else {
                emit('virtualUpdate')
              }

              return
            }

            const prependIndexes = []
            const appendIndexes = []

            if (force) {
              swiper.$wrapperEl.find(`.${ swiper.params.slideClass }`).remove()
            } else {
              for (let i = previousFrom; i <= previousTo; i += 1) {
                if (i < from || i > to) {
                  swiper.$wrapperEl.find(`.${ swiper.params.slideClass }[data-swiper-slide-index="${ i }"]`).remove()
                }
              }
            }

            for (let i = 0; i < slides.length; i += 1) {
              if (i >= from && i <= to) {
                if (typeof previousTo === 'undefined' || force) {
                  appendIndexes.push(i)
                } else {
                  if (i > previousTo) appendIndexes.push(i)
                  if (i < previousFrom) prependIndexes.push(i)
                }
              }
            }

            appendIndexes.forEach((index) => {
              swiper.$wrapperEl.append(renderSlide(slides[index], index))
            })
            prependIndexes
              .sort((a, b) => b - a)
              .forEach((index) => {
                swiper.$wrapperEl.prepend(renderSlide(slides[index], index))
              })
            swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${ offset }px`)
            onRendered()
          }

          function appendSlide(slides) {
            if (typeof slides === 'object' && 'length' in slides) {
              for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) swiper.virtual.slides.push(slides[i])
              }
            } else {
              swiper.virtual.slides.push(slides)
            }

            update(true)
          }

          function prependSlide(slides) {
            const activeIndex = swiper.activeIndex
            let newActiveIndex = activeIndex + 1
            let numberOfNewSlides = 1

            if (Array.isArray(slides)) {
              for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) swiper.virtual.slides.unshift(slides[i])
              }

              newActiveIndex = activeIndex + slides.length
              numberOfNewSlides = slides.length
            } else {
              swiper.virtual.slides.unshift(slides)
            }

            if (swiper.params.virtual.cache) {
              const cache = swiper.virtual.cache
              const newCache = {}
              Object.keys(cache).forEach((cachedIndex) => {
                const $cachedEl = cache[cachedIndex]
                const cachedElIndex = $cachedEl.attr('data-swiper-slide-index')

                if (cachedElIndex) {
                  $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides)
                }

                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl
              })
              swiper.virtual.cache = newCache
            }

            update(true)
            swiper.slideTo(newActiveIndex, 0)
          }

          function removeSlide(slidesIndexes) {
            if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return
            let activeIndex = swiper.activeIndex

            if (Array.isArray(slidesIndexes)) {
              for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                swiper.virtual.slides.splice(slidesIndexes[i], 1)

                if (swiper.params.virtual.cache) {
                  delete swiper.virtual.cache[slidesIndexes[i]]
                }

                if (slidesIndexes[i] < activeIndex) activeIndex -= 1
                activeIndex = Math.max(activeIndex, 0)
              }
            } else {
              swiper.virtual.slides.splice(slidesIndexes, 1)

              if (swiper.params.virtual.cache) {
                delete swiper.virtual.cache[slidesIndexes]
              }

              if (slidesIndexes < activeIndex) activeIndex -= 1
              activeIndex = Math.max(activeIndex, 0)
            }

            update(true)
            swiper.slideTo(activeIndex, 0)
          }

          function removeAllSlides() {
            swiper.virtual.slides = []

            if (swiper.params.virtual.cache) {
              swiper.virtual.cache = {}
            }

            update(true)
            swiper.slideTo(0, 0)
          }

          on('beforeInit', () => {
            if (!swiper.params.virtual.enabled) return
            swiper.virtual.slides = swiper.params.virtual.slides
            swiper.classNames.push(`${ swiper.params.containerModifierClass }virtual`)
            swiper.params.watchSlidesProgress = true
            swiper.originalParams.watchSlidesProgress = true

            if (!swiper.params.initialSlide) {
              update()
            }
          })
          on('setTranslate', () => {
            if (!swiper.params.virtual.enabled) return

            if (swiper.params.cssMode && !swiper._immediateVirtual) {
              clearTimeout(cssModeTimeout)
              cssModeTimeout = setTimeout(() => {
                update()
              }, 100)
            } else {
              update()
            }
          })
          on('init update resize', () => {
            if (!swiper.params.virtual.enabled) return

            if (swiper.params.cssMode) {
              setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${ swiper.virtualSize }px`)
            }
          })
          Object.assign(swiper.virtual, {
            appendSlide,
            prependSlide,
            removeSlide,
            removeAllSlides,
            update,
          })
        }

        /* eslint-disable consistent-return */
        function Keyboard(_ref) {
          const { swiper, extendParams, on, emit, } = _ref
          const document = getDocument()
          const window = getWindow()
          swiper.keyboard = { enabled: false, }
          extendParams({
            keyboard: {
              enabled: false,
              onlyInViewport: true,
              pageUpDown: true,
            },
          })

          function handle(event) {
            if (!swiper.enabled) return
            const { rtlTranslate: rtl, } = swiper
            let e = event
            if (e.originalEvent) e = e.originalEvent // jquery fix

            const kc = e.keyCode || e.charCode
            const pageUpDown = swiper.params.keyboard.pageUpDown
            const isPageUp = pageUpDown && kc === 33
            const isPageDown = pageUpDown && kc === 34
            const isArrowLeft = kc === 37
            const isArrowRight = kc === 39
            const isArrowUp = kc === 38
            const isArrowDown = kc === 40 // Directions locks

            if (!swiper.allowSlideNext && ((swiper.isHorizontal() && isArrowRight) || (swiper.isVertical() && isArrowDown) || isPageDown)) {
              return false
            }

            if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && isArrowLeft) || (swiper.isVertical() && isArrowUp) || isPageUp)) {
              return false
            }

            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
              return undefined
            }

            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
              return undefined
            }

            if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
              let inView = false // Check that swiper should be inside of visible area of window

              if (swiper.$el.parents(`.${ swiper.params.slideClass }`).length > 0 && swiper.$el.parents(`.${ swiper.params.slideActiveClass }`).length === 0) {
                return undefined
              }

              const $el = swiper.$el
              const swiperWidth = $el[0].clientWidth
              const swiperHeight = $el[0].clientHeight
              const windowWidth = window.innerWidth
              const windowHeight = window.innerHeight
              const swiperOffset = swiper.$el.offset()
              if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft
              const swiperCoord = [
                [
                  swiperOffset.left,
                  swiperOffset.top,
                ],
                [
                  swiperOffset.left + swiperWidth,
                  swiperOffset.top,
                ],
                [
                  swiperOffset.left,
                  swiperOffset.top + swiperHeight,
                ],
                [
                  swiperOffset.left + swiperWidth,
                  swiperOffset.top + swiperHeight,
                ],
              ]

              for (let i = 0; i < swiperCoord.length; i += 1) {
                const point = swiperCoord[i]

                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                  if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

                  inView = true
                }
              }

              if (!inView) return undefined
            }

            if (swiper.isHorizontal()) {
              if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault()
                else e.returnValue = false
              }

              if (((isPageDown || isArrowRight) && !rtl) || ((isPageUp || isArrowLeft) && rtl)) swiper.slideNext()
              if (((isPageUp || isArrowLeft) && !rtl) || ((isPageDown || isArrowRight) && rtl)) swiper.slidePrev()
            } else {
              if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault()
                else e.returnValue = false
              }

              if (isPageDown || isArrowDown) swiper.slideNext()
              if (isPageUp || isArrowUp) swiper.slidePrev()
            }

            emit('keyPress', kc)
            return undefined
          }

          function enable() {
            if (swiper.keyboard.enabled) return
            $(document).on('keydown', handle)
            swiper.keyboard.enabled = true
          }

          function disable() {
            if (!swiper.keyboard.enabled) return
            $(document).off('keydown', handle)
            swiper.keyboard.enabled = false
          }

          on('init', () => {
            if (swiper.params.keyboard.enabled) {
              enable()
            }
          })
          on('destroy', () => {
            if (swiper.keyboard.enabled) {
              disable()
            }
          })
          Object.assign(swiper.keyboard, {
            enable,
            disable,
          })
        }

        /* eslint-disable consistent-return */
        function Mousewheel(_ref) {
          const { swiper, extendParams, on, emit, } = _ref
          const window = getWindow()
          extendParams({
            mousewheel: {
              enabled: false,
              releaseOnEdges: false,
              invert: false,
              forceToAxis: false,
              sensitivity: 1,
              eventsTarget: 'container',
              thresholdDelta: null,
              thresholdTime: null,
            },
          })
          swiper.mousewheel = { enabled: false, }
          let timeout
          let lastScrollTime = now()
          let lastEventBeforeSnap
          const recentWheelEvents = []

          function normalize(e) {
            // Reasonable defaults
            const PIXEL_STEP = 10
            const LINE_HEIGHT = 40
            const PAGE_HEIGHT = 800
            let sX = 0
            let sY = 0 // spinX, spinY

            let pX = 0
            let pY = 0 // pixelX, pixelY
            // Legacy

            if ('detail' in e) {
              sY = e.detail
            }

            if ('wheelDelta' in e) {
              sY = -e.wheelDelta / 120
            }

            if ('wheelDeltaY' in e) {
              sY = -e.wheelDeltaY / 120
            }

            if ('wheelDeltaX' in e) {
              sX = -e.wheelDeltaX / 120
            } // side scrolling on FF with DOMMouseScroll

            if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
              sX = sY
              sY = 0
            }

            pX = sX * PIXEL_STEP
            pY = sY * PIXEL_STEP

            if ('deltaY' in e) {
              pY = e.deltaY
            }

            if ('deltaX' in e) {
              pX = e.deltaX
            }

            if (e.shiftKey && !pX) {
              // if user scrolls with shift he wants horizontal scroll
              pX = pY
              pY = 0
            }

            if ((pX || pY) && e.deltaMode) {
              if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT
                pY *= LINE_HEIGHT
              } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT
                pY *= PAGE_HEIGHT
              }
            } // Fall-back if spin cannot be determined

            if (pX && !sX) {
              sX = pX < 1 ? -1 : 1
            }

            if (pY && !sY) {
              sY = pY < 1 ? -1 : 1
            }

            return {
              spinX: sX,
              spinY: sY,
              pixelX: pX,
              pixelY: pY,
            }
          }

          function handleMouseEnter() {
            if (!swiper.enabled) return
            swiper.mouseEntered = true
          }

          function handleMouseLeave() {
            if (!swiper.enabled) return
            swiper.mouseEntered = false
          }

          function animateSlider(newEvent) {
            if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
              // Prevent if delta of wheel scroll delta is below configured threshold
              return false
            }

            if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
              // Prevent if time between scrolls is below configured threshold
              return false
            } // If the movement is NOT big enough and
            // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
            //   Don't go any further (avoid insignificant scroll movement).

            if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
              // Return false as a default
              return true
            } // If user is scrolling towards the end:
            //   If the slider hasn't hit the latest slide or
            //   if the slider is a loop and
            //   if the slider isn't moving right now:
            //     Go to next slide and
            //     emit a scroll event.
            // Else (the user is scrolling towards the beginning) and
            // if the slider hasn't hit the first slide or
            // if the slider is a loop and
            // if the slider isn't moving right now:
            //   Go to prev slide and
            //   emit a scroll event.

            if (newEvent.direction < 0) {
              if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext()
                emit('scroll', newEvent.raw)
              }
            } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
              swiper.slidePrev()
              emit('scroll', newEvent.raw)
            } // If you got here is because an animation has been triggered so store the current time

            lastScrollTime = new window.Date().getTime() // Return false as a default

            return false
          }

          function releaseScroll(newEvent) {
            const params = swiper.params.mousewheel

            if (newEvent.direction < 0) {
              if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
                // Return true to animate scroll on edges
                return true
              }
            } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
              // Return true to animate scroll on edges
              return true
            }

            return false
          }

          function handle(event) {
            let e = event
            let disableParentSwiper = true
            if (!swiper.enabled) return
            const params = swiper.params.mousewheel

            if (swiper.params.cssMode) {
              e.preventDefault()
            }

            let target = swiper.$el

            if (swiper.params.mousewheel.eventsTarget !== 'container') {
              target = $(swiper.params.mousewheel.eventsTarget)
            }

            if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true
            if (e.originalEvent) e = e.originalEvent // jquery fix

            let delta = 0
            const rtlFactor = swiper.rtlTranslate ? -1 : 1
            const data = normalize(e)

            if (params.forceToAxis) {
              if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor
                else return true
              } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY
              else return true
            } else {
              delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY
            }

            if (delta === 0) return true
            if (params.invert) delta = -delta // Get the scroll positions

            let positions = swiper.getTranslate() + delta * params.sensitivity
            if (positions >= swiper.minTranslate()) positions = swiper.minTranslate()
            if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate() // When loop is true:
            //     the disableParentSwiper will be true.
            // When loop is false:
            //     if the scroll positions is not on edge,
            //     then the disableParentSwiper will be true.
            //     if the scroll on edge positions,
            //     then the disableParentSwiper will be false.

            disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate())
            if (disableParentSwiper && swiper.params.nested) e.stopPropagation()

            if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
              // Register the new event in a variable which stores the relevant data
              const newEvent = {
                time: now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event,
              } // Keep the most recent events

              if (recentWheelEvents.length >= 2) {
                recentWheelEvents.shift() // only store the last N events
              }

              const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined
              recentWheelEvents.push(newEvent) // If there is at least one previous recorded event:
              //   If direction has changed or
              //   if the scroll is quicker than the previous one:
              //     Animate the slider.
              // Else (this is the first time the wheel is moved):
              //     Animate the slider.

              if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
                  animateSlider(newEvent)
                }
              } else {
                animateSlider(newEvent)
              } // If it's time to release the scroll:
              //   Return now so you don't hit the preventDefault.

              if (releaseScroll(newEvent)) {
                return true
              }
            } else {
              // Freemode or scrollContainer:
              // If we recently snapped after a momentum scroll, then ignore wheel events
              // to give time for the deceleration to finish. Stop ignoring after 500 msecs
              // or if it's a new scroll (larger delta or inverse sign as last event before
              // an end-of-momentum snap).
              const newEvent = {
                time: now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
              }
              const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction

              if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined

                if (swiper.params.loop) {
                  swiper.loopFix()
                }

                let position = swiper.getTranslate() + delta * params.sensitivity
                const wasBeginning = swiper.isBeginning
                const wasEnd = swiper.isEnd
                if (position >= swiper.minTranslate()) position = swiper.minTranslate()
                if (position <= swiper.maxTranslate()) position = swiper.maxTranslate()
                swiper.setTransition(0)
                swiper.setTranslate(position)
                swiper.updateProgress()
                swiper.updateActiveIndex()
                swiper.updateSlidesClasses()

                if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
                  swiper.updateSlidesClasses()
                }

                if (swiper.params.freeMode.sticky) {
                  // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                  // the end of a momentum scroll by storing recent (N=15?) wheel events.
                  // 1. do all N events have decreasing or same (absolute value) delta?
                  // 2. did all N events arrive in the last M (M=500?) msecs?
                  // 3. does the earliest event have an (absolute value) delta that's
                  //    at least P (P=1?) larger than the most recent event's delta?
                  // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                  // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                  // Snap immediately and ignore remaining wheel events in this scroll.
                  // See comment above for "remaining wheel events in this scroll" determination.
                  // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                  clearTimeout(timeout)
                  timeout = undefined

                  if (recentWheelEvents.length >= 15) {
                    recentWheelEvents.shift() // only store the last N events
                  }

                  const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined
                  const firstEvent = recentWheelEvents[0]
                  recentWheelEvents.push(newEvent)

                  if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                    // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                    recentWheelEvents.splice(0)
                  } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                    // We're at the end of the deceleration of a momentum scroll, so there's no need
                    // to wait for more events. Snap ASAP on the next tick.
                    // Also, because there's some remaining momentum we'll bias the snap in the
                    // direction of the ongoing scroll because it's better UX for the scroll to snap
                    // in the same direction as the scroll instead of reversing to snap.  Therefore,
                    // if it's already scrolled more than 20% in the current direction, keep going.
                    const snapToThreshold = delta > 0 ? 0.8 : 0.2
                    lastEventBeforeSnap = newEvent
                    recentWheelEvents.splice(0)
                    timeout = nextTick(() => {
                      swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold)
                    }, 0) // no delay; move on next tick
                  }

                  if (!timeout) {
                    // if we get here, then we haven't detected the end of a momentum scroll, so
                    // we'll consider a scroll "complete" when there haven't been any wheel events
                    // for 500ms.
                    timeout = nextTick(() => {
                      const snapToThreshold = 0.5
                      lastEventBeforeSnap = newEvent
                      recentWheelEvents.splice(0)
                      swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold)
                    }, 500)
                  }
                } // Emit event

                if (!ignoreWheelEvents) emit('scroll', e) // Stop autoplay

                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop() // Return page scroll on edge positions

                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true
              }
            }

            if (e.preventDefault) e.preventDefault()
            else e.returnValue = false
            return false
          }

          function events(method) {
            let target = swiper.$el

            if (swiper.params.mousewheel.eventsTarget !== 'container') {
              target = $(swiper.params.mousewheel.eventsTarget)
            }

            target[method]('mouseenter', handleMouseEnter)
            target[method]('mouseleave', handleMouseLeave)
            target[method]('wheel', handle)
          }

          function enable() {
            if (swiper.params.cssMode) {
              swiper.wrapperEl.removeEventListener('wheel', handle)
              return true
            }

            if (swiper.mousewheel.enabled) return false
            events('on')
            swiper.mousewheel.enabled = true
            return true
          }

          function disable() {
            if (swiper.params.cssMode) {
              swiper.wrapperEl.addEventListener(event, handle)
              return true
            }

            if (!swiper.mousewheel.enabled) return false
            events('off')
            swiper.mousewheel.enabled = false
            return true
          }

          on('init', () => {
            if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
              disable()
            }

            if (swiper.params.mousewheel.enabled) enable()
          })
          on('destroy', () => {
            if (swiper.params.cssMode) {
              enable()
            }

            if (swiper.mousewheel.enabled) disable()
          })
          Object.assign(swiper.mousewheel, {
            enable,
            disable,
          })
        }

        function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
          const document = getDocument()

          if (swiper.params.createElements) {
            Object.keys(checkProps).forEach((key) => {
              if (!params[key] && params.auto === true) {
                let element = swiper.$el.children(`.${ checkProps[key] }`)[0]

                if (!element) {
                  element = document.createElement('div')
                  element.className = checkProps[key]
                  swiper.$el.append(element)
                }

                params[key] = element
                originalParams[key] = element
              }
            })
          }

          return params
        }

        function Navigation(_ref) {
          const { swiper, extendParams, on, emit, } = _ref
          extendParams({
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: false,
              disabledClass: 'swiper-button-disabled',
              hiddenClass: 'swiper-button-hidden',
              lockClass: 'swiper-button-lock',
              navigationDisabledClass: 'swiper-navigation-disabled',
            },
          })
          swiper.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }

          function getEl(el) {
            let $el

            if (el) {
              $el = $(el)

              if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
                $el = swiper.$el.find(el)
              }
            }

            return $el
          }

          function toggleEl($el, disabled) {
            const params = swiper.params.navigation

            if ($el && $el.length > 0) {
              $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass)
              if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled

              if (swiper.params.watchOverflow && swiper.enabled) {
                $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass)
              }
            }
          }

          function update() {
            // Update Navigation Buttons
            if (swiper.params.loop) return
            const { $nextEl, $prevEl, } = swiper.navigation
            toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind)
            toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind)
          }

          function onPrevClick(e) {
            e.preventDefault()
            if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return
            swiper.slidePrev()
          }

          function onNextClick(e) {
            e.preventDefault()
            if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return
            swiper.slideNext()
          }

          function init() {
            const params = swiper.params.navigation
            swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
              nextEl: 'swiper-button-next',
              prevEl: 'swiper-button-prev',
            })
            if (!(params.nextEl || params.prevEl)) return
            const $nextEl = getEl(params.nextEl)
            const $prevEl = getEl(params.prevEl)

            if ($nextEl && $nextEl.length > 0) {
              $nextEl.on('click', onNextClick)
            }

            if ($prevEl && $prevEl.length > 0) {
              $prevEl.on('click', onPrevClick)
            }

            Object.assign(swiper.navigation, {
              $nextEl,
              nextEl: $nextEl && $nextEl[0],
              $prevEl,
              prevEl: $prevEl && $prevEl[0],
            })

            if (!swiper.enabled) {
              if ($nextEl) $nextEl.addClass(params.lockClass)
              if ($prevEl) $prevEl.addClass(params.lockClass)
            }
          }

          function destroy() {
            const { $nextEl, $prevEl, } = swiper.navigation

            if ($nextEl && $nextEl.length) {
              $nextEl.off('click', onNextClick)
              $nextEl.removeClass(swiper.params.navigation.disabledClass)
            }

            if ($prevEl && $prevEl.length) {
              $prevEl.off('click', onPrevClick)
              $prevEl.removeClass(swiper.params.navigation.disabledClass)
            }
          }

          on('init', () => {
            if (swiper.params.navigation.enabled === false) {
              // eslint-disable-next-line
              disable();
            } else {
              init()
              update()
            }
          })
          on('toEdge fromEdge lock unlock', () => {
            update()
          })
          on('destroy', () => {
            destroy()
          })
          on('enable disable', () => {
            const { $nextEl, $prevEl, } = swiper.navigation

            if ($nextEl) {
              $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass)
            }

            if ($prevEl) {
              $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass)
            }
          })
          on('click', (_s, e) => {
            const { $nextEl, $prevEl, } = swiper.navigation
            const targetEl = e.target

            if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
              if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return
              let isHidden

              if ($nextEl) {
                isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass)
              } else if ($prevEl) {
                isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass)
              }

              if (isHidden === true) {
                emit('navigationShow')
              } else {
                emit('navigationHide')
              }

              if ($nextEl) {
                $nextEl.toggleClass(swiper.params.navigation.hiddenClass)
              }

              if ($prevEl) {
                $prevEl.toggleClass(swiper.params.navigation.hiddenClass)
              }
            }
          })

          const enable = () => {
            swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass)
            init()
            update()
          }

          const disable = () => {
            swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass)
            destroy()
          }

          Object.assign(swiper.navigation, {
            enable,
            disable,
            update,
            init,
            destroy,
          })
        }

        function classesToSelector(classes) {
          if (classes === void 0) {
            classes = ''
          }

          return `.${ classes
            .trim()
            .replace(/([\.:!\/])/g, "\\$1") // eslint-disable-line
            .replace(/ /g, '.') }`
        }

        function Pagination(_ref) {
          const { swiper, extendParams, on, emit, } = _ref
          const pfx = 'swiper-pagination'
          extendParams({
            pagination: {
              el: null,
              bulletElement: 'span',
              clickable: false,
              hideOnClick: false,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: false,
              type: 'bullets',
              // 'bullets' or 'progressbar' or 'fraction' or 'custom'
              dynamicBullets: false,
              dynamicMainBullets: 1,
              formatFractionCurrent: (number) => number,
              formatFractionTotal: (number) => number,
              bulletClass: `${ pfx }-bullet`,
              bulletActiveClass: `${ pfx }-bullet-active`,
              modifierClass: `${ pfx }-`,
              currentClass: `${ pfx }-current`,
              totalClass: `${ pfx }-total`,
              hiddenClass: `${ pfx }-hidden`,
              progressbarFillClass: `${ pfx }-progressbar-fill`,
              progressbarOppositeClass: `${ pfx }-progressbar-opposite`,
              clickableClass: `${ pfx }-clickable`,
              lockClass: `${ pfx }-lock`,
              horizontalClass: `${ pfx }-horizontal`,
              verticalClass: `${ pfx }-vertical`,
              paginationDisabledClass: `${ pfx }-disabled`,
            },
          })
          swiper.pagination = {
            el: null,
            $el: null,
            bullets: [],
          }
          let bulletSize
          let dynamicBulletIndex = 0

          function isPaginationDisabled() {
            return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0
          }

          function setSideBullets($bulletEl, position) {
            const { bulletActiveClass, } = swiper.params.pagination
            $bulletEl[position]().addClass(`${ bulletActiveClass }-${ position }`)[position]().addClass(`${ bulletActiveClass }-${ position }-${ position }`)
          }

          function update() {
            // Render || Update Pagination bullets/items
            const rtl = swiper.rtl
            const params = swiper.params.pagination
            if (isPaginationDisabled()) return
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length
            const $el = swiper.pagination.$el // Current/Total

            let current
            const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length

            if (swiper.params.loop) {
              current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup)

              if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
                current -= slidesLength - swiper.loopedSlides * 2
              }

              if (current > total - 1) current -= total
              if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current
            } else if (typeof swiper.snapIndex !== 'undefined') {
              current = swiper.snapIndex
            } else {
              current = swiper.activeIndex || 0
            } // Types

            if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
              const bullets = swiper.pagination.bullets
              let firstIndex
              let lastIndex
              let midIndex

              if (params.dynamicBullets) {
                bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true)
                $el.css(swiper.isHorizontal() ? 'width' : 'height', `${ bulletSize * (params.dynamicMainBullets + 4) }px`)

                if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                  dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0)

                  if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                    dynamicBulletIndex = params.dynamicMainBullets - 1
                  } else if (dynamicBulletIndex < 0) {
                    dynamicBulletIndex = 0
                  }
                }

                firstIndex = Math.max(current - dynamicBulletIndex, 0)
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1)
                midIndex = (lastIndex + firstIndex) / 2
              }

              bullets.removeClass([
                '',
                '-next',
                '-next-next',
                '-prev',
                '-prev-prev',
                '-main',
              ].map((suffix) => `${ params.bulletActiveClass }${ suffix }`).join(' '))

              if ($el.length > 1) {
                bullets.each((bullet) => {
                  const $bullet = $(bullet)
                  const bulletIndex = $bullet.index()

                  if (bulletIndex === current) {
                    $bullet.addClass(params.bulletActiveClass)
                  }

                  if (params.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                      $bullet.addClass(`${ params.bulletActiveClass }-main`)
                    }

                    if (bulletIndex === firstIndex) {
                      setSideBullets($bullet, 'prev')
                    }

                    if (bulletIndex === lastIndex) {
                      setSideBullets($bullet, 'next')
                    }
                  }
                })
              } else {
                const $bullet = bullets.eq(current)
                const bulletIndex = $bullet.index()
                $bullet.addClass(params.bulletActiveClass)

                if (params.dynamicBullets) {
                  const $firstDisplayedBullet = bullets.eq(firstIndex)
                  const $lastDisplayedBullet = bullets.eq(lastIndex)

                  for (let i = firstIndex; i <= lastIndex; i += 1) {
                    bullets.eq(i).addClass(`${ params.bulletActiveClass }-main`)
                  }

                  if (swiper.params.loop) {
                    if (bulletIndex >= bullets.length) {
                      for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                        bullets.eq(bullets.length - i).addClass(`${ params.bulletActiveClass }-main`)
                      }

                      bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${ params.bulletActiveClass }-prev`)
                    } else {
                      setSideBullets($firstDisplayedBullet, 'prev')
                      setSideBullets($lastDisplayedBullet, 'next')
                    }
                  } else {
                    setSideBullets($firstDisplayedBullet, 'prev')
                    setSideBullets($lastDisplayedBullet, 'next')
                  }
                }
              }

              if (params.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4)
                const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize
                const offsetProp = rtl ? 'right' : 'left'
                bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${ bulletsOffset }px`)
              }
            }

            if (params.type === 'fraction') {
              $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1))
              $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total))
            }

            if (params.type === 'progressbar') {
              let progressbarDirection

              if (params.progressbarOpposite) {
                progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal'
              } else {
                progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical'
              }

              const scale = (current + 1) / total
              let scaleX = 1
              let scaleY = 1

              if (progressbarDirection === 'horizontal') {
                scaleX = scale
              } else {
                scaleY = scale
              }

              $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${ scaleX }) scaleY(${ scaleY })`).transition(swiper.params.speed)
            }

            if (params.type === 'custom' && params.renderCustom) {
              $el.html(params.renderCustom(swiper, current + 1, total))
              emit('paginationRender', $el[0])
            } else {
              emit('paginationUpdate', $el[0])
            }

            if (swiper.params.watchOverflow && swiper.enabled) {
              $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass)
            }
          }

          function render() {
            // Render Container
            const params = swiper.params.pagination
            if (isPaginationDisabled()) return
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length
            const $el = swiper.pagination.$el
            let paginationHTML = ''

            if (params.type === 'bullets') {
              let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length

              if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
                numberOfBullets = slidesLength
              }

              for (let i = 0; i < numberOfBullets; i += 1) {
                if (params.renderBullet) {
                  paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass)
                } else {
                  paginationHTML += `<${ params.bulletElement } class="${ params.bulletClass }"></${ params.bulletElement }>`
                }
              }

              $el.html(paginationHTML)
              swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass))
            }

            if (params.type === 'fraction') {
              if (params.renderFraction) {
                paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass)
              } else {
                paginationHTML = `<span class="${ params.currentClass }"></span>` + ' / ' + `<span class="${ params.totalClass }"></span>`
              }

              $el.html(paginationHTML)
            }

            if (params.type === 'progressbar') {
              if (params.renderProgressbar) {
                paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass)
              } else {
                paginationHTML = `<span class="${ params.progressbarFillClass }"></span>`
              }

              $el.html(paginationHTML)
            }

            if (params.type !== 'custom') {
              emit('paginationRender', swiper.pagination.$el[0])
            }
          }

          function init() {
            swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, { el: 'swiper-pagination', })
            const params = swiper.params.pagination
            if (!params.el) return
            let $el = $(params.el)
            if ($el.length === 0) return

            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
              $el = swiper.$el.find(params.el) // check if it belongs to another nested Swiper

              if ($el.length > 1) {
                $el = $el.filter((el) => {
                  if ($(el).parents('.swiper')[0] !== swiper.el) return false
                  return true
                })
              }
            }

            if (params.type === 'bullets' && params.clickable) {
              $el.addClass(params.clickableClass)
            }

            $el.addClass(params.modifierClass + params.type)
            $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass)

            if (params.type === 'bullets' && params.dynamicBullets) {
              $el.addClass(`${ params.modifierClass }${ params.type }-dynamic`)
              dynamicBulletIndex = 0

              if (params.dynamicMainBullets < 1) {
                params.dynamicMainBullets = 1
              }
            }

            if (params.type === 'progressbar' && params.progressbarOpposite) {
              $el.addClass(params.progressbarOppositeClass)
            }

            if (params.clickable) {
              $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
                e.preventDefault()
                let index = $(this).index() * swiper.params.slidesPerGroup
                if (swiper.params.loop) index += swiper.loopedSlides
                swiper.slideTo(index)
              })
            }

            Object.assign(swiper.pagination, {
              $el,
              el: $el[0],
            })

            if (!swiper.enabled) {
              $el.addClass(params.lockClass)
            }
          }

          function destroy() {
            const params = swiper.params.pagination
            if (isPaginationDisabled()) return
            const $el = swiper.pagination.$el
            $el.removeClass(params.hiddenClass)
            $el.removeClass(params.modifierClass + params.type)
            $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass)
            if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass)

            if (params.clickable) {
              $el.off('click', classesToSelector(params.bulletClass))
            }
          }

          on('init', () => {
            if (swiper.params.pagination.enabled === false) {
              // eslint-disable-next-line
              disable();
            } else {
              init()
              render()
              update()
            }
          })
          on('activeIndexChange', () => {
            if (swiper.params.loop) {
              update()
            } else if (typeof swiper.snapIndex === 'undefined') {
              update()
            }
          })
          on('snapIndexChange', () => {
            if (!swiper.params.loop) {
              update()
            }
          })
          on('slidesLengthChange', () => {
            if (swiper.params.loop) {
              render()
              update()
            }
          })
          on('snapGridLengthChange', () => {
            if (!swiper.params.loop) {
              render()
              update()
            }
          })
          on('destroy', () => {
            destroy()
          })
          on('enable disable', () => {
            const { $el, } = swiper.pagination

            if ($el) {
              $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass)
            }
          })
          on('lock unlock', () => {
            update()
          })
          on('click', (_s, e) => {
            const targetEl = e.target
            const { $el, } = swiper.pagination

            if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
              if (swiper.navigation && ((swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) || (swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))) return
              const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass)

              if (isHidden === true) {
                emit('paginationShow')
              } else {
                emit('paginationHide')
              }

              $el.toggleClass(swiper.params.pagination.hiddenClass)
            }
          })

          const enable = () => {
            swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass)

            if (swiper.pagination.$el) {
              swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass)
            }

            init()
            render()
            update()
          }

          const disable = () => {
            swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass)

            if (swiper.pagination.$el) {
              swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass)
            }

            destroy()
          }

          Object.assign(swiper.pagination, {
            enable,
            disable,
            render,
            update,
            init,
            destroy,
          })
        }

        function Scrollbar(_ref) {
          const { swiper, extendParams, on, emit, } = _ref
          const document = getDocument()
          let isTouched = false
          let timeout = null
          let dragTimeout = null
          let dragStartPos
          let dragSize
          let trackSize
          let divider
          extendParams({
            scrollbar: {
              el: null,
              dragSize: 'auto',
              hide: false,
              draggable: false,
              snapOnRelease: true,
              lockClass: 'swiper-scrollbar-lock',
              dragClass: 'swiper-scrollbar-drag',
              scrollbarDisabledClass: 'swiper-scrollbar-disabled',
            },
          })
          swiper.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null,
          }

          function setTranslate() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return
            const { scrollbar, rtlTranslate: rtl, progress, } = swiper
            const { $dragEl, $el, } = scrollbar
            const params = swiper.params.scrollbar
            let newSize = dragSize
            let newPos = (trackSize - dragSize) * progress

            if (rtl) {
              newPos = -newPos

              if (newPos > 0) {
                newSize = dragSize - newPos
                newPos = 0
              } else if (-newPos + dragSize > trackSize) {
                newSize = trackSize + newPos
              }
            } else if (newPos < 0) {
              newSize = dragSize + newPos
              newPos = 0
            } else if (newPos + dragSize > trackSize) {
              newSize = trackSize - newPos
            }

            if (swiper.isHorizontal()) {
              $dragEl.transform(`translate3d(${ newPos }px, 0, 0)`)
              $dragEl[0].style.width = `${ newSize }px`
            } else {
              $dragEl.transform(`translate3d(0px, ${ newPos }px, 0)`)
              $dragEl[0].style.height = `${ newSize }px`
            }

            if (params.hide) {
              clearTimeout(timeout)
              $el[0].style.opacity = 1
              timeout = setTimeout(() => {
                $el[0].style.opacity = 0
                $el.transition(400)
              }, 1000)
            }
          }

          function setTransition(duration) {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return
            swiper.scrollbar.$dragEl.transition(duration)
          }

          function updateSize() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return
            const { scrollbar, } = swiper
            const { $dragEl, $el, } = scrollbar
            $dragEl[0].style.width = ''
            $dragEl[0].style.height = ''
            trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight
            divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0))

            if (swiper.params.scrollbar.dragSize === 'auto') {
              dragSize = trackSize * divider
            } else {
              dragSize = parseInt(swiper.params.scrollbar.dragSize, 10)
            }

            if (swiper.isHorizontal()) {
              $dragEl[0].style.width = `${ dragSize }px`
            } else {
              $dragEl[0].style.height = `${ dragSize }px`
            }

            if (divider >= 1) {
              $el[0].style.display = 'none'
            } else {
              $el[0].style.display = ''
            }

            if (swiper.params.scrollbar.hide) {
              $el[0].style.opacity = 0
            }

            if (swiper.params.watchOverflow && swiper.enabled) {
              scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass)
            }
          }

          function getPointerPosition(e) {
            if (swiper.isHorizontal()) {
              return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX
            }

            return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY
          }

          function setDragPosition(e) {
            const { scrollbar, rtlTranslate: rtl, } = swiper
            const { $el, } = scrollbar
            let positionRatio
            positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize)
            positionRatio = Math.max(Math.min(positionRatio, 1), 0)

            if (rtl) {
              positionRatio = 1 - positionRatio
            }

            const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio
            swiper.updateProgress(position)
            swiper.setTranslate(position)
            swiper.updateActiveIndex()
            swiper.updateSlidesClasses()
          }

          function onDragStart(e) {
            const params = swiper.params.scrollbar
            const { scrollbar, $wrapperEl, } = swiper
            const { $el, $dragEl, } = scrollbar
            isTouched = true
            dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null
            e.preventDefault()
            e.stopPropagation()
            $wrapperEl.transition(100)
            $dragEl.transition(100)
            setDragPosition(e)
            clearTimeout(dragTimeout)
            $el.transition(0)

            if (params.hide) {
              $el.css('opacity', 1)
            }

            if (swiper.params.cssMode) {
              swiper.$wrapperEl.css('scroll-snap-type', 'none')
            }

            emit('scrollbarDragStart', e)
          }

          function onDragMove(e) {
            const { scrollbar, $wrapperEl, } = swiper
            const { $el, $dragEl, } = scrollbar
            if (!isTouched) return
            if (e.preventDefault) e.preventDefault()
            else e.returnValue = false
            setDragPosition(e)
            $wrapperEl.transition(0)
            $el.transition(0)
            $dragEl.transition(0)
            emit('scrollbarDragMove', e)
          }

          function onDragEnd(e) {
            const params = swiper.params.scrollbar
            const { scrollbar, $wrapperEl, } = swiper
            const { $el, } = scrollbar
            if (!isTouched) return
            isTouched = false

            if (swiper.params.cssMode) {
              swiper.$wrapperEl.css('scroll-snap-type', '')
              $wrapperEl.transition('')
            }

            if (params.hide) {
              clearTimeout(dragTimeout)
              dragTimeout = nextTick(() => {
                $el.css('opacity', 0)
                $el.transition(400)
              }, 1000)
            }

            emit('scrollbarDragEnd', e)

            if (params.snapOnRelease) {
              swiper.slideToClosest()
            }
          }

          function events(method) {
            const { scrollbar, touchEventsTouch, touchEventsDesktop, params, support, } = swiper
            const $el = scrollbar.$el
            if (!$el) return
            const target = $el[0]
            const activeListener =
              support.passiveListener && params.passiveListeners
                ? {
                  passive: false,
                  capture: false,
                }
                : false
            const passiveListener =
              support.passiveListener && params.passiveListeners
                ? {
                  passive: true,
                  capture: false,
                }
                : false
            if (!target) return
            const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener'

            if (!support.touch) {
              target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener)
              document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener)
              document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener)
            } else {
              target[eventMethod](touchEventsTouch.start, onDragStart, activeListener)
              target[eventMethod](touchEventsTouch.move, onDragMove, activeListener)
              target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener)
            }
          }

          function enableDraggable() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return
            events('on')
          }

          function disableDraggable() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return
            events('off')
          }

          function init() {
            const { scrollbar, $el: $swiperEl, } = swiper
            swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, { el: 'swiper-scrollbar', })
            const params = swiper.params.scrollbar
            if (!params.el) return
            let $el = $(params.el)

            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
              $el = $swiperEl.find(params.el)
            }

            let $dragEl = $el.find(`.${ swiper.params.scrollbar.dragClass }`)

            if ($dragEl.length === 0) {
              $dragEl = $(`<
              div class

              =
              "${ swiper.params.scrollbar.dragClass }"
              > <

              /
              div >`)
              $el.append($dragEl)
            }

            Object.assign(scrollbar, {
              $el,
              el: $el[0],
              $dragEl,
              dragEl: $dragEl[0],
            })

            if (params.draggable) {
              enableDraggable()
            }

            if ($el) {
              $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass)
            }
          }

          function destroy() {
            disableDraggable()
          }

          on('init', () => {
            if (swiper.params.scrollbar.enabled === false) {
              // eslint-disable-next-line
              disable();
            } else {
              init()
              updateSize()
              setTranslate()
            }
          })
          on('update resize observerUpdate lock unlock', () => {
            updateSize()
          })
          on('setTranslate', () => {
            setTranslate()
          })
          on('setTransition', (_s, duration) => {
            setTransition(duration)
          })
          on('enable disable', () => {
            const { $el, } = swiper.scrollbar

            if ($el) {
              $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass)
            }
          })
          on('destroy', () => {
            destroy()
          })

          const enable = () => {
            swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass)

            if (swiper.scrollbar.$el) {
              swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass)
            }

            init()
            updateSize()
            setTranslate()
          }

          const disable = () => {
            swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass)

            if (swiper.scrollbar.$el) {
              swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass)
            }

            destroy()
          }

          Object.assign(swiper.scrollbar, {
            enable,
            disable,
            updateSize,
            setTranslate,
            init,
            destroy,
          })
        }

        function Parallax(_ref) {
          const { swiper, extendParams, on, } = _ref
          extendParams({ parallax: { enabled: false, }, })

          const setTransform = (el, progress) => {
            const { rtl, } = swiper
            const $el = $(el)
            const rtlFactor = rtl ? -1 : 1
            const p = $el.attr('data-swiper-parallax') || '0'
            let x = $el.attr('data-swiper-parallax-x')
            let y = $el.attr('data-swiper-parallax-y')
            const scale = $el.attr('data-swiper-parallax-scale')
            const opacity = $el.attr('data-swiper-parallax-opacity')

            if (x || y) {
              x = x || '0'
              y = y || '0'
            } else if (swiper.isHorizontal()) {
              x = p
              y = '0'
            } else {
              y = p
              x = '0'
            }

            if (x.indexOf('%') >= 0) {
              x = `${ parseInt(x, 10) * progress * rtlFactor }%`
            } else {
              x = `${ x * progress * rtlFactor }px`
            }

            if (y.indexOf('%') >= 0) {
              y = `${ parseInt(y, 10) * progress }%`
            } else {
              y = `${ y * progress }px`
            }

            if (typeof opacity !== 'undefined' && opacity !== null) {
              const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress))
              $el[0].style.opacity = currentOpacity
            }

            if (typeof scale === 'undefined' || scale === null) {
              $el.transform(`translate3d(${ x }, ${ y }, 0px)`)
            } else {
              const currentScale = scale - (scale - 1) * (1 - Math.abs(progress))
              $el.transform(`translate3d(${ x }, ${ y }, 0px) scale(${ currentScale })`)
            }
          }

          const setTranslate = () => {
            const { $el, slides, progress, snapGrid, } = swiper
            $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((el) => {
              setTransform(el, progress)
            })
            slides.each((slideEl, slideIndex) => {
              let slideProgress = slideEl.progress

              if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1)
              }

              slideProgress = Math.min(Math.max(slideProgress, -1), 1)
              $(slideEl)
                .find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
                .each((el) => {
                  setTransform(el, slideProgress)
                })
            })
          }

          const setTransition = function (duration) {
            if (duration === void 0) {
              duration = swiper.params.speed
            }

            const { $el, } = swiper
            $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((parallaxEl) => {
              const $parallaxEl = $(parallaxEl)
              let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration
              if (duration === 0) parallaxDuration = 0
              $parallaxEl.transition(parallaxDuration)
            })
          }

          on('beforeInit', () => {
            if (!swiper.params.parallax.enabled) return
            swiper.params.watchSlidesProgress = true
            swiper.originalParams.watchSlidesProgress = true
          })
          on('init', () => {
            if (!swiper.params.parallax.enabled) return
            setTranslate()
          })
          on('setTranslate', () => {
            if (!swiper.params.parallax.enabled) return
            setTranslate()
          })
          on('setTransition', (_swiper, duration) => {
            if (!swiper.params.parallax.enabled) return
            setTransition(duration)
          })
        }

        function Zoom(_ref) {
          const { swiper, extendParams, on, emit, } = _ref
          const window = getWindow()
          extendParams({
            zoom: {
              enabled: false,
              maxRatio: 3,
              minRatio: 1,
              toggle: true,
              containerClass: 'swiper-zoom-container',
              zoomedSlideClass: 'swiper-slide-zoomed',
            },
          })
          swiper.zoom = { enabled: false, }
          let currentScale = 1
          let isScaling = false
          let gesturesEnabled
          let fakeGestureTouched
          let fakeGestureMoved
          const gesture = {
            $slideEl: undefined,
            slideWidth: undefined,
            slideHeight: undefined,
            $imageEl: undefined,
            $imageWrapEl: undefined,
            maxRatio: 3,
          }
          const image = {
            isTouched: undefined,
            isMoved: undefined,
            currentX: undefined,
            currentY: undefined,
            minX: undefined,
            minY: undefined,
            maxX: undefined,
            maxY: undefined,
            width: undefined,
            height: undefined,
            startX: undefined,
            startY: undefined,
            touchesStart: {},
            touchesCurrent: {},
          }
          const velocity = {
            x: undefined,
            y: undefined,
            prevPositionX: undefined,
            prevPositionY: undefined,
            prevTime: undefined,
          }
          let scale = 1
          Object.defineProperty(swiper.zoom, 'scale', {
            get() {
              return scale
            },

            set(value) {
              if (scale !== value) {
                const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined
                const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined
                emit('zoomChange', value, imageEl, slideEl)
              }

              scale = value
            },
          })

          function getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) return 1
            const x1 = e.targetTouches[0].pageX
            const y1 = e.targetTouches[0].pageY
            const x2 = e.targetTouches[1].pageX
            const y2 = e.targetTouches[1].pageY
            const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
            return distance
          } // Events

          function onGestureStart(e) {
            const support = swiper.support
            const params = swiper.params.zoom
            fakeGestureTouched = false
            fakeGestureMoved = false

            if (!support.gestures) {
              if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
                return
              }

              fakeGestureTouched = true
              gesture.scaleStart = getDistanceBetweenTouches(e)
            }

            if (!gesture.$slideEl || !gesture.$slideEl.length) {
              gesture.$slideEl = $(e.target).closest(`.${ swiper.params.slideClass }`)
              if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex)
              gesture.$imageEl = gesture.$slideEl.find(`.${ params.containerClass }`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0)
              gesture.$imageWrapEl = gesture.$imageEl.parent(`.${ params.containerClass }`)
              gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio

              if (gesture.$imageWrapEl.length === 0) {
                gesture.$imageEl = undefined
                return
              }
            }

            if (gesture.$imageEl) {
              gesture.$imageEl.transition(0)
            }

            isScaling = true
          }

          function onGestureChange(e) {
            const support = swiper.support
            const params = swiper.params.zoom
            const zoom = swiper.zoom

            if (!support.gestures) {
              if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
                return
              }

              fakeGestureMoved = true
              gesture.scaleMove = getDistanceBetweenTouches(e)
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
              if (e.type === 'gesturechange') onGestureStart(e)
              return
            }

            if (support.gestures) {
              zoom.scale = e.scale * currentScale
            } else {
              zoom.scale = (gesture.scaleMove / gesture.scaleStart) * currentScale
            }

            if (zoom.scale > gesture.maxRatio) {
              zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5
            }

            if (zoom.scale < params.minRatio) {
              zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5
            }

            gesture.$imageEl.transform(`translate3d(0,0,0) scale(${ zoom.scale })`)
          }

          function onGestureEnd(e) {
            const device = swiper.device
            const support = swiper.support
            const params = swiper.params.zoom
            const zoom = swiper.zoom

            if (!support.gestures) {
              if (!fakeGestureTouched || !fakeGestureMoved) {
                return
              }

              if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !device.android)) {
                return
              }

              fakeGestureTouched = false
              fakeGestureMoved = false
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio)
            gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${ zoom.scale })`)
            currentScale = zoom.scale
            isScaling = false
            if (zoom.scale === 1) gesture.$slideEl = undefined
          }

          function onTouchStart(e) {
            const device = swiper.device
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return
            if (image.isTouched) return
            if (device.android && e.cancelable) e.preventDefault()
            image.isTouched = true
            image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX
            image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY
          }

          function onTouchMove(e) {
            const zoom = swiper.zoom
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return
            swiper.allowClick = false
            if (!image.isTouched || !gesture.$slideEl) return

            if (!image.isMoved) {
              image.width = gesture.$imageEl[0].offsetWidth
              image.height = gesture.$imageEl[0].offsetHeight
              image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0
              image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0
              gesture.slideWidth = gesture.$slideEl[0].offsetWidth
              gesture.slideHeight = gesture.$slideEl[0].offsetHeight
              gesture.$imageWrapEl.transition(0)
            } // Define if we need image drag

            const scaledWidth = image.width * zoom.scale
            const scaledHeight = image.height * zoom.scale
            if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0)
            image.maxX = -image.minX
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0)
            image.maxY = -image.minY
            image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX
            image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY

            if (!image.isMoved && !isScaling) {
              if (
                swiper.isHorizontal() &&
                ((Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x) || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x))
              ) {
                image.isTouched = false
                return
              }

              if (
                !swiper.isHorizontal() &&
                ((Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y) || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y))
              ) {
                image.isTouched = false
                return
              }
            }

            if (e.cancelable) {
              e.preventDefault()
            }

            e.stopPropagation()
            image.isMoved = true
            image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX
            image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY

            if (image.currentX < image.minX) {
              image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8
            }

            if (image.currentX > image.maxX) {
              image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8
            }

            if (image.currentY < image.minY) {
              image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8
            }

            if (image.currentY > image.maxY) {
              image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8
            } // Velocity

            if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x
            if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y
            if (!velocity.prevTime) velocity.prevTime = Date.now()
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0
            velocity.prevPositionX = image.touchesCurrent.x
            velocity.prevPositionY = image.touchesCurrent.y
            velocity.prevTime = Date.now()
            gesture.$imageWrapEl.transform(`translate3d(${ image.currentX }px, ${ image.currentY }px,0)`)
          }

          function onTouchEnd() {
            const zoom = swiper.zoom
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return

            if (!image.isTouched || !image.isMoved) {
              image.isTouched = false
              image.isMoved = false
              return
            }

            image.isTouched = false
            image.isMoved = false
            let momentumDurationX = 300
            let momentumDurationY = 300
            const momentumDistanceX = velocity.x * momentumDurationX
            const newPositionX = image.currentX + momentumDistanceX
            const momentumDistanceY = velocity.y * momentumDurationY
            const newPositionY = image.currentY + momentumDistanceY // Fix duration

            if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x)
            if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y)
            const momentumDuration = Math.max(momentumDurationX, momentumDurationY)
            image.currentX = newPositionX
            image.currentY = newPositionY // Define if we need image drag

            const scaledWidth = image.width * zoom.scale
            const scaledHeight = image.height * zoom.scale
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0)
            image.maxX = -image.minX
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0)
            image.maxY = -image.minY
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX)
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY)
            gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${ image.currentX }px, ${ image.currentY }px,0)`)
          }

          function onTransitionEnd() {
            const zoom = swiper.zoom

            if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
              if (gesture.$imageEl) {
                gesture.$imageEl.transform('translate3d(0,0,0) scale(1)')
              }

              if (gesture.$imageWrapEl) {
                gesture.$imageWrapEl.transform('translate3d(0,0,0)')
              }

              zoom.scale = 1
              currentScale = 1
              gesture.$slideEl = undefined
              gesture.$imageEl = undefined
              gesture.$imageWrapEl = undefined
            }
          }

          function zoomIn(e) {
            const zoom = swiper.zoom
            const params = swiper.params.zoom

            if (!gesture.$slideEl) {
              if (e && e.target) {
                gesture.$slideEl = $(e.target).closest(`.${ swiper.params.slideClass }`)
              }

              if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                  gesture.$slideEl = swiper.$wrapperEl.children(`.${ swiper.params.slideActiveClass }`)
                } else {
                  gesture.$slideEl = swiper.slides.eq(swiper.activeIndex)
                }
              }

              gesture.$imageEl = gesture.$slideEl.find(`.${ params.containerClass }`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0)
              gesture.$imageWrapEl = gesture.$imageEl.parent(`.${ params.containerClass }`)
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return

            if (swiper.params.cssMode) {
              swiper.wrapperEl.style.overflow = 'hidden'
              swiper.wrapperEl.style.touchAction = 'none'
            }

            gesture.$slideEl.addClass(`${ params.zoomedSlideClass }`)
            let touchX
            let touchY
            let offsetX
            let offsetY
            let diffX
            let diffY
            let translateX
            let translateY
            let imageWidth
            let imageHeight
            let scaledWidth
            let scaledHeight
            let translateMinX
            let translateMinY
            let translateMaxX
            let translateMaxY
            let slideWidth
            let slideHeight

            if (typeof image.touchesStart.x === 'undefined' && e) {
              touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX
              touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY
            } else {
              touchX = image.touchesStart.x
              touchY = image.touchesStart.y
            }

            zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio
            currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio

            if (e) {
              slideWidth = gesture.$slideEl[0].offsetWidth
              slideHeight = gesture.$slideEl[0].offsetHeight
              offsetX = gesture.$slideEl.offset().left + window.scrollX
              offsetY = gesture.$slideEl.offset().top + window.scrollY
              diffX = offsetX + slideWidth / 2 - touchX
              diffY = offsetY + slideHeight / 2 - touchY
              imageWidth = gesture.$imageEl[0].offsetWidth
              imageHeight = gesture.$imageEl[0].offsetHeight
              scaledWidth = imageWidth * zoom.scale
              scaledHeight = imageHeight * zoom.scale
              translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0)
              translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0)
              translateMaxX = -translateMinX
              translateMaxY = -translateMinY
              translateX = diffX * zoom.scale
              translateY = diffY * zoom.scale

              if (translateX < translateMinX) {
                translateX = translateMinX
              }

              if (translateX > translateMaxX) {
                translateX = translateMaxX
              }

              if (translateY < translateMinY) {
                translateY = translateMinY
              }

              if (translateY > translateMaxY) {
                translateY = translateMaxY
              }
            } else {
              translateX = 0
              translateY = 0
            }

            gesture.$imageWrapEl.transition(300).transform(`translate3d(${ translateX }px, ${ translateY }px,0)`)
            gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${ zoom.scale })`)
          }

          function zoomOut() {
            const zoom = swiper.zoom
            const params = swiper.params.zoom

            if (!gesture.$slideEl) {
              if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                gesture.$slideEl = swiper.$wrapperEl.children(`.${ swiper.params.slideActiveClass }`)
              } else {
                gesture.$slideEl = swiper.slides.eq(swiper.activeIndex)
              }

              gesture.$imageEl = gesture.$slideEl.find(`.${ params.containerClass }`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0)
              gesture.$imageWrapEl = gesture.$imageEl.parent(`.${ params.containerClass }`)
            }

            if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return

            if (swiper.params.cssMode) {
              swiper.wrapperEl.style.overflow = ''
              swiper.wrapperEl.style.touchAction = ''
            }

            zoom.scale = 1
            currentScale = 1
            gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)')
            gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)')
            gesture.$slideEl.removeClass(`${ params.zoomedSlideClass }`)
            gesture.$slideEl = undefined
          } // Toggle Zoom

          function zoomToggle(e) {
            const zoom = swiper.zoom

            if (zoom.scale && zoom.scale !== 1) {
              // Zoom Out
              zoomOut()
            } else {
              // Zoom In
              zoomIn(e)
            }
          }

          function getListeners() {
            const support = swiper.support
            const passiveListener =
              swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners
                ? {
                  passive: true,
                  capture: false,
                }
                : false
            const activeListenerWithCapture = support.passiveListener
              ? {
                passive: false,
                capture: true,
              }
              : true
            return {
              passiveListener,
              activeListenerWithCapture,
            }
          }

          function getSlideSelector() {
            return `.${ swiper.params.slideClass }`
          }

          function toggleGestures(method) {
            const { passiveListener, } = getListeners()
            const slideSelector = getSlideSelector()
            swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener)
            swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener)
            swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener)
          }

          function enableGestures() {
            if (gesturesEnabled) return
            gesturesEnabled = true
            toggleGestures('on')
          }

          function disableGestures() {
            if (!gesturesEnabled) return
            gesturesEnabled = false
            toggleGestures('off')
          } // Attach/Detach Events

          function enable() {
            const zoom = swiper.zoom
            if (zoom.enabled) return
            zoom.enabled = true
            const support = swiper.support
            const { passiveListener, activeListenerWithCapture, } = getListeners()
            const slideSelector = getSlideSelector() // Scale image

            if (support.gestures) {
              swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener)
              swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener)
            } else if (swiper.touchEvents.start === 'touchstart') {
              swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener)
              swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture)
              swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener)

              if (swiper.touchEvents.cancel) {
                swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener)
              }
            } // Move image

            swiper.$wrapperEl.on(swiper.touchEvents.move, `.${ swiper.params.zoom.containerClass }`, onTouchMove, activeListenerWithCapture)
          }

          function disable() {
            const zoom = swiper.zoom
            if (!zoom.enabled) return
            const support = swiper.support
            zoom.enabled = false
            const { passiveListener, activeListenerWithCapture, } = getListeners()
            const slideSelector = getSlideSelector() // Scale image

            if (support.gestures) {
              swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener)
              swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener)
            } else if (swiper.touchEvents.start === 'touchstart') {
              swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener)
              swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture)
              swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener)

              if (swiper.touchEvents.cancel) {
                swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener)
              }
            } // Move image

            swiper.$wrapperEl.off(swiper.touchEvents.move, `.${ swiper.params.zoom.containerClass }`, onTouchMove, activeListenerWithCapture)
          }

          on('init', () => {
            if (swiper.params.zoom.enabled) {
              enable()
            }
          })
          on('destroy', () => {
            disable()
          })
          on('touchStart', (_s, e) => {
            if (!swiper.zoom.enabled) return
            onTouchStart(e)
          })
          on('touchEnd', (_s, e) => {
            if (!swiper.zoom.enabled) return
            onTouchEnd()
          })
          on('doubleTap', (_s, e) => {
            if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
              zoomToggle(e)
            }
          })
          on('transitionEnd', () => {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
              onTransitionEnd()
            }
          })
          on('slideChange', () => {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
              onTransitionEnd()
            }
          })
          Object.assign(swiper.zoom, {
            enable,
            disable,
            in: zoomIn,
            out: zoomOut,
            toggle: zoomToggle,
          })
        }

        function Lazy(_ref) {
          const { swiper, extendParams, on, emit, } = _ref
          extendParams({
            lazy: {
              checkInView: false,
              enabled: false,
              loadPrevNext: false,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: false,
              scrollingElement: '',
              elementClass: 'swiper-lazy',
              loadingClass: 'swiper-lazy-loading',
              loadedClass: 'swiper-lazy-loaded',
              preloaderClass: 'swiper-lazy-preloader',
            },
          })
          swiper.lazy = {}
          let scrollHandlerAttached = false
          let initialImageLoaded = false

          function loadInSlide(index, loadInDuplicate) {
            if (loadInDuplicate === void 0) {
              loadInDuplicate = true
            }

            const params = swiper.params.lazy
            if (typeof index === 'undefined') return
            if (swiper.slides.length === 0) return
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled
            const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${ swiper.params.slideClass }[data-swiper-slide-index="${ index }"]`) : swiper.slides.eq(index)
            const $images = $slideEl.find(`.${ params.elementClass }:not(.${ params.loadedClass }):not(.${ params.loadingClass })`)

            if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
              $images.push($slideEl[0])
            }

            if ($images.length === 0) return
            $images.each((imageEl) => {
              const $imageEl = $(imageEl)
              $imageEl.addClass(params.loadingClass)
              const background = $imageEl.attr('data-background')
              const src = $imageEl.attr('data-src')
              const srcset = $imageEl.attr('data-srcset')
              const sizes = $imageEl.attr('data-sizes')
              const $pictureEl = $imageEl.parent('picture')
              swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
                if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) return

                if (background) {
                  $imageEl.css('background-image', `url("${ background }")`)
                  $imageEl.removeAttr('data-background')
                } else {
                  if (srcset) {
                    $imageEl.attr('srcset', srcset)
                    $imageEl.removeAttr('data-srcset')
                  }

                  if (sizes) {
                    $imageEl.attr('sizes', sizes)
                    $imageEl.removeAttr('data-sizes')
                  }

                  if ($pictureEl.length) {
                    $pictureEl.children('source').each((sourceEl) => {
                      const $source = $(sourceEl)

                      if ($source.attr('data-srcset')) {
                        $source.attr('srcset', $source.attr('data-srcset'))
                        $source.removeAttr('data-srcset')
                      }
                    })
                  }

                  if (src) {
                    $imageEl.attr('src', src)
                    $imageEl.removeAttr('data-src')
                  }
                }

                $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass)
                $slideEl.find(`.${ params.preloaderClass }`).remove()

                if (swiper.params.loop && loadInDuplicate) {
                  const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index')

                  if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                    const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${ slideOriginalIndex }"]:not(.${ swiper.params.slideDuplicateClass })`)
                    loadInSlide(originalSlide.index(), false)
                  } else {
                    const duplicatedSlide = swiper.$wrapperEl.children(`.${ swiper.params.slideDuplicateClass }[data-swiper-slide-index="${ slideOriginalIndex }"]`)
                    loadInSlide(duplicatedSlide.index(), false)
                  }
                }

                emit('lazyImageReady', $slideEl[0], $imageEl[0])

                if (swiper.params.autoHeight) {
                  swiper.updateAutoHeight()
                }
              })
              emit('lazyImageLoad', $slideEl[0], $imageEl[0])
            })
          }

          function load() {
            const { $wrapperEl, params: swiperParams, slides, activeIndex, } = swiper
            const isVirtual = swiper.virtual && swiperParams.virtual.enabled
            const params = swiperParams.lazy
            let slidesPerView = swiperParams.slidesPerView

            if (slidesPerView === 'auto') {
              slidesPerView = 0
            }

            function slideExist(index) {
              if (isVirtual) {
                if ($wrapperEl.children(`.${ swiperParams.slideClass }[data-swiper-slide-index="${ index }"]`).length) {
                  return true
                }
              } else if (slides[index]) return true

              return false
            }

            function slideIndex(slideEl) {
              if (isVirtual) {
                return $(slideEl).attr('data-swiper-slide-index')
              }

              return $(slideEl).index()
            }

            if (!initialImageLoaded) initialImageLoaded = true

            if (swiper.params.watchSlidesProgress) {
              $wrapperEl.children(`.${ swiperParams.slideVisibleClass }`).each((slideEl) => {
                const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index()
                loadInSlide(index)
              })
            } else if (slidesPerView > 1) {
              for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
                if (slideExist(i)) loadInSlide(i)
              }
            } else {
              loadInSlide(activeIndex)
            }

            if (params.loadPrevNext) {
              if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
                const amount = params.loadPrevNextAmount
                const spv = Math.ceil(slidesPerView)
                const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length)
                const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0) // Next Slides

                for (let i = activeIndex + spv; i < maxIndex; i += 1) {
                  if (slideExist(i)) loadInSlide(i)
                } // Prev Slides

                for (let i = minIndex; i < activeIndex; i += 1) {
                  if (slideExist(i)) loadInSlide(i)
                }
              } else {
                const nextSlide = $wrapperEl.children(`.${ swiperParams.slideNextClass }`)
                if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide))
                const prevSlide = $wrapperEl.children(`.${ swiperParams.slidePrevClass }`)
                if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide))
              }
            }
          }

          function checkInViewOnLoad() {
            const window = getWindow()
            if (!swiper || swiper.destroyed) return
            const $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window)
            const isWindow = $scrollElement[0] === window
            const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth
            const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight
            const swiperOffset = swiper.$el.offset()
            const { rtlTranslate: rtl, } = swiper
            let inView = false
            if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft
            const swiperCoord = [
              [
                swiperOffset.left,
                swiperOffset.top,
              ],
              [
                swiperOffset.left + swiper.width,
                swiperOffset.top,
              ],
              [
                swiperOffset.left,
                swiperOffset.top + swiper.height,
              ],
              [
                swiperOffset.left + swiper.width,
                swiperOffset.top + swiper.height,
              ],
            ]

            for (let i = 0; i < swiperCoord.length; i += 1) {
              const point = swiperCoord[i]

              if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

                inView = true
              }
            }

            const passiveListener =
              swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners
                ? {
                  passive: true,
                  capture: false,
                }
                : false

            if (inView) {
              load()
              $scrollElement.off('scroll', checkInViewOnLoad, passiveListener)
            } else if (!scrollHandlerAttached) {
              scrollHandlerAttached = true
              $scrollElement.on('scroll', checkInViewOnLoad, passiveListener)
            }
          }

          on('beforeInit', () => {
            if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
              swiper.params.preloadImages = false
            }
          })
          on('init', () => {
            if (swiper.params.lazy.enabled) {
              if (swiper.params.lazy.checkInView) {
                checkInViewOnLoad()
              } else {
                load()
              }
            }
          })
          on('scroll', () => {
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
              load()
            }
          })
          on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
            if (swiper.params.lazy.enabled) {
              if (swiper.params.lazy.checkInView) {
                checkInViewOnLoad()
              } else {
                load()
              }
            }
          })
          on('transitionStart', () => {
            if (swiper.params.lazy.enabled) {
              if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded)) {
                if (swiper.params.lazy.checkInView) {
                  checkInViewOnLoad()
                } else {
                  load()
                }
              }
            }
          })
          on('transitionEnd', () => {
            if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
              if (swiper.params.lazy.checkInView) {
                checkInViewOnLoad()
              } else {
                load()
              }
            }
          })
          on('slideChange', () => {
            const {
              lazy,
              cssMode,
              watchSlidesProgress,
              touchReleaseOnEdges,
              resistanceRatio,
            } = swiper.params

            if (lazy.enabled && (cssMode || (watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0)))) {
              load()
            }
          })
          on('destroy', () => {
            if (!swiper.$el) return
            swiper.$el.find(`.${ swiper.params.lazy.loadingClass }`).removeClass(swiper.params.lazy.loadingClass)
          })
          Object.assign(swiper.lazy, {
            load,
            loadInSlide,
          })
        }

        /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
        function Controller(_ref) {
          const { swiper, extendParams, on, } = _ref
          extendParams({
            controller: {
              control: undefined,
              inverse: false,
              by: 'slide', // or 'container'
            },
          })
          swiper.controller = { control: undefined, }

          function LinearSpline(x, y) {
            const binarySearch = (function search() {
              let maxIndex
              let minIndex
              let guess
              return (array, val) => {
                minIndex = -1
                maxIndex = array.length

                while (maxIndex - minIndex > 1) {
                  guess = (maxIndex + minIndex) >> 1

                  if (array[guess] <= val) {
                    minIndex = guess
                  } else {
                    maxIndex = guess
                  }
                }

                return maxIndex
              }
            })()

            this.x = x
            this.y = y
            this.lastIndex = x.length - 1 // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.

            let i1
            let i3

            this.interpolate = function interpolate(x2) {
              if (!x2) return 0 // Get the indexes of x1 and x3 (the array indexes before and after given x2):

              i3 = binarySearch(this.x, x2)
              i1 = i3 - 1 // We have our indexes i1 & i3, so we can calculate already:
              // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

              return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1]
            }

            return this
          } // xxx: for now i will just save one spline function to to

          function getInterpolateFunction(c) {
            if (!swiper.controller.spline) {
              swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid)
            }
          }

          function setTranslate(_t, byController) {
            const controlled = swiper.controller.control
            let multiplier
            let controlledTranslate
            const Swiper = swiper.constructor

            function setControlledTranslate(c) {
              // this will create an Interpolate function based on the snapGrids
              // x is the Grid of the scrolled scroller and y will be the controlled scroller
              // it makes sense to create this only once and recall it for the interpolation
              // the function does a lot of value caching for performance
              const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate

              if (swiper.params.controller.by === 'slide') {
                getInterpolateFunction(c) // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out

                controlledTranslate = -swiper.controller.spline.interpolate(-translate)
              }

              if (!controlledTranslate || swiper.params.controller.by === 'container') {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate())
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate()
              }

              if (swiper.params.controller.inverse) {
                controlledTranslate = c.maxTranslate() - controlledTranslate
              }

              c.updateProgress(controlledTranslate)
              c.setTranslate(controlledTranslate, swiper)
              c.updateActiveIndex()
              c.updateSlidesClasses()
            }

            if (Array.isArray(controlled)) {
              for (let i = 0; i < controlled.length; i += 1) {
                if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                  setControlledTranslate(controlled[i])
                }
              }
            } else if (controlled instanceof Swiper && byController !== controlled) {
              setControlledTranslate(controlled)
            }
          }

          function setTransition(duration, byController) {
            const Swiper = swiper.constructor
            const controlled = swiper.controller.control
            let i

            function setControlledTransition(c) {
              c.setTransition(duration, swiper)

              if (duration !== 0) {
                c.transitionStart()

                if (c.params.autoHeight) {
                  nextTick(() => {
                    c.updateAutoHeight()
                  })
                }

                c.$wrapperEl.transitionEnd(() => {
                  if (!controlled) return

                  if (c.params.loop && swiper.params.controller.by === 'slide') {
                    c.loopFix()
                  }

                  c.transitionEnd()
                })
              }
            }

            if (Array.isArray(controlled)) {
              for (i = 0; i < controlled.length; i += 1) {
                if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                  setControlledTransition(controlled[i])
                }
              }
            } else if (controlled instanceof Swiper && byController !== controlled) {
              setControlledTransition(controlled)
            }
          }

          function removeSpline() {
            if (!swiper.controller.control) return

            if (swiper.controller.spline) {
              swiper.controller.spline = undefined
              delete swiper.controller.spline
            }
          }

          on('beforeInit', () => {
            swiper.controller.control = swiper.params.controller.control
          })
          on('update', () => {
            removeSpline()
          })
          on('resize', () => {
            removeSpline()
          })
          on('observerUpdate', () => {
            removeSpline()
          })
          on('setTranslate', (_s, translate, byController) => {
            if (!swiper.controller.control) return
            swiper.controller.setTranslate(translate, byController)
          })
          on('setTransition', (_s, duration, byController) => {
            if (!swiper.controller.control) return
            swiper.controller.setTransition(duration, byController)
          })
          Object.assign(swiper.controller, {
            setTranslate,
            setTransition,
          })
        }

        function A11y(_ref) {
          const { swiper, extendParams, on, } = _ref
          extendParams({
            a11y: {
              enabled: true,
              notificationClass: 'swiper-notification',
              prevSlideMessage: 'Previous slide',
              nextSlideMessage: 'Next slide',
              firstSlideMessage: 'This is the first slide',
              lastSlideMessage: 'This is the last slide',
              paginationBulletMessage: 'Go to slide {{index}}',
              slideLabelMessage: '{{index}} / {{slidesLength}}',
              containerMessage: null,
              containerRoleDescriptionMessage: null,
              itemRoleDescriptionMessage: null,
              slideRole: 'group',
              id: null,
            },
          })
          let liveRegion = null

          function notify(message) {
            const notification = liveRegion
            if (notification.length === 0) return
            notification.html('')
            notification.html(message)
          }

          function getRandomNumber(size) {
            if (size === void 0) {
              size = 16
            }

            const randomChar = () => Math.round(16 * Math.random()).toString(16)

            return 'x'.repeat(size).replace(/x/g, randomChar)
          }

          function makeElFocusable($el) {
            $el.attr('tabIndex', '0')
          }

          function makeElNotFocusable($el) {
            $el.attr('tabIndex', '-1')
          }

          function addElRole($el, role) {
            $el.attr('role', role)
          }

          function addElRoleDescription($el, description) {
            $el.attr('aria-roledescription', description)
          }

          function addElControls($el, controls) {
            $el.attr('aria-controls', controls)
          }

          function addElLabel($el, label) {
            $el.attr('aria-label', label)
          }

          function addElId($el, id) {
            $el.attr('id', id)
          }

          function addElLive($el, live) {
            $el.attr('aria-live', live)
          }

          function disableEl($el) {
            $el.attr('aria-disabled', true)
          }

          function enableEl($el) {
            $el.attr('aria-disabled', false)
          }

          function onEnterOrSpaceKey(e) {
            if (e.keyCode !== 13 && e.keyCode !== 32) return
            const params = swiper.params.a11y
            const $targetEl = $(e.target)

            if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
              if (!(swiper.isEnd && !swiper.params.loop)) {
                swiper.slideNext()
              }

              if (swiper.isEnd) {
                notify(params.lastSlideMessage)
              } else {
                notify(params.nextSlideMessage)
              }
            }

            if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
              if (!(swiper.isBeginning && !swiper.params.loop)) {
                swiper.slidePrev()
              }

              if (swiper.isBeginning) {
                notify(params.firstSlideMessage)
              } else {
                notify(params.prevSlideMessage)
              }
            }

            if (swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))) {
              $targetEl[0].click()
            }
          }

          function updateNavigation() {
            if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return
            const { $nextEl, $prevEl, } = swiper.navigation

            if ($prevEl && $prevEl.length > 0) {
              if (swiper.isBeginning) {
                disableEl($prevEl)
                makeElNotFocusable($prevEl)
              } else {
                enableEl($prevEl)
                makeElFocusable($prevEl)
              }
            }

            if ($nextEl && $nextEl.length > 0) {
              if (swiper.isEnd) {
                disableEl($nextEl)
                makeElNotFocusable($nextEl)
              } else {
                enableEl($nextEl)
                makeElFocusable($nextEl)
              }
            }
          }

          function hasPagination() {
            return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length
          }

          function hasClickablePagination() {
            return hasPagination() && swiper.params.pagination.clickable
          }

          function updatePagination() {
            const params = swiper.params.a11y
            if (!hasPagination()) return
            swiper.pagination.bullets.each((bulletEl) => {
              const $bulletEl = $(bulletEl)

              if (swiper.params.pagination.clickable) {
                makeElFocusable($bulletEl)

                if (!swiper.params.pagination.renderBullet) {
                  addElRole($bulletEl, 'button')
                  addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1))
                }
              }

              if ($bulletEl.is(`.${ swiper.params.pagination.bulletActiveClass }`)) {
                $bulletEl.attr('aria-current', 'true')
              } else {
                $bulletEl.removeAttr('aria-current')
              }
            })
          }

          const initNavEl = ($el, wrapperId, message) => {
            makeElFocusable($el)

            if ($el[0].tagName !== 'BUTTON') {
              addElRole($el, 'button')
              $el.on('keydown', onEnterOrSpaceKey)
            }

            addElLabel($el, message)
            addElControls($el, wrapperId)
          }

          const handleFocus = (e) => {
            const slideEl = e.target.closest(`.${ swiper.params.slideClass }`)
            if (!slideEl || !swiper.slides.includes(slideEl)) return
            const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex
            const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl)
            if (isActive || isVisible) return
            swiper.slideTo(swiper.slides.indexOf(slideEl), 0)
          }

          const initSlides = () => {
            const params = swiper.params.a11y

            if (params.itemRoleDescriptionMessage) {
              addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage)
            }

            addElRole($(swiper.slides), params.slideRole)
            const slidesLength = swiper.params.loop ? swiper.slides.filter((el) => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length
            swiper.slides.each((slideEl, index) => {
              const $slideEl = $(slideEl)
              const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index
              const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength)
              addElLabel($slideEl, ariaLabelMessage)
            })
          }

          const init = () => {
            const params = swiper.params.a11y
            swiper.$el.append(liveRegion) // Container

            const $containerEl = swiper.$el

            if (params.containerRoleDescriptionMessage) {
              addElRoleDescription($containerEl, params.containerRoleDescriptionMessage)
            }

            if (params.containerMessage) {
              addElLabel($containerEl, params.containerMessage)
            } // Wrapper

            const $wrapperEl = swiper.$wrapperEl
            const wrapperId = params.id || $wrapperEl.attr('id') || `swiper-wrapper-${ getRandomNumber(16) }`
            const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite'
            addElId($wrapperEl, wrapperId)
            addElLive($wrapperEl, live) // Slide

            initSlides() // Navigation

            let $nextEl
            let $prevEl

            if (swiper.navigation && swiper.navigation.$nextEl) {
              $nextEl = swiper.navigation.$nextEl
            }

            if (swiper.navigation && swiper.navigation.$prevEl) {
              $prevEl = swiper.navigation.$prevEl
            }

            if ($nextEl && $nextEl.length) {
              initNavEl($nextEl, wrapperId, params.nextSlideMessage)
            }

            if ($prevEl && $prevEl.length) {
              initNavEl($prevEl, wrapperId, params.prevSlideMessage)
            } // Pagination

            if (hasClickablePagination()) {
              swiper.pagination.$el.on('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey)
            } // Tab focus

            swiper.$el.on('focus', handleFocus, true)
          }

          function destroy() {
            if (liveRegion && liveRegion.length > 0) liveRegion.remove()
            let $nextEl
            let $prevEl

            if (swiper.navigation && swiper.navigation.$nextEl) {
              $nextEl = swiper.navigation.$nextEl
            }

            if (swiper.navigation && swiper.navigation.$prevEl) {
              $prevEl = swiper.navigation.$prevEl
            }

            if ($nextEl) {
              $nextEl.off('keydown', onEnterOrSpaceKey)
            }

            if ($prevEl) {
              $prevEl.off('keydown', onEnterOrSpaceKey)
            } // Pagination

            if (hasClickablePagination()) {
              swiper.pagination.$el.off('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey)
            } // Tab focus

            swiper.$el.off('focus', handleFocus, true)
          }

          on('beforeInit', () => {
            liveRegion = $(`<
            span class

            =
            "${ swiper.params.a11y.notificationClass }"
            aria-live

            =
            "assertive"
            aria-atomic

            =
            "true"
            > <

            /
            span >`)
          })
          on('afterInit', () => {
            if (!swiper.params.a11y.enabled) return
            init()
          })
          on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
            if (!swiper.params.a11y.enabled) return
            initSlides()
          })
          on('fromEdge toEdge afterInit lock unlock', () => {
            if (!swiper.params.a11y.enabled) return
            updateNavigation()
          })
          on('paginationUpdate', () => {
            if (!swiper.params.a11y.enabled) return
            updatePagination()
          })
          on('destroy', () => {
            if (!swiper.params.a11y.enabled) return
            destroy()
          })
        }

        function History(_ref) {
          const { swiper, extendParams, on, } = _ref
          extendParams({
            history: {
              enabled: false,
              root: '',
              replaceState: false,
              key: 'slides',
              keepQuery: false,
            },
          })
          let initialized = false
          let paths = {}

          const slugify = (text) => {
            return text
              .toString()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]+/g, '')
              .replace(/--+/g, '-')
              .replace(/^-+/, '')
              .replace(/-+$/, '')
          }

          const getPathValues = (urlOverride) => {
            const window = getWindow()
            let location

            if (urlOverride) {
              location = new URL(urlOverride)
            } else {
              location = window.location
            }

            const pathArray = location.pathname
              .slice(1)
              .split('/')
              .filter((part) => part !== '')
            const total = pathArray.length
            const key = pathArray[total - 2]
            const value = pathArray[total - 1]
            return {
              key,
              value,
            }
          }

          const setHistory = (key, index) => {
            const window = getWindow()
            if (!initialized || !swiper.params.history.enabled) return
            let location

            if (swiper.params.url) {
              location = new URL(swiper.params.url)
            } else {
              location = window.location
            }

            const slide = swiper.slides.eq(index)
            let value = slugify(slide.attr('data-history'))

            if (swiper.params.history.root.length > 0) {
              let root = swiper.params.history.root
              if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1)
              value = `${ root }/${ key }/${ value }`
            } else if (!location.pathname.includes(key)) {
              value = `${ key }/${ value }`
            }

            if (swiper.params.history.keepQuery) {
              value += location.search
            }

            const currentState = window.history.state

            if (currentState && currentState.value === value) {
              return
            }

            if (swiper.params.history.replaceState) {
              window.history.replaceState(
                { value, },
                null,
                value
              )
            } else {
              window.history.pushState(
                { value, },
                null,
                value
              )
            }
          }

          const scrollToSlide = (speed, value, runCallbacks) => {
            if (value) {
              for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                const slide = swiper.slides.eq(i)
                const slideHistory = slugify(slide.attr('data-history'))

                if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                  const index = slide.index()
                  swiper.slideTo(index, speed, runCallbacks)
                }
              }
            } else {
              swiper.slideTo(0, speed, runCallbacks)
            }
          }

          const setHistoryPopState = () => {
            paths = getPathValues(swiper.params.url)
            scrollToSlide(swiper.params.speed, paths.value, false)
          }

          const init = () => {
            const window = getWindow()
            if (!swiper.params.history) return

            if (!window.history || !window.history.pushState) {
              swiper.params.history.enabled = false
              swiper.params.hashNavigation.enabled = true
              return
            }

            initialized = true
            paths = getPathValues(swiper.params.url)
            if (!paths.key && !paths.value) return
            scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit)

            if (!swiper.params.history.replaceState) {
              window.addEventListener('popstate', setHistoryPopState)
            }
          }

          const destroy = () => {
            const window = getWindow()

            if (!swiper.params.history.replaceState) {
              window.removeEventListener('popstate', setHistoryPopState)
            }
          }

          on('init', () => {
            if (swiper.params.history.enabled) {
              init()
            }
          })
          on('destroy', () => {
            if (swiper.params.history.enabled) {
              destroy()
            }
          })
          on('transitionEnd _freeModeNoMomentumRelease', () => {
            if (initialized) {
              setHistory(swiper.params.history.key, swiper.activeIndex)
            }
          })
          on('slideChange', () => {
            if (initialized && swiper.params.cssMode) {
              setHistory(swiper.params.history.key, swiper.activeIndex)
            }
          })
        }

        function HashNavigation(_ref) {
          const { swiper, extendParams, emit, on, } = _ref
          let initialized = false
          const document = getDocument()
          const window = getWindow()
          extendParams({
            hashNavigation: {
              enabled: false,
              replaceState: false,
              watchState: false,
            },
          })

          const onHashChange = () => {
            emit('hashChange')
            const newHash = document.location.hash.replace('#', '')
            const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash')

            if (newHash !== activeSlideHash) {
              const newIndex = swiper.$wrapperEl.children(`.${ swiper.params.slideClass }[data-hash="${ newHash }"]`).index()
              if (typeof newIndex === 'undefined') return
              swiper.slideTo(newIndex)
            }
          }

          const setHash = () => {
            if (!initialized || !swiper.params.hashNavigation.enabled) return

            if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
              window.history.replaceState(null, null, `#${ swiper.slides.eq(swiper.activeIndex).attr('data-hash') }` || '')
              emit('hashSet')
            } else {
              const slide = swiper.slides.eq(swiper.activeIndex)
              const hash = slide.attr('data-hash') || slide.attr('data-history')
              document.location.hash = hash || ''
              emit('hashSet')
            }
          }

          const init = () => {
            if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) return
            initialized = true
            const hash = document.location.hash.replace('#', '')

            if (hash) {
              const speed = 0

              for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                const slide = swiper.slides.eq(i)
                const slideHash = slide.attr('data-hash') || slide.attr('data-history')

                if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                  const index = slide.index()
                  swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true)
                }
              }
            }

            if (swiper.params.hashNavigation.watchState) {
              $(window).on('hashchange', onHashChange)
            }
          }

          const destroy = () => {
            if (swiper.params.hashNavigation.watchState) {
              $(window).off('hashchange', onHashChange)
            }
          }

          on('init', () => {
            if (swiper.params.hashNavigation.enabled) {
              init()
            }
          })
          on('destroy', () => {
            if (swiper.params.hashNavigation.enabled) {
              destroy()
            }
          })
          on('transitionEnd _freeModeNoMomentumRelease', () => {
            if (initialized) {
              setHash()
            }
          })
          on('slideChange', () => {
            if (initialized && swiper.params.cssMode) {
              setHash()
            }
          })
        }

        /* eslint no-underscore-dangle: "off" */
        function Autoplay(_ref) {
          const { swiper, extendParams, on, emit, } = _ref
          let timeout
          swiper.autoplay = {
            running: false,
            paused: false,
          }
          extendParams({
            autoplay: {
              enabled: false,
              delay: 3000,
              waitForTransition: true,
              disableOnInteraction: true,
              stopOnLastSlide: false,
              reverseDirection: false,
              pauseOnMouseEnter: false,
            },
          })

          function run() {
            const $activeSlideEl = swiper.slides.eq(swiper.activeIndex)
            let delay = swiper.params.autoplay.delay

            if ($activeSlideEl.attr('data-swiper-autoplay')) {
              delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay
            }

            clearTimeout(timeout)
            timeout = nextTick(() => {
              let autoplayResult

              if (swiper.params.autoplay.reverseDirection) {
                if (swiper.params.loop) {
                  swiper.loopFix()
                  autoplayResult = swiper.slidePrev(swiper.params.speed, true, true)
                  emit('autoplay')
                } else if (!swiper.isBeginning) {
                  autoplayResult = swiper.slidePrev(swiper.params.speed, true, true)
                  emit('autoplay')
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                  autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true)
                  emit('autoplay')
                } else {
                  stop()
                }
              } else if (swiper.params.loop) {
                swiper.loopFix()
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true)
                emit('autoplay')
              } else if (!swiper.isEnd) {
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true)
                emit('autoplay')
              } else if (!swiper.params.autoplay.stopOnLastSlide) {
                autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true)
                emit('autoplay')
              } else {
                stop()
              }

              if (swiper.params.cssMode && swiper.autoplay.running) run()
              else if (autoplayResult === false) {
                run()
              }
            }, delay)
          }

          function start() {
            if (typeof timeout !== 'undefined') return false
            if (swiper.autoplay.running) return false
            swiper.autoplay.running = true
            emit('autoplayStart')
            run()
            return true
          }

          function stop() {
            if (!swiper.autoplay.running) return false
            if (typeof timeout === 'undefined') return false

            if (timeout) {
              clearTimeout(timeout)
              timeout = undefined
            }

            swiper.autoplay.running = false
            emit('autoplayStop')
            return true
          }

          function pause(speed) {
            if (!swiper.autoplay.running) return
            if (swiper.autoplay.paused) return
            if (timeout) clearTimeout(timeout)
            swiper.autoplay.paused = true

            if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
              swiper.autoplay.paused = false
              run()
            } else {
              [
                'transitionend',
                'webkitTransitionEnd',
              ].forEach((event) => {
                swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd)
              })
            }
          }

          function onVisibilityChange() {
            const document = getDocument()

            if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
              pause()
            }

            if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
              run()
              swiper.autoplay.paused = false
            }
          }

          function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return
            if (e.target !== swiper.$wrapperEl[0]) return;
            [
              'transitionend',
              'webkitTransitionEnd',
            ].forEach((event) => {
              swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd)
            })
            swiper.autoplay.paused = false

            if (!swiper.autoplay.running) {
              stop()
            } else {
              run()
            }
          }

          function onMouseEnter() {
            if (swiper.params.autoplay.disableOnInteraction) {
              stop()
            } else {
              emit('autoplayPause')
              pause()
            }

            [
              'transitionend',
              'webkitTransitionEnd',
            ].forEach((event) => {
              swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd)
            })
          }

          function onMouseLeave() {
            if (swiper.params.autoplay.disableOnInteraction) {
              return
            }

            swiper.autoplay.paused = false
            emit('autoplayResume')
            run()
          }

          function attachMouseEvents() {
            if (swiper.params.autoplay.pauseOnMouseEnter) {
              swiper.$el.on('mouseenter', onMouseEnter)
              swiper.$el.on('mouseleave', onMouseLeave)
            }
          }

          function detachMouseEvents() {
            swiper.$el.off('mouseenter', onMouseEnter)
            swiper.$el.off('mouseleave', onMouseLeave)
          }

          on('init', () => {
            if (swiper.params.autoplay.enabled) {
              start()
              const document = getDocument()
              document.addEventListener('visibilitychange', onVisibilityChange)
              attachMouseEvents()
            }
          })
          on('beforeTransitionStart', (_s, speed, internal) => {
            if (swiper.autoplay.running) {
              if (internal || !swiper.params.autoplay.disableOnInteraction) {
                swiper.autoplay.pause(speed)
              } else {
                stop()
              }
            }
          })
          on('sliderFirstMove', () => {
            if (swiper.autoplay.running) {
              if (swiper.params.autoplay.disableOnInteraction) {
                stop()
              } else {
                pause()
              }
            }
          })
          on('touchEnd', () => {
            if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
              run()
            }
          })
          on('destroy', () => {
            detachMouseEvents()

            if (swiper.autoplay.running) {
              stop()
            }

            const document = getDocument()
            document.removeEventListener('visibilitychange', onVisibilityChange)
          })
          Object.assign(swiper.autoplay, {
            pause,
            run,
            start,
            stop,
          })
        }

        function Thumb(_ref) {
          const { swiper, extendParams, on, } = _ref
          extendParams({
            thumbs: {
              swiper: null,
              multipleActiveThumbs: true,
              autoScrollOffset: 0,
              slideThumbActiveClass: 'swiper-slide-thumb-active',
              thumbsContainerClass: 'swiper-thumbs',
            },
          })
          let initialized = false
          let swiperCreated = false
          swiper.thumbs = { swiper: null, }

          function onThumbClick() {
            const thumbsSwiper = swiper.thumbs.swiper
            if (!thumbsSwiper || thumbsSwiper.destroyed) return
            const clickedIndex = thumbsSwiper.clickedIndex
            const clickedSlide = thumbsSwiper.clickedSlide
            if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return
            if (typeof clickedIndex === 'undefined' || clickedIndex === null) return
            let slideToIndex

            if (thumbsSwiper.params.loop) {
              slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10)
            } else {
              slideToIndex = clickedIndex
            }

            if (swiper.params.loop) {
              let currentIndex = swiper.activeIndex

              if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                swiper.loopFix() // eslint-disable-next-line

                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft
                currentIndex = swiper.activeIndex
              }

              const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${ slideToIndex }"]`).eq(0).index()
              const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${ slideToIndex }"]`).eq(0).index()
              if (typeof prevIndex === 'undefined') slideToIndex = nextIndex
              else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex
              else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex
              else slideToIndex = prevIndex
            }

            swiper.slideTo(slideToIndex)
          }

          function init() {
            const { thumbs: thumbsParams, } = swiper.params
            if (initialized) return false
            initialized = true
            const SwiperClass = swiper.constructor

            if (thumbsParams.swiper instanceof SwiperClass) {
              swiper.thumbs.swiper = thumbsParams.swiper
              Object.assign(swiper.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false,
              })
              Object.assign(swiper.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false,
              })
            } else if (isObject(thumbsParams.swiper)) {
              const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper)
              Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false,
              })
              swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams)
              swiperCreated = true
            }

            swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass)
            swiper.thumbs.swiper.on('tap', onThumbClick)
            return true
          }

          function update(initial) {
            const thumbsSwiper = swiper.thumbs.swiper
            if (!thumbsSwiper || thumbsSwiper.destroyed) return
            const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView
            const autoScrollOffset = swiper.params.thumbs.autoScrollOffset
            const useOffset = autoScrollOffset && !thumbsSwiper.params.loop

            if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
              let currentThumbsIndex = thumbsSwiper.activeIndex
              let newThumbsIndex
              let direction

              if (thumbsSwiper.params.loop) {
                if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                  thumbsSwiper.loopFix() // eslint-disable-next-line

                  thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft
                  currentThumbsIndex = thumbsSwiper.activeIndex
                } // Find actual thumbs index to slide to

                const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${ swiper.realIndex }"]`).eq(0).index()
                const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${ swiper.realIndex }"]`).eq(0).index()

                if (typeof prevThumbsIndex === 'undefined') {
                  newThumbsIndex = nextThumbsIndex
                } else if (typeof nextThumbsIndex === 'undefined') {
                  newThumbsIndex = prevThumbsIndex
                } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
                  newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex
                } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
                  newThumbsIndex = nextThumbsIndex
                } else {
                  newThumbsIndex = prevThumbsIndex
                }

                direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev'
              } else {
                newThumbsIndex = swiper.realIndex
                direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev'
              }

              if (useOffset) {
                newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset
              }

              if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                  if (newThumbsIndex > currentThumbsIndex) {
                    newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1
                  } else {
                    newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1
                  }
                } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;

                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined)
              }
            } // Activate thumbs

            let thumbsToActivate = 1
            const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass

            if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
              thumbsToActivate = swiper.params.slidesPerView
            }

            if (!swiper.params.thumbs.multipleActiveThumbs) {
              thumbsToActivate = 1
            }

            thumbsToActivate = Math.floor(thumbsToActivate)
            thumbsSwiper.slides.removeClass(thumbActiveClass)

            if (thumbsSwiper.params.loop || (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)) {
              for (let i = 0; i < thumbsToActivate; i += 1) {
                thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${ swiper.realIndex + i }"]`).addClass(thumbActiveClass)
              }
            } else {
              for (let i = 0; i < thumbsToActivate; i += 1) {
                thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass)
              }
            }
          }

          on('beforeInit', () => {
            const { thumbs, } = swiper.params
            if (!thumbs || !thumbs.swiper) return
            init()
            update(true)
          })
          on('slideChange update resize observerUpdate', () => {
            update()
          })
          on('setTransition', (_s, duration) => {
            const thumbsSwiper = swiper.thumbs.swiper
            if (!thumbsSwiper || thumbsSwiper.destroyed) return
            thumbsSwiper.setTransition(duration)
          })
          on('beforeDestroy', () => {
            const thumbsSwiper = swiper.thumbs.swiper
            if (!thumbsSwiper || thumbsSwiper.destroyed) return

            if (swiperCreated) {
              thumbsSwiper.destroy()
            }
          })
          Object.assign(swiper.thumbs, {
            init,
            update,
          })
        }

        function freeMode(_ref) {
          const { swiper, extendParams, emit, once, } = _ref
          extendParams({
            freeMode: {
              enabled: false,
              momentum: true,
              momentumRatio: 1,
              momentumBounce: true,
              momentumBounceRatio: 1,
              momentumVelocityRatio: 1,
              sticky: false,
              minimumVelocity: 0.02,
            },
          })

          function onTouchStart() {
            const translate = swiper.getTranslate()
            swiper.setTranslate(translate)
            swiper.setTransition(0)
            swiper.touchEventsData.velocities.length = 0
            swiper.freeMode.onTouchEnd({ currentPos: swiper.rtl ? swiper.translate : -swiper.translate, })
          }

          function onTouchMove() {
            const { touchEventsData: data, touches, } = swiper // Velocity

            if (data.velocities.length === 0) {
              data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                time: data.touchStartTime,
              })
            }

            data.velocities.push({
              position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
              time: now(),
            })
          }

          function onTouchEnd(_ref2) {
            const { currentPos, } = _ref2
            const { params, $wrapperEl, rtlTranslate: rtl, snapGrid, touchEventsData: data, } = swiper // Time diff

            const touchEndTime = now()
            const timeDiff = touchEndTime - data.touchStartTime

            if (currentPos < -swiper.minTranslate()) {
              swiper.slideTo(swiper.activeIndex)
              return
            }

            if (currentPos > -swiper.maxTranslate()) {
              if (swiper.slides.length < snapGrid.length) {
                swiper.slideTo(snapGrid.length - 1)
              } else {
                swiper.slideTo(swiper.slides.length - 1)
              }

              return
            }

            if (params.freeMode.momentum) {
              if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop()
                const velocityEvent = data.velocities.pop()
                const distance = lastMoveEvent.position - velocityEvent.position
                const time = lastMoveEvent.time - velocityEvent.time
                swiper.velocity = distance / time
                swiper.velocity /= 2

                if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
                  swiper.velocity = 0
                } // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.

                if (time > 150 || now() - lastMoveEvent.time > 300) {
                  swiper.velocity = 0
                }
              } else {
                swiper.velocity = 0
              }

              swiper.velocity *= params.freeMode.momentumVelocityRatio
              data.velocities.length = 0
              let momentumDuration = 1000 * params.freeMode.momentumRatio
              const momentumDistance = swiper.velocity * momentumDuration
              let newPosition = swiper.translate + momentumDistance
              if (rtl) newPosition = -newPosition
              let doBounce = false
              let afterBouncePosition
              const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio
              let needsLoopFix

              if (newPosition < swiper.maxTranslate()) {
                if (params.freeMode.momentumBounce) {
                  if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                    newPosition = swiper.maxTranslate() - bounceAmount
                  }

                  afterBouncePosition = swiper.maxTranslate()
                  doBounce = true
                  data.allowMomentumBounce = true
                } else {
                  newPosition = swiper.maxTranslate()
                }

                if (params.loop && params.centeredSlides) needsLoopFix = true
              } else if (newPosition > swiper.minTranslate()) {
                if (params.freeMode.momentumBounce) {
                  if (newPosition - swiper.minTranslate() > bounceAmount) {
                    newPosition = swiper.minTranslate() + bounceAmount
                  }

                  afterBouncePosition = swiper.minTranslate()
                  doBounce = true
                  data.allowMomentumBounce = true
                } else {
                  newPosition = swiper.minTranslate()
                }

                if (params.loop && params.centeredSlides) needsLoopFix = true
              } else if (params.freeMode.sticky) {
                let nextSlide

                for (let j = 0; j < snapGrid.length; j += 1) {
                  if (snapGrid[j] > -newPosition) {
                    nextSlide = j
                    break
                  }
                }

                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                  newPosition = snapGrid[nextSlide]
                } else {
                  newPosition = snapGrid[nextSlide - 1]
                }

                newPosition = -newPosition
              }

              if (needsLoopFix) {
                once('transitionEnd', () => {
                  swiper.loopFix()
                })
              } // Fix duration

              if (swiper.velocity !== 0) {
                if (rtl) {
                  momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity)
                } else {
                  momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity)
                }

                if (params.freeMode.sticky) {
                  // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                  // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                  // It's easy to see this when simulating touch with mouse events. To fix this,
                  // limit single-slide swipes to the default slide duration. This also has the
                  // nice side effect of matching slide speed if the user stopped moving before
                  // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                  // For faster swipes, also apply limits (albeit higher ones).
                  const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate)
                  const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex]

                  if (moveDistance < currentSlideSize) {
                    momentumDuration = params.speed
                  } else if (moveDistance < 2 * currentSlideSize) {
                    momentumDuration = params.speed * 1.5
                  } else {
                    momentumDuration = params.speed * 2.5
                  }
                }
              } else if (params.freeMode.sticky) {
                swiper.slideToClosest()
                return
              }

              if (params.freeMode.momentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition)
                swiper.setTransition(momentumDuration)
                swiper.setTranslate(newPosition)
                swiper.transitionStart(true, swiper.swipeDirection)
                swiper.animating = true
                $wrapperEl.transitionEnd(() => {
                  if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return
                  emit('momentumBounce')
                  swiper.setTransition(params.speed)
                  setTimeout(() => {
                    swiper.setTranslate(afterBouncePosition)
                    $wrapperEl.transitionEnd(() => {
                      if (!swiper || swiper.destroyed) return
                      swiper.transitionEnd()
                    })
                  }, 0)
                })
              } else if (swiper.velocity) {
                emit('_freeModeNoMomentumRelease')
                swiper.updateProgress(newPosition)
                swiper.setTransition(momentumDuration)
                swiper.setTranslate(newPosition)
                swiper.transitionStart(true, swiper.swipeDirection)

                if (!swiper.animating) {
                  swiper.animating = true
                  $wrapperEl.transitionEnd(() => {
                    if (!swiper || swiper.destroyed) return
                    swiper.transitionEnd()
                  })
                }
              } else {
                swiper.updateProgress(newPosition)
              }

              swiper.updateActiveIndex()
              swiper.updateSlidesClasses()
            } else if (params.freeMode.sticky) {
              swiper.slideToClosest()
              return
            } else if (params.freeMode) {
              emit('_freeModeNoMomentumRelease')
            }

            if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
              swiper.updateProgress()
              swiper.updateActiveIndex()
              swiper.updateSlidesClasses()
            }
          }

          Object.assign(swiper, {
            freeMode: {
              onTouchStart,
              onTouchMove,
              onTouchEnd,
            },
          })
        }

        function Grid(_ref) {
          const { swiper, extendParams, } = _ref
          extendParams({
            grid: {
              rows: 1,
              fill: 'column',
            },
          })
          let slidesNumberEvenToRows
          let slidesPerRow
          let numFullColumns

          const initSlides = (slidesLength) => {
            const { slidesPerView, } = swiper.params
            const { rows, fill, } = swiper.params.grid
            slidesPerRow = slidesNumberEvenToRows / rows
            numFullColumns = Math.floor(slidesLength / rows)

            if (Math.floor(slidesLength / rows) === slidesLength / rows) {
              slidesNumberEvenToRows = slidesLength
            } else {
              slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows
            }

            if (slidesPerView !== 'auto' && fill === 'row') {
              slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows)
            }
          }

          const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
            const { slidesPerGroup, spaceBetween, } = swiper.params
            const { rows, fill, } = swiper.params.grid // Set slides order

            let newSlideOrderIndex
            let column
            let row

            if (fill === 'row' && slidesPerGroup > 1) {
              const groupIndex = Math.floor(i / (slidesPerGroup * rows))
              const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex
              const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup)
              row = Math.floor(slideIndexInGroup / columnsInGroup)
              column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup
              newSlideOrderIndex = column + (row * slidesNumberEvenToRows) / rows
              slide.css({
                '-webkit-order': newSlideOrderIndex,
                order: newSlideOrderIndex,
              })
            } else if (fill === 'column') {
              column = Math.floor(i / rows)
              row = i - column * rows

              if (column > numFullColumns || (column === numFullColumns && row === rows - 1)) {
                row += 1

                if (row >= rows) {
                  row = 0
                  column += 1
                }
              }
            } else {
              row = Math.floor(i / slidesPerRow)
              column = i - row * slidesPerRow
            }

            slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${ spaceBetween }px` : '')
          }

          const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
            const { spaceBetween, centeredSlides, roundLengths, } = swiper.params
            const { rows, } = swiper.params.grid
            swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows
            swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween
            swiper.$wrapperEl.css({ [getDirectionLabel('width')]: `${ swiper.virtualSize + spaceBetween }px`, })

            if (centeredSlides) {
              snapGrid.splice(0, snapGrid.length)
              const newSlidesGrid = []

              for (let i = 0; i < snapGrid.length; i += 1) {
                let slidesGridItem = snapGrid[i]
                if (roundLengths) slidesGridItem = Math.floor(slidesGridItem)
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem)
              }

              snapGrid.push(...newSlidesGrid)
            }
          }

          swiper.grid = {
            initSlides,
            updateSlide,
            updateWrapperSize,
          }
        }

        function appendSlide(slides) {
          const swiper = this
          const { $wrapperEl, params, } = swiper

          if (params.loop) {
            swiper.loopDestroy()
          }

          if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
              if (slides[i]) $wrapperEl.append(slides[i])
            }
          } else {
            $wrapperEl.append(slides)
          }

          if (params.loop) {
            swiper.loopCreate()
          }

          if (!params.observer) {
            swiper.update()
          }
        }

        function prependSlide(slides) {
          const swiper = this
          const { params, $wrapperEl, activeIndex, } = swiper

          if (params.loop) {
            swiper.loopDestroy()
          }

          let newActiveIndex = activeIndex + 1

          if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
              if (slides[i]) $wrapperEl.prepend(slides[i])
            }

            newActiveIndex = activeIndex + slides.length
          } else {
            $wrapperEl.prepend(slides)
          }

          if (params.loop) {
            swiper.loopCreate()
          }

          if (!params.observer) {
            swiper.update()
          }

          swiper.slideTo(newActiveIndex, 0, false)
        }

        function addSlide(index, slides) {
          const swiper = this
          const { $wrapperEl, params, activeIndex, } = swiper
          let activeIndexBuffer = activeIndex

          if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides
            swiper.loopDestroy()
            swiper.slides = $wrapperEl.children(`.${ params.slideClass }`)
          }

          const baseLength = swiper.slides.length

          if (index <= 0) {
            swiper.prependSlide(slides)
            return
          }

          if (index >= baseLength) {
            swiper.appendSlide(slides)
            return
          }

          let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer
          const slidesBuffer = []

          for (let i = baseLength - 1; i >= index; i -= 1) {
            const currentSlide = swiper.slides.eq(i)
            currentSlide.remove()
            slidesBuffer.unshift(currentSlide)
          }

          if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
              if (slides[i]) $wrapperEl.append(slides[i])
            }

            newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer
          } else {
            $wrapperEl.append(slides)
          }

          for (let i = 0; i < slidesBuffer.length; i += 1) {
            $wrapperEl.append(slidesBuffer[i])
          }

          if (params.loop) {
            swiper.loopCreate()
          }

          if (!params.observer) {
            swiper.update()
          }

          if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false)
          } else {
            swiper.slideTo(newActiveIndex, 0, false)
          }
        }

        function removeSlide(slidesIndexes) {
          const swiper = this
          const { params, $wrapperEl, activeIndex, } = swiper
          let activeIndexBuffer = activeIndex

          if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides
            swiper.loopDestroy()
            swiper.slides = $wrapperEl.children(`.${ params.slideClass }`)
          }

          let newActiveIndex = activeIndexBuffer
          let indexToRemove

          if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
            for (let i = 0; i < slidesIndexes.length; i += 1) {
              indexToRemove = slidesIndexes[i]
              if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove()
              if (indexToRemove < newActiveIndex) newActiveIndex -= 1
            }

            newActiveIndex = Math.max(newActiveIndex, 0)
          } else {
            indexToRemove = slidesIndexes
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove()
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1
            newActiveIndex = Math.max(newActiveIndex, 0)
          }

          if (params.loop) {
            swiper.loopCreate()
          }

          if (!params.observer) {
            swiper.update()
          }

          if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false)
          } else {
            swiper.slideTo(newActiveIndex, 0, false)
          }
        }

        function removeAllSlides() {
          const swiper = this
          const slidesIndexes = []

          for (let i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i)
          }

          swiper.removeSlide(slidesIndexes)
        }

        function Manipulation(_ref) {
          const { swiper, } = _ref
          Object.assign(swiper, {
            appendSlide: appendSlide.bind(swiper),
            prependSlide: prependSlide.bind(swiper),
            addSlide: addSlide.bind(swiper),
            removeSlide: removeSlide.bind(swiper),
            removeAllSlides: removeAllSlides.bind(swiper),
          })
        }

        function effectInit(params) {
          const {
            effect,
            swiper,
            on,
            setTranslate,
            setTransition,
            overwriteParams,
            perspective,
            recreateShadows,
            getEffectParams,
          } = params
          on('beforeInit', () => {
            if (swiper.params.effect !== effect) return
            swiper.classNames.push(`${ swiper.params.containerModifierClass }${ effect }`)

            if (perspective && perspective()) {
              swiper.classNames.push(`${ swiper.params.containerModifierClass }3d`)
            }

            const overwriteParamsResult = overwriteParams ? overwriteParams() : {}
            Object.assign(swiper.params, overwriteParamsResult)
            Object.assign(swiper.originalParams, overwriteParamsResult)
          })
          on('setTranslate', () => {
            if (swiper.params.effect !== effect) return
            setTranslate()
          })
          on('setTransition', (_s, duration) => {
            if (swiper.params.effect !== effect) return
            setTransition(duration)
          })
          on('transitionEnd', () => {
            if (swiper.params.effect !== effect) return

            if (recreateShadows) {
              if (!getEffectParams || !getEffectParams().slideShadows) return // remove shadows

              swiper.slides.each((slideEl) => {
                const $slideEl = swiper.$(slideEl)
                $slideEl.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove()
              }) // create new one

              recreateShadows()
            }
          })
          let requireUpdateOnVirtual
          on('virtualUpdate', () => {
            if (swiper.params.effect !== effect) return

            if (!swiper.slides.length) {
              requireUpdateOnVirtual = true
            }

            requestAnimationFrame(() => {
              if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                setTranslate()
                requireUpdateOnVirtual = false
              }
            })
          })
        }

        function effectTarget(effectParams, $slideEl) {
          if (effectParams.transformEl) {
            return $slideEl.find(effectParams.transformEl).css({
              'backface-visibility': 'hidden',
              '-webkit-backface-visibility': 'hidden',
            })
          }

          return $slideEl
        }

        function effectVirtualTransitionEnd(_ref) {
          const { swiper, duration, transformEl, allSlides, } = _ref
          const { slides, activeIndex, $wrapperEl, } = swiper

          if (swiper.params.virtualTranslate && duration !== 0) {
            let eventTriggered = false
            let $transitionEndTarget

            if (allSlides) {
              $transitionEndTarget = transformEl ? slides.find(transformEl) : slides
            } else {
              $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex)
            }

            $transitionEndTarget.transitionEnd(() => {
              if (eventTriggered) return
              if (!swiper || swiper.destroyed) return
              eventTriggered = true
              swiper.animating = false
              const triggerEvents = [
                'webkitTransitionEnd',
                'transitionend',
              ]

              for (let i = 0; i < triggerEvents.length; i += 1) {
                $wrapperEl.trigger(triggerEvents[i])
              }
            })
          }
        }

        function EffectFade(_ref) {
          const { swiper, extendParams, on, } = _ref
          extendParams({
            fadeEffect: {
              crossFade: false,
              transformEl: null,
            },
          })

          const setTranslate = () => {
            const { slides, } = swiper
            const params = swiper.params.fadeEffect

            for (let i = 0; i < slides.length; i += 1) {
              const $slideEl = swiper.slides.eq(i)
              const offset = $slideEl[0].swiperSlideOffset
              let tx = -offset
              if (!swiper.params.virtualTranslate) tx -= swiper.translate
              let ty = 0

              if (!swiper.isHorizontal()) {
                ty = tx
                tx = 0
              }

              const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0)
              const $targetEl = effectTarget(params, $slideEl)
              $targetEl
                .css({ opacity: slideOpacity, })
                .transform(`translate3d(${ tx }px, ${ ty }px, 0px)`)
            }
          }

          const setTransition = (duration) => {
            const { transformEl, } = swiper.params.fadeEffect
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides
            $transitionElements.transition(duration)
            effectVirtualTransitionEnd({
              swiper,
              duration,
              transformEl,
              allSlides: true,
            })
          }

          effectInit({
            effect: 'fade',
            swiper,
            on,
            setTranslate,
            setTransition,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: true,
              spaceBetween: 0,
              virtualTranslate: !swiper.params.cssMode,
            }),
          })
        }

        function EffectCube(_ref) {
          const { swiper, extendParams, on, } = _ref
          extendParams({
            cubeEffect: {
              slideShadows: true,
              shadow: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
          })

          const createSlideShadows = ($slideEl, progress, isHorizontal) => {
            let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top')
            let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom')

            if (shadowBefore.length === 0) {
              shadowBefore = $(`<
              div class

              =
              "swiper-slide-shadow-${ isHorizontal ? 'left' : 'top' }"
              > <

              /
              div >`)
              $slideEl.append(shadowBefore)
            }

            if (shadowAfter.length === 0) {
              shadowAfter = $(`<
              div class

              =
              "swiper-slide-shadow-${ isHorizontal ? 'right' : 'bottom' }"
              > <

              /
              div >`)
              $slideEl.append(shadowAfter)
            }

            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0)
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0)
          }

          const recreateShadows = () => {
            // create new ones
            const isHorizontal = swiper.isHorizontal()
            swiper.slides.each((slideEl) => {
              const progress = Math.max(Math.min(slideEl.progress, 1), -1)
              createSlideShadows($(slideEl), progress, isHorizontal)
            })
          }

          const setTranslate = () => {
            const {
              $el,
              $wrapperEl,
              slides,
              width: swiperWidth,
              height: swiperHeight,
              rtlTranslate: rtl,
              size: swiperSize,
              browser,
            } = swiper
            const params = swiper.params.cubeEffect
            const isHorizontal = swiper.isHorizontal()
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled
            let wrapperRotate = 0
            let $cubeShadowEl

            if (params.shadow) {
              if (isHorizontal) {
                $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow')

                if ($cubeShadowEl.length === 0) {
                  $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>')
                  $wrapperEl.append($cubeShadowEl)
                }

                $cubeShadowEl.css({ height: `${ swiperWidth }px`, })
              } else {
                $cubeShadowEl = $el.find('.swiper-cube-shadow')

                if ($cubeShadowEl.length === 0) {
                  $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>')
                  $el.append($cubeShadowEl)
                }
              }
            }

            for (let i = 0; i < slides.length; i += 1) {
              const $slideEl = slides.eq(i)
              let slideIndex = i

              if (isVirtual) {
                slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10)
              }

              let slideAngle = slideIndex * 90
              let round = Math.floor(slideAngle / 360)

              if (rtl) {
                slideAngle = -slideAngle
                round = Math.floor(-slideAngle / 360)
              }

              const progress = Math.max(Math.min($slideEl[0].progress, 1), -1)
              let tx = 0
              let ty = 0
              let tz = 0

              if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize
                tz = 0
              } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0
                tz = -round * 4 * swiperSize
              } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize
                tz = swiperSize
              } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize
                tz = 3 * swiperSize + swiperSize * 4 * round
              }

              if (rtl) {
                tx = -tx
              }

              if (!isHorizontal) {
                ty = tx
                tx = 0
              }

              const transform = `rotateX(${ isHorizontal ? 0 : -slideAngle }deg) rotateY(${ isHorizontal ? slideAngle : 0 }deg) translate3d(${ tx }px, ${ ty }px, ${ tz }px)`

              if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90
              }

              $slideEl.transform(transform)

              if (params.slideShadows) {
                createSlideShadows($slideEl, progress, isHorizontal)
              }
            }

            $wrapperEl.css({
              '-webkit-transform-origin': `50% 50% -${ swiperSize / 2 }px`,
              'transform-origin': `50% 50% -${ swiperSize / 2 }px`,
            })

            if (params.shadow) {
              if (isHorizontal) {
                $cubeShadowEl.transform(`translate3d(0px, ${ swiperWidth / 2 + params.shadowOffset }px, ${ -swiperWidth / 2 }px) rotateX(90deg) rotateZ(0deg) scale(${ params.shadowScale })`)
              } else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90
                const multiplier = 1.5 - (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 + Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
                const scale1 = params.shadowScale
                const scale2 = params.shadowScale / multiplier
                const offset = params.shadowOffset
                $cubeShadowEl.transform(`scale3d(${ scale1 }, 1, ${ scale2 }) translate3d(0px, ${ swiperHeight / 2 + offset }px, ${ -swiperHeight / 2 / scale2 }px) rotateX(-90deg)`)
              }
            }

            const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0
            $wrapperEl.transform(`translate3d(0px,0,${ zFactor }px) rotateX(${ swiper.isHorizontal() ? 0 : wrapperRotate }deg) rotateY(${ swiper.isHorizontal() ? -wrapperRotate : 0 }deg)`)
            $wrapperEl[0].style.setProperty('--swiper-cube-translate-z', `${ zFactor }px`)
          }

          const setTransition = (duration) => {
            const { $el, slides, } = swiper
            slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration)

            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
              $el.find('.swiper-cube-shadow').transition(duration)
            }
          }

          effectInit({
            effect: 'cube',
            swiper,
            on,
            setTranslate,
            setTransition,
            recreateShadows,
            getEffectParams: () => swiper.params.cubeEffect,
            perspective: () => true,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: true,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: false,
              virtualTranslate: true,
            }),
          })
        }

        function createShadow(params, $slideEl, side) {
          const shadowClass = `swiper-slide-shadow${ side ? `-${ side }` : '' }`
          const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl
          let $shadowEl = $shadowContainer.children(`.${ shadowClass }`)

          if (!$shadowEl.length) {
            $shadowEl = $(`<
            div class

            =
            "swiper-slide-shadow${ side ? `-${ side }` : '' }"
            > <

            /
            div >`)
            $shadowContainer.append($shadowEl)
          }

          return $shadowEl
        }

        function EffectFlip(_ref) {
          const { swiper, extendParams, on, } = _ref
          extendParams({
            flipEffect: {
              slideShadows: true,
              limitRotation: true,
              transformEl: null,
            },
          })

          const createSlideShadows = ($slideEl, progress, params) => {
            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top')
            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom')

            if (shadowBefore.length === 0) {
              shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top')
            }

            if (shadowAfter.length === 0) {
              shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom')
            }

            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0)
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0)
          }

          const recreateShadows = () => {
            // Set shadows
            const params = swiper.params.flipEffect
            swiper.slides.each((slideEl) => {
              const $slideEl = $(slideEl)
              let progress = $slideEl[0].progress

              if (swiper.params.flipEffect.limitRotation) {
                progress = Math.max(Math.min(slideEl.progress, 1), -1)
              }

              createSlideShadows($slideEl, progress, params)
            })
          }

          const setTranslate = () => {
            const { slides, rtlTranslate: rtl, } = swiper
            const params = swiper.params.flipEffect

            for (let i = 0; i < slides.length; i += 1) {
              const $slideEl = slides.eq(i)
              let progress = $slideEl[0].progress

              if (swiper.params.flipEffect.limitRotation) {
                progress = Math.max(Math.min($slideEl[0].progress, 1), -1)
              }

              const offset = $slideEl[0].swiperSlideOffset
              const rotate = -180 * progress
              let rotateY = rotate
              let rotateX = 0
              let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset
              let ty = 0

              if (!swiper.isHorizontal()) {
                ty = tx
                tx = 0
                rotateX = -rotateY
                rotateY = 0
              } else if (rtl) {
                rotateY = -rotateY
              }

              $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length

              if (params.slideShadows) {
                createSlideShadows($slideEl, progress, params)
              }

              const transform = `translate3d(${ tx }px, ${ ty }px, 0px) rotateX(${ rotateX }deg) rotateY(${ rotateY }deg)`
              const $targetEl = effectTarget(params, $slideEl)
              $targetEl.transform(transform)
            }
          }

          const setTransition = (duration) => {
            const { transformEl, } = swiper.params.flipEffect
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides
            $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration)
            effectVirtualTransitionEnd({
              swiper,
              duration,
              transformEl,
            })
          }

          effectInit({
            effect: 'flip',
            swiper,
            on,
            setTranslate,
            setTransition,
            recreateShadows,
            getEffectParams: () => swiper.params.flipEffect,
            perspective: () => true,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: true,
              spaceBetween: 0,
              virtualTranslate: !swiper.params.cssMode,
            }),
          })
        }

        function EffectCoverflow(_ref) {
          const { swiper, extendParams, on, } = _ref
          extendParams({
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: true,
              transformEl: null,
            },
          })

          const setTranslate = () => {
            const { width: swiperWidth, height: swiperHeight, slides, slidesSizesGrid, } = swiper
            const params = swiper.params.coverflowEffect
            const isHorizontal = swiper.isHorizontal()
            const transform = swiper.translate
            const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2
            const rotate = isHorizontal ? params.rotate : -params.rotate
            const translate = params.depth // Each slide offset from center

            for (let i = 0, length = slides.length; i < length; i += 1) {
              const $slideEl = slides.eq(i)
              const slideSize = slidesSizesGrid[i]
              const slideOffset = $slideEl[0].swiperSlideOffset
              const centerOffset = (center - slideOffset - slideSize / 2) / slideSize
              const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier
              let rotateY = isHorizontal ? rotate * offsetMultiplier : 0
              let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier // var rotateZ = 0

              let translateZ = -translate * Math.abs(offsetMultiplier)
              let stretch = params.stretch // Allow percentage to make a relative stretch for responsive sliders

              if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
                stretch = (parseFloat(params.stretch) / 100) * slideSize
              }

              let translateY = isHorizontal ? 0 : stretch * offsetMultiplier
              let translateX = isHorizontal ? stretch * offsetMultiplier : 0
              let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier) // Fix for ultra small values

              if (Math.abs(translateX) < 0.001) translateX = 0
              if (Math.abs(translateY) < 0.001) translateY = 0
              if (Math.abs(translateZ) < 0.001) translateZ = 0
              if (Math.abs(rotateY) < 0.001) rotateY = 0
              if (Math.abs(rotateX) < 0.001) rotateX = 0
              if (Math.abs(scale) < 0.001) scale = 0
              const slideTransform = `translate3d(${ translateX }px,${ translateY }px,${ translateZ }px)  rotateX(${ rotateX }deg) rotateY(${ rotateY }deg) scale(${ scale })`
              const $targetEl = effectTarget(params, $slideEl)
              $targetEl.transform(slideTransform)
              $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1

              if (params.slideShadows) {
                // Set shadows
                let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top')
                let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom')

                if ($shadowBeforeEl.length === 0) {
                  $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top')
                }

                if ($shadowAfterEl.length === 0) {
                  $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom')
                }

                if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0
                if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0
              }
            }
          }

          const setTransition = (duration) => {
            const { transformEl, } = swiper.params.coverflowEffect
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides
            $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration)
          }

          effectInit({
            effect: 'coverflow',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({ watchSlidesProgress: true, }),
          })
        }

        function EffectCreative(_ref) {
          const { swiper, extendParams, on, } = _ref
          extendParams({
            creativeEffect: {
              transformEl: null,
              limitProgress: 1,
              shadowPerProgress: false,
              progressMultiplier: 1,
              perspective: true,
              prev: {
                translate: [
                  0,
                  0,
                  0,
                ],
                rotate: [
                  0,
                  0,
                  0,
                ],
                opacity: 1,
                scale: 1,
              },
              next: {
                translate: [
                  0,
                  0,
                  0,
                ],
                rotate: [
                  0,
                  0,
                  0,
                ],
                opacity: 1,
                scale: 1,
              },
            },
          })

          const getTranslateValue = (value) => {
            if (typeof value === 'string') return value
            return `${ value }px`
          }

          const setTranslate = () => {
            const { slides, $wrapperEl, slidesSizesGrid, } = swiper
            const params = swiper.params.creativeEffect
            const { progressMultiplier: multiplier, } = params
            const isCenteredSlides = swiper.params.centeredSlides

            if (isCenteredSlides) {
              const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0
              $wrapperEl.transform(`translateX(calc(50% - ${ margin }px))`)
            }

            for (let i = 0; i < slides.length; i += 1) {
              const $slideEl = slides.eq(i)
              const slideProgress = $slideEl[0].progress
              const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress)
              let originalProgress = progress

              if (!isCenteredSlides) {
                originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress)
              }

              const offset = $slideEl[0].swiperSlideOffset
              const t = [
                swiper.params.cssMode ? -offset - swiper.translate : -offset,
                0,
                0,
              ]
              const r = [
                0,
                0,
                0,
              ]
              let custom = false

              if (!swiper.isHorizontal()) {
                t[1] = t[0]
                t[0] = 0
              }

              let data = {
                translate: [
                  0,
                  0,
                  0,
                ],
                rotate: [
                  0,
                  0,
                  0,
                ],
                scale: 1,
                opacity: 1,
              }

              if (progress < 0) {
                data = params.next
                custom = true
              } else if (progress > 0) {
                data = params.prev
                custom = true
              } // set translate

              t.forEach((value, index) => {
                t[index] = `calc(${ value }px + (${ getTranslateValue(data.translate[index]) } * ${ Math.abs(progress * multiplier) }))`
              }) // set rotates

              r.forEach((value, index) => {
                r[index] = data.rotate[index] * Math.abs(progress * multiplier)
              })
              $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length
              const translateString = t.join(', ')
              const rotateString = `rotateX(${ r[0] }deg) rotateY(${ r[1] }deg) rotateZ(${ r[2] }deg)`
              const scaleString = originalProgress < 0 ? `scale(${ 1 + (1 - data.scale) * originalProgress * multiplier })` : `scale(${ 1 - (1 - data.scale) * originalProgress * multiplier })`
              const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier
              const transform = `translate3d(${ translateString }) ${ rotateString } ${ scaleString }` // Set shadows

              if ((custom && data.shadow) || !custom) {
                let $shadowEl = $slideEl.children('.swiper-slide-shadow')

                if ($shadowEl.length === 0 && data.shadow) {
                  $shadowEl = createShadow(params, $slideEl)
                }

                if ($shadowEl.length) {
                  const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress
                  $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1)
                }
              }

              const $targetEl = effectTarget(params, $slideEl)
              $targetEl.transform(transform).css({ opacity: opacityString, })

              if (data.origin) {
                $targetEl.css('transform-origin', data.origin)
              }
            }
          }

          const setTransition = (duration) => {
            const { transformEl, } = swiper.params.creativeEffect
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides
            $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration)
            effectVirtualTransitionEnd({
              swiper,
              duration,
              transformEl,
              allSlides: true,
            })
          }

          effectInit({
            effect: 'creative',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => swiper.params.creativeEffect.perspective,
            overwriteParams: () => ({
              watchSlidesProgress: true,
              virtualTranslate: !swiper.params.cssMode,
            }),
          })
        }

        function EffectCards(_ref) {
          const { swiper, extendParams, on, } = _ref
          extendParams({
            cardsEffect: {
              slideShadows: true,
              transformEl: null,
              rotate: true,
            },
          })

          const setTranslate = () => {
            const { slides, activeIndex, } = swiper
            const params = swiper.params.cardsEffect
            const { startTranslate, isTouched, } = swiper.touchEventsData
            const currentTranslate = swiper.translate

            for (let i = 0; i < slides.length; i += 1) {
              const $slideEl = slides.eq(i)
              const slideProgress = $slideEl[0].progress
              const progress = Math.min(Math.max(slideProgress, -4), 4)
              let offset = $slideEl[0].swiperSlideOffset

              if (swiper.params.centeredSlides && !swiper.params.cssMode) {
                swiper.$wrapperEl.transform(`translateX(${ swiper.minTranslate() }px)`)
              }

              if (swiper.params.centeredSlides && swiper.params.cssMode) {
                offset -= slides[0].swiperSlideOffset
              }

              let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset
              let tY = 0
              const tZ = -100 * Math.abs(progress)
              let scale = 1
              let rotate = -2 * progress
              let tXAdd = 8 - Math.abs(progress) * 0.75
              const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i
              const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate
              const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate

              if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5
                rotate += -28 * progress * subProgress
                scale += -0.5 * subProgress
                tXAdd += 96 * subProgress
                tY = `${ -25 * subProgress * Math.abs(progress) }%`
              }

              if (progress < 0) {
                // next
                tX = `calc(${ tX }px + (${ tXAdd * Math.abs(progress) }%))`
              } else if (progress > 0) {
                // prev
                tX = `calc(${ tX }px + (-${ tXAdd * Math.abs(progress) }%))`
              } else {
                tX = `${ tX }px`
              }

              if (!swiper.isHorizontal()) {
                const prevY = tY
                tY = tX
                tX = prevY
              }

              const scaleString = progress < 0 ? `${ 1 + (1 - scale) * progress }` : `${ 1 - (1 - scale) * progress }`
              const transform = `
      translate3d(${ tX }, ${ tY }, ${ tZ }px)
      rotateZ(${ params.rotate ? rotate : 0 }deg)
      scale(${ scaleString })
    `

              if (params.slideShadows) {
                // Set shadows
                let $shadowEl = $slideEl.find('.swiper-slide-shadow')

                if ($shadowEl.length === 0) {
                  $shadowEl = createShadow(params, $slideEl)
                }

                if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1)
              }

              $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length
              const $targetEl = effectTarget(params, $slideEl)
              $targetEl.transform(transform)
            }
          }

          const setTransition = (duration) => {
            const { transformEl, } = swiper.params.cardsEffect
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides
            $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration)
            effectVirtualTransitionEnd({
              swiper,
              duration,
              transformEl,
            })
          }

          effectInit({
            effect: 'cards',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({
              watchSlidesProgress: true,
              virtualTranslate: !swiper.params.cssMode,
            }),
          })
        }

        // Swiper Class
        const modules = [
          Virtual,
          Keyboard,
          Mousewheel,
          Navigation,
          Pagination,
          Scrollbar,
          Parallax,
          Zoom,
          Lazy,
          Controller,
          A11y,
          History,
          HashNavigation,
          Autoplay,
          Thumb,
          freeMode,
          Grid,
          Manipulation,
          EffectFade,
          EffectCube,
          EffectFlip,
          EffectCoverflow,
          EffectCreative,
          EffectCards,
        ]
        Swiper.use(modules)

        return Swiper
      })


      /***/
    }),
    /* 3 */
    /***/ (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */   'default': function () {
          return /* binding */ LazyLoad
        },
        /* harmony export */
      })
      const runningOnBrowser = typeof window !== 'undefined'

      const isBot = (runningOnBrowser && !('onscroll' in window)) || (typeof navigator !== 'undefined' && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent))

      const supportsIntersectionObserver = runningOnBrowser && 'IntersectionObserver' in window

      const supportsClassList = runningOnBrowser && 'classList' in document.createElement('p')

      const isHiDpi = runningOnBrowser && window.devicePixelRatio > 1

      const defaultSettings = {
        elements_selector: '.lazy',
        container: isBot || runningOnBrowser ? document : null,
        threshold: 300,
        thresholds: null,
        data_src: 'src',
        data_srcset: 'srcset',
        data_sizes: 'sizes',
        data_bg: 'bg',
        data_bg_hidpi: 'bg-hidpi',
        data_bg_multi: 'bg-multi',
        data_bg_multi_hidpi: 'bg-multi-hidpi',
        data_bg_set: 'bg-set',
        data_poster: 'poster',
        class_applied: 'applied',
        class_loading: 'loading',
        class_loaded: 'loaded',
        class_error: 'error',
        class_entered: 'entered',
        class_exited: 'exited',
        unobserve_completed: true,
        unobserve_entered: false,
        cancel_on_exit: true,
        callback_enter: null,
        callback_exit: null,
        callback_applied: null,
        callback_loading: null,
        callback_loaded: null,
        callback_error: null,
        callback_finish: null,
        callback_cancel: null,
        use_native: false,
        restore_on_error: false,
      }

      const getExtendedSettings = (customSettings) => {
        return Object.assign({}, defaultSettings, customSettings)
      }

      /* Creates instance and notifies it through the window element */
      const createInstance = function (classObj, options) {
        let event
        const eventString = 'LazyLoad::Initialized'
        const instance = new classObj(options)
        try {
          // Works in modern browsers
          event = new CustomEvent(eventString, { detail: { instance, }, })
        } catch (err) {
          // Works in Internet Explorer (all versions)
          event = document.createEvent('CustomEvent')
          event.initCustomEvent(eventString, false, false, { instance, })
        }
        window.dispatchEvent(event)
      }

      /* Auto initialization of one or more instances of lazyload, depending on the
    options passed in (plain object or an array) */
      const autoInitialize = (classObj, options) => {
        if (!options) {
          return
        }
        if (!options.length) {
          // Plain object
          createInstance(classObj, options)
        } else {
          // Array of objects
          for (let i = 0, optionsItem; (optionsItem = options[i]); i += 1) {
            createInstance(classObj, optionsItem)
          }
        }
      }

      const SRC = 'src'
      const SRCSET = 'srcset'
      const SIZES = 'sizes'
      const POSTER = 'poster'
      const ORIGINALS = 'llOriginalAttrs'
      const DATA = 'data'

      const statusLoading = 'loading'
      const statusLoaded = 'loaded'
      const statusApplied = 'applied'
      const statusEntered = 'entered'
      const statusError = 'error'
      const statusNative = 'native'

      const dataPrefix = 'data-'
      const statusDataName = 'll-status'

      const getData = (element, attribute) => {
        return element.getAttribute(dataPrefix + attribute)
      }

      const setData = (element, attribute, value) => {
        const attrName = dataPrefix + attribute
        if (value === null) {
          element.removeAttribute(attrName)
          return
        }
        element.setAttribute(attrName, value)
      }

      const getStatus = (element) => getData(element, statusDataName)
      const setStatus = (element, status) => setData(element, statusDataName, status)
      const resetStatus = (element) => setStatus(element, null)

      const hasEmptyStatus = (element) => getStatus(element) === null
      const hasStatusLoading = (element) => getStatus(element) === statusLoading
      const hasStatusError = (element) => getStatus(element) === statusError
      const hasStatusNative = (element) => getStatus(element) === statusNative

      const statusesAfterLoading = [
        statusLoading,
        statusLoaded,
        statusApplied,
        statusError,
      ]
      const hadStartedLoading = (element) => statusesAfterLoading.indexOf(getStatus(element)) >= 0

      const safeCallback = (callback, arg1, arg2, arg3) => {
        if (!callback) {
          return
        }

        if (arg3 !== undefined) {
          callback(arg1, arg2, arg3)
          return
        }
        if (arg2 !== undefined) {
          callback(arg1, arg2)
          return
        }
        callback(arg1)
      }

      const addClass = (element, className) => {
        if (supportsClassList) {
          element.classList.add(className)
          return
        }
        element.className += (element.className ? ' ' : '') + className
      }

      const removeClass = (element, className) => {
        if (supportsClassList) {
          element.classList.remove(className)
          return
        }
        element.className = element.className
          .replace(new RegExp('(^|\\s+)' + className + '(\\s+|$)'), ' ')
          .replace(/^\s+/, '')
          .replace(/\s+$/, '')
      }

      const addTempImage = (element) => {
        element.llTempImage = document.createElement('IMG')
      }

      const deleteTempImage = (element) => {
        delete element.llTempImage
      }

      const getTempImage = (element) => element.llTempImage

      const unobserve = (element, instance) => {
        if (!instance) return
        const observer = instance._observer
        if (!observer) return
        observer.unobserve(element)
      }

      const resetObserver = (observer) => {
        observer.disconnect()
      }

      const unobserveEntered = (element, settings, instance) => {
        if (settings.unobserve_entered) unobserve(element, instance)
      }

      const updateLoadingCount = (instance, delta) => {
        if (!instance) return
        instance.loadingCount += delta
      }

      const decreaseToLoadCount = (instance) => {
        if (!instance) return
        instance.toLoadCount -= 1
      }

      const setToLoadCount = (instance, value) => {
        if (!instance) return
        instance.toLoadCount = value
      }

      const isSomethingLoading = (instance) => instance.loadingCount > 0

      const haveElementsToLoad = (instance) => instance.toLoadCount > 0

      const getSourceTags = (parentTag) => {
        const sourceTags = []
        for (let i = 0, childTag; (childTag = parentTag.children[i]); i += 1) {
          if (childTag.tagName === 'SOURCE') {
            sourceTags.push(childTag)
          }
        }
        return sourceTags
      }

      const forEachPictureSource = (element, fn) => {
        const parent = element.parentNode
        if (!parent || parent.tagName !== 'PICTURE') {
          return
        }
        const sourceTags = getSourceTags(parent)
        sourceTags.forEach(fn)
      }

      const forEachVideoSource = (element, fn) => {
        const sourceTags = getSourceTags(element)
        sourceTags.forEach(fn)
      }

      const attrsSrc = [ SRC, ]
      const attrsSrcPoster = [
        SRC,
        POSTER,
      ]
      const attrsSrcSrcsetSizes = [
        SRC,
        SRCSET,
        SIZES,
      ]
      const attrsData = [ DATA, ]

      const hasOriginalAttrs = (element) => !!element[ORIGINALS]
      const getOriginalAttrs = (element) => element[ORIGINALS]
      const deleteOriginalAttrs = (element) => delete element[ORIGINALS]

      // ## SAVE ##

      const setOriginalsObject = (element, attributes) => {
        if (hasOriginalAttrs(element)) {
          return
        }
        const originals = {}
        attributes.forEach((attribute) => {
          originals[attribute] = element.getAttribute(attribute)
        })
        element[ORIGINALS] = originals
      }

      const saveOriginalBackgroundStyle = (element) => {
        if (hasOriginalAttrs(element)) {
          return
        }
        element[ORIGINALS] = { backgroundImage: element.style.backgroundImage, }
      }

      // ## RESTORE ##

      const setOrResetAttribute = (element, attrName, value) => {
        if (!value) {
          element.removeAttribute(attrName)
          return
        }
        element.setAttribute(attrName, value)
      }

      const restoreOriginalAttrs = (element, attributes) => {
        if (!hasOriginalAttrs(element)) {
          return
        }
        const originals = getOriginalAttrs(element)
        attributes.forEach((attribute) => {
          setOrResetAttribute(element, attribute, originals[attribute])
        })
      }

      const restoreOriginalBgImage = (element) => {
        if (!hasOriginalAttrs(element)) {
          return
        }
        const originals = getOriginalAttrs(element)
        element.style.backgroundImage = originals.backgroundImage
      }

      const manageApplied = (element, settings, instance) => {
        addClass(element, settings.class_applied)
        setStatus(element, statusApplied)
        // Instance is not provided when loading is called from static class
        if (!instance) return
        if (settings.unobserve_completed) {
          // Unobserve now because we can't do it on load
          unobserve(element, settings)
        }
        safeCallback(settings.callback_applied, element, instance)
      }

      const manageLoading = (element, settings, instance) => {
        addClass(element, settings.class_loading)
        setStatus(element, statusLoading)
        // Instance is not provided when loading is called from static class
        if (!instance) return
        updateLoadingCount(instance, +1)
        safeCallback(settings.callback_loading, element, instance)
      }

      const setAttributeIfValue = (element, attrName, value) => {
        if (!value) {
          return
        }
        element.setAttribute(attrName, value)
      }

      const setImageAttributes = (element, settings) => {
        setAttributeIfValue(element, SIZES, getData(element, settings.data_sizes))
        setAttributeIfValue(element, SRCSET, getData(element, settings.data_srcset))
        setAttributeIfValue(element, SRC, getData(element, settings.data_src))
      }

      const setSourcesImg = (imgEl, settings) => {
        forEachPictureSource(imgEl, (sourceTag) => {
          setOriginalsObject(sourceTag, attrsSrcSrcsetSizes)
          setImageAttributes(sourceTag, settings)
        })
        setOriginalsObject(imgEl, attrsSrcSrcsetSizes)
        setImageAttributes(imgEl, settings)
      }

      const setSourcesIframe = (iframe, settings) => {
        setOriginalsObject(iframe, attrsSrc)
        setAttributeIfValue(iframe, SRC, getData(iframe, settings.data_src))
      }

      const setSourcesVideo = (videoEl, settings) => {
        forEachVideoSource(videoEl, (sourceEl) => {
          setOriginalsObject(sourceEl, attrsSrc)
          setAttributeIfValue(sourceEl, SRC, getData(sourceEl, settings.data_src))
        })
        setOriginalsObject(videoEl, attrsSrcPoster)

        setAttributeIfValue(videoEl, POSTER, getData(videoEl, settings.data_poster))
        setAttributeIfValue(videoEl, SRC, getData(videoEl, settings.data_src))
        videoEl.load()
      }

      const setSourcesObject = (object, settings) => {
        setOriginalsObject(object, attrsData)
        setAttributeIfValue(object, DATA, getData(object, settings.data_src))
      }

      const setBackground = (element, settings, instance) => {
        const bg1xValue = getData(element, settings.data_bg)
        const bgHiDpiValue = getData(element, settings.data_bg_hidpi)
        const bgDataValue = isHiDpi && bgHiDpiValue ? bgHiDpiValue : bg1xValue
        if (!bgDataValue) return
        element.style.backgroundImage = `url("${ bgDataValue }")`
        getTempImage(element).setAttribute(SRC, bgDataValue)
        manageLoading(element, settings, instance)
      }

      // NOTE: THE TEMP IMAGE TRICK CANNOT BE DONE WITH data-multi-bg
      // BECAUSE INSIDE ITS VALUES MUST BE WRAPPED WITH URL() AND ONE OF THEM
      // COULD BE A GRADIENT BACKGROUND IMAGE
      const setMultiBackground = (element, settings, instance) => {
        const bg1xValue = getData(element, settings.data_bg_multi)
        const bgHiDpiValue = getData(element, settings.data_bg_multi_hidpi)
        const bgDataValue = isHiDpi && bgHiDpiValue ? bgHiDpiValue : bg1xValue
        if (!bgDataValue) {
          return
        }
        element.style.backgroundImage = bgDataValue
        manageApplied(element, settings, instance)
      }

      const setImgsetBackground = (element, settings, instance) => {
        const bgImgSetDataValue = getData(element, settings.data_bg_set)
        if (!bgImgSetDataValue) {
          return
        }
        const imgSetValues = bgImgSetDataValue.split('|')
        let bgImageValues = imgSetValues.map((value) => `image-set(${ value })`)
        element.style.backgroundImage = bgImageValues.join()
        // Temporary fix for Chromeium with the -webkit- prefix
        if (element.style.backgroundImage === '') {
          bgImageValues = imgSetValues.map((value) => `-webkit-image-set(${ value })`)
          element.style.backgroundImage = bgImageValues.join()
        }
        manageApplied(element, settings, instance)
      }

      const setSourcesFunctions = {
        IMG: setSourcesImg,
        IFRAME: setSourcesIframe,
        VIDEO: setSourcesVideo,
        OBJECT: setSourcesObject,
      }

      const setSourcesNative = (element, settings) => {
        const setSourcesFunction = setSourcesFunctions[element.tagName]
        if (!setSourcesFunction) {
          return
        }
        setSourcesFunction(element, settings)
      }

      const setSources = (element, settings, instance) => {
        const setSourcesFunction = setSourcesFunctions[element.tagName]
        if (!setSourcesFunction) {
          return
        }
        setSourcesFunction(element, settings)
        manageLoading(element, settings, instance)
      }

      const elementsWithLoadEvent = [
        'IMG',
        'IFRAME',
        'VIDEO',
        'OBJECT',
      ]
      const hasLoadEvent = (element) => elementsWithLoadEvent.indexOf(element.tagName) > -1

      const checkFinish = (settings, instance) => {
        if (instance && !isSomethingLoading(instance) && !haveElementsToLoad(instance)) {
          safeCallback(settings.callback_finish, instance)
        }
      }

      const addEventListener = (element, eventName, handler) => {
        element.addEventListener(eventName, handler)
        element.llEvLisnrs[eventName] = handler
      }

      const removeEventListener = (element, eventName, handler) => {
        element.removeEventListener(eventName, handler)
      }

      const hasEventListeners = (element) => {
        return !!element.llEvLisnrs
      }

      const addEventListeners = (element, loadHandler, errorHandler) => {
        if (!hasEventListeners(element)) element.llEvLisnrs = {}
        const loadEventName = element.tagName === 'VIDEO' ? 'loadeddata' : 'load'
        addEventListener(element, loadEventName, loadHandler)
        addEventListener(element, 'error', errorHandler)
      }

      const removeEventListeners = (element) => {
        if (!hasEventListeners(element)) {
          return
        }
        const eventListeners = element.llEvLisnrs
        for (const eventName in eventListeners) {
          const handler = eventListeners[eventName]
          removeEventListener(element, eventName, handler)
        }
        delete element.llEvLisnrs
      }

      const doneHandler = (element, settings, instance) => {
        deleteTempImage(element)
        updateLoadingCount(instance, -1)
        decreaseToLoadCount(instance)
        removeClass(element, settings.class_loading)
        if (settings.unobserve_completed) {
          unobserve(element, instance)
        }
      }

      const loadHandler = (event, element, settings, instance) => {
        const goingNative = hasStatusNative(element)
        doneHandler(element, settings, instance)
        addClass(element, settings.class_loaded)
        setStatus(element, statusLoaded)
        safeCallback(settings.callback_loaded, element, instance)
        if (!goingNative) checkFinish(settings, instance)
      }

      const errorHandler = (event, element, settings, instance) => {
        const goingNative = hasStatusNative(element)
        doneHandler(element, settings, instance)
        addClass(element, settings.class_error)
        setStatus(element, statusError)
        safeCallback(settings.callback_error, element, instance)
        if (settings.restore_on_error) restoreOriginalAttrs(element, attrsSrcSrcsetSizes)
        if (!goingNative) checkFinish(settings, instance)
      }

      const addOneShotEventListeners = (element, settings, instance) => {
        const elementToListenTo = getTempImage(element) || element
        if (hasEventListeners(elementToListenTo)) {
          // This happens when loading is retried twice
          return
        }
        const _loadHandler = (event) => {
          loadHandler(event, element, settings, instance)
          removeEventListeners(elementToListenTo)
        }
        const _errorHandler = (event) => {
          errorHandler(event, element, settings, instance)
          removeEventListeners(elementToListenTo)
        }
        addEventListeners(elementToListenTo, _loadHandler, _errorHandler)
      }

      const loadBackground = (element, settings, instance) => {
        addTempImage(element)
        addOneShotEventListeners(element, settings, instance)
        saveOriginalBackgroundStyle(element)
        setBackground(element, settings, instance)
        setMultiBackground(element, settings, instance)
        setImgsetBackground(element, settings, instance)
      }

      const loadRegular = (element, settings, instance) => {
        addOneShotEventListeners(element, settings, instance)
        setSources(element, settings, instance)
      }

      const load = (element, settings, instance) => {
        if (hasLoadEvent(element)) {
          loadRegular(element, settings, instance)
        } else {
          loadBackground(element, settings, instance)
        }
      }

      const loadNative = (element, settings, instance) => {
        element.setAttribute('loading', 'lazy')
        addOneShotEventListeners(element, settings, instance)
        setSourcesNative(element, settings)
        setStatus(element, statusNative)
      }

      const removeImageAttributes = (element) => {
        element.removeAttribute(SRC)
        element.removeAttribute(SRCSET)
        element.removeAttribute(SIZES)
      }

      const resetSourcesImg = (element) => {
        forEachPictureSource(element, (sourceTag) => {
          removeImageAttributes(sourceTag)
        })
        removeImageAttributes(element)
      }

      const restoreImg = (imgEl) => {
        forEachPictureSource(imgEl, (sourceEl) => {
          restoreOriginalAttrs(sourceEl, attrsSrcSrcsetSizes)
        })
        restoreOriginalAttrs(imgEl, attrsSrcSrcsetSizes)
      }

      const restoreVideo = (videoEl) => {
        forEachVideoSource(videoEl, (sourceEl) => {
          restoreOriginalAttrs(sourceEl, attrsSrc)
        })
        restoreOriginalAttrs(videoEl, attrsSrcPoster)
        videoEl.load()
      }

      const restoreIframe = (iframeEl) => {
        restoreOriginalAttrs(iframeEl, attrsSrc)
      }

      const restoreObject = (objectEl) => {
        restoreOriginalAttrs(objectEl, attrsData)
      }

      const restoreFunctions = {
        IMG: restoreImg,
        IFRAME: restoreIframe,
        VIDEO: restoreVideo,
        OBJECT: restoreObject,
      }

      const restoreAttributes = (element) => {
        const restoreFunction = restoreFunctions[element.tagName]
        if (!restoreFunction) {
          restoreOriginalBgImage(element)
          return
        }
        restoreFunction(element)
      }

      const resetClasses = (element, settings) => {
        if (hasEmptyStatus(element) || hasStatusNative(element)) {
          return
        }
        removeClass(element, settings.class_entered)
        removeClass(element, settings.class_exited)
        removeClass(element, settings.class_applied)
        removeClass(element, settings.class_loading)
        removeClass(element, settings.class_loaded)
        removeClass(element, settings.class_error)
      }

      const restore = (element, settings) => {
        restoreAttributes(element)
        resetClasses(element, settings)
        resetStatus(element)
        deleteOriginalAttrs(element)
      }

      const cancelLoading = (element, entry, settings, instance) => {
        if (!settings.cancel_on_exit) return
        if (!hasStatusLoading(element)) return
        if (element.tagName !== 'IMG') return //Works only on images
        removeEventListeners(element)
        resetSourcesImg(element)
        restoreImg(element)
        removeClass(element, settings.class_loading)
        updateLoadingCount(instance, -1)
        resetStatus(element)
        safeCallback(settings.callback_cancel, element, entry, instance)
      }

      const onEnter = (element, entry, settings, instance) => {
        const dontLoad = hadStartedLoading(element) /* Save status
        before setting it, to prevent loading it again. Fixes #526. */
        setStatus(element, statusEntered)
        addClass(element, settings.class_entered)
        removeClass(element, settings.class_exited)
        unobserveEntered(element, settings, instance)
        safeCallback(settings.callback_enter, element, entry, instance)
        if (dontLoad) return
        load(element, settings, instance)
      }

      const onExit = (element, entry, settings, instance) => {
        if (hasEmptyStatus(element)) return //Ignore the first pass, at landing
        addClass(element, settings.class_exited)
        cancelLoading(element, entry, settings, instance)
        safeCallback(settings.callback_exit, element, entry, instance)
      }

      const tagsWithNativeLazy = [
        'IMG',
        'IFRAME',
        'VIDEO',
      ]

      const shouldUseNative = (settings) => settings.use_native && 'loading' in HTMLImageElement.prototype

      const loadAllNative = (elements, settings, instance) => {
        elements.forEach((element) => {
          if (tagsWithNativeLazy.indexOf(element.tagName) === -1) {
            return
          }
          loadNative(element, settings, instance)
        })
        setToLoadCount(instance, 0)
      }

      const isIntersecting = (entry) => entry.isIntersecting || entry.intersectionRatio > 0

      const getObserverSettings = (settings) => ({
        root: settings.container === document ? null : settings.container,
        rootMargin: settings.thresholds || settings.threshold + 'px',
      })

      const intersectionHandler = (entries, settings, instance) => {
        entries.forEach((entry) => (isIntersecting(entry) ? onEnter(entry.target, entry, settings, instance) : onExit(entry.target, entry, settings, instance)))
      }

      const observeElements = (observer, elements) => {
        elements.forEach((element) => {
          observer.observe(element)
        })
      }

      const updateObserver = (observer, elementsToObserve) => {
        resetObserver(observer)
        observeElements(observer, elementsToObserve)
      }

      const setObserver = (settings, instance) => {
        if (!supportsIntersectionObserver || shouldUseNative(settings)) {
          return
        }
        instance._observer = new IntersectionObserver((entries) => {
          intersectionHandler(entries, settings, instance)
        }, getObserverSettings(settings))
      }

      const toArray = (nodeSet) => Array.prototype.slice.call(nodeSet)

      const queryElements = (settings) => settings.container.querySelectorAll(settings.elements_selector)

      const excludeManagedElements = (elements) => toArray(elements).filter(hasEmptyStatus)

      const hasError = (element) => hasStatusError(element)
      const filterErrorElements = (elements) => toArray(elements).filter(hasError)

      const getElementsToLoad = (elements, settings) => excludeManagedElements(elements || queryElements(settings))

      const retryLazyLoad = (settings, instance) => {
        const errorElements = filterErrorElements(queryElements(settings))
        errorElements.forEach((element) => {
          removeClass(element, settings.class_error)
          resetStatus(element)
        })
        instance.update()
      }

      const setOnlineCheck = (settings, instance) => {
        if (!runningOnBrowser) {
          return
        }
        instance._onlineHandler = () => {
          retryLazyLoad(settings, instance)
        }
        window.addEventListener('online', instance._onlineHandler)
      }

      const resetOnlineCheck = (instance) => {
        if (!runningOnBrowser) {
          return
        }
        window.removeEventListener('online', instance._onlineHandler)
      }

      const LazyLoad = function (customSettings, elements) {
        const settings = getExtendedSettings(customSettings)
        this._settings = settings
        this.loadingCount = 0
        setObserver(settings, this)
        setOnlineCheck(settings, this)
        this.update(elements)
      }

      LazyLoad.prototype = {
        update: function (givenNodeset) {
          const settings = this._settings
          const elementsToLoad = getElementsToLoad(givenNodeset, settings)
          setToLoadCount(this, elementsToLoad.length)

          if (isBot || !supportsIntersectionObserver) {
            this.loadAll(elementsToLoad)
            return
          }
          if (shouldUseNative(settings)) {
            loadAllNative(elementsToLoad, settings, this)
            return
          }

          updateObserver(this._observer, elementsToLoad)
        },

        destroy: function () {
          // Observer
          if (this._observer) {
            this._observer.disconnect()
          }
          // Clean handlers
          resetOnlineCheck(this)
          // Clean custom attributes on elements
          queryElements(this._settings).forEach((element) => {
            deleteOriginalAttrs(element)
          })
          // Delete all internal props
          delete this._observer
          delete this._settings
          delete this._onlineHandler
          delete this.loadingCount
          delete this.toLoadCount
        },

        loadAll: function (elements) {
          const settings = this._settings
          const elementsToLoad = getElementsToLoad(elements, settings)
          elementsToLoad.forEach((element) => {
            unobserve(element, this)
            load(element, settings, this)
          })
        },

        restoreAll: function () {
          const settings = this._settings
          queryElements(settings).forEach((element) => {
            restore(element, settings)
          })
        },
      }

      LazyLoad.load = (element, customSettings) => {
        const settings = getExtendedSettings(customSettings)
        load(element, settings)
      }

      LazyLoad.resetStatus = (element) => {
        resetStatus(element)
      }

      // Automatic instances creation if required (useful for async script loading)
      if (runningOnBrowser) {
        autoInitialize(LazyLoad, window.lazyLoadOptions)
      }


      /***/
    }),
    /* 4 */
    /***/ (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */   'Carousel': function () {
          return /* binding */ y
        },
        /* harmony export */   'Fancybox': function () {
          return /* binding */ F
        },
        /* harmony export */   'Panzoom': function () {
          return /* binding */ d
        },
        /* harmony export */
      })
      // @fancyapps/ui/Fancybox v4.0.27
      const t = t => 'object' == typeof t && null !== t && t.constructor === Object && '[object Object]' === Object.prototype.toString.call(t),
        e = (...i) => {
          let s = !1
          'boolean' == typeof i[0] && (s = i.shift())
          const o = i[0]
          if (!o || 'object' != typeof o) throw new Error('extendee must be an object')
          const n = i.slice(1), a = n.length
          for (let i = 0; i < a; i++) {
            const a = n[i]
            for (const i in a) if (a.hasOwnProperty(i)) {
              const n = a[i]
              if (s && (Array.isArray(n) || t(n))) {
                const t = Array.isArray(n) ? [] : {}
                o[i] = e(!0, o.hasOwnProperty(i) ? o[i] : t, n)
              } else o[i] = n
            }
          }
          return o
        }, i = (t, e = 1e4) => (t = parseFloat(t) || 0, Math.round((t + Number.EPSILON) * e) / e),
        s = function (t) {
          return !!(t && 'object' == typeof t && t instanceof Element && t !== document.body) && (!t.__Panzoom && (function (t) {
            const e = getComputedStyle(t)['overflow-y'], i = getComputedStyle(t)['overflow-x'],
              s = ('scroll' === e || 'auto' === e) && Math.abs(t.scrollHeight - t.clientHeight) > 1,
              o = ('scroll' === i || 'auto' === i) && Math.abs(t.scrollWidth - t.clientWidth) > 1
            return s || o
          }(t) ? t : s(t.parentNode)))
        }, o = 'undefined' != typeof window && window.ResizeObserver || class {
          constructor(t) {
            this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = t
          }

          observe(t) {
            if (this.observables.some((e => e.el === t))) return
            const e = {
              el: t,
              size: {
                height: t.clientHeight,
                width: t.clientWidth,
              },
            }
            this.observables.push(e)
          }

          unobserve(t) {
            this.observables = this.observables.filter((e => e.el !== t))
          }

          disconnect() {
            this.observables = []
          }

          check() {
            const t = this.observables.filter((t => {
              const e = t.el.clientHeight, i = t.el.clientWidth
              if (t.size.height !== e || t.size.width !== i) return t.size.height = e, t.size.width = i, !0
            })).map((t => t.el))
            t.length > 0 && this.callback(t), window.requestAnimationFrame(this.boundCheck)
          }
        }

      class n {
        constructor(t) {
          this.id = self.Touch && t instanceof Touch ? t.identifier : -1, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, this.clientY = t.clientY
        }
      }

      const a = (t, e) => e ? Math.sqrt((e.clientX - t.clientX) ** 2 + (e.clientY - t.clientY) ** 2) : 0,
        r = (t, e) => e ? {
          clientX: (t.clientX + e.clientX) / 2,
          clientY: (t.clientY + e.clientY) / 2,
        } : t

      class h {
        constructor(t, {
          start: e = (() => !0), move: i = (() => {
          }), end: s = (() => {
          }),
        } = {}) {
          this._element = t, this.startPointers = [], this.currentPointers = [], this._pointerStart = t => {
            if (t.buttons > 0 && 0 !== t.button) return
            const e = new n(t)
            this.currentPointers.some((t => t.id === e.id)) || this._triggerPointerStart(e, t) && (window.addEventListener('mousemove', this._move), window.addEventListener('mouseup', this._pointerEnd))
          }, this._touchStart = t => {
            for (const e of Array.from(t.changedTouches || [])) this._triggerPointerStart(new n(e), t)
          }, this._move = t => {
            const e = this.currentPointers.slice(),
              i = (t => 'changedTouches' in t)(t) ? Array.from(t.changedTouches).map((t => new n(t))) : [ new n(t), ]
            for (const t of i) {
              const e = this.currentPointers.findIndex((e => e.id === t.id))
              e < 0 || (this.currentPointers[e] = t)
            }
            this._moveCallback(e, this.currentPointers.slice(), t)
          }, this._triggerPointerEnd = (t, e) => {
            const i = this.currentPointers.findIndex((e => e.id === t.id))
            return !(i < 0) && (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this._endCallback(t, e), !0)
          }, this._pointerEnd = t => {
            t.buttons > 0 && 0 !== t.button || this._triggerPointerEnd(new n(t), t) && (window.removeEventListener('mousemove', this._move, { passive: !1, }), window.removeEventListener('mouseup', this._pointerEnd, { passive: !1, }))
          }, this._touchEnd = t => {
            for (const e of Array.from(t.changedTouches || [])) this._triggerPointerEnd(new n(e), t)
          }, this._startCallback = e, this._moveCallback = i, this._endCallback = s, this._element.addEventListener('mousedown', this._pointerStart, { passive: !1, }), this._element.addEventListener('touchstart', this._touchStart, { passive: !1, }), this._element.addEventListener('touchmove', this._move, { passive: !1, }), this._element.addEventListener('touchend', this._touchEnd), this._element.addEventListener('touchcancel', this._touchEnd)
        }

        stop() {
          this._element.removeEventListener('mousedown', this._pointerStart, { passive: !1, }), this._element.removeEventListener('touchstart', this._touchStart, { passive: !1, }), this._element.removeEventListener('touchmove', this._move, { passive: !1, }), this._element.removeEventListener('touchend', this._touchEnd), this._element.removeEventListener('touchcancel', this._touchEnd), window.removeEventListener('mousemove', this._move), window.removeEventListener('mouseup', this._pointerEnd)
        }

        _triggerPointerStart(t, e) {
          return !!this._startCallback(t, e) && (this.currentPointers.push(t), this.startPointers.push(t), !0)
        }
      }

      class l {
        constructor(t = {}) {
          this.options = e(!0, {}, t), this.plugins = [], this.events = {}
          for (const t of [
            'on',
            'once',
          ]) for (const e of Object.entries(this.options[t] || {})) this[t](...e)
        }

        option(t, e, ...i) {
          t = String(t)
          let s = (o = t, n = this.options, o.split('.').reduce((function (t, e) {
            return t && t[e]
          }), n))
          let o, n
          return 'function' == typeof s && (s = s.call(this, this, ...i)), void 0 === s ? e : s
        }

        localize(t, e = []) {
          return t = (t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, ((t, i, s) => {
            let o = ''
            s ? o = this.option(`${ i[0] + i.toLowerCase().substring(1) }.l10n.${ s }`) : i && (o = this.option(`l10n.${ i }`)), o || (o = t)
            for (let t = 0; t < e.length; t++) o = o.split(e[t][0]).join(e[t][1])
            return o
          }))).replace(/\{\{(.*)\}\}/, ((t, e) => e))
        }

        on(e, i) {
          if (t(e)) {
            for (const t of Object.entries(e)) this.on(...t)
            return this
          }
          return String(e).split(' ').forEach((t => {
            const e = this.events[t] = this.events[t] || [];
            -1 == e.indexOf(i) && e.push(i)
          })), this
        }

        once(e, i) {
          if (t(e)) {
            for (const t of Object.entries(e)) this.once(...t)
            return this
          }
          return String(e).split(' ').forEach((t => {
            const e = (...s) => {
              this.off(t, e), i.call(this, this, ...s)
            }
            e._ = i, this.on(t, e)
          })), this
        }

        off(e, i) {
          if (!t(e)) return e.split(' ').forEach((t => {
            const e = this.events[t]
            if (!e || !e.length) return this
            let s = -1
            for (let t = 0, o = e.length; t < o; t++) {
              const o = e[t]
              if (o && (o === i || o._ === i)) {
                s = t
                break
              }
            }
            -1 != s && e.splice(s, 1)
          })), this
          for (const t of Object.entries(e)) this.off(...t)
        }

        trigger(t, ...e) {
          for (const i of [ ...this.events[t] || [], ].slice()) if (i && !1 === i.call(this, this, ...e)) return !1
          for (const i of [ ...this.events['*'] || [], ].slice()) if (i && !1 === i.call(this, t, this, ...e)) return !1
          return !0
        }

        attachPlugins(t) {
          const i = {}
          for (const [ s, o, ] of Object.entries(t || {})) !1 === this.options[s] || this.plugins[s] || (this.options[s] = e({}, o.defaults || {}, this.options[s]), i[s] = new o(this))
          for (const [ t, e, ] of Object.entries(i)) e.attach(this)
          return this.plugins = Object.assign({}, this.plugins, i), this
        }

        detachPlugins() {
          for (const t in this.plugins) {
            let e;
            (e = this.plugins[t]) && 'function' == typeof e.detach && e.detach(this)
          }
          return this.plugins = {}, this
        }
      }

      const c = {
        touch: !0,
        zoom: !0,
        pinchToZoom: !0,
        panOnlyZoomed: !1,
        lockAxis: !1,
        friction: .64,
        decelFriction: .88,
        zoomFriction: .74,
        bounceForce: .2,
        baseScale: 1,
        minScale: 1,
        maxScale: 2,
        step: .5,
        textSelection: !1,
        click: 'toggleZoom',
        wheel: 'zoom',
        wheelFactor: 42,
        wheelLimit: 5,
        draggableClass: 'is-draggable',
        draggingClass: 'is-dragging',
        ratio: 1,
      }

      class d extends l {
        constructor(t, i = {}) {
          super(e(!0, {}, c, i)), this.state = 'init', this.$container = t
          for (const t of [
            'onLoad',
            'onWheel',
            'onClick',
          ]) this[t] = this[t].bind(this)
          this.initLayout(), this.resetValues(), this.attachPlugins(d.Plugins), this.trigger('init'), this.updateMetrics(), this.attachEvents(), this.trigger('ready'), !1 === this.option('centerOnStart') ? this.state = 'ready' : this.panTo({ friction: 0, }), t.__Panzoom = this
        }

        initLayout() {
          const t = this.$container
          if (!(t instanceof HTMLElement)) throw new Error('Panzoom: Container not found')
          const e = this.option('content') || t.querySelector('.panzoom__content')
          if (!e) throw new Error('Panzoom: Content not found')
          this.$content = e
          let i = this.option('viewport') || t.querySelector('.panzoom__viewport')
          i || !1 === this.option('wrapInner') || (i = document.createElement('div'), i.classList.add('panzoom__viewport'), i.append(...t.childNodes), t.appendChild(i)), this.$viewport = i || e.parentNode
        }

        resetValues() {
          this.updateRate = this.option('updateRate', /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), this.container = {
            width: 0,
            height: 0,
          }, this.viewport = {
            width: 0,
            height: 0,
          }, this.content = {
            origWidth: 0,
            origHeight: 0,
            width: 0,
            height: 0,
            x: this.option('x', 0),
            y: this.option('y', 0),
            scale: this.option('baseScale'),
          }, this.transform = {
            x: 0,
            y: 0,
            scale: 1,
          }, this.resetDragPosition()
        }

        onLoad(t) {
          this.updateMetrics(), this.panTo({
            scale: this.option('baseScale'),
            friction: 0,
          }), this.trigger('load', t)
        }

        onClick(t) {
          if (t.defaultPrevented) return
          if (this.option('textSelection') && window.getSelection().toString().length) return void t.stopPropagation()
          const e = this.$content.getClientRects()[0]
          if ('ready' !== this.state && (this.dragPosition.midPoint || Math.abs(e.top - this.dragStart.rect.top) > 1 || Math.abs(e.left - this.dragStart.rect.left) > 1)) return t.preventDefault(), void t.stopPropagation()
          !1 !== this.trigger('click', t) && this.option('zoom') && 'toggleZoom' === this.option('click') && (t.preventDefault(), t.stopPropagation(), this.zoomWithClick(t))
        }

        onWheel(t) {
          !1 !== this.trigger('wheel', t) && this.option('zoom') && this.option('wheel') && this.zoomWithWheel(t)
        }

        zoomWithWheel(t) {
          void 0 === this.changedDelta && (this.changedDelta = 0)
          const e = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)),
            i = this.content.scale
          let s = i * (100 + e * this.option('wheelFactor')) / 100
          if (e < 0 && Math.abs(i - this.option('minScale')) < .01 || e > 0 && Math.abs(i - this.option('maxScale')) < .01 ? (this.changedDelta += Math.abs(e), s = i) : (this.changedDelta = 0, s = Math.max(Math.min(s, this.option('maxScale')), this.option('minScale'))), this.changedDelta > this.option('wheelLimit')) return
          if (t.preventDefault(), s === i) return
          const o = this.$content.getBoundingClientRect(), n = t.clientX - o.left, a = t.clientY - o.top
          this.zoomTo(s, {
            x: n,
            y: a,
          })
        }

        zoomWithClick(t) {
          const e = this.$content.getClientRects()[0], i = t.clientX - e.left, s = t.clientY - e.top
          this.toggleZoom({
            x: i,
            y: s,
          })
        }

        attachEvents() {
          this.$content.addEventListener('load', this.onLoad), this.$container.addEventListener('wheel', this.onWheel, { passive: !1, }), this.$container.addEventListener('click', this.onClick, { passive: !1, }), this.initObserver()
          const t = new h(this.$container, {
            start: (e, i) => {
              if (!this.option('touch')) return !1
              if (this.velocity.scale < 0) return !1
              const o = i.composedPath()[0]
              if (!t.currentPointers.length) {
                if (-1 !== [
                  'BUTTON',
                  'TEXTAREA',
                  'OPTION',
                  'INPUT',
                  'SELECT',
                  'VIDEO',
                ].indexOf(o.nodeName)) return !1
                if (this.option('textSelection') && ((t, e, i) => {
                  const s = t.childNodes, o = document.createRange()
                  for (let t = 0; t < s.length; t++) {
                    const n = s[t]
                    if (n.nodeType !== Node.TEXT_NODE) continue
                    o.selectNodeContents(n)
                    const a = o.getBoundingClientRect()
                    if (e >= a.left && i >= a.top && e <= a.right && i <= a.bottom) return n
                  }
                  return !1
                })(o, e.clientX, e.clientY)) return !1
              }
              return !s(o) && (!1 !== this.trigger('touchStart', i) && ('mousedown' === i.type && i.preventDefault(), this.state = 'pointerdown', this.resetDragPosition(), this.dragPosition.midPoint = null, this.dragPosition.time = Date.now(), !0))
            },
            move: (e, i, s) => {
              if ('pointerdown' !== this.state) return
              if (!1 === this.trigger('touchMove', s)) return void s.preventDefault()
              if (i.length < 2 && !0 === this.option('panOnlyZoomed') && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option('baseScale')) return
              if (i.length > 1 && (!this.option('zoom') || !1 === this.option('pinchToZoom'))) return
              const o = r(e[0], e[1]), n = r(i[0], i[1]), h = n.clientX - o.clientX,
                l = n.clientY - o.clientY, c = a(e[0], e[1]), d = a(i[0], i[1]), u = c && d ? d / c : 1
              this.dragOffset.x += h, this.dragOffset.y += l, this.dragOffset.scale *= u, this.dragOffset.time = Date.now() - this.dragPosition.time
              const f = 1 === this.dragStart.scale && this.option('lockAxis')
              if (f && !this.lockAxis) {
                if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void s.preventDefault()
                const t = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI)
                this.lockAxis = t > 45 && t < 135 ? 'y' : 'x'
              }
              if ('xy' === f || 'y' !== this.lockAxis) {
                if (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), this.lockAxis && (this.dragOffset['x' === this.lockAxis ? 'y' : 'x'] = 0), this.$container.classList.add(this.option('draggingClass')), this.transform.scale === this.option('baseScale') && 'y' === this.lockAxis || (this.dragPosition.x = this.dragStart.x + this.dragOffset.x), this.transform.scale === this.option('baseScale') && 'x' === this.lockAxis || (this.dragPosition.y = this.dragStart.y + this.dragOffset.y), this.dragPosition.scale = this.dragStart.scale * this.dragOffset.scale, i.length > 1) {
                  const e = r(t.startPointers[0], t.startPointers[1]),
                    i = e.clientX - this.dragStart.rect.x, s = e.clientY - this.dragStart.rect.y, {
                      deltaX: o,
                      deltaY: a,
                    } = this.getZoomDelta(this.content.scale * this.dragOffset.scale, i, s)
                  this.dragPosition.x -= o, this.dragPosition.y -= a, this.dragPosition.midPoint = n
                } else this.setDragResistance()
                this.transform = {
                  x: this.dragPosition.x,
                  y: this.dragPosition.y,
                  scale: this.dragPosition.scale,
                }, this.startAnimation()
              }
            },
            end: (e, i) => {
              if ('pointerdown' !== this.state) return
              if (this._dragOffset = { ...this.dragOffset, }, t.currentPointers.length) return void this.resetDragPosition()
              if (this.state = 'decel', this.friction = this.option('decelFriction'), this.recalculateTransform(), this.$container.classList.remove(this.option('draggingClass')), !1 === this.trigger('touchEnd', i)) return
              if ('decel' !== this.state) return
              const s = this.option('minScale')
              if (this.transform.scale < s) return void this.zoomTo(s, { friction: .64, })
              const o = this.option('maxScale')
              if (this.transform.scale - o > .01) {
                const t = this.dragPosition.midPoint || e, i = this.$content.getClientRects()[0]
                this.zoomTo(o, {
                  friction: .64,
                  x: t.clientX - i.left,
                  y: t.clientY - i.top,
                })
              } else ;
            },
          })
          this.pointerTracker = t
        }

        initObserver() {
          this.resizeObserver || (this.resizeObserver = new o((() => {
            this.updateTimer || (this.updateTimer = setTimeout((() => {
              const t = this.$container.getBoundingClientRect()
              t.width && t.height ? ((Math.abs(t.width - this.container.width) > 1 || Math.abs(t.height - this.container.height) > 1) && (this.isAnimating() && this.endAnimation(!0), this.updateMetrics(), this.panTo({
                x: this.content.x,
                y: this.content.y,
                scale: this.option('baseScale'),
                friction: 0,
              })), this.updateTimer = null) : this.updateTimer = null
            }), this.updateRate))
          })), this.resizeObserver.observe(this.$container))
        }

        resetDragPosition() {
          this.lockAxis = null, this.friction = this.option('friction'), this.velocity = {
            x: 0,
            y: 0,
            scale: 0,
          }
          const { x: t, y: e, scale: i, } = this.content
          this.dragStart = {
            rect: this.$content.getBoundingClientRect(),
            x: t,
            y: e,
            scale: i,
          }, this.dragPosition = {
            ...this.dragPosition,
            x: t,
            y: e,
            scale: i,
          }, this.dragOffset = {
            x: 0,
            y: 0,
            scale: 1,
            time: 0,
          }
        }

        updateMetrics(t) {
          !0 !== t && this.trigger('beforeUpdate')
          const e = this.$container, s = this.$content, o = this.$viewport, n = s instanceof HTMLImageElement,
            a = this.option('zoom'), r = this.option('resizeParent', a)
          let h = this.option('width'), l = this.option('height'),
            c = h || (d = s, Math.max(parseFloat(d.naturalWidth || 0), parseFloat(d.width && d.width.baseVal && d.width.baseVal.value || 0), parseFloat(d.offsetWidth || 0), parseFloat(d.scrollWidth || 0)))
          let d
          let u = l || (t => Math.max(parseFloat(t.naturalHeight || 0), parseFloat(t.height && t.height.baseVal && t.height.baseVal.value || 0), parseFloat(t.offsetHeight || 0), parseFloat(t.scrollHeight || 0)))(s)
          Object.assign(s.style, {
            width: h ? `${ h }px` : '',
            height: l ? `${ l }px` : '',
            maxWidth: '',
            maxHeight: '',
          }), r && Object.assign(o.style, {
            width: '',
            height: '',
          })
          const f = this.option('ratio')
          c = i(c * f), u = i(u * f), h = c, l = u
          const g = s.getBoundingClientRect(), p = o.getBoundingClientRect(),
            m = o == e ? p : e.getBoundingClientRect()
          let y = Math.max(o.offsetWidth, i(p.width)), v = Math.max(o.offsetHeight, i(p.height)),
            b = window.getComputedStyle(o)
          if (y -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight), v -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom), this.viewport.width = y, this.viewport.height = v, a) {
            if (Math.abs(c - g.width) > .1 || Math.abs(u - g.height) > .1) {
              const t = ((t, e, i, s) => {
                const o = Math.min(i / t || 0, s / e)
                return {
                  width: t * o || 0,
                  height: e * o || 0,
                }
              })(c, u, Math.min(c, g.width), Math.min(u, g.height))
              h = i(t.width), l = i(t.height)
            }
            Object.assign(s.style, {
              width: `${ h }px`,
              height: `${ l }px`,
              transform: '',
            })
          }
          if (r && (Object.assign(o.style, {
            width: `${ h }px`,
            height: `${ l }px`,
          }), this.viewport = {
            ...this.viewport,
            width: h,
            height: l,
          }), n && a && 'function' != typeof this.options.maxScale) {
            const t = this.option('maxScale')
            this.options.maxScale = function () {
              return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : t
            }
          }
          this.content = {
            ...this.content,
            origWidth: c,
            origHeight: u,
            fitWidth: h,
            fitHeight: l,
            width: h,
            height: l,
            scale: 1,
            isZoomable: a,
          }, this.container = {
            width: m.width,
            height: m.height,
          }, !0 !== t && this.trigger('afterUpdate')
        }

        zoomIn(t) {
          this.zoomTo(this.content.scale + (t || this.option('step')))
        }

        zoomOut(t) {
          this.zoomTo(this.content.scale - (t || this.option('step')))
        }

        toggleZoom(t = {}) {
          const e = this.option('maxScale'), i = this.option('baseScale'),
            s = this.content.scale > i + .5 * (e - i) ? i : e
          this.zoomTo(s, t)
        }

        zoomTo(t = this.option('baseScale'), { x: e = null, y: s = null, } = {}) {
          t = Math.max(Math.min(t, this.option('maxScale')), this.option('minScale'))
          const o = i(this.content.scale / (this.content.width / this.content.fitWidth), 1e7)
          null === e && (e = this.content.width * o * .5), null === s && (s = this.content.height * o * .5)
          const { deltaX: n, deltaY: a, } = this.getZoomDelta(t, e, s)
          e = this.content.x - n, s = this.content.y - a, this.panTo({
            x: e,
            y: s,
            scale: t,
            friction: this.option('zoomFriction'),
          })
        }

        getZoomDelta(t, e = 0, i = 0) {
          const s = this.content.fitWidth * this.content.scale,
            o = this.content.fitHeight * this.content.scale, n = e > 0 && s ? e / s : 0,
            a = i > 0 && o ? i / o : 0
          return {
            deltaX: (this.content.fitWidth * t - s) * n,
            deltaY: (this.content.fitHeight * t - o) * a,
          }
        }

        panTo({
          x: t = this.content.x,
          y: e = this.content.y,
          scale: i,
          friction: s = this.option('friction'),
          ignoreBounds: o = !1,
        } = {}) {
          if (i = i || this.content.scale || 1, !o) {
            const { boundX: s, boundY: o, } = this.getBounds(i)
            s && (t = Math.max(Math.min(t, s.to), s.from)), o && (e = Math.max(Math.min(e, o.to), o.from))
          }
          this.friction = s, this.transform = {
            ...this.transform,
            x: t,
            y: e,
            scale: i,
          }, s ? (this.state = 'panning', this.velocity = {
            x: (1 / this.friction - 1) * (t - this.content.x),
            y: (1 / this.friction - 1) * (e - this.content.y),
            scale: (1 / this.friction - 1) * (i - this.content.scale),
          }, this.startAnimation()) : this.endAnimation()
        }

        startAnimation() {
          this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger('startAnimation'), this.rAF = requestAnimationFrame((() => this.animate()))
        }

        animate() {
          if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating()) this.setTransform(); else if ('pointerdown' !== this.state) return void this.endAnimation()
          this.rAF = requestAnimationFrame((() => this.animate()))
        }

        getBounds(t) {
          let e = this.boundX, s = this.boundY
          if (void 0 !== e && void 0 !== s) return {
            boundX: e,
            boundY: s,
          }
          e = {
            from: 0,
            to: 0,
          }, s = {
            from: 0,
            to: 0,
          }, t = t || this.transform.scale
          const o = this.content.fitWidth * t, n = this.content.fitHeight * t, a = this.viewport.width,
            r = this.viewport.height
          if (o < a) {
            const t = i(.5 * (a - o))
            e.from = t, e.to = t
          } else e.from = i(a - o)
          if (n < r) {
            const t = .5 * (r - n)
            s.from = t, s.to = t
          } else s.from = i(r - n)
          return {
            boundX: e,
            boundY: s,
          }
        }

        setEdgeForce() {
          if ('decel' !== this.state) return
          const t = this.option('bounceForce'), {
            boundX: e,
            boundY: i,
          } = this.getBounds(Math.max(this.transform.scale, this.content.scale))
          let s, o, n, a
          if (e && (s = this.content.x < e.from, o = this.content.x > e.to), i && (n = this.content.y < i.from, a = this.content.y > i.to), s || o) {
            let i = ((s ? e.from : e.to) - this.content.x) * t
            const o = this.content.x + (this.velocity.x + i) / this.friction
            o >= e.from && o <= e.to && (i += this.velocity.x), this.velocity.x = i, this.recalculateTransform()
          }
          if (n || a) {
            let e = ((n ? i.from : i.to) - this.content.y) * t
            const s = this.content.y + (e + this.velocity.y) / this.friction
            s >= i.from && s <= i.to && (e += this.velocity.y), this.velocity.y = e, this.recalculateTransform()
          }
        }

        setDragResistance() {
          if ('pointerdown' !== this.state) return
          const { boundX: t, boundY: e, } = this.getBounds(this.dragPosition.scale)
          let i, s, o, n
          if (t && (i = this.dragPosition.x < t.from, s = this.dragPosition.x > t.to), e && (o = this.dragPosition.y < e.from, n = this.dragPosition.y > e.to), (i || s) && (!i || !s)) {
            const e = i ? t.from : t.to, s = e - this.dragPosition.x
            this.dragPosition.x = e - .3 * s
          }
          if ((o || n) && (!o || !n)) {
            const t = o ? e.from : e.to, i = t - this.dragPosition.y
            this.dragPosition.y = t - .3 * i
          }
        }

        setDragForce() {
          'pointerdown' === this.state && (this.velocity.x = this.dragPosition.x - this.content.x, this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale)
        }

        recalculateTransform() {
          this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1)
        }

        isAnimating() {
          return !(!this.friction || !(Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05))
        }

        setTransform(t) {
          let e, s, o
          if (t ? (e = i(this.transform.x), s = i(this.transform.y), o = this.transform.scale, this.content = {
            ...this.content,
            x: e,
            y: s,
            scale: o,
          }) : (e = i(this.content.x), s = i(this.content.y), o = this.content.scale / (this.content.width / this.content.fitWidth), this.content = {
            ...this.content,
            x: e,
            y: s,
          }), this.trigger('beforeTransform'), e = i(this.content.x), s = i(this.content.y), t && this.option('zoom')) {
            let t, n
            t = i(this.content.fitWidth * o), n = i(this.content.fitHeight * o), this.content.width = t, this.content.height = n, this.transform = {
              ...this.transform,
              width: t,
              height: n,
              scale: o,
            }, Object.assign(this.$content.style, {
              width: `${ t }px`,
              height: `${ n }px`,
              maxWidth: 'none',
              maxHeight: 'none',
              transform: `translate3d(${ e }px, ${ s }px, 0) scale(1)`,
            })
          } else this.$content.style.transform = `translate3d(${ e }px, ${ s }px, 0) scale(${ o })`
          this.trigger('afterTransform')
        }

        endAnimation(t) {
          cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = {
            x: 0,
            y: 0,
            scale: 0,
          }, this.setTransform(!0), this.state = 'ready', this.handleCursor(), !0 !== t && this.trigger('endAnimation')
        }

        handleCursor() {
          const t = this.option('draggableClass')
          t && this.option('touch') && (1 == this.option('panOnlyZoomed') && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option('baseScale') ? this.$container.classList.remove(t) : this.$container.classList.add(t))
        }

        detachEvents() {
          this.$content.removeEventListener('load', this.onLoad), this.$container.removeEventListener('wheel', this.onWheel, { passive: !1, }), this.$container.removeEventListener('click', this.onClick, { passive: !1, }), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null)
        }

        destroy() {
          'destroy' !== this.state && (this.state = 'destroy', clearTimeout(this.updateTimer), this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), this.detachPlugins(), this.resetDragPosition())
        }
      }

      d.version = '4.0.27', d.Plugins = {}
      const u = (t, e) => {
        let i = 0
        return function (...s) {
          const o = (new Date).getTime()
          if (!(o - i < e)) return i = o, t(...s)
        }
      }

      class f {
        constructor(t) {
          this.$container = null, this.$prev = null, this.$next = null, this.carousel = t, this.onRefresh = this.onRefresh.bind(this)
        }

        option(t) {
          return this.carousel.option(`Navigation.${ t }`)
        }

        createButton(t) {
          const e = document.createElement('button')
          e.setAttribute('title', this.carousel.localize(`{{${ t.toUpperCase() }}}`))
          const i = this.option('classNames.button') + ' ' + this.option(`classNames.${ t }`)
          return e.classList.add(...i.split(' ')), e.setAttribute('tabindex', '0'), e.innerHTML = this.carousel.localize(this.option(`${ t }Tpl`)), e.addEventListener('click', (e => {
            e.preventDefault(), e.stopPropagation(), this.carousel['slide' + ('next' === t ? 'Next' : 'Prev')]()
          })), e
        }

        build() {
          this.$container || (this.$container = document.createElement('div'), this.$container.classList.add(...this.option('classNames.main').split(' ')), this.carousel.$container.appendChild(this.$container)), this.$next || (this.$next = this.createButton('next'), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton('prev'), this.$container.appendChild(this.$prev))
        }

        onRefresh() {
          const t = this.carousel.pages.length
          t <= 1 || t > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option('slidesPerPage')) ? this.cleanup() : (this.build(), this.$prev.removeAttribute('disabled'), this.$next.removeAttribute('disabled'), this.carousel.option('infiniteX', this.carousel.option('infinite')) || (this.carousel.page <= 0 && this.$prev.setAttribute('disabled', ''), this.carousel.page >= t - 1 && this.$next.setAttribute('disabled', '')))
        }

        cleanup() {
          this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null
        }

        attach() {
          this.carousel.on('refresh change', this.onRefresh)
        }

        detach() {
          this.carousel.off('refresh change', this.onRefresh), this.cleanup()
        }
      }

      f.defaults = {
        prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
        nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        classNames: {
          main: 'carousel__nav',
          button: 'carousel__button',
          next: 'is-next',
          prev: 'is-prev',
        },
      }

      class g {
        constructor(t) {
          this.carousel = t, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this)
        }

        addAsTargetFor(t) {
          this.target = this.carousel, this.nav = t, this.attachEvents()
        }

        addAsNavFor(t) {
          this.target = t, this.nav = this.carousel, this.attachEvents()
        }

        attachEvents() {
          this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on('ready', this.onNavReady), this.nav.on('createSlide', this.onNavCreateSlide), this.nav.on('Panzoom.click', this.onNavClick), this.target.on('change', this.onTargetChange), this.target.on('Panzoom.afterUpdate', this.onTargetChange)
        }

        onNavReady() {
          this.onTargetChange(!0)
        }

        onNavClick(t, e, i) {
          const s = i.target.closest('.carousel__slide')
          if (!s) return
          i.stopPropagation()
          const o = parseInt(s.dataset.index, 10), n = this.target.findPageForSlide(o)
          this.target.page !== n && this.target.slideTo(n, { friction: this.friction, }), this.markSelectedSlide(o)
        }

        onNavCreateSlide(t, e) {
          e.index === this.selectedIndex && this.markSelectedSlide(e.index)
        }

        onTargetChange() {
          const t = this.target.pages[this.target.page].indexes[0], e = this.nav.findPageForSlide(t)
          this.nav.slideTo(e), this.markSelectedSlide(t)
        }

        markSelectedSlide(t) {
          this.selectedIndex = t, [ ...this.nav.slides, ].filter((t => t.$el && t.$el.classList.remove('is-nav-selected')))
          const e = this.nav.slides[t]
          e && e.$el && e.$el.classList.add('is-nav-selected')
        }

        attach(t) {
          const e = t.options.Sync;
          (e.target || e.nav) && (e.target ? this.addAsNavFor(e.target) : e.nav && this.addAsTargetFor(e.nav), this.friction = e.friction)
        }

        detach() {
          this.nav && (this.nav.off('ready', this.onNavReady), this.nav.off('Panzoom.click', this.onNavClick), this.nav.off('createSlide', this.onNavCreateSlide)), this.target && (this.target.off('Panzoom.afterUpdate', this.onTargetChange), this.target.off('change', this.onTargetChange))
        }
      }

      g.defaults = { friction: .92, }
      const p = {
        Navigation: f,
        Dots: class {
          constructor(t) {
            this.carousel = t, this.$list = null, this.events = {
              change: this.onChange.bind(this),
              refresh: this.onRefresh.bind(this),
            }
          }

          buildList() {
            if (this.carousel.pages.length < this.carousel.option('Dots.minSlideCount')) return
            const t = document.createElement('ol')
            return t.classList.add('carousel__dots'), t.addEventListener('click', (t => {
              if (!('page' in t.target.dataset)) return
              t.preventDefault(), t.stopPropagation()
              const e = parseInt(t.target.dataset.page, 10), i = this.carousel
              e !== i.page && (i.pages.length < 3 && i.option('infinite') ? i[0 == e ? 'slidePrev' : 'slideNext']() : i.slideTo(e))
            })), this.$list = t, this.carousel.$container.appendChild(t), this.carousel.$container.classList.add('has-dots'), t
          }

          removeList() {
            this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), this.carousel.$container.classList.remove('has-dots')
          }

          rebuildDots() {
            let t = this.$list
            const e = !!t, i = this.carousel.pages.length
            if (i < 2) return void (e && this.removeList())
            e || (t = this.buildList())
            const s = this.$list.children.length
            if (s > i) for (let t = i; t < s; t++) this.$list.removeChild(this.$list.lastChild); else {
              for (let t = s; t < i; t++) {
                const e = document.createElement('li')
                e.classList.add('carousel__dot'), e.dataset.page = t, e.setAttribute('role', 'button'), e.setAttribute('tabindex', '0'), e.setAttribute('title', this.carousel.localize('{{GOTO}}', [
                  [
                    '%d',
                    t + 1,
                  ],
                ])), e.addEventListener('keydown', (t => {
                  const i = t.code
                  let s
                  'Enter' === i || 'NumpadEnter' === i ? s = e : 'ArrowRight' === i ? s = e.nextSibling : 'ArrowLeft' === i && (s = e.previousSibling), s && s.click()
                })), this.$list.appendChild(e)
              }
              this.setActiveDot()
            }
          }

          setActiveDot() {
            if (!this.$list) return
            this.$list.childNodes.forEach((t => {
              t.classList.remove('is-selected')
            }))
            const t = this.$list.childNodes[this.carousel.page]
            t && t.classList.add('is-selected')
          }

          onChange() {
            this.setActiveDot()
          }

          onRefresh() {
            this.rebuildDots()
          }

          attach() {
            this.carousel.on(this.events)
          }

          detach() {
            this.removeList(), this.carousel.off(this.events), this.carousel = null
          }
        },
        Sync: g,
      }
      const m = {
        slides: [],
        preload: 0,
        slidesPerPage: 'auto',
        initialPage: null,
        initialSlide: null,
        friction: .92,
        center: !0,
        infinite: !0,
        fill: !0,
        dragFree: !1,
        prefix: '',
        classNames: {
          viewport: 'carousel__viewport',
          track: 'carousel__track',
          slide: 'carousel__slide',
          slideSelected: 'is-selected',
        },
        l10n: {
          NEXT: 'Next slide',
          PREV: 'Previous slide',
          GOTO: 'Go to slide #%d',
        },
      }

      class y extends l {
        constructor(t, i = {}) {
          if (super(i = e(!0, {}, m, i)), this.state = 'init', this.$container = t, !(this.$container instanceof HTMLElement)) throw new Error('No root element provided')
          this.slideNext = u(this.slideNext.bind(this), 250), this.slidePrev = u(this.slidePrev.bind(this), 250), this.init(), t.__Carousel = this
        }

        init() {
          this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, this.attachPlugins(y.Plugins), this.trigger('init'), this.initLayout(), this.initSlides(), this.updateMetrics(), this.$track && this.pages.length && (this.$track.style.transform = `translate3d(${ -1 * this.pages[this.page].left }px, 0px, 0) scale(1)`), this.manageSlideVisiblity(), this.initPanzoom(), this.state = 'ready', this.trigger('ready')
        }

        initLayout() {
          const t = this.option('prefix'), e = this.option('classNames')
          this.$viewport = this.option('viewport') || this.$container.querySelector(`.${ t }${ e.viewport }`), this.$viewport || (this.$viewport = document.createElement('div'), this.$viewport.classList.add(...(t + e.viewport).split(' ')), this.$viewport.append(...this.$container.childNodes), this.$container.appendChild(this.$viewport)), this.$track = this.option('track') || this.$container.querySelector(`.${ t }${ e.track }`), this.$track || (this.$track = document.createElement('div'), this.$track.classList.add(...(t + e.track).split(' ')), this.$track.append(...this.$viewport.childNodes), this.$viewport.appendChild(this.$track))
        }

        initSlides() {
          this.slides = []
          this.$viewport.querySelectorAll(`.${ this.option('prefix') }${ this.option('classNames.slide') }`).forEach((t => {
            const e = {
              $el: t,
              isDom: !0,
            }
            this.slides.push(e), this.trigger('createSlide', e, this.slides.length)
          })), Array.isArray(this.options.slides) && (this.slides = e(!0, [ ...this.slides, ], this.options.slides))
        }

        updateMetrics() {
          let t, e = 0, s = []
          this.slides.forEach(((i, o) => {
            const n = i.$el, a = i.isDom || !t ? this.getSlideMetrics(n) : t
            i.index = o, i.width = a, i.left = e, t = a, e += a, s.push(o)
          }))
          let o = Math.max(this.$track.offsetWidth, i(this.$track.getBoundingClientRect().width)),
            n = getComputedStyle(this.$track)
          o -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight), this.contentWidth = e, this.viewportWidth = o
          const a = [], r = this.option('slidesPerPage')
          if (Number.isInteger(r) && e > o) for (let t = 0; t < this.slides.length; t += r) a.push({
            indexes: s.slice(t, t + r),
            slides: this.slides.slice(t, t + r),
          }); else {
            let t = 0, e = 0
            for (let i = 0; i < this.slides.length; i += 1) {
              const s = this.slides[i];
              (!a.length || e + s.width > o) && (a.push({
                indexes: [],
                slides: [],
              }), t = a.length - 1, e = 0), e += s.width, a[t].indexes.push(i), a[t].slides.push(s)
            }
          }
          const h = this.option('center'), l = this.option('fill')
          a.forEach(((t, i) => {
            t.index = i, t.width = t.slides.reduce(((t, e) => t + e.width), 0), t.left = t.slides[0].left, h && (t.left += .5 * (o - t.width) * -1), l && !this.option('infiniteX', this.option('infinite')) && e > o && (t.left = Math.max(t.left, 0), t.left = Math.min(t.left, e - o))
          }))
          const c = []
          let d
          a.forEach((t => {
            const e = { ...t, }
            d && e.left === d.left ? (d.width += e.width, d.slides = [
              ...d.slides,
              ...e.slides,
            ], d.indexes = [
              ...d.indexes,
              ...e.indexes,
            ]) : (e.index = c.length, d = e, c.push(e))
          })), this.pages = c
          let u = this.page
          if (null === u) {
            const t = this.option('initialSlide')
            u = null !== t ? this.findPageForSlide(t) : parseInt(this.option('initialPage', 0), 10) || 0, c[u] || (u = c.length && u > c.length ? c[c.length - 1].index : 0), this.page = u, this.pageIndex = u
          }
          this.updatePanzoom(), this.trigger('refresh')
        }

        getSlideMetrics(t) {
          if (!t) {
            const e = this.slides[0];
            (t = document.createElement('div')).dataset.isTestEl = 1, t.style.visibility = 'hidden', t.classList.add(...(this.option('prefix') + this.option('classNames.slide')).split(' ')), e.customClass && t.classList.add(...e.customClass.split(' ')), this.$track.prepend(t)
          }
          let e = Math.max(t.offsetWidth, i(t.getBoundingClientRect().width))
          const s = t.currentStyle || window.getComputedStyle(t)
          return e = e + (parseFloat(s.marginLeft) || 0) + (parseFloat(s.marginRight) || 0), t.dataset.isTestEl && t.remove(), e
        }

        findPageForSlide(t) {
          t = parseInt(t, 10) || 0
          const e = this.pages.find((e => e.indexes.indexOf(t) > -1))
          return e ? e.index : null
        }

        slideNext() {
          this.slideTo(this.pageIndex + 1)
        }

        slidePrev() {
          this.slideTo(this.pageIndex - 1)
        }

        slideTo(t, e = {}) {
          const { x: i = -1 * this.setPage(t, !0), y: s = 0, friction: o = this.option('friction'), } = e
          this.Panzoom.content.x === i && !this.Panzoom.velocity.x && o || (this.Panzoom.panTo({
            x: i,
            y: s,
            friction: o,
            ignoreBounds: !0,
          }), 'ready' === this.state && 'ready' === this.Panzoom.state && this.trigger('settle'))
        }

        initPanzoom() {
          this.Panzoom && this.Panzoom.destroy()
          const t = e(!0, {}, {
            content: this.$track,
            wrapInner: !1,
            resizeParent: !1,
            zoom: !1,
            click: !1,
            lockAxis: 'x',
            x: this.pages.length ? -1 * this.pages[this.page].left : 0,
            centerOnStart: !1,
            textSelection: () => this.option('textSelection', !1),
            panOnlyZoomed: function () {
              return this.content.width <= this.viewport.width
            },
          }, this.option('Panzoom'))
          this.Panzoom = new d(this.$container, t), this.Panzoom.on({
            '*': (t, ...e) => this.trigger(`Panzoom.${ t }`, ...e),
            afterUpdate: () => {
              this.updatePage()
            },
            beforeTransform: this.onBeforeTransform.bind(this),
            touchEnd: this.onTouchEnd.bind(this),
            endAnimation: () => {
              this.trigger('settle')
            },
          }), this.updateMetrics(), this.manageSlideVisiblity()
        }

        updatePanzoom() {
          this.Panzoom && (this.Panzoom.content = {
            ...this.Panzoom.content,
            fitWidth: this.contentWidth,
            origWidth: this.contentWidth,
            width: this.contentWidth,
          }, this.pages.length > 1 && this.option('infiniteX', this.option('infinite')) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = {
            from: -1 * this.pages[this.pages.length - 1].left,
            to: -1 * this.pages[0].left,
          }), this.option('infiniteY', this.option('infinite')) ? this.Panzoom.boundY = null : this.Panzoom.boundY = {
            from: 0,
            to: 0,
          }, this.Panzoom.handleCursor())
        }

        manageSlideVisiblity() {
          const t = this.contentWidth, e = this.viewportWidth
          const i = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0
          const s = this.option('preload'), o = this.option('infiniteX', this.option('infinite')),
            n = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue('padding-left')),
            a = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue('padding-right'))
          this.slides.forEach((r => {
            let h, l, c = 0
            h = i - n, l = i + e + a, h -= s * (e + n + a), l += s * (e + n + a)
            const d = r.left + r.width > h && r.left < l
            h = i + t - n, l = i + t + e + a, h -= s * (e + n + a)
            const u = o && r.left + r.width > h && r.left < l
            h = i - t - n, l = i - t + e + a, h -= s * (e + n + a)
            const f = o && r.left + r.width > h && r.left < l
            u || d || f ? (this.createSlideEl(r), d && (c = 0), u && (c = -1), f && (c = 1), r.left + r.width > i && r.left <= i + e + a && (c = 0)) : this.removeSlideEl(r), r.hasDiff = c
          }))
          let r = 0, h = 0
          this.slides.forEach(((e, i) => {
            let s = 0
            e.$el ? (i !== r || e.hasDiff ? s = h + e.hasDiff * t : h = 0, e.$el.style.left = Math.abs(s) > .1 ? `${ h + e.hasDiff * t }px` : '', r++) : h += e.width
          })), this.markSelectedSlides()
        }

        createSlideEl(t) {
          if (!t) return
          if (t.$el) {
            const e = t.$el.dataset.index
            if (!e || parseInt(e, 10) !== t.index) {
              let e
              t.$el.dataset.index = t.index, t.$el.querySelectorAll('[data-lazy-srcset]').forEach((t => {
                t.srcset = t.dataset.lazySrcset
              })), t.$el.querySelectorAll('[data-lazy-src]').forEach((t => {
                const e = t.dataset.lazySrc
                t instanceof HTMLImageElement ? t.src = e : t.style.backgroundImage = `url('${ e }')`
              })), (e = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = `url('${ e }')`), t.state = 'ready'
            }
            return
          }
          const e = document.createElement('div')
          e.dataset.index = t.index, e.classList.add(...(this.option('prefix') + this.option('classNames.slide')).split(' ')), t.customClass && e.classList.add(...t.customClass.split(' ')), t.html && (e.innerHTML = t.html)
          const i = []
          this.slides.forEach(((t, e) => {
            t.$el && i.push(e)
          }))
          const s = t.index
          let o = null
          if (i.length) {
            const t = i.reduce(((t, e) => Math.abs(e - s) < Math.abs(t - s) ? e : t))
            o = this.slides[t]
          }
          return this.$track.insertBefore(e, o && o.$el ? o.index < t.index ? o.$el.nextSibling : o.$el : null), t.$el = e, this.trigger('createSlide', t, s), t
        }

        removeSlideEl(t) {
          t.$el && !t.isDom && (this.trigger('removeSlide', t), t.$el.remove(), t.$el = null)
        }

        markSelectedSlides() {
          const t = this.option('classNames.slideSelected'), e = 'aria-hidden'
          this.slides.forEach(((i, s) => {
            const o = i.$el
            if (!o) return
            const n = this.pages[this.page]
            n && n.indexes && n.indexes.indexOf(s) > -1 ? (t && !o.classList.contains(t) && (o.classList.add(t), this.trigger('selectSlide', i)), o.removeAttribute(e)) : (t && o.classList.contains(t) && (o.classList.remove(t), this.trigger('unselectSlide', i)), o.setAttribute(e, !0))
          }))
        }

        updatePage() {
          this.updateMetrics(), this.slideTo(this.page, { friction: 0, })
        }

        onBeforeTransform() {
          this.option('infiniteX', this.option('infinite')) && this.manageInfiniteTrack(), this.manageSlideVisiblity()
        }

        manageInfiniteTrack() {
          const t = this.contentWidth, e = this.viewportWidth
          if (!this.option('infiniteX', this.option('infinite')) || this.pages.length < 2 || t < e) return
          const i = this.Panzoom
          let s = !1
          return i.content.x < -1 * (t - e) && (i.content.x += t, this.pageIndex = this.pageIndex - this.pages.length, s = !0), i.content.x > e && (i.content.x -= t, this.pageIndex = this.pageIndex + this.pages.length, s = !0), s && 'pointerdown' === i.state && i.resetDragPosition(), s
        }

        onTouchEnd(t, e) {
          const i = this.option('dragFree')
          if (!i && this.pages.length > 1 && t.dragOffset.time < 350 && Math.abs(t.dragOffset.y) < 1 && Math.abs(t.dragOffset.x) > 5) this[t.dragOffset.x < 0 ? 'slideNext' : 'slidePrev'](); else if (i) {
            const [ , e, ] = this.getPageFromPosition(-1 * t.transform.x)
            this.setPage(e)
          } else this.slideToClosest()
        }

        slideToClosest(t = {}) {
          const [ , e, ] = this.getPageFromPosition(-1 * this.Panzoom.content.x)
          this.slideTo(e, t)
        }

        getPageFromPosition(t) {
          const e = this.pages.length
          this.option('center') && (t += .5 * this.viewportWidth)
          const i = Math.floor(t / this.contentWidth)
          t -= i * this.contentWidth
          const s = this.slides.find((e => e.left <= t && e.left + e.width > t))
          if (s) {
            const t = this.findPageForSlide(s.index)
            return [
              t,
              t + i * e,
            ]
          }
          return [
            0,
            0,
          ]
        }

        setPage(t, e) {
          let i = 0, s = parseInt(t, 10) || 0
          const o = this.page, n = this.pageIndex, a = this.pages.length, r = this.contentWidth,
            h = this.viewportWidth
          if (t = (s % a + a) % a, this.option('infiniteX', this.option('infinite')) && r > h) {
            const o = Math.floor(s / a) || 0, n = r
            if (i = this.pages[t].left + o * n, !0 === e && a > 2) {
              const t = -1 * this.Panzoom.content.x
              const e = i - n, o = i + n, r = Math.abs(t - i), h = Math.abs(t - e), l = Math.abs(t - o)
              l < r && l <= h ? (i = o, s += a) : h < r && h < l && (i = e, s -= a)
            }
          } else t = s = Math.max(0, Math.min(s, a - 1)), i = this.pages.length ? this.pages[t].left : 0
          return this.page = t, this.pageIndex = s, null !== o && t !== o && (this.prevPage = o, this.prevPageIndex = n, this.trigger('change', t, o)), i
        }

        destroy() {
          this.state = 'destroy', this.slides.forEach((t => {
            this.removeSlideEl(t)
          })), this.slides = [], this.Panzoom.destroy(), this.detachPlugins()
        }
      }

      y.version = '4.0.27', y.Plugins = p
      const v = !('undefined' == typeof window || !window.document || !window.document.createElement)
      let b = null
      const x = [
          'a[href]',
          'area[href]',
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          'select:not([disabled]):not([aria-hidden])',
          'textarea:not([disabled]):not([aria-hidden])',
          'button:not([disabled]):not([aria-hidden])',
          'iframe',
          'object',
          'embed',
          'video',
          'audio',
          '[contenteditable]',
          '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
        ],
        w = t => {
          if (t && v) {
            null === b && document.createElement('div').focus({
              get preventScroll() {
                return b = !0, !1
              },
            })
            try {
              if (t.setActive) t.setActive(); else if (b) t.focus({ preventScroll: !0, }); else {
                const e = window.pageXOffset || document.body.scrollTop,
                  i = window.pageYOffset || document.body.scrollLeft
                t.focus(), document.body.scrollTo({
                  top: e,
                  left: i,
                  behavior: 'auto',
                })
              }
            } catch (t) {
            }
          }
        }

      class ${constructor(t){this.fancybox=t,this.$container=null,this.state='init';for(const t of[
        'onPrepare',
        'onClosing',
        'onKeydown',
      ])this[t]=this[t].bind(this);this.events={
        prepare:this.onPrepare,
        closing:this.onClosing,
        keydown:this.onKeydown,
      }
      }onPrepare(){
        this
          .getSlides().length < this.fancybox.option('Thumbs.minSlideCount') ? this.state = 'disabled' : !0 === this.fancybox.option('Thumbs.autoStart') && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option('Thumbs.minScreenHeight') && this.build()
      }onClosing(){
        this
          .Carousel && this.Carousel.Panzoom.detachEvents()
      }onKeydown(t, e){ e === t.option('Thumbs.key') && this.toggle()
      }
      build()
      {
        if (this.$container) return
        const t = document.createElement('div')
        t.classList.add('fancybox__thumbs'), this.fancybox.$carousel.parentNode.insertBefore(t, this.fancybox.$carousel.nextSibling), this.Carousel = new y(t, e(!0, {
          Dots: !1,
          Navigation: !1,
          Sync: { friction: 0, },
          infinite: !1,
          center: !0,
          fill: !0,
          dragFree: !0,
          slidesPerPage: 1,
          preload: 1,
        }, this.fancybox.option('Thumbs.Carousel'), {
          Sync: { target: this.fancybox.Carousel, },
          slides: this.getSlides(),
        })), this.Carousel.Panzoom.on('wheel', ((t, e) => {
          e.preventDefault(), this.fancybox[e.deltaY < 0 ? 'prev' : 'next']()
        })), this.$container = t, this.state = 'visible'
      }
      getSlides()
      {
        const t = []
        for (const e of this.fancybox.items) {
          const i = e.thumb
          i && t.push({
            html: `<div class="fancybox__thumb" style="background-image:url('${ i }')"></div>`,
            customClass: `has-thumb has-${ e.type || 'image' }`,
          })
        }
        return t
      }
      toggle()
      {
        'visible' === this.state ? this.hide() : 'hidden' === this.state ? this.show() : this.build()
      }
      show()
      {
        'hidden' === this.state && (this.$container.style.display = '', this.Carousel.Panzoom.attachEvents(), this.state = 'visible')
      }
      hide()
      {
        'visible' === this.state && (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = 'none', this.state = 'hidden')
      }
      cleanup()
      {
        this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), this.$container = null), this.state = 'init'
      }
      attach()
      {
        this.fancybox.on(this.events)
      }
      detach()
      {
        this.fancybox.off(this.events), this.cleanup()
      }
      }
      $.defaults = {
        minSlideCount: 2,
        minScreenHeight: 500,
        autoStart: !0,
        key: 't',
        Carousel: {},
      }
      const C = (t, e) => {
          const i = new URL(t), s = new URLSearchParams(i.search)
          let o = new URLSearchParams
          for (const [ t, i, ] of [
            ...s,
            ...Object.entries(e),
          ]) 't' === t ? o.set('start', parseInt(i)) : o.set(t, i)
          o = o.toString()
          const n = t.match(/#t=((.*)?\d+s)/)
          return n && (o += `#t=${ n[1] }`), o
        }, S = {
          video: {
            autoplay: !0,
            ratio: 16 / 9,
          },
          youtube: {
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: 'transparent',
            enablejsapi: 1,
            html5: 1,
          },
          vimeo: {
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          html5video: {
            tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
            format: '',
          },
        }

      class E {
        constructor(t) {
          this.fancybox = t
          for (const t of [
            'onInit',
            'onReady',
            'onCreateSlide',
            'onRemoveSlide',
            'onSelectSlide',
            'onUnselectSlide',
            'onRefresh',
            'onMessage',
          ]) this[t] = this[t].bind(this)
          this.events = {
            init: this.onInit,
            ready: this.onReady,
            'Carousel.createSlide': this.onCreateSlide,
            'Carousel.removeSlide': this.onRemoveSlide,
            'Carousel.selectSlide': this.onSelectSlide,
            'Carousel.unselectSlide': this.onUnselectSlide,
            'Carousel.refresh': this.onRefresh,
          }
        }

        onInit() {
          for (const t of this.fancybox.items) this.processType(t)
        }

        processType(t) {
          if (t.html) return t.src = t.html, t.type = 'html', void delete t.html
          const i = t.src || ''
          let s = t.type || this.fancybox.options.type, o = null
          if (!i || 'string' == typeof i) {
            if (o = i.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
              const e = C(i, this.fancybox.option('Html.youtube')), n = encodeURIComponent(o[1])
              t.videoId = n, t.src = `https://www.youtube-nocookie.com/embed/${ n }?${ e }`, t.thumb = t.thumb || `https://i.ytimg.com/vi/${ n }/mqdefault.jpg`, t.vendor = 'youtube', s = 'video'
            } else if (o = i.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
              const e = C(i, this.fancybox.option('Html.vimeo')), n = encodeURIComponent(o[1])
              t.videoId = n, t.src = `https://player.vimeo.com/video/${ n }?${ e }`, t.vendor = 'vimeo', s = 'video'
            } else (o = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = `//maps.google.${ o[1] }/?ll=${ (o[2] ? o[2] + '&z=' + Math.floor(o[3]) + (o[4] ? o[4].replace(/^\//, '&') : '') : o[4] + '').replace(/\?/, '&') }&output=${ o[4] && o[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed' }`, s = 'map') : (o = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = `//maps.google.${ o[1] }/maps?q=${ o[2].replace('query=', 'q=').replace('api=1', '') }&output=embed`, s = 'map')
            s || ('#' === i.charAt(0) ? s = 'inline' : (o = i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = 'html5video', t.format = t.format || 'video/' + ('ogv' === o[1] ? 'ogg' : o[1])) : i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = 'image' : i.match(/\.(pdf)((\?|#).*)?$/i) && (s = 'pdf')), t.type = s || this.fancybox.option('defaultType', 'image'), 'html5video' !== s && 'video' !== s || (t.video = e({}, this.fancybox.option('Html.video'), t.video), t._width && t._height ? t.ratio = parseFloat(t._width) / parseFloat(t._height) : t.ratio = t.ratio || t.video.ratio || S.video.ratio)
          }
        }

        onReady() {
          this.fancybox.Carousel.slides.forEach((t => {
            t.$el && (this.setContent(t), t.index === this.fancybox.getSlide().index && this.playVideo(t))
          }))
        }

        onCreateSlide(t, e, i) {
          'ready' === this.fancybox.state && this.setContent(i)
        }

        loadInlineContent(t) {
          let e
          if (t.src instanceof HTMLElement) e = t.src; else if ('string' == typeof t.src) {
            const i = t.src.split('#', 2), s = 2 === i.length && '' === i[0] ? i[1] : i[0]
            e = document.getElementById(s)
          }
          if (e) {
            if ('clone' === t.type || e.$placeHolder) {
              e = e.cloneNode(!0)
              let i = e.getAttribute('id')
              i = i ? `${ i }--clone` : `clone-${ this.fancybox.id }-${ t.index }`, e.setAttribute('id', i)
            } else {
              const t = document.createElement('div')
              t.classList.add('fancybox-placeholder'), e.parentNode.insertBefore(t, e), e.$placeHolder = t
            }
            this.fancybox.setContent(t, e)
          } else this.fancybox.setError(t, '{{ELEMENT_NOT_FOUND}}')
        }

        loadAjaxContent(t) {
          const e = this.fancybox, i = new XMLHttpRequest
          e.showLoading(t), i.onreadystatechange = function () {
            i.readyState === XMLHttpRequest.DONE && 'ready' === e.state && (e.hideLoading(t), 200 === i.status ? e.setContent(t, i.responseText) : e.setError(t, 404 === i.status ? '{{AJAX_NOT_FOUND}}' : '{{AJAX_FORBIDDEN}}'))
          }
          const s = t.ajax || null
          i.open(s ? 'POST' : 'GET', t.src), i.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'), i.setRequestHeader('X-Requested-With', 'XMLHttpRequest'), i.send(s), t.xhr = i
        }

        loadIframeContent(t) {
          const e = this.fancybox, i = document.createElement('iframe')
          if (i.className = 'fancybox__iframe', i.setAttribute('id', `fancybox__iframe_${ e.id }_${ t.index }`), i.setAttribute('allow', 'autoplay; fullscreen'), i.setAttribute('scrolling', 'auto'), t.$iframe = i, 'iframe' !== t.type || !1 === t.preload) return i.setAttribute('src', t.src), this.fancybox.setContent(t, i), void this.resizeIframe(t)
          e.showLoading(t)
          const s = document.createElement('div')
          s.style.visibility = 'hidden', this.fancybox.setContent(t, s), s.appendChild(i), i.onerror = () => {
            e.setError(t, '{{IFRAME_ERROR}}')
          }, i.onload = () => {
            e.hideLoading(t)
            let s = !1
            i.isReady || (i.isReady = !0, s = !0), i.src.length && (i.parentNode.style.visibility = '', this.resizeIframe(t), s && e.revealContent(t))
          }, i.setAttribute('src', t.src)
        }

        setAspectRatio(t) {
          const e = t.$content, i = t.ratio
          if (!e) return
          let s = t._width, o = t._height
          if (i || s && o) {
            Object.assign(e.style, {
              width: s && o ? '100%' : '',
              height: s && o ? '100%' : '',
              maxWidth: '',
              maxHeight: '',
            })
            const t = e.offsetWidth, n = e.offsetHeight
            if (s = s || t, o = o || n, s > t || o > n) {
              const e = Math.min(t / s, n / o)
              s *= e, o *= e
            }
            Math.abs(s / o - i) > .01 && (i < s / o ? s = o * i : o = s / i), Object.assign(e.style, {
              width: `${ s }px`,
              height: `${ o }px`,
            })
          }
        }

        resizeIframe(t) {
          const e = t.$iframe
          if (!e) return
          let i = t._width || 0, s = t._height || 0
          i && s && (t.autoSize = !1)
          const o = e.parentNode, n = o && o.style
          if (!1 !== t.preload && !1 !== t.autoSize && n) try {
            const t = window.getComputedStyle(o), a = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
              r = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), h = e.contentWindow.document,
              l = h.getElementsByTagName('html')[0], c = h.body
            n.width = '', c.style.overflow = 'hidden', i = i || l.scrollWidth + a, n.width = `${ i }px`, c.style.overflow = '', n.flex = '0 0 auto', n.height = `${ c.scrollHeight }px`, s = l.scrollHeight + r
          } catch (t) {
          }
          if (i || s) {
            const t = { flex: '0 1 auto', }
            i && (t.width = `${ i }px`), s && (t.height = `${ s }px`), Object.assign(n, t)
          }
        }

        onRefresh(t, e) {
          e.slides.forEach((t => {
            t.$el && (t.$iframe && this.resizeIframe(t), t.ratio && this.setAspectRatio(t))
          }))
        }

        setContent(t) {
          if (t && !t.isDom) {
            switch (t.type) {
            case'html':
              this.fancybox.setContent(t, t.src)
              break
            case'html5video':
              this.fancybox.setContent(t, this.fancybox.option('Html.html5video.tpl').replace(/\{\{src\}\}/gi, t.src).replace('{{format}}', t.format || t.html5video && t.html5video.format || '').replace('{{poster}}', t.poster || t.thumb || ''))
              break
            case'inline':
            case'clone':
              this.loadInlineContent(t)
              break
            case'ajax':
              this.loadAjaxContent(t)
              break
            case'pdf':
            case'video':
            case'map':
              t.preload = !1
            case'iframe':
              this.loadIframeContent(t)
            }
            t.ratio && this.setAspectRatio(t)
          }
        }

        onSelectSlide(t, e, i) {
          'ready' === t.state && this.playVideo(i)
        }

        playVideo(t) {
          if ('html5video' === t.type && t.video.autoplay) try {
            const e = t.$el.querySelector('video')
            if (e) {
              const t = e.play()
              void 0 !== t && t.then((() => {
              })).catch((t => {
                e.muted = !0, e.play()
              }))
            }
          } catch (t) {
          }
          if ('video' !== t.type || !t.$iframe || !t.$iframe.contentWindow) return
          const e = () => {
            if ('done' === t.state && t.$iframe && t.$iframe.contentWindow) {
              let e
              if (t.$iframe.isReady) return t.video && t.video.autoplay && (e = 'youtube' == t.vendor ? {
                event: 'command',
                func: 'playVideo',
              } : {
                method: 'play',
                value: 'true',
              }), void (e && t.$iframe.contentWindow.postMessage(JSON.stringify(e), '*'))
              'youtube' === t.vendor && (e = {
                event: 'listening',
                id: t.$iframe.getAttribute('id'),
              }, t.$iframe.contentWindow.postMessage(JSON.stringify(e), '*'))
            }
            t.poller = setTimeout(e, 250)
          }
          e()
        }

        onUnselectSlide(t, e, i) {
          if ('html5video' === i.type) {
            try {
              i.$el.querySelector('video').pause()
            } catch (t) {
            }
            return
          }
          let s = !1
          'vimeo' == i.vendor ? s = {
            method: 'pause',
            value: 'true',
          } : 'youtube' === i.vendor && (s = {
            event: 'command',
            func: 'pauseVideo',
          }), s && i.$iframe && i.$iframe.contentWindow && i.$iframe.contentWindow.postMessage(JSON.stringify(s), '*'), clearTimeout(i.poller)
        }

        onRemoveSlide(t, e, i) {
          i.xhr && (i.xhr.abort(), i.xhr = null), i.$iframe && (i.$iframe.onload = i.$iframe.onerror = null, i.$iframe.src = '//about:blank', i.$iframe = null)
          const s = i.$content
          'inline' === i.type && s && (s.classList.remove('fancybox__content'), 'none' !== s.style.display && (s.style.display = 'none')), i.$closeButton && (i.$closeButton.remove(), i.$closeButton = null)
          const o = s && s.$placeHolder
          o && (o.parentNode.insertBefore(s, o), o.remove(), s.$placeHolder = null)
        }

        onMessage(t) {
          try {
            const e = JSON.parse(t.data)
            if ('https://player.vimeo.com' === t.origin) {
              if ('ready' === e.event) for (const e of document.getElementsByClassName('fancybox__iframe')) e.contentWindow === t.source && (e.isReady = 1)
            } else 'https://www.youtube-nocookie.com' === t.origin && 'onReady' === e.event && (document.getElementById(e.id).isReady = 1)
          } catch (t) {
          }
        }

        attach() {
          this.fancybox.on(this.events), window.addEventListener('message', this.onMessage, !1)
        }

        detach() {
          this.fancybox.off(this.events), window.removeEventListener('message', this.onMessage, !1)
        }
      }

      E.defaults = S

      class P {
        constructor(t) {
          this.fancybox = t
          for (const t of [
            'onReady',
            'onClosing',
            'onDone',
            'onPageChange',
            'onCreateSlide',
            'onRemoveSlide',
            'onImageStatusChange',
          ]) this[t] = this[t].bind(this)
          this.events = {
            ready: this.onReady,
            closing: this.onClosing,
            done: this.onDone,
            'Carousel.change': this.onPageChange,
            'Carousel.createSlide': this.onCreateSlide,
            'Carousel.removeSlide': this.onRemoveSlide,
          }
        }

        onReady() {
          this.fancybox.Carousel.slides.forEach((t => {
            t.$el && this.setContent(t)
          }))
        }

        onDone(t, e) {
          this.handleCursor(e)
        }

        onClosing(t) {
          clearTimeout(this.clickTimer), this.clickTimer = null, t.Carousel.slides.forEach((t => {
            t.$image && (t.state = 'destroy'), t.Panzoom && t.Panzoom.detachEvents()
          })), 'closing' === this.fancybox.state && this.canZoom(t.getSlide()) && this.zoomOut()
        }

        onCreateSlide(t, e, i) {
          'ready' === this.fancybox.state && this.setContent(i)
        }

        onRemoveSlide(t, e, i) {
          i.$image && (i.$el.classList.remove(t.option('Image.canZoomInClass')), i.$image.remove(), i.$image = null), i.Panzoom && (i.Panzoom.destroy(), i.Panzoom = null), i.$el && i.$el.dataset && delete i.$el.dataset.imageFit
        }

        setContent(t) {
          if (t.isDom || t.html || t.type && 'image' !== t.type) return
          if (t.$image) return
          t.type = 'image', t.state = 'loading'
          const e = document.createElement('div')
          e.style.visibility = 'hidden'
          const i = document.createElement('img')
          i.addEventListener('load', (e => {
            e.stopImmediatePropagation(), this.onImageStatusChange(t)
          })), i.addEventListener('error', (() => {
            this.onImageStatusChange(t)
          })), i.src = t.src, i.alt = '', i.draggable = !1, i.classList.add('fancybox__image'), t.srcset && i.setAttribute('srcset', t.srcset), t.sizes && i.setAttribute('sizes', t.sizes), t.$image = i
          const s = this.fancybox.option('Image.wrap')
          if (s) {
            const o = document.createElement('div')
            o.classList.add('string' == typeof s ? s : 'fancybox__image-wrap'), o.appendChild(i), e.appendChild(o), t.$wrap = o
          } else e.appendChild(i)
          t.$el.dataset.imageFit = this.fancybox.option('Image.fit'), this.fancybox.setContent(t, e), i.complete || i.error ? this.onImageStatusChange(t) : this.fancybox.showLoading(t)
        }

        onImageStatusChange(t) {
          const e = t.$image
          e && 'loading' === t.state && (e.complete && e.naturalWidth && e.naturalHeight ? (this.fancybox.hideLoading(t), 'contain' === this.fancybox.option('Image.fit') && this.initSlidePanzoom(t), t.$el.addEventListener('wheel', (e => this.onWheel(t, e)), { passive: !1, }), t.$content.addEventListener('click', (e => this.onClick(t, e)), { passive: !1, }), this.revealContent(t)) : this.fancybox.setError(t, '{{IMAGE_ERROR}}'))
        }

        initSlidePanzoom(t) {
          t.Panzoom || (t.Panzoom = new d(t.$el, e(!0, this.fancybox.option('Image.Panzoom', {}), {
            viewport: t.$wrap,
            content: t.$image,
            width: t._width,
            height: t._height,
            wrapInner: !1,
            textSelection: !0,
            touch: this.fancybox.option('Image.touch'),
            panOnlyZoomed: !0,
            click: !1,
            wheel: !1,
          })), t.Panzoom.on('startAnimation', (() => {
            this.fancybox.trigger('Image.startAnimation', t)
          })), t.Panzoom.on('endAnimation', (() => {
            'zoomIn' === t.state && this.fancybox.done(t), this.handleCursor(t), this.fancybox.trigger('Image.endAnimation', t)
          })), t.Panzoom.on('afterUpdate', (() => {
            this.handleCursor(t), this.fancybox.trigger('Image.afterUpdate', t)
          })))
        }

        revealContent(t) {
          null === this.fancybox.Carousel.prevPage && t.index === this.fancybox.options.startIndex && this.canZoom(t) ? this.zoomIn() : this.fancybox.revealContent(t)
        }

        getZoomInfo(t) {
          const e = t.$thumb.getBoundingClientRect(), i = e.width, s = e.height, o = t.$content.getBoundingClientRect(),
            n = o.width, a = o.height, r = o.top - e.top, h = o.left - e.left
          let l = this.fancybox.option('Image.zoomOpacity')
          return 'auto' === l && (l = Math.abs(i / s - n / a) > .1), {
            top: r,
            left: h,
            scale: n && i ? i / n : 1,
            opacity: l,
          }
        }

        canZoom(t) {
          const e = this.fancybox, i = e.$container
          if (window.visualViewport && 1 !== window.visualViewport.scale) return !1
          if (t.Panzoom && !t.Panzoom.content.width) return !1
          if (!e.option('Image.zoom') || 'contain' !== e.option('Image.fit')) return !1
          const s = t.$thumb
          if (!s || 'loading' === t.state) return !1
          i.classList.add('fancybox__no-click')
          const o = s.getBoundingClientRect()
          let n
          if (this.fancybox.option('Image.ignoreCoveredThumbnail')) {
            const t = document.elementFromPoint(o.left + 1, o.top + 1) === s,
              e = document.elementFromPoint(o.right - 1, o.bottom - 1) === s
            n = t && e
          } else n = document.elementFromPoint(o.left + .5 * o.width, o.top + .5 * o.height) === s
          return i.classList.remove('fancybox__no-click'), n
        }

        zoomIn() {
          const t = this.fancybox, e = t.getSlide(), i = e.Panzoom, {
            top: s,
            left: o,
            scale: n,
            opacity: a,
          } = this.getZoomInfo(e)
          t.trigger('reveal', e), i.panTo({
            x: -1 * o,
            y: -1 * s,
            scale: n,
            friction: 0,
            ignoreBounds: !0,
          }), e.$content.style.visibility = '', e.state = 'zoomIn', !0 === a && i.on('afterTransform', (t => {
            'zoomIn' !== e.state && 'zoomOut' !== e.state || (t.$content.style.opacity = Math.min(1, 1 - (1 - t.content.scale) / (1 - n)))
          })), i.panTo({
            x: 0,
            y: 0,
            scale: 1,
            friction: this.fancybox.option('Image.zoomFriction'),
          })
        }

        zoomOut() {
          const t = this.fancybox, e = t.getSlide(), i = e.Panzoom
          if (!i) return
          e.state = 'zoomOut', t.state = 'customClosing', e.$caption && (e.$caption.style.visibility = 'hidden')
          let s = this.fancybox.option('Image.zoomFriction')
          const o = t => {
            const { top: o, left: n, scale: a, opacity: r, } = this.getZoomInfo(e)
            t || r || (s *= .82), i.panTo({
              x: -1 * n,
              y: -1 * o,
              scale: a,
              friction: s,
              ignoreBounds: !0,
            }), s *= .98
          }
          window.addEventListener('scroll', o), i.once('endAnimation', (() => {
            window.removeEventListener('scroll', o), t.destroy()
          })), o()
        }

        handleCursor(t) {
          if ('image' !== t.type || !t.$el) return
          const e = t.Panzoom, i = this.fancybox.option('Image.click', !1, t), s = this.fancybox.option('Image.touch'),
            o = t.$el.classList, n = this.fancybox.option('Image.canZoomInClass'),
            a = this.fancybox.option('Image.canZoomOutClass')
          if (o.remove(a), o.remove(n), e && 'toggleZoom' === i) {
            e && 1 === e.content.scale && e.option('maxScale') - e.content.scale > .01 ? o.add(n) : e.content.scale > 1 && !s && o.add(a)
          } else 'close' === i && o.add(a)
        }

        onWheel(t, e) {
          if ('ready' === this.fancybox.state && !1 !== this.fancybox.trigger('Image.wheel', e)) switch (this.fancybox.option('Image.wheel')) {
          case'zoom':
            'done' === t.state && t.Panzoom && t.Panzoom.zoomWithWheel(e)
            break
          case'close':
            this.fancybox.close()
            break
          case'slide':
            this.fancybox[e.deltaY < 0 ? 'prev' : 'next']()
          }
        }

        onClick(t, e) {
          if ('ready' !== this.fancybox.state) return
          const i = t.Panzoom
          if (i && (i.dragPosition.midPoint || 0 !== i.dragOffset.x || 0 !== i.dragOffset.y || 1 !== i.dragOffset.scale)) return
          if (this.fancybox.Carousel.Panzoom.lockAxis) return !1
          const s = i => {
              switch (i) {
              case'toggleZoom':
                e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e)
                break
              case'close':
                this.fancybox.close()
                break
              case'next':
                e.stopPropagation(), this.fancybox.next()
              }
            }, o = this.fancybox.option('Image.click'), n = this.fancybox.option('Image.doubleClick')
          n ? this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null, s(n)) : this.clickTimer = setTimeout((() => {
            this.clickTimer = null, s(o)
          }), 300) : s(o)
        }

        onPageChange(t, e) {
          const i = t.getSlide()
          e.slides.forEach((t => {
            t.Panzoom && 'done' === t.state && t.index !== i.index && t.Panzoom.panTo({
              x: 0,
              y: 0,
              scale: 1,
              friction: .8,
            })
          }))
        }

        attach() {
          this.fancybox.on(this.events)
        }

        detach() {
          this.fancybox.off(this.events)
        }
      }

      P.defaults = {
        canZoomInClass: 'can-zoom_in',
        canZoomOutClass: 'can-zoom_out',
        zoom: !0,
        zoomOpacity: 'auto',
        zoomFriction: .82,
        ignoreCoveredThumbnail: !1,
        touch: !0,
        click: 'toggleZoom',
        doubleClick: null,
        wheel: 'zoom',
        fit: 'contain',
        wrap: !1,
        Panzoom: { ratio: 1, },
      }

      class L {
        constructor(t) {
          this.fancybox = t
          for (const t of [
            'onChange',
            'onClosing',
          ]) this[t] = this[t].bind(this)
          this.events = {
            initCarousel: this.onChange,
            'Carousel.change': this.onChange,
            closing: this.onClosing,
          }, this.hasCreatedHistory = !1, this.origHash = '', this.timer = null
        }


        static startFromUrl() {
          const t = L.Fancybox
          if (!t || t.getInstance() || !1 === t.defaults.Hash) return
          const { hash: e, slug: i, index: s, } = L.getParsedURL()
          if (!i) return
          let o = document.querySelector(`[data-slug="${ e }"]`)
          if (o && o.dispatchEvent(new CustomEvent('click', {
            bubbles: !0,
            cancelable: !0,
          })), t.getInstance()) return
          const n = document.querySelectorAll(`[data-fancybox="${ i }"]`)
          n.length && (null === s && 1 === n.length ? o = n[0] : s && (o = n[s - 1]), o && o.dispatchEvent(new CustomEvent('click', {
            bubbles: !0,
            cancelable: !0,
          })))
        }

        static onHashChange() {
          const { slug: t, index: e, } = L.getParsedURL(), i = L.Fancybox, s = i && i.getInstance()
          if (s && s.plugins.Hash) {
            if (t) {
              const i = s.Carousel
              if (t === s.option('slug')) return i.slideTo(e - 1)
              for (const e of i.slides) if (e.slug && e.slug === t) return i.slideTo(e.index)
              const o = s.getSlide(), n = o.$trigger && o.$trigger.dataset
              if (n && n.fancybox === t) return i.slideTo(e - 1)
            }
            s.plugins.Hash.hasSilentClose = !0, s.close()
          }
          L.startFromUrl()
        }

        static create(t) {
          function e() {
            window.addEventListener('hashchange', L.onHashChange, !1), L.startFromUrl()
          }

          L.Fancybox = t, v && window.requestAnimationFrame((() => {
            /complete|interactive|loaded/.test(document.readyState) ? e() : document.addEventListener('DOMContentLoaded', e)
          }))
        }

        static destroy() {
          window.removeEventListener('hashchange', L.onHashChange, !1)
        }

        static getParsedURL() {
          const t = window.location.hash.substr(1), e = t.split('-'),
            i = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || null
          return {
            hash: t,
            slug: e.join('-'),
            index: i,
          }
        }

        onChange(t) {
          const e = t.Carousel
          this.timer && clearTimeout(this.timer)
          const i = null === e.prevPage, s = t.getSlide(), o = new URL(document.URL).hash
          let n = !1
          if (s.slug) n = '#' + s.slug; else {
            const i = s.$trigger && s.$trigger.dataset, o = t.option('slug') || i && i.fancybox
            o && o.length && 'true' !== o && (n = '#' + o + (e.slides.length > 1 ? '-' + (s.index + 1) : ''))
          }
          i && (this.origHash = o !== n ? o : ''), n && o !== n && (this.timer = setTimeout((() => {
            try {
              window.history[i ? 'pushState' : 'replaceState']({}, document.title, window.location.pathname + window.location.search + n), i && (this.hasCreatedHistory = !0)
            } catch (t) {
            }
          }), 300))
        }

        onClosing() {
          if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) try {
            return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ''))
          } catch (t) {
          }
        }

        attach(t) {
          t.on(this.events)
        }

        detach(t) {
          t.off(this.events)
        }
      }

      const T = {
        pageXOffset: 0,
        pageYOffset: 0,
        element: () => document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement,
        activate(t) {
          T.pageXOffset = window.pageXOffset, T.pageYOffset = window.pageYOffset, t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
        },
        deactivate() {
          document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        },
      }

      class _ {
        constructor(t) {
          this.fancybox = t, this.active = !1, this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
        }

        isActive() {
          return this.active
        }

        setTimer() {
          if (!this.active || this.timer) return
          const t = this.fancybox.option('slideshow.delay', 3e3)
          this.timer = setTimeout((() => {
            this.timer = null, this.fancybox.option('infinite') || this.fancybox.getSlide().index !== this.fancybox.Carousel.slides.length - 1 ? this.fancybox.next() : this.fancybox.jumpTo(0, { friction: 0, })
          }), t)
          let e = this.$progress
          e || (e = document.createElement('div'), e.classList.add('fancybox__progress'), this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel), this.$progress = e, e.offsetHeight), e.style.transitionDuration = `${ t }ms`, e.style.transform = 'scaleX(1)'
        }

        clearTimer() {
          clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = '', this.$progress.style.transform = '', this.$progress.offsetHeight)
        }

        activate() {
          this.active || (this.active = !0, this.fancybox.$container.classList.add('has-slideshow'), 'done' === this.fancybox.getSlide().state && this.setTimer(), document.addEventListener('visibilitychange', this.handleVisibilityChange, !1))
        }

        handleVisibilityChange() {
          this.deactivate()
        }

        deactivate() {
          this.active = !1, this.clearTimer(), this.fancybox.$container.classList.remove('has-slideshow'), document.removeEventListener('visibilitychange', this.handleVisibilityChange, !1)
        }

        toggle() {
          this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate()
        }
      }

      const A = {
        display: [
          'counter',
          'zoom',
          'slideshow',
          'fullscreen',
          'thumbs',
          'close',
        ],
        autoEnable: !0,
        items: {
          counter: {
            position: 'left',
            type: 'div',
            class: 'fancybox__counter',
            html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
            attr: { tabindex: -1, },
          },
          prev: {
            type: 'button',
            class: 'fancybox__button--prev',
            label: 'PREV',
            html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
            attr: { 'data-fancybox-prev': '', },
          },
          next: {
            type: 'button',
            class: 'fancybox__button--next',
            label: 'NEXT',
            html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
            attr: { 'data-fancybox-next': '', },
          },
          fullscreen: {
            type: 'button',
            class: 'fancybox__button--fullscreen',
            label: 'TOGGLE_FULLSCREEN',
            html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
            click: function (t) {
              t.preventDefault(), T.element() ? T.deactivate() : T.activate(this.fancybox.$container)
            },
          },
          slideshow: {
            type: 'button',
            class: 'fancybox__button--slideshow',
            label: 'TOGGLE_SLIDESHOW',
            html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
            click: function (t) {
              t.preventDefault(), this.Slideshow.toggle()
            },
          },
          zoom: {
            type: 'button',
            class: 'fancybox__button--zoom',
            label: 'TOGGLE_ZOOM',
            html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
            click: function (t) {
              t.preventDefault()
              const e = this.fancybox.getSlide().Panzoom
              e && e.toggleZoom()
            },
          },
          download: {
            type: 'link',
            label: 'DOWNLOAD',
            class: 'fancybox__button--download',
            html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
            click: function (t) {
              t.stopPropagation()
            },
          },
          thumbs: {
            type: 'button',
            label: 'TOGGLE_THUMBS',
            class: 'fancybox__button--thumbs',
            html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
            click: function (t) {
              t.stopPropagation()
              const e = this.fancybox.plugins.Thumbs
              e && e.toggle()
            },
          },
          close: {
            type: 'button',
            label: 'CLOSE',
            class: 'fancybox__button--close',
            html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
            attr: {
              'data-fancybox-close': '',
              tabindex: 0,
            },
          },
        },
      }

      class z {
        constructor(t) {
          this.fancybox = t, this.$container = null, this.state = 'init'
          for (const t of [
            'onInit',
            'onPrepare',
            'onDone',
            'onKeydown',
            'onClosing',
            'onChange',
            'onSettle',
            'onRefresh',
          ]) this[t] = this[t].bind(this)
          this.events = {
            init: this.onInit,
            prepare: this.onPrepare,
            done: this.onDone,
            keydown: this.onKeydown,
            closing: this.onClosing,
            'Carousel.change': this.onChange,
            'Carousel.settle': this.onSettle,
            'Carousel.Panzoom.touchStart': () => this.onRefresh(),
            'Image.startAnimation': (t, e) => this.onRefresh(e),
            'Image.afterUpdate': (t, e) => this.onRefresh(e),
          }
        }

        onInit() {
          if (this.fancybox.option('Toolbar.autoEnable')) {
            let t = !1
            for (const e of this.fancybox.items) if ('image' === e.type) {
              t = !0
              break
            }
            if (!t) return void (this.state = 'disabled')
          }
          for (const e of this.fancybox.option('Toolbar.display')) {
            if ('close' === (t(e) ? e.id : e)) {
              this.fancybox.options.closeButton = !1
              break
            }
          }
        }

        onPrepare() {
          const t = this.fancybox
          if ('init' === this.state && (this.build(), this.update(), this.Slideshow = new _(t), !t.Carousel.prevPage && (t.option('slideshow.autoStart') && this.Slideshow.activate(), t.option('fullscreen.autoStart') && !T.element()))) try {
            T.activate(t.$container)
          } catch (t) {
          }
        }

        onFsChange() {
          window.scrollTo(T.pageXOffset, T.pageYOffset)
        }

        onSettle() {
          const t = this.fancybox, e = this.Slideshow
          e && e.isActive() && (t.getSlide().index !== t.Carousel.slides.length - 1 || t.option('infinite') ? 'done' === t.getSlide().state && e.setTimer() : e.deactivate())
        }

        onChange() {
          this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer()
        }

        onDone(t, e) {
          const i = this.Slideshow
          e.index === t.getSlide().index && (this.update(), i && i.isActive() && (t.option('infinite') || e.index !== t.Carousel.slides.length - 1 ? i.setTimer() : i.deactivate()))
        }

        onRefresh(t) {
          t && t.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || t && 'done' !== t.state || this.Slideshow.deactivate())
        }

        onKeydown(t, e, i) {
          ' ' === e && this.Slideshow && (this.Slideshow.toggle(), i.preventDefault())
        }

        onClosing() {
          this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener('fullscreenchange', this.onFsChange)
        }

        createElement(t) {
          let e
          'div' === t.type ? e = document.createElement('div') : (e = document.createElement('link' === t.type ? 'a' : 'button'), e.classList.add('carousel__button')), e.innerHTML = t.html, e.setAttribute('tabindex', t.tabindex || 0), t.class && e.classList.add(...t.class.split(' '))
          for (const i in t.attr) e.setAttribute(i, t.attr[i])
          t.label && e.setAttribute('title', this.fancybox.localize(`{{${ t.label }}}`)), t.click && e.addEventListener('click', t.click.bind(this)), 'prev' === t.id && e.setAttribute('data-fancybox-prev', ''), 'next' === t.id && e.setAttribute('data-fancybox-next', '')
          const i = e.querySelector('svg')
          return i && (i.setAttribute('role', 'img'), i.setAttribute('tabindex', '-1'), i.setAttribute('xmlns', 'http://www.w3.org/2000/svg')), e
        }

        build() {
          this.cleanup()
          const i = this.fancybox.option('Toolbar.items'),
            s = [
              {
                position: 'left',
                items: [],
              },
              {
                position: 'center',
                items: [],
              },
              {
                position: 'right',
                items: [],
              },
            ],
            o = this.fancybox.plugins.Thumbs
          for (const n of this.fancybox.option('Toolbar.display')) {
            let a, r
            if (t(n) ? (a = n.id, r = e({}, i[a], n)) : (a = n, r = i[a]), [
              'counter',
              'next',
              'prev',
              'slideshow',
            ].includes(a) && this.fancybox.items.length < 2) continue
            if ('fullscreen' === a) {
              if (!document.fullscreenEnabled || window.fullScreen) continue
              document.addEventListener('fullscreenchange', this.onFsChange)
            }
            if ('thumbs' === a && (!o || 'disabled' === o.state)) continue
            if (!r) continue
            const h = r.position || 'right', l = s.find((t => t.position === h))
            l && l.items.push(r)
          }
          const n = document.createElement('div')
          n.classList.add('fancybox__toolbar')
          for (const t of s) if (t.items.length) {
            const e = document.createElement('div')
            e.classList.add('fancybox__toolbar__items'), e.classList.add(`fancybox__toolbar__items--${ t.position }`)
            for (const i of t.items) e.appendChild(this.createElement(i))
            n.appendChild(e)
          }
          this.fancybox.$carousel.parentNode.insertBefore(n, this.fancybox.$carousel), this.$container = n
        }

        update() {
          const t = this.fancybox.getSlide(), e = t.index, i = this.fancybox.items.length,
            s = t.downloadSrc || ('image' !== t.type || t.error ? null : t.src)
          for (const t of this.fancybox.$container.querySelectorAll('a.fancybox__button--download')) s ? (t.removeAttribute('disabled'), t.removeAttribute('tabindex'), t.setAttribute('href', s), t.setAttribute('download', s), t.setAttribute('target', '_blank')) : (t.setAttribute('disabled', ''), t.setAttribute('tabindex', -1), t.removeAttribute('href'), t.removeAttribute('download'))
          const o = t.Panzoom, n = o && o.option('maxScale') > o.option('baseScale')
          for (const t of this.fancybox.$container.querySelectorAll('.fancybox__button--zoom')) n ? t.removeAttribute('disabled') : t.setAttribute('disabled', '')
          for (const e of this.fancybox.$container.querySelectorAll('[data-fancybox-index]')) e.innerHTML = t.index + 1
          for (const t of this.fancybox.$container.querySelectorAll('[data-fancybox-count]')) t.innerHTML = i
          if (!this.fancybox.option('infinite')) {
            for (const t of this.fancybox.$container.querySelectorAll('[data-fancybox-prev]')) 0 === e ? t.setAttribute('disabled', '') : t.removeAttribute('disabled')
            for (const t of this.fancybox.$container.querySelectorAll('[data-fancybox-next]')) e === i - 1 ? t.setAttribute('disabled', '') : t.removeAttribute('disabled')
          }
        }

        cleanup() {
          this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), this.$container = null
        }

        attach() {
          this.fancybox.on(this.events)
        }

        detach() {
          this.fancybox.off(this.events), this.cleanup()
        }
      }

      z.defaults = A
      const k = {
        ScrollLock: class {
          constructor(t) {
            this.fancybox = t, this.viewport = null, this.pendingUpdate = null
            for (const t of [
              'onReady',
              'onResize',
              'onTouchstart',
              'onTouchmove',
            ]) this[t] = this[t].bind(this)
          }

          onReady() {
            const t = window.visualViewport
            t && (this.viewport = t, this.startY = 0, t.addEventListener('resize', this.onResize), this.updateViewport()), window.addEventListener('touchstart', this.onTouchstart, { passive: !1, }), window.addEventListener('touchmove', this.onTouchmove, { passive: !1, }), window.addEventListener('wheel', this.onWheel, { passive: !1, })
          }

          onResize() {
            this.updateViewport()
          }

          updateViewport() {
            const t = this.fancybox, e = this.viewport, i = e.scale || 1, s = t.$container
            if (!s) return
            let o = '', n = '', a = ''
            i - 1 > .1 && (o = e.width * i + 'px', n = e.height * i + 'px', a = `translate3d(${ e.offsetLeft }px, ${ e.offsetTop }px, 0) scale(${ 1 / i })`), s.style.width = o, s.style.height = n, s.style.transform = a
          }

          onTouchstart(t) {
            this.startY = t.touches ? t.touches[0].screenY : t.screenY
          }

          onTouchmove(t) {
            const e = this.startY, i = window.innerWidth / window.document.documentElement.clientWidth
            if (!t.cancelable) return
            if (t.touches.length > 1 || 1 !== i) return
            const o = s(t.composedPath()[0])
            if (!o) return void t.preventDefault()
            const n = window.getComputedStyle(o), a = parseInt(n.getPropertyValue('height'), 10),
              r = t.touches ? t.touches[0].screenY : t.screenY, h = e <= r && 0 === o.scrollTop,
              l = e >= r && o.scrollHeight - o.scrollTop === a;
            (h || l) && t.preventDefault()
          }

          onWheel(t) {
            s(t.composedPath()[0]) || t.preventDefault()
          }

          cleanup() {
            this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null)
            const t = this.viewport
            t && (t.removeEventListener('resize', this.onResize), this.viewport = null), window.removeEventListener('touchstart', this.onTouchstart, !1), window.removeEventListener('touchmove', this.onTouchmove, !1), window.removeEventListener('wheel', this.onWheel, { passive: !1, })
          }

          attach() {
            this.fancybox.on('initLayout', this.onReady)
          }

          detach() {
            this.fancybox.off('initLayout', this.onReady), this.cleanup()
          }
        },
        Thumbs: $,
        Html: E,
        Toolbar: z,
        Image: P,
        Hash: L,
      }
      const O = {
          startIndex: 0,
          preload: 1,
          infinite: !0,
          showClass: 'fancybox-zoomInUp',
          hideClass: 'fancybox-fadeOut',
          animated: !0,
          hideScrollbar: !0,
          parentEl: null,
          mainClass: null,
          autoFocus: !0,
          trapFocus: !0,
          placeFocusBack: !0,
          click: 'close',
          closeButton: 'inside',
          dragToClose: !0,
          keyboard: {
            Escape: 'close',
            Delete: 'close',
            Backspace: 'close',
            PageUp: 'next',
            PageDown: 'prev',
            ArrowUp: 'next',
            ArrowDown: 'prev',
            ArrowRight: 'next',
            ArrowLeft: 'prev',
          },
          template: {
            closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
            spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
            main: null,
          },
          l10n: {
            CLOSE: 'Close',
            NEXT: 'Next',
            PREV: 'Previous',
            MODAL: 'You can close this modal content with the ESC key',
            ERROR: 'Something Went Wrong, Please Try Again Later',
            IMAGE_ERROR: 'Image Not Found',
            ELEMENT_NOT_FOUND: 'HTML Element Not Found',
            AJAX_NOT_FOUND: 'Error Loading AJAX : Not Found',
            AJAX_FORBIDDEN: 'Error Loading AJAX : Forbidden',
            IFRAME_ERROR: 'Error Loading Page',
            TOGGLE_ZOOM: 'Toggle zoom level',
            TOGGLE_THUMBS: 'Toggle thumbnails',
            TOGGLE_SLIDESHOW: 'Toggle slideshow',
            TOGGLE_FULLSCREEN: 'Toggle full-screen mode',
            DOWNLOAD: 'Download',
          },
        }, M = new Map
      let I = 0

      class F extends l {
        constructor(t, i = {}) {
          t = t.map((t => (t.width && (t._width = t.width), t.height && (t._height = t.height), t))), super(e(!0, {}, O, i)), this.bindHandlers(), this.state = 'init', this.setItems(t), this.attachPlugins(F.Plugins), this.trigger('init'), !0 === this.option('hideScrollbar') && this.hideScrollbar(), this.initLayout(), this.initCarousel(), this.attachEvents(), M.set(this.id, this), this.trigger('prepare'), this.state = 'ready', this.trigger('ready'), this.$container.setAttribute('aria-hidden', 'false'), this.option('trapFocus') && this.focus()
        }

        static show(t, e = {}) {
          return new F(t, e)
        }

        static fromEvent(t, e = {}) {
          if (t.defaultPrevented) return
          if (t.button && 0 !== t.button) return
          if (t.ctrlKey || t.metaKey || t.shiftKey) return
          const i = t.composedPath()[0]
          let s, o, n, a = i
          if ((a.matches('[data-fancybox-trigger]') || (a = a.closest('[data-fancybox-trigger]'))) && (s = a && a.dataset && a.dataset.fancyboxTrigger), s) {
            const t = document.querySelectorAll(`[data-fancybox="${ s }"]`),
              e = parseInt(a.dataset.fancyboxIndex, 10) || 0
            a = t.length ? t[e] : a
          }
          a || (a = i), Array.from(F.openers.keys()).reverse().some((e => {
            n = a
            let i = !1
            try {
              n instanceof Element && ('string' == typeof e || e instanceof String) && (i = n.matches(e) || (n = n.closest(e)))
            } catch (t) {
            }
            return !!i && (t.preventDefault(), o = e, !0)
          }))
          let r = !1
          if (o) {
            e.event = t, e.target = n, n.origTarget = i, r = F.fromOpener(o, e)
            const s = F.getInstance()
            s && 'ready' === s.state && t.detail && document.body.classList.add('is-using-mouse')
          }
          return r
        }


        static fromOpener(t, i = {}) {
          let s = [], o = i.startIndex || 0, n = i.target || null
          const a = void 0 !== (i = e({}, i, F.openers.get(t))).groupAll && i.groupAll,
            r = void 0 === i.groupAttr ? 'data-fancybox' : i.groupAttr, h = r && n ? n.getAttribute(`${ r }`) : ''
          if (!n || h || a) {
            const e = i.root || (n ? n.getRootNode() : document.body)
            s = [].slice.call(e.querySelectorAll(t))
          }
          if (n && !a && (s = h ? s.filter((t => t.getAttribute(`${ r }`) === h)) : [ n, ]), !s.length) return !1
          const l = F.getInstance()
          return !(l && s.indexOf(l.options.$trigger) > -1) && (o = n ? s.indexOf(n) : o, s = s.map((function (t) {
            const e = [
                'false',
                '0',
                'no',
                'null',
                'undefined',
              ], i = [
                'true',
                '1',
                'yes',
              ],
              s = Object.assign({}, t.dataset), o = {}
            for (const [ t, n, ] of Object.entries(s)) if ('fancybox' !== t) if ('width' === t || 'height' === t) o[`_${ t }`] = n; else if ('string' == typeof n || n instanceof String) if (e.indexOf(n) > -1) o[t] = !1; else if (i.indexOf(o[t]) > -1) o[t] = !0; else try {
              o[t] = JSON.parse(n)
            } catch (e) {
              o[t] = n
            } else o[t] = n
            return t instanceof Element && (o.$trigger = t), o
          })), new F(s, e({}, i, {
            startIndex: o,
            $trigger: n,
          })))
        }

        static bind(t, e = {}) {
          function i() {
            document.body.addEventListener('click', F.fromEvent, !1)
          }

          v && (F.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? i() : document.addEventListener('DOMContentLoaded', i)), F.openers.set(t, e))
        }

        static unbind(t) {
          F.openers.delete(t), F.openers.size || F.destroy()
        }

        static destroy() {
          let t
          for (; t = F.getInstance();) t.destroy()
          F.openers = new Map, document.body.removeEventListener('click', F.fromEvent, !1)
        }

        static getInstance(t) {
          if (t) return M.get(t)
          return Array.from(M.values()).reverse().find((t => ![
            'closing',
            'customClosing',
            'destroy',
          ].includes(t.state) && t)) || null
        }

        static close(t = !0, e) {
          if (t) for (const t of M.values()) t.close(e); else {
            const t = F.getInstance()
            t && t.close(e)
          }
        }

        static next() {
          const t = F.getInstance()
          t && t.next()
        }

        static prev() {
          const t = F.getInstance()
          t && t.prev()
        }

        option(t, ...e) {
          const i = this.getSlide()
          let s = i ? i[t] : void 0
          return void 0 !== s ? ('function' == typeof s && (s = s.call(this, this, ...e)), s) : super.option(t, ...e)
        }

        bindHandlers() {
          for (const t of [
            'onMousedown',
            'onKeydown',
            'onClick',
            'onFocus',
            'onCreateSlide',
            'onSettle',
            'onTouchMove',
            'onTouchEnd',
            'onTransform',
          ]) this[t] = this[t].bind(this)
        }

        attachEvents() {
          document.addEventListener('mousedown', this.onMousedown), document.addEventListener('keydown', this.onKeydown, !0), this.option('trapFocus') && document.addEventListener('focus', this.onFocus, !0), this.$container.addEventListener('click', this.onClick)
        }


        detachEvents() {
          document.removeEventListener('mousedown', this.onMousedown), document.removeEventListener('keydown', this.onKeydown, !0), document.removeEventListener('focus', this.onFocus, !0), this.$container.removeEventListener('click', this.onClick)
        }

        initLayout() {
          this.$root = this.option('parentEl') || document.body
          const t = this.option('template.main')
          t && (this.$root.insertAdjacentHTML('beforeend', this.localize(t)), this.$container = this.$root.querySelector('.fancybox__container')), this.$container || (this.$container = document.createElement('div'), this.$root.appendChild(this.$container)), this.$container.onscroll = () => (this.$container.scrollLeft = 0, !1), Object.entries({
            class: 'fancybox__container',
            role: 'dialog',
            tabIndex: '-1',
            'aria-modal': 'true',
            'aria-hidden': 'true',
            'aria-label': this.localize('{{MODAL}}'),
          }).forEach((t => this.$container.setAttribute(...t))), this.option('animated') && this.$container.classList.add('is-animated'), this.$backdrop = this.$container.querySelector('.fancybox__backdrop'), this.$backdrop || (this.$backdrop = document.createElement('div'), this.$backdrop.classList.add('fancybox__backdrop'), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector('.fancybox__carousel'), this.$carousel || (this.$carousel = document.createElement('div'), this.$carousel.classList.add('fancybox__carousel'), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute('id'), this.id || (this.id = this.options.id || ++I, this.$container.setAttribute('id', 'fancybox-' + this.id))
          const e = this.option('mainClass')
          return e && this.$container.classList.add(...e.split(' ')), document.documentElement.classList.add('with-fancybox'), this.trigger('initLayout'), this
        }

        setItems(t) {
          const e = []
          for (const i of t) {
            const t = i.$trigger
            if (t) {
              const e = t.dataset || {}
              i.src = e.src || t.getAttribute('href') || i.src, i.type = e.type || i.type, !i.src && t instanceof HTMLImageElement && (i.src = t.currentSrc || i.$trigger.src)
            }
            let s = i.$thumb
            if (!s) {
              const t = i.$trigger && i.$trigger.origTarget
              t && (s = t instanceof HTMLImageElement ? t : t.querySelector('img:not([aria-hidden])')), !s && i.$trigger && (s = i.$trigger instanceof HTMLImageElement ? i.$trigger : i.$trigger.querySelector('img:not([aria-hidden])'))
            }
            i.$thumb = s || null
            let o = i.thumb
            !o && s && (o = s.currentSrc || s.src, !o && s.dataset && (o = s.dataset.lazySrc || s.dataset.src)), o || 'image' !== i.type || (o = i.src), i.thumb = o || null, i.caption = i.caption || '', e.push(i)
          }
          this.items = e
        }

        initCarousel() {
          return this.Carousel = new y(this.$carousel, e(!0, {}, {
            prefix: '',
            classNames: {
              viewport: 'fancybox__viewport',
              track: 'fancybox__track',
              slide: 'fancybox__slide',
            },
            textSelection: !0,
            preload: this.option('preload'),
            friction: .88,
            slides: this.items,
            initialPage: this.options.startIndex,
            slidesPerPage: 1,
            infiniteX: this.option('infinite'),
            infiniteY: !0,
            l10n: this.option('l10n'),
            Dots: !1,
            Navigation: {
              classNames: {
                main: 'fancybox__nav',
                button: 'carousel__button',
                next: 'is-next',
                prev: 'is-prev',
              },
            },
            Panzoom: {
              textSelection: !0,
              panOnlyZoomed: () => this.Carousel && this.Carousel.pages && this.Carousel.pages.length < 2 && !this.option('dragToClose'),
              lockAxis: () => {
                if (this.Carousel) {
                  let t = 'x'
                  return this.option('dragToClose') && (t += 'y'), t
                }
              },
            },
            on: {
              '*': (t, ...e) => this.trigger(`Carousel.${ t }`, ...e),
              init: t => this.Carousel = t,
              createSlide: this.onCreateSlide,
              settle: this.onSettle,
            },
          }, this.option('Carousel'))), this.option('dragToClose') && this.Carousel.Panzoom.on({
            touchMove: this.onTouchMove,
            afterTransform: this.onTransform,
            touchEnd: this.onTouchEnd,
          }), this.trigger('initCarousel'), this
        }

        onCreateSlide(t, e) {
          let i = e.caption || ''
          if ('function' == typeof this.options.caption && (i = this.options.caption.call(this, this, this.Carousel, e)), 'string' == typeof i && i.length) {
            const t = document.createElement('div'), s = `fancybox__caption_${ this.id }_${ e.index }`
            t.className = 'fancybox__caption', t.innerHTML = i, t.setAttribute('id', s), e.$caption = e.$el.appendChild(t), e.$el.classList.add('has-caption'), e.$el.setAttribute('aria-labelledby', s)
          }
        }

        onSettle() {
          this.option('autoFocus') && this.focus()
        }

        onFocus(t) {
          this.focus(t)
        }

        onClick(t) {
          if (t.defaultPrevented) return
          const e = t.composedPath()[0]
          if (e.matches('[data-fancybox-close]')) return t.preventDefault(), void F.close(!1, t)
          if (e.matches('[data-fancybox-next]')) return t.preventDefault(), void F.next()
          if (e.matches('[data-fancybox-prev]')) return t.preventDefault(), void F.prev()
          if (e.matches(x) || document.activeElement.blur(), e.closest('.fancybox__content')) return
          if (getSelection().toString().length) return
          if (!1 === this.trigger('click', t)) return
          switch (this.option('click')) {
          case'close':
            this.close()
            break
          case'next':
            this.next()
          }
        }

        onTouchMove() {
          const t = this.getSlide().Panzoom
          return !t || 1 === t.content.scale
        }

        onTouchEnd(t) {
          const e = t.dragOffset.y
          Math.abs(e) >= 150 || Math.abs(e) >= 35 && t.dragOffset.time < 350 ? (this.option('hideClass') && (this.getSlide().hideClass = 'fancybox-throwOut' + (t.content.y < 0 ? 'Up' : 'Down')), this.close()) : 'y' === t.lockAxis && t.panTo({ y: 0, })
        }

        onTransform(t) {
          if (this.$backdrop) {
            const e = Math.abs(t.content.y),
              i = e < 1 ? '' : Math.max(.33, Math.min(1, 1 - e / t.content.fitHeight * 1.5))
            this.$container.style.setProperty('--fancybox-ts', i ? '0s' : ''), this.$container.style.setProperty('--fancybox-opacity', i)
          }
        }


        onMousedown() {
          'ready' === this.state && document.body.classList.add('is-using-mouse')
        }

        onKeydown(t) {
          if (F.getInstance().id !== this.id) return
          document.body.classList.remove('is-using-mouse')
          const e = t.key, i = this.option('keyboard')
          if (!i || t.ctrlKey || t.altKey || t.shiftKey) return
          const s = t.composedPath()[0], o = document.activeElement && document.activeElement.classList,
            n = o && o.contains('carousel__button')
          if ('Escape' !== e && !n) {
            if (t.target.isContentEditable || -1 !== [
              'BUTTON',
              'TEXTAREA',
              'OPTION',
              'INPUT',
              'SELECT',
              'VIDEO',
            ].indexOf(s.nodeName)) return
          }
          if (!1 === this.trigger('keydown', e, t)) return
          const a = i[e]
          'function' == typeof this[a] && this[a]()
        }

        getSlide() {
          const t = this.Carousel
          if (!t) return null
          const e = null === t.page ? t.option('initialPage') : t.page, i = t.pages || []
          return i.length && i[e] ? i[e].slides[0] : null
        }

        focus(t) {
          if (F.ignoreFocusChange) return
          if ([
            'init',
            'closing',
            'customClosing',
            'destroy',
          ].indexOf(this.state) > -1) return
          const e = this.$container, i = this.getSlide(), s = 'done' === i.state ? i.$el : null
          if (s && s.contains(document.activeElement)) return
          t && t.preventDefault(), F.ignoreFocusChange = !0
          const o = Array.from(e.querySelectorAll(x))
          let n, a = []
          for (const t of o) {
            const e = t.offsetParent, i = s && s.contains(t), o = !this.Carousel.$viewport.contains(t)
            e && (i || o) ? (a.push(t), void 0 !== t.dataset.origTabindex && (t.tabIndex = t.dataset.origTabindex, t.removeAttribute('data-orig-tabindex')), (t.hasAttribute('autoFocus') || !n && i && !t.classList.contains('carousel__button')) && (n = t)) : (t.dataset.origTabindex = void 0 === t.dataset.origTabindex ? t.getAttribute('tabindex') : t.dataset.origTabindex, t.tabIndex = -1)
          }
          t ? a.indexOf(t.target) > -1 ? this.lastFocus = t.target : this.lastFocus === e ? w(a[a.length - 1]) : w(e) : this.option('autoFocus') && n ? w(n) : a.indexOf(document.activeElement) < 0 && w(e), this.lastFocus = document.activeElement, F.ignoreFocusChange = !1
        }

        hideScrollbar() {
          if (!v) return
          const t = window.innerWidth - document.documentElement.getBoundingClientRect().width,
            e = 'fancybox-style-noscroll'
          let i = document.getElementById(e)
          i || t > 0 && (i = document.createElement('style'), i.id = e, i.type = 'text/css', i.innerHTML = `.compensate-for-scrollbar {padding-right: ${ t }px;}`, document.getElementsByTagName('head')[0].appendChild(i), document.body.classList.add('compensate-for-scrollbar'))
        }

        revealScrollbar() {
          document.body.classList.remove('compensate-for-scrollbar')
          const t = document.getElementById('fancybox-style-noscroll')
          t && t.remove()
        }

        clearContent(t) {
          this.Carousel.trigger('removeSlide', t), t.$content && (t.$content.remove(), t.$content = null), t.$closeButton && (t.$closeButton.remove(), t.$closeButton = null), t._className && t.$el.classList.remove(t._className)
        }

        setContent(t, e, i = {}) {
          let s
          const o = t.$el
          if (e instanceof HTMLElement) [
            'img',
            'iframe',
            'video',
            'audio',
          ].indexOf(e.nodeName.toLowerCase()) > -1 ? (s = document.createElement('div'), s.appendChild(e)) : s = e; else {
            const t = document.createRange().createContextualFragment(e)
            s = document.createElement('div'), s.appendChild(t)
          }
          if (t.filter && !t.error && (s = s.querySelector(t.filter)), s instanceof Element) return t._className = `has-${ i.suffix || t.type || 'unknown' }`, o.classList.add(t._className), s.classList.add('fancybox__content'), 'none' !== s.style.display && 'none' !== getComputedStyle(s).getPropertyValue('display') || (s.style.display = t.display || this.option('defaultDisplay') || 'flex'), t.id && s.setAttribute('id', t.id), t.$content = s, o.prepend(s), this.manageCloseButton(t), 'loading' !== t.state && this.revealContent(t), s
          this.setError(t, '{{ELEMENT_NOT_FOUND}}')
        }

        manageCloseButton(t) {
          const e = void 0 === t.closeButton ? this.option('closeButton') : t.closeButton
          if (!e || 'top' === e && this.$closeButton) return
          const i = document.createElement('button')
          i.classList.add('carousel__button', 'is-close'), i.setAttribute('title', this.options.l10n.CLOSE), i.innerHTML = this.option('template.closeButton'), i.addEventListener('click', (t => this.close(t))), 'inside' === e ? (t.$closeButton && t.$closeButton.remove(), t.$closeButton = t.$content.appendChild(i)) : this.$closeButton = this.$container.insertBefore(i, this.$container.firstChild)
        }

        revealContent(t) {
          this.trigger('reveal', t), t.$content.style.visibility = ''
          let e = !1
          t.error || 'loading' === t.state || null !== this.Carousel.prevPage || t.index !== this.options.startIndex || (e = void 0 === t.showClass ? this.option('showClass') : t.showClass), e ? (t.state = 'animating', this.animateCSS(t.$content, e, (() => {
            this.done(t)
          }))) : this.done(t)
        }

        animateCSS(t, e, i) {
          if (t && t.dispatchEvent(new CustomEvent('animationend', {
            bubbles: !0,
            cancelable: !0,
          })), !t || !e) return void ('function' == typeof i && i())
          const s = function (o) {
            o.currentTarget === this && (t.removeEventListener('animationend', s), i && i(), t.classList.remove(e))
          }
          t.addEventListener('animationend', s), t.classList.add(e)
        }

        done(t) {
          t.state = 'done', this.trigger('done', t)
          const e = this.getSlide()
          e && t.index === e.index && this.option('autoFocus') && this.focus()
        }

        setError(t, e) {
          t.error = e, this.hideLoading(t), this.clearContent(t)
          const i = document.createElement('div')
          i.classList.add('fancybox-error'), i.innerHTML = this.localize(e || '<p>{{ERROR}}</p>'), this.setContent(t, i, { suffix: 'error', })
        }

        showLoading(t) {
          t.state = 'loading', t.$el.classList.add('is-loading')
          let e = t.$el.querySelector('.fancybox__spinner')
          e || (e = document.createElement('div'), e.classList.add('fancybox__spinner'), e.innerHTML = this.option('template.spinner'), e.addEventListener('click', (() => {
            this.Carousel.Panzoom.velocity || this.close()
          })), t.$el.prepend(e))
        }

        hideLoading(t) {
          const e = t.$el && t.$el.querySelector('.fancybox__spinner')
          e && (e.remove(), t.$el.classList.remove('is-loading')), 'loading' === t.state && (this.trigger('load', t), t.state = 'ready')
        }

        next() {
          const t = this.Carousel
          t && t.pages.length > 1 && t.slideNext()
        }

        prev() {
          const t = this.Carousel
          t && t.pages.length > 1 && t.slidePrev()
        }

        jumpTo(...t) {
          this.Carousel && this.Carousel.slideTo(...t)
        }

        close(t) {
          if (t && t.preventDefault(), [
            'closing',
            'customClosing',
            'destroy',
          ].includes(this.state)) return
          if (!1 === this.trigger('shouldClose', t)) return
          if (this.state = 'closing', this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger('closing', t), 'destroy' === this.state) return
          this.$container.setAttribute('aria-hidden', 'true'), this.$container.classList.add('is-closing')
          const e = this.getSlide()
          if (this.Carousel.slides.forEach((t => {
            t.$content && t.index !== e.index && this.Carousel.trigger('removeSlide', t)
          })), 'closing' === this.state) {
            const t = void 0 === e.hideClass ? this.option('hideClass') : e.hideClass
            this.animateCSS(e.$content, t, (() => {
              this.destroy()
            }), !0)
          }
        }

        destroy() {
          if ('destroy' === this.state) return
          this.state = 'destroy', this.trigger('destroy')
          const t = this.option('placeFocusBack') ? this.getSlide().$trigger : null
          this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, t && w(t), M.delete(this.id)
          const e = F.getInstance()
          e ? e.focus() : (document.documentElement.classList.remove('with-fancybox'), document.body.classList.remove('is-using-mouse'), this.revealScrollbar())
        }
      }

      F.version = '4.0.27', F.defaults = O, F.openers = new Map, F.Plugins = k, F.bind('[data-fancybox]')
      for (const [ t, e, ] of Object.entries(F.Plugins || {})) 'function' == typeof e.create && e.create(F)


      /***/
    }),
    /* 5 */
    /***/
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */   'default': function () {
          return /* binding */ PseudoSelect
        },
        /* harmony export */
      })


      // Создаем класс для псевдо селекта
      class PseudoSelect {
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


      /***/
    }),
    /* 6 */
    /***/ (function (__unused_webpack_module, exports, __webpack_require__) {

      (function (global, factory) {
        true
          ? factory(exports)
          : 0
      })(this, function (exports) {
        'use strict'

        const commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {}

        const check = function (it) {
          return it && it.Math == Math && it
        } // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028

        const global$p = // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == 'object' && globalThis) ||
      check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == 'object' && self) ||
      check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
      (function () {
        return this
      })() ||
      Function('return this')()

        const objectGetOwnPropertyDescriptor = {}

        const fails$8 = function (exec) {
          try {
            return !!exec()
          } catch (error) {
            return true
          }
        }

        const fails$7 = fails$8 // Detect IE8's incomplete defineProperty implementation

        const descriptors = !fails$7(function () {
          // eslint-disable-next-line es/no-object-defineproperty -- required for testing
          return (
            Object.defineProperty({}, 1, {
              get: function () {
                return 7
              },
            })[1] != 7
          )
        })

        const fails$6 = fails$8

        const functionBindNative = !fails$6(function () {
          const test = function () {
            /* empty */
          }.bind() // eslint-disable-next-line no-prototype-builtins -- safe

          return typeof test != 'function' || test.hasOwnProperty('prototype')
        })

        const NATIVE_BIND$1 = functionBindNative

        const call$5 = Function.prototype.call
        const functionCall = NATIVE_BIND$1
          ? call$5.bind(call$5)
          : function () {
            return call$5.apply(call$5, arguments)
          }

        const objectPropertyIsEnumerable = {}

        const $propertyIsEnumerable = {}.propertyIsEnumerable // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

        const getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor // Nashorn ~ JDK8 bug

        const NASHORN_BUG =
      getOwnPropertyDescriptor$1 &&
      !$propertyIsEnumerable.call(
        { 1: 2, },
        1
      ) // `Object.prototype.propertyIsEnumerable` method implementation
        // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

        objectPropertyIsEnumerable.f = NASHORN_BUG
          ? function propertyIsEnumerable(V) {
            const descriptor = getOwnPropertyDescriptor$1(this, V)
            return !!descriptor && descriptor.enumerable
          }
          : $propertyIsEnumerable

        const createPropertyDescriptor$2 = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value,
          }
        }

        const NATIVE_BIND = functionBindNative

        const FunctionPrototype$1 = Function.prototype
        const bind = FunctionPrototype$1.bind
        const call$4 = FunctionPrototype$1.call
        const uncurryThis$b = NATIVE_BIND && bind.bind(call$4, call$4)
        const functionUncurryThis = NATIVE_BIND
          ? function (fn) {
            return fn && uncurryThis$b(fn)
          }
          : function (fn) {
            return (
              fn &&
          function () {
            return call$4.apply(fn, arguments)
          }
            )
          }

        const uncurryThis$a = functionUncurryThis

        const toString$4 = uncurryThis$a({}.toString)
        const stringSlice$1 = uncurryThis$a(''.slice)

        const classofRaw$1 = function (it) {
          return stringSlice$1(toString$4(it), 8, -1)
        }

        const global$o = global$p

        const uncurryThis$9 = functionUncurryThis

        const fails$5 = fails$8

        const classof$2 = classofRaw$1

        const Object$4 = global$o.Object
        const split = uncurryThis$9(''.split) // fallback for non-array-like ES3 and non-enumerable old V8 strings

        const indexedObject = fails$5(function () {
          // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
          // eslint-disable-next-line no-prototype-builtins -- safe
          return !Object$4('z').propertyIsEnumerable(0)
        })
          ? function (it) {
            return classof$2(it) == 'String' ? split(it, '') : Object$4(it)
          }
          : Object$4

        const global$n = global$p

        const TypeError$7 = global$n.TypeError // `RequireObjectCoercible` abstract operation
        // https://tc39.es/ecma262/#sec-requireobjectcoercible

        const requireObjectCoercible$4 = function (it) {
          if (it == undefined) throw TypeError$7('Can\'t call method on ' + it)
          return it
        }

        // toObject with fallback for non-array-like ES3 strings
        const IndexedObject$1 = indexedObject

        const requireObjectCoercible$3 = requireObjectCoercible$4

        const toIndexedObject$3 = function (it) {
          return IndexedObject$1(requireObjectCoercible$3(it))
        }

        // `IsCallable` abstract operation
        // https://tc39.es/ecma262/#sec-iscallable
        const isCallable$a = function (argument) {
          return typeof argument == 'function'
        }

        const isCallable$9 = isCallable$a

        const isObject$5 = function (it) {
          return typeof it == 'object' ? it !== null : isCallable$9(it)
        }

        const global$m = global$p

        const isCallable$8 = isCallable$a

        const aFunction = function (argument) {
          return isCallable$8(argument) ? argument : undefined
        }

        const getBuiltIn$3 = function (namespace, method) {
          return arguments.length < 2 ? aFunction(global$m[namespace]) : global$m[namespace] && global$m[namespace][method]
        }

        const uncurryThis$8 = functionUncurryThis

        const objectIsPrototypeOf = uncurryThis$8({}.isPrototypeOf)

        const getBuiltIn$2 = getBuiltIn$3

        const engineUserAgent = getBuiltIn$2('navigator', 'userAgent') || ''

        const global$l = global$p

        const userAgent$1 = engineUserAgent

        const process = global$l.process
        const Deno = global$l.Deno
        const versions = (process && process.versions) || (Deno && Deno.version)
        const v8 = versions && versions.v8
        let match, version

        if (v8) {
          match = v8.split('.') // in old Chrome, versions of V8 isn't V8 = Chrome / 10
          // but their correct versions are not interesting for us

          version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1])
        } // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
        // so check `userAgent` even if `.v8` exists, but 0

        if (!version && userAgent$1) {
          match = userAgent$1.match(/Edge\/(\d+)/)

          if (!match || match[1] >= 74) {
            match = userAgent$1.match(/Chrome\/(\d+)/)
            if (match) version = +match[1]
          }
        }

        const engineV8Version = version

        /* eslint-disable es/no-symbol -- required for testing */

        const V8_VERSION = engineV8Version

        const fails$4 = fails$8 // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

        const nativeSymbol =
      !!Object.getOwnPropertySymbols &&
      !fails$4(function () {
        const symbol = Symbol() // Chrome 38 Symbol has incorrect toString conversion
        // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

        return (
          !String(symbol) ||
          !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
          (!Symbol.sham && V8_VERSION && V8_VERSION < 41)
        )
      })

        /* eslint-disable es/no-symbol -- required for testing */

        const NATIVE_SYMBOL$1 = nativeSymbol

        const useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol'

        const global$k = global$p

        const getBuiltIn$1 = getBuiltIn$3

        const isCallable$7 = isCallable$a

        const isPrototypeOf = objectIsPrototypeOf

        const USE_SYMBOL_AS_UID$1 = useSymbolAsUid

        const Object$3 = global$k.Object
        const isSymbol$2 = USE_SYMBOL_AS_UID$1
          ? function (it) {
            return typeof it == 'symbol'
          }
          : function (it) {
            const $Symbol = getBuiltIn$1('Symbol')
            return isCallable$7($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it))
          }

        const global$j = global$p

        const String$3 = global$j.String

        const tryToString$1 = function (argument) {
          try {
            return String$3(argument)
          } catch (error) {
            return 'Object'
          }
        }

        const global$i = global$p

        const isCallable$6 = isCallable$a

        const tryToString = tryToString$1

        const TypeError$6 = global$i.TypeError // `Assert: IsCallable(argument) is true`

        const aCallable$1 = function (argument) {
          if (isCallable$6(argument)) return argument
          throw TypeError$6(tryToString(argument) + ' is not a function')
        }

        const aCallable = aCallable$1 // `GetMethod` abstract operation
        // https://tc39.es/ecma262/#sec-getmethod

        const getMethod$1 = function (V, P) {
          const func = V[P]
          return func == null ? undefined : aCallable(func)
        }

        const global$h = global$p

        const call$3 = functionCall

        const isCallable$5 = isCallable$a

        const isObject$4 = isObject$5

        const TypeError$5 = global$h.TypeError // `OrdinaryToPrimitive` abstract operation
        // https://tc39.es/ecma262/#sec-ordinarytoprimitive

        const ordinaryToPrimitive$1 = function (input, pref) {
          let fn, val
          if (pref === 'string' && isCallable$5((fn = input.toString)) && !isObject$4((val = call$3(fn, input)))) return val
          if (isCallable$5((fn = input.valueOf)) && !isObject$4((val = call$3(fn, input)))) return val
          if (pref !== 'string' && isCallable$5((fn = input.toString)) && !isObject$4((val = call$3(fn, input)))) return val
          throw TypeError$5('Can\'t convert object to primitive value')
        }

        const shared$3 = { exports: {}, }

        const global$g = global$p // eslint-disable-next-line es/no-object-defineproperty -- safe

        const defineProperty$1 = Object.defineProperty

        const setGlobal$3 = function (key, value) {
          try {
            defineProperty$1(global$g, key, {
              value: value,
              configurable: true,
              writable: true,
            })
          } catch (error) {
            global$g[key] = value
          }

          return value
        }

        const global$f = global$p

        const setGlobal$2 = setGlobal$3

        const SHARED = '__core-js_shared__'
        const store$3 = global$f[SHARED] || setGlobal$2(SHARED, {})
        const sharedStore = store$3

        const store$2 = sharedStore;

        (shared$3.exports = function (key, value) {
          return store$2[key] || (store$2[key] = value !== undefined ? value : {})
        })('versions', []).push({
          version: '3.21.0',
          mode: 'global',
          copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
          license: 'https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE',
          source: 'https://github.com/zloirock/core-js',
        })

        const global$e = global$p

        const requireObjectCoercible$2 = requireObjectCoercible$4

        const Object$2 = global$e.Object // `ToObject` abstract operation
        // https://tc39.es/ecma262/#sec-toobject

        const toObject$2 = function (argument) {
          return Object$2(requireObjectCoercible$2(argument))
        }

        const uncurryThis$7 = functionUncurryThis

        const toObject$1 = toObject$2

        const hasOwnProperty = uncurryThis$7({}.hasOwnProperty) // `HasOwnProperty` abstract operation
        // https://tc39.es/ecma262/#sec-hasownproperty

        const hasOwnProperty_1 =
      Object.hasOwn ||
      function hasOwn(it, key) {
        return hasOwnProperty(toObject$1(it), key)
      }

        const uncurryThis$6 = functionUncurryThis

        let id = 0
        const postfix = Math.random()
        const toString$3 = uncurryThis$6((1.0).toString)

        const uid$2 = function (key) {
          return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$3(++id + postfix, 36)
        }

        const global$d = global$p

        const shared$2 = shared$3.exports

        const hasOwn$6 = hasOwnProperty_1

        const uid$1 = uid$2

        const NATIVE_SYMBOL = nativeSymbol

        const USE_SYMBOL_AS_UID = useSymbolAsUid

        const WellKnownSymbolsStore = shared$2('wks')
        const Symbol$1 = global$d.Symbol
        const symbolFor = Symbol$1 && Symbol$1['for']
        const createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : (Symbol$1 && Symbol$1.withoutSetter) || uid$1

        const wellKnownSymbol$3 = function (name) {
          if (!hasOwn$6(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
            const description = 'Symbol.' + name

            if (NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)) {
              WellKnownSymbolsStore[name] = Symbol$1[name]
            } else if (USE_SYMBOL_AS_UID && symbolFor) {
              WellKnownSymbolsStore[name] = symbolFor(description)
            } else {
              WellKnownSymbolsStore[name] = createWellKnownSymbol(description)
            }
          }

          return WellKnownSymbolsStore[name]
        }

        const global$c = global$p

        const call$2 = functionCall

        const isObject$3 = isObject$5

        const isSymbol$1 = isSymbol$2

        const getMethod = getMethod$1

        const ordinaryToPrimitive = ordinaryToPrimitive$1

        const wellKnownSymbol$2 = wellKnownSymbol$3

        const TypeError$4 = global$c.TypeError
        const TO_PRIMITIVE = wellKnownSymbol$2('toPrimitive') // `ToPrimitive` abstract operation
        // https://tc39.es/ecma262/#sec-toprimitive

        const toPrimitive$1 = function (input, pref) {
          if (!isObject$3(input) || isSymbol$1(input)) return input
          const exoticToPrim = getMethod(input, TO_PRIMITIVE)
          let result

          if (exoticToPrim) {
            if (pref === undefined) pref = 'default'
            result = call$2(exoticToPrim, input, pref)
            if (!isObject$3(result) || isSymbol$1(result)) return result
            throw TypeError$4('Can\'t convert object to primitive value')
          }

          if (pref === undefined) pref = 'number'
          return ordinaryToPrimitive(input, pref)
        }

        const toPrimitive = toPrimitive$1

        const isSymbol = isSymbol$2 // `ToPropertyKey` abstract operation
        // https://tc39.es/ecma262/#sec-topropertykey

        const toPropertyKey$2 = function (argument) {
          const key = toPrimitive(argument, 'string')
          return isSymbol(key) ? key : key + ''
        }

        const global$b = global$p

        const isObject$2 = isObject$5

        const document$1 = global$b.document // typeof document.createElement is 'object' in old IE

        const EXISTS$1 = isObject$2(document$1) && isObject$2(document$1.createElement)

        const documentCreateElement = function (it) {
          return EXISTS$1 ? document$1.createElement(it) : {}
        }

        const DESCRIPTORS$6 = descriptors

        const fails$3 = fails$8

        const createElement = documentCreateElement // Thanks to IE8 for its funny defineProperty

        const ie8DomDefine =
      !DESCRIPTORS$6 &&
      !fails$3(function () {
        // eslint-disable-next-line es/no-object-defineproperty -- required for testing
        return (
          Object.defineProperty(createElement('div'), 'a', {
            get: function () {
              return 7
            },
          }).a != 7
        )
      })

        const DESCRIPTORS$5 = descriptors

        const call$1 = functionCall

        const propertyIsEnumerableModule$1 = objectPropertyIsEnumerable

        const createPropertyDescriptor$1 = createPropertyDescriptor$2

        const toIndexedObject$2 = toIndexedObject$3

        const toPropertyKey$1 = toPropertyKey$2

        const hasOwn$5 = hasOwnProperty_1

        const IE8_DOM_DEFINE$1 = ie8DomDefine // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

        const $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor // `Object.getOwnPropertyDescriptor` method
        // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

        objectGetOwnPropertyDescriptor.f = DESCRIPTORS$5
          ? $getOwnPropertyDescriptor$1
          : function getOwnPropertyDescriptor(O, P) {
            O = toIndexedObject$2(O)
            P = toPropertyKey$1(P)
            if (IE8_DOM_DEFINE$1)
              try {
                return $getOwnPropertyDescriptor$1(O, P)
              } catch (error) {
                /* empty */
              }
            if (hasOwn$5(O, P)) return createPropertyDescriptor$1(!call$1(propertyIsEnumerableModule$1.f, O, P), O[P])
          }

        const objectDefineProperty = {}

        const DESCRIPTORS$4 = descriptors

        const fails$2 = fails$8 // V8 ~ Chrome 36-
        // https://bugs.chromium.org/p/v8/issues/detail?id=3334

        const v8PrototypeDefineBug =
      DESCRIPTORS$4 &&
      fails$2(function () {
        // eslint-disable-next-line es/no-object-defineproperty -- required for testing
        return (
          Object.defineProperty(
            function () {
              /* empty */
            },
            'prototype',
            {
              value: 42,
              writable: false,
            }
          ).prototype != 42
        )
      })

        const global$a = global$p

        const isObject$1 = isObject$5

        const String$2 = global$a.String
        const TypeError$3 = global$a.TypeError // `Assert: Type(argument) is Object`

        const anObject$2 = function (argument) {
          if (isObject$1(argument)) return argument
          throw TypeError$3(String$2(argument) + ' is not an object')
        }

        const global$9 = global$p

        const DESCRIPTORS$3 = descriptors

        const IE8_DOM_DEFINE = ie8DomDefine

        const V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug

        const anObject$1 = anObject$2

        const toPropertyKey = toPropertyKey$2

        const TypeError$2 = global$9.TypeError // eslint-disable-next-line es/no-object-defineproperty -- safe

        const $defineProperty = Object.defineProperty // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

        const $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
        const ENUMERABLE = 'enumerable'
        const CONFIGURABLE$1 = 'configurable'
        const WRITABLE = 'writable' // `Object.defineProperty` method
        // https://tc39.es/ecma262/#sec-object.defineproperty

        objectDefineProperty.f = DESCRIPTORS$3
          ? V8_PROTOTYPE_DEFINE_BUG
            ? function defineProperty(O, P, Attributes) {
              anObject$1(O)
              P = toPropertyKey(P)
              anObject$1(Attributes)

              if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
                const current = $getOwnPropertyDescriptor(O, P)

                if (current && current[WRITABLE]) {
                  O[P] = Attributes.value
                  Attributes = {
                    configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
                    enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                    writable: false,
                  }
                }
              }

              return $defineProperty(O, P, Attributes)
            }
            : $defineProperty
          : function defineProperty(O, P, Attributes) {
            anObject$1(O)
            P = toPropertyKey(P)
            anObject$1(Attributes)
            if (IE8_DOM_DEFINE)
              try {
                return $defineProperty(O, P, Attributes)
              } catch (error) {
                /* empty */
              }
            if ('get' in Attributes || 'set' in Attributes) throw TypeError$2('Accessors not supported')
            if ('value' in Attributes) O[P] = Attributes.value
            return O
          }

        const DESCRIPTORS$2 = descriptors

        const definePropertyModule$1 = objectDefineProperty

        const createPropertyDescriptor = createPropertyDescriptor$2

        const createNonEnumerableProperty$3 = DESCRIPTORS$2
          ? function (object, key, value) {
            return definePropertyModule$1.f(object, key, createPropertyDescriptor(1, value))
          }
          : function (object, key, value) {
            object[key] = value
            return object
          }

        const redefine$1 = { exports: {}, }

        const uncurryThis$5 = functionUncurryThis

        const isCallable$4 = isCallable$a

        const store$1 = sharedStore

        const functionToString = uncurryThis$5(Function.toString) // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

        if (!isCallable$4(store$1.inspectSource)) {
          store$1.inspectSource = function (it) {
            return functionToString(it)
          }
        }

        const inspectSource$2 = store$1.inspectSource

        const global$8 = global$p

        const isCallable$3 = isCallable$a

        const inspectSource$1 = inspectSource$2

        const WeakMap$1 = global$8.WeakMap
        const nativeWeakMap = isCallable$3(WeakMap$1) && /native code/.test(inspectSource$1(WeakMap$1))

        const shared$1 = shared$3.exports

        const uid = uid$2

        const keys = shared$1('keys')

        const sharedKey$1 = function (key) {
          return keys[key] || (keys[key] = uid(key))
        }

        const hiddenKeys$3 = {}

        const NATIVE_WEAK_MAP = nativeWeakMap

        const global$7 = global$p

        const uncurryThis$4 = functionUncurryThis

        const isObject = isObject$5

        const createNonEnumerableProperty$2 = createNonEnumerableProperty$3

        const hasOwn$4 = hasOwnProperty_1

        const shared = sharedStore

        const sharedKey = sharedKey$1

        const hiddenKeys$2 = hiddenKeys$3

        const OBJECT_ALREADY_INITIALIZED = 'Object already initialized'
        const TypeError$1 = global$7.TypeError
        const WeakMap = global$7.WeakMap
        let set$1, get, has

        const enforce = function (it) {
          return has(it) ? get(it) : set$1(it, {})
        }

        const getterFor = function (TYPE) {
          return function (it) {
            let state

            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw TypeError$1('Incompatible receiver, ' + TYPE + ' required')
            }

            return state
          }
        }

        if (NATIVE_WEAK_MAP || shared.state) {
          const store = shared.state || (shared.state = new WeakMap())
          const wmget = uncurryThis$4(store.get)
          const wmhas = uncurryThis$4(store.has)
          const wmset = uncurryThis$4(store.set)

          set$1 = function (it, metadata) {
            if (wmhas(store, it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED)
            metadata.facade = it
            wmset(store, it, metadata)
            return metadata
          }

          get = function (it) {
            return wmget(store, it) || {}
          }

          has = function (it) {
            return wmhas(store, it)
          }
        } else {
          const STATE = sharedKey('state')
          hiddenKeys$2[STATE] = true

          set$1 = function (it, metadata) {
            if (hasOwn$4(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED)
            metadata.facade = it
            createNonEnumerableProperty$2(it, STATE, metadata)
            return metadata
          }

          get = function (it) {
            return hasOwn$4(it, STATE) ? it[STATE] : {}
          }

          has = function (it) {
            return hasOwn$4(it, STATE)
          }
        }

        const internalState = {
          set: set$1,
          get: get,
          has: has,
          enforce: enforce,
          getterFor: getterFor,
        }

        const DESCRIPTORS$1 = descriptors

        const hasOwn$3 = hasOwnProperty_1

        const FunctionPrototype = Function.prototype // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

        const getDescriptor = DESCRIPTORS$1 && Object.getOwnPropertyDescriptor
        const EXISTS = hasOwn$3(FunctionPrototype, 'name') // additional protection from minified / mangled / dropped function names

        const PROPER =
      EXISTS &&
      function something() {
        /* empty */
      }.name === 'something'

        const CONFIGURABLE = EXISTS && (!DESCRIPTORS$1 || (DESCRIPTORS$1 && getDescriptor(FunctionPrototype, 'name').configurable))
        const functionName = {
          EXISTS: EXISTS,
          PROPER: PROPER,
          CONFIGURABLE: CONFIGURABLE,
        }

        const global$6 = global$p

        const isCallable$2 = isCallable$a

        const hasOwn$2 = hasOwnProperty_1

        const createNonEnumerableProperty$1 = createNonEnumerableProperty$3

        const setGlobal$1 = setGlobal$3

        const inspectSource = inspectSource$2

        const InternalStateModule = internalState

        const CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE

        const getInternalState = InternalStateModule.get
        const enforceInternalState = InternalStateModule.enforce
        const TEMPLATE = String(String).split('String');
        (redefine$1.exports = function (O, key, value, options) {
          const unsafe = options ? !!options.unsafe : false
          let simple = options ? !!options.enumerable : false
          const noTargetGet = options ? !!options.noTargetGet : false
          let name = options && options.name !== undefined ? options.name : key
          let state

          if (isCallable$2(value)) {
            if (String(name).slice(0, 7) === 'Symbol(') {
              name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'
            }

            if (!hasOwn$2(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
              createNonEnumerableProperty$1(value, 'name', name)
            }

            state = enforceInternalState(value)

            if (!state.source) {
              state.source = TEMPLATE.join(typeof name == 'string' ? name : '')
            }
          }

          if (O === global$6) {
            if (simple) O[key] = value
            else setGlobal$1(key, value)
            return
          } else if (!unsafe) {
            delete O[key]
          } else if (!noTargetGet && O[key]) {
            simple = true
          }

          if (simple) O[key] = value
          else createNonEnumerableProperty$1(O, key, value) // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, 'toString', function toString() {
          return (isCallable$2(this) && getInternalState(this).source) || inspectSource(this)
        })

        const objectGetOwnPropertyNames = {}

        const ceil$1 = Math.ceil
        const floor = Math.floor // `ToIntegerOrInfinity` abstract operation
        // https://tc39.es/ecma262/#sec-tointegerorinfinity

        const toIntegerOrInfinity$3 = function (argument) {
          const number = +argument // eslint-disable-next-line no-self-compare -- safe

          return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil$1)(number)
        }

        const toIntegerOrInfinity$2 = toIntegerOrInfinity$3

        const max = Math.max
        const min$1 = Math.min // Helper for a popular repeating case of the spec:
        // Let integer be ? ToInteger(index).
        // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

        const toAbsoluteIndex$1 = function (index, length) {
          const integer = toIntegerOrInfinity$2(index)
          return integer < 0 ? max(integer + length, 0) : min$1(integer, length)
        }

        const toIntegerOrInfinity$1 = toIntegerOrInfinity$3

        const min = Math.min // `ToLength` abstract operation
        // https://tc39.es/ecma262/#sec-tolength

        const toLength$2 = function (argument) {
          return argument > 0 ? min(toIntegerOrInfinity$1(argument), 0x1fffffffffffff) : 0 // 2 ** 53 - 1 == 9007199254740991
        }

        const toLength$1 = toLength$2 // `LengthOfArrayLike` abstract operation
        // https://tc39.es/ecma262/#sec-lengthofarraylike

        const lengthOfArrayLike$1 = function (obj) {
          return toLength$1(obj.length)
        }

        const toIndexedObject$1 = toIndexedObject$3

        const toAbsoluteIndex = toAbsoluteIndex$1

        const lengthOfArrayLike = lengthOfArrayLike$1 // `Array.prototype.{ indexOf, includes }` methods implementation

        const createMethod$1 = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            const O = toIndexedObject$1($this)
            const length = lengthOfArrayLike(O)
            let index = toAbsoluteIndex(fromIndex, length)
            let value // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare -- NaN check

            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++] // eslint-disable-next-line no-self-compare -- NaN check

                if (value != value) return true // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0
              }
            return !IS_INCLUDES && -1
          }
        }

        const arrayIncludes = {
          // `Array.prototype.includes` method
          // https://tc39.es/ecma262/#sec-array.prototype.includes
          includes: createMethod$1(true),
          // `Array.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod$1(false),
        }

        const uncurryThis$3 = functionUncurryThis

        const hasOwn$1 = hasOwnProperty_1

        const toIndexedObject = toIndexedObject$3

        const indexOf = arrayIncludes.indexOf

        const hiddenKeys$1 = hiddenKeys$3

        const push = uncurryThis$3([].push)

        const objectKeysInternal = function (object, names) {
          const O = toIndexedObject(object)
          let i = 0
          const result = []
          let key

          for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push(result, key) // Don't enum bug & hidden keys

          while (names.length > i)
            if (hasOwn$1(O, (key = names[i++]))) {
              ~indexOf(result, key) || push(result, key)
            }

          return result
        }

        // IE8- don't enum bug keys
        const enumBugKeys$2 = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ]

        const internalObjectKeys$1 = objectKeysInternal

        const enumBugKeys$1 = enumBugKeys$2

        const hiddenKeys = enumBugKeys$1.concat('length', 'prototype') // `Object.getOwnPropertyNames` method
        // https://tc39.es/ecma262/#sec-object.getownpropertynames
        // eslint-disable-next-line es/no-object-getownpropertynames -- safe

        objectGetOwnPropertyNames.f =
      Object.getOwnPropertyNames ||
      function getOwnPropertyNames(O) {
        return internalObjectKeys$1(O, hiddenKeys)
      }

        const objectGetOwnPropertySymbols = {}

        // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
        objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols

        const getBuiltIn = getBuiltIn$3

        const uncurryThis$2 = functionUncurryThis

        const getOwnPropertyNamesModule = objectGetOwnPropertyNames

        const getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols

        const anObject = anObject$2

        const concat$1 = uncurryThis$2([].concat) // all object keys, includes non-enumerable and symbols

        const ownKeys$1 =
      getBuiltIn('Reflect', 'ownKeys') ||
      function ownKeys(it) {
        const keys = getOwnPropertyNamesModule.f(anObject(it))
        const getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f
        return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys
      }

        const hasOwn = hasOwnProperty_1

        const ownKeys = ownKeys$1

        const getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor

        const definePropertyModule = objectDefineProperty

        const copyConstructorProperties$1 = function (target, source, exceptions) {
          const keys = ownKeys(source)
          const defineProperty = definePropertyModule.f
          const getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f

          for (let i = 0; i < keys.length; i++) {
            const key = keys[i]

            if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
              defineProperty(target, key, getOwnPropertyDescriptor(source, key))
            }
          }
        }

        const fails$1 = fails$8

        const isCallable$1 = isCallable$a

        const replacement = /#|\.prototype\./

        const isForced$1 = function (feature, detection) {
          const value = data[normalize(feature)]
          return value == POLYFILL ? true : value == NATIVE ? false : isCallable$1(detection) ? fails$1(detection) : !!detection
        }

        var normalize = (isForced$1.normalize = function (string) {
          return String(string).replace(replacement, '.').toLowerCase()
        })

        var data = (isForced$1.data = {})
        var NATIVE = (isForced$1.NATIVE = 'N')
        var POLYFILL = (isForced$1.POLYFILL = 'P')
        const isForced_1 = isForced$1

        const global$5 = global$p

        const getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f

        const createNonEnumerableProperty = createNonEnumerableProperty$3

        const redefine = redefine$1.exports

        const setGlobal = setGlobal$3

        const copyConstructorProperties = copyConstructorProperties$1

        const isForced = isForced_1
        /*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	  options.name        - the .name of the function if it does not match the key
	*/

        const _export = function (options, source) {
          const TARGET = options.target
          const GLOBAL = options.global
          const STATIC = options.stat
          let FORCED, target, key, targetProperty, sourceProperty, descriptor

          if (GLOBAL) {
            target = global$5
          } else if (STATIC) {
            target = global$5[TARGET] || setGlobal(TARGET, {})
          } else {
            target = (global$5[TARGET] || {}).prototype
          }

          if (target)
            for (key in source) {
              sourceProperty = source[key]

              if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(target, key)
                targetProperty = descriptor && descriptor.value
              } else targetProperty = target[key]

              FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced) // contained in target

              if (!FORCED && targetProperty !== undefined) {
                if (typeof sourceProperty == typeof targetProperty) continue
                copyConstructorProperties(sourceProperty, targetProperty)
              } // add a flag to not completely full polyfills

              if (options.sham || (targetProperty && targetProperty.sham)) {
                createNonEnumerableProperty(sourceProperty, 'sham', true)
              } // extend global

              redefine(target, key, sourceProperty, options)
            }
        }

        const internalObjectKeys = objectKeysInternal

        const enumBugKeys = enumBugKeys$2 // `Object.keys` method
        // https://tc39.es/ecma262/#sec-object.keys
        // eslint-disable-next-line es/no-object-keys -- safe

        const objectKeys$1 =
      Object.keys ||
      function keys(O) {
        return internalObjectKeys(O, enumBugKeys)
      }

        const DESCRIPTORS = descriptors

        const uncurryThis$1 = functionUncurryThis

        const call = functionCall

        const fails = fails$8

        const objectKeys = objectKeys$1

        const getOwnPropertySymbolsModule = objectGetOwnPropertySymbols

        const propertyIsEnumerableModule = objectPropertyIsEnumerable

        const toObject = toObject$2

        const IndexedObject = indexedObject // eslint-disable-next-line es/no-object-assign -- safe

        const $assign = Object.assign // eslint-disable-next-line es/no-object-defineproperty -- required for testing

        const defineProperty = Object.defineProperty
        const concat = uncurryThis$1([].concat) // `Object.assign` method
        // https://tc39.es/ecma262/#sec-object.assign

        const objectAssign =
      !$assign ||
      fails(function () {
        // should have correct order of operations (Edge bug)
        if (
          DESCRIPTORS &&
          $assign(
            { b: 1, },
            $assign(
              defineProperty({}, 'a', {
                enumerable: true,
                get: function () {
                  defineProperty(this, 'b', {
                    value: 3,
                    enumerable: false,
                  })
                },
              }),
              { b: 2, }
            )
          ).b !== 1
        )
          return true // should work with symbols and should have deterministic property order (V8 bug)

        const A = {}
        const B = {} // eslint-disable-next-line es/no-symbol -- safe

        const symbol = Symbol()
        const alphabet = 'abcdefghijklmnopqrst'
        A[symbol] = 7
        alphabet.split('').forEach(function (chr) {
          B[chr] = chr
        })
        return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet
      })
        ? function assign(target, source) {
          // eslint-disable-line no-unused-vars -- required for `.length`
          const T = toObject(target)
          const argumentsLength = arguments.length
          let index = 1
          const getOwnPropertySymbols = getOwnPropertySymbolsModule.f
          const propertyIsEnumerable = propertyIsEnumerableModule.f

          while (argumentsLength > index) {
            const S = IndexedObject(arguments[index++])
            const keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S)
            const length = keys.length
            let j = 0
            var key

            while (length > j) {
              key = keys[j++]
              if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key]
            }
          }

          return T
        }
        : $assign

        const $$4 = _export

        const assign = objectAssign // `Object.assign` method
        // https://tc39.es/ecma262/#sec-object.assign
        // eslint-disable-next-line es/no-object-assign -- required for testing

        $$4(
          {
            target: 'Object',
            stat: true,
            forced: Object.assign !== assign,
          },
          { assign: assign, }
        )

        const wellKnownSymbol$1 = wellKnownSymbol$3

        const TO_STRING_TAG$1 = wellKnownSymbol$1('toStringTag')
        const test = {}
        test[TO_STRING_TAG$1] = 'z'
        const toStringTagSupport = String(test) === '[object z]'

        const global$4 = global$p

        const TO_STRING_TAG_SUPPORT = toStringTagSupport

        const isCallable = isCallable$a

        const classofRaw = classofRaw$1

        const wellKnownSymbol = wellKnownSymbol$3

        const TO_STRING_TAG = wellKnownSymbol('toStringTag')
        const Object$1 = global$4.Object // ES3 wrong here

        const CORRECT_ARGUMENTS =
      classofRaw(
        (function () {
          return arguments
        })()
      ) == 'Arguments' // fallback for IE11 Script Access Denied error

        const tryGet = function (it, key) {
          try {
            return it[key]
          } catch (error) {
            /* empty */
          }
        } // getting tag from ES6+ `Object.prototype.toString`

        const classof$1 = TO_STRING_TAG_SUPPORT
          ? classofRaw
          : function (it) {
            let O, tag, result
            return it === undefined
              ? 'Undefined'
              : it === null
                ? 'Null' // @@toStringTag case
                : typeof (tag = tryGet((O = Object$1(it)), TO_STRING_TAG)) == 'string'
                  ? tag // builtinTag case
                  : CORRECT_ARGUMENTS
                    ? classofRaw(O) // ES3 arguments fallback
                    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee)
                      ? 'Arguments'
                      : result
          }

        const global$3 = global$p

        const classof = classof$1

        const String$1 = global$3.String

        const toString$2 = function (argument) {
          if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string')
          return String$1(argument)
        }

        const global$2 = global$p

        const toIntegerOrInfinity = toIntegerOrInfinity$3

        const toString$1 = toString$2

        const requireObjectCoercible$1 = requireObjectCoercible$4

        const RangeError = global$2.RangeError // `String.prototype.repeat` method implementation
        // https://tc39.es/ecma262/#sec-string.prototype.repeat

        const stringRepeat = function repeat(count) {
          let str = toString$1(requireObjectCoercible$1(this))
          let result = ''
          let n = toIntegerOrInfinity(count)
          if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions')

          for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str

          return result
        }

        const $$3 = _export

        const repeat$1 = stringRepeat // `String.prototype.repeat` method
        // https://tc39.es/ecma262/#sec-string.prototype.repeat

        $$3(
          {
            target: 'String',
            proto: true,
          },
          { repeat: repeat$1, }
        )

        // https://github.com/tc39/proposal-string-pad-start-end
        const uncurryThis = functionUncurryThis

        const toLength = toLength$2

        const toString = toString$2

        const $repeat = stringRepeat

        const requireObjectCoercible = requireObjectCoercible$4

        const repeat = uncurryThis($repeat)
        const stringSlice = uncurryThis(''.slice)
        const ceil = Math.ceil // `String.prototype.{ padStart, padEnd }` methods implementation

        const createMethod = function (IS_END) {
          return function ($this, maxLength, fillString) {
            const S = toString(requireObjectCoercible($this))
            const intMaxLength = toLength(maxLength)
            const stringLength = S.length
            const fillStr = fillString === undefined ? ' ' : toString(fillString)
            let fillLen, stringFiller
            if (intMaxLength <= stringLength || fillStr == '') return S
            fillLen = intMaxLength - stringLength
            stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length))
            if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen)
            return IS_END ? S + stringFiller : stringFiller + S
          }
        }

        const stringPad = {
          // `String.prototype.padStart` method
          // https://tc39.es/ecma262/#sec-string.prototype.padstart
          start: createMethod(false),
          // `String.prototype.padEnd` method
          // https://tc39.es/ecma262/#sec-string.prototype.padend
          end: createMethod(true),
        }

        // https://github.com/zloirock/core-js/issues/280
        const userAgent = engineUserAgent

        const stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent)

        const $$2 = _export

        const $padStart = stringPad.start

        const WEBKIT_BUG$1 = stringPadWebkitBug // `String.prototype.padStart` method
        // https://tc39.es/ecma262/#sec-string.prototype.padstart

        $$2(
          {
            target: 'String',
            proto: true,
            forced: WEBKIT_BUG$1,
          },
          {
            padStart: function padStart(
              maxLength
              /* , fillString = ' ' */
            ) {
              return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined)
            },
          }
        )

        const $$1 = _export

        const $padEnd = stringPad.end

        const WEBKIT_BUG = stringPadWebkitBug // `String.prototype.padEnd` method
        // https://tc39.es/ecma262/#sec-string.prototype.padend

        $$1(
          {
            target: 'String',
            proto: true,
            forced: WEBKIT_BUG,
          },
          {
            padEnd: function padEnd(
              maxLength
              /* , fillString = ' ' */
            ) {
              return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined)
            },
          }
        )

        const $ = _export

        const global$1 = global$p // `globalThis` object
        // https://tc39.es/ecma262/#sec-globalthis

        $(
          { global: true, },
          { globalThis: global$1, }
        )

        function _typeof(obj) {
          '@babel/helpers - typeof'

          return (
            (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (obj) {
              return typeof obj
            }
            : function (obj) {
              return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
            }),
            _typeof(obj)
          )
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _defineProperties(target, props) {
          for (let i = 0; i < props.length; i++) {
            const descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          Object.defineProperty(Constructor, 'prototype', { writable: false, })
          return Constructor
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            })
          } else {
            obj[key] = value
          }

          return obj
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function')
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true,
            },
          })
          Object.defineProperty(subClass, 'prototype', { writable: false, })
          if (superClass) _setPrototypeOf(subClass, superClass)
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o)
            }
          return _getPrototypeOf(o)
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(o, p) {
          o.__proto__ = p
          return o
        }

          return _setPrototypeOf(o, p)
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return false
          if (Reflect.construct.sham) return false
          if (typeof Proxy === 'function') return true

          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
            }))
            return true
          } catch (e) {
            return false
          }
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {}
          const target = {}
          const sourceKeys = Object.keys(source)
          let key, i

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i]
            if (excluded.indexOf(key) >= 0) continue
            target[key] = source[key]
          }

          return target
        }

        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {}

          const target = _objectWithoutPropertiesLoose(source, excluded)

          let key, i

          if (Object.getOwnPropertySymbols) {
            const sourceSymbolKeys = Object.getOwnPropertySymbols(source)

            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i]
              if (excluded.indexOf(key) >= 0) continue
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
              target[key] = source[key]
            }
          }

          return target
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
          }

          return self
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (typeof call === 'object' || typeof call === 'function')) {
            return call
          } else if (call !== void 0) {
            throw new TypeError('Derived constructors may only return object or undefined')
          }

          return _assertThisInitialized(self)
        }

        function _createSuper(Derived) {
          const hasNativeReflectConstruct = _isNativeReflectConstruct()

          return function _createSuperInternal() {
            let Super = _getPrototypeOf(Derived),
              result

            if (hasNativeReflectConstruct) {
              const NewTarget = _getPrototypeOf(this).constructor

              result = Reflect.construct(Super, arguments, NewTarget)
            } else {
              result = Super.apply(this, arguments)
            }

            return _possibleConstructorReturn(this, result)
          }
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object)
            if (object === null) break
          }

          return object
        }

        function _get() {
          if (typeof Reflect !== 'undefined' && Reflect.get) {
            _get = Reflect.get
          } else {
            _get = function _get(target, property, receiver) {
              const base = _superPropBase(target, property)

              if (!base) return
              const desc = Object.getOwnPropertyDescriptor(base, property)

              if (desc.get) {
                return desc.get.call(arguments.length < 3 ? target : receiver)
              }

              return desc.value
            }
          }

          return _get.apply(this, arguments)
        }

        function set(target, property, value, receiver) {
          if (typeof Reflect !== 'undefined' && Reflect.set) {
            set = Reflect.set
          } else {
            set = function set(target, property, value, receiver) {
              const base = _superPropBase(target, property)

              let desc

              if (base) {
                desc = Object.getOwnPropertyDescriptor(base, property)

                if (desc.set) {
                  desc.set.call(receiver, value)
                  return true
                } else if (!desc.writable) {
                  return false
                }
              }

              desc = Object.getOwnPropertyDescriptor(receiver, property)

              if (desc) {
                if (!desc.writable) {
                  return false
                }

                desc.value = value
                Object.defineProperty(receiver, property, desc)
              } else {
                _defineProperty(receiver, property, value)
              }

              return true
            }
          }

          return set(target, property, value, receiver)
        }

        function _set(target, property, value, receiver, isStrict) {
          const s = set(target, property, value, receiver || target)

          if (!s && isStrict) {
            throw new Error('failed to set property')
          }

          return value
        }

        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr
        }

        function _iterableToArrayLimit(arr, i) {
          let _i = arr == null ? null : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator']

          if (_i == null) return
          const _arr = []
          let _n = true
          let _d = false

          let _s, _e

          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value)

              if (i && _arr.length === i) break
            }
          } catch (err) {
            _d = true
            _e = err
          } finally {
            try {
              if (!_n && _i['return'] != null) _i['return']()
            } finally {
              if (_d) throw _e
            }
          }

          return _arr
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
          let n = Object.prototype.toString.call(o).slice(8, -1)
          if (n === 'Object' && o.constructor) n = o.constructor.name
          if (n === 'Map' || n === 'Set') return Array.from(o)
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length

          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]

          return arr2
        }

        function _nonIterableRest() {
          throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
        }

        /**
     Provides details of changing model value
     @param {Object} [details]
     @param {string} [details.inserted] - Inserted symbols
     @param {boolean} [details.skip] - Can skip chars
     @param {number} [details.removeCount] - Removed symbols count
     @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
     */
        const ChangeDetails = /*#__PURE__*/ (function () {
          /** Inserted symbols */

          /** Can skip chars */

          /** Additional offset if any changes occurred before tail */

          /** Raw inserted is used by dynamic mask */
          function ChangeDetails(details) {
            _classCallCheck(this, ChangeDetails)

            Object.assign(
              this,
              {
                inserted: '',
                rawInserted: '',
                skip: false,
                tailShift: 0,
              },
              details
            )
          }

          /**
       Aggregate changes
       @returns {ChangeDetails} `this`
       */

          _createClass(ChangeDetails, [
            {
              key: 'aggregate',
              value: function aggregate(details) {
                this.rawInserted += details.rawInserted
                this.skip = this.skip || details.skip
                this.inserted += details.inserted
                this.tailShift += details.tailShift
                return this
              },
              /** Total offset considering all changes */
            },
            {
              key: 'offset',
              get: function get() {
                return this.tailShift + this.inserted.length
              },
            },
          ])

          return ChangeDetails
        })()

        /** Checks if value is string */

        function isString(str) {
          return typeof str === 'string' || str instanceof String
        }

        /**
     Direction
     @prop {string} NONE
     @prop {string} LEFT
     @prop {string} FORCE_LEFT
     @prop {string} RIGHT
     @prop {string} FORCE_RIGHT
     */

        const DIRECTION = {
          NONE: 'NONE',
          LEFT: 'LEFT',
          FORCE_LEFT: 'FORCE_LEFT',
          RIGHT: 'RIGHT',
          FORCE_RIGHT: 'FORCE_RIGHT',
        }

        /** */

        function forceDirection(direction) {
          switch (direction) {
          case DIRECTION.LEFT:
            return DIRECTION.FORCE_LEFT

          case DIRECTION.RIGHT:
            return DIRECTION.FORCE_RIGHT

          default:
            return direction
          }
        }

        /** Escapes regular expression control chars */

        function escapeRegExp(str) {
          return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1')
        }

        function normalizePrepare(prep) {
          return Array.isArray(prep) ? prep : [
            prep,
            new ChangeDetails(),
          ]
        } // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

        function objectIncludes(b, a) {
          if (a === b) return true
          let arrA = Array.isArray(a),
            arrB = Array.isArray(b),
            i

          if (arrA && arrB) {
            if (a.length != b.length) return false

            for (i = 0; i < a.length; i++) {
              if (!objectIncludes(a[i], b[i])) return false
            }

            return true
          }

          if (arrA != arrB) return false

          if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
            const dateA = a instanceof Date,
              dateB = b instanceof Date
            if (dateA && dateB) return a.getTime() == b.getTime()
            if (dateA != dateB) return false
            const regexpA = a instanceof RegExp,
              regexpB = b instanceof RegExp
            if (regexpA && regexpB) return a.toString() == b.toString()
            if (regexpA != regexpB) return false
            const keys = Object.keys(a) // if (keys.length !== Object.keys(b).length) return false;

            for (i = 0; i < keys.length; i++) {
              // $FlowFixMe ... ???
              if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false
            }

            for (i = 0; i < keys.length; i++) {
              if (!objectIncludes(b[keys[i]], a[keys[i]])) return false
            }

            return true
          } else if (a && b && typeof a === 'function' && typeof b === 'function') {
            return a.toString() === b.toString()
          }

          return false
        }

        /** Selection range */

        /** Provides details of changing input */

        const ActionDetails = /*#__PURE__*/ (function () {
          /** Current input value */

          /** Current cursor position */

          /** Old input value */

          /** Old selection */
          function ActionDetails(value, cursorPos, oldValue, oldSelection) {
            _classCallCheck(this, ActionDetails)

            this.value = value
            this.cursorPos = cursorPos
            this.oldValue = oldValue
            this.oldSelection = oldSelection // double check if left part was changed (autofilling, other non-standard input triggers)

            while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
              --this.oldSelection.start
            }
          }

          /**
       Start changing position
       @readonly
       */

          _createClass(ActionDetails, [
            {
              key: 'startChangePos',
              get: function get() {
                return Math.min(this.cursorPos, this.oldSelection.start)
              },
              /**
           Inserted symbols count
           @readonly
           */
            },
            {
              key: 'insertedCount',
              get: function get() {
                return this.cursorPos - this.startChangePos
              },
              /**
           Inserted symbols
           @readonly
           */
            },
            {
              key: 'inserted',
              get: function get() {
                return this.value.substr(this.startChangePos, this.insertedCount)
              },
              /**
           Removed symbols count
           @readonly
           */
            },
            {
              key: 'removedCount',
              get: function get() {
                // Math.max for opposite operation
                return Math.max(
                  this.oldSelection.end - this.startChangePos || // for Delete
              this.oldValue.length - this.value.length,
                  0
                )
              },
              /**
           Removed symbols
           @readonly
           */
            },
            {
              key: 'removed',
              get: function get() {
                return this.oldValue.substr(this.startChangePos, this.removedCount)
              },
              /**
           Unchanged head symbols
           @readonly
           */
            },
            {
              key: 'head',
              get: function get() {
                return this.value.substring(0, this.startChangePos)
              },
              /**
           Unchanged tail symbols
           @readonly
           */
            },
            {
              key: 'tail',
              get: function get() {
                return this.value.substring(this.startChangePos + this.insertedCount)
              },
              /**
           Remove direction
           @readonly
           */
            },
            {
              key: 'removeDirection',
              get: function get() {
                if (!this.removedCount || this.insertedCount) return DIRECTION.NONE // align right if delete at right

                return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
            this.oldSelection.end === this.oldSelection.start
                  ? DIRECTION.RIGHT
                  : DIRECTION.LEFT
              },
            },
          ])

          return ActionDetails
        })()

        /** Provides details of continuous extracted tail */
        const ContinuousTailDetails = /*#__PURE__*/ (function () {
          /** Tail value as string */

          /** Tail start position */

          /** Start position */
          function ContinuousTailDetails() {
            const value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
            const from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
            const stop = arguments.length > 2 ? arguments[2] : undefined

            _classCallCheck(this, ContinuousTailDetails)

            this.value = value
            this.from = from
            this.stop = stop
          }

          _createClass(ContinuousTailDetails, [
            {
              key: 'toString',
              value: function toString() {
                return this.value
              },
            },
            {
              key: 'extend',
              value: function extend(tail) {
                this.value += String(tail)
              },
            },
            {
              key: 'appendTo',
              value: function appendTo(masked) {
                return masked
                  .append(this.toString(), { tail: true, })
                  .aggregate(masked._appendPlaceholder())
              },
            },
            {
              key: 'state',
              get: function get() {
                return {
                  value: this.value,
                  from: this.from,
                  stop: this.stop,
                }
              },
              set: function set(state) {
                Object.assign(this, state)
              },
            },
            {
              key: 'unshift',
              value: function unshift(beforePos) {
                if (!this.value.length || (beforePos != null && this.from >= beforePos)) return ''
                const shiftChar = this.value[0]
                this.value = this.value.slice(1)
                return shiftChar
              },
            },
            {
              key: 'shift',
              value: function shift() {
                if (!this.value.length) return ''
                const shiftChar = this.value[this.value.length - 1]
                this.value = this.value.slice(0, -1)
                return shiftChar
              },
            },
          ])

          return ContinuousTailDetails
        })()

        /**
     * Applies mask on element.
     * @constructor
     * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
     * @param {Object} opts - Custom mask options
     * @return {InputMask}
     */
        function IMask(el) {
          const opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
          // currently available only for input-like elements
          return new IMask.InputMask(el, opts)
        }

        /** Supported mask type */

        /** Provides common masking stuff */
        const Masked = /*#__PURE__*/ (function () {
          // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

          /** @type {Mask} */

          /** */
          // $FlowFixMe no ideas

          /** Transforms value before mask processing */

          /** Validates if value is acceptable */

          /** Does additional processing in the end of editing */

          /** Format typed value to string */

          /** Parse strgin to get typed value */

          /** Enable characters overwriting */

          /** */

          /** */
          function Masked(opts) {
            _classCallCheck(this, Masked)

            this._value = ''

            this._update(Object.assign({}, Masked.DEFAULTS, opts))

            this.isInitialized = true
          }

          /** Sets and applies new options */

          _createClass(Masked, [
            {
              key: 'updateOptions',
              value: function updateOptions(opts) {
                if (!Object.keys(opts).length) return // $FlowFixMe

                this.withValueRefresh(this._update.bind(this, opts))
              },
              /**
           Sets new options
           @protected
           */
            },
            {
              key: '_update',
              value: function _update(opts) {
                Object.assign(this, opts)
              },
              /** Mask state */
            },
            {
              key: 'state',
              get: function get() {
                return { _value: this.value, }
              },
              set: function set(state) {
                this._value = state._value
              },
              /** Resets value */
            },
            {
              key: 'reset',
              value: function reset() {
                this._value = ''
              },
              /** */
            },
            {
              key: 'value',
              get: function get() {
                return this._value
              },
              set: function set(value) {
                this.resolve(value)
              },
              /** Resolve new value */
            },
            {
              key: 'resolve',
              value: function resolve(value) {
                this.reset()
                this.append(
                  value,
                  { input: true, },
                  ''
                )
                this.doCommit()
                return this.value
              },
              /** */
            },
            {
              key: 'unmaskedValue',
              get: function get() {
                return this.value
              },
              set: function set(value) {
                this.reset()
                this.append(value, {}, '')
                this.doCommit()
              },
              /** */
            },
            {
              key: 'typedValue',
              get: function get() {
                return this.doParse(this.value)
              },
              set: function set(value) {
                this.value = this.doFormat(value)
              },
              /** Value that includes raw user input */
            },
            {
              key: 'rawInputValue',
              get: function get() {
                return this.extractInput(0, this.value.length, { raw: true, })
              },
              set: function set(value) {
                this.reset()
                this.append(
                  value,
                  { raw: true, },
                  ''
                )
                this.doCommit()
              },
              /** */
            },
            {
              key: 'isComplete',
              get: function get() {
                return true
              },
              /** */
            },
            {
              key: 'isFilled',
              get: function get() {
                return this.isComplete
              },
              /** Finds nearest input position in direction */
            },
            {
              key: 'nearestInputPos',
              value: function nearestInputPos(cursorPos, direction) {
                return cursorPos
              },
              /** Extracts value in range considering flags */
            },
            {
              key: 'extractInput',
              value: function extractInput() {
                const fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
                const toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length
                return this.value.slice(fromPos, toPos)
              },
              /** Extracts tail in range */
            },
            {
              key: 'extractTail',
              value: function extractTail() {
                const fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
                const toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length
                return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos)
              },
              /** Appends tail */
              // $FlowFixMe no ideas
            },
            {
              key: 'appendTail',
              value: function appendTail(tail) {
                if (isString(tail)) tail = new ContinuousTailDetails(String(tail))
                return tail.appendTo(this)
              },
              /** Appends char */
            },
            {
              key: '_appendCharRaw',
              value: function _appendCharRaw(ch) {
                if (!ch) return new ChangeDetails()
                this._value += ch
                return new ChangeDetails({
                  inserted: ch,
                  rawInserted: ch,
                })
              },
              /** Appends char */
            },
            {
              key: '_appendChar',
              value: function _appendChar(ch) {
                const flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
                const checkTail = arguments.length > 2 ? arguments[2] : undefined
                const consistentState = this.state
                let details

                const _normalizePrepare = normalizePrepare(this.doPrepare(ch, flags))

                const _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2)

                ch = _normalizePrepare2[0]
                details = _normalizePrepare2[1]
                details = details.aggregate(this._appendCharRaw(ch, flags))

                if (details.inserted) {
                  let consistentTail
                  let appended = this.doValidate(flags) !== false

                  if (appended && checkTail != null) {
                    // validation ok, check tail
                    const beforeTailState = this.state

                    if (this.overwrite === true) {
                      consistentTail = checkTail.state
                      checkTail.unshift(this.value.length)
                    }

                    let tailDetails = this.appendTail(checkTail)
                    appended = tailDetails.rawInserted === checkTail.toString() // not ok, try shift

                    if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
                      this.state = beforeTailState
                      consistentTail = checkTail.state
                      checkTail.shift()
                      tailDetails = this.appendTail(checkTail)
                      appended = tailDetails.rawInserted === checkTail.toString()
                    } // if ok, rollback state after tail

                    if (appended && tailDetails.inserted) this.state = beforeTailState
                  } // revert all if something went wrong

                  if (!appended) {
                    details = new ChangeDetails()
                    this.state = consistentState
                    if (checkTail && consistentTail) checkTail.state = consistentTail
                  }
                }

                return details
              },
              /** Appends optional placeholder at end */
            },
            {
              key: '_appendPlaceholder',
              value: function _appendPlaceholder() {
                return new ChangeDetails()
              },
              /** Appends optional eager placeholder at end */
            },
            {
              key: '_appendEager',
              value: function _appendEager() {
                return new ChangeDetails()
              },
              /** Appends symbols considering flags */
              // $FlowFixMe no ideas
            },
            {
              key: 'append',
              value: function append(str, flags, tail) {
                if (!isString(str)) throw new Error('value should be string')
                const details = new ChangeDetails()
                const checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail
                if (flags && flags.tail) flags._beforeTailState = this.state

                for (let ci = 0; ci < str.length; ++ci) {
                  details.aggregate(this._appendChar(str[ci], flags, checkTail))
                } // append tail but aggregate only tailShift

                if (checkTail != null) {
                  details.tailShift += this.appendTail(checkTail).tailShift // TODO it's a good idea to clear state after appending ends
                  // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
                  // this._resetBeforeTailState();
                }

                if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
                  details.aggregate(this._appendEager())
                }

                return details
              },
              /** */
            },
            {
              key: 'remove',
              value: function remove() {
                const fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
                const toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length
                this._value = this.value.slice(0, fromPos) + this.value.slice(toPos)
                return new ChangeDetails()
              },
              /** Calls function and reapplies current value */
            },
            {
              key: 'withValueRefresh',
              value: function withValueRefresh(fn) {
                if (this._refreshing || !this.isInitialized) return fn()
                this._refreshing = true
                const rawInput = this.rawInputValue
                const value = this.value
                const ret = fn()
                this.rawInputValue = rawInput // append lost trailing chars at end

                if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
                  this.append(value.slice(this.value.length), {}, '')
                }

                delete this._refreshing
                return ret
              },
              /** */
            },
            {
              key: 'runIsolated',
              value: function runIsolated(fn) {
                if (this._isolated || !this.isInitialized) return fn(this)
                this._isolated = true
                const state = this.state
                const ret = fn(this)
                this.state = state
                delete this._isolated
                return ret
              },
              /**
           Prepares string before mask processing
           @protected
           */
            },
            {
              key: 'doPrepare',
              value: function doPrepare(str) {
                const flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
                return this.prepare ? this.prepare(str, this, flags) : str
              },
              /**
           Validates if value is acceptable
           @protected
           */
            },
            {
              key: 'doValidate',
              value: function doValidate(flags) {
                return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags))
              },
              /**
           Does additional processing in the end of editing
           @protected
           */
            },
            {
              key: 'doCommit',
              value: function doCommit() {
                if (this.commit) this.commit(this.value, this)
              },
              /** */
            },
            {
              key: 'doFormat',
              value: function doFormat(value) {
                return this.format ? this.format(value, this) : value
              },
              /** */
            },
            {
              key: 'doParse',
              value: function doParse(str) {
                return this.parse ? this.parse(str, this) : str
              },
              /** */
            },
            {
              key: 'splice',
              value: function splice(start, deleteCount, inserted, removeDirection) {
                const tailPos = start + deleteCount
                const tail = this.extractTail(tailPos)
                let oldRawValue

                if (this.eager) {
                  removeDirection = forceDirection(removeDirection)
                  oldRawValue = this.extractInput(0, tailPos, { raw: true, })
                }

                const startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? DIRECTION.NONE : removeDirection)
                const details = new ChangeDetails({ tailShift: startChangePos - start, // adjust tailShift if start was aligned
                }).aggregate(this.remove(startChangePos))

                if (this.eager && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
                  if (removeDirection === DIRECTION.FORCE_LEFT) {
                    let valLength

                    while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
                      details
                        .aggregate(
                          new ChangeDetails({ tailShift: -1, })
                        )
                        .aggregate(this.remove(valLength - 1))
                    }
                  } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
                    tail.unshift()
                  }
                }

                return details.aggregate(
                  this.append(
                    inserted,
                    { input: true, },
                    tail
                  )
                )
              },
            },
            {
              key: 'maskEquals',
              value: function maskEquals(mask) {
                return this.mask === mask
              },
            },
          ])

          return Masked
        })()
        Masked.DEFAULTS = {
          format: function format(v) {
            return v
          },
          parse: function parse(v) {
            return v
          },
        }
        IMask.Masked = Masked

        /** Get Masked class by mask type */

        function maskedClass(mask) {
          if (mask == null) {
            throw new Error('mask property should be defined')
          } // $FlowFixMe

          if (mask instanceof RegExp) return IMask.MaskedRegExp // $FlowFixMe

          if (isString(mask)) return IMask.MaskedPattern // $FlowFixMe

          if (mask instanceof Date || mask === Date) return IMask.MaskedDate // $FlowFixMe

          if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber // $FlowFixMe

          if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic // $FlowFixMe

          if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask // $FlowFixMe

          if (mask instanceof IMask.Masked) return mask.constructor // $FlowFixMe

          if (mask instanceof Function) return IMask.MaskedFunction
          console.warn('Mask not found for mask', mask) // eslint-disable-line no-console
          // $FlowFixMe

          return IMask.Masked
        }

        /** Creates new {@link Masked} depending on mask type */

        function createMask(opts) {
          // $FlowFixMe
          if (IMask.Masked && opts instanceof IMask.Masked) return opts
          opts = Object.assign({}, opts)
          const mask = opts.mask // $FlowFixMe

          if (IMask.Masked && mask instanceof IMask.Masked) return mask
          const MaskedClass = maskedClass(mask)
          if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.')
          return new MaskedClass(opts)
        }

        IMask.createMask = createMask

        const _excluded$4 = [ 'mask', ]
        const DEFAULT_INPUT_DEFINITIONS = {
          0: /\d/,
          a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
          // http://stackoverflow.com/a/22075070
          '*': /./,
        }
        /** */

        const PatternInputDefinition = /*#__PURE__*/ (function () {
          /** */

          /** */

          /** */

          /** */

          /** */

          /** */

          /** */
          function PatternInputDefinition(opts) {
            _classCallCheck(this, PatternInputDefinition)

            const mask = opts.mask,
              blockOpts = _objectWithoutProperties(opts, _excluded$4)

            this.masked = createMask({ mask: mask, })
            Object.assign(this, blockOpts)
          }

          _createClass(PatternInputDefinition, [
            {
              key: 'reset',
              value: function reset() {
                this.isFilled = false
                this.masked.reset()
              },
            },
            {
              key: 'remove',
              value: function remove() {
                const fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
                const toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length

                if (fromPos === 0 && toPos >= 1) {
                  this.isFilled = false
                  return this.masked.remove(fromPos, toPos)
                }

                return new ChangeDetails()
              },
            },
            {
              key: 'value',
              get: function get() {
                return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '')
              },
            },
            {
              key: 'unmaskedValue',
              get: function get() {
                return this.masked.unmaskedValue
              },
            },
            {
              key: 'isComplete',
              get: function get() {
                return Boolean(this.masked.value) || this.isOptional
              },
            },
            {
              key: '_appendChar',
              value: function _appendChar(ch) {
                const flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
                if (this.isFilled) return new ChangeDetails()
                const state = this.masked.state // simulate input

                const details = this.masked._appendChar(ch, flags)

                if (details.inserted && this.doValidate(flags) === false) {
                  details.inserted = details.rawInserted = ''
                  this.masked.state = state
                }

                if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
                  details.inserted = this.placeholderChar
                }

                details.skip = !details.inserted && !this.isOptional
                this.isFilled = Boolean(details.inserted)
                return details
              },
            },
            {
              key: 'append',
              value: function append() {
                let _this$masked

                // TODO probably should be done via _appendChar
                return (_this$masked = this.masked).append.apply(_this$masked, arguments)
              },
            },
            {
              key: '_appendPlaceholder',
              value: function _appendPlaceholder() {
                const details = new ChangeDetails()
                if (this.isFilled || this.isOptional) return details
                this.isFilled = true
                details.inserted = this.placeholderChar
                return details
              },
            },
            {
              key: '_appendEager',
              value: function _appendEager() {
                return new ChangeDetails()
              },
            },
            {
              key: 'extractTail',
              value: function extractTail() {
                let _this$masked2

                return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments)
              },
            },
            {
              key: 'appendTail',
              value: function appendTail() {
                let _this$masked3

                return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments)
              },
            },
            {
              key: 'extractInput',
              value: function extractInput() {
                const fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
                const toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length
                const flags = arguments.length > 2 ? arguments[2] : undefined
                return this.masked.extractInput(fromPos, toPos, flags)
              },
            },
            {
              key: 'nearestInputPos',
              value: function nearestInputPos(cursorPos) {
                const direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE
                const minPos = 0
                const maxPos = this.value.length
                const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos)

                switch (direction) {
                case DIRECTION.LEFT:
                case DIRECTION.FORCE_LEFT:
                  return this.isComplete ? boundPos : minPos

                case DIRECTION.RIGHT:
                case DIRECTION.FORCE_RIGHT:
                  return this.isComplete ? boundPos : maxPos

                case DIRECTION.NONE:
                default:
                  return boundPos
                }
              },
            },
            {
              key: 'doValidate',
              value: function doValidate() {
                let _this$masked4, _this$parent

                return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments))
              },
            },
            {
              key: 'doCommit',
              value: function doCommit() {
                this.masked.doCommit()
              },
            },
            {
              key: 'state',
              get: function get() {
                return {
                  masked: this.masked.state,
                  isFilled: this.isFilled,
                }
              },
              set: function set(state) {
                this.masked.state = state.masked
                this.isFilled = state.isFilled
              },
            },
          ])

          return PatternInputDefinition
        })()

        const PatternFixedDefinition = /*#__PURE__*/ (function () {
          /** */

          /** */

          /** */

          /** */

          /** */

          /** */
          function PatternFixedDefinition(opts) {
            _classCallCheck(this, PatternFixedDefinition)

            Object.assign(this, opts)
            this._value = ''
            this.isFixed = true
          }

          _createClass(PatternFixedDefinition, [
            {
              key: 'value',
              get: function get() {
                return this._value
              },
            },
            {
              key: 'unmaskedValue',
              get: function get() {
                return this.isUnmasking ? this.value : ''
              },
            },
            {
              key: 'reset',
              value: function reset() {
                this._isRawInput = false
                this._value = ''
              },
            },
            {
              key: 'remove',
              value: function remove() {
                const fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
                const toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length
                this._value = this._value.slice(0, fromPos) + this._value.slice(toPos)
                if (!this._value) this._isRawInput = false
                return new ChangeDetails()
              },
            },
            {
              key: 'nearestInputPos',
              value: function nearestInputPos(cursorPos) {
                const direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE
                const minPos = 0
                const maxPos = this._value.length

                switch (direction) {
                case DIRECTION.LEFT:
                case DIRECTION.FORCE_LEFT:
                  return minPos

                case DIRECTION.NONE:
                case DIRECTION.RIGHT:
                case DIRECTION.FORCE_RIGHT:
                default:
                  return maxPos
                }
              },
            },
            {
              key: 'extractInput',
              value: function extractInput() {
                const fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
                const toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length
                const flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
                return (flags.raw && this._isRawInput && this._value.slice(fromPos, toPos)) || ''
              },
            },
            {
              key: 'isComplete',
              get: function get() {
                return true
              },
            },
            {
              key: 'isFilled',
              get: function get() {
                return Boolean(this._value)
              },
            },
            {
              key: '_appendChar',
              value: function _appendChar(ch) {
                const flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
                const details = new ChangeDetails()
                if (this._value) return details
                const appended = this.char === ch
                const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !this.eager && !flags.tail
                if (isResolved) details.rawInserted = this.char
                this._value = details.inserted = this.char
                this._isRawInput = isResolved && (flags.raw || flags.input)
                return details
              },
            },
            {
              key: '_appendEager',
              value: function _appendEager() {
                return this._appendChar(this.char)
              },
            },
            {
              key: '_appendPlaceholder',
              value: function _appendPlaceholder() {
                const details = new ChangeDetails()
                if (this._value) return details
                this._value = details.inserted = this.char
                return details
              },
            },
            {
              key: 'extractTail',
              value: function extractTail() {
                arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length
                return new ContinuousTailDetails('')
              }, // $FlowFixMe no ideas
            },
            {
              key: 'appendTail',
              value: function appendTail(tail) {
                if (isString(tail)) tail = new ContinuousTailDetails(String(tail))
                return tail.appendTo(this)
              },
            },
            {
              key: 'append',
              value: function append(str, flags, tail) {
                const details = this._appendChar(str[0], flags)

                if (tail != null) {
                  details.tailShift += this.appendTail(tail).tailShift
                }

                return details
              },
            },
            {
              key: 'doCommit',
              value: function doCommit() {
              },
            },
            {
              key: 'state',
              get: function get() {
                return {
                  _value: this._value,
                  _isRawInput: this._isRawInput,
                }
              },
              set: function set(state) {
                Object.assign(this, state)
              },
            },
          ])

          return PatternFixedDefinition
        })()

        const _excluded$3 = [ 'chunks', ]

        const ChunksTailDetails = /*#__PURE__*/ (function () {
          /** */
          function ChunksTailDetails() {
            const chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
            const from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0

            _classCallCheck(this, ChunksTailDetails)

            this.chunks = chunks
            this.from = from
          }

          _createClass(ChunksTailDetails, [
            {
              key: 'toString',
              value: function toString() {
                return this.chunks.map(String).join('')
              }, // $FlowFixMe no ideas
            },
            {
              key: 'extend',
              value: function extend(tailChunk) {
                if (!String(tailChunk)) return
                if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk))
                const lastChunk = this.chunks[this.chunks.length - 1]
                const extendLast =
              lastChunk && // if stops are same or tail has no stop
              (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
              tailChunk.from === lastChunk.from + lastChunk.toString().length

                if (tailChunk instanceof ContinuousTailDetails) {
                  // check the ability to extend previous chunk
                  if (extendLast) {
                    // extend previous chunk
                    lastChunk.extend(tailChunk.toString())
                  } else {
                    // append new chunk
                    this.chunks.push(tailChunk)
                  }
                } else if (tailChunk instanceof ChunksTailDetails) {
                  if (tailChunk.stop == null) {
                    // unwrap floating chunks to parent, keeping `from` pos
                    let firstTailChunk

                    while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
                      firstTailChunk = tailChunk.chunks.shift()
                      firstTailChunk.from += tailChunk.from
                      this.extend(firstTailChunk)
                    }
                  } // if tail chunk still has value

                  if (tailChunk.toString()) {
                    // if chunks contains stops, then popup stop to container
                    tailChunk.stop = tailChunk.blockIndex
                    this.chunks.push(tailChunk)
                  }
                }
              },
            },
            {
              key: 'appendTo',
              value: function appendTo(masked) {
                // $FlowFixMe
                if (!(masked instanceof IMask.MaskedPattern)) {
                  const tail = new ContinuousTailDetails(this.toString())
                  return tail.appendTo(masked)
                }

                const details = new ChangeDetails()

                for (let ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
                  const chunk = this.chunks[ci]

                  const lastBlockIter = masked._mapPosToBlock(masked.value.length)

                  const stop = chunk.stop
                  let chunkBlock = void 0

                  if (
                    stop != null && // if block not found or stop is behind lastBlock
                (!lastBlockIter || lastBlockIter.index <= stop)
                  ) {
                    if (
                      chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
                  masked._stops.indexOf(stop) >= 0
                    ) {
                      details.aggregate(masked._appendPlaceholder(stop))
                    }

                    chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop]
                  }

                  if (chunkBlock) {
                    const tailDetails = chunkBlock.appendTail(chunk)
                    tailDetails.skip = false // always ignore skip, it will be set on last

                    details.aggregate(tailDetails)
                    masked._value += tailDetails.inserted // get not inserted chars

                    const remainChars = chunk.toString().slice(tailDetails.rawInserted.length)
                    if (remainChars)
                      details.aggregate(
                        masked.append(remainChars, { tail: true, })
                      )
                  } else {
                    details.aggregate(
                      masked.append(chunk.toString(), { tail: true, })
                    )
                  }
                }
                return details
              },
            },
            {
              key: 'state',
              get: function get() {
                return {
                  chunks: this.chunks.map(function (c) {
                    return c.state
                  }),
                  from: this.from,
                  stop: this.stop,
                  blockIndex: this.blockIndex,
                }
              },
              set: function set(state) {
                const chunks = state.chunks,
                  props = _objectWithoutProperties(state, _excluded$3)

                Object.assign(this, props)
                this.chunks = chunks.map(function (cstate) {
                  const chunk = 'chunks' in cstate ? new ChunksTailDetails() : new ContinuousTailDetails() // $FlowFixMe already checked above

                  chunk.state = cstate
                  return chunk
                })
              },
            },
            {
              key: 'unshift',
              value: function unshift(beforePos) {
                if (!this.chunks.length || (beforePos != null && this.from >= beforePos)) return ''
                const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos
                let ci = 0

                while (ci < this.chunks.length) {
                  const chunk = this.chunks[ci]
                  const shiftChar = chunk.unshift(chunkShiftPos)

                  if (chunk.toString()) {
                    // chunk still contains value
                    // but not shifted - means no more available chars to shift
                    if (!shiftChar) break
                    ++ci
                  } else {
                    // clean if chunk has no value
                    this.chunks.splice(ci, 1)
                  }

                  if (shiftChar) return shiftChar
                }

                return ''
              },
            },
            {
              key: 'shift',
              value: function shift() {
                if (!this.chunks.length) return ''
                let ci = this.chunks.length - 1

                while (0 <= ci) {
                  const chunk = this.chunks[ci]
                  const shiftChar = chunk.shift()

                  if (chunk.toString()) {
                    // chunk still contains value
                    // but not shifted - means no more available chars to shift
                    if (!shiftChar) break
                    --ci
                  } else {
                    // clean if chunk has no value
                    this.chunks.splice(ci, 1)
                  }

                  if (shiftChar) return shiftChar
                }

                return ''
              },
            },
          ])

          return ChunksTailDetails
        })()

        const PatternCursor = /*#__PURE__*/ (function () {
          function PatternCursor(masked, pos) {
            _classCallCheck(this, PatternCursor)

            this.masked = masked
            this._log = []

            const _ref =
            masked._mapPosToBlock(pos) ||
            (pos < 0 // first
              ? {
                index: 0,
                offset: 0,
              } // last
              : {
                index: this.masked._blocks.length,
                offset: 0,
              }),
              offset = _ref.offset,
              index = _ref.index

            this.offset = offset
            this.index = index
            this.ok = false
          }

          _createClass(PatternCursor, [
            {
              key: 'block',
              get: function get() {
                return this.masked._blocks[this.index]
              },
            },
            {
              key: 'pos',
              get: function get() {
                return this.masked._blockStartPos(this.index) + this.offset
              },
            },
            {
              key: 'state',
              get: function get() {
                return {
                  index: this.index,
                  offset: this.offset,
                  ok: this.ok,
                }
              },
              set: function set(s) {
                Object.assign(this, s)
              },
            },
            {
              key: 'pushState',
              value: function pushState() {
                this._log.push(this.state)
              },
            },
            {
              key: 'popState',
              value: function popState() {
                const s = this._log.pop()

                this.state = s
                return s
              },
            },
            {
              key: 'bindBlock',
              value: function bindBlock() {
                if (this.block) return

                if (this.index < 0) {
                  this.index = 0
                  this.offset = 0
                }

                if (this.index >= this.masked._blocks.length) {
                  this.index = this.masked._blocks.length - 1
                  this.offset = this.block.value.length
                }
              },
            },
            {
              key: '_pushLeft',
              value: function _pushLeft(fn) {
                this.pushState()

                for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
                  var _this$block

                  if (fn()) return (this.ok = true)
                }

                return (this.ok = false)
              },
            },
            {
              key: '_pushRight',
              value: function _pushRight(fn) {
                this.pushState()

                for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
                  if (fn()) return (this.ok = true)
                }

                return (this.ok = false)
              },
            },
            {
              key: 'pushLeftBeforeFilled',
              value: function pushLeftBeforeFilled() {
                const _this = this

                return this._pushLeft(function () {
                  if (_this.block.isFixed || !_this.block.value) return
                  _this.offset = _this.block.nearestInputPos(_this.offset, DIRECTION.FORCE_LEFT)
                  if (_this.offset !== 0) return true
                })
              },
            },
            {
              key: 'pushLeftBeforeInput',
              value: function pushLeftBeforeInput() {
                const _this2 = this

                // cases:
                // filled input: 00|
                // optional empty input: 00[]|
                // nested block: XX<[]>|
                return this._pushLeft(function () {
                  if (_this2.block.isFixed) return
                  _this2.offset = _this2.block.nearestInputPos(_this2.offset, DIRECTION.LEFT)
                  return true
                })
              },
            },
            {
              key: 'pushLeftBeforeRequired',
              value: function pushLeftBeforeRequired() {
                const _this3 = this

                return this._pushLeft(function () {
                  if (_this3.block.isFixed || (_this3.block.isOptional && !_this3.block.value)) return
                  _this3.offset = _this3.block.nearestInputPos(_this3.offset, DIRECTION.LEFT)
                  return true
                })
              },
            },
            {
              key: 'pushRightBeforeFilled',
              value: function pushRightBeforeFilled() {
                const _this4 = this

                return this._pushRight(function () {
                  if (_this4.block.isFixed || !_this4.block.value) return
                  _this4.offset = _this4.block.nearestInputPos(_this4.offset, DIRECTION.FORCE_RIGHT)
                  if (_this4.offset !== _this4.block.value.length) return true
                })
              },
            },
            {
              key: 'pushRightBeforeInput',
              value: function pushRightBeforeInput() {
                const _this5 = this

                return this._pushRight(function () {
                  if (_this5.block.isFixed) return // const o = this.offset;

                  _this5.offset = _this5.block.nearestInputPos(_this5.offset, DIRECTION.NONE) // HACK cases like (STILL DOES NOT WORK FOR NESTED)
                  // aa|X
                  // aa<X|[]>X_    - this will not work
                  // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;

                  return true
                })
              },
            },
            {
              key: 'pushRightBeforeRequired',
              value: function pushRightBeforeRequired() {
                const _this6 = this

                return this._pushRight(function () {
                  if (_this6.block.isFixed || (_this6.block.isOptional && !_this6.block.value)) return // TODO check |[*]XX_

                  _this6.offset = _this6.block.nearestInputPos(_this6.offset, DIRECTION.NONE)
                  return true
                })
              },
            },
          ])

          return PatternCursor
        })()

        /** Masking by RegExp */

        const MaskedRegExp = /*#__PURE__*/ (function (_Masked) {
          _inherits(MaskedRegExp, _Masked)

          const _super = _createSuper(MaskedRegExp)

          function MaskedRegExp() {
            _classCallCheck(this, MaskedRegExp)

            return _super.apply(this, arguments)
          }

          _createClass(MaskedRegExp, [
            {
              key: '_update',
              value:
            /**
             @override
             @param {Object} opts
             */
            function _update(opts) {
              if (opts.mask)
                opts.validate = function (value) {
                  return value.search(opts.mask) >= 0
                }

              _get(_getPrototypeOf(MaskedRegExp.prototype), '_update', this).call(this, opts)
            },
            },
          ])

          return MaskedRegExp
        })(Masked)
        IMask.MaskedRegExp = MaskedRegExp

        const _excluded$2 = [ '_blocks', ]

        /**
     Pattern mask
     @param {Object} opts
     @param {Object} opts.blocks
     @param {Object} opts.definitions
     @param {string} opts.placeholderChar
     @param {boolean} opts.lazy
     */
        const MaskedPattern = /*#__PURE__*/ (function (_Masked) {
          _inherits(MaskedPattern, _Masked)

          const _super = _createSuper(MaskedPattern)

          /** */

          /** */

          /** Single char for empty input */

          /** Show placeholder only when needed */
          function MaskedPattern() {
            const opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

            _classCallCheck(this, MaskedPattern)

            // TODO type $Shape<MaskedPatternOptions>={} does not work
            opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions)
            return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts))
          }

          /**
       @override
       @param {Object} opts
       */

          _createClass(MaskedPattern, [
            {
              key: '_update',
              value: function _update() {
                const opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
                opts.definitions = Object.assign({}, this.definitions, opts.definitions)

                _get(_getPrototypeOf(MaskedPattern.prototype), '_update', this).call(this, opts)

                this._rebuildMask()
              },
              /** */
            },
            {
              key: '_rebuildMask',
              value: function _rebuildMask() {
                const _this = this

                const defs = this.definitions
                this._blocks = []
                this._stops = []
                this._maskedBlocks = {}
                const pattern = this.mask
                if (!pattern || !defs) return
                let unmaskingBlock = false
                let optionalBlock = false

                for (var i = 0; i < pattern.length; ++i) {
                  if (this.blocks) {
                    const _ret = (function () {
                      const p = pattern.slice(i)
                      const bNames = Object.keys(_this.blocks).filter(function (bName) {
                        return p.indexOf(bName) === 0
                      }) // order by key length

                      bNames.sort(function (a, b) {
                        return b.length - a.length
                      }) // use block name with max length

                      const bName = bNames[0]

                      if (bName) {
                        // $FlowFixMe no ideas
                        const maskedBlock = createMask(
                          Object.assign(
                            {
                              parent: _this,
                              lazy: _this.lazy,
                              eager: _this.eager,
                              placeholderChar: _this.placeholderChar,
                              overwrite: _this.overwrite,
                            },
                            _this.blocks[bName]
                          )
                        )

                        if (maskedBlock) {
                          _this._blocks.push(maskedBlock) // store block index

                          if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = []

                          _this._maskedBlocks[bName].push(_this._blocks.length - 1)
                        }

                        i += bName.length - 1
                        return 'continue'
                      }
                    })()

                    if (_ret === 'continue') continue
                  }

                  let char = pattern[i]
                  let isInput = char in defs

                  if (char === MaskedPattern.STOP_CHAR) {
                    this._stops.push(this._blocks.length)

                    continue
                  }

                  if (char === '{' || char === '}') {
                    unmaskingBlock = !unmaskingBlock
                    continue
                  }

                  if (char === '[' || char === ']') {
                    optionalBlock = !optionalBlock
                    continue
                  }

                  if (char === MaskedPattern.ESCAPE_CHAR) {
                    ++i
                    char = pattern[i]
                    if (!char) break
                    isInput = false
                  }

                  const def = isInput
                    ? new PatternInputDefinition({
                      parent: this,
                      lazy: this.lazy,
                      eager: this.eager,
                      placeholderChar: this.placeholderChar,
                      mask: defs[char],
                      isOptional: optionalBlock,
                    })
                    : new PatternFixedDefinition({
                      char: char,
                      eager: this.eager,
                      isUnmasking: unmaskingBlock,
                    })

                  this._blocks.push(def)
                }
              },
              /**
           @override
           */
            },
            {
              key: 'state',
              get: function get() {
                return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), 'state', this), {
                  _blocks: this._blocks.map(function (b) {
                    return b.state
                  }),
                })
              },
              set: function set(state) {
                const _blocks = state._blocks,
                  maskedState = _objectWithoutProperties(state, _excluded$2)

                this._blocks.forEach(function (b, bi) {
                  return (b.state = _blocks[bi])
                })

                _set(_getPrototypeOf(MaskedPattern.prototype), 'state', maskedState, this, true)
              },
              /**
           @override
           */
            },
            {
              key: 'reset',
              value: function reset() {
                _get(_getPrototypeOf(MaskedPattern.prototype), 'reset', this).call(this)

                this._blocks.forEach(function (b) {
                  return b.reset()
                })
              },
              /**
           @override
           */
            },
            {
              key: 'isComplete',
              get: function get() {
                return this._blocks.every(function (b) {
                  return b.isComplete
                })
              },
              /**
           @override
           */
            },
            {
              key: 'isFilled',
              get: function get() {
                return this._blocks.every(function (b) {
                  return b.isFilled
                })
              },
            },
            {
              key: 'isFixed',
              get: function get() {
                return this._blocks.every(function (b) {
                  return b.isFixed
                })
              },
            },
            {
              key: 'isOptional',
              get: function get() {
                return this._blocks.every(function (b) {
                  return b.isOptional
                })
              },
              /**
           @override
           */
            },
            {
              key: 'doCommit',
              value: function doCommit() {
                this._blocks.forEach(function (b) {
                  return b.doCommit()
                })

                _get(_getPrototypeOf(MaskedPattern.prototype), 'doCommit', this).call(this)
              },
              /**
           @override
           */
            },
            {
              key: 'unmaskedValue',
              get: function get() {
                return this._blocks.reduce(function (str, b) {
                  return (str += b.unmaskedValue)
                }, '')
              },
              set: function set(unmaskedValue) {
                _set(_getPrototypeOf(MaskedPattern.prototype), 'unmaskedValue', unmaskedValue, this, true)
              },
              /**
           @override
           */
            },
            {
              key: 'value',
              get: function get() {
                // TODO return _value when not in change?
                return this._blocks.reduce(function (str, b) {
                  return (str += b.value)
                }, '')
              },
              set: function set(value) {
                _set(_getPrototypeOf(MaskedPattern.prototype), 'value', value, this, true)
              },
              /**
           @override
           */
            },
            {
              key: 'appendTail',
              value: function appendTail(tail) {
                return _get(_getPrototypeOf(MaskedPattern.prototype), 'appendTail', this).call(this, tail).aggregate(this._appendPlaceholder())
              },
              /**
           @override
           */
            },
            {
              key: '_appendEager',
              value: function _appendEager() {
                let _this$_mapPosToBlock

                const details = new ChangeDetails()
                let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index
                if (startBlockIndex == null) return details // TODO test if it works for nested pattern masks

                if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex

                for (let bi = startBlockIndex; bi < this._blocks.length; ++bi) {
                  const d = this._blocks[bi]._appendEager()

                  if (!d.inserted) break
                  details.aggregate(d)
                }

                return details
              },
              /**
           @override
           */
            },
            {
              key: '_appendCharRaw',
              value: function _appendCharRaw(ch) {
                const flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

                const blockIter = this._mapPosToBlock(this.value.length)

                const details = new ChangeDetails()
                if (!blockIter) return details

                for (let bi = blockIter.index; ; ++bi) {
                  var _flags$_beforeTailSta

                  const _block = this._blocks[bi]
                  if (!_block) break

                  const blockDetails = _block._appendChar(
                    ch,
                    Object.assign({}, flags, { _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta._blocks[bi], })
                  )

                  const skip = blockDetails.skip
                  details.aggregate(blockDetails)
                  if (skip || blockDetails.rawInserted) break // go next char
                }

                return details
              },
              /**
           @override
           */
            },
            {
              key: 'extractTail',
              value: function extractTail() {
                const _this2 = this

                const fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
                const toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length
                const chunkTail = new ChunksTailDetails()
                if (fromPos === toPos) return chunkTail

                this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
                  const blockChunk = b.extractTail(bFromPos, bToPos)
                  blockChunk.stop = _this2._findStopBefore(bi)
                  blockChunk.from = _this2._blockStartPos(bi)
                  if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi
                  chunkTail.extend(blockChunk)
                })

                return chunkTail
              },
              /**
           @override
           */
            },
            {
              key: 'extractInput',
              value: function extractInput() {
                const fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
                const toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length
                const flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
                if (fromPos === toPos) return ''
                let input = ''

                this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
                  input += b.extractInput(fromPos, toPos, flags)
                })

                return input
              },
            },
            {
              key: '_findStopBefore',
              value: function _findStopBefore(blockIndex) {
                let stopBefore

                for (let si = 0; si < this._stops.length; ++si) {
                  const stop = this._stops[si]
                  if (stop <= blockIndex) stopBefore = stop
                  else break
                }

                return stopBefore
              },
              /** Appends placeholder depending on laziness */
            },
            {
              key: '_appendPlaceholder',
              value: function _appendPlaceholder(toBlockIndex) {
                const _this3 = this

                const details = new ChangeDetails()
                if (this.lazy && toBlockIndex == null) return details

                const startBlockIter = this._mapPosToBlock(this.value.length)

                if (!startBlockIter) return details
                const startBlockIndex = startBlockIter.index
                const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length

                this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
                  if (!b.lazy || toBlockIndex != null) {
                    // $FlowFixMe `_blocks` may not be present
                    const args = b._blocks != null ? [ b._blocks.length, ] : []

                    const bDetails = b._appendPlaceholder.apply(b, args)

                    _this3._value += bDetails.inserted
                    details.aggregate(bDetails)
                  }
                })

                return details
              },
              /** Finds block in pos */
            },
            {
              key: '_mapPosToBlock',
              value: function _mapPosToBlock(pos) {
                let accVal = ''

                for (let bi = 0; bi < this._blocks.length; ++bi) {
                  const _block2 = this._blocks[bi]
                  const blockStartPos = accVal.length
                  accVal += _block2.value

                  if (pos <= accVal.length) {
                    return {
                      index: bi,
                      offset: pos - blockStartPos,
                    }
                  }
                }
              },
              /** */
            },
            {
              key: '_blockStartPos',
              value: function _blockStartPos(blockIndex) {
                return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
                  return (pos += b.value.length)
                }, 0)
              },
              /** */
            },
            {
              key: '_forEachBlocksInRange',
              value: function _forEachBlocksInRange(fromPos) {
                const toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length
                const fn = arguments.length > 2 ? arguments[2] : undefined

                const fromBlockIter = this._mapPosToBlock(fromPos)

                if (fromBlockIter) {
                  const toBlockIter = this._mapPosToBlock(toPos) // process first block

                  const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index
                  const fromBlockStartPos = fromBlockIter.offset
                  const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length
                  fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos)

                  if (toBlockIter && !isSameBlock) {
                    // process intermediate blocks
                    for (let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
                      fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length)
                    } // process last block

                    fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset)
                  }
                }
              },
              /**
           @override
           */
            },
            {
              key: 'remove',
              value: function remove() {
                const fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
                const toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length

                const removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), 'remove', this).call(this, fromPos, toPos)

                this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
                  removeDetails.aggregate(b.remove(bFromPos, bToPos))
                })

                return removeDetails
              },
              /**
           @override
           */
            },
            {
              key: 'nearestInputPos',
              value: function nearestInputPos(cursorPos) {
                const direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE
                if (!this._blocks.length) return 0
                const cursor = new PatternCursor(this, cursorPos)

                if (direction === DIRECTION.NONE) {
                  // -------------------------------------------------
                  // NONE should only go out from fixed to the right!
                  // -------------------------------------------------
                  if (cursor.pushRightBeforeInput()) return cursor.pos
                  cursor.popState()
                  if (cursor.pushLeftBeforeInput()) return cursor.pos
                  return this.value.length
                } // FORCE is only about a|* otherwise is 0

                if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
                  // try to break fast when *|a
                  if (direction === DIRECTION.LEFT) {
                    cursor.pushRightBeforeFilled()
                    if (cursor.ok && cursor.pos === cursorPos) return cursorPos
                    cursor.popState()
                  } // forward flow

                  cursor.pushLeftBeforeInput()
                  cursor.pushLeftBeforeRequired()
                  cursor.pushLeftBeforeFilled() // backward flow

                  if (direction === DIRECTION.LEFT) {
                    cursor.pushRightBeforeInput()
                    cursor.pushRightBeforeRequired()
                    if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos
                    cursor.popState()
                    if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos
                    cursor.popState()
                  }

                  if (cursor.ok) return cursor.pos
                  if (direction === DIRECTION.FORCE_LEFT) return 0
                  cursor.popState()
                  if (cursor.ok) return cursor.pos
                  cursor.popState()
                  if (cursor.ok) return cursor.pos // cursor.popState();
                  // if (
                  //   cursor.pushRightBeforeInput() &&
                  //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
                  //   (!this.lazy || this.extractInput())
                  // ) return cursor.pos;

                  return 0
                }

                if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
                  // forward flow
                  cursor.pushRightBeforeInput()
                  cursor.pushRightBeforeRequired()
                  if (cursor.pushRightBeforeFilled()) return cursor.pos
                  if (direction === DIRECTION.FORCE_RIGHT) return this.value.length // backward flow

                  cursor.popState()
                  if (cursor.ok) return cursor.pos
                  cursor.popState()
                  if (cursor.ok) return cursor.pos
                  return this.nearestInputPos(cursorPos, DIRECTION.LEFT)
                }

                return cursorPos
              },
              /** Get block by name */
            },
            {
              key: 'maskedBlock',
              value: function maskedBlock(name) {
                return this.maskedBlocks(name)[0]
              },
              /** Get all blocks by name */
            },
            {
              key: 'maskedBlocks',
              value: function maskedBlocks(name) {
                const _this4 = this

                const indices = this._maskedBlocks[name]
                if (!indices) return []
                return indices.map(function (gi) {
                  return _this4._blocks[gi]
                })
              },
            },
          ])

          return MaskedPattern
        })(Masked)
        MaskedPattern.DEFAULTS = {
          lazy: true,
          placeholderChar: '_',
        }
        MaskedPattern.STOP_CHAR = '`'
        MaskedPattern.ESCAPE_CHAR = '\\'
        MaskedPattern.InputDefinition = PatternInputDefinition
        MaskedPattern.FixedDefinition = PatternFixedDefinition
        IMask.MaskedPattern = MaskedPattern

        /** Pattern which accepts ranges */

        const MaskedRange = /*#__PURE__*/ (function (_MaskedPattern) {
          _inherits(MaskedRange, _MaskedPattern)

          const _super = _createSuper(MaskedRange)

          function MaskedRange() {
            _classCallCheck(this, MaskedRange)

            return _super.apply(this, arguments)
          }

          _createClass(MaskedRange, [
            {
              key: '_matchFrom',
              get:
              /**
           Optionally sets max length of pattern.
           Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
           */

              /** Min bound */

              /** Max bound */

            /** */
            function get() {
              return this.maxLength - String(this.from).length
            },
              /**
           @override
           */
            },
            {
              key: '_update',
              value: function _update(opts) {
                // TODO type
                opts = Object.assign(
                  {
                    to: this.to || 0,
                    from: this.from || 0,
                    maxLength: this.maxLength || 0,
                  },
                  opts
                )
                let maxLength = String(opts.to).length
                if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength)
                opts.maxLength = maxLength
                const fromStr = String(opts.from).padStart(maxLength, '0')
                const toStr = String(opts.to).padStart(maxLength, '0')
                let sameCharsCount = 0

                while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
                  ++sameCharsCount
                }

                opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount)

                _get(_getPrototypeOf(MaskedRange.prototype), '_update', this).call(this, opts)
              },
              /**
           @override
           */
            },
            {
              key: 'isComplete',
              get: function get() {
                return _get(_getPrototypeOf(MaskedRange.prototype), 'isComplete', this) && Boolean(this.value)
              },
            },
            {
              key: 'boundaries',
              value: function boundaries(str) {
                let minstr = ''
                let maxstr = ''

                const _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
                  _ref2 = _slicedToArray(_ref, 3),
                  placeholder = _ref2[1],
                  num = _ref2[2]

                if (num) {
                  minstr = '0'.repeat(placeholder.length) + num
                  maxstr = '9'.repeat(placeholder.length) + num
                }

                minstr = minstr.padEnd(this.maxLength, '0')
                maxstr = maxstr.padEnd(this.maxLength, '9')
                return [
                  minstr,
                  maxstr,
                ]
              }, // TODO str is a single char everytime

              /**
           @override
           */
            },
            {
              key: 'doPrepare',
              value: function doPrepare(ch) {
                const flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
                let details

                const _normalizePrepare = normalizePrepare(_get(_getPrototypeOf(MaskedRange.prototype), 'doPrepare', this).call(this, ch.replace(/\D/g, ''), flags))

                const _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2)

                ch = _normalizePrepare2[0]
                details = _normalizePrepare2[1]
                if (!this.autofix || !ch) return ch
                const fromStr = String(this.from).padStart(this.maxLength, '0')
                const toStr = String(this.to).padStart(this.maxLength, '0')
                const nextVal = this.value + ch
                if (nextVal.length > this.maxLength) return ''

                const _this$boundaries = this.boundaries(nextVal),
                  _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
                  minstr = _this$boundaries2[0],
                  maxstr = _this$boundaries2[1]

                if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1]

                if (Number(minstr) > this.to) {
                  if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
                    return [
                      '',
                      details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags)),
                    ]
                  }

                  return toStr[nextVal.length - 1]
                }

                return ch
              },
              /**
           @override
           */
            },
            {
              key: 'doValidate',
              value: function doValidate() {
                let _get2

                const str = this.value
                const firstNonZero = str.search(/[^0]/)
                if (firstNonZero === -1 && str.length <= this._matchFrom) return true

                const _this$boundaries3 = this.boundaries(str),
                  _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
                  minstr = _this$boundaries4[0],
                  maxstr = _this$boundaries4[1]

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key]
                }

                return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), 'doValidate', this)).call.apply(_get2, [ this, ].concat(args))
              },
            },
          ])

          return MaskedRange
        })(MaskedPattern)
        IMask.MaskedRange = MaskedRange

        /** Date mask */

        const MaskedDate = /*#__PURE__*/ (function (_MaskedPattern) {
          _inherits(MaskedDate, _MaskedPattern)

          const _super = _createSuper(MaskedDate)

          /** Pattern mask for date according to {@link MaskedDate#format} */

          /** Start date */

          /** End date */

          /** */

          /**
       @param {Object} opts
       */
          function MaskedDate(opts) {
            _classCallCheck(this, MaskedDate)

            return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts))
          }

          /**
       @override
       */

          _createClass(MaskedDate, [
            {
              key: '_update',
              value: function _update(opts) {
                if (opts.mask === Date) delete opts.mask
                if (opts.pattern) opts.mask = opts.pattern
                const blocks = opts.blocks
                opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()) // adjust year block

                if (opts.min) opts.blocks.Y.from = opts.min.getFullYear()
                if (opts.max) opts.blocks.Y.to = opts.max.getFullYear()

                if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
                  opts.blocks.m.from = opts.min.getMonth() + 1
                  opts.blocks.m.to = opts.max.getMonth() + 1

                  if (opts.blocks.m.from === opts.blocks.m.to) {
                    opts.blocks.d.from = opts.min.getDate()
                    opts.blocks.d.to = opts.max.getDate()
                  }
                }

                Object.assign(opts.blocks, this.blocks, blocks) // add autofix

                Object.keys(opts.blocks).forEach(function (bk) {
                  const b = opts.blocks[bk]
                  if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix
                })

                _get(_getPrototypeOf(MaskedDate.prototype), '_update', this).call(this, opts)
              },
              /**
           @override
           */
            },
            {
              key: 'doValidate',
              value: function doValidate() {
                let _get2

                const date = this.date

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key]
                }

                return (
                  (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), 'doValidate', this)).call.apply(_get2, [ this, ].concat(args)) &&
              (!this.isComplete || (this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max)))
                )
              },
              /** Checks if date is exists */
            },
            {
              key: 'isDateExist',
              value: function isDateExist(str) {
                return this.format(this.parse(str, this), this).indexOf(str) >= 0
              },
              /** Parsed Date */
            },
            {
              key: 'date',
              get: function get() {
                return this.typedValue
              },
              set: function set(date) {
                this.typedValue = date
              },
              /**
           @override
           */
            },
            {
              key: 'typedValue',
              get: function get() {
                return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), 'typedValue', this) : null
              },
              set: function set(value) {
                _set(_getPrototypeOf(MaskedDate.prototype), 'typedValue', value, this, true)
              },
              /**
           @override
           */
            },
            {
              key: 'maskEquals',
              value: function maskEquals(mask) {
                return mask === Date || _get(_getPrototypeOf(MaskedDate.prototype), 'maskEquals', this).call(this, mask)
              },
            },
          ])

          return MaskedDate
        })(MaskedPattern)
        MaskedDate.DEFAULTS = {
          pattern: 'd{.}`m{.}`Y',
          format: function format(date) {
            if (!date) return ''
            const day = String(date.getDate()).padStart(2, '0')
            const month = String(date.getMonth() + 1).padStart(2, '0')
            const year = date.getFullYear()
            return [
              day,
              month,
              year,
            ].join('.')
          },
          parse: function parse(str) {
            const _str$split = str.split('.'),
              _str$split2 = _slicedToArray(_str$split, 3),
              day = _str$split2[0],
              month = _str$split2[1],
              year = _str$split2[2]

            return new Date(year, month - 1, day)
          },
        }

        MaskedDate.GET_DEFAULT_BLOCKS = function () {
          return {
            d: {
              mask: MaskedRange,
              from: 1,
              to: 31,
              maxLength: 2,
            },
            m: {
              mask: MaskedRange,
              from: 1,
              to: 12,
              maxLength: 2,
            },
            Y: {
              mask: MaskedRange,
              from: 1900,
              to: 9999,
            },
          }
        }

        IMask.MaskedDate = MaskedDate

        /**
     Generic element API to use with mask
     @interface
     */
        const MaskElement = /*#__PURE__*/ (function () {
          function MaskElement() {
            _classCallCheck(this, MaskElement)
          }

          _createClass(MaskElement, [
            {
              key: 'selectionStart',
              get:
              /** */

              /** */

              /** */

            /** Safely returns selection start */
            function get() {
              let start

              try {
                start = this._unsafeSelectionStart
              } catch (e) {
              }

              return start != null ? start : this.value.length
            },
              /** Safely returns selection end */
            },
            {
              key: 'selectionEnd',
              get: function get() {
                let end

                try {
                  end = this._unsafeSelectionEnd
                } catch (e) {
                }

                return end != null ? end : this.value.length
              },
              /** Safely sets element selection */
            },
            {
              key: 'select',
              value: function select(start, end) {
                if (start == null || end == null || (start === this.selectionStart && end === this.selectionEnd)) return

                try {
                  this._unsafeSelect(start, end)
                } catch (e) {
                }
              },
              /** Should be overriden in subclasses */
            },
            {
              key: '_unsafeSelect',
              value: function _unsafeSelect(start, end) {
              },
              /** Should be overriden in subclasses */
            },
            {
              key: 'isActive',
              get: function get() {
                return false
              },
              /** Should be overriden in subclasses */
            },
            {
              key: 'bindEvents',
              value: function bindEvents(handlers) {
              },
              /** Should be overriden in subclasses */
            },
            {
              key: 'unbindEvents',
              value: function unbindEvents() {
              },
            },
          ])

          return MaskElement
        })()
        IMask.MaskElement = MaskElement

        /** Bridge between HTMLElement and {@link Masked} */

        const HTMLMaskElement = /*#__PURE__*/ (function (_MaskElement) {
          _inherits(HTMLMaskElement, _MaskElement)

          const _super = _createSuper(HTMLMaskElement)

          /** Mapping between HTMLElement events and mask internal events */

          /** HTMLElement to use mask on */

          /**
       @param {HTMLInputElement|HTMLTextAreaElement} input
       */
          function HTMLMaskElement(input) {
            let _this

            _classCallCheck(this, HTMLMaskElement)

            _this = _super.call(this)
            _this.input = input
            _this._handlers = {}
            return _this
          }

          /** */
          // $FlowFixMe https://github.com/facebook/flow/issues/2839

          _createClass(HTMLMaskElement, [
            {
              key: 'rootElement',
              get: function get() {
                let _this$input$getRootNo, _this$input$getRootNo2, _this$input

                return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null &&
            _this$input$getRootNo !== void 0
                  ? _this$input$getRootNo
                  : document
              },
              /**
           Is element in focus
           @readonly
           */
            },
            {
              key: 'isActive',
              get: function get() {
                //$FlowFixMe
                return this.input === this.rootElement.activeElement
              },
              /**
           Returns HTMLElement selection start
           @override
           */
            },
            {
              key: '_unsafeSelectionStart',
              get: function get() {
                return this.input.selectionStart
              },
              /**
           Returns HTMLElement selection end
           @override
           */
            },
            {
              key: '_unsafeSelectionEnd',
              get: function get() {
                return this.input.selectionEnd
              },
              /**
           Sets HTMLElement selection
           @override
           */
            },
            {
              key: '_unsafeSelect',
              value: function _unsafeSelect(start, end) {
                this.input.setSelectionRange(start, end)
              },
              /**
           HTMLElement value
           @override
           */
            },
            {
              key: 'value',
              get: function get() {
                return this.input.value
              },
              set: function set(value) {
                this.input.value = value
              },
              /**
           Binds HTMLElement events to mask internal events
           @override
           */
            },
            {
              key: 'bindEvents',
              value: function bindEvents(handlers) {
                const _this2 = this

                Object.keys(handlers).forEach(function (event) {
                  return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event])
                })
              },
              /**
           Unbinds HTMLElement events to mask internal events
           @override
           */
            },
            {
              key: 'unbindEvents',
              value: function unbindEvents() {
                const _this3 = this

                Object.keys(this._handlers).forEach(function (event) {
                  return _this3._toggleEventHandler(event)
                })
              },
              /** */
            },
            {
              key: '_toggleEventHandler',
              value: function _toggleEventHandler(event, handler) {
                if (this._handlers[event]) {
                  this.input.removeEventListener(event, this._handlers[event])
                  delete this._handlers[event]
                }

                if (handler) {
                  this.input.addEventListener(event, handler)
                  this._handlers[event] = handler
                }
              },
            },
          ])

          return HTMLMaskElement
        })(MaskElement)
        HTMLMaskElement.EVENTS_MAP = {
          selectionChange: 'keydown',
          input: 'input',
          drop: 'drop',
          click: 'click',
          focus: 'focus',
          commit: 'blur',
        }
        IMask.HTMLMaskElement = HTMLMaskElement

        const HTMLContenteditableMaskElement = /*#__PURE__*/ (function (_HTMLMaskElement) {
          _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement)

          const _super = _createSuper(HTMLContenteditableMaskElement)

          function HTMLContenteditableMaskElement() {
            _classCallCheck(this, HTMLContenteditableMaskElement)

            return _super.apply(this, arguments)
          }

          _createClass(HTMLContenteditableMaskElement, [
            {
              key: '_unsafeSelectionStart',
              get:
            /**
             Returns HTMLElement selection start
             @override
             */
            function get() {
              const root = this.rootElement
              const selection = root.getSelection && root.getSelection()
              const anchorOffset = selection && selection.anchorOffset
              const focusOffset = selection && selection.focusOffset

              if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
                return anchorOffset
              }

              return focusOffset
            },
              /**
           Returns HTMLElement selection end
           @override
           */
            },
            {
              key: '_unsafeSelectionEnd',
              get: function get() {
                const root = this.rootElement
                const selection = root.getSelection && root.getSelection()
                const anchorOffset = selection && selection.anchorOffset
                const focusOffset = selection && selection.focusOffset

                if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
                  return anchorOffset
                }

                return focusOffset
              },
              /**
           Sets HTMLElement selection
           @override
           */
            },
            {
              key: '_unsafeSelect',
              value: function _unsafeSelect(start, end) {
                if (!this.rootElement.createRange) return
                const range = this.rootElement.createRange()
                range.setStart(this.input.firstChild || this.input, start)
                range.setEnd(this.input.lastChild || this.input, end)
                const root = this.rootElement
                const selection = root.getSelection && root.getSelection()

                if (selection) {
                  selection.removeAllRanges()
                  selection.addRange(range)
                }
              },
              /**
           HTMLElement value
           @override
           */
            },
            {
              key: 'value',
              get: function get() {
                // $FlowFixMe
                return this.input.textContent
              },
              set: function set(value) {
                this.input.textContent = value
              },
            },
          ])

          return HTMLContenteditableMaskElement
        })(HTMLMaskElement)
        IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement

        const _excluded$1 = [ 'mask', ]
        /** Listens to element events and controls changes between element and {@link Masked} */

        const InputMask = /*#__PURE__*/ (function () {
          /**
       View element
       @readonly
       */

          /**
       Internal {@link Masked} model
       @readonly
       */

          /**
       @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
       @param {Object} opts
       */
          function InputMask(el, opts) {
            _classCallCheck(this, InputMask)

            this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el)
            this.masked = createMask(opts)
            this._listeners = {}
            this._value = ''
            this._unmaskedValue = ''
            this._saveSelection = this._saveSelection.bind(this)
            this._onInput = this._onInput.bind(this)
            this._onChange = this._onChange.bind(this)
            this._onDrop = this._onDrop.bind(this)
            this._onFocus = this._onFocus.bind(this)
            this._onClick = this._onClick.bind(this)
            this.alignCursor = this.alignCursor.bind(this)
            this.alignCursorFriendly = this.alignCursorFriendly.bind(this)

            this._bindEvents() // refresh

            this.updateValue()

            this._onChange()
          }

          /** Read or update mask */

          _createClass(InputMask, [
            {
              key: 'mask',
              get: function get() {
                return this.masked.mask
              },
              set: function set(mask) {
                if (this.maskEquals(mask)) return // $FlowFixMe No ideas ... after update

                if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
                  this.masked.updateOptions({ mask: mask, })
                  return
                }

                const masked = createMask({ mask: mask, })
                masked.unmaskedValue = this.masked.unmaskedValue
                this.masked = masked
              },
              /** Raw value */
            },
            {
              key: 'maskEquals',
              value: function maskEquals(mask) {
                let _this$masked

                return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask))
              },
            },
            {
              key: 'value',
              get: function get() {
                return this._value
              },
              set: function set(str) {
                this.masked.value = str
                this.updateControl()
                this.alignCursor()
              },
              /** Unmasked value */
            },
            {
              key: 'unmaskedValue',
              get: function get() {
                return this._unmaskedValue
              },
              set: function set(str) {
                this.masked.unmaskedValue = str
                this.updateControl()
                this.alignCursor()
              },
              /** Typed unmasked value */
            },
            {
              key: 'typedValue',
              get: function get() {
                return this.masked.typedValue
              },
              set: function set(val) {
                this.masked.typedValue = val
                this.updateControl()
                this.alignCursor()
              },
              /**
           Starts listening to element events
           @protected
           */
            },
            {
              key: '_bindEvents',
              value: function _bindEvents() {
                this.el.bindEvents({
                  selectionChange: this._saveSelection,
                  input: this._onInput,
                  drop: this._onDrop,
                  click: this._onClick,
                  focus: this._onFocus,
                  commit: this._onChange,
                })
              },
              /**
           Stops listening to element events
           @protected
           */
            },
            {
              key: '_unbindEvents',
              value: function _unbindEvents() {
                if (this.el) this.el.unbindEvents()
              },
              /**
           Fires custom event
           @protected
           */
            },
            {
              key: '_fireEvent',
              value: function _fireEvent(ev) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key]
                }

                const listeners = this._listeners[ev]
                if (!listeners) return
                listeners.forEach(function (l) {
                  return l.apply(void 0, args)
                })
              },
              /**
           Current selection start
           @readonly
           */
            },
            {
              key: 'selectionStart',
              get: function get() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
              },
              /** Current cursor position */
            },
            {
              key: 'cursorPos',
              get: function get() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
              },
              set: function set(pos) {
                if (!this.el || !this.el.isActive) return
                this.el.select(pos, pos)

                this._saveSelection()
              },
              /**
           Stores current selection
           @protected
           */
            },
            {
              key: '_saveSelection',
              value: function /* ev */
              _saveSelection() {
                if (this.value !== this.el.value) {
                  console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.') // eslint-disable-line no-console
                }

                this._selection = {
                  start: this.selectionStart,
                  end: this.cursorPos,
                }
              },
              /** Syncronizes model value from view */
            },
            {
              key: 'updateValue',
              value: function updateValue() {
                this.masked.value = this.el.value
                this._value = this.masked.value
              },
              /** Syncronizes view from model value, fires change events */
            },
            {
              key: 'updateControl',
              value: function updateControl() {
                const newUnmaskedValue = this.masked.unmaskedValue
                const newValue = this.masked.value
                const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue
                this._unmaskedValue = newUnmaskedValue
                this._value = newValue
                if (this.el.value !== newValue) this.el.value = newValue
                if (isChanged) this._fireChangeEvents()
              },
              /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */
            },
            {
              key: 'updateOptions',
              value: function updateOptions(opts) {
                const mask = opts.mask,
                  restOpts = _objectWithoutProperties(opts, _excluded$1)

                const updateMask = !this.maskEquals(mask)
                const updateOpts = !objectIncludes(this.masked, restOpts)
                if (updateMask) this.mask = mask
                if (updateOpts) this.masked.updateOptions(restOpts)
                if (updateMask || updateOpts) this.updateControl()
              },
              /** Updates cursor */
            },
            {
              key: 'updateCursor',
              value: function updateCursor(cursorPos) {
                if (cursorPos == null) return
                this.cursorPos = cursorPos // also queue change cursor for mobile browsers

                this._delayUpdateCursor(cursorPos)
              },
              /**
           Delays cursor update to support mobile browsers
           @private
           */
            },
            {
              key: '_delayUpdateCursor',
              value: function _delayUpdateCursor(cursorPos) {
                const _this = this

                this._abortUpdateCursor()

                this._changingCursorPos = cursorPos
                this._cursorChanging = setTimeout(function () {
                  if (!_this.el) return // if was destroyed

                  _this.cursorPos = _this._changingCursorPos

                  _this._abortUpdateCursor()
                }, 10)
              },
              /**
           Fires custom events
           @protected
           */
            },
            {
              key: '_fireChangeEvents',
              value: function _fireChangeEvents() {
                this._fireEvent('accept', this._inputEvent)

                if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent)
              },
              /**
           Aborts delayed cursor update
           @private
           */
            },
            {
              key: '_abortUpdateCursor',
              value: function _abortUpdateCursor() {
                if (this._cursorChanging) {
                  clearTimeout(this._cursorChanging)
                  delete this._cursorChanging
                }
              },
              /** Aligns cursor to nearest available position */
            },
            {
              key: 'alignCursor',
              value: function alignCursor() {
                this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT))
              },
              /** Aligns cursor only if selection is empty */
            },
            {
              key: 'alignCursorFriendly',
              value: function alignCursorFriendly() {
                if (this.selectionStart !== this.cursorPos) return // skip if range is selected

                this.alignCursor()
              },
              /** Adds listener on custom event */
            },
            {
              key: 'on',
              value: function on(ev, handler) {
                if (!this._listeners[ev]) this._listeners[ev] = []

                this._listeners[ev].push(handler)

                return this
              },
              /** Removes custom event listener */
            },
            {
              key: 'off',
              value: function off(ev, handler) {
                if (!this._listeners[ev]) return this

                if (!handler) {
                  delete this._listeners[ev]
                  return this
                }

                const hIndex = this._listeners[ev].indexOf(handler)

                if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1)
                return this
              },
              /** Handles view input event */
            },
            {
              key: '_onInput',
              value: function _onInput(e) {
                this._inputEvent = e

                this._abortUpdateCursor() // fix strange IE behavior

                if (!this._selection) return this.updateValue()
                const details = new ActionDetails( // new state
                  this.el.value,
                  this.cursorPos, // old state
                  this.value,
                  this._selection
                )
                const oldRawValue = this.masked.rawInputValue
                const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset // force align in remove direction only if no input chars were removed
                // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

                const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE
                let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection)
                if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE)
                this.updateControl()
                this.updateCursor(cursorPos)
                delete this._inputEvent
              },
              /** Handles view change event and commits model value */
            },
            {
              key: '_onChange',
              value: function _onChange() {
                if (this.value !== this.el.value) {
                  this.updateValue()
                }

                this.masked.doCommit()
                this.updateControl()

                this._saveSelection()
              },
              /** Handles view drop event, prevents by default */
            },
            {
              key: '_onDrop',
              value: function _onDrop(ev) {
                ev.preventDefault()
                ev.stopPropagation()
              },
              /** Restore last selection on focus */
            },
            {
              key: '_onFocus',
              value: function _onFocus(ev) {
                this.alignCursorFriendly()
              },
              /** Restore last selection on focus */
            },
            {
              key: '_onClick',
              value: function _onClick(ev) {
                this.alignCursorFriendly()
              },
              /** Unbind view events and removes element reference */
            },
            {
              key: 'destroy',
              value: function destroy() {
                this._unbindEvents() // $FlowFixMe why not do so?

                this._listeners.length = 0 // $FlowFixMe

                delete this.el
              },
            },
          ])

          return InputMask
        })()
        IMask.InputMask = InputMask

        /** Pattern which validates enum values */

        const MaskedEnum = /*#__PURE__*/ (function (_MaskedPattern) {
          _inherits(MaskedEnum, _MaskedPattern)

          const _super = _createSuper(MaskedEnum)

          function MaskedEnum() {
            _classCallCheck(this, MaskedEnum)

            return _super.apply(this, arguments)
          }

          _createClass(MaskedEnum, [
            {
              key: '_update',
              value:
            /**
             @override
             @param {Object} opts
             */
            function _update(opts) {
              // TODO type
              if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length)

              _get(_getPrototypeOf(MaskedEnum.prototype), '_update', this).call(this, opts)
            },
              /**
           @override
           */
            },
            {
              key: 'doValidate',
              value: function doValidate() {
                let _this = this,
                  _get2

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key]
                }

                return (
                  this.enum.some(function (e) {
                    return e.indexOf(_this.unmaskedValue) >= 0
                  }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), 'doValidate', this)).call.apply(_get2, [ this, ].concat(args))
                )
              },
            },
          ])

          return MaskedEnum
        })(MaskedPattern)
        IMask.MaskedEnum = MaskedEnum

        /**
     Number mask
     @param {Object} opts
     @param {string} opts.radix - Single char
     @param {string} opts.thousandsSeparator - Single char
     @param {Array<string>} opts.mapToRadix - Array of single chars
     @param {number} opts.min
     @param {number} opts.max
     @param {number} opts.scale - Digits after point
     @param {boolean} opts.signed - Allow negative
     @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
     @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
     */
        const MaskedNumber = /*#__PURE__*/ (function (_Masked) {
          _inherits(MaskedNumber, _Masked)

          const _super = _createSuper(MaskedNumber)

          /** Single char */

          /** Single char */

          /** Array of single chars */

          /** */

          /** */

          /** Digits after point */

          /** */

          /** Flag to remove leading and trailing zeros in the end of editing */

          /** Flag to pad trailing zeros after point in the end of editing */
          function MaskedNumber(opts) {
            _classCallCheck(this, MaskedNumber)

            return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts))
          }

          /**
       @override
       */

          _createClass(MaskedNumber, [
            {
              key: '_update',
              value: function _update(opts) {
                _get(_getPrototypeOf(MaskedNumber.prototype), '_update', this).call(this, opts)

                this._updateRegExps()
              },
              /** */
            },
            {
              key: '_updateRegExps',
              value: function _updateRegExps() {
                // use different regexp to process user input (more strict, input suffix) and tail shifting
                const start = '^' + (this.allowNegative ? '[+|\\-]?' : '')
                const midInput = '(0|([1-9]+\\d*))?'
                const mid = '\\d*'
                const end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$'
                this._numberRegExpInput = new RegExp(start + midInput + end)
                this._numberRegExp = new RegExp(start + mid + end)
                this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g')
                this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g')
              },
              /** */
            },
            {
              key: '_removeThousandsSeparators',
              value: function _removeThousandsSeparators(value) {
                return value.replace(this._thousandsSeparatorRegExp, '')
              },
              /** */
            },
            {
              key: '_insertThousandsSeparators',
              value: function _insertThousandsSeparators(value) {
                // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
                const parts = value.split(this.radix)
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator)
                return parts.join(this.radix)
              },
              /**
           @override
           */
            },
            {
              key: 'doPrepare',
              value: function doPrepare(ch) {
                let _get2

                ch = ch.replace(this._mapToRadixRegExp, this.radix)

                const noSepCh = this._removeThousandsSeparators(ch)

                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key]
                }

                const _normalizePrepare = normalizePrepare((_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), 'doPrepare', this)).call.apply(_get2, [
                    this,
                    noSepCh,
                  ].concat(args))),
                  _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2),
                  prepCh = _normalizePrepare2[0],
                  details = _normalizePrepare2[1]

                if (ch && !noSepCh) details.skip = true
                return [
                  prepCh,
                  details,
                ]
              },
              /** */
            },
            {
              key: '_separatorsCount',
              value: function _separatorsCount(to) {
                const extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false
                let count = 0

                for (let pos = 0; pos < to; ++pos) {
                  if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
                    ++count
                    if (extendOnSeparators) to += this.thousandsSeparator.length
                  }
                }

                return count
              },
              /** */
            },
            {
              key: '_separatorsCountFromSlice',
              value: function _separatorsCountFromSlice() {
                const slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value
                return this._separatorsCount(this._removeThousandsSeparators(slice).length, true)
              },
              /**
           @override
           */
            },
            {
              key: 'extractInput',
              value: function extractInput() {
                let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
                let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length
                const flags = arguments.length > 2 ? arguments[2] : undefined

                const _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos)

                const _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2)

                fromPos = _this$_adjustRangeWit2[0]
                toPos = _this$_adjustRangeWit2[1]
                return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), 'extractInput', this).call(this, fromPos, toPos, flags))
              },
              /**
           @override
           */
            },
            {
              key: '_appendCharRaw',
              value: function _appendCharRaw(ch) {
                const flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
                if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), '_appendCharRaw', this).call(this, ch, flags)
                const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value

                const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue)

                this._value = this._removeThousandsSeparators(this.value)

                const appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), '_appendCharRaw', this).call(this, ch, flags)

                this._value = this._insertThousandsSeparators(this._value)
                const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value

                const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue)

                appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
                appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator
                return appendDetails
              },
              /** */
            },
            {
              key: '_findSeparatorAround',
              value: function _findSeparatorAround(pos) {
                if (this.thousandsSeparator) {
                  const searchFrom = pos - this.thousandsSeparator.length + 1
                  const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom)
                  if (separatorPos <= pos) return separatorPos
                }

                return -1
              },
            },
            {
              key: '_adjustRangeWithSeparators',
              value: function _adjustRangeWithSeparators(from, to) {
                const separatorAroundFromPos = this._findSeparatorAround(from)

                if (separatorAroundFromPos >= 0) from = separatorAroundFromPos

                const separatorAroundToPos = this._findSeparatorAround(to)

                if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length
                return [
                  from,
                  to,
                ]
              },
              /**
           @override
           */
            },
            {
              key: 'remove',
              value: function remove() {
                let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
                let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length

                const _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos)

                const _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2)

                fromPos = _this$_adjustRangeWit4[0]
                toPos = _this$_adjustRangeWit4[1]
                const valueBeforePos = this.value.slice(0, fromPos)
                const valueAfterPos = this.value.slice(toPos)

                const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length)

                this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos))

                const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos)

                return new ChangeDetails({ tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length, })
              },
              /**
           @override
           */
            },
            {
              key: 'nearestInputPos',
              value: function nearestInputPos(cursorPos, direction) {
                if (!this.thousandsSeparator) return cursorPos

                switch (direction) {
                case DIRECTION.NONE:
                case DIRECTION.LEFT:
                case DIRECTION.FORCE_LEFT: {
                  const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1)

                  if (separatorAtLeftPos >= 0) {
                    const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length

                    if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                      return separatorAtLeftPos
                    }
                  }

                  break
                }

                case DIRECTION.RIGHT:
                case DIRECTION.FORCE_RIGHT: {
                  const separatorAtRightPos = this._findSeparatorAround(cursorPos)

                  if (separatorAtRightPos >= 0) {
                    return separatorAtRightPos + this.thousandsSeparator.length
                  }
                }
                }

                return cursorPos
              },
              /**
           @override
           */
            },
            {
              key: 'doValidate',
              value: function doValidate(flags) {
                const regexp = flags.input ? this._numberRegExpInput : this._numberRegExp // validate as string

                let valid = regexp.test(this._removeThousandsSeparators(this.value))

                if (valid) {
                  // validate as number
                  const number = this.number
                  valid =
                valid &&
                !isNaN(number) && // check min bound for negative values
                (this.min == null || this.min >= 0 || this.min <= this.number) && // check max bound for positive values
                (this.max == null || this.max <= 0 || this.number <= this.max)
                }

                return valid && _get(_getPrototypeOf(MaskedNumber.prototype), 'doValidate', this).call(this, flags)
              },
              /**
           @override
           */
            },
            {
              key: 'doCommit',
              value: function doCommit() {
                if (this.value) {
                  const number = this.number
                  let validnum = number // check bounds

                  if (this.min != null) validnum = Math.max(validnum, this.min)
                  if (this.max != null) validnum = Math.min(validnum, this.max)
                  if (validnum !== number) this.unmaskedValue = String(validnum)
                  let formatted = this.value
                  if (this.normalizeZeros) formatted = this._normalizeZeros(formatted)
                  if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted)
                  this._value = formatted
                }

                _get(_getPrototypeOf(MaskedNumber.prototype), 'doCommit', this).call(this)
              },
              /** */
            },
            {
              key: '_normalizeZeros',
              value: function _normalizeZeros(value) {
                const parts = this._removeThousandsSeparators(value).split(this.radix) // remove leading zeros

                parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
                  return sign + num
                }) // add leading zero

                if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0'

                if (parts.length > 1) {
                  parts[1] = parts[1].replace(/0*$/, '') // remove trailing zeros

                  if (!parts[1].length) parts.length = 1 // remove fractional
                }

                return this._insertThousandsSeparators(parts.join(this.radix))
              },
              /** */
            },
            {
              key: '_padFractionalZeros',
              value: function _padFractionalZeros(value) {
                if (!value) return value
                const parts = value.split(this.radix)
                if (parts.length < 2) parts.push('')
                parts[1] = parts[1].padEnd(this.scale, '0')
                return parts.join(this.radix)
              },
              /**
           @override
           */
            },
            {
              key: 'unmaskedValue',
              get: function get() {
                return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.')
              },
              set: function set(unmaskedValue) {
                _set(_getPrototypeOf(MaskedNumber.prototype), 'unmaskedValue', unmaskedValue.replace('.', this.radix), this, true)
              },
              /**
           @override
           */
            },
            {
              key: 'typedValue',
              get: function get() {
                return Number(this.unmaskedValue)
              },
              set: function set(n) {
                _set(_getPrototypeOf(MaskedNumber.prototype), 'unmaskedValue', String(n), this, true)
              },
              /** Parsed Number */
            },
            {
              key: 'number',
              get: function get() {
                return this.typedValue
              },
              set: function set(number) {
                this.typedValue = number
              },
              /**
           Is negative allowed
           @readonly
           */
            },
            {
              key: 'allowNegative',
              get: function get() {
                return this.signed || (this.min != null && this.min < 0) || (this.max != null && this.max < 0)
              },
            },
          ])

          return MaskedNumber
        })(Masked)
        MaskedNumber.DEFAULTS = {
          radix: ',',
          thousandsSeparator: '',
          mapToRadix: [ '.', ],
          scale: 2,
          signed: false,
          normalizeZeros: true,
          padFractionalZeros: false,
        }
        IMask.MaskedNumber = MaskedNumber

        /** Masking by custom Function */

        const MaskedFunction = /*#__PURE__*/ (function (_Masked) {
          _inherits(MaskedFunction, _Masked)

          const _super = _createSuper(MaskedFunction)

          function MaskedFunction() {
            _classCallCheck(this, MaskedFunction)

            return _super.apply(this, arguments)
          }

          _createClass(MaskedFunction, [
            {
              key: '_update',
              value:
            /**
             @override
             @param {Object} opts
             */
            function _update(opts) {
              if (opts.mask) opts.validate = opts.mask

              _get(_getPrototypeOf(MaskedFunction.prototype), '_update', this).call(this, opts)
            },
            },
          ])

          return MaskedFunction
        })(Masked)
        IMask.MaskedFunction = MaskedFunction

        const _excluded = [
          'compiledMasks',
          'currentMaskRef',
          'currentMask',
        ]

        /** Dynamic mask for choosing apropriate mask in run-time */
        const MaskedDynamic = /*#__PURE__*/ (function (_Masked) {
          _inherits(MaskedDynamic, _Masked)

          const _super = _createSuper(MaskedDynamic)

          /** Currently chosen mask */

          /** Compliled {@link Masked} options */

          /** Chooses {@link Masked} depending on input value */

          /**
       @param {Object} opts
       */
          function MaskedDynamic(opts) {
            let _this

            _classCallCheck(this, MaskedDynamic)

            _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts))
            _this.currentMask = null
            return _this
          }

          /**
       @override
       */

          _createClass(MaskedDynamic, [
            {
              key: '_update',
              value: function _update(opts) {
                _get(_getPrototypeOf(MaskedDynamic.prototype), '_update', this).call(this, opts)

                if ('mask' in opts) {
                  // mask could be totally dynamic with only `dispatch` option
                  this.compiledMasks = Array.isArray(opts.mask)
                    ? opts.mask.map(function (m) {
                      return createMask(m)
                    })
                    : []
                }
              },
              /**
           @override
           */
            },
            {
              key: '_appendCharRaw',
              value: function _appendCharRaw(ch) {
                const flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

                const details = this._applyDispatch(ch, flags)

                if (this.currentMask) {
                  details.aggregate(this.currentMask._appendChar(ch, flags))
                }

                return details
              },
            },
            {
              key: '_applyDispatch',
              value: function _applyDispatch() {
                const appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
                const flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
                const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value
                const inputValue = this.rawInputValue
                const insertValue =
              flags.tail && flags._beforeTailState != null // $FlowFixMe - tired to fight with type system
                ? flags._beforeTailState._rawInputValue
                : inputValue
                const tailValue = inputValue.slice(insertValue.length)
                const prevMask = this.currentMask
                const details = new ChangeDetails()
                const prevMaskState = prevMask && prevMask.state // clone flags to prevent overwriting `_beforeTailState`

                this.currentMask = this.doDispatch(appended, Object.assign({}, flags)) // restore state after dispatch

                if (this.currentMask) {
                  if (this.currentMask !== prevMask) {
                    // if mask changed reapply input
                    this.currentMask.reset()

                    if (insertValue) {
                      // $FlowFixMe - it's ok, we don't change current mask above
                      const d = this.currentMask.append(insertValue, { raw: true, })
                      details.tailShift = d.inserted.length - prevValueBeforeTail.length
                    }

                    if (tailValue) {
                      // $FlowFixMe - it's ok, we don't change current mask above
                      details.tailShift += this.currentMask.append(tailValue, {
                        raw: true,
                        tail: true,
                      }).tailShift
                    }
                  } else {
                    // Dispatch can do something bad with state, so
                    // restore prev mask state
                    this.currentMask.state = prevMaskState
                  }
                }

                return details
              },
            },
            {
              key: '_appendPlaceholder',
              value: function _appendPlaceholder() {
                const details = this._applyDispatch.apply(this, arguments)

                if (this.currentMask) {
                  details.aggregate(this.currentMask._appendPlaceholder())
                }

                return details
              },
              /**
           @override
           */
            },
            {
              key: '_appendEager',
              value: function _appendEager() {
                const details = this._applyDispatch.apply(this, arguments)

                if (this.currentMask) {
                  details.aggregate(this.currentMask._appendEager())
                }

                return details
              },
              /**
           @override
           */
            },
            {
              key: 'doDispatch',
              value: function doDispatch(appended) {
                const flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
                return this.dispatch(appended, this, flags)
              },
              /**
           @override
           */
            },
            {
              key: 'doValidate',
              value: function doValidate() {
                let _get2, _this$currentMask

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key]
                }

                return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), 'doValidate', this)).call.apply(_get2, [ this, ].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args))
              },
              /**
           @override
           */
            },
            {
              key: 'reset',
              value: function reset() {
                let _this$currentMask2;

                (_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.reset()
                this.compiledMasks.forEach(function (m) {
                  return m.reset()
                })
              },
              /**
           @override
           */
            },
            {
              key: 'value',
              get: function get() {
                return this.currentMask ? this.currentMask.value : ''
              },
              set: function set(value) {
                _set(_getPrototypeOf(MaskedDynamic.prototype), 'value', value, this, true)
              },
              /**
           @override
           */
            },
            {
              key: 'unmaskedValue',
              get: function get() {
                return this.currentMask ? this.currentMask.unmaskedValue : ''
              },
              set: function set(unmaskedValue) {
                _set(_getPrototypeOf(MaskedDynamic.prototype), 'unmaskedValue', unmaskedValue, this, true)
              },
              /**
           @override
           */
            },
            {
              key: 'typedValue',
              get: function get() {
                return this.currentMask ? this.currentMask.typedValue : ''
              }, // probably typedValue should not be used with dynamic
              set: function set(value) {
                let unmaskedValue = String(value) // double check it

                if (this.currentMask) {
                  this.currentMask.typedValue = value
                  unmaskedValue = this.currentMask.unmaskedValue
                }

                this.unmaskedValue = unmaskedValue
              },
              /**
           @override
           */
            },
            {
              key: 'isComplete',
              get: function get() {
                let _this$currentMask3

                return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isComplete)
              },
              /**
           @override
           */
            },
            {
              key: 'isFilled',
              get: function get() {
                let _this$currentMask4

                return Boolean((_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.isFilled)
              },
              /**
           @override
           */
            },
            {
              key: 'remove',
              value: function remove() {
                const details = new ChangeDetails()

                if (this.currentMask) {
                  let _this$currentMask5

                  details
                    .aggregate((_this$currentMask5 = this.currentMask).remove.apply(_this$currentMask5, arguments)) // update with dispatch
                    .aggregate(this._applyDispatch())
                }

                return details
              },
              /**
           @override
           */
            },
            {
              key: 'state',
              get: function get() {
                return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), 'state', this), {
                  _rawInputValue: this.rawInputValue,
                  compiledMasks: this.compiledMasks.map(function (m) {
                    return m.state
                  }),
                  currentMaskRef: this.currentMask,
                  currentMask: this.currentMask && this.currentMask.state,
                })
              },
              set: function set(state) {
                const compiledMasks = state.compiledMasks,
                  currentMaskRef = state.currentMaskRef,
                  currentMask = state.currentMask,
                  maskedState = _objectWithoutProperties(state, _excluded)

                this.compiledMasks.forEach(function (m, mi) {
                  return (m.state = compiledMasks[mi])
                })

                if (currentMaskRef != null) {
                  this.currentMask = currentMaskRef
                  this.currentMask.state = currentMask
                }

                _set(_getPrototypeOf(MaskedDynamic.prototype), 'state', maskedState, this, true)
              },
              /**
           @override
           */
            },
            {
              key: 'extractInput',
              value: function extractInput() {
                let _this$currentMask6

                return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : ''
              },
              /**
           @override
           */
            },
            {
              key: 'extractTail',
              value: function extractTail() {
                let _this$currentMask7, _get3

                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2]
                }

                return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), 'extractTail', this)).call.apply(_get3, [ this, ].concat(args))
              },
              /**
           @override
           */
            },
            {
              key: 'doCommit',
              value: function doCommit() {
                if (this.currentMask) this.currentMask.doCommit()

                _get(_getPrototypeOf(MaskedDynamic.prototype), 'doCommit', this).call(this)
              },
              /**
           @override
           */
            },
            {
              key: 'nearestInputPos',
              value: function nearestInputPos() {
                let _this$currentMask8, _get4

                for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = arguments[_key3]
                }

                return this.currentMask
                  ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args)
                  : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), 'nearestInputPos', this)).call.apply(_get4, [ this, ].concat(args))
              },
            },
            {
              key: 'overwrite',
              get: function get() {
                return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), 'overwrite', this)
              },
              set: function set(overwrite) {
                console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')
              },
            },
            {
              key: 'eager',
              get: function get() {
                return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf(MaskedDynamic.prototype), 'eager', this)
              },
              set: function set(eager) {
                console.warn('"eager" option is not available in dynamic mask, use this option in siblings')
              },
              /**
           @override
           */
            },
            {
              key: 'maskEquals',
              value: function maskEquals(mask) {
                return (
                  Array.isArray(mask) &&
              this.compiledMasks.every(function (m, mi) {
                let _mask$mi

                return m.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask)
              })
                )
              },
            },
          ])

          return MaskedDynamic
        })(Masked)
        MaskedDynamic.DEFAULTS = {
          dispatch: function dispatch(appended, masked, flags) {
            if (!masked.compiledMasks.length) return
            const inputValue = masked.rawInputValue // simulate input

            const inputs = masked.compiledMasks.map(function (m, index) {
              m.reset()
              m.append(inputValue, { raw: true, })
              m.append(appended, flags)
              const weight = m.rawInputValue.length
              return {
                weight: weight,
                index: index,
              }
            }) // pop masks with longer values first

            inputs.sort(function (i1, i2) {
              return i2.weight - i1.weight
            })
            return masked.compiledMasks[inputs[0].index]
          },
        }
        IMask.MaskedDynamic = MaskedDynamic

        /** Mask pipe source and destination types */

        const PIPE_TYPE = {
          MASKED: 'value',
          UNMASKED: 'unmaskedValue',
          TYPED: 'typedValue',
        }

        /** Creates new pipe function depending on mask type, source and destination options */

        function createPipe(mask) {
          const from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED
          const to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED
          const masked = createMask(mask)
          return function (value) {
            return masked.runIsolated(function (m) {
              m[from] = value
              return m[to]
            })
          }
        }

        /** Pipes value through mask depending on mask type, source and destination options */

        function pipe(value) {
          for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            pipeArgs[_key - 1] = arguments[_key]
          }

          return createPipe.apply(void 0, pipeArgs)(value)
        }

        IMask.PIPE_TYPE = PIPE_TYPE
        IMask.createPipe = createPipe
        IMask.pipe = pipe

        try {
          globalThis.IMask = IMask
        } catch (e) {
        }

        exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement
        exports.HTMLMaskElement = HTMLMaskElement
        exports.InputMask = InputMask
        exports.MaskElement = MaskElement
        exports.Masked = Masked
        exports.MaskedDate = MaskedDate
        exports.MaskedDynamic = MaskedDynamic
        exports.MaskedEnum = MaskedEnum
        exports.MaskedFunction = MaskedFunction
        exports.MaskedNumber = MaskedNumber
        exports.MaskedPattern = MaskedPattern
        exports.MaskedRange = MaskedRange
        exports.MaskedRegExp = MaskedRegExp
        exports.PIPE_TYPE = PIPE_TYPE
        exports.createMask = createMask
        exports.createPipe = createPipe
        exports['default'] = IMask
        exports.pipe = pipe

        Object.defineProperty(exports, '__esModule', { value: true, })
      })


      /***/
    }),
    /* 7 */
    /***/ (function (__unused_webpack_module, exports) {

      (function (global, factory) {
        true
          ? factory(exports)
          : 0
      })(this, function (exports) {
        'use strict'

        exports.PipsMode = void 0;
        (function (PipsMode) {
          PipsMode['Range'] = 'range'
          PipsMode['Steps'] = 'steps'
          PipsMode['Positions'] = 'positions'
          PipsMode['Count'] = 'count'
          PipsMode['Values'] = 'values'
        })(exports.PipsMode || (exports.PipsMode = {}))
        exports.PipsType = void 0;
        (function (PipsType) {
          PipsType[(PipsType['None'] = -1)] = 'None'
          PipsType[(PipsType['NoValue'] = 0)] = 'NoValue'
          PipsType[(PipsType['LargeValue'] = 1)] = 'LargeValue'
          PipsType[(PipsType['SmallValue'] = 2)] = 'SmallValue'
        })(exports.PipsType || (exports.PipsType = {}))

        //region Helper Methods
        function isValidFormatter(entry) {
          return isValidPartialFormatter(entry) && typeof entry.from === 'function'
        }

        function isValidPartialFormatter(entry) {
          // partial formatters only need a to function and not a from function
          return typeof entry === 'object' && typeof entry.to === 'function'
        }

        function removeElement(el) {
          el.parentElement.removeChild(el)
        }

        function isSet(value) {
          return value !== null && value !== undefined
        }

        // Bindable version
        function preventDefault(e) {
          e.preventDefault()
        }

        // Removes duplicates from an array.
        function unique(array) {
          return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false
          }, {})
        }

        // Round a value to the closest 'to'.
        function closest(value, to) {
          return Math.round(value / to) * to
        }

        // Current position of an element relative to the document.
        function offset(elem, orientation) {
          const rect = elem.getBoundingClientRect()
          const doc = elem.ownerDocument
          const docElem = doc.documentElement
          const pageOffset = getPageOffset(doc)
          // getBoundingClientRect contains left scroll in Chrome on Android.
          // I haven't found a feature detection that proves this. Worst case
          // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
          if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0
          }
          return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft
        }

        // Checks whether a value is numerical.
        function isNumeric(a) {
          return typeof a === 'number' && !isNaN(a) && isFinite(a)
        }

        // Sets a class and removes it after [duration] ms.
        function addClassFor(element, className, duration) {
          if (duration > 0) {
            addClass(element, className)
            setTimeout(function () {
              removeClass(element, className)
            }, duration)
          }
        }

        // Limits a value to 0 - 100
        function limit(a) {
          return Math.max(Math.min(a, 100), 0)
        }

        // Wraps a variable as an array, if it isn't one yet.
        // Note that an input array is returned by reference!
        function asArray(a) {
          return Array.isArray(a) ? a : [ a, ]
        }

        // Counts decimals
        function countDecimals(numStr) {
          numStr = String(numStr)
          const pieces = numStr.split('.')
          return pieces.length > 1 ? pieces[1].length : 0
        }

        // http://youmightnotneedjquery.com/#add_class
        function addClass(el, className) {
          if (el.classList && !/\s/.test(className)) {
            el.classList.add(className)
          } else {
            el.className += ' ' + className
          }
        }

        // http://youmightnotneedjquery.com/#remove_class
        function removeClass(el, className) {
          if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className)
          } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
          }
        }

        // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
        function hasClass(el, className) {
          return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className)
        }

        // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
        function getPageOffset(doc) {
          const supportPageOffset = window.pageXOffset !== undefined
          const isCSS1Compat = (doc.compatMode || '') === 'CSS1Compat'
          const x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft
          const y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop
          return {
            x: x,
            y: y,
          }
        }

        // we provide a function to compute constants instead
        // of accessing window.* as soon as the module needs it
        // so that we do not compute anything if not needed
        function getActions() {
          // Determine the events to bind. IE11 implements pointerEvents without
          // a prefix, which breaks compatibility with the IE10 implementation.
          return window.navigator.pointerEnabled
            ? {
              start: 'pointerdown',
              move: 'pointermove',
              end: 'pointerup',
            }
            : window.navigator.msPointerEnabled
              ? {
                start: 'MSPointerDown',
                move: 'MSPointerMove',
                end: 'MSPointerUp',
              }
              : {
                start: 'mousedown touchstart',
                move: 'mousemove touchmove',
                end: 'mouseup touchend',
              }
        }

        // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
        // Issue #785
        function getSupportsPassive() {
          let supportsPassive = false
          /* eslint-disable */
      try {
        var opts = Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true;
          },
        });
        // @ts-ignore
        window.addEventListener("test", null, opts);
      } catch (e) {
      }
      /* eslint-enable */
          return supportsPassive
        }

        function getSupportsTouchActionNone() {
          return window.CSS && CSS.supports && CSS.supports('touch-action', 'none')
        }

        //endregion
        //region Range Calculation
        // Determine the size of a sub-range in relation to a full range.
        function subRangeRatio(pa, pb) {
          return 100 / (pb - pa)
        }

        // (percentage) How many percent is this value of this range?
        function fromPercentage(range, value, startRange) {
          return (value * 100) / (range[startRange + 1] - range[startRange])
        }

        // (percentage) Where is this value on this range?
        function toPercentage(range, value) {
          return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0)
        }

        // (value) How much is this percentage on this range?
        function isPercentage(range, value) {
          return (value * (range[1] - range[0])) / 100 + range[0]
        }

        function getJ(value, arr) {
          let j = 1
          while (value >= arr[j]) {
            j += 1
          }
          return j
        }

        // (percentage) Input a value, find where, on a scale of 0-100, it applies.
        function toStepping(xVal, xPct, value) {
          if (value >= xVal.slice(-1)[0]) {
            return 100
          }
          const j = getJ(value, xVal)
          const va = xVal[j - 1]
          const vb = xVal[j]
          const pa = xPct[j - 1]
          const pb = xPct[j]
          return pa + toPercentage([
            va,
            vb,
          ], value) / subRangeRatio(pa, pb)
        }

        // (value) Input a percentage, find where it is on the specified range.
        function fromStepping(xVal, xPct, value) {
          // There is no range group that fits 100
          if (value >= 100) {
            return xVal.slice(-1)[0]
          }
          const j = getJ(value, xPct)
          const va = xVal[j - 1]
          const vb = xVal[j]
          const pa = xPct[j - 1]
          const pb = xPct[j]
          return isPercentage([
            va,
            vb,
          ], (value - pa) * subRangeRatio(pa, pb))
        }

        // (percentage) Get the step that applies at a certain value.
        function getStep(xPct, xSteps, snap, value) {
          if (value === 100) {
            return value
          }
          const j = getJ(value, xPct)
          const a = xPct[j - 1]
          const b = xPct[j]
          // If 'snap' is set, steps are used as fixed points on the slider.
          if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
              return b
            }
            return a
          }
          if (!xSteps[j - 1]) {
            return value
          }
          return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1])
        }

        //endregion
        //region Spectrum
        const Spectrum = /** @class */ (function () {
          function Spectrum(entry, snap, singleStep) {
            this.xPct = []
            this.xVal = []
            this.xSteps = []
            this.xNumSteps = []
            this.xHighestCompleteStep = []
            this.xSteps = [ singleStep || false, ]
            this.xNumSteps = [ false, ]
            this.snap = snap
            let index
            const ordered = []
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
              ordered.push([
                asArray(entry[index]),
                index,
              ])
            })
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
              return a[0][0] - b[0][0]
            })
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
              this.handleEntryPoint(ordered[index][1], ordered[index][0])
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0)
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
              this.handleStepPoint(index, this.xNumSteps[index])
            }
          }

          Spectrum.prototype.getDistance = function (value) {
            const distances = []
            for (let index = 0; index < this.xNumSteps.length - 1; index++) {
              distances[index] = fromPercentage(this.xVal, value, index)
            }
            return distances
          }
          // Calculate the percentual distance over the whole scale of ranges.
          // direction: 0 = backwards / 1 = forwards
          Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            let xPct_index = 0
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
              while (value > this.xPct[xPct_index + 1]) {
                xPct_index++
              }
            } else if (value === this.xPct[this.xPct.length - 1]) {
              xPct_index = this.xPct.length - 2
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
              xPct_index++
            }
            if (distances === null) {
              distances = []
            }
            let start_factor
            let rest_factor = 1
            let rest_rel_distance = distances[xPct_index]
            let range_pct = 0
            let rel_range_distance = 0
            let abs_distance_counter = 0
            let range_counter = 0
            // Calculate what part of the start range the value is
            if (direction) {
              start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index])
            } else {
              start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index])
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
              // Calculate the percentage of total range
              range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter]
              // Detect if the margin, padding or limit is larger then the current range and calculate
              if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                // If larger then take the percentual distance of the whole range
                rel_range_distance = range_pct * start_factor
                // Rest factor of relative percentual distance still to be calculated
                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter]
                // Set start factor to 1 as for next range it does not apply.
                start_factor = 1
              } else {
                // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor
                // No rest left as the rest fits in current range
                rest_factor = 0
              }
              if (direction) {
                abs_distance_counter = abs_distance_counter - rel_range_distance
                // Limit range to first range when distance becomes outside of minimum range
                if (this.xPct.length + range_counter >= 1) {
                  range_counter--
                }
              } else {
                abs_distance_counter = abs_distance_counter + rel_range_distance
                // Limit range to last range when distance becomes outside of maximum range
                if (this.xPct.length - range_counter >= 1) {
                  range_counter++
                }
              }
              // Rest of relative percentual distance still to be calculated
              rest_rel_distance = distances[xPct_index + range_counter] * rest_factor
            }
            return value + abs_distance_counter
          }
          Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value)
            return value
          }
          Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value)
          }
          Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value)
            return value
          }
          Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            let j = getJ(value, this.xPct)
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
              j = Math.max(j - 1, 1)
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size
          }
          Spectrum.prototype.getNearbySteps = function (value) {
            const j = getJ(value, this.xPct)
            return {
              stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2],
              },
              thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1],
              },
              stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j],
              },
            }
          }
          Spectrum.prototype.countStepDecimals = function () {
            const stepDecimals = this.xNumSteps.map(countDecimals)
            return Math.max.apply(null, stepDecimals)
          }
          Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1]
          }
          // Outside testing
          Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value))
          }
          Spectrum.prototype.handleEntryPoint = function (index, value) {
            let percentage
            // Covert min/max syntax to 0 and 100.
            if (index === 'min') {
              percentage = 0
            } else if (index === 'max') {
              percentage = 100
            } else {
              percentage = parseFloat(index)
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
              throw new Error('noUiSlider: \'range\' value isn\'t numeric.')
            }
            // Store values.
            this.xPct.push(percentage)
            this.xVal.push(value[0])
            const value1 = Number(value[1])
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
              if (!isNaN(value1)) {
                this.xSteps[0] = value1
              }
            } else {
              this.xSteps.push(isNaN(value1) ? false : value1)
            }
            this.xHighestCompleteStep.push(0)
          }
          Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
              return
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
              this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i]
              return
            }
            // Factor to range ratio
            this.xSteps[i] = fromPercentage([
              this.xVal[i],
              this.xVal[i + 1],
            ], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1])
            const totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i]
            const highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1)
            const step = this.xVal[i] + this.xNumSteps[i] * highestStep
            this.xHighestCompleteStep[i] = step
          }
          return Spectrum
        })()
        //endregion
        //region Options
        /*	Every input option is tested and parsed. This will prevent
      endless validation in internal methods. These tests are
      structured with an item for every option available. An
      option can be marked as required by setting the 'r' flag.
      The testing function is provided with three arguments:
          - The provided value for the option;
          - A reference to the options object;
          - The name for the option;

      The testing function returns false when an error is detected,
      or true when everything is OK. It can also modify the option
      object, to make sure all values can be correctly looped elsewhere. */
        //region Defaults
        const defaultFormatter = {
          to: function (value) {
            return value === undefined ? '' : value.toFixed(2)
          },
          from: Number,
        }
        const cssClasses = {
          target: 'target',
          base: 'base',
          origin: 'origin',
          handle: 'handle',
          handleLower: 'handle-lower',
          handleUpper: 'handle-upper',
          touchArea: 'touch-area',
          horizontal: 'horizontal',
          vertical: 'vertical',
          background: 'background',
          connect: 'connect',
          connects: 'connects',
          ltr: 'ltr',
          rtl: 'rtl',
          textDirectionLtr: 'txt-dir-ltr',
          textDirectionRtl: 'txt-dir-rtl',
          draggable: 'draggable',
          drag: 'state-drag',
          tap: 'state-tap',
          active: 'active',
          tooltip: 'tooltip',
          pips: 'pips',
          pipsHorizontal: 'pips-horizontal',
          pipsVertical: 'pips-vertical',
          marker: 'marker',
          markerHorizontal: 'marker-horizontal',
          markerVertical: 'marker-vertical',
          markerNormal: 'marker-normal',
          markerLarge: 'marker-large',
          markerSub: 'marker-sub',
          value: 'value',
          valueHorizontal: 'value-horizontal',
          valueVertical: 'value-vertical',
          valueNormal: 'value-normal',
          valueLarge: 'value-large',
          valueSub: 'value-sub',
        }
        // Namespaces of internal event listeners
        const INTERNAL_EVENT_NS = {
          tooltips: '.__tooltips',
          aria: '.__aria',
        }

        //endregion
        function testStep(parsed, entry) {
          if (!isNumeric(entry)) {
            throw new Error('noUiSlider: \'step\' is not numeric.')
          }
          // The step option can still be used to set stepping
          // for linear sliders. Overwritten if set in 'range'.
          parsed.singleStep = entry
        }

        function testKeyboardPageMultiplier(parsed, entry) {
          if (!isNumeric(entry)) {
            throw new Error('noUiSlider: \'keyboardPageMultiplier\' is not numeric.')
          }
          parsed.keyboardPageMultiplier = entry
        }

        function testKeyboardMultiplier(parsed, entry) {
          if (!isNumeric(entry)) {
            throw new Error('noUiSlider: \'keyboardMultiplier\' is not numeric.')
          }
          parsed.keyboardMultiplier = entry
        }

        function testKeyboardDefaultStep(parsed, entry) {
          if (!isNumeric(entry)) {
            throw new Error('noUiSlider: \'keyboardDefaultStep\' is not numeric.')
          }
          parsed.keyboardDefaultStep = entry
        }

        function testRange(parsed, entry) {
          // Filter incorrect input.
          if (typeof entry !== 'object' || Array.isArray(entry)) {
            throw new Error('noUiSlider: \'range\' is not an object.')
          }
          // Catch missing start or end.
          if (entry.min === undefined || entry.max === undefined) {
            throw new Error('noUiSlider: Missing \'min\' or \'max\' in \'range\'.')
          }
          parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep)
        }

        function testStart(parsed, entry) {
          entry = asArray(entry)
          // Validate input. Values aren't tested, as the public .val method
          // will always provide a valid location.
          if (!Array.isArray(entry) || !entry.length) {
            throw new Error('noUiSlider: \'start\' option is incorrect.')
          }
          // Store the number of handles.
          parsed.handles = entry.length
          // When the slider is initialized, the .val method will
          // be called with the start options.
          parsed.start = entry
        }

        function testSnap(parsed, entry) {
          if (typeof entry !== 'boolean') {
            throw new Error('noUiSlider: \'snap\' option must be a boolean.')
          }
          // Enforce 100% stepping within subranges.
          parsed.snap = entry
        }

        function testAnimate(parsed, entry) {
          if (typeof entry !== 'boolean') {
            throw new Error('noUiSlider: \'animate\' option must be a boolean.')
          }
          // Enforce 100% stepping within subranges.
          parsed.animate = entry
        }

        function testAnimationDuration(parsed, entry) {
          if (typeof entry !== 'number') {
            throw new Error('noUiSlider: \'animationDuration\' option must be a number.')
          }
          parsed.animationDuration = entry
        }

        function testConnect(parsed, entry) {
          let connect = [ false, ]
          let i
          // Map legacy options
          if (entry === 'lower') {
            entry = [
              true,
              false,
            ]
          } else if (entry === 'upper') {
            entry = [
              false,
              true,
            ]
          }
          // Handle boolean options
          if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
              connect.push(entry)
            }
            connect.push(false)
          }
          // Reject invalid input
          else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error('noUiSlider: \'connect\' option doesn\'t match handle count.')
          } else {
            connect = entry
          }
          parsed.connect = connect
        }

        function testOrientation(parsed, entry) {
          // Set orientation to an a numerical value for easy
          // array selection.
          switch (entry) {
          case 'horizontal':
            parsed.ort = 0
            break
          case 'vertical':
            parsed.ort = 1
            break
          default:
            throw new Error('noUiSlider: \'orientation\' option is invalid.')
          }
        }

        function testMargin(parsed, entry) {
          if (!isNumeric(entry)) {
            throw new Error('noUiSlider: \'margin\' option must be numeric.')
          }
          // Issue #582
          if (entry === 0) {
            return
          }
          parsed.margin = parsed.spectrum.getDistance(entry)
        }

        function testLimit(parsed, entry) {
          if (!isNumeric(entry)) {
            throw new Error('noUiSlider: \'limit\' option must be numeric.')
          }
          parsed.limit = parsed.spectrum.getDistance(entry)
          if (!parsed.limit || parsed.handles < 2) {
            throw new Error('noUiSlider: \'limit\' option is only supported on linear sliders with 2 or more handles.')
          }
        }

        function testPadding(parsed, entry) {
          let index
          if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error('noUiSlider: \'padding\' option must be numeric or array of exactly 2 numbers.')
          }
          if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error('noUiSlider: \'padding\' option must be numeric or array of exactly 2 numbers.')
          }
          if (entry === 0) {
            return
          }
          if (!Array.isArray(entry)) {
            entry = [
              entry,
              entry,
            ]
          }
          // 'getDistance' returns false for invalid values.
          parsed.padding = [
            parsed.spectrum.getDistance(entry[0]),
            parsed.spectrum.getDistance(entry[1]),
          ]
          for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
              throw new Error('noUiSlider: \'padding\' option must be a positive number(s).')
            }
          }
          const totalPadding = entry[0] + entry[1]
          const firstValue = parsed.spectrum.xVal[0]
          const lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1]
          if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error('noUiSlider: \'padding\' option must not exceed 100% of the range.')
          }
        }

        function testDirection(parsed, entry) {
          // Set direction as a numerical value for easy parsing.
          // Invert connection for RTL sliders, so that the proper
          // handles get the connect/background classes.
          switch (entry) {
          case 'ltr':
            parsed.dir = 0
            break
          case 'rtl':
            parsed.dir = 1
            break
          default:
            throw new Error('noUiSlider: \'direction\' option was not recognized.')
          }
        }

        function testBehaviour(parsed, entry) {
          // Make sure the input is a string.
          if (typeof entry !== 'string') {
            throw new Error('noUiSlider: \'behaviour\' must be a string containing options.')
          }
          // Check if the string contains any keywords.
          // None are required.
          const tap = entry.indexOf('tap') >= 0
          const drag = entry.indexOf('drag') >= 0
          const fixed = entry.indexOf('fixed') >= 0
          const snap = entry.indexOf('snap') >= 0
          const hover = entry.indexOf('hover') >= 0
          const unconstrained = entry.indexOf('unconstrained') >= 0
          const dragAll = entry.indexOf('drag-all') >= 0
          const smoothSteps = entry.indexOf('smooth-steps') >= 0
          if (fixed) {
            if (parsed.handles !== 2) {
              throw new Error('noUiSlider: \'fixed\' behaviour must be used with 2 handles')
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0])
          }
          if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error('noUiSlider: \'unconstrained\' behaviour cannot be used with margin or limit')
          }
          parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            smoothSteps: smoothSteps,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained,
          }
        }

        function testTooltips(parsed, entry) {
          if (entry === false) {
            return
          }
          if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = []
            for (let i = 0; i < parsed.handles; i++) {
              parsed.tooltips.push(entry)
            }
          } else {
            entry = asArray(entry)
            if (entry.length !== parsed.handles) {
              throw new Error('noUiSlider: must pass a formatter for all handles.')
            }
            entry.forEach(function (formatter) {
              if (typeof formatter !== 'boolean' && !isValidPartialFormatter(formatter)) {
                throw new Error('noUiSlider: \'tooltips\' must be passed a formatter or \'false\'.')
              }
            })
            parsed.tooltips = entry
          }
        }

        function testHandleAttributes(parsed, entry) {
          if (entry.length !== parsed.handles) {
            throw new Error('noUiSlider: must pass a attributes for all handles.')
          }
          parsed.handleAttributes = entry
        }

        function testAriaFormat(parsed, entry) {
          if (!isValidPartialFormatter(entry)) {
            throw new Error('noUiSlider: \'ariaFormat\' requires \'to\' method.')
          }
          parsed.ariaFormat = entry
        }

        function testFormat(parsed, entry) {
          if (!isValidFormatter(entry)) {
            throw new Error('noUiSlider: \'format\' requires \'to\' and \'from\' methods.')
          }
          parsed.format = entry
        }

        function testKeyboardSupport(parsed, entry) {
          if (typeof entry !== 'boolean') {
            throw new Error('noUiSlider: \'keyboardSupport\' option must be a boolean.')
          }
          parsed.keyboardSupport = entry
        }

        function testDocumentElement(parsed, entry) {
          // This is an advanced option. Passed values are used without validation.
          parsed.documentElement = entry
        }

        function testCssPrefix(parsed, entry) {
          if (typeof entry !== 'string' && entry !== false) {
            throw new Error('noUiSlider: \'cssPrefix\' must be a string or `false`.')
          }
          parsed.cssPrefix = entry
        }

        function testCssClasses(parsed, entry) {
          if (typeof entry !== 'object') {
            throw new Error('noUiSlider: \'cssClasses\' must be an object.')
          }
          if (typeof parsed.cssPrefix === 'string') {
            parsed.cssClasses = {}
            Object.keys(entry).forEach(function (key) {
              parsed.cssClasses[key] = parsed.cssPrefix + entry[key]
            })
          } else {
            parsed.cssClasses = entry
          }
        }

        // Test all developer settings and parse to assumption-safe values.
        function testOptions(options) {
          // To prove a fix for #537, freeze options here.
          // If the object is modified, an error will be thrown.
          // Object.freeze(options);
          const parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter,
          }
          // Tests are executed in the order they are presented here.
          const tests = {
            step: {
              r: false,
              t: testStep,
            },
            keyboardPageMultiplier: {
              r: false,
              t: testKeyboardPageMultiplier,
            },
            keyboardMultiplier: {
              r: false,
              t: testKeyboardMultiplier,
            },
            keyboardDefaultStep: {
              r: false,
              t: testKeyboardDefaultStep,
            },
            start: {
              r: true,
              t: testStart,
            },
            connect: {
              r: true,
              t: testConnect,
            },
            direction: {
              r: true,
              t: testDirection,
            },
            snap: {
              r: false,
              t: testSnap,
            },
            animate: {
              r: false,
              t: testAnimate,
            },
            animationDuration: {
              r: false,
              t: testAnimationDuration,
            },
            range: {
              r: true,
              t: testRange,
            },
            orientation: {
              r: false,
              t: testOrientation,
            },
            margin: {
              r: false,
              t: testMargin,
            },
            limit: {
              r: false,
              t: testLimit,
            },
            padding: {
              r: false,
              t: testPadding,
            },
            behaviour: {
              r: true,
              t: testBehaviour,
            },
            ariaFormat: {
              r: false,
              t: testAriaFormat,
            },
            format: {
              r: false,
              t: testFormat,
            },
            tooltips: {
              r: false,
              t: testTooltips,
            },
            keyboardSupport: {
              r: true,
              t: testKeyboardSupport,
            },
            documentElement: {
              r: false,
              t: testDocumentElement,
            },
            cssPrefix: {
              r: true,
              t: testCssPrefix,
            },
            cssClasses: {
              r: true,
              t: testCssClasses,
            },
            handleAttributes: {
              r: false,
              t: testHandleAttributes,
            },
          }
          const defaults = {
            connect: false,
            direction: 'ltr',
            behaviour: 'tap',
            orientation: 'horizontal',
            keyboardSupport: true,
            cssPrefix: 'noUi-',
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10,
          }
          // AriaFormat defaults to regular format, if any.
          if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format
          }
          // Run all options through a testing mechanism to ensure correct
          // input. It should be noted that options might get modified to
          // be handled properly. E.g. wrapping integers in arrays.
          Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
              if (tests[name].r) {
                throw new Error('noUiSlider: \'' + name + '\' is required.')
              }
              return
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name])
          })
          // Forward pips options
          parsed.pips = options.pips
          // All recent browsers accept unprefixed transform.
          // We need -ms- for IE9 and -webkit- for older Android;
          // Assume use of -webkit- if unprefixed and -ms- are not supported.
          // https://caniuse.com/#feat=transforms2d
          const d = document.createElement('div')
          const msPrefix = d.style.msTransform !== undefined
          const noPrefix = d.style.transform !== undefined
          parsed.transformRule = noPrefix ? 'transform' : msPrefix ? 'msTransform' : 'webkitTransform'
          // Pips don't move, so we can place them using left/top.
          const styles = [
            [
              'left',
              'top',
            ],
            [
              'right',
              'bottom',
            ],
          ]
          parsed.style = styles[parsed.dir][parsed.ort]
          return parsed
        }

        //endregion
        function scope(target, options, originalOptions) {
          const actions = getActions()
          const supportsTouchActionNone = getSupportsTouchActionNone()
          const supportsPassive = supportsTouchActionNone && getSupportsPassive()
          // All variables local to 'scope' are prefixed with 'scope_'
          // Slider DOM Nodes
          const scope_Target = target
          let scope_Base
          let scope_Handles
          let scope_Connects
          let scope_Pips
          let scope_Tooltips
          // Slider state values
          let scope_Spectrum = options.spectrum
          const scope_Values = []
          let scope_Locations = []
          const scope_HandleNumbers = []
          let scope_ActiveHandlesCount = 0
          const scope_Events = {}
          // Document Nodes
          const scope_Document = target.ownerDocument
          const scope_DocumentElement = options.documentElement || scope_Document.documentElement
          const scope_Body = scope_Document.body
          // For horizontal sliders in standard ltr documents,
          // make .noUi-origin overflow to the left so the document doesn't scroll.
          const scope_DirOffset = scope_Document.dir === 'rtl' || options.ort === 1 ? 0 : 100

          // Creates a node, adds it to target, returns the new node.
          function addNodeTo(addTarget, className) {
            const div = scope_Document.createElement('div')
            if (className) {
              addClass(div, className)
            }
            addTarget.appendChild(div)
            return div
          }

          // Append a origin to the base
          function addOrigin(base, handleNumber) {
            const origin = addNodeTo(base, options.cssClasses.origin)
            const handle = addNodeTo(origin, options.cssClasses.handle)
            addNodeTo(handle, options.cssClasses.touchArea)
            handle.setAttribute('data-handle', String(handleNumber))
            if (options.keyboardSupport) {
              // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
              // 0 = focusable and reachable
              handle.setAttribute('tabindex', '0')
              handle.addEventListener('keydown', function (event) {
                return eventKeydown(event, handleNumber)
              })
            }
            if (options.handleAttributes !== undefined) {
              const attributes_1 = options.handleAttributes[handleNumber]
              Object.keys(attributes_1).forEach(function (attribute) {
                handle.setAttribute(attribute, attributes_1[attribute])
              })
            }
            handle.setAttribute('role', 'slider')
            handle.setAttribute('aria-orientation', options.ort ? 'vertical' : 'horizontal')
            if (handleNumber === 0) {
              addClass(handle, options.cssClasses.handleLower)
            } else if (handleNumber === options.handles - 1) {
              addClass(handle, options.cssClasses.handleUpper)
            }
            return origin
          }

          // Insert nodes for connect elements
          function addConnect(base, add) {
            if (!add) {
              return false
            }
            return addNodeTo(base, options.cssClasses.connect)
          }

          // Add handles to the slider base.
          function addElements(connectOptions, base) {
            const connectBase = addNodeTo(base, options.cssClasses.connects)
            scope_Handles = []
            scope_Connects = []
            scope_Connects.push(addConnect(connectBase, connectOptions[0]))
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (let i = 0; i < options.handles; i++) {
              // Keep a list of all added handles.
              scope_Handles.push(addOrigin(base, i))
              scope_HandleNumbers[i] = i
              scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]))
            }
          }

          // Initialize a single slider.
          function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target)
            if (options.dir === 0) {
              addClass(addTarget, options.cssClasses.ltr)
            } else {
              addClass(addTarget, options.cssClasses.rtl)
            }
            if (options.ort === 0) {
              addClass(addTarget, options.cssClasses.horizontal)
            } else {
              addClass(addTarget, options.cssClasses.vertical)
            }
            const textDirection = getComputedStyle(addTarget).direction
            if (textDirection === 'rtl') {
              addClass(addTarget, options.cssClasses.textDirectionRtl)
            } else {
              addClass(addTarget, options.cssClasses.textDirectionLtr)
            }
            return addNodeTo(addTarget, options.cssClasses.base)
          }

          function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
              return false
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip)
          }

          function isSliderDisabled() {
            return scope_Target.hasAttribute('disabled')
          }

          // Disable the slider dragging if any handle is disabled
          function isHandleDisabled(handleNumber) {
            const handleOrigin = scope_Handles[handleNumber]
            return handleOrigin.hasAttribute('disabled')
          }

          function removeTooltips() {
            if (scope_Tooltips) {
              removeEvent('update' + INTERNAL_EVENT_NS.tooltips)
              scope_Tooltips.forEach(function (tooltip) {
                if (tooltip) {
                  removeElement(tooltip)
                }
              })
              scope_Tooltips = null
            }
          }

          // The tooltips option is a shorthand for using the 'update' event.
          function tooltips() {
            removeTooltips()
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip)
            bindEvent('update' + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
              if (!scope_Tooltips || !options.tooltips) {
                return
              }
              if (scope_Tooltips[handleNumber] === false) {
                return
              }
              let formattedValue = values[handleNumber]
              if (options.tooltips[handleNumber] !== true) {
                formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber])
              }
              scope_Tooltips[handleNumber].innerHTML = formattedValue
            })
          }

          function aria() {
            removeEvent('update' + INTERNAL_EVENT_NS.aria)
            bindEvent('update' + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
              // Update Aria Values for all handles, as a change in one changes min and max values for the next.
              scope_HandleNumbers.forEach(function (index) {
                const handle = scope_Handles[index]
                let min = checkHandlePosition(scope_Locations, index, 0, true, true, true)
                let max = checkHandlePosition(scope_Locations, index, 100, true, true, true)
                let now = positions[index]
                // Formatted value for display
                const text = String(options.ariaFormat.to(unencoded[index]))
                // Map to slider range values
                min = scope_Spectrum.fromStepping(min).toFixed(1)
                max = scope_Spectrum.fromStepping(max).toFixed(1)
                now = scope_Spectrum.fromStepping(now).toFixed(1)
                handle.children[0].setAttribute('aria-valuemin', min)
                handle.children[0].setAttribute('aria-valuemax', max)
                handle.children[0].setAttribute('aria-valuenow', now)
                handle.children[0].setAttribute('aria-valuetext', text)
              })
            })
          }

          function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
              return scope_Spectrum.xVal
            }
            if (pips.mode === exports.PipsMode.Count) {
              if (pips.values < 2) {
                throw new Error('noUiSlider: \'values\' (>= 2) required for mode \'count\'.')
              }
              // Divide 0 - 100 in 'count' parts.
              let interval = pips.values - 1
              const spread = 100 / interval
              const values = []
              // List these parts and have them handled as 'positions'.
              while (interval--) {
                values[interval] = interval * spread
              }
              values.push(100)
              return mapToRange(values, pips.stepped)
            }
            if (pips.mode === exports.PipsMode.Positions) {
              // Map all percentages to on-range values.
              return mapToRange(pips.values, pips.stepped)
            }
            if (pips.mode === exports.PipsMode.Values) {
              // If the value must be stepped, it needs to be converted to a percentage first.
              if (pips.stepped) {
                return pips.values.map(function (value) {
                  // Convert to percentage, apply step, return to value.
                  return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)))
                })
              }
              // Otherwise, we can simply use the values.
              return pips.values
            }
            return [] // pips.mode = never
          }

          function mapToRange(values, stepped) {
            return values.map(function (value) {
              return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value)
            })
          }

          function generateSpread(pips) {
            function safeIncrement(value, increment) {
              // Avoid floating point variance by dropping the smallest decimal places.
              return Number((value + increment).toFixed(7))
            }

            let group = getGroup(pips)
            const indexes = {}
            const firstInRange = scope_Spectrum.xVal[0]
            const lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1]
            let ignoreFirst = false
            let ignoreLast = false
            let prevPct = 0
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(
              group.slice().sort(function (a, b) {
                return a - b
              })
            )
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
              group.unshift(firstInRange)
              ignoreFirst = true
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
              group.push(lastInRange)
              ignoreLast = true
            }
            group.forEach(function (current, index) {
              // Get the current step and the lower + upper positions.
              let step
              let i
              let q
              const low = current
              let high = group[index + 1]
              let newPct
              let pctDifference
              let pctPos
              let type
              let steps
              let realSteps
              let stepSize
              const isSteps = pips.mode === exports.PipsMode.Steps
              // When using 'steps' mode, use the provided steps.
              // Otherwise, we'll step on to the next subrange.
              if (isSteps) {
                step = scope_Spectrum.xNumSteps[index]
              }
              // Default to a 'full' step.
              if (!step) {
                step = high - low
              }
              // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
              if (high === undefined) {
                high = low
              }
              // Make sure step isn't 0, which would cause an infinite loop (#654)
              step = Math.max(step, 0.0000001)
              // Find all steps in the subrange.
              for (i = low; i <= high; i = safeIncrement(i, step)) {
                // Get the percentage value for the current step,
                // calculate the size for the subrange.
                newPct = scope_Spectrum.toStepping(i)
                pctDifference = newPct - prevPct
                steps = pctDifference / (pips.density || 1)
                realSteps = Math.round(steps)
                // This ratio represents the amount of percentage-space a point indicates.
                // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                // Round the percentage offset to an even number, then divide by two
                // to spread the offset on both sides of the range.
                stepSize = pctDifference / realSteps
                // Divide all points evenly, adding the correct number to this subrange.
                // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                for (q = 1; q <= realSteps; q += 1) {
                  // The ratio between the rounded value and the actual size might be ~1% off.
                  // Correct the percentage offset by the number of points
                  // per subrange. density = 1 will result in 100 points on the
                  // full range, 2 for 50, 4 for 25, etc.
                  pctPos = prevPct + q * stepSize
                  indexes[pctPos.toFixed(5)] = [
                    scope_Spectrum.fromStepping(pctPos),
                    0,
                  ]
                }
                // Determine the point type.
                type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue
                // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                if (!index && ignoreFirst && i !== high) {
                  type = 0
                }
                if (!(i === high && ignoreLast)) {
                  // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                  indexes[newPct.toFixed(5)] = [
                    i,
                    type,
                  ]
                }
                // Update the percentage count.
                prevPct = newPct
              }
            })
            return indexes
          }

          function addMarking(spread, filterFunc, formatter) {
            let _a, _b
            const element = scope_Document.createElement('div')
            const valueSizeClasses =
          ((_a = {}),
          (_a[exports.PipsType.None] = ''),
          (_a[exports.PipsType.NoValue] = options.cssClasses.valueNormal),
          (_a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge),
          (_a[exports.PipsType.SmallValue] = options.cssClasses.valueSub),
          _a)
            const markerSizeClasses =
          ((_b = {}),
          (_b[exports.PipsType.None] = ''),
          (_b[exports.PipsType.NoValue] = options.cssClasses.markerNormal),
          (_b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge),
          (_b[exports.PipsType.SmallValue] = options.cssClasses.markerSub),
          _b)
            const valueOrientationClasses = [
              options.cssClasses.valueHorizontal,
              options.cssClasses.valueVertical,
            ]
            const markerOrientationClasses = [
              options.cssClasses.markerHorizontal,
              options.cssClasses.markerVertical,
            ]
            addClass(element, options.cssClasses.pips)
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical)

            function getClasses(type, source) {
              const a = source === options.cssClasses.value
              const orientationClasses = a ? valueOrientationClasses : markerOrientationClasses
              const sizeClasses = a ? valueSizeClasses : markerSizeClasses
              return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type]
            }

            function addSpread(offset, value, type) {
              // Apply the filter function, if it is set.
              type = filterFunc ? filterFunc(value, type) : type
              if (type === exports.PipsType.None) {
                return
              }
              // Add a marker for every point
              let node = addNodeTo(element, false)
              node.className = getClasses(type, options.cssClasses.marker)
              node.style[options.style] = offset + '%'
              // Values are only appended for points marked '1' or '2'.
              if (type > exports.PipsType.NoValue) {
                node = addNodeTo(element, false)
                node.className = getClasses(type, options.cssClasses.value)
                node.setAttribute('data-value', String(value))
                node.style[options.style] = offset + '%'
                node.innerHTML = String(formatter.to(value))
              }
            }

            // Append all points.
            Object.keys(spread).forEach(function (offset) {
              addSpread(offset, spread[offset][0], spread[offset][1])
            })
            return element
          }

          function removePips() {
            if (scope_Pips) {
              removeElement(scope_Pips)
              scope_Pips = null
            }
          }

          function pips(pips) {
            // Fix #669
            removePips()
            const spread = generateSpread(pips)
            const filter = pips.filter
            const format = pips.format || {
              to: function (value) {
                return String(Math.round(value))
              },
            }
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format))
            return scope_Pips
          }

          // Shorthand for base dimensions.
          function baseSize() {
            const rect = scope_Base.getBoundingClientRect()
            const alt = 'offset' + [
              'Width',
              'Height',
            ][options.ort]
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt]
          }

          // Handler for attaching events trough a proxy.
          function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            const method = function (event) {
              const e = fixEvent(event, data.pageOffset, data.target || element)
              // fixEvent returns false if this event has a different target
              // when handling (multi-) touch events;
              if (!e) {
                return false
              }
              // doNotReject is passed by all end events to make sure released touches
              // are not rejected, leaving the slider "stuck" to the cursor;
              if (isSliderDisabled() && !data.doNotReject) {
                return false
              }
              // Stop if an active 'tap' transition is taking place.
              if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                return false
              }
              // Ignore right or middle clicks on start #454
              if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                return false
              }
              // Ignore right or middle clicks on start #454
              if (data.hover && e.buttons) {
                return false
              }
              // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
              // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
              // touch-action: manipulation, but that allows panning, which breaks
              // sliders after zooming/on non-responsive pages.
              // See: https://bugs.webkit.org/show_bug.cgi?id=133112
              if (!supportsPassive) {
                e.preventDefault()
              }
              e.calcPoint = e.points[options.ort]
              // Call the event handler with the event [ and additional data ].
              callback(e, data)
              return
            }
            const methods = []
            // Bind a closure on the target for every event type.
            events.split(' ').forEach(function (eventName) {
              element.addEventListener(eventName, method, supportsPassive ? { passive: true, } : false)
              methods.push([
                eventName,
                method,
              ])
            })
            return methods
          }

          // Provide a clean event with standardized offset values.
          function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            const touch = e.type.indexOf('touch') === 0
            const mouse = e.type.indexOf('mouse') === 0
            let pointer = e.type.indexOf('pointer') === 0
            let x = 0
            let y = 0
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf('MSPointer') === 0) {
              pointer = true
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === 'mousedown' && !e.buttons && !e.touches) {
              return false
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
              // Returns true if a touch originated on the target.
              const isTouchOnTarget = function (checkTouch) {
                const target = checkTouch.target
                return target === eventTarget || eventTarget.contains(target) || (e.composed && e.composedPath().shift() === eventTarget)
              }
              // In the case of touchstart events, we need to make sure there is still no more than one
              // touch on the target so we look amongst all touches.
              if (e.type === 'touchstart') {
                const targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget)
                // Do not support more than one touch per handle.
                if (targetTouches.length > 1) {
                  return false
                }
                x = targetTouches[0].pageX
                y = targetTouches[0].pageY
              } else {
                // In the other cases, find on changedTouches is enough.
                const targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget)
                // Cancel if the target touch has not moved.
                if (!targetTouch) {
                  return false
                }
                x = targetTouch.pageX
                y = targetTouch.pageY
              }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document)
            if (mouse || pointer) {
              x = e.clientX + pageOffset.x
              y = e.clientY + pageOffset.y
            }
            e.pageOffset = pageOffset
            e.points = [
              x,
              y,
            ]
            e.cursor = mouse || pointer // Fix #435
            return e
          }

          // Translate a coordinate in the document to a percentage on the slider
          function calcPointToPercentage(calcPoint) {
            const location = calcPoint - offset(scope_Base, options.ort)
            let proposal = (location * 100) / baseSize()
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal)
            return options.dir ? 100 - proposal : proposal
          }

          // Find handle closest to a certain percentage on the slider
          function getClosestHandle(clickedPosition) {
            let smallestDifference = 100
            let handleNumber = false
            scope_Handles.forEach(function (handle, index) {
              // Disabled handles are ignored
              if (isHandleDisabled(index)) {
                return
              }
              const handlePosition = scope_Locations[index]
              const differenceWithThisHandle = Math.abs(handlePosition - clickedPosition)
              // Initial state
              const clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100
              // Difference with this handle is smaller than the previously checked handle
              const isCloser = differenceWithThisHandle < smallestDifference
              const isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition
              if (isCloser || isCloserAfter || clickAtEdge) {
                handleNumber = index
                smallestDifference = differenceWithThisHandle
              }
            })
            return handleNumber
          }

          // Fire 'end' when a mouse or pen leaves the document.
          function documentLeave(event, data) {
            if (event.type === 'mouseout' && event.target.nodeName === 'HTML' && event.relatedTarget === null) {
              eventEnd(event, data)
            }
          }

          // Handle movement on document for handle and range drag.
          function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf('MSIE 9') === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
              return eventEnd(event, data)
            }
            // Check if we are moving up or down
            const movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint)
            // Convert the movement into a percentage of the slider width/height
            const proposal = (movement * 100) / data.baseSize
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect)
          }

          // Unbind move events on document, call callbacks.
          function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
              removeClass(data.handle, options.cssClasses.active)
              scope_ActiveHandlesCount -= 1
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
              scope_DocumentElement.removeEventListener(c[0], c[1])
            })
            if (scope_ActiveHandlesCount === 0) {
              // Remove dragging class.
              removeClass(scope_Target, options.cssClasses.drag)
              setZindex()
              // Remove cursor styles and text-selection events bound to the body.
              if (event.cursor) {
                scope_Body.style.cursor = ''
                scope_Body.removeEventListener('selectstart', preventDefault)
              }
            }
            if (options.events.smoothSteps) {
              data.handleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false)
              })
              data.handleNumbers.forEach(function (handleNumber) {
                fireEvent('update', handleNumber)
              })
            }
            data.handleNumbers.forEach(function (handleNumber) {
              fireEvent('change', handleNumber)
              fireEvent('set', handleNumber)
              fireEvent('end', handleNumber)
            })
          }

          // Bind move events on document.
          function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
              return
            }
            let handle
            if (data.handleNumbers.length === 1) {
              const handleOrigin = scope_Handles[data.handleNumbers[0]]
              handle = handleOrigin.children[0]
              scope_ActiveHandlesCount += 1
              // Mark the handle as 'active' so it can be styled.
              addClass(handle, options.cssClasses.active)
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation()
            // Record the event listeners.
            const listeners = []
            // Attach the move and end events.
            const moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
              // The event target has changed so we need to propagate the original one so that we keep
              // relying on it to extract target touches.
              target: event.target,
              handle: handle,
              connect: data.connect,
              listeners: listeners,
              startCalcPoint: event.calcPoint,
              baseSize: baseSize(),
              pageOffset: event.pageOffset,
              handleNumbers: data.handleNumbers,
              buttonsProperty: event.buttons,
              locations: scope_Locations.slice(),
            })
            const endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
              target: event.target,
              handle: handle,
              listeners: listeners,
              doNotReject: true,
              handleNumbers: data.handleNumbers,
            })
            const outEvent = attachEvent('mouseout', scope_DocumentElement, documentLeave, {
              target: event.target,
              handle: handle,
              listeners: listeners,
              doNotReject: true,
              handleNumbers: data.handleNumbers,
            })
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent))
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
              // Prevent the 'I' cursor and extend the range-drag cursor.
              scope_Body.style.cursor = getComputedStyle(event.target).cursor
              // Mark the target with a dragging state.
              if (scope_Handles.length > 1) {
                addClass(scope_Target, options.cssClasses.drag)
              }
              // Prevent text selection when dragging the handles.
              // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
              // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
              // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
              // The 'cursor' flag is false.
              // See: http://caniuse.com/#search=selectstart
              scope_Body.addEventListener('selectstart', preventDefault, false)
            }
            data.handleNumbers.forEach(function (handleNumber) {
              fireEvent('start', handleNumber)
            })
          }

          // Move closest handle to tapped location.
          function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation()
            const proposal = calcPointToPercentage(event.calcPoint)
            const handleNumber = getClosestHandle(proposal)
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
              return
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
              addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration)
            }
            setHandle(handleNumber, proposal, true, true)
            setZindex()
            fireEvent('slide', handleNumber, true)
            fireEvent('update', handleNumber, true)
            if (!options.events.snap) {
              fireEvent('change', handleNumber, true)
              fireEvent('set', handleNumber, true)
            } else {
              eventStart(event, { handleNumbers: [ handleNumber, ], })
            }
          }

          // Fires a 'hover' event for a hovered mouse/pen position.
          function eventHover(event) {
            const proposal = calcPointToPercentage(event.calcPoint)
            const to = scope_Spectrum.getStep(proposal)
            const value = scope_Spectrum.fromStepping(to)
            Object.keys(scope_Events).forEach(function (targetEvent) {
              if ('hover' === targetEvent.split('.')[0]) {
                scope_Events[targetEvent].forEach(function (callback) {
                  callback.call(scope_Self, value)
                })
              }
            })
          }

          // Handles keydown on focused handles
          // Don't move the document when pressing arrow keys on focused handles
          function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
              return false
            }
            const horizontalKeys = [
              'Left',
              'Right',
            ]
            const verticalKeys = [
              'Down',
              'Up',
            ]
            const largeStepKeys = [
              'PageDown',
              'PageUp',
            ]
            const edgeKeys = [
              'Home',
              'End',
            ]
            if (options.dir && !options.ort) {
              // On an right-to-left slider, the left and right keys act inverted
              horizontalKeys.reverse()
            } else if (options.ort && !options.dir) {
              // On a top-to-bottom slider, the up and down keys act inverted
              verticalKeys.reverse()
              largeStepKeys.reverse()
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            const key = event.key.replace('Arrow', '')
            const isLargeDown = key === largeStepKeys[0]
            const isLargeUp = key === largeStepKeys[1]
            const isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown
            const isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp
            const isMin = key === edgeKeys[0]
            const isMax = key === edgeKeys[1]
            if (!isDown && !isUp && !isMin && !isMax) {
              return true
            }
            event.preventDefault()
            let to
            if (isUp || isDown) {
              const direction = isDown ? 0 : 1
              const steps = getNextStepsForHandle(handleNumber)
              let step = steps[direction]
              // At the edge of a slider, do nothing
              if (step === null) {
                return false
              }
              // No step set, use the default of 10% of the sub-range
              if (step === false) {
                step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep)
              }
              if (isLargeUp || isLargeDown) {
                step *= options.keyboardPageMultiplier
              } else {
                step *= options.keyboardMultiplier
              }
              // Step over zero-length ranges (#948);
              step = Math.max(step, 0.0000001)
              // Decrement for down steps
              step = (isDown ? -1 : 1) * step
              to = scope_Values[handleNumber] + step
            } else if (isMax) {
              // End key
              to = options.spectrum.xVal[options.spectrum.xVal.length - 1]
            } else {
              // Home key
              to = options.spectrum.xVal[0]
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true)
            fireEvent('slide', handleNumber)
            fireEvent('update', handleNumber)
            fireEvent('change', handleNumber)
            fireEvent('set', handleNumber)
            return false
          }

          // Attach events to several slider parts.
          function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
              scope_Handles.forEach(function (handle, index) {
                // These events are only bound to the visual handle
                // element, not the 'real' origin element.
                attachEvent(actions.start, handle.children[0], eventStart, { handleNumbers: [ index, ], })
              })
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
              attachEvent(actions.start, scope_Base, eventTap, {})
            }
            // Fire hover events
            if (behaviour.hover) {
              attachEvent(actions.move, scope_Base, eventHover, { hover: true, })
            }
            // Make the range draggable.
            if (behaviour.drag) {
              scope_Connects.forEach(function (connect, index) {
                if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                  return
                }
                const handleBefore = scope_Handles[index - 1]
                const handleAfter = scope_Handles[index]
                const eventHolders = [ connect, ]
                let handlesToDrag = [
                  handleBefore,
                  handleAfter,
                ]
                let handleNumbersToDrag = [
                  index - 1,
                  index,
                ]
                addClass(connect, options.cssClasses.draggable)
                // When the range is fixed, the entire range can
                // be dragged by the handles. The handle in the first
                // origin will propagate the start event upward,
                // but it needs to be bound manually on the other.
                if (behaviour.fixed) {
                  eventHolders.push(handleBefore.children[0])
                  eventHolders.push(handleAfter.children[0])
                }
                if (behaviour.dragAll) {
                  handlesToDrag = scope_Handles
                  handleNumbersToDrag = scope_HandleNumbers
                }
                eventHolders.forEach(function (eventHolder) {
                  attachEvent(actions.start, eventHolder, eventStart, {
                    handles: handlesToDrag,
                    handleNumbers: handleNumbersToDrag,
                    connect: connect,
                  })
                })
              })
            }
          }

          // Attach an event to this slider, possibly including a namespace
          function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || []
            scope_Events[namespacedEvent].push(callback)
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split('.')[0] === 'update') {
              scope_Handles.forEach(function (a, index) {
                fireEvent('update', index)
              })
            }
          }

          function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips
          }

          // Undo attachment of event
          function removeEvent(namespacedEvent) {
            const event = namespacedEvent && namespacedEvent.split('.')[0]
            const namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent
            Object.keys(scope_Events).forEach(function (bind) {
              const tEvent = bind.split('.')[0]
              const tNamespace = bind.substring(tEvent.length)
              if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                // only delete protected internal event if intentional
                if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                  delete scope_Events[bind]
                }
              }
            })
          }

          // External event handling
          function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
              const eventType = targetEvent.split('.')[0]
              if (eventName === eventType) {
                scope_Events[targetEvent].forEach(function (callback) {
                  callback.call(
                    // Use the slider public API as the scope ('this')
                    scope_Self,
                    // Return values as array, so arg_1[arg_2] is always valid.
                    scope_Values.map(options.format.to),
                    // Handle index, 0 or 1
                    handleNumber,
                    // Un-formatted slider values
                    scope_Values.slice(),
                    // Event is fired by tap, true or false
                    tap || false,
                    // Left offset of the handle, in relation to the slider
                    scope_Locations.slice(),
                    // add the slider public API to an accessible parameter when this is unavailable
                    scope_Self
                  )
                })
              }
            })
          }

          // Split out the handle positioning logic so the Move event can use it, too
          function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
            let distance
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
              if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false)
                to = Math.max(to, distance)
              }
              if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true)
                to = Math.min(to, distance)
              }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
              if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false)
                to = Math.min(to, distance)
              }
              if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true)
                to = Math.max(to, distance)
              }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
              if (handleNumber === 0) {
                distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false)
                to = Math.max(to, distance)
              }
              if (handleNumber === scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true)
                to = Math.min(to, distance)
              }
            }
            if (!smoothSteps) {
              to = scope_Spectrum.getStep(to)
            }
            // Limit percentage to the 0 - 100 range
            to = limit(to)
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
              return false
            }
            return to
          }

          // Uses slider orientation to create CSS rules. a = base value;
          function inRuleOrder(v, a) {
            const o = options.ort
            return (o ? a : v) + ', ' + (o ? v : a)
          }

          // Moves handle(s) by a percentage
          // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
          function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            const proposals = locations.slice()
            // Store first handle now, so we still have it in case handleNumbers is reversed
            const firstHandle = handleNumbers[0]
            const smoothSteps = options.events.smoothSteps
            let b = [
              !upward,
              upward,
            ]
            let f = [
              upward,
              !upward,
            ]
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice()
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
              handleNumbers.reverse()
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
              handleNumbers.forEach(function (handleNumber, o) {
                const to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps)
                // Stop if one of the handles can't move.
                if (to === false) {
                  proposal = 0
                } else {
                  proposal = to - proposals[handleNumber]
                  proposals[handleNumber] = to
                }
              })
            }
            // If using one handle, check backward AND forward
            else {
              b = f = [ true, ]
            }
            let state = false
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
              state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state
            })
            // Step 3: If a handle moved, fire events
            if (state) {
              handleNumbers.forEach(function (handleNumber) {
                fireEvent('update', handleNumber)
                fireEvent('slide', handleNumber)
              })
              // If target is a connect, then fire drag event
              if (connect != undefined) {
                fireEvent('drag', firstHandle)
              }
            }
          }

          // Takes a base value and an offset. This offset is used for the connect bar size.
          // In the initial design for this feature, the origin element was 1% wide.
          // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
          // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
          function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a
          }

          // Updates scope_Locations and scope_Values, updates visual state
          function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to)
            const translation = transformDirection(to, 0) - scope_DirOffset
            const translateRule = 'translate(' + inRuleOrder(translation + '%', '0') + ')'
            scope_Handles[handleNumber].style[options.transformRule] = translateRule
            updateConnect(handleNumber)
            updateConnect(handleNumber + 1)
          }

          // Handles before the slider middle are stacked later = higher,
          // Handles after the middle later is lower
          // [[7] [8] .......... | .......... [5] [4]
          function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
              const dir = scope_Locations[handleNumber] > 50 ? -1 : 1
              const zIndex = 3 + (scope_Handles.length + dir * handleNumber)
              scope_Handles[handleNumber].style.zIndex = String(zIndex)
            })
          }

          // Test suggested values and apply margin, step.
          // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
          function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
            if (!exactInput) {
              to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps)
            }
            if (to === false) {
              return false
            }
            updateHandlePosition(handleNumber, to)
            return true
          }

          // Updates style attribute for connect nodes
          function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
              return
            }
            let l = 0
            let h = 100
            if (index !== 0) {
              l = scope_Locations[index - 1]
            }
            if (index !== scope_Connects.length - 1) {
              h = scope_Locations[index]
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            const connectWidth = h - l
            const translateRule = 'translate(' + inRuleOrder(transformDirection(l, connectWidth) + '%', '0') + ')'
            const scaleRule = 'scale(' + inRuleOrder(connectWidth / 100, '1') + ')'
            scope_Connects[index].style[options.transformRule] = translateRule + ' ' + scaleRule
          }

          // Parses value passed to .set method. Returns current value if not parse-able.
          function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
              return scope_Locations[handleNumber]
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === 'number') {
              to = String(to)
            }
            to = options.format.from(to)
            if (to !== false) {
              to = scope_Spectrum.toStepping(to)
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
              return scope_Locations[handleNumber]
            }
            return to
          }

          // Set the slider value.
          function valueSet(input, fireSetEvent, exactInput) {
            const values = asArray(input)
            const isInit = scope_Locations[0] === undefined
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
              addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration)
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
              setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput)
            })
            let i = scope_HandleNumbers.length === 1 ? 0 : 1
            // Spread handles evenly across the slider if the range has no size (min=max)
            if (isInit && scope_Spectrum.hasNoSize()) {
              exactInput = true
              scope_Locations[0] = 0
              if (scope_HandleNumbers.length > 1) {
                const space_1 = 100 / (scope_HandleNumbers.length - 1)
                scope_HandleNumbers.forEach(function (handleNumber) {
                  scope_Locations[handleNumber] = handleNumber * space_1
                })
              }
            }
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
              scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput)
              })
            }
            setZindex()
            scope_HandleNumbers.forEach(function (handleNumber) {
              fireEvent('update', handleNumber)
              // Fire the event only for handles that received a new value, as per #579
              if (values[handleNumber] !== null && fireSetEvent) {
                fireEvent('set', handleNumber)
              }
            })
          }

          // Reset slider to initial values
          function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent)
          }

          // Set value for a single handle
          function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber)
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
              throw new Error('noUiSlider: invalid handle number, got: ' + handleNumber)
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput)
            fireEvent('update', handleNumber)
            if (fireSetEvent) {
              fireEvent('set', handleNumber)
            }
          }

          // Get the slider value.
          function valueGet(unencoded) {
            if (unencoded === void 0) {
              unencoded = false
            }
            if (unencoded) {
              // return a copy of the raw values
              return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0)
            }
            const values = scope_Values.map(options.format.to)
            // If only one handle is used, return a single value.
            if (values.length === 1) {
              return values[0]
            }
            return values
          }

          // Removes classes from the root and empties it.
          function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria)
            removeEvent(INTERNAL_EVENT_NS.tooltips)
            Object.keys(options.cssClasses).forEach(function (key) {
              removeClass(scope_Target, options.cssClasses[key])
            })
            while (scope_Target.firstChild) {
              scope_Target.removeChild(scope_Target.firstChild)
            }
            delete scope_Target.noUiSlider
          }

          function getNextStepsForHandle(handleNumber) {
            const location = scope_Locations[handleNumber]
            const nearbySteps = scope_Spectrum.getNearbySteps(location)
            const value = scope_Values[handleNumber]
            let increment = nearbySteps.thisStep.step
            let decrement = null
            // If snapped, directly use defined step value
            if (options.snap) {
              return [
                value - nearbySteps.stepBefore.startValue || null,
                nearbySteps.stepAfter.startValue - value || null,
              ]
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
              if (value + increment > nearbySteps.stepAfter.startValue) {
                increment = nearbySteps.stepAfter.startValue - value
              }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
              decrement = nearbySteps.thisStep.step
            } else if (nearbySteps.stepBefore.step === false) {
              decrement = false
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
              decrement = value - nearbySteps.stepBefore.highestStep
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
              increment = null
            } else if (location === 0) {
              decrement = null
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            const stepDecimals = scope_Spectrum.countStepDecimals()
            // Round per #391
            if (increment !== null && increment !== false) {
              increment = Number(increment.toFixed(stepDecimals))
            }
            if (decrement !== null && decrement !== false) {
              decrement = Number(decrement.toFixed(stepDecimals))
            }
            return [
              decrement,
              increment,
            ]
          }

          // Get the current step size for the slider.
          function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle)
          }

          // Updatable: margin, limit, padding, step, range, animate, snap
          function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            const v = valueGet()
            const updateAble = [
              'margin',
              'limit',
              'padding',
              'range',
              'animate',
              'snap',
              'step',
              'format',
              'pips',
              'tooltips',
            ]
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
              // Check for undefined. null removes the value.
              if (optionsToUpdate[name] !== undefined) {
                originalOptions[name] = optionsToUpdate[name]
              }
            })
            const newOptions = testOptions(originalOptions)
            // Load new options into the slider state
            updateAble.forEach(function (name) {
              if (optionsToUpdate[name] !== undefined) {
                options[name] = newOptions[name]
              }
            })
            scope_Spectrum = newOptions.spectrum
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin
            options.limit = newOptions.limit
            options.padding = newOptions.padding
            // Update pips, removes existing.
            if (options.pips) {
              pips(options.pips)
            } else {
              removePips()
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
              tooltips()
            } else {
              removeTooltips()
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = []
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent)
          }

          // Initialization steps
          function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target)
            addElements(options.connect, scope_Base)
            // Attach user events.
            bindSliderEvents(options.events)
            // Use the public value method to set the start values.
            valueSet(options.start)
            if (options.pips) {
              pips(options.pips)
            }
            if (options.tooltips) {
              tooltips()
            }
            aria()
          }

          setupSlider()
          var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
              moveHandles(upward, proposal, scope_Locations, handleNumbers)
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
              return scope_Locations.slice()
            },
            getTooltips: function () {
              return scope_Tooltips
            },
            getOrigins: function () {
              return scope_Handles
            },
            pips: pips, // Issue #594
          }
          return scope_Self
        }

        // Run the standard initializer
        function initialize(target, originalOptions) {
          if (!target || !target.nodeName) {
            throw new Error('noUiSlider: create requires a single element, got: ' + target)
          }
          // Throw an error if the slider was already initialized.
          if (target.noUiSlider) {
            throw new Error('noUiSlider: Slider was already initialized.')
          }
          // Test the options and create the slider environment;
          const options = testOptions(originalOptions)
          const api = scope(target, options, originalOptions)
          target.noUiSlider = api
          return api
        }

        const nouislider = {
          // Exposed for unit testing, don't use this in your application.
          __spectrum: Spectrum,
          // A reference to the default classes, allows global changes.
          // Use the cssClasses option for changes to one slider.
          cssClasses: cssClasses,
          create: initialize,
        }

        exports.create = initialize
        exports.cssClasses = cssClasses
        exports['default'] = nouislider

        Object.defineProperty(exports, '__esModule', { value: true, })
      })


      /***/
    }),
    /******/
  ])

  /************************************************************************/
  /******/ 	// The module cache
  /******/
  const __webpack_module_cache__ = {}
  /******/
  /******/ 	// The require function
  /******/
  function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/
    const cachedModule = __webpack_module_cache__[moduleId]
    /******/
    if (cachedModule !== undefined) {
    /******/
      return cachedModule.exports
    /******/
    }
    /******/ 		// Create a new module (and put it into the cache)
    /******/
    const module = __webpack_module_cache__[moduleId] = {
    /******/ 			// no module.id needed
    /******/ 			// no module.loaded needed
    /******/            exports: {},
    /******/
    }
    /******/
    /******/ 		// Execute the module function
    /******/
    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__)
    /******/
    /******/ 		// Return the exports of the module
    /******/
    return module.exports
  /******/
  }

  /******/
  /************************************************************************/
  /******/ 	/* webpack/runtime/compat get default export */
  /******/
  !function () {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/
    __webpack_require__.n = function (module) {
    /******/
      const getter = module && module.__esModule ?
      /******/                function () {
          return module['default']
        } :
      /******/                function () {
          return module
        }
      /******/
      __webpack_require__.d(getter, { a: getter, })
      /******/
      return getter
    /******/
    }
  /******/
  }()
  /******/
  /******/ 	/* webpack/runtime/define property getters */
  /******/
  !function () {
  /******/ 		// define getter functions for harmony exports
  /******/
    __webpack_require__.d = function (exports, definition) {
    /******/
      for (const key in definition) {
      /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          })
        /******/
        }
      /******/
      }
    /******/
    }
  /******/
  }()
  /******/
  /******/ 	/* webpack/runtime/global */
  /******/
  !function () {
  /******/
    __webpack_require__.g = (function () {
    /******/
      if (typeof globalThis === 'object') return globalThis
      /******/
      try {
      /******/
        return this || new Function('return this')()
      /******/
      } catch (e) {
      /******/
        if (typeof window === 'object') return window
      /******/
      }
    /******/
    })()
  /******/
  }()
  /******/
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/
  !function () {
  /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop)
    }
  /******/
  }()
  /******/
  /******/ 	/* webpack/runtime/make namespace object */
  /******/
  !function () {
  /******/ 		// define __esModule on exports
  /******/
    __webpack_require__.r = function (exports) {
    /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module', })
      /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', { value: true, })
    /******/
    }
  /******/
  }()
  /******/
  /************************************************************************/
  const __webpack_exports__ = {}
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  !function () {
    'use strict'
    __webpack_require__.r(__webpack_exports__)
    /* harmony import */
    const _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1)
    // Импортируем скрипты приложения


  }()
/******/
})
()

//# sourceMappingURL=bundle.dist.js.map
