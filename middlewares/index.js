/**
 * Created by Administrator on 2016/4/14.
 */
exports.userRequired = function (req, res, next) {
    if (!req.session || !req.session.user) {
        return res.status(403).send('forbidden!');
    }
    next();
};