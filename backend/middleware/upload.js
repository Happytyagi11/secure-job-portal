import multer from "multer";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

function fileFilter(req, file, cb) {
  if (file.mimetype !== "application/pdf") {
    return cb(new Error("Only PDF files allowed"), false);
  }
  cb(null, true);
}

export default multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter
});
