const { Router } = require('express');

const router = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});
router.get('/new', (req, res) => {
  res.render('form', {});
});
router.get('/message/:messageId', (req, res) => {
  const id = Number(req.params.messageId);
  if (!Number.isInteger(id) || id < 0 || id >= messages.length) {
    res.status(404).send('Message not found');
  } else {
    res.render('message', {
      message: messages[id],
    });
  }
});

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
