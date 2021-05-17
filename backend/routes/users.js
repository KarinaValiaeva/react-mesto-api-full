const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getUsers,
  getUserId,
  getUserInfo,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/me', getUserInfo);

router.get(
  '/:userId',
  celebrate({
    params: Joi.object().keys({
      userId: Joi.string().alphanum().length(24),
    }),
  }),
  getUserId,
);

router.patch(
  '/me',
  celebrate({
    body: Joi.object()
      .keys({
        name: Joi.string().required().min(2).max(30),
        about: Joi.string().required().min(2).max(30),
      })
      .unknown(true),
  }),
  updateUserProfile,
);

router.patch(
  '/me/avatar',
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().uri().required(),
    }),
  }),
  updateUserAvatar,
);

module.exports = router;
