import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.prilozhenie-43.caption'),
          title: i18n.t('forms.application.sitemap.prilozhenie-43.title'),
          children: [{
            link: 'i-i-s-prilozhenie-43-справ-род-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-43.i-i-s-prilozhenie-43-справ-род-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-43.i-i-s-prilozhenie-43-справ-род-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-43-класс-уч-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-43.i-i-s-prilozhenie-43-класс-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-43.i-i-s-prilozhenie-43-класс-уч-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-43-справ-уч-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-43.i-i-s-prilozhenie-43-справ-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-43.i-i-s-prilozhenie-43-справ-уч-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-43-карт-доступ-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-43.i-i-s-prilozhenie-43-карт-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-43.i-i-s-prilozhenie-43-карт-доступ-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-43-справ-долж-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-43.i-i-s-prilozhenie-43-справ-долж-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-43.i-i-s-prilozhenie-43-справ-долж-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-43-справ-сотр-l',
            caption: i18n.t('forms.application.sitemap.prilozhenie-43.i-i-s-prilozhenie-43-справ-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-43.i-i-s-prilozhenie-43-справ-сотр-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})