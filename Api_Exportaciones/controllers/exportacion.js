const {response} = require('express')

Exportacion = require('../models/exportacion')

const getExportacion = async(req, res) => {
    const exportaciones = await Exportacion.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: exportaciones
    })
}

const postExportacion = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const exportacion = new Exportacion(datos) //Instanciar el objeto
        await exportacion.save()//Guardar en la base de dato  
        console.log(exportacion) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putExportacion = async(req, res) =>{
    const {id,producto,kilos,precioKilos,precioDolar} = req.body //Desestructurar
    let mensaje = ''
    try {
        const exportacion = await Exportacion.findOneAndUpdate({id: id},{
            producto: producto,
            kilos: kilos,
            precioKilos: precioKilos,
            precioDolar: precioDolar
        });//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteExportacion = async(req, res) =>{
    const {id} = req.query //Desestructurar
    let mensaje = ''
    try {
        const exportacion = await Exportacion.findOneAndDelete({id: id})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getExportacion,
    postExportacion,
    putExportacion,
    deleteExportacion
}