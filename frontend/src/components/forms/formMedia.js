import React from "react";

function FormMedia(){
    return(
        <React.Fragment>
            <div>
                <h2>Formulario de Película</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Título:</label><br />
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} /><br />
                    
                    <label htmlFor="sipnosis">Sinopsis:</label><br />
                    <textarea id="sipnosis" name="sipnosis" value={formData.sipnosis} onChange={handleChange}></textarea><br />
                    
                    <label htmlFor="URL">URL:</label><br />
                    <input type="text" id="URL" name="URL" value={formData.URL} onChange={handleChange} /><br />
                    
                    <label htmlFor="imagenPortada">Imagen de Portada:</label><br />
                    <input type="text" id="imagenPortada" name="imagenPortada" value={formData.imagenPortada} onChange={handleChange} /><br />
                    
                    <label htmlFor="anioEstreno">Año de Estreno:</label><br />
                    <input type="number" id="anioEstreno" name="anioEstreno" value={formData.anioEstreno} onChange={handleChange} /><br />
                    
                    <label htmlFor="generoPrincipal">Género Principal:</label><br />
                    <input type="text" id="generoPrincipal" name="generoPrincipal" value={formData.generoPrincipal} onChange={handleChange} /><br />
                    
                    <label htmlFor="directorPrincipal">Director Principal:</label><br />
                    <input type="text" id="directorPrincipal" name="directorPrincipal" value={formData.directorPrincipal} onChange={handleChange} /><br />
                    
                    <label htmlFor="productora">Productora:</label><br />
                    <input type="text" id="productora" name="productora" value={formData.productora} onChange={handleChange} /><br />
                    
                    <label htmlFor="tipo">Tipo:</label><br />
                    <input type="text" id="tipo" name="tipo" value={formData.tipo} onChange={handleChange} /><br />
                    
                    <input type="submit" value="Guardar" />
                </form>
            </div>
        </React.Fragment>
    )
}

export default FormMedia;