const behaviorRules = {
  key: 'behaviorRules',
  title: {
    tag: 'h2',
    attributes: {
      style: {
        color: 'white',
        fontWeight: 'bold',
        borderBottom: '1px solid white'
      },
    },
    text: "Правила поведения",
  },
  content: [
    {
      tag: "div",
      attributes: {
        style: {
          color: "white",
        },
      },
      text: "Пункт первый",
    },
    {
      tag: "div",
      attributes: {
        style: {
          color: "white",
          fontSize: '12px',
        },
      },
      text: "Какой-то длинный текст",
    },
  ],
};

const beforeRegistration = {
  key: 'beforeRegistration',
  title: {
    tag: 'h2',
    attributes: {
      style: {
        color: 'white',
        fontWeight: 'bold',
        borderBottom: '1px solid white'
      },
    },
    text: "Перед регистрацией",
  },
  content: [
    {
      tag: "h3",
      attributes: {
        style: {
          color: "white",
        },
      },
      text: "Пункт первый",
    },
    {
      tag: "div",
      attributes: {
        style: {
          color: "white",
          fontSize: '12px',
        },
      },
      text: "Какой-то длинный текст",
    },
  ],
};

const whatMustDoSite = {
  key: 'whatMustDoSite',
  title: {
    tag: 'h2',
    attributes: {
      style: {
        color: 'white',
        fontWeight: 'bold',
        borderBottom: '1px solid white'
      },
    },
    text: "Что должен делать сайт",
  },
  content: [
    {
      tag: "h3",
      attributes: {
        style: {
          color: "white",
        },
      },
      text: "Пункт первый",
    },
    {
      tag: "div",
      attributes: {
        style: {
          color: "white",
          fontSize: '12px',
        },
      },
      text: "Какой-то длинный текст",
    },
  ],
};

const whatMustDoMe = {
  key: 'whatMustDoMe',
  title: {
    tag: 'h2',
    attributes: {
      style: {
        color: 'white',
        fontWeight: 'bold',
        borderBottom: '1px solid white'
      },
    },
    text: "Что должен делать ты",
  },
  content: [
    {
      tag: "h3",
      attributes: {
        style: {
          color: "white",
        },
      },
      text: "Пункт первый",
    },
    {
      tag: "div",
      attributes: {
        style: {
          color: "white",
          fontSize: '12px',
        },
      },
      text: "Какой-то длинный текст",
    },
  ],
};

const generalPoints = {
  key: 'generalPoints',
  title: {
    tag: 'h2',
    attributes: {
      style: {
        color: 'white',
        fontWeight: 'bold',
        borderBottom: '1px solid white'
      },
    },
    text: "Общие моменты",
  },
  content: [
    {
      tag: "h3",
      attributes: {
        style: {
          color: "white",
        },
      },
      text: "Пункт первый",
    },
    {
      tag: "div",
      attributes: {
        style: {
          color: "white",
          fontSize: '12px',
        },
      },
      text: "Какой-то длинный текст",
    },
  ],
};

module.exports = [
  behaviorRules,
  beforeRegistration,
  whatMustDoSite,
  whatMustDoMe,
  generalPoints,
];
