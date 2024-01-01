// Importa las imágenes de los personajes
import EloyImage from './assets/img/eloy.png'; // Asegúrate de que esta imagen exista en tu proyecto
import PintagImage from './assets/img/pintag.png';
import QuilagoImage from './assets/img/quilago.png';
import AtahualpaImage from './assets/img/atahualpa.png';
import RuminahuiImage from './assets/img/ruminahui.png';

import AntonImage from './assets/img/anton.png';

const characterData = {
  pintag: {
    name: 'Pintag',
    image: PintagImage,
    description: 'Píntag: Una ciudad rural en la provincia de Pichincha, Ecuador, que ofrece una variedad de experiencias turísticas orientadas al contacto con la naturaleza y la cultura 1. Historia y Cultura: Píntag lleva el nombre de un líder de Quito que resistió la invasión inca y tiene una rica tradición musical y artística. También celebra a su santa patrona, la Virgen del Rosario, todos los años. Atracciones Naturales: Píntag está rodeado por el volcán Antisana y su reserva ecológica, que alberga una fauna y hábitats diversos. También tiene lagunas, arroyos, pastizales y bosques que son ideales para actividades al aire libre.'
    },
  quilago: {
    name: 'Quilago',
    image: QuilagoImage,
    description: 'Quilago, también llamada Quillango o Quílago (Caranqui, circa 1490 - Cochasquí, circa 1515), es el nombre popular con el que se conoce en Ecuador a la princesa caranqui Túpac Palla (otros la nombran Palla Coca),1​ que ostentó el título de Señora de Cochasquí, así como el matriarcado del complejo ceremonial y de vivienda homónimo, ubicado en las cercanías de la actual ciudad de Tabacundo.2​ Fue, además, una líder militar para su pueblo durante las batallas de resistencia contra la expansión del Imperio incaico.',
  },
  atahualpa: {
    name: 'Atahualpa',
    image: AtahualpaImage,
    description: 'Uno de los acontecimientos más importantes de la historia del mundo la protagonizó Atahualpa, quién se convirtió en emperador después de derrotar a su medio hermano Huáscar en una guerra civil que siguió a la muerte de su padre, el Inca Huayna Capac. Su victoria, sin embargo, coincide con la llegada a Perú de los conquistadores españoles dirigidos por Francisco Pizarro, donde fue capturado en 1532 durante la batalla de Cajamarca y posteriormente ejecutado en 1533.',
  },
  ruminahui: {
    name: 'Rumiñahui',
    image: RuminahuiImage,
    description: 'Tenía 45 años. Rumiñahui fue un caudillo y general inca. Desplegó una valiente actividad militar durante la guerra civil que enfrentó al Inca Atahualpa con su hermano. Participó también en la resistencia contra el ejército español, durante la conquista de la ciudad de Quito. Comandante de la guardia personal del Inca Huayna Cápac y luego de su hijo Atahualpa. Lo acompañó como un fiel soldado en la guerra que éste lideró contra Huáscar. Cuando Atahualpa fue tomado prisionero de los españoles instauró una dictadura en Quito que gozó del rechazo de muchos pobladores vecinos. Se lo caracterizó como un hombre fuerte y de carácter implacable. Resistió con valentía y estoicismo a la sistemática vejación de los españoles que lo capturaron. Pretendieron que confiese donde había escondido los tesoros y riquezas de su civilización. Fue ejecutado sin develarles el secreto.',
  },

  anton: {
    name: 'Anton',
    image: AntonImage,
    description: 'El sacerdote de la orden de la merced Miguel Cabello Balboa (1535 -1608) en "Verdadera descripción y relación larga de la Provincia y Tierra de las Esmeraldas" - ver capítulo respectivo -, cuenta la llegada de los negros a la Provincia de Esmeraldas, cuyo caudillo era un "valiente negro ll.',
  },
  eloy: {
    name: 'Eloy Alfaro',
    image: EloyImage,
    description: 'Eloy Alfaro fue una figura política clave en la historia de Ecuador y es conocido especialmente por su papel como líder de la Revolución Liberal Ecuatoriana a finales del siglo XIX y principios del siglo XX. Nació el 25 de junio de 1842 en Montecristi, Ecuador. Alfaro emergió como un líder influyente que promovió la separación de la iglesia y el estado, la libertad de culto, la educación laica y gratuita, y varias otras reformas liberales. Estas reformas transformaron la estructura social y política de Ecuador, modernizando el país y reduciendo el poder tradicional de la Iglesia Católica.',
  },
  // ...agrega otros personajes según sea necesario
};

export default characterData;
 