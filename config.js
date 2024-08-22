const token = '7159467935:AAE2RjQXCfPea-O-iJ8ptf7QoHHdadYQrRU';
const webApiUrl = 'https://telegram-bot-gules.vercel.app';
const messages = {
  ru: {
    start: 'Выберите ваш знак зодиака!',
    startButton: 'Начать',
    signs: {
      '♈ Овен - (21.03 - 19.04)': 'aries',
      '♉ Телец - (20.04 - 20.05)': 'taurus',
      '♊ Близнецы - (21.05 - 21.06)': 'gemini',
      '♋ Рак - (22.06 - 22.07)': 'cancer',
      '♌ Лев - (23.07 - 22.08)': 'leo',
      '♍ Дева - (23.08 - 23.09)': 'virgo',
      '♎ Весы - (24.09 - 23.10)': 'libra',
      '♏ Скорпион - (24.10 - 22.11)': 'scorpio',
      '♐ Стрелец - (23.11 - 21.12)': 'sagittarius',
      '♑ Козерог - (22.12 - 20.01)': 'capricorn',
      '♒ Водолей - (21.01 - 18.02)': 'aquarius',
      '♓ Рыбы - (19.02 - 20.03)': 'pisces'
    }
  },
  en: {
    start: 'Choose your zodiac sign!',
    startButton: 'Start',
    signs: {
      '♈ Aries - (21.03 - 19.04)': 'aries',
      '♉ Taurus - (20.04 - 20.05)': 'taurus',
      '♊ Gemini - (21.05 - 21.06)': 'gemini',
      '♋ Cancer - (22.06 - 22.07)': 'cancer',
      '♌ Leo - (23.07 - 22.08)': 'leo',
      '♍ Virgo - (23.08 - 23.09)': 'virgo',
      '♎ Libra - (24.09 - 23.10)': 'libra',
      '♏ Scorpio - (24.10 - 22.11)': 'scorpio',
      '♐ Sagittarius - (23.11 - 21.12)': 'sagittarius',
      '♑ Capricorn - (22.12 - 20.01)': 'capricorn',
      '♒ Aquarius - (21.01 - 18.02)': 'aquarius',
      '♓ Pisces - (19.02 - 20.03)': 'pisces'
    }
  }
};

module.exports = { messages, webApiUrl, token };