import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#about-us", label: "Nosotros" },
  { href: "#products", label: "Productos" },
  { href: "#contact-us", label: "Contacto" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Marcas" },
  { value: "500+", label: "Tiendas" },
  { value: "250k+", label: "Clientes" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Envío gratis",
    subtext:
      "Disfrute de compras sin problemas con nuestro servicio de envío gratuito.",
  },
  {
    imgURL: shieldTick,
    label: "Pago seguro",
    subtext:
      "Experimente transacciones sin preocupaciones con nuestras opciones de pago seguro.",
  },
  {
    imgURL: support,
    label: "Nos encanta ayudarte",
    subtext:
      "Nuestro equipo dedicado está aquí para ayudarlo en cada paso del camino.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Daniel Suarez",
    rating: 4.5,
    feedback:
      "La atención al detalle y la calidad del producto superaron mis expectativas. ¡Muy recomendable!",
  },
  {
    imgURL: customer2,
    customerName: "Lucia Parker",
    rating: 4.5,
    feedback:
      "El producto no sólo cumplió sino que superó mis expectativas. ¡Definitivamente seré un cliente recurrente!",
  },
  {
    imgURL: customer1,
    customerName: "Luis Diaz",
    rating: 4.5,
    feedback:
      "La atención al detalle y la calidad del producto superaron mis expectativas. ¡Muy recomendable!",
  },
];

export const footerLinks = [
  {
    title: "Productos",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { name: "Nosotros", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "Cómo funciona", link: "/" },
      { name: "Política de privacidad", link: "/" },
      { name: "Política de pago", link: "/" },
    ],
  },
  {
    title: "Contactanos",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
