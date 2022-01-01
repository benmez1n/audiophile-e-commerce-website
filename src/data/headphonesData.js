let headphones = []
export default headphones = [
    "HEADPHONES", 
    {
        id:1 ,
        img:"images/product-xx99-mark-two-headphones/image-product.jpg",
        link:"/headphones/1",
        name:"XX99 MARK II",
        new:true,
        descrption:"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        features:`Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
                The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.`,
        price:2999,
        includedItems : [
            {
                quantity:1,
                item:"Headphone Unit",
            },
            {
                quantity:2,
                item:"Replacement Earcups"
            },
            {
                quantity:1,
                item:"User Manual"
            },
            {
                quantity : 1,
                item : "3.5mm 5m Audio Cable"
            },
            {
                quantity:1,
                item : "travel bag"
            }
        ],
        gallery : {
            first : "images/product-xx99-mark-two-headphones/image-gallery-1.jpg",
            second : "images/product-xx99-mark-two-headphones/image-gallery-2.jpg",
            third :"images/product-xx99-mark-two-headphones/image-gallery-3.jpg" 
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
    },
    {
        id:2 ,
        img:"images/product-xx99-mark-one-headphones/image-product.jpg",
        link:"/headphones/2",
        name:"XX99 MARK I",
        new:false,
        descrption:"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        features:`As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.
        From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector`,
        price:1750,
        includedItems : [
            {
                quantity:1,
                item:"Headphone Unit",
            },
            {
                quantity:2,
                item:"Replacement Earcups",
            },
            {
                quantity:1,
                item:"User Manual"
            },
            {
                quantity : 1,
                item : "3.5mm 5m Audio Cable"
            }
        ],
        gallery : {
            first : "images/product-xx99-mark-one-headphones/image-gallery-1.jpg",
            second : "images/product-xx99-mark-one-headphones/image-gallery-2.jpg",
            third :"images/product-xx99-mark-one-headphones/image-gallery-3.jpg" 
        },
        others : [
            {
                link:"/headphones/1",
                name:"XX99 MK II",
                image:"images/category-headphones/image-xx99-mark-two.jpg"
            },
            {
                link:"/headphones/3",
                name:"XX59",
                image:"images/category-headphones/image-xx59.jpg"
            },
            {
                link:"/speakers/1",
                name:"ZX9 SPEAKER",
                image:"images/category-speakers/image-zx9.jpg",
            }
        ]
    },
    {
        id:3 ,
        img:"images/product-xx59-headphones/image-product.jpg",
        link:"/headphones/3",
        name:"XX59",
        new:false,
        descrption:"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        features:`These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
                    More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.`,
        price:899,
        includedItems : [
            {
                quantity:1,
                item:"Headphone Unit",
            },
            {
                quantity:2,
                item:"Replacement Earcups",
            },
            {
                quantity:1,
                item:"User Manual"
            },
            {
                quantity : 1,
                item : "3.5mm 5m Audio Cable"
            },
        ],
        gallery : {
            first : "images/product-xx59-headphones/image-gallery-1.jpg",
            second : "images/product-xx59-headphones/image-gallery-2.jpg",
            third :"images/product-xx59-headphones/image-gallery-3.jpg" 
        },
        others : [
            {
                link:"/headphones/1",
                name:"XX99 MK II",
                image:"images/category-headphones/image-xx99-mark-two.jpg"                
            },
            {                    
                link:"/headphones/2",
                name:"XX99 MK I",
                image:"images/category-headphones/image-xx99-mark-one.jpg"                
            },
            {
                link:"/speakers/1",
                name:"ZX9 SPEAKER",
                image:"images/category-speakers/image-zx9.jpg"
            }
        ]
    }
]