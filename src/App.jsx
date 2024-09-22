import MikuSlider from './assets/components/MikuSlider'
import './App.css'

function App() {

  const testData = [
    {
      header:"Hatsune Miku",
      description:"Hatsune Miku is a music software developed by Crypton Future Media, INC., which enables anyone to make their computer sing by entering lyrics and melodies. As a massive number of users created music using the software and posted their works on the Internet, Hatsune Miku quickly evolved into a cultural phenomenon. Since then, Hatsune Miku has gained much attention as a character, involved in many fields such as merchandising and live performance as a virtual singer. Now her popularity has spread across the globe.",
      image:"https://piapro.net/intl/images/ch_img_miku.png",
      color:"#39C5BB",
    },
    {
      header:"Rin",
      description:"Rin is a charming and youthful female character, whose trademarks are her blond hair with a huge white ribbon, blue eyes and a school uniform-like outfit. Rin was released in one package with Len, her male counterpart, in the software “VOCALOID2 Kagamine Rin & Len” on December 27th, 2007.",
      image:"https://piapro.net/intl/images/ch_img_rin.png",
      color:"#FFF300",
    },
    {
      header:"Len",
      description:"Len is a male character and his looks feature short blond hair, blue eyes and a school uniform. Len was created together with Rin for the voice synthesizer product “VOCALOID2 Kagamine Rin & Len”, first released on December 27th, 2007. Len’s youthful voice was made from that of Asami Shimoda.",
      image:"https://piapro.net/intl/images/ch_img_len.png",
      color:"#FFB300",
    },
    {
      header:"Megurine Luka",
      description:"MEGURINE LUKA is a character well liked for her mysterious looks and cool expression. Her trademarks are pink long hair and an attractively designed slit china dress. The character illustration was featured on the voice synthesizer software “VOCALOID2 Megurine Luka” that was first released on January, 30th 2009.",
      image:"https://piapro.net/intl/images/ch_img_luka.png",
      color:"#FFA5BB",
    },
    {
      header:"Meiko",
      description:"MEIKO is the first vocal synthesizer developed by Crypton Future Media, and was released on November, 5th 2004. Her character illustration was the first of its kind to be used for a music software product, which led Crypton to start a character series with various voices. MEIKO’s trademarks are her short brown hair bob, red mini-skirt, and boots.",
      image:"https://piapro.net/intl/images/ch_img_meikov3.png",
      color:"#E31C4A",
    },
    {
      header: "Kaito",
      description:"KAITO is a male character whose trademarks are his blue hair and a long blue stole. KAITO is popular for his smooth and grown-up voice, and his various singing styles can be combined to produce rich musical pieces.",
      image:"https://piapro.net/intl/images/ch_img_kaitov3.png",
      color:"#3366CC"
    },
  ]

  

  return (
    <section id="app--main">
      <MikuSlider  data={testData}/>
    </section>
  )
}

export default App