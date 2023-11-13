const checkName = (req, res, next) => {
  if (req.body.album_name) {
    next();
  } else {
    res.status(400).json({ error: "Album name is required" });
  }
};

const checkBoolean = (req, res, next) => {
  const grammy = req.body.is_grammy;
  if (typeof grammy === "boolean") {
    next();
  } else {
    res.status(400).json({ error: "is_grammy must be type boolean" });
  }
};

module.exports = { checkName, checkBoolean };
