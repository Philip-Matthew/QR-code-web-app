// app.js
import express from 'express';
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { qrImage: null });
});

app.post('/generateQR', (req, res) => {
  const url = req.body.URL;

  const qr_png = qr.image(url);
  qr_png.pipe(fs.createWriteStream("public/qr_img.png"));

  fs.writeFile("public/URL.txt", url, (err) => {
    if (err) throw err;
    console.log("File saved successfully !");
  });

  res.render('index', { qrImage: 'qr_img.png' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
