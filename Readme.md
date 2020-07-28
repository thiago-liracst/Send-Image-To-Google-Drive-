<h1>Send Image to Google Drive</h1>
<h2>First steps:</h2>
<ul>
    <li>npm install</li>
    <li>Make sure to follow the first step (Quickstart) of setting up the Google Drive API: https://developers.google.com/drive/api/v3/quickstart/nodejs</li>
    <li>Copy the 'credentials.json' file to the project root.</li>
    <li>In the terminal run the command 'node gdrive-auth.js'. Open the link that will appear in the browser, log in with your Google account, give the appropriate permissions and finally copy the code that will show and paste it in the terminal.</li>
    <li>If everything went well, a 'token.json' file will appear</li>
    <li>node src/index.js</li>
    <li>Make an HTTP request using 'http://localhost:3333/images' to send the image 'imagem.jpg' (at the root of the project) to Google Drive.</li>
</ul>