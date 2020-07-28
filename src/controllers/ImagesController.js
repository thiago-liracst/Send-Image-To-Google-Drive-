module.exports = {

    sendImage(request, response){

        //const { name, path } = request.body;

        const gdrive = require('../../gdrive.js');

        gdrive.imageUpload('imagem', 'imagem', (id) => {
            const idImage = id;

            return response.json({ idImage });
        });

    },

}