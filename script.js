/* Resto de estilos... */

/* Estilos específicos para el carrusel */
#carousel-container {
    position: relative;
    overflow: hidden;
}

#carousel {
    display: flex;
    transition: transform 0.5s;
}

.destacado {
    background-color: #fff;
    border: 1px solid #FFA500; /* Borde naranja */
    padding: 20px;
    margin: 10px;
    flex-basis: calc(33.33% - 20px);
    box-sizing: border-box;
    transition: transform 0.5s;
    min-height: 150px;
}

#navigation {
    text-align: center;
    margin-top: 10px;
}

#prevBtn,
#nextBtn {
    background-color: #FFA500; /* Botones naranja */
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    font-size: 20px;
}

#prevBtn:hover,
#nextBtn:hover {
    background-color: #FF8C00; /* Cambio de color al pasar el mouse */
}

/* Resto de estilos... */
