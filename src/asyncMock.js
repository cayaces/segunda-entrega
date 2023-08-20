const products = [
    {
        id: '1',
       nombre: 'Peluqueria Play Doh',
       precio: 15000,
       categoria: 'masitas',
       img: 'https://hasbrostore.cl/12773-home_default/pd-mini-crazy-cuts.jpg',
       stock: 12,
       descripcion: 'Incluye set La peluquería sin armar, 3 piezas de cabeza para distintos estilos, herramienta de rizos, rodillo de trenzas, herramienta de bucles, ataduras y 8 latas tricolor de masa para moldear Play-Doh (cont. net. 454 g).'
    },
    {
        id: '2',
        nombre: 'Lol Muneca',
        precio: 12000,
        categoria: 'juguetes',
        img: 'https://www.diverti.cl/260794-large_default/muneca-lol-surprise-hairvibes-original-15-sorpresa.jpg',
        stock: 15,
        descripcion: 'Incluye	8 sorpresas como atuendo,Zapatos,Botella, tiara y Banda'
    },
    {
        id: '3',
        nombre: 'Organizador Cajonera',
        precio: 20000,
        categoria: 'organizadores',
        img: 'https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw116998d8/images/large/23023555.jpg?sw=1200&sh=1200&sm=fit',
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

export const getProductsByCategory = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

