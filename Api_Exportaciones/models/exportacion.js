const {Schema, model} = require('mongoose')

const ExportacionSchema = ({
    id:{
        type: Number,
        unique: true,
        required:[true, 'El id de la exportación es necesario']
    },

    producto: {
        type:String,
        required:[true, 'El producto de la exportación es requerida'],
    },

    kilos:{
        type:String,
        required:[true, 'El peso por Kilos es requeriada'],
    },

    precioKilos: {
        type:String,
        required:[true, 'El precio por Kilo es requerida'],
    },

    precioDolar: {
        type: String,
        require: [true, 'El precio del dolar es requerido']
    }
})


module.exports = model('Exportacion', ExportacionSchema)