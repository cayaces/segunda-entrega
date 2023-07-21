const products = [
    {
        id: '1',
       nombre: 'Masitas Play Doh',
       precio: 15000,
       categoria: 'masitas',
       img: 'https://hasbrostore.cl/11420-thickbox_default/MASAS-Y-PLASTILINA-PLAY-DOH-CORE-8-PACK-RAINBOW.jpg',
       stock: 10,
       descripcion: 'Este gran pack de latas de masitas Play-Doh te da un sinfín de posibilidades creativas, incluye 20 tarritos de distintos colores'
    },
    {
        id: '2',
       nombre: 'Peluqueria Play Doh',
       precio: 15000,
       categoria: 'masitas',
       img: 'https://http2.mlstatic.com/D_NQ_NP_692626-MLU69645542576_052023-O.webp',
       stock: 10,
       descripcion: 'Incluye set La peluquería sin armar, 3 piezas de cabeza para distintos estilos, herramienta de rizos, rodillo de trenzas, herramienta de bucles, ataduras y 8 latas tricolor de masa para moldear Play-Doh (cont. net. 454 g).' 
    },
    {
        id: '3',
        nombre: 'Lol Muneca',
        precio: 12000,
        categoria: 'juguetes',
        img: 'https://falabella.scene7.com/is/image/Falabella/882525021_1?wid=800&hei=800&qlt=70',
        stock: 10,
        descripcion: 'Incluye	8 sorpresas como atuendo,Zapatos,Botella, tiara y Banda'
    },
    {
        id: '4',
        nombre: 'Figura de accion coleccionable',
        precio: 1000,
        categoria: 'juguetes',
        img: 'https://falabella.scene7.com/is/image/Falabella/14411534_1?wid=800&hei=800&qlt=70',
        stock: 10,
        descripcion: 'Mas informacion del Producto de Banpresto Alguna vez has querido tener a Goku, Vegeta, Krilin y al equipo entero de la serie de Dragon Ball, Naruto o tal vez a las princesas de Disney? Ahora puedes con la linia de figuras coleccionables Banpresto! Banpresto, una de las companias mas conocidas en el mundo de los coleccionistas de figuras de Anime, peliculas y fantasia ya esta disponible en nuestras tiendas! si buscas las mejores figuras con la mejor calidad, solo Banpresto te las puede ofrecer, Con Las mejores franquicias de la industria, Banpresto te trae lo mejor, como Dragon Ball, My Hero Academia, One Piece, Disney y entre otros shows de anime y fantasia. Que esperas? Empieza tu collecion hoy y mira por que millones de coleccionistas como tu se han unido a Banpresto y sus figuras de alta calidad!'
    },
    {
        id: '5',
        nombre: 'Organizador Juguetes',
        precio: 25000,
        categoria: 'organizadores',
        img: 'https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw69ab29ed/images/large/2CC25197445.jpg?sw=1200&sh=1200&sm=fit',
        stock: 10,
        descripcion: '9 contenedores de almacenamiento extraíbles para jugar y fácil limpieza después, Contenedores de tela no tejida, se pueden plegar cuando no se usan Los contenedores coloridos permiten a los niños almacenar juguetes de diferentes categorías, lo que ayuda a desarrollar la capacidad de organización, 2 asas laterales para facilitar el movimiento, mantiene los juguetes ordenados de una manera fácil de ver y fácil de acceder, haciendo una sala de juegos limpia y limpia, Fácil de montar, Medidas : 64cm x 29cm x 65cm'
       
    },
    {
        id: '6',
        nombre: 'Organizador Cajonera',
        precio: 20000,
        categoria: 'organizadores',
        img: 'https://dojiw2m9tvv09.cloudfront.net/33039/product/047-24696.jpg',
        stock: 10,
        descripcion: 'DISEÑO Y ALMACENAMIENTO: Hecho de un lienzo de tela con divertidos personajes de animales de fieltro en la parte delantera, la Caja, Cabe en la mayoría de las estanterías y cubículos y es ideal para regalos de baby shower, juguetes, libros, ropa, juegos, suministros y Arte y manualidades.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}



