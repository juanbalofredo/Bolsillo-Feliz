import {
    ubiCoto,
    ubiCarrefour,
    ubiDia,
    ubiDisco,
    ubiJumbo,
    ubiVea,
    ubiVital,
    ubiWalmart,
  } from "./ubicaciones.js";
  
  let Allproducts = [
    {
      name: "Leche",
      brand: "Serenisima",
      id: 1,
      price: [
        { name: "coto", price: 240 },
        { name: "dia", price: 255 },
        { name: "jumbo", price: 260 },
        { name: "carrefour", price: 252 },
        { name: "vital", price: 250 },
        { name: "walmart", price: 246 },
        { name: "disco", price: 255 },
      ],
      unit: "1l",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782047/hpq22sqqyewp3fbluvon.jpg",
      description:
        "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de plástico resistente y fácil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes.",
    },
    {
      name: "Leche",
      brand: "Dia",
      id: 2,
      price: [{ name: "dia", price: 195 }],
      unit: "1l",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889117/uc9j4mem8tankytwbjwq.webp",
      description:
        "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de plástico resistente y fácil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes.",
    },
    {
      name: "Leche",
      brand: "Coto",
      id: 3,
      price: [{ name: "coto", price: 200 }],
      unit: "1l",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889022/igrtk8c7zrq99v240gsz.jpg",
      description:
        "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de plástico resistente y fácil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes.",
    },
    {
      name: "Leche",
      brand: "Carrefour",
      id: 4,
      price: [{ name: "carrefour", price: 185 }],
      unit: "1l",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889234/adb7pgtpa8msosylj2tz.webp",
      description:
        "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de plástico resistente y fácil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes.",
    },
  
    {
      name: "Yogurt",
      brand: "Tregar",
      id: 5,
      price: [
        { name: "coto", price: 270 },
        { name: "dia", price: 280 },
        { name: "jumbo", price: 275 },
        { name: "carrefour", price: 268 },
        { name: "vital", price: 260 },
        { name: "walmart", price: 274 },
        { name: "disco", price: 290 },
      ],
      unit: "160g",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782355/jj8llhztwulzhxthu5j3.jpg",
      description:
        "El yogurt en envase es una deliciosa y saludable opción para cualquier momento del día. Con su textura cremosa y su sabor suave, se presenta en un envase de plástico con tapa hermética que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias.",
    },
    {
      name: "Yogurt",
      brand: "Tregar",
      id: 6,
      price: [
        { name: "coto", price: 270 },
        { name: "dia", price: 280 },
        { name: "jumbo", price: 275 },
        { name: "carrefour", price: 268 },
        { name: "vital", price: 260 },
        { name: "walmart", price: 274 },
        { name: "disco", price: 290 },
      ],
      unit: "160g",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889322/ind3uq7inxuooj2ktgdb.webp",
      description:
        "El yogurt en envase es una deliciosa y saludable opción para cualquier momento del día. Con su textura cremosa y su sabor suave, se presenta en un envase de plástico con tapa hermética que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias.",
    },
    {
      name: "Yogurt",
      brand: "La lacteo",
      id: 7,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 281 },
        { name: "jumbo", price: 276.9 },
        { name: "carrefour", price: 272 },
        { name: "vital", price: 285 },
        { name: "walmart", price: 275 },
        { name: "disco", price: 280 },
      ],
      unit: "160g",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889429/bxbjepvih6hu13aezvz8.webp",
      description:
        "El yogurt en envase es una deliciosa y saludable opción para cualquier momento del día. Con su textura cremosa y su sabor suave, se presenta en un envase de plástico con tapa hermética que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias.",
    },
    {
      name: "Yogurt",
      brand: "La lacteo",
      id: 8,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 281 },
        { name: "jumbo", price: 276.9 },
        { name: "carrefour", price: 272 },
        { name: "vital", price: 285 },
        { name: "walmart", price: 275 },
        { name: "disco", price: 280 },
      ],
      unit: "160g",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889481/lrxb6opwxrug2qvgw3ge.jpg",
      description:
        "El yogurt en envase es una deliciosa y saludable opción para cualquier momento del día. Con su textura cremosa y su sabor suave, se presenta en un envase de plástico con tapa hermética que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias.",
    },
    {
      name: "Queso untable",
      brand: "Serenisima",
      id: 9,
      price: [
        { name: "coto", price: 316 },
        { name: "dia", price: 300 },
        { name: "jumbo", price: 315 },
        { name: "carrefour", price: 320 },
        { name: "vital", price: 302 },
        { name: "walmart", price: 295 },
        { name: "disco", price: 310 },
      ],
      unit: "180g",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782535/hpgnnpl6aimguu8bhnzx.webp",
      description:
        "El queso untable es una opción deliciosa y versátil para disfrutar en cualquier momento. Con su suave textura y sabor cremoso, se presenta en un envase de plástico práctico y fácil de abrir. Ideal para untar en panes, utilizar como ingrediente en recetas culinarias o como acompañamiento en platos fríos.",
    },
    {
      name: "Queso untable",
      brand: "Serenisima",
      id: 10,
      price: [
        { name: "coto", price: 316 },
        { name: "dia", price: 300 },
        { name: "jumbo", price: 315 },
        { name: "carrefour", price: 320 },
        { name: "vital", price: 302 },
        { name: "walmart", price: 295 },
        { name: "disco", price: 310 },
      ],
      unit: "180g",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889568/ocatcjslalul4mcgywoz.jpg",
      description:
        "El queso untable es una opción deliciosa y versátil para disfrutar en cualquier momento. Con su suave textura y sabor cremoso, se presenta en un envase de plástico práctico y fácil de abrir. Ideal para untar en panes, utilizar como ingrediente en recetas culinarias o como acompañamiento en platos fríos.",
    },
    {
      name: "Huevo",
      brand: "San Juan",
      id: 11,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 190 },
        { name: "walmart", price: 221 },
        { name: "disco", price: 210 },
      ],
      unit: "6u",
      category: "Huevos y Derivados",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782691/aqupactsshcrgltgl6jf.webp",
      description:
        "El huevo es un alimento nutritivo y versátil, con un sinfín de posibilidades en la cocina. Presentado en una cáscara resistente, contiene una yema y una clara con un alto valor proteico. Puede ser cocido de diversas maneras, desde revuelto hasta en forma de omelette, y es un ingrediente esencial en muchas recetas.",
    },
    {
      name: "Manteca",
      brand: "Serenisima",
      id: 12,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "200g",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782836/ysobrdyzarw38eicrg9p.webp",
      description:
        "La manteca es un producto lácteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de plástico fácil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible.",
    },
    {
      name: "Manteca",
      brand: "La paulina",
      id: 13,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "200g",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889650/miritpmj3z8y7vvmgm8y.webp",
      description:
        "La manteca es un producto lácteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de plástico fácil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible.",
    },
    {
      name: "Manteca",
      brand: "Sancor",
      id: 14,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "200g",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889720/useiyeveilr3hhlrx27l.webp",
      description:
        "La manteca es un producto lácteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de plástico fácil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible.",
    },
    {
      name: "Manteca",
      brand: "Tonadita",
      id: 15,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "200g",
      category: "Lácteos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889845/c63e5zqp5jimy7ivq9jy.webp",
      description:
        "La manteca es un producto lácteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de plástico fácil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible.",
    },
  
    {
      name: "Aceite de oliva",
      brand: "Coppini",
      id: 16,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "500ml",
      category: "Aceites",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783272/wpxhzvlfx8godsmerz5b.jpg",
      description:
        "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de plástico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma únicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato.",
    },
    {
      name: "Aceite de oliva",
      brand: "La tranquilina",
      id: 17,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "500ml",
      category: "Aceites",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889904/okywvimqz7yuwrxb06zy.jpg",
      description:
        "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de plástico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma únicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato.",
    },
    {
      name: "Aceite de oliva",
      brand: "Lira",
      id: 18,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "500ml",
      category: "Aceites",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889963/kfbesyauwwj3lxowzq25.webp",
      description:
        "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de plástico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma únicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato.",
    },
    {
      name: "Aceite de oliva",
      brand: "Morixe",
      id: 19,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "500ml",
      category: "Aceites",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889994/x2posl6fdrakpagq2sjo.webp",
      description:
        "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de plástico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma únicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato.",
    },
    {
      name: "Aceite vegetal",
      brand: "Natura",
      id: 20,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "900ml",
      category: "Aceites",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783457/tl8jxrq5chbffxcj6kn0.jpg",
      description:
        "El aceite vegetal es un ingrediente versátil y económico en la cocina. Presentado en una botella de plástico resistente, es perfecto para freír, hornear o saltear. Se elabora a partir de diferentes tipos de plantas y semillas, lo que le confiere un sabor neutro que no interfiere en el sabor de los alimentos.",
    },
    {
      name: "Aceite vegetal",
      brand: "Deleite",
      id: 21,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "900ml",
      category: "Aceites",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677890056/kfqx8b3lidwasxsfz2vy.webp",
      description:
        "El aceite vegetal es un ingrediente versátil y económico en la cocina. Presentado en una botella de plástico resistente, es perfecto para freír, hornear o saltear. Se elabora a partir de diferentes tipos de plantas y semillas, lo que le confiere un sabor neutro que no interfiere en el sabor de los alimentos.",
    },
    {
      name: "Aceite vegetal",
      brand: "Primor",
      id: 22,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "900ml",
      category: "Aceites",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677890088/ls49ctoyrfvfy9fe3bh2.jpg",
      description:
        "El aceite vegetal es un ingrediente versátil y económico en la cocina. Presentado en una botella de plástico resistente, es perfecto para freír, hornear o saltear. Se elabora a partir de diferentes tipos de plantas y semillas, lo que le confiere un sabor neutro que no interfiere en el sabor de los alimentos.",
    },
    {
      name: "Azucar",
      brand: "Ledesma",
      id: 23,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "1kg",
      category: "Endulzantes",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783552/otzv3ugxajvumgqiwokk.webp",
      description:
        "El azúcar es un ingrediente básico en la repostería y en la cocina en general. Presentado en una bolsa o en un envase de cartón resistente, su textura fina y granulada permite una fácil disolución en líquidos y la creación de postres deliciosos. Esencial en la preparación de bebidas, postres y en la elaboración de algunas salsas.",
    },
  
    {
      name: "Azucar",
      brand: "Chango",
      id: 24,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "1kg",
      category: "Endulzantes",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677890198/kvq4nhgsa7smsso7eoib.jpg",
      description:
        "El azúcar es un ingrediente básico en la repostería y en la cocina en general. Presentado en una bolsa o en un envase de cartón resistente, su textura fina y granulada permite una fácil disolución en líquidos y la creación de postres deliciosos. Esencial en la preparación de bebidas, postres y en la elaboración de algunas salsas.",
    },
    {
      name: "Azucar",
      brand: "Carrefour",
      id: 25,
      price: [
        {
          name: "carrefour",
          price: 220,
        },
      ],
      unit: "1kg",
      category: "Endulzantes",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677890228/seazluxalg9hb6oavvrk.webp",
      description:
        "El azúcar es un ingrediente básico en la repostería y en la cocina en general. Presentado en una bolsa o en un envase de cartón resistente, su textura fina y granulada permite una fácil disolución en líquidos y la creación de postres deliciosos. Esencial en la preparación de bebidas, postres y en la elaboración de algunas salsas.",
    },
    {
      name: "Azucar",
      brand: "Dominio",
      id: 26,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "1kg",
      category: "Endulzantes",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677890269/rpit0qdx0b19zyl2yt57.jpg",
      description:
        "El azúcar es un ingrediente básico en la repostería y en la cocina en general. Presentado en una bolsa o en un envase de cartón resistente, su textura fina y granulada permite una fácil disolución en líquidos y la creación de postres deliciosos. Esencial en la preparación de bebidas, postres y en la elaboración de algunas salsas.",
    },
    {
      name: "Miel",
      brand: "Aleluya",
      id: 27,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "500g",
      category: "Endulzantes",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783691/svsfhmltruz3f7cbvzlt.jpg",
      description:
        "La miel es un producto natural y delicioso, elaborado por las abejas a partir del néctar de las flores. Presentada en un envase de vidrio o de plástico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Además, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud.",
    },
    {
      name: "Miel",
      brand: "Alemany",
      id: 28,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "500g",
      category: "Endulzantes",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893652/aducouvse6qgobaqhqxe.jpg",
      description:
        "La miel es un producto natural y delicioso, elaborado por las abejas a partir del néctar de las flores. Presentada en un envase de vidrio o de plástico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Además, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud.",
    },
    {
      name: "Miel",
      brand: "Nectar de los dioses",
      id: 29,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "500g",
      category: "Endulzantes",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893699/xuvbhm2vwhu8pmmfm6xh.jpg",
      description:
        "La miel es un producto natural y delicioso, elaborado por las abejas a partir del néctar de las flores. Presentada en un envase de vidrio o de plástico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Además, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud.",
    },
    {
      name: "Miel",
      brand: "Romero",
      id: 30,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "500g",
      category: "Endulzantes",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893759/ccebaoknyjnmkifqlctq.jpg",
      description:
        "La miel es un producto natural y delicioso, elaborado por las abejas a partir del néctar de las flores. Presentada en un envase de vidrio o de plástico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Además, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud.",
    },
    {
      name: "Cafe",
      brand: "Nescafe",
      id: 31,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "170g",
      category: "Café y Té",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783759/n6jxzahuwqco2hklunob.webp",
      description:
        "El café en polvo es un producto indispensable para los amantes del café. Presentado en una bolsa o en un envase de vidrio o plástico, su textura fina y su aroma intenso lo hacen perfecto para preparar una taza de café. Ideal para disfrutar en cualquier momento del día, solo o con leche.",
    },
    {
      name: "Cafe",
      brand: "Arlistan",
      id: 32,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "170g",
      category: "Café y Té",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893858/mirjhcj0pnedke3ptlqs.webp",
      description:
        "El café en polvo es un producto indispensable para los amantes del café. Presentado en una bolsa o en un envase de vidrio o plástico, su textura fina y su aroma intenso lo hacen perfecto para preparar una taza de café. Ideal para disfrutar en cualquier momento del día, solo o con leche.",
    },
    {
      name: "Cafe",
      brand: "La virginia",
      id: 33,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "170g",
      category: "Café y Té",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893892/k5cixfwkhxsvbbnvzomk.webp",
      description:
        "El café en polvo es un producto indispensable para los amantes del café. Presentado en una bolsa o en un envase de vidrio o plástico, su textura fina y su aroma intenso lo hacen perfecto para preparar una taza de café. Ideal para disfrutar en cualquier momento del día, solo o con leche.",
    },
    {
      name: "Te",
      brand: "La virginia",
      id: 34,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "200g",
      category: "Café y Té",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893952/msylq0jkpkhzxuxdtkwl.png",
      description:
        "El té es una bebida aromática y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cartón o en latas. Ideal para disfrutar en cualquier momento del día, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajación.",
    },
    {
      name: "Te",
      brand: "Gree hills",
      id: 35,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "200g",
      category: "Café y Té",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783875/o4vtkrtihpihyuymcrsy.jpg",
      description:
        "El té es una bebida aromática y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cartón o en latas. Ideal para disfrutar en cualquier momento del día, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajación.",
    },
    {
      name: "Te",
      brand: "Lipton",
      id: 36,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "200g",
      category: "Café y Té",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893993/xkdcoedousqp9onj9rgc.jpg",
      description:
        "El té es una bebida aromática y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cartón o en latas. Ideal para disfrutar en cualquier momento del día, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajación.",
    },
    {
      name: "Fideos instantaneos",
      brand: "Maruchan",
      id: 37,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "64g",
      category: "Sopas y Caldos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784037/frifxvygwtubdldu4vuo.webp",
      description:
        "Los fideos instantáneos son un producto práctico y rápido de preparar. Presentados en envases individuales o en paquetes, vienen con una variedad de salsas y condimentos para darles un sabor delicioso. Solo se requiere de agua caliente y unos minutos de espera para disfrutar de un plato de fideos sabroso y reconfortante.",
    },
    {
      name: "Fideos instantaneos",
      brand: "Mr noodles",
      id: 38,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "64g",
      category: "Sopas y Caldos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677894063/qrtyngvtghvutdivlv1l.jpg",
      description:
        "Los fideos instantáneos son un producto práctico y rápido de preparar. Presentados en envases individuales o en paquetes, vienen con una variedad de salsas y condimentos para darles un sabor delicioso. Solo se requiere de agua caliente y unos minutos de espera para disfrutar de un plato de fideos sabroso y reconfortante.",
    },
    {
      name: "Fideos instantaneos",
      brand: "Nissin",
      id: 39,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "64g",
      category: "Sopas y Caldos",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677894101/yxot1stt1dhxlngufxxs.webp",
      description:
        "Los fideos instantáneos son un producto práctico y rápido de preparar. Presentados en envases individuales o en paquetes, vienen con una variedad de salsas y condimentos para darles un sabor delicioso. Solo se requiere de agua caliente y unos minutos de espera para disfrutar de un plato de fideos sabroso y reconfortante.",
    },
    {
      name: "Porotos",
      brand: "Arcor",
      id: 40,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "300g",
      category: "Legumbres",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784365/d1karryrtindrkuyscdf.jpg",
      description:
        "Los porotos son una fuente rica de proteínas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de plástico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento versátil y nutritivo.",
    },
    {
      name: "Porotos",
      brand: "La campagnola",
      id: 41,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "300g",
      category: "Legumbres",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677894227/fbsisvvqqdu2rkjcvgjj.webp",
      description:
        "Los porotos son una fuente rica de proteínas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de plástico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento versátil y nutritivo.",
    },
    {
      name: "Porotos",
      brand: "Ciudad del lago",
      id: 42,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "300g",
      category: "Legumbres",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677894276/eimudcmm65rimvv5gvvj.jpg",
      description:
        "Los porotos son una fuente rica de proteínas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de plástico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento versátil y nutritivo.",
    },
    {
      name: "Garbanzos",
      brand: "Arcor",
      id: 43,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "300g",
      category: "Legumbres",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784445/rl5w7eosyqsbn71f7rfk.jpg",
      description:
        "Los garbanzos son una legumbre versátil y nutritiva, rica en proteínas, fibra y carbohidratos complejos. Presentados enlatados o en bolsas de plástico, son un ingrediente esencial en la cocina mediterránea y en la preparación de platos como el hummus, la ensalada de garbanzos o el curry de garbanzos. Además, son económicos y fáciles de almacenar.",
    },
    {
      name: "Garbanzos",
      brand: "La campagnola",
      id: 44,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "300g",
      category: "Legumbres",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677894304/ygjocsonjwbdanfvek3s.jpg",
      description:
        "Los garbanzos son una legumbre versátil y nutritiva, rica en proteínas, fibra y carbohidratos complejos. Presentados enlatados o en bolsas de plástico, son un ingrediente esencial en la cocina mediterránea y en la preparación de platos como el hummus, la ensalada de garbanzos o el curry de garbanzos. Además, son económicos y fáciles de almacenar.",
    },
    {
      name: "Garbanzos",
      brand: "Ciudad del lago",
      id: 45,
      price: [
        { name: "coto", price: 196 },
        { name: "dia", price: 200 },
        { name: "jumbo", price: 215 },
        { name: "carrefour", price: 220 },
        { name: "vital", price: 142 },
        { name: "walmart", price: 421 },
        { name: "disco", price: 110 },
      ],
      unit: "300g",
      category: "Legumbres",
      supermarket: "General",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677894361/dqxdwrfbyt9vfeneldvj.jpg",
      description:
        "Los garbanzos son una legumbre versátil y nutritiva, rica en proteínas, fibra y carbohidratos complejos. Presentados enlatados o en bolsas de plástico, son un ingrediente esencial en la cocina mediterránea y en la preparación de platos como el hummus, la ensalada de garbanzos o el curry de garbanzos. Además, son económicos y fáciles de almacenar.",
    },
  ];
  
  // esto me entrega todos los elementos pero solo con las propiedades q necesito
  let soloProductos = Allproducts.map((ele) => {
    const { name, brand, category, image, unit } = ele;
    let atributosFiltrados = { name, brand, category, image, unit };
    return atributosFiltrados;
  });
  
  // esto es para filtar los productos no Especiales
  const allowedBrands = [
    "Dia",
    "Coto",
    "Carrefour",
    "Jumbo",
    "Vea",
    "Walmart",
    "Disco",
    "Vital",
  ];
  let productosNoEspeciales = soloProductos.filter((ele) => {
    if (!allowedBrands.includes(ele.brand)) {
      return ele;
    }
  });
  
  // esto es para filtrar productos especiales
  let productosEspeciales = soloProductos.filter((ele) => {
    if (allowedBrands.includes(ele.brand)) {
      return ele;
    }
  });
  
  export let productos = [...productosNoEspeciales, ...productosEspeciales];
  
  // export let productos = productosUnidos.map((ele, indice) => {
  //   let { name, brand, category, image, unit } = ele;
  //   name = name + `${indice + 1}`;
  //   let atributosFiltrados = { name, brand, category, image, unit };
  //   return atributosFiltrados;
  // });
  // console.log(productos)
  
  let preciosEspeciales = [
    {
      productId: 42,
      superMId: 1,
      price: 250,
    },
    {
      productId: 43,
      superMId: 2,
      price: 350,
    },
    {
      productId: 44,
      superMId: 3,
      price: 450,
    },
    {
      productId: 45,
      superMId: 3,
      price: 550,
    },
  ];
  
  // console.log ("esto es el CONSOLE.LOG ====>", productosNoEspeciales)
  
  export const tiendas = [
    {
      name: "Dia",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/ovuozay6oxqpnmqek4u0.png",
      ubications: ubiDia,
    },
    {
      name: "Coto",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/xin8w1koh0ck5vu1vrem.png",
      ubications: ubiCoto,
    },
    {
      name: "Carrefour",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/g8iupzjk1qrtkvr2lefo.png",
      ubications: ubiCarrefour,
    },
    {
      name: "Disco",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/z6w6n2scxq7pp4tqjvpm.png",
      ubications: ubiDisco,
    },
    {
      name: "Jumbo",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/gy5hpxliqxoknxbkytg2.png",
      ubications: ubiJumbo,
    },
    {
      name: "Vea",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/elsssfc03lvqxk6a3p4i.png",
      ubications: ubiVea,
    },
    {
      name: "Vital",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/urcpur3gnbkjftcz1meh.png",
      ubications: ubiVital,
    },
    {
      name: "Walmart",
      image:
        "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677805204/m5xpm7k7ovcmplzkwakl.webp",
      ubications: ubiWalmart,
    },
  ];
  
  // esto es para generar precios por tienda en productos no Especiales
  let mercadosEnOrden = [
    "dia",
    "coto",
    "carrefour",
    "disco",
    "jumbo",
    "vea",
    "vital",
    "walmart",
  ];
  const preciosPorMercadoNoEspeciales = [];
  let minimo = 0;
  for (let i = 0; i < productosNoEspeciales.length; i++) {
    minimo = minimo + 100;
    for (let j = 0; j < mercadosEnOrden.length; j++) {
      let precioRamdom = Math.floor(Math.random() * 21) + minimo;
      let precio = {
        productId: i + 1,
        superMId: j + 1,
        price: precioRamdom,
      };
      preciosPorMercadoNoEspeciales.push(precio);
    }
  }
  
  // console.log(preciosPorMercadoNoEspeciales)
  export let precios = [...preciosPorMercadoNoEspeciales, ...preciosEspeciales];
  let arrayUsers = [];
  // for (let i = 1; i < 21; i++) {
export let Usuarios = {
      name: `Admin`,
      last_name: `Master`,
      avatar: `https://res.cloudinary.com/dzuasgy3l/image/upload/v1679368685/b8qhuczmn9dtlbidmgl9.webp`,
      email: `admin@gmail.com`,
      type_account: "3",
      password:'admin123',
      notifications: false,
      activity: false
      // hashgoogle: "xiEulWfqQiNEtMlclpCQPhO2cY" + i,
    };
    // arrayUsers.push(generateUser);
  // }
  
  let genereradorDePrecios = [
    {
      marca: "La Serenísima",
      nombre: "Leche descremada",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679085860/sere.polv_.descr_.400_xf4l0e.png",
      categoria: "Lácteos",
      precio: 85.5,
    },
    {
      marca: "La Serenísima",
      nombre: "Yogur firme",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679086033/Yogur-Firme-Yogurisimo-Frutilla-120-Gr-_1_hgnet8.webp",
      categoria: "Lácteos",
      precio: 39.9,
    },
    {
      marca: "La Serenísima",
      nombre: "Queso crema",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679086079/Queso-Cremon-Fraccionado-La-Serenisima-X-600gr-2-10034_f7vqed.webp",
      categoria: "Lácteos",
      precio: 169.5,
    },
    {
      marca: "La Serenísima",
      nombre: "Dulce de leche",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679086159/DULCE-DE-LECHE-LA-SEREN-SIMA-TRAD-400G-1-18733_b986uj.webp",
      categoria: "Postres",
      precio: 97.8,
    },
    {
      marca: "La Serenísima",
      nombre: "Manteca",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679086215/7790742345806_02_xcsash.webp",
      categoria: "Lácteos",
      precio: 159.0,
    },
    {
      marca: "Bagley",
      nombre: "Galletitas Chocolinas",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679086262/34d7b769-6d54-40ae-b093-266461c6f0b2_eaaza6.jpg",
      categoria: "Galletitas",
      precio: 49.9,
    },
    {
      marca: "Bagley",
      nombre: "Galletitas Express",
      categoria: "Galletitas",
      precio: 29.9,
    },
    {
      marca: "Bagley",
      nombre: "Galletitas Criollitas",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679086349/930453_hzqvcy.jpg",
      categoria: "Galletitas",
      precio: 42.5,
    },
    {
      marca: "Bagley",
      nombre: "Galletitas Oreo",
      categoria: "Galletitas",
      precio: 79.9,
    },
    {
      marca: "Bagley",
      nombre: "Galletitas Lincoln",
      categoria: "Galletitas",
      precio: 28.5,
    },
    {
      marca: "Arcor",
      nombre: "Caramelos",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679086410/Caja-De-Caramelos-Arcor-Surtida-X-242g-1-882977_qtap8y.webp",
      categoria: "Dulces",
      precio: 25.9,
    },
    {
      marca: "Arcor",
      nombre: "Alfajores de maicena",
      categoria: "Galletitas",
      precio: 57.0,
    },
    {
      marca: "Arcor",
      nombre: "Gomitas Mogul",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679086465/130045_gomitas-mogul-tiburoncitos-x-30-gr_imagen-1_eeyisv.webp",
      categoria: "Dulces",
      precio: 37.5,
    },
    {
      marca: "Arcor",
      nombre: "Chicles 5",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679086502/574670-1_re2yat.webp",
      categoria: "Chicles",
      precio: 29.5,
    },
    {
      marca: "Arcor",
      nombre: "Bon o bon",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679086556/7790580119157_02_ckzlcf.webp",
      categoria: "Chocolate",
      precio: 65.0,
    },
    {
      marca: "Havanna",
      nombre: "Alfajores",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679086602/7791875000013_02_ebfrrq.webp",
      categoria: "Galletitas",
      precio: 89.0,
    },
    {
      marca: "Havanna",
      nombre: "Café",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679086650/categoria-cafe_sjag0n.webp",
      categoria: "Bebidas",
      precio: 429.0,
    },
    {
      marca: "Havanna",
      nombre: "Dulce de leche",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679086701/f62-1_tu4smw.jpg",
      categoria: "Postres",
      precio: 95.0,
    },
    {
      marca: "Havanna",
      nombre: "Torta",
      categoria: "Postres",
      precio: 999.0,
    },
    {
      marca: "Havanna",
      nombre: "Chocolate",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679086800/Alfajor_Havanna_-_Milk_Chocolate_Dulce_de_Leche__6u__lxfh-oe_mhhfab.jpg",
      categoria: "Chocolate",
      precio: 129.0,
    },
    {
      marca: "Terrabusi",
      nombre: "Bizcochos de grasa",
      categoria: "Galletitas",
      precio: 35.5,
    },
    {
      marca: "Terrabusi",
      nombre: "Galletas pepas",
      categoria: "Galletitas",
      precio: 49.0,
    },
    {
      marca: "Terrabusi",
      nombre: "Galletitas Chocolinas",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679093667/Galletitas-Terrabusi-Variedad-Chocolate-310-Gr-_2_edlnzr.webp",
      categoria: "Galletitas",
      precio: 49.9,
    },
    {
      marca: "Terrabusi",
      nombre: "Barritas de cereal",
      categoria: "Snacks",
      precio: 64.9,
    },
    {
      marca: "Terrabusi",
      nombre: "Palitos salados",
      categoria: "Snacks",
      precio: 37.9,
    },
    {
      marca: "Molinos Río de la Plata",
      nombre: "Aceite de girasol",
      categoria: "Aceites",
      precio: 149.0,
    },
    {
      marca: "Molinos Río de la Plata",
      nombre: "Harina 000",
      categoria: "Harinas",
      precio: 59.9,
    },
    {
      marca: "Molinos Río de la Plata",
      nombre: "Arroz largo fino",
      categoria: "Arroces",
      precio: 56.5,
    },
    {
      marca: "Molinos Río de la Plata",
      nombre: "Salsa de tomate",
      categoria: "Salsas",
      precio: 46.0,
    },
    {
      marca: "Molinos Río de la Plata",
      nombre: "Fideos guiseros",
      categoria: "Pastas",
      precio: 43.5,
    },
    {
      marca: "Quilmes",
      nombre: "Cerveza rubia",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679093550/Quilmes-Cristal-1-L-Retornable-3-18652_cww0ct.jpg",
      categoria: "Bebidas alcohólicas",
      precio: 95.0,
    },
    {
      marca: "Quilmes",
      nombre: "Cerveza negra",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679087159/Cerveza-Quilmes-Stout-1-L-3-18565_zxl2rs.jpg",
      categoria: "Bebidas alcohólicas",
      precio: 103.0,
    },
    {
      marca: "Quilmes",
      nombre: "Cerveza IPA",
      categoria: "Bebidas alcohólicas",
      precio: 115.0,
    },
    {
      marca: "Quilmes",
      nombre: "Cerveza sin alcohol",
      image:
        "https://res.cloudinary.com/dyasjftch/image/upload/v1679087220/thumb_63879_default_big_vnhwyx.jpg",
      categoria: "Bebidas sin alcohol",
      precio: 86.0,
    },
    {
      marca: "Quilmes",
      nombre: "Agua mineralizada",
      categoria: "Aguas",
      precio: 42.0,
    },
    {
      marca: "Paty",
      nombre: "Hamburguesas clásicas",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679087308/3361348_f_r5wbio.jpg",
      categoria: "Carnes",
      precio: 290.0,
    },
    {
      marca: "Paty",
      nombre: "Salchichas de cerdo",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679087427/384361485384_hczcczuoaezl_798088405371_vhodmfmispqz_95085_1_a9mqts.jpg",
      categoria: "Carnes",
      precio: 140.0,
    },
    {
      marca: "Paty",
      nombre: "Hamburguesas de pollo",
      categoria: "Carnes",
      precio: 279.0,
    },
    {
      marca: "Paty",
      nombre: "Salchichas de pollo",
      categoria: "Carnes",
      precio: 165.0,
    },
    {
      marca: "Paty",
      nombre: "Salchichas parrilleras",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679087539/Salchicha-Patyviena-X-450-Gr-1-890815_k3n8yw.webp",
      categoria: "Carnes",
      precio: 295.0,
    },
    {
      marca: "Ledesma",
      nombre: "Azúcar común",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679087657/Azucar-Ledesma-Molida-Clasica---------Azucar-Ledesma-Molida-Clasico-1-Kg-1-9455_dwnhkr.webp",
      categoria: "Dulces y Endulzantes",
      precio: 48.0,
    },
    {
      marca: "Ledesma",
      nombre: "Azúcar impalpable",
      categoria: "Dulces y Endulzantes",
      precio: 79.0,
    },
    {
      marca: "Ledesma",
      nombre: "Azúcar rubia",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679087693/Azucar-Rubia-Mascabo-Ledesma-800-Gr-_1_tlglos.webp",
      categoria: "Dulces y Endulzantes",
      precio: 60.0,
    },
    {
      marca: "Ledesma",
      nombre: "Miel pura",
      categoria: "Dulces y Endulzantes",
      precio: 315.0,
    },
    {
      marca: "Ledesma",
      nombre: "Edulcorante líquido",
      categoria: "Dulces y Endulzantes",
      precio: 85.0,
    },
    {
      marca: "La Campagnola",
      nombre: "Tomate triturado",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679093270/descarga_1_cjnhrg.jpg",
      categoria: "Conservas y Enlatados",
      precio: 44.0,
    },
    {
      marca: "La Campagnola",
      nombre: "Tomate perita",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679087969/Tomate-Pelado-Perita-La-Campagnola-400-Gr-_1_jhkgv6.webp",
      categoria: "Conservas y Enlatados",
      precio: 50.0,
    },
    {
      marca: "La Campagnola",
      nombre: "Arvejas",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679088039/914909_eqn39f.jpg",
      categoria: "Conservas y Enlatados",
      precio: 36.0,
    },
    {
      marca: "La Campagnola",
      nombre: "Choclo en grano",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679088139/900088_ti3rka.jpg",
      categoria: "Conservas y Enlatados",
      precio: 38.0,
    },
    {
      marca: "La Campagnola",
      nombre: "Aceitunas verdes",
      image: "",
      categoria: "Conservas y Enlatados",
      precio: 120.0,
    },
    {
      marca: "Ilolay",
      nombre: "Leche entera",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679088400/0779078794964-01-4298_d7izap.webp",
      categoria: "Lácteos",
      precio: 90.0,
    },
    {
      marca: "Ilolay",
      nombre: "Yogur firme sabor frutilla",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679088465/7ae549a3-6d1d-415f-88ca-8e3a7a78b237_eean1q.jpg",
      categoria: "Lácteos",
      precio: 65.0,
    },
    {
      marca: "Ilolay",
      nombre: "Queso crema",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679088579/Queso-Crema-Ilolay-Clasico-300-Gr-_1_gmgcqc.webp",
      categoria: "Lácteos",
      precio: 120.0,
    },
    {
      marca: "Ilolay",
      nombre: "Manteca",
      images: "https://res.cloudinary.com/dyasjftch/image/upload/v1679088641/Manteca-Extra-Ilolay-Con-Sal-500-Gr-2-32367_kug6lv.webp",
      categoria: "Lácteos",
      precio: 160.0,
    },
    {
      marca: "Ilolay",
      nombre: "Postre de vainilla",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679088741/front-view-10221_pjoadz.webp",
      categoria: "Lácteos",
      precio: 80.0,
    },
    {
      marca: "Natura",
      nombre: "Crema hidratante corporal",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679088851/41UPp4W9zVS_dqojdg.jpg",
      categoria: "Cuidado personal",
      precio: 450.0,
    },
    {
      marca: "Natura",
      nombre: "Desodorante en barra",
      categoria: "Cuidado personal",
      precio: 150.0,
    },
    {
      marca: "Natura",
      nombre: "Shampoo para cabellos grasos",
      categoria: "Cuidado personal",
      precio: 250.0,
    },
    {
      marca: "Natura",
      nombre: "Jabón líquido para manos",
      categoria: "Cuidado personal",
      precio: 100.0,
    },
    {
      marca: "Natura",
      nombre: "Máscara facial hidratante",
      categoria: "Cuidado personal",
      precio: 300.0,
    },
    {
      marca: "Vicentin",
      nombre: "Aceite de girasol",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679089238/Aceite-Vicentin-Girasol-X-900-Ml-1-7439_zozdjz.webp",
      categoria: "Aceites y condimentos",
      precio: 200.0,
    },
    {
      marca: "Vicentin",
      nombre: "Fideos tipo tallarines",
      categoria: "Pastas y harinas",
      precio: 80.0,
    },
    {
      marca: "Vicentin",
      nombre: "Arroz blanco",
      categoria: "Arroces y legumbres",
      precio: 100.0,
    },
    {
      marca: "Vicentin",
      nombre: "Leche de soja",
      categoria: "Lácteos y bebidas vegetales",
      precio: 150.0,
    },
    {
      marca: "Vicentin",
      nombre: "Atún en aceite",
      categoria: "Conservas y enlatados",
      precio: 120.0,
    },
    {
      marca: "Taragüi",
      nombre: "Yerba Mate Tradicional",
      categoria: "Infusiones",
      precio: 320.0,
    },
    {
      marca: "Taragüi",
      nombre: "Yerba Mate con Palo",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679089480/YERBA-TARAGUI-1-KG-1-11259_ru3s3j.webp",
      categoria: "Infusiones",
      precio: 250.0,
    },
    {
      marca: "Taragüi",
      nombre: "Yerba Mate Despalada",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679089596/Yerba-Taragui-Sin-Palo-1kg_jxtpb5.webp",
      categoria: "Infusiones",
      precio: 300.0,
    },
    {
      marca: "Taragüi",
      nombre: "Yerba Mate Orgánica",
      categoria: "Infusiones",
      precio: 400.0,
    },
    {
      marca: "Taragüi",
      nombre: "Yerba Mate con Hierbas",
      categoria: "Infusiones",
      precio: 280.0,
    },
    {
      marca: "Coca-Cola",
      nombre: "Coca-Cola Regular",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679089919/coca-cola_n3jddd.webp",
      categoria: "Bebidas",
      precio: 80.0,
    },
    {
      marca: "Coca-Cola",
      nombre: "Coca-Cola Zero",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679089978/0391298_coca-cola-zero-2-ltr_ewjz8t.jpg",
      categoria: "Bebidas",
      precio: 80.0,
    },
    {
      marca: "Fanta",
      nombre: "Fanta Naranja",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679090511/fa_1661826772156_c3z0j23a99gfb3g_lgyama.jpg",
      categoria: "Bebidas",
      precio: 70.0,
    },
    {
      marca: "Sprite",
      nombre: "Sprite",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679090614/product-18167_prlque.webp",
      categoria: "Bebidas",
      precio: 70.0,
    },
    {
      marca: "Schweppes Tónica",
      nombre: "Schweppes Tónica",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679090710/schweppes-tonica-18cl_a1qjlq.jpg",
      categoria: "Bebidas",
      precio: 90.0,
    },
    {
      marca: "Ades",
      nombre: "Leche de Almendras",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679090822/779089564353_nyzema.jpg",
      categoria: "Bebidas",
      precio: 120.0,
    },
    {
      marca: "Ades",
      nombre: "Leche de Soja",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679090881/6fb3a27c87571a2c3a1c98df02a3885a_fhlsmy.webp",
      categoria: "Bebidas",
      precio: 100.0,
    },
    {
      marca: "Ades",
      nombre: "Leche de Coco",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679090941/64820150b614bb62343061a4f87838dd_xrrg9v.webp",
      categoria: "Bebidas",
      precio: 140.0,
    },
    {
      marca: "Ades",
      nombre: "Leche de Avellanas",
      categoria: "Bebidas",
      precio: 150.0,
    },
    {
      marca: "Ades",
      nombre: "Leche de Soja Chocolatada",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679091154/0_wro2wj.jpg",
      categoria: "Bebidas",
      precio: 130.0,
    },
    {
      marca: "Beldent",
      nombre: "Beldent Menta",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679092816/beldent_menta_wx4quh.jpg",
      categoria: "Chicles",
      precio: 40.0,
    },
    {
      marca: "Beldent",
      nombre: "Beldent Menta Intensa",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679091387/77942388_snpa30.jpg",
      categoria: "Chicles",
      precio: 40.0,
    },
    {
      marca: "Beldent",
      nombre: "Beldent Menta Suave",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679093074/77942418_sfupn3.jpg",
      categoria: "Chicles",
      precio: 40.0,
    },
    {
      marca: "Beldent",
      nombre: "Beldent Fresh",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679091285/CHICLE-BELDENT-MENTA-QI-X-20-GR-1-17008_ggev1m.webp",
      categoria: "Chicles",
      precio: 40.0,
    },
    {
      marca: "Clight",
      nombre: "Jugo en polvo sabor pomelo rosado",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679092991/clight-pomelo-rosado_deyomx.jpg",
      categoria: "Bebidas",
      precio: 50.0,
    },
    {
      marca: "Clight",
      nombre: "Jugo en polvo sabor limón",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679092923/jugo-en-polvo-clight-limonada-c-endulcor-x-8gr_cfynsb.jpg",
      categoria: "Bebidas",
      precio: 50.0,
    },
    {
      marca: "Clight",
      nombre: "Jugo en polvo sabor naranja",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679092117/Jugo-En-Polvo-Clight-Naranja-8gr-1-941106_ds0f1n.webp",
      categoria: "Bebidas",
      precio: 50.0,
    },
    {
      marca: "Nobleza Gaucha",
      nombre: "Yerba Mate",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679092759/Mate-Cocido-Nobleza-Gaucha-50-Un-_1_pwoxcj.webp",
      categoria: "Infusiones",
      precio: 120.0,
    },
    {
      marca: "Nobleza Gaucha",
      nombre: "Mate cocido",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679093804/Mate-Cocido-Nobleza-Gaucha-En-Saquitos-25u-1-871453_d6x4bd.webp",
      categoria: "Infusiones",
      precio: 90.0,
    },
    {
      marca: "Sancor",
      nombre: "Leche parcialmente descremada",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679094283/db12931a-0aef-4ca3-957f-d177c49254b4_hafgxs.jpg",
      categoria: "Lácteos",
      precio: 80.0,
    },
    {
      marca: "Sancor",
      nombre: "Leche entera",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679094359/00251621_ybaskn.jpg",
      categoria: "Lácteos",
      precio: 90.0,
    },
    {
      marca: "Sancor",
      nombre: "Yogur natural",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679094981/00253147_b7phwb.jpg",
      categoria: "Lácteos",
      precio: 100.0,
    },
    {
      marca: "Sancor",
      nombre: "Queso crema",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679095038/mend9icrim-sancor_hzjbgl.jpg",
      categoria: "Lácteos",
      precio: 150.0,
    },
    {
      marca: "Sancor",
      nombre: "Manteca",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679095080/7790080010879_zdb2sh.jpg",
      categoria: "Lácteos",
      precio: 200.0,
    },
    {
      marca: "Mendicrim",
      nombre: "Queso Crema Light",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679095150/Queso-Crema-Light-Toque-Mendicrim-300-gr-1-6217_rznaxn.webp",
      categoria: "Lácteos",
      precio: 90.0,
    },
    {
      marca: "Bonafide",
      nombre: "Café molido",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679095478/Caf-Bonafide-Molido-Sabor-Intenso-250-Gr-1-10999_gacmhr.webp",
      categoria: "Café",
      precio: 180.0,
    },
    {
      marca: "Bonafide",
      nombre: "Chocolate amargo",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679095581/c57d23c0-381c-47e3-b3c1-c82aba7303b0_vizgty.jpg",
      categoria: "Chocolate",
      precio: 150.0,
    },
    {
      marca: "Bonafide",
      nombre: "Turrón de Maní",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679095581/c57d23c0-381c-47e3-b3c1-c82aba7303b0_vizgty.jpg",
      categoria: "Dulces",
      precio: 100.0,
    },
    {
      marca: "Cachamai",
      nombre: "Té de hierbas serranas",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679096197/7792280000339_02_mq9ff1.webp",
      categoria: "Infusiones",
      precio: 120.0,
    },
    {
      marca: "Cachamai",
      nombre: "Té verde con jengibre y limón",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679096180/225619_te-cachamai-o-clock-x-20-saquitos_imagen-1_qgr3pi.webp",
      categoria: "Infusiones",
      precio: 150.0,
    },
    {
      marca: "Cindor",
      nombre: "Leche chocolatada",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679096851/LECHE-CINDOR-MID-CHOCOLATE-1-6083_zuckgf.webp",
      categoria: "Bebidas",
      precio: 120.0,
    },
    {
      marca: "Fantoche",
      nombre: "Bizcochos dulces",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679097024/Galleta-Pepas-Fantoche-350Gr_iqbdef.webp",
      categoria: "Snacks",
      precio: 80.0,
    },
    {
      marca: "Gallo Snacks",
      nombre: "Papas fritas sabor jamón",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679099402/Chips-Gallo-Snacks-Jamon-Horneados-100-Gr-_1_ftcxik.webp",
      categoria: "Snacks",
      precio: 70.0,
    },
    {
      marca: "Manaos",
      nombre: "Gaseosa sabor naranja",
      categoria: "Bebidas",
      precio: 50.0,
    },
    {
      marca: "Manaos",
      nombre: "Gaseosa sabor lima-limón",
      categoria: "Bebidas",
      precio: 50.0,
    },
    {
      marca: "Manaos",
      nombre: "Gaseosa sabor cola",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679099689/Gaseosa_Manaos_Naranja_3_lts__1_qgbfky.jpg",
      categoria: "Bebidas",
      precio: 50.0,
    },
    {
      marca: "Manaos",
      nombre: "Gaseosa sabor pomelo",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679099767/Gaseosa-Manaos-Pomelo-225-Lts-_1_rjyk2y.webp",
      categoria: "Bebidas",
      precio: 50.0,
    },
    {
      marca: "Manaos",
      nombre: "Gaseosa sabor cola",
      image: "https://res.cloudinary.com/dyasjftch/image/upload/v1679099863/Gaseosa_Manaos_Cola_3_lts_Botella_x_3cc_1_zudrm5.jpg",
      categoria: "Bebidas",
      precio: 50.0,
    },
  ];
  
  let productos2 = [];
  genereradorDePrecios.forEach((ele) => {
    let atributosQueNecesito = {
      brand: "La Serenísima",
      nombre: "Leche descremada",
      categoria: "Lácteos",
      precio: 85.5,
    };
    productos2.push(ele);
  });
  
  const marcasArgentinas = [
    "La Serenísima",
    "Bagley",
    "Arcor",
    "Havanna",
    "Terrabusi",
    "Molinos Río de la Plata",
    "Quilmes",
    "Paty",
    "Ledesma",
    "La Campagnola",
    "Ilolay",
    "Natura",
    "Vicentin",
    "Taragüi",
    "Coca-Cola",
    "Ades",
    "Beldent",
    "Clight",
    "Nobleza Gaucha",
    "Aguas Danone",
    "Sancor",
    "Mendicrim",
    "Bonafide",
    "Cachamai",
    "Cindor",
    "Fantoche",
    "Gallo Snacks",
    "Manaos",
  ];
  // console.log(marcasArgentinas);
  
  // export let Usuarios = [...arrayUsers];
  