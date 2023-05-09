const MOCK_DATA = [
    {
        id: 1,
        nombre: "Akira 3",
        precio: 5900,
        editorial: "OvniPress",
        img: "../public/img/akira3.png",
        stock: 1,
        detalle: "En la hostil y caótica megalópolis de Neo Tokyo, Tetsuo y sus compañeros deberán averiguar el enigma de Akira, bajo el cual se esconde el más escalofriante secreto científico. La edición definitiva de una obra maestra del cómic japonés -y también mundial- que no debe faltar en la estantería de cualquier aficionado al cómic en general."
    },
    {
        id: 2,
        nombre: "Attack On Titan 33",
        precio: 1900,
        editorial: "OvniPress",
        img: "../public/img/attack33.png",
        stock: 1,
        detalle: "La raza humana, antaño dueña del mundo, se enfrenta a la extinción a manos de los titanes, gigantescos monstruos de inteligencia limitada que cazan y devoran personas por diversión. Los supervivientes se hacinan e intentan sobrevivir en una pequeña ciudad… pero algunos ya están hartos: ¡van a atacar!"
    },
    {
        id: 3,
        nombre: "Basilisk 1",
        precio: 2000,
        editorial: "IVREA",
        img: "../public/img/basilisk1.png",
        stock: 1,
        detalle: "Los clanes Kouga e Iga llevan siglos enfrentados y sólo un pacto mantiene la paz. Pero cuando el antiguo shogun, Ieyasu Tokugawa, tiene que decidir quién de sus nietos será el sucesor de su hijo, no se le ocurre mejor manera que con una lucha a muerte entre los dos clanes ninja. Cada uno de los clanes selecciona a sus 10 mejores miembros y los enfrentamientos más despiadados entre las dos facciones están servidos, dando por concluido el pacto de no agresión."
    },
    {
        id: 4,
        nombre: "Berserk 21",
        precio: 2200,
        editorial: "Panini",
        img: "../public/img/berserk21.png",
        stock: 1,
        detalle:"Berserk nos cuenta la historia de Guts , un antihéroe mercenario que vaga por el mundo en solitario en búsqueda de Apóstoles , unos seres demoníacos que antaño fueron humanos pero que sacrificaron una parte importante de sus vidas para conseguir poderes que les permitieran alcanzar sus más oscuros deseos."
    },
    {
        id: 5,
        nombre: "Blue Lock 12",
        precio: 1800,
        editorial: "IVREA",
        img: "../public/img/blue12.png",
        stock: 1,
        detalle:"Tras una desastrosa derrota en el Mundial 2018, la selección de Japón lucha por recuperarse. ¿Pero qué le falta? Un delantero absoluto, que pueda guiarles hacia la victoria. La Asociación de Fútbol de Japón está empeñada en crear un delantero con hambre de gol y sed de victoria, que pueda ser el instrumento decisivo para dar la vuelta a un partido perdido… y para ello ha reunido a 300 de los mejores y más brillantes jugadores juveniles de Japón, encerrándolos en un centro conocido como “Blue Lock”. ¿Quién se convertirá en el líder del equipo? ¿Será capaz de superar a todos los que se interpongan en su camino?"
    },
    {
        id: 6,
        nombre: "Dragon Ball Super 1",
        precio: 1800,
        editorial: "IVREA",
        img: "../public/img/dragonballsuper1.png",
        stock: 1,
        detalle:"Han pasado varios meses desde la formidable batalla entre Goku y el monstruo Bû...  El mundo ha recuperado la paz, pero ¡¡una nueva amenaza se cierne ahora sobre él!!¿¡Esta vez, el enemigo llega desde el “sexto universo”!?  ¡¡Empieza una nueva obra de Dragon Ball que, bajo las directrices originales de Akira Toriyama, retoma el hilo de la historia original!!"
    },
    {
        id: 7,
        nombre: "Fire Force 16",
        precio: 1700,
        editorial: "Panini",
        img: "../public/img/fireforce16.png",
        stock: 1,
        detalle:"Tokio se encuentra bajo un extraño fenómeno: ¡la gente entra, sin remedio, en combustión espontánea! Aunque, afortunadamente, hay un equipo a cargo de mantener a raya este particular infierno… ¡La Brigada Antiincendios, que, además ahora cuenta con un nuevo miembro: Shinra, un adolescente de sonrisa perturbadora, poder curioso y cuyo objetivo es convertirse en un héroe!"
    },
    {
        id: 8,
        nombre: "Hiraet 3",
        precio: 2000,
        editorial: "Distrito",
        img: "../public/img/hiraet3.png",
        stock: 1,
        detalle:"Mika no consigue superar el dolor que le provoca la pérdida de su mejor amiga y está decidida a seguirla hasta la tumba. Sin embargo, justo cuando se abalanza contra un camión, dos misteriosos transeúntes son testigos de lo que está a punto de suceder y uno de ellos la salva antes de que la embista. Al parecer, los enigmáticos personajes son una deidad y un ser inmortal que se dirigen a Yomi, la tierra donde habitan los muertos. Con el objetivo de reencontrarse con el alma de su mejor amiga, Mika decide embarcarse con ellos en una trepidante aventura por un mundo lleno de magia y fantasía. Ahora bien, ¿será capaz de dar con las respuestas que necesita y de deshacerse de la tristeza que atenaza su corazón?"
    },
    {
        id: 9,
        nombre: "Joy 1",
        precio: 2000,
        editorial: "Distrito",
        img: "../public/img/joy1.png",
        stock: 1,
        detalle:"Gô Okazaki es un mangaka especializado en shôjos que, con la inestimable ayuda de su asistente Yûsuke, se pasa las jornadas ideando historias que calen hondo en sus lectoras. Sin embargo, el mismo día que descubre por casualidad que Yûsuke es gay, su editora le propone dibujar un manga BL. Gô acepta el reto, pero enseguida se encuentra en un callejón sin salida: no se le ocurre ninguna idea buena para la trama. Finalmente, se decidirá a fingir que siente algo platónico por su asistente para, con suerte, lograr estimular su imaginación y crear así una buena historia. Pero ¿qué pasaría si esos sentimientos se transformaran en algo real?"
    },
    {
        id: 10,
        nombre: "Jujutsu Kaisen 4",
        precio: 2100,
        editorial: "Panini",
        img: "../public/img/jujutsukaisen4.png",
        stock: 1,
        detalle:"Yuuji Itadori, un estudiante de secundaria, que posee una rara habilidad física, pasa sus días visitando a su abuelo que se encontra hospitalizado. Pero un día, espíritus malditos que duermen en su escuela, se liberan y aparecen criaturas fantasmas. A pesar de ello, Yuuji entra al complejo escolar para salvar a sus compañeros…!"
    },
    {
        id: 11,
        nombre: "Kieta Hatsukoi 3",
        precio: 2100,
        editorial: "Panini",
        img: "../public/img/kietahatsukoi3.png",
        stock: 1,
        detalle:"Aoki está perdidamente enamorado de Hatsumoto, una linda compañera de su salón de clases. Sin embargo, un día Hashimoto le presta una goma que pone Ida (corazón), en referencia a otro chico del salón. Ida le ve la goma y piensa que es Aoki quien está enamorado de él... ¡Pero esto no es más que el comienzo del enredo amoroso!"
    },
    {
        id: 12,
        nombre: "Kingdom 8",
        precio: 2200,
        editorial: "IVREA",
        img: "../public/img/kingdom8.png",
        stock: 1,
        detalle:"La historia nos traslada a lo que ahora es China hacia el año 300 a.c., una época en la que la zona está dividida en siete reinos que luchan por cada palmo de terreno con sus vecinos, mientras estallan continuas guerras civiles intestinas y también con clanes que tienen su propio modo de vida. Shin es niño huérfano de guerra que vive en el reino de Qin y que ha acabado convertido en esclavo. Junto a su amigo Hyou, sueña con convertirse en un gran general como los legendarios que condujeron enormes ejércitos. Su vida da un vuelco el día que reclutan a Hyou como doble de Ei Sei, Rey de Qin, y ahí empiezan una serie de acontecimientos que lo llevan a unirse al ejército y vivir el mismo sueño que su Rey: unificar los siete reinos en uno solo, China. Las guerras que aparecen son de una escala enorme, con decenas de miles de soldados y conoceremos a decenas de personajes de cada reino que tendrán un papel crucial en ellas, haciendo uso de la estrategia, de las tácticas y del puro instinto. El dibujo de Yasuhisa Hara, que fue ayudante y es amigo de Takehiko Inoue, tiene una evolución espectacular y nos refleja perfectamente tanto la grandeza, como el horror, el gore y la dureza de las guerras. A través de grandes campañas, cada capítulo nos deja con ganas de más en una historia perfectamente hilada, llena de momentos épicos y que hacen que te acabes preguntando “¿Cómo se las arreglarán?”."
    },
    {
        id: 13,
        nombre: "Monster 1",
        precio: 4900,
        editorial: "IVREA",
        img: "../public/img/monster1.png",
        stock: 1,
        detalle:"La serie narra la historia de un neurocirujano japonés llamado Kenzo Tenma, quien creyendo hacer lo correcto le salva la vida a un niño aparentemente normal; pero lejos de la realidad, este infante es en realidad un asesino sociópata que cambiará y destruirá las vidas de todos aquellos con los que se cruce en el camino ..."
    },
    {
        id: 14,
        nombre: "Noragami 21",
        precio: 1700,
        editorial: "Panini",
        img: "../public/img/noragami21.png",
        stock: 1,
        detalle:"Hiyori, una joven humana, arriesga su vida para salvar a un chico de un atropello. Lo que no sabe es que se trata de Yato, una deidad menor que desea convertirse en dios, y tras su sacrificio la chica adquiere el poder de abandonar su cuerpo casi a voluntad… lo que la liga a Yato y a su misión."
    },
    {
        id: 15,
        nombre: "One Punch-Man 25",
        precio: 1500,
        editorial: "Panini",
        img: "../public/img/onepunch25.png",
        stock: 1,
        detalle: "Saitama es un poderoso superhéroe calvo que derrota fácilmente a los monstruos u otros villanos con un único golpe de su puño. Debido a esto, Saitama ha encontrado aburrida su fuerza y siempre está tratando de encontrar rivales más poderosos que le puedan igualar."
    },
    {
        id: 16,
        nombre: "Orient 1",
        precio: 1900,
        editorial: "OvniPress",
        img: "../public/img/orient1.png",
        stock: 1,
        detalle:"La historia gira alrededor de un chico de 15 años llamado Musashi y toma lugar en el período Sengoku, en el cual Japón está gobernado por demonios. Musashi afrontará a los demonios con su poder -especial- en un intento de salvar la humanidad junto a su amigo Kojiro."
    },
    {
        id: 17,
        nombre: "Saint Seiya 1",
        precio: 4200,
        editorial: "IVREA",
        img: "../public/img/saintseiya1.png",
        stock: 1,
        detalle:"Un joven huérfano, Seiya, está destinado a convertirse en el Caballero Pegaso. Atena ha nacido en este mundo, pero esta vez bajo una oscura profecía de que perderá la guerra contra Poseidón y Hades, y llevará a la humanidad a la ruina. Seiya se opone a la profecía, dispuesto a protegerla a toda costa."
    },
    {
        id: 18,
        nombre: "Shikimori 3",
        precio: 2000,
        editorial: "Distrito",
        img: "../public/img/shikimori3.png",
        stock: 1,
        detalle:"Izumi es un estudiante de secundaria con una vida llena de desgracias: desde que tiene uso de razón, su torpeza, entremezclada con la mala suerte, lo ha llevado a sufrir todo tipo de percances. Sin embargo, las cosas cambian cuando conoce a Shikimori y se hacen novios."
    },
    {
        id: 19,
        nombre: "Soul Eater 18",
        precio: 2900,
        editorial: "OvniPress",
        img: "../public/img/souleater18.png",
        stock: 1,
        detalle:"Maka Albarn, Death The Kid y Black Star son tres jóvenes estudiantes de Shibusen. Su objetivo en la vida es conseguir graduarse y convertirse en Técnicos de Guadaña Mortal y Filo Demoníaco, título que les da la capacidad para dar sentencias de muerte a humanos que se han desviado del buen camino."
    },
    {
        id: 20,
        nombre: "Vinlad Saga 1",
        precio: 2650,
        editorial: "OvniPress",
        img: "../public/img/vinland1.png",
        stock: 1,
        detalle:"Desafiando las rígidas leyes vikingas y a pesar de ser un gran guerrero, Thors decide huir de la cruenta vida que llevaba con su familia. Al ser descubierto, será perseguido durante su viaje marítimo por un mercenario de nombre Askeladd, cayendo finalmente en una emboscada junto a su expedición. Ganará la batalla contra sus atacantes, aunque a un alto precio: Thors dará su vida para que el resto de la tripulación, incluido su hijo Thorfinn, vivan.  Desde aquel instante Thorfinn jura vengarse. Sin embargo, será apresado por Askeladd y obligado a enrolarse en su barco. Pero aún le quedará una esperanza. Según el código vikingo, Thorfinn tendrá derecho de retar a Askeladd a duelo si cumple una serie de difíciles tareas, como sabotear o matar a generales enemigos, lo que lo les llevará a involucrarse incluso en la guerra por la corona de Inglaterra."
    },
    {
        id: 21,
        nombre: "Yu-Gi-Oh! 14",
        precio: 2800,
        editorial: "Panini",
        img: "../public/img/yugi14.png",
        stock: 1,
        detalle:"El Rompecabezas Milenario es un juego misterioso procedente de la Antigüedad que nadie ha logrado completar jamás. Pero Yugi, que siempre sufre las burlas de sus compañeros de clase, lo consigue y justo en ese momento, se presenta un joven que será su compañero de juegos. Pero cuidado, porque no jugarán a un juego cualquiera. ¡Empieza el Juego de las Tinieblas, que acabará con el mal!"
    }
]

export default MOCK_DATA