// eslint-disable-next-line import/prefer-default-export
export const data = () => ({
  formLabel: {
    typeDocument: 'Тип документа',
    series: 'Серия',
    number: 'Номер',
    issued: 'Кем выдан',
    dateIssued: 'Дата выдачи',
  },

  placeholder: {
    typeDocument: 'Выберите тип документа',
    series: 8080,
    number: 164233,
    issued: 'Отделом УФМС',
    dateIssued: 23102011,
  },

  typeDocument: '',
  typeDocumentList: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение'],
  series: null,
  number: null,
  issued: '',
  dateIssued: null,

  required: '*Поле обязательное для заполнения.',
  invalid: true,
});
