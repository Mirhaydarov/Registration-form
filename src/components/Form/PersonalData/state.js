// eslint-disable-next-line import/prefer-default-export
export const data = () => ({
  formLabel: {
    secondName: 'Фамилия',
    name: 'Имя',
    patronymic: 'Отчество',
    birthday: 'Дата рождения',
    phone: 'Номер телефона',
    gender: {
      role: 'Пол',
      radio: '',
      male: 'Мужчина',
      female: 'Женщина',
    },
    clientGroup: 'Группа клиентов',
    doctor: 'Лечащий врач',
    sms: {
      role: 'Отправлять СМС',
      radio: '',
      yes: 'Да',
      no: 'Нет',
    },
  },

  placeholder: {
    secondName: 'Иванов',
    name: 'Иван',
    patronymic: 'Иванович',
    birthday: 31101989,
    phone: 79172341792,
    clients: 'Выберите группу',
    selectedDoctor: 'Выберите врача',
  },

  secondName: '',
  name: '',
  patronymic: '',
  birthday: null,
  phone: null,
  clients: [],
  clientList: ['VIP', 'Проблемные', 'ОМС'],
  selectedDoctor: '',
  doctorList: ['Иванов', 'Захаров', 'Чернышева'],

  required: '*Поле обязательное для заполнения.',
  invalid: true,
});
