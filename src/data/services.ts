export type Service = { name: string; category: string; description: string; price: number; duration: string; image: string };
export const services: Service[] = [
 {name:'Signature Haircut & Blowout',category:'Hair',description:'A considered cut and polished finish tailored to your texture and style.',price:799,duration:'45–60 min',image:'/images/haircut-styling.jpg'},
 {name:'Nourishing Hair Spa',category:'Hair',description:'A restorative scalp ritual with a deeply conditioning hair treatment.',price:1299,duration:'60 min',image:'/images/hair-spa-wash.jpg'},
 {name:'Radiance Facial',category:'Skin',description:'A refreshing, skin-conscious facial selected for your individual needs.',price:1499,duration:'60 min',image:'/images/photo-1570172619644-dfd03ed5d881.jpg'},
 {name:'Gentle Waxing',category:'Skin',description:'Thoughtful, hygienic care for a smooth, comfortable finish.',price:399,duration:'30 min+',image:'/images/photo-1512290923902-8a9f81dc236c.jpg'},
 {name:'Manicure & Pedicure',category:'Nails',description:'A restorative nail and hand-care ritual finished with your chosen shade.',price:999,duration:'60 min',image:'/images/photo-1604654894610-df63bc536371.jpg'},
 {name:'Soft Glam Makeup',category:'Makeup',description:'Fresh, camera-ready makeup for celebrations, evenings and special plans.',price:2499,duration:'60–75 min',image:'/images/photo-1487412947147-5cebf100ffc2.jpg'},
 {name:'Bridal Makeup',category:'Bridal',description:'A personalised bridal look, planned around your outfit and your vision.',price:9999,duration:'By consultation',image:'/images/bridal-lehenga-details.jpg'},
 {name:'Pre-Bridal Glow Package',category:'Bridal',description:'A tailored series of beauty rituals in the lead-up to your big day.',price:7999,duration:'Custom plan',image:'/images/bridal-lehenga-red.jpg'},
];
export const money = (n:number) => `₹${n.toLocaleString('en-IN')}`;
