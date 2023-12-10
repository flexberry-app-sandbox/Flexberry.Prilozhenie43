import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPrilozhenie_43КартДоступLForm from './forms/i-i-s-prilozhenie-43-карт-доступ-l';
import IISPrilozhenie_43КлассУчLForm from './forms/i-i-s-prilozhenie-43-класс-уч-l';
import IISPrilozhenie_43СправДолжLForm from './forms/i-i-s-prilozhenie-43-справ-долж-l';
import IISPrilozhenie_43СправРодLForm from './forms/i-i-s-prilozhenie-43-справ-род-l';
import IISPrilozhenie_43СправСотрLForm from './forms/i-i-s-prilozhenie-43-справ-сотр-l';
import IISPrilozhenie_43СправУчLForm from './forms/i-i-s-prilozhenie-43-справ-уч-l';
import IISPrilozhenie_43КартДоступEForm from './forms/i-i-s-prilozhenie-43-карт-доступ-e';
import IISPrilozhenie_43КлассУчEForm from './forms/i-i-s-prilozhenie-43-класс-уч-e';
import IISPrilozhenie_43СправДолжEForm from './forms/i-i-s-prilozhenie-43-справ-долж-e';
import IISPrilozhenie_43СправРодEForm from './forms/i-i-s-prilozhenie-43-справ-род-e';
import IISPrilozhenie_43СправСотрEForm from './forms/i-i-s-prilozhenie-43-справ-сотр-e';
import IISPrilozhenie_43СправУчEForm from './forms/i-i-s-prilozhenie-43-справ-уч-e';
import IISPrilozhenie_43БазаДанныхModel from './models/i-i-s-prilozhenie-43-база-данных';
import IISPrilozhenie_43КартДоступModel from './models/i-i-s-prilozhenie-43-карт-доступ';
import IISPrilozhenie_43КлассУчModel from './models/i-i-s-prilozhenie-43-класс-уч';
import IISPrilozhenie_43СправДолжModel from './models/i-i-s-prilozhenie-43-справ-долж';
import IISPrilozhenie_43СправРодModel from './models/i-i-s-prilozhenie-43-справ-род';
import IISPrilozhenie_43СправСотрModel from './models/i-i-s-prilozhenie-43-справ-сотр';
import IISPrilozhenie_43СправУчModel from './models/i-i-s-prilozhenie-43-справ-уч';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-43-база-данных': IISPrilozhenie_43БазаДанныхModel,
    'i-i-s-prilozhenie-43-карт-доступ': IISPrilozhenie_43КартДоступModel,
    'i-i-s-prilozhenie-43-класс-уч': IISPrilozhenie_43КлассУчModel,
    'i-i-s-prilozhenie-43-справ-долж': IISPrilozhenie_43СправДолжModel,
    'i-i-s-prilozhenie-43-справ-род': IISPrilozhenie_43СправРодModel,
    'i-i-s-prilozhenie-43-справ-сотр': IISPrilozhenie_43СправСотрModel,
    'i-i-s-prilozhenie-43-справ-уч': IISPrilozhenie_43СправУчModel
  },

  'application-name': 'Prilozhenie_43',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_43',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_43',
          title: 'Prilozhenie_43'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'prilozhenie-43': {
          caption: 'Prilozhenie_43',
          title: 'Prilozhenie_43',
          'i-i-s-prilozhenie-43-справ-род-l': {
            caption: 'Справ род',
            title: ''
          },
          'i-i-s-prilozhenie-43-класс-уч-l': {
            caption: 'Класс уч',
            title: ''
          },
          'i-i-s-prilozhenie-43-справ-уч-l': {
            caption: 'Справ уч',
            title: ''
          },
          'i-i-s-prilozhenie-43-карт-доступ-l': {
            caption: 'Карт доступ',
            title: ''
          },
          'i-i-s-prilozhenie-43-справ-долж-l': {
            caption: 'Справ долж',
            title: ''
          },
          'i-i-s-prilozhenie-43-справ-сотр-l': {
            caption: 'Справ сотр',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-prilozhenie-43-карт-доступ-l': IISPrilozhenie_43КартДоступLForm,
    'i-i-s-prilozhenie-43-класс-уч-l': IISPrilozhenie_43КлассУчLForm,
    'i-i-s-prilozhenie-43-справ-долж-l': IISPrilozhenie_43СправДолжLForm,
    'i-i-s-prilozhenie-43-справ-род-l': IISPrilozhenie_43СправРодLForm,
    'i-i-s-prilozhenie-43-справ-сотр-l': IISPrilozhenie_43СправСотрLForm,
    'i-i-s-prilozhenie-43-справ-уч-l': IISPrilozhenie_43СправУчLForm,
    'i-i-s-prilozhenie-43-карт-доступ-e': IISPrilozhenie_43КартДоступEForm,
    'i-i-s-prilozhenie-43-класс-уч-e': IISPrilozhenie_43КлассУчEForm,
    'i-i-s-prilozhenie-43-справ-долж-e': IISPrilozhenie_43СправДолжEForm,
    'i-i-s-prilozhenie-43-справ-род-e': IISPrilozhenie_43СправРодEForm,
    'i-i-s-prilozhenie-43-справ-сотр-e': IISPrilozhenie_43СправСотрEForm,
    'i-i-s-prilozhenie-43-справ-уч-e': IISPrilozhenie_43СправУчEForm
  },

});

export default translations;
