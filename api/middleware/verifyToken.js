import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = verified.id;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
