import jwt from 'jsonwebtoken';
export const jwtAuth = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	console.log(authHeader);
	if (!authHeader) {
		return res.status(401).json({ message: 'Unauthorized' });
	}

	jwt.verify(authHeader, process.env.JWT_SECRET, (err, user) => {
		if (err) {
			return res.status(403).json({ message: 'Forbidden' });
		}
		req.user = user;
        req.headers.authorization = authHeader;
		next();
	});
};
