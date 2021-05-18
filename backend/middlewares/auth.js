const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-error');

const { NODE_ENV, JWT_SECRET } = process.env;

// module.exports = (req, res, next) => {
//   const token = req.headers.authorization.userToken;
//   if (!token) {
//     throw new UnauthorizedError('Необходима авторизация');
//   }
//   let payload;

//   try {
//     payload = jwt.verify(
//       token,
//       NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
//     );
//   } catch (err) {
//     throw new UnauthorizedError({ message: 'Необходима авторизация' });
//   }
//   req.user = payload;
//   next();
// };
module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res
      .status(401)
      .send({ message: 'Необходима авторизация' });
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',);
  } catch (err) {
         throw new UnauthorizedError({ message: 'Необходима авторизация' });
       }
       req.user = payload;
       next();
};