let earphones ;
export default earphones = [
    "EARPHONES", 
    {
        id:1 ,
        img:"images/product-yx1-earphones/image-product.jpg",
        link:"/earphones/1",
        name:"YX1 WIRELESS",
        new:true,
        descrption:"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        features:`Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
            
        The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.`,
        price:599,
        includedItems : [
            {
                quantity:2,
                item:"Earphone Unit",
            },
            {
                quantity:6,
                item:"Multi-Size Earplugs"
            },
            {
                quantity:1,
                item:"User Manual"
            },
            {
                quantity : 1,
                item : "USB-C Charging Cable"
            },
            {
                quantity:1,
                item : "Travel Pouch"
            }
        ],
        gallery : {
            first : "images/product-yx1-earphones/image-gallery-1.jpg",
            second : "images/product-yx1-earphones/image-gallery-2.jpg",
            third :"images/product-yx1-earphones/image-gallery-3.jpg" 
        },
        others : [
            {
                link:"/headphones/2",
                name:"XX99 MARK I",
                image:"images/category-headphones/image-xx99-mark-one.jpg"
            },
            {
                link:"/headphones/3",
                name:"XX59",
                image:"images/category-headphones/image-xx59.jpg"
            },
            {
                link:"/speakers/1",
                name:"ZX9 SPEAKER",
                image:"images/category-speakers/image-zx9.jpg"
            }
        ]
    }
]