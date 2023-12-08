const products = [
    {
        id: 1,
        name: "Televisor",
        price: 50,
        description: 'TV KALLEY 43 Pulgadas 109 cm ATV43FHDE FHD LED Smart TV Android',
        image: 
            "https://www.kalley.com.co/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-7705946476218-001.jpg?context=bWFzdGVyfGltYWdlc3wzMTA3OTV8aW1hZ2UvanBlZ3xhRFl3TDJoaFpDOHhNemc0T1RNd016a3pOekExTkM4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2Tnpjd05UazBOalEzTmpJeE9GOHdNREV1YW5CbnxjMWEyNzdkNmM3NjAzYjZlZGVhM2IxMWEwMTA1MjE5Njk1ZDM5YWI5MzJiNjgyMTZlMGQzMTJiNmQ2ODExMjU2",
        quantity: 10,
        category: "Dispositivo de entretenimiento" ,
    },
    {
        id: 2,
        name: "Audifonos",
        price: 100,
        description: 'Audífonos KALLEY Inalámbricos Bluetooth In Ear TWS K-AUDB1 Blanco',
        image:
            "https://www.kalley.com.co/medias/7705946879026-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w1MjUxNHxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnd1pDOW9NVEV2TVRFME9UQXhNRE13T1RrME1qSXVhbkJufGJjZWVmYWZhMTM4NTNjZjhiODc5MDc1MTFjOTQwNzk2N2E5YzVhNDZiMmI1NjhmMGMzODA4MWZhYTc3MWEwYjU",
        quantity: 10,
        category: "Dispositivos portátiles de audio"
    },
    {
        id: 3,
        name: "Computadora",
        price: 150,
        description: 'Portátil HP 240 G8',
        image:
            "https://www.kalley.com.co/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-7705946478250-001.jpg?context=bWFzdGVyfGltYWdlc3w0MzYyMTh8aW1hZ2UvanBlZ3xhRE00TDJnek5TOHhOREF4TmpRMk9ETTROVGd5TWk4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2Tnpjd05UazBOalEzT0RJMU1GOHdNREV1YW5CbnwyMGJhZWRjZjBiOGFmNTIyZWZmODJhOTkwZTgzNjkxY2ZkYzUzMTdiMDU4YTIwNGVlMzc5YjM1ZDk0MjJhNzM2",
        quantity: 10,
        category: "Computadoras"
    },
    {
        id: 4,
        name: "Play5",
        price: 200,
        description: 'PlayStation 5 (Versión CD)',
        image:
            "https://www.technologyvideo.co/cdn/shop/files/11108140_1220x_crop_center.jpg?v=1689269425",
        quantity: 10,
        category: "Dispositivo de entretenimiento"
    },
    {
        id: 5,
        name: "Camara",
        price: 250,
        description: 'Cámara de Seguridad Rotativa KALLEY WiFi de Exterior Visión Dia|Noche 1080P HD K-CEX Blanco|Negro',
        image:
            "https://www.kalley.com.co/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-7705946478038-001.jpg?context=bWFzdGVyfGltYWdlc3wxMzE3NzV8aW1hZ2UvanBlZ3xhRFUzTDJnek9TOHhOREF3TVRVME1UazNNVGs1T0M4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2Tnpjd05UazBOalEzT0RBek9GOHdNREV1YW5Cbnw5YTI1MGVkMzVlYWYxZTYyN2Q2ZmY4YzlkNjQxYTdjMGY3YzMzZmVlMDNjNjkzMGI2NDFkMWQ3MWJkNWJkYTk1",
        quantity: 10,
        category: "Dispositivos de fotografía y video"
    },
    {
        id: 6,
        name: "Telefono",
        price: 300,
        description: 'Celular KALLEY Black 3 256GB Negro',
        image:
            "https://www.kalley.com.co/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-7705946477987-001.jpg?context=bWFzdGVyfGltYWdlc3wyMzYzOTJ8aW1hZ2UvanBlZ3xhR1ZoTDJoak9DOHhNemsxTmpJeU5qZzNOVFF5TWk4M05UQlhlRGMxTUVoZmJXRnpkR1Z5TDJodmRHWnZiR1JsY2k5MGNtRnVjMlpsY2k5cGJtTnZiV2x1Wnk5a1pYQnZjMmwwTDJoNVluSnBjeTFwYm5SbGNtWmhZMlZ6TDBsT0wyMWxaR2xoTDNCeWIyUjFZM1F2Tnpjd05UazBOalEzTnprNE4xOHdNREV1YW5CbnxhYzJhY2FlYWVlZDJhYTVkN2YyMDg1ZDJmZjBmMGM4YzlhMTA5MzAxY2E1NzcyOTI5M2M3NTkyZjM0MmFhOWFk",
        quantity: 10,
        category: "Teléfonos móviles"
    },
    {
        id: 7,
        name: "Televisor",
        price: 350,
        description: 'TV KALLEY 65" Pulgadas 164 cm K-GTV65UHDQ 4K-UHD QLED Smart TV Google',
        image:
            "https://www.kalley.com.co/medias/7705946478212-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMjM1NjB8aW1hZ2Uvd2VicHxhR1JrTDJnd055OHhOREEzTkRZek1EVXdORFEzT0M4M056QTFPVFEyTkRjNE1qRXlYekF3TVY4M05UQlhlRGMxTUVnfDUzZDYyMWMxODhkNWQ2YzI2OGFjNWNiODk4MTJkNGY2NTYyODdmZWE3NWZkZWExNjAxMWRiNDhmNDRiNDI5ZGM",
        quantity: 10,
        category: "Dispositivo de entretenimiento"
    },
    {
        id: 8,
        name: "Play 4",
        price: 400,
        description: 'Consola PlayStation 4 Slim de 1 TB',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61Ny7KbRcNL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Dispositivo de entretenimiento"
    },
    {
        id: 9,
        name: "Audifonos cable",
        price: 450,
        description: 'Audífonos KALLEY Inalámbricos Bluetooth K-ABCA Conducción Ósea Azul',
        image:
            "https://www.kalley.com.co/medias/750Wx750H-master-hotfolder-transfer-incoming-deposit-hybris-interfaces-IN-media-product-7705946476621-001.jpg?context=bWFzdGVyfGltYWdlc3w5NDkwNXxpbWFnZS9qcGVnfGFEWmxMMmd5TlM4eE16UTRPVGM1TWpFeU1qa3hNQzgzTlRCWGVEYzFNRWhmYldGemRHVnlMMmh2ZEdadmJHUmxjaTkwY21GdWMyWmxjaTlwYm1OdmJXbHVaeTlrWlhCdmMybDBMMmg1WW5KcGN5MXBiblJsY21aaFkyVnpMMGxPTDIxbFpHbGhMM0J5YjJSMVkzUXZOemN3TlRrME5qUTNOall5TVY4d01ERXVhbkJufDQxMGI1NmFhNDEyMzhhNDk5ODZlYjY0OWI2ZTYxY2UwYjBmMzY5OTQwM2NmZWM2NDRiMzk5YjhjYTIyZTcxYmU",
        quantity: 10,
        category: "Dispositivos portátiles de audio"
    },
    {
        id: 10,
        name: "Computadora",
        price: 500,
        description: 'ASUS Laptop Chromebook CM14, pantalla antirreflejos HD de 14 pulgadas ',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/616aCuRtnpL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Computadoras"
    },
    {
        id: 11,
        name: "Telefono",
        price: 550,
        description: 'Teléfono inteligente desbloqueado 6.7 pulgadas',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61EY2r913hL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Teléfonos móviles"
    },
    {
        id: 12,
        name: "Camara",
        price: 600,
        description: 'VJIANGER Cámara digital 4K 48MP WiFi Vlogging Cámara para YouTube con pantalla abatible de 180°',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71P3pFrwHBL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Dispositivos de fotografía y video"
    },
    {
        id: 13,
        name: "Computadora",
        price: 650,
        description: 'Acer Nitro 5 AN515-58-525P - Laptop para juegos',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71ctRE34RuL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Computadoras"
    },
    {
        id: 14,
        name: "Audifonos Inalambricos",
        price: 700,
        description: 'Sony WH-CH520 - Auriculares inalámbricos Bluetooth con micrófono, color negro',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41lArSiD5hL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Dispositivos portátiles de audio"
    },
    {
        id: 15,
        name: "Tablet",
        price: 750,
        description: 'SAMSUNG Galaxy Tab S6 Lite - Tablet Android de 10.4 pulgadas y 64 GB, pantalla LCD',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/415G0bg-hiL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Dispositivo de entretenimiento"
    },
    {
        id: 16,
        name: "Televisor",
        price: 800,
        description: 'isense Smart TV de 40 pulgadas Class A4 Series FHD 1080p Google',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71vd0UkOYOL._AC_UY218_.jpg",
        quantity: 10,
        category: "Dispositivo de entretenimiento"
    },
    {
        id: 17,
        name: "Camara",
        price: 850,
        description: 'Fujifilm Instax Mini 11 - Cámara instantánea',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61PzfzkeGBL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Dispositivos de fotografía y video"
    },
    {
        id: 18,
        name: "Telefono",
        price: 900,
        description: 'VTech Extended Range 3 teléfono inalámbrico para el hogar con bloqueo de llamadas, conectar a celular Bluetooth',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81d0Kt5BPyL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Teléfonos móviles"
    },
    {
        id: 19,
        name: "Consola",
        price: 950,
        description: 'Valve Steam Deck Consola de mano 64 GB',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51cTQaNzmLL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Dispositivos de entretenimiento"
    },
    {
        id: 20,
        name: "Audifonos",
        price: 70,
        description: 'UliX Rider - Auriculares intraurales con cable, auriculares con micrófono, con cable antienredos',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61DO32kxFfL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Dispositivos portátiles de audio"
    },
    {
        id: 21,
        name: "Computadora Portatil",
        price: 70,
        description: 'HP Stream Laptop BrightView HD de 14 pulgadas',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51kK0BLesNL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Computadoras"
    },
    {
        id: 22,
        name: "Auriculares",
        price: 70,
        description: 'JBL Tune Flex - Auriculares inalámbricos con cancelación de ruido (negro)',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61joErBxERL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Dispositivos portátiles de audio"
    },
    {
        id: 23,
        name: "Televisor",
        price: 70,
        description: 'UliX Rider - Auriculares intraurales con cable, auriculares con micrófono, con cable antienredos',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81DDt46clXL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Dispositivos de entretenimiento"
    },
    {
        id: 24,
        name: "Computadora",
        price: 70,
        description: 'Portátil para juegos con procesador Intel Core i7, 512GB SSD, y tarjeta gráfica NVIDIA GeForce GTX 1650.',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81rsMys9S8L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Dispositivos de entretenimiento"
    },
    {
        id: 25,
        name: "Camara",
        price: 70,
        description: 'Cámara fotográfica con sensor CMOS de 20.1MP, grabación de video 4K, y estabilización de imagen.',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71jL7mRdxNL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Dispositivos de fotografía y video"
    },
    {
        id: 26,
        name: "Televisor",
        price: 70,
        description: 'Televisor OLED de 55 pulgadas con resolución 4K, Dolby Vision IQ y audio Dolby Atmos.',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/810xjVeLUmL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Dispositivo de entretenimiento"
    },
    {
        id: 27,
        name: "Audifonos",
        price: 70,
        description: 'Auriculares inalámbricos con cancelación de ruido ajustable, micrófono integrado y hasta 20 horas de batería.',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61dXMQATLZL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        quantity: 10,
        category: "Dispositivos portátiles de audio"
    },
    {
        id: 28,
        name: "Tableta",
        price: 70,
        description: 'Tableta con pantalla PixelSense de 13 pulgadas, procesador Intel Core i5, 8GB RAM y 256GB SSD.',
        image:
            "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71fzj+ShTCL._AC_SY300_SX300_.jpg",
        quantity: 10,
        category: "Dispositivo de entretenimiento"
    },
]