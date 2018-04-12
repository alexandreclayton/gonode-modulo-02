const { Category, Snippet } = require('../models');

module.exports = {
  async show(req, res, next) {
    try {
      const { categoryId, id } = req.params;

      const categories = await Category.findAll({
        where: { UserId: req.session.user.id },
        include: Snippet,
      });

      const snippets = await Snippet.findAll({
        where: { CategoryId: categoryId },
      });

      const snippet = await Snippet.findById(id);

      res.render('snippets/show', {
        categoryId,
        categories,
        snippets,
        currentSnippet: snippet,
      });
    } catch (err) {
      next(err);
    }
  },
};
