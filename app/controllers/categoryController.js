const { Category, Snippet } = require('../models');

module.exports = {
  async show(req, res, next) {
    try {
      const { id } = req.params;

      const categories = await Category.findAll({
        where: { UserId: req.session.user.id },
        include: Snippet,
      });

      const snippets = await Snippet.findAll({
        where: { CategoryId: id },
      });

      res.render('categories/show', { categoryId: id, categories, snippets });
    } catch (err) {
      next(err);
    }
  },
};
