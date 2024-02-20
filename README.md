# QR Code Generator App📱💻

## Overview ℹ️
This QR Code Generator web application is built using Node.js and Express.js. It allows users to generate QR codes for specified URLs. Upon entering a URL in the input field and submitting the form, the application generates a QR code image and saves it as `qr_img.png` in the `public` folder. Additionally, the entered URL is saved in a text file named `URL.txt` within the `public` folder.

## Installation 🛠️
1. Ensure you have Node.js installed on your system.
2. Clone or download the repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Install dependencies by running `npm install`.

## Usage 🚀
1. Start the server by running `node app.js`.
2. Open a web browser and go to `http://localhost:3000`.
3. Enter the URL for which you want to generate the QR code.
4. Click the "Generate QR Code" button.
5. The generated QR code image will be displayed on the page and saved as `qr_img.png` in the `public` folder.
6. The entered URL will also be saved in a text file named `URL.txt` in the `public` folder.

## Dependencies 📦
- `express`: Web framework for Node.js.
- `inquirer`: A command-line interface for Node.js, but not used in the web application itself.
- `qr-image`: Library to generate QR codes.
- `fs`: File system module in Node.js.

## Files and Directories 📁
- `app.js`: Main application file containing the server logic.
- `public/`: Directory for serving static files, including the generated QR code image and text file.

## Configuration ⚙️
- The port for the server is set to `3000` by default. You can change it in the `app.js` file if needed.
- Ensure the `public` folder has write permissions for saving the QR code image and text file.

## Author 🧑‍💻
- Full Name: Philip Matthew
- GitHub: [Your GitHub Profile](https://github.com/Philip-Matthew)

Feel free to contribute to this project by submitting pull requests or reporting issues.🤝
