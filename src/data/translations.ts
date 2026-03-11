export type Lang = "th" | "en" | "zh";
export type Translations = typeof translations.th;

export const translations = {
  th: {
    nav: {
      whyUs: "ทำไมต้องเรา",
      services: "บริการ",
      areas: "พื้นที่ให้บริการ",
      reviews: "รีวิว",
      gallery: "แกลเลอรี",
      articles: "บทความ",
      contact: "ติดต่อเรา",
      callNow: "โทรจอง",
    },
    hero: {
      badge: "ลูกค้าไว้วางใจกว่า 500+ ทริป",
      title1: "เช่ารถตู้ VIP",
      title2: "พร้อมคนขับมืออาชีพ",
      desc: "บริการเช่ารถตู้พร้อมคนขับมืออาชีพ เดินทางสะดวกสบาย ปลอดภัย ชำนาญเส้นทาง ให้ทุกทริปเป็นความทรงจำและความประทับใจที่ดีที่สุด",
      ctaLine: "จองผ่าน Line",
      ctaCall: "โทรสอบถาม",
    },
    whyUs: {
      subtitle: "Why Choose Us",
      title: "ทำไมต้องเลือก",
      brand: "รถตู้อารมณ์ดี",
      desc: "เราตั้งใจให้ทุกการเดินทางของลูกค้าเป็นประสบการณ์ที่ดีที่สุด",
      features: [
        {
          title: "รถตู้ VIP 10 ที่นั่ง",
          desc: "เบาะกว้าง นั่งสบาย แอร์เย็นฉ่ำ พร้อม Wi-Fi และเครื่องเสียง ทำให้ทุกการเดินทางเป็นเรื่องสนุก",
        },
        {
          title: "คนขับมืออาชีพ",
          desc: "สุภาพ ชำนาญเส้นทาง แต่งกายเรียบร้อย พร้อมให้คำแนะนำสถานที่ท่องเที่ยวและร้านอาหาร",
        },
        {
          title: "ตรงต่อเวลา",
          desc: "รับรองตรงเวลา รถถึงก่อนนัดหมาย ไม่พลาดเที่ยวบินหรือกำหนดการสำคัญแน่นอน",
        },
        {
          title: "ปลอดภัยสูงสุด",
          desc: "ตรวจสภาพรถทุกรอบ ประกันภัยชั้น 1 คุ้มครองทุกที่นั่ง มั่นใจได้ตลอดเส้นทาง",
        },
      ],
    },
    services: {
      subtitle: "Our Services",
      title: "บริการของเรา",
      desc: "ตอบโจทย์ทุกการเดินทาง ทั้งทริปส่วนตัวและองค์กร",
      items: [
        {
          title: "ทริปท่องเที่ยว",
          sub: "Tour & Travel",
          desc: "พาท่องเที่ยวทั่วไทย ภูเขา ทะเล น้ำตก วัด — วางแผนเส้นทางให้ฟรี!",
        },
        {
          title: "สัมมนา & ดูงาน",
          sub: "Business & Corporate",
          desc: "รถตู้คณะทำงาน สัมมนา ดูงาน Team Building มืออาชีพ ตรงเวลา",
        },
        {
          title: "รับ-ส่ง สนามบิน",
          sub: "Airport Transfer",
          desc: "รับ-ส่งสนามบินสุวรรณภูมิ / ดอนเมือง ตรงเวลา สะดวก ปลอดภัย",
        },
      ],
    },
    areas: {
      subtitle: "Service Areas",
      title: "พื้นที่ให้บริการครอบคลุม",
      titleHighlight: "ทั่วไทย",
      desc: "ไม่ว่าจะเหนือ ใต้ ออก ตก เราพร้อมพาคุณไป",
      items: [
        {
          area: "กรุงเทพฯ และปริมณฑล",
          areaEn: "Bangkok & Vicinity",
          detail: "เช่าเหมาวัน เดินทางในเมือง ช้อปปิ้ง ติดต่อธุรกิจ",
        },
        {
          area: "ทั่วประเทศไทย",
          areaEn: "Nationwide Travel",
          detail: "เชียงใหม่ เชียงราย ภูเก็ต กระบี่ พัทยา เขาใหญ่ และอีกมากมาย",
        },
        {
          area: "รับ-ส่ง สนามบิน",
          areaEn: "Airport Transfer",
          detail: "สุวรรณภูมิ (BKK) • ดอนเมือง (DMK) — ตรงเวลา ปลอดภัย",
        },
      ],
    },
    chooseCar: {
      title: "เลือกรถที่ใช่สำหรับคุณ",
      cars: [
        {
          name: "Toyota Camry",
          pax: "1-2 คน",
          luggage: "1-2 ใบ",
        },
        {
          name: "Toyota Innova",
          pax: "1-4 คน",
          luggage: "1-4 ใบ",
        },
        {
          name: "Toyota Fortuner",
          pax: "1-4 คน",
          luggage: "1-4 ใบ",
        },
        {
          name: "Hyundai H1",
          pax: "1-5 คน",
          luggage: "1-5 ใบ",
        },
        {
          name: "Toyota Alphard",
          pax: "1-5 คน",
          luggage: "1-5 ใบ",
        },
        {
          name: "Toyota Commuter",
          pax: "1-10 คน",
          luggage: "1-10 ใบ",
        },
      ],
    },
    reviews: {
      subtitle: "Customer Reviews",
      title: "เสียงตอบรับจากลูกค้า",
      desc: "ทุกรีวิวคือกำลังใจ ที่ทำให้เราบริการดียิ่งขึ้น",
      items: [
        {
          name: "คุณเปิ้ล",
          avatar: "ป",
          type: "ทริปครอบครัว • เชียงใหม่",
          text: "คนขับสุภาพมากค่ะ ขับรถนิ่ม แอร์เย็นเจี๊ยบ พาผู้ใหญ่ไปเที่ยวเหนือสบายมาก ไม่เมารถเลย ประทับใจสุดๆ จะใช้บริการอีกแน่นอนค่ะ",
        },
        {
          name: "คุณเอก",
          avatar: "อ",
          type: "สัมมนาบริษัท • พัทยา",
          text: "รถสะอาดมาก นั่งสบาย เครื่องเสียงเทพ คนขับรู้เส้นทางดีมาก ไปถึงก่อนเวลา ทีมงานชอบมาก ใช้บริการประจำทุกไตรมาสครับ",
        },
        {
          name: "SME Group",
          avatar: "S",
          type: "รับ-ส่งแขก VIP ต่างชาติ",
          text: "ใช้บริการรับส่งแขกต่างชาติเป็นประจำ มั่นใจเรื่องเวลามาก พนักงานสุภาพ รถสะอาด แขกทุกคนชมว่าบริการดีเยี่ยม",
        },
        {
          name: "คุณน้ำทิพย์",
          avatar: "น",
          type: "ทริปไหว้พระ 9 วัด • อยุธยา",
          text: "ประทับใจสุดๆ ค่ะ ทริปยาวแต่อยู่ในรถตู้แล้วไม่อึดอัดเลย เบาะกว้าง หลับสบาย แอร์เย็นมาก พี่คนขับใจดีสุดๆ",
        },
        {
          name: "คุณจอห์น",
          avatar: "จ",
          type: "รับ-ส่งสนามบิน • สุวรรณภูมิ",
          text: "ตรงเวลาเป๊ะครับ มารอก่อนเวลาอีกต่างหาก สะดวกมากๆ ไม่ต้องกังวลเรื่องตกเครื่องเลย แนะนำเลยครับ",
        },
      ],
    },
    gallery: {
      subtitle: "Gallery",
      title: "ภาพบรรยากาศ",
      desc: "ตัวอย่างบรรยากาศการเดินทางกับรถตู้อารมณ์ดี",
      caption: "เดินทางสบาย ทุกเส้นทาง",
      timelineTitle: "บันทึกการเดินทางของเรา",
      timelineDesc: "เลื่อนดูทริปต่างๆ ที่เราให้บริการลูกค้าจากทั่วทุกมุมโลก",
    },
    articles: {
      subtitle: "Articles & Tips",
      title: "บทความน่ารู้",
      desc: "ทริคการเดินทางและสถานที่ท่องเที่ยวแนะนำ",
      readMore: "อ่านเพิ่มเติม",
      items: [
        {
          id: "1",
          date: "15 มี.ค. 2026",
          title: "5 สถานที่เที่ยวใกล้กรุงเทพฯ แบบไปเช้าเย็นกลับ นั่งรถตู้สบายๆ",
          desc: "รวมจุดเช็คอินน่าเที่ยว ตอบโจทย์ทั้งครอบครัวและกลุ่มเพื่อน ให้คุณได้พักผ่อนเต็มที่โดยไม่ต้องขับรถเอง",
          image: "/assets/images/article/article_01.webp",
          content: "<p>การเดินทางไปต่างจังหวัดใกล้กรุงเทพฯ ถือเป็นตัวเลือกยอดฮิตสำหรับครอบครัว แต่ปัญหาใหญ่มักจะเป็นเรื่องคนขับที่เหนื่อยล้า รถตู้ VIP พร้อมคนขับมืออาชีพจึงตอบโจทย์ที่สุด</p><p>ด้วยเบาะที่กว้างขวาง นั่งสบาย ระบบแอร์เย็นฉ่ำ และสิ่งอำนวยความสะดวกครบครัน ทำให้ทุกคนในทริปได้สนุกสนานและพักผ่อนร่วมกันอย่างแท้จริง ไม่ต้องกังวลเรื่องการหาที่จอดรถหรือหลงทาง เพราะคนขับของเราเชี่ยวชาญทุกเส้นทาง</p>",
        },
        {
          id: "2",
          date: "28 ก.พ. 2026",
          title: "เทคนิคจัดสัมมนาต่างจังหวัด ให้ทีมแฮปปี้ งานราบรื่น",
          desc: "แชร์เคล็ดลับการเลือกรถตู้และวางแผนการเดินทางสำหรับองค์กร ให้ถึงที่หมายอย่างปลอดภัยและตรงเวลา",
          image: "/assets/images/article/article_02.webp",
          content: "<p>การจัดทริปสัมมนาหรือ Team Building ให้แผนกหรือบริษัท ไม่ใช่เรื่องง่าย เพราะต้องกังวลทั้งเรื่องเวลาและความปลอดภัยของพนักงานทุกคน</p><p>การเลือกใช้บริการรถตู้ส่วนตัวจะช่วยให้การเดินทางเป็นกลุ่มกลายเป็นเรื่องสนุก พนักงานยังสามารถคุยงานหรือเล่นกิจกรรมระหว่างทางได้ เป็นการสร้างความสัมพันธ์ในทีมได้อย่างดีเยี่ยม รถของเรามาพร้อมประกันชั้น 1 เพื่อความอุ่นใจตลอดเส้นทาง</p>",
        },
        {
          id: "3",
          date: "10 ม.ค. 2026",
          title: "ทำไมถึงควรเช่ารถตู้ VIP พร้อมคนขับมืออาชีพ?",
          desc: "เปรียบเทียบข้อดีที่คุณจะได้รับ ทั้งความสะดวก ความปลอดภัย และการบริการที่ประทับใจตลอดเส้นทาง",
          image: "/assets/images/article/article_03.webp",
          content: "<p>ความประทับใจแรกมักจะสำคัญเสมอ ไม่ว่าจะเป็นการรับแขก VIP ลูกค้าธุรกิจ หรือแม้กระทั่งการให้รางวัลตัวเอง</p><p>รถตู้ VIP ของเราออกแบบมาเพื่อการเดินทางเหนือระดับ ด้วยเบาะกัปตันซีทที่สามารถปรับเอนได้อิสระ แสงสว่าง Ambient Light สไตล์เลานจ์หรู ช่วยลดความเหนื่อยล้าจากการนั่งรถนานๆ พร้อมพนักงานขับรถแต่งกายสุภาพและมีมารยาทดีเยี่ยม</p>",
        },
        {
          id: "4",
          date: "5 ธ.ค. 2025",
          title:
            "แนะนำ 3 ทริปไหว้พระอยุธยา เสริมสิริมงคล เดินทางง่ายในวันเดียว",
          desc: "พาผู้ใหญ่ไปทำบุญแบบไม่เหนื่อย ด้วยรถตู้ VIP แอร์เย็นฉ่ำ นั่งสบายตลอดเส้นทาง",
          image: "/assets/images/article/article_04.webp",
          content: "<p>อยุธยาเมืองมรดกโลกที่เต็มไปด้วยวัดเก่าแก่คู่บ้านคู่เมือง การพาญาติผู้ใหญ่ไปไหว้พระ 9 วัด อาจทำให้เหนื่อยและเพลียจากอากาศร้อน</p><p>บริการทริปไหว้พระด้วยรถตู้ VIP จะช่วยให้คุณประหยัดเวลาและพลังงาน โดยรถจะเข้าจอดรอรับส่งบริเวณใกล้จุดที่สุด ผู้สูงอายุไม่ต้องเดินไกล และเมื่อขึ้นรถก็จะได้พักผ่อนในบรรยากาศเย็นสบายตลอดวัน เป็นทริปอิ่มบุญที่สะดวกสบายที่สุด</p>",
        },
        {
          id: "5",
          date: "20 พ.ย. 2025",
          title: "เคล็ดลับการเดินทางไปสนามบินแบบ VIP หมดกังวลเรื่องเวลา",
          desc: "ทำไมผู้บริหารและนักธุรกิจถึงเลือกใช้บริการรถตู้ส่วนตัวไปสนามบิน",
          image: "/assets/images/article/article_05.webp",
          content: "<p>ใครที่เคยต้องแบกกระเป๋าหลายใบเดินหาแท็กซี่ หรือกังวลว่าจะพลาดเที่ยวบินเพราะรถติด น่าจะเข้าใจดีว่าการเดินทางไปสนามบินนั้นเครียดแค่ไหน</p><p>บริการรับ-ส่งสนามบินแบบส่วนตัว ตัดปัญหาความกังวลทั้งหมด เพราะพนักงานขับรถจะมารอรับคุณก่อนเวลาเสมอ ช่วยจัดการสัมภาระ และใช้เส้นทางที่ดีที่สุดเพื่อให้คุณถึงสนามบินอย่างตรงเวลาและผ่อนคลาย พร้อมสำหรับการเดินทางไกล</p>",
        },
        {
          id: "6",
          date: "2 ต.ค. 2025",
          title: "จัดทริปพัทยาสุดคุ้ม เที่ยวทะเลใกล้กรุงพร้อมครอบครัว",
          desc: "แพลนวันหยุดสุดสัปดาห์ พาเด็กๆ และครอบครัวไปพักผ่อนริมทะเลแบบชิลๆ",
          image: "/assets/images/article/article_06.webp",
          content: "<p>วันหยุดยาวทั้งที ทะเลใกล้กรุงอย่างพัทยามักเป็นจุดหมายแรกของใครหลายคน แต่การขับรถเองในช่วงรถติดมักทำให้หมดสนุกตั้งแต่เริ่มทริป</p><p>จองรถตู้พร้อมคนขับไปพัทยา ให้คุณได้พักผ่อนตั้งแต่ก้าวขึ้นรถ เด็กๆ สามารถดูหนังฟังเพลงผ่านหน้าจอทีวีในรถได้อย่างเพลิดเพลิน พร้อมคนขับที่ช่วยแวะจุดพักรถและร้านอาหารดังๆ ให้แบบครบวงจร ทริปนี้มีแต่ความสุขเท่านั้น</p>",
        },
      ],
    },
    cta: {
      title: "พร้อมออกเดินทาง",
      titleHighlight: "กับเราหรือยัง?",
      desc: "ปรึกษาแพลนเดินทางได้ฟรี ไม่มีค่าใช้จ่าย",
      ctaLine: "แชทผ่าน Line",
    },
    footer: {
      brandDesc:
        "บริการเช่ารถตู้ VIP พร้อมคนขับมืออาชีพ ให้บริการทั่วประเทศไทย ด้วยมาตรฐานระดับพรีเมียม",
      insurance: "ประกันภัยชั้น 1",
      allDay: "บริการ 24 ชม.",
      trips: "500+ ทริป",
      contactTitle: "ติดต่อเรา",
      phone: "โทรศัพท์",
      location: "ที่ตั้ง",
      locationValue: "กรุงเทพมหานคร, ประเทศไทย",
      menuTitle: "เมนู",
      privacyPolicy: "นโยบายความเป็นส่วนตัว",
    },
    floating: {
      contactTitle: "ติดต่อเรา / Contact Us",
    },
    stats: {
      trips: "ทริปที่ให้บริการ",
      satisfaction: "ลูกค้าพอใจ",
      experience: "ปีประสบการณ์",
      available: "พร้อมให้บริการ",
    },
    howItWorks: {
      subtitle: "How It Works",
      title: "ขั้นตอนการจอง",
      titleHighlight: "ง่ายมาก",
      desc: "เพียง 3 ขั้นตอนง่ายๆ คุณก็พร้อมออกเดินทาง",
      steps: [
        {
          step: "01",
          title: "ติดต่อสอบถาม",
          desc: "แจ้งวันเดินทาง จุดหมาย จำนวนผู้โดยสาร ผ่าน Line หรือโทรศัพท์",
        },
        {
          step: "02",
          title: "วางแผนเส้นทาง",
          desc: "เราช่วยวางแผนเส้นทาง เสนอราคา พร้อมคำแนะนำสถานที่ฟรี",
        },
        {
          step: "03",
          title: "ออกเดินทาง",
          desc: "รถตู้ VIP พร้อมคนขับมืออาชีพไปรับคุณถึงที่ ตรงเวลา",
        },
      ],
    },
    faq: {
      subtitle: "FAQ",
      title: "คำถามที่พบบ่อย",
      desc: "รวมคำตอบสำหรับคำถามยอดนิยม",
      items: [
        {
          q: "รถตู้รองรับผู้โดยสารได้กี่คน?",
          a: "รถตู้ VIP ของเรารองรับผู้โดยสาร 10 ที่นั่ง สะดวกสบาย เบาะกว้าง มีพื้นที่วางสัมภาระเพียงพอ",
        },
        {
          q: "จองล่วงหน้ากี่วัน?",
          a: "แนะนำจองล่วงหน้าอย่างน้อย 3-7 วัน สำหรับช่วงเทศกาลควรจองล่วงหน้า 2 สัปดาห์ขึ้นไป",
        },
        {
          q: "รับ-ส่ง สนามบินได้ไหม?",
          a: "ได้ครับ เรามีบริการรับ-ส่งสนามบินสุวรรณภูมิและดอนเมือง ตรงเวลา ปลอดภัย",
        },
        {
          q: "ราคาเริ่มต้นเท่าไหร่?",
          a: "ราคาขึ้นอยู่กับเส้นทางและระยะเวลา สามารถสอบถามราคาได้ฟรีผ่าน Line หรือโทรหาเราได้เลยครับ",
        },
      ],
    },
    cookie: {
      message:
        "เว็บไซต์นี้ใช้คุกกี้เพื่อเพิ่มประสิทธิภาพและประสบการณ์ที่ดีในการใช้งานเว็บไซต์",
      accept: "ยอมรับ",
      decline: "ปฏิเสธ",
    },
    privacy: {
      title: "นโยบายความเป็นส่วนตัว",
      content: [
        "เรารวบรวมข้อมูลส่วนบุคคลของคุณ เช่น คุกกี้ เพื่อปรับปรุงประสบการณ์การใช้งานเว็บไซต์",
        "ข้อมูลนี้จะถูกใช้เพื่อการวิเคราะห์และปรับปรุงประสิทธิภาพของเว็บไซต์เท่านั้นตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA)",
        "คุณสามารถเลือกที่จะปฏิเสธการใช้คุกกี้ได้โดยการปิดแบนเนอร์หรือตั้งค่าเบราว์เซอร์ของคุณ หากคุณมีข้อสงสัยใด ๆ โปรดติดต่อเรา",
      ],
    },
  },
  en: {
    nav: {
      whyUs: "Why Us",
      services: "Services",
      areas: "Service Areas",
      reviews: "Reviews",
      gallery: "Gallery",
      articles: "Articles",
      contact: "Contact",
      callNow: "Call Now",
    },
    hero: {
      badge: "Trusted by 500+ Happy Trips",
      title1: "VIP Van Rental",
      title2: "with Professional Driver",
      desc: "Premium travel service in Thailand — Comfortable, safe, and reliable with experienced drivers for your best trip ever.",
      ctaLine: "Book via Line",
      ctaCall: "Call Us",
    },
    whyUs: {
      subtitle: "Why Choose Us",
      title: "Why Choose",
      brand: "Rodtuaromdee",
      desc: "We are committed to making every journey the best experience for our customers.",
      features: [
        {
          title: "VIP Van 10 Seats",
          desc: "Spacious leather seats, powerful A/C, Wi-Fi, and entertainment system for a comfortable journey.",
        },
        {
          title: "Professional Driver",
          desc: "Polite, well-dressed, and experienced drivers who know every route and can recommend places to visit.",
        },
        {
          title: "Always On Time",
          desc: "We guarantee punctuality — your van arrives before the scheduled time. Never miss a flight or appointment.",
        },
        {
          title: "Maximum Safety",
          desc: "Regular vehicle inspections, first-class insurance covering all passengers for your peace of mind.",
        },
      ],
    },
    services: {
      subtitle: "Our Services",
      title: "Our Services",
      desc: "Covering every travel need — personal trips and corporate events.",
      items: [
        {
          title: "Tour & Travel",
          sub: "Tour & Travel",
          desc: "Travel across Thailand — mountains, beaches, temples. Free route planning!",
        },
        {
          title: "Business & Seminar",
          sub: "Business & Corporate",
          desc: "Professional van service for corporate teams, seminars, site visits, and team building.",
        },
        {
          title: "Airport Transfer",
          sub: "Airport Transfer",
          desc: "Pickup & drop-off at Suvarnabhumi (BKK) / Don Mueang (DMK). On time, every time.",
        },
      ],
    },
    areas: {
      subtitle: "Service Areas",
      title: "Nationwide Coverage Across",
      titleHighlight: "Thailand",
      desc: "From north to south, east to west — we take you anywhere in Thailand.",
      items: [
        {
          area: "Bangkok & Vicinity",
          areaEn: "Bangkok & Vicinity",
          detail:
            "Full-day rental for business, shopping, sightseeing in the city.",
        },
        {
          area: "Nationwide Thailand",
          areaEn: "Nationwide Travel",
          detail:
            "Chiang Mai, Chiang Rai, Phuket, Krabi, Pattaya, Khao Yai, and more.",
        },
        {
          area: "Airport Transfer",
          areaEn: "Airport Transfer",
          detail: "Suvarnabhumi (BKK) • Don Mueang (DMK) — Punctual & safe.",
        },
      ],
    },
    chooseCar: {
      title: "Choose Your Vehicle",
      cars: [
        {
          name: "Toyota Camry",
          pax: "1-2 Pax",
          luggage: "1-2 Bags",
        },
        {
          name: "Toyota Innova",
          pax: "1-4 Pax",
          luggage: "1-4 Bags",
        },
        {
          name: "Toyota Fortuner",
          pax: "1-4 Pax",
          luggage: "1-4 Bags",
        },
        {
          name: "Hyundai H1",
          pax: "1-5 Pax",
          luggage: "1-5 Bags",
        },
        {
          name: "Toyota Alphard",
          pax: "1-5 Pax",
          luggage: "1-5 Bags",
        },
        {
          name: "Toyota Commuter",
          pax: "1-10 Pax",
          luggage: "1-10 Bags",
        },
      ],
    },
    reviews: {
      subtitle: "Customer Reviews",
      title: "What Our Customers Say",
      desc: "Every review motivates us to provide even better service.",
      items: [
        {
          name: "Pern's Family",
          avatar: "P",
          type: "Family Trip • Chiang Mai",
          text: "The driver was very polite and drove so smoothly. My elderly parents enjoyed the trip without any motion sickness. The A/C was perfect. We will definitely use this service again!",
        },
        {
          name: "Ake & Friends",
          avatar: "A",
          type: "Company Seminar • Pattaya",
          text: "The van was super clean and comfortable. Great sound system! The driver knew all the shortcuts and got us there early. Our team loved it. We use this service every quarter.",
        },
        {
          name: "SME Group",
          avatar: "S",
          type: "VIP Guest Transfer",
          text: "We regularly use their service for international guests. Always on time, professional appearance, spotless vans. All our guests are impressed. Highly recommended!",
        },
        {
          name: "Namthip",
          avatar: "N",
          type: "9 Temples Tour • Ayutthaya",
          text: "Absolutely impressed! It was a long trip but the van was so spacious and comfortable. Great A/C and the driver was very kind.",
        },
        {
          name: "John D.",
          avatar: "J",
          type: "Airport Transfer • BKK",
          text: "Punctual and reliable. The driver arrived early so we had no worries about missing our flight. Highly recommended!",
        },
      ],
    },
    gallery: {
      subtitle: "Gallery",
      title: "Travel Moments",
      desc: "A glimpse of the journey experience with Rodtuaromdee.",
      caption: "Comfortable travel, every route.",
      timelineTitle: "Our Travel Diaries",
      timelineDesc:
        "Swipe left and right to explore the various trips we've hosted for clients worldwide.",
    },
    articles: {
      subtitle: "Articles & Tips",
      title: "Latest Posts",
      desc: "Travel tips, guides, and recommended destinations.",
      readMore: "Read More",
      items: [
        {
          id: "1",
          date: "Mar 15, 2026",
          title: "5 Day Trips Near Bangkok for Family & Friends",
          desc: "A guide to the best spots close to the city. Let our professional drivers take you there comfortably.",
          image: "/assets/images/article/article_01.webp",
          content: "<p>Traveling out of Bangkok is a highly popular choice for families, but the biggest issue is usually driver fatigue. A VIP passenger van with a professional driver is the perfect answer.</p><p>With wide, comfortable seats, cool air-conditioning, and full amenities, everyone in your group can genuinely enjoy the trip and relax. There is no need to worry about finding parking or getting lost, as our drivers are experts on all routes.</p>",
        },
        {
          id: "2",
          date: "Feb 28, 2026",
          title: "How to Plan a Successful Corporate Outing",
          desc: "Tips on arranging transportation for seminars and team-building events to ensure everyone stays happy and productive.",
          image: "/assets/images/article/article_02.webp",
          content: "<p>Organizing a seminar or team-building trip is no easy task because you have to worry about both punctuality and the safety of all employees.</p><p>Choosing a private van service makes group travel fun. Employees can discuss work or play games along the way, building excellent team relationships. Our vehicles come with first-class insurance for peace of mind throughout the journey.</p>",
        },
        {
          id: "3",
          date: "Jan 10, 2026",
          title: "Why Hire a VIP Van with a Professional Driver?",
          desc: "Discover the hidden benefits of premium travel, from unmatched safety records to purely relaxing journeys.",
          image: "/assets/images/article/article_03.webp",
          content: "<p>First impressions always matter, whether you are welcoming VIP guests, business clients, or even rewarding yourself.</p><p>Our VIP vans are designed for superior travel. Featuring independently reclining captain seats, elegant lounge-style ambient lighting, they reduce travel fatigue. Paired with politely dressed and highly courteous drivers, the experience is unmatched.</p>",
        },
        {
          id: "4",
          date: "Dec 5, 2025",
          title: "Top 3 Temple Tours in Ayutthaya for a Blessed Day Trip",
          desc: "Take your elders on a merit-making trip without the fatigue, enjoying our comfortable VIP vans.",
          image: "/assets/images/article/article_04.webp",
          content: "<p>Ayutthaya is a world heritage city full of ancient temples. Taking elderly relatives to worship at 9 temples can be exhausting in the hot weather.</p><p>A temple tour in a VIP van saves time and energy. The vehicle parks as close to the points of interest as possible, so the elderly do not have to walk far. Once back on board, they can relax in a cool, comfortable atmosphere all day. It is the most comfortable merit-making trip you can have.</p>",
        },
        {
          id: "5",
          date: "Nov 20, 2025",
          title: "VIP Airport Transfers: Stress-Free Travel Tips",
          desc: "Why executives and business travelers prefer private van services for their airport transfers.",
          image: "/assets/images/article/article_05.webp",
          content: "<p>Anyone who has had to lug multiple bags around looking for a taxi, or worried about missing a flight due to traffic, understands how stressful airport travel can be.</p><p>A private airport transfer service eliminates all worries. The driver will always arrive early, assist with luggage, and use the best route to get you to the airport on time and relaxed, ready for your long journey.</p>",
        },
        {
          id: "6",
          date: "Oct 2, 2025",
          title: "Planning the Perfect Family Beach Trip to Pattaya",
          desc: "Plan a relaxing weekend getaway with your family and kids by the beach.",
          image: "/assets/images/article/article_06.webp",
          content: "<p>For a long weekend, a beach close to the city like Pattaya is often the first choice. But driving yourself in traffic usually ruins the fun from the start.</p><p>Booking a van with a driver to Pattaya lets you relax the moment you step in. Kids can enjoy watching movies or listening to music on the in-car TV. With a driver who will gladly stop at rest areas and famous restaurants, this trip will be nothing but happiness.</p>",
        },
      ],
    },
    cta: {
      title: "Ready to Travel",
      titleHighlight: "with Us?",
      desc: "Free trip consultation — Contact us anytime, no obligation!",
      ctaLine: "Chat on Line",
    },
    footer: {
      brandDesc:
        "Premium VIP van rental with professional driver — Serving all across Thailand with the highest standards.",
      insurance: "1st Class Insurance",
      allDay: "24/7 Service",
      trips: "500+ Trips",
      contactTitle: "Contact Us",
      phone: "Phone",
      location: "Location",
      locationValue: "Bangkok, Thailand",
      menuTitle: "Menu",
      privacyPolicy: "Privacy Policy",
    },
    floating: {
      contactTitle: "Contact Us",
    },
    stats: {
      trips: "Trips Completed",
      satisfaction: "Customer Satisfaction",
      experience: "Years Experience",
      available: "Service Availability",
    },
    howItWorks: {
      subtitle: "How It Works",
      title: "Booking is",
      titleHighlight: "Simple",
      desc: "Just 3 easy steps and you're ready to go.",
      steps: [
        {
          step: "01",
          title: "Contact Us",
          desc: "Tell us your travel date, destination, and number of passengers via Line or phone.",
        },
        {
          step: "02",
          title: "Plan Your Route",
          desc: "We help plan your itinerary, provide a quote, and suggest attractions — all free.",
        },
        {
          step: "03",
          title: "Enjoy the Ride",
          desc: "Our VIP van with professional driver picks you up at your door — right on time.",
        },
      ],
    },
    faq: {
      subtitle: "FAQ",
      title: "Frequently Asked Questions",
      desc: "Answers to our most common questions.",
      items: [
        {
          q: "How many passengers can the van hold?",
          a: "Our VIP van comfortably seats 10 passengers with spacious leather seats and ample luggage space.",
        },
        {
          q: "How far in advance should I book?",
          a: "We recommend booking 3-7 days ahead. For holidays and peak seasons, book at least 2 weeks in advance.",
        },
        {
          q: "Do you offer airport transfers?",
          a: "Yes! We provide pickup and drop-off at both Suvarnabhumi (BKK) and Don Mueang (DMK) airports.",
        },
        {
          q: "What are the rates?",
          a: "Rates depend on route and duration. Contact us via Line or phone for a free, no-obligation quote!",
        },
      ],
    },
    cookie: {
      message: "We use cookies to improve your experience on our website.",
      accept: "Accept",
      decline: "Decline",
    },
    privacy: {
      title: "Privacy Policy",
      content: [
        "We collect personal data such as cookies to improve your user experience on our website.",
        "This data is solely used for analytical and website performance optimization purposes in compliance with PDPA guidelines.",
        "You may choose to decline the use of cookies by dismissing the banner or configuring your browser settings. If you have any inquiries, please contact us.",
      ],
    },
  },

  zh: {
    nav: {
      whyUs: "为什么选我们",
      services: "服务",
      areas: "服务区域",
      reviews: "评价",
      gallery: "相册",
      articles: "文章",
      contact: "联系我们",
      callNow: "立即致电",
    },
    hero: {
      badge: "超过 500 次行程的信赖之选",
      title1: "VIP 包车服务",
      title2: "专业驾驶员随行",
      desc: "泰国顶级包车服务——舒适、安全、可靠，由经验丰富的驾驶员全程陪同，为您带来最棒的旅行体验。",
      ctaLine: "通过 Line 预订",
      ctaCall: "立即致电",
    },
    whyUs: {
      subtitle: "Why Choose Us",
      title: "为什么选择",
      brand: "Rodtuaromdee",
      desc: "我们致力于让每一段旅程都成为您最美好的体验。",
      features: [
        {
          title: "VIP 10 座豪华车",
          desc: "宽敞皮质座椅、强劲空调、Wi-Fi 及娱乐系统，旅途舒适无忧。",
        },
        {
          title: "专业驾驶员",
          desc: "礼貌、着装得体、经验丰富，熟悉每一条路线，并可推荐景点。",
        },
        {
          title: "准时守约",
          desc: "我们保证准时——车辆提前到达，绝不误机或误点。",
        },
        {
          title: "安全第一",
          desc: "定期车辆检查，全险覆盖所有乘客，让您安心出行。",
        },
      ],
    },
    services: {
      subtitle: "Our Services",
      title: "我们的服务",
      desc: "满足各类出行需求——私人旅游与企业活动均可。",
      items: [
        {
          title: "观光旅游",
          sub: "Tour & Travel",
          desc: "畅游泰国各地——山川、海滩、寺庙，免费路线规划！",
        },
        {
          title: "商务与研讨会",
          sub: "Business & Corporate",
          desc: "为企业团队、研讨会、考察及团建活动提供专业车辆服务。",
        },
        {
          title: "机场接送",
          sub: "Airport Transfer",
          desc: "素万那普 (BKK) / 廊曼 (DMK) 机场接送，准时可靠。",
        },
      ],
    },
    areas: {
      subtitle: "Service Areas",
      title: "全国覆盖",
      titleHighlight: "泰国各地",
      desc: "无论南北东西，我们都能带您前往泰国任何地方。",
      items: [
        {
          area: "曼谷及周边",
          areaEn: "Bangkok & Vicinity",
          detail: "全天包车，商务、购物、市内观光均可。",
        },
        {
          area: "泰国全境",
          areaEn: "Nationwide Travel",
          detail: "清迈、清莱、普吉、甲米、芭提雅、考艾等地。",
        },
        {
          area: "机场接送",
          areaEn: "Airport Transfer",
          detail: "素万那普 (BKK) • 廊曼 (DMK) — 准时安全。",
        },
      ],
    },
    chooseCar: {
      title: "选择您的车型",
      cars: [
        {
          name: "Toyota Camry",
          pax: "1-2 人",
          luggage: "1-2 件",
        },
        {
          name: "Toyota Innova",
          pax: "1-4 人",
          luggage: "1-4 件",
        },
        {
          name: "Toyota Fortuner",
          pax: "1-4 人",
          luggage: "1-4 件",
        },
        {
          name: "Hyundai H1",
          pax: "1-5 人",
          luggage: "1-5 件",
        },
        {
          name: "Toyota Alphard",
          pax: "1-5 人",
          luggage: "1-5 件",
        },
        {
          name: "Toyota Commuter",
          pax: "1-10 人",
          luggage: "1-10 件",
        },
      ],
    },
    reviews: {
      subtitle: "Customer Reviews",
      title: "客户评价",
      desc: "每一条评论都是我们不断进步的动力。",
      items: [
        {
          name: "Pern 一家",
          avatar: "P",
          type: "家庭旅游 • 清迈",
          text: "司机非常礼貌，驾驶平稳。我的老人们全程没有晕车，空调效果很好。我们一定会再次使用这项服务！",
        },
        {
          name: "Ake 和朋友们",
          avatar: "A",
          type: "公司研讨会 • 芭提雅",
          text: "车辆非常干净舒适，音响效果极佳！司机熟知路线，提前抵达。我们的团队非常喜欢，每季度都会使用。",
        },
        {
          name: "SME 团队",
          avatar: "S",
          type: "VIP 贵宾接送",
          text: "我们定期使用该服务接待国际客人，始终准时、形象专业、车辆整洁。所有客人都印象深刻，强烈推荐！",
        },
        {
          name: "南提普",
          avatar: "N",
          type: "九庙祈福游 • 大城府",
          text: "太令人惊喜了！虽然是长途旅行，但车内宽敞舒适，空调很好，司机非常友善。",
        },
        {
          name: "约翰",
          avatar: "J",
          type: "机场接送 • 素万那普",
          text: "准时可靠，司机提前到达，让我们完全不用担心误机。强烈推荐！",
        },
      ],
    },
    gallery: {
      subtitle: "Gallery",
      title: "旅途精彩瞬间",
      desc: "探索与 Rodtuaromdee 同行的旅途风光。",
      caption: "舒适出行，每一段旅程。",
      timelineTitle: "我们的旅行日记",
      timelineDesc: "左右滑动，探索我们为全球客户提供的各类行程。",
    },
    articles: {
      subtitle: "Articles & Tips",
      title: "最新文章",
      desc: "旅行技巧、导览及推荐目的地。",
      readMore: "阅读更多",
      items: [
        {
          id: "1",
          date: "2026年3月15日",
          title: "曼谷周边 5 个亲子一日游好去处",
          desc: "城市周边最佳景点指南，让我们的专业驾驶员带您舒适前往。",
          image: "/assets/images/article/article_01.webp",
          content: "<p>前往曼谷周边旅行是家庭出游的热门选择，但最大的问题往往是疲劳驾驶。带专业司机的 VIP 包车为您提供完美的解决方案。</p><p>宽敞舒适的座椅、凉爽的空调以及齐全的设备，让团队中的每个人都能真正享受旅程并得到放松。因为我们的司机熟悉所有路线，您无需担心找不到停车位或迷路。</p>",
        },
        {
          id: "2",
          date: "2026年2月28日",
          title: "如何策划一次成功的企业外出活动",
          desc: "研讨会和团建活动交通安排技巧，确保所有人轻松愉快。",
          image: "/assets/images/article/article_02.webp",
          content: "<p>组织研讨会或团建绝对不是一件容易的事，因为您需要顾及所有员工的安全和时间安排。</p><p>选择私人包车服务让集体出行变得充满乐趣。员工可以在途中交流工作或进行游戏，极大地促进团队关系。我们的车辆配备一流的保险，让您的旅程全程无忧。</p>",
        },
        {
          id: "3",
          date: "2026年1月10日",
          title: "为什么要租用配有专业驾驶员的 VIP 包车？",
          desc: "探索高端出行的隐藏优势，从卓越的安全记录到纯粹放松的旅途。",
          image: "/assets/images/article/article_03.webp",
          content: "<p>第一印象永远至关重要，无论是接待 VIP 贵宾、商业客户，还是奖励自己。</p><p>我们的 VIP 包车专为卓越的旅行体验而设计。配备可独立倾斜的航空座椅和优雅的休息室风格氛围灯，有效减少旅途疲劳。再加上着装整洁、彬彬有礼的专业司机，体验无可匹敌。</p>",
        },
        {
          id: "4",
          date: "2025年12月5日",
          title: "大城府三大寺庙祈福之旅，轻松一日游推荐",
          desc: "乘坐我们舒适的 VIP 包车，带长辈轻松进行祈福之旅。",
          image: "/assets/images/article/article_04.webp",
          content: "<p>大城府是一座充满古老寺庙的世界遗产城市。带着长辈在炎热的天气里前往 9 座寺庙祈福可能会让人筋疲力尽。</p><p>在 VIP 包车中进行寺庙之旅省时又省力。车辆会尽可能停靠近景点，因此长辈不必走远路。返回车上后，他们可以整日在凉爽舒适的环境中休息。这是一次最舒适的祈福之旅。</p>",
        },
        {
          id: "5",
          date: "2025年11月20日",
          title: "VIP 机场接送服务指南，无忧出行技巧",
          desc: "为什么高管和商务旅客更喜欢使用私人包车服务前往机场。",
          image: "/assets/images/article/article_05.webp",
          content: "<p>每一个曾经拖着多个行李箱寻找出租车，或是因为堵车担心错过航班的人，都深知前往机场带来的压力。</p><p>私人机场接送服务可以消除所有担忧。司机会始终提前到达，协助搬运行李，并使用最佳路线准时安全地将您送达机场，让您为长途旅行做好准备。</p>",
        },
        {
          id: "6",
          date: "2025年10月2日",
          title: "完美芭提雅家庭海滩之旅规划指南",
          desc: "规划一个与家人和孩子在海滩放松的周末度假。",
          image: "/assets/images/article/article_06.webp",
          content: "<p>长周末去像芭提雅这样靠近城市的海滩绝对是首选。但是如果在拥堵的交通中自驾游，通常一出发就会败尽游兴。</p><p>预订带司机的包车前往芭提雅，让您在上车的那一刻就开始放松。孩子们可以在车内电视上看电影或听音乐。拥有一位乐意在休息区和著名餐厅经停的司机，您的旅途将充满欢乐。</p>",
        },
      ],
    },
    cta: {
      title: "准备好一起",
      titleHighlight: "出发了吗？",
      desc: "免费行程咨询——随时联系我们，无任何义务！",
      ctaLine: "在 Line 上聊天",
    },
    footer: {
      brandDesc: "配有专业驾驶员的高端 VIP 包车服务——以最高标准服务泰国全境。",
      insurance: "一级保险",
      allDay: "24/7 全天候",
      trips: "500+ 次行程",
      contactTitle: "联系我们",
      phone: "电话",
      location: "地址",
      locationValue: "泰国曼谷",
      menuTitle: "菜单",
      privacyPolicy: "隐私政策",
    },
    floating: { contactTitle: "联系我们" },
    stats: {
      trips: "已完成行程",
      satisfaction: "客户满意度",
      experience: "年经验",
      available: "服务可用性",
    },
    howItWorks: {
      subtitle: "How It Works",
      title: "预订",
      titleHighlight: "简单快捷",
      desc: "只需 3 个简单步骤，即可出发。",
      steps: [
        {
          step: "01",
          title: "联系我们",
          desc: "通过 Line 或电话告知出行日期、目的地及乘客人数。",
        },
        {
          step: "02",
          title: "规划路线",
          desc: "我们协助制定行程、提供报价并推荐景点——全程免费。",
        },
        {
          step: "03",
          title: "享受旅程",
          desc: "专业驾驶员驾驶 VIP 包车准时到门接您。",
        },
      ],
    },
    faq: {
      subtitle: "FAQ",
      title: "常见问题",
      desc: "我们最常见问题的解答。",
      items: [
        {
          q: "车辆可以容纳多少名乘客？",
          a: "我们的 VIP 包车可舒适容纳 10 名乘客，设有宽敞皮质座椅及充足行李空间。",
        },
        {
          q: "需要提前多久预订？",
          a: "建议提前 3-7 天预订。节假日及旺季请至少提前 2 周预订。",
        },
        {
          q: "提供机场接送服务吗？",
          a: "是的！我们提供素万那普 (BKK) 和廊曼 (DMK) 两个机场的接送服务。",
        },
        {
          q: "收费标准是多少？",
          a: "价格因路线和时长而异。请通过 Line 或电话联系我们获取免费报价！",
        },
      ],
    },
    cookie: {
      message: "本网站使用 cookie 以改善您的用户体验。",
      accept: "同意",
      decline: "拒绝",
    },
    privacy: {
      title: "隐私政策",
      content: [
        "我们会收集 cookies 等个人数据，以改善您在我们网站上的用户体验。",
        "这些数据仅用于分析和网站性能优化目的，符合相关的隐私保护准则。",
        "您可以通过关闭横幅或配置您的浏览器设置来选择拒绝使用 cookies。如有任何问题，请与我们联系。",
      ],
    },
  },
};
