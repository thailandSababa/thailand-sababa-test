import CardTextHover from "@/components/cards/CardTextHover";
import TopCard from "@/components/cards/TopCard";
import ContactForm from "./forms/contactForm/ContactForm";
import QuestionsAndAnswers from "@/components/QuestionsAndAnswers";


export default function Home() {
  return (
    <div>
      <section className="flex flex-col gap-4 mt-[3.5rem]">
        <h2 className="text-center w-[80%] mx-auto">החופשה שלכם בתאילנד מעולם לא היית קלה יותר</h2>
        <p className="text-center md:text-lg w-[70%] mx-auto">
          טיסות בינלאומיות, טיסות פנים, מעברים, מלונות, מלאאא בלאגן. תנו לנו
          לשבור את הראש.
        </p>
      </section>

      <div className="flex md:flex-row flex-col justify-center items-center gap-2 md:gap-6 mt-8 md:px-0 px-4">
        <TopCard
          image={"/topCard/topCard3.jpg"}
          text="בתי מלון/ריזורטים בכל היעדים, בהתאם לרצון הלקוח במחירים ללא תחרות!"
          textPosition="top"
        />
        <TopCard
          image={"/topCard/topCard2.jpg"}
          text="בניית מסלול וחלוקת ימים מקצועית בהתאם לאופי החופשה"
          textPosition="middle"
        />
        <TopCard
          image={"/topCard/topCard1.png"}
          text="טיסות בינלאומיות, טיסות פנים,מעברים בתוך תאילנד(מוניות, מעבורות)"
          textPosition="top"
        />
      </div>

      <section className="flex flex-col gap-4 md:gap-4 mt-16">
        <h2 className="text-center w-[80%] mx-auto ">למה כדי לסגור איתנו?</h2>
        <p className="text-center md:text-lg w-[70%] mx-auto">
          תאילנד הוא יעד חלומי אך גם מורכב. אנחנו חיים ונושמים את תאילנד, עוסקים
          במקצוע הזה יום ולילה ויודעים להתאים את המסלול הנכון לכל בן אדם באשר
          הוא. אנחנו סוגרים לכם את כל הפינות- טיסות, מלונות, מעברים, אנחנו פה.
          והדבר היפה הוא שזה לא עולה לכם אקסטרה. להיפך, המחירים שלנו זולים יותר
          מכל מחיר שתמצאו אונליין. אז גם חסכתם וגם אתם בראש שקט, אז למה לא?
        </p>
      </section>

      <div className="flex md:flex-row flex-col justify-center gap-2 md:gap-6 mt-8 md:px-0 px-4">
        <TopCard
          image={"/secondCard/secondCard1.jpg"}
          text="מומחים בתאילנג"
          textPosition="top"
        />
        <TopCard
          image={"/secondCard/secondCard2.jpg"}
          text="ליווי סוכן צמוד"
          textPosition="top"
        />
        <TopCard
          image={"/secondCard/secondCard3.jpg"}
          text="מחירים יחודיים"
          textPosition="top"
        />
        <TopCard
          image={"/secondCard/secondCard4.jpg"}
          text="קשר אישי עם מלונות"
          textPosition="top"
        />
      </div>

      <h2 className="text-center w-[80%] mx-auto mt-16" id="hui">
        קצת על החלומות והיעדים
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-8 md:px-0 px-4">
        <CardTextHover
          image={"/destinations/kosamoi.jpg"}
          title="קוסמוי"
          hoverText="העיר השניה בגודלה בתאילנד, מחוצה לה טבע מרהיב ביופיו, ג׳ונגלים, מפלים, שבטי הרים ועוד."
        />
        <CardTextHover
          image={"/destinations/kopangan.jpg"}
          title="קופנגן"
          hoverText="העיר השניה בגודלה בתאילנד, מחוצה לה טבע מרהיב ביופיו, ג׳ונגלים, מפלים, שבטי הרים ועוד."
        />
        <CardTextHover
          image={"/destinations/pocket.jpg"}
          title="פוקט"
          hoverText="העיר השניה בגודלה בתאילנד, מחוצה לה טבע מרהיב ביופיו, ג׳ונגלים, מפלים, שבטי הרים ועוד."
        />
        <CardTextHover
          image={"/destinations/changmai.jpg"}
          title="צ׳אנג מאי"
          hoverText="העיר השניה בגודלה בתאילנד, מחוצה לה טבע מרהיב ביופיו, ג׳ונגלים, מפלים, שבטי הרים ועוד."
        />
        <CardTextHover
          image={"/destinations/kofifi.jpg"}
          title="קופיפי"
          hoverText="העיר השניה בגודלה בתאילנד, מחוצה לה טבע מרהיב ביופיו, ג׳ונגלים, מפלים, שבטי הרים ועוד."
        />
        <CardTextHover
          image={"/destinations/krabi.jpg"}
          title="קראבי"
          hoverText="העיר השניה בגודלה בתאילנד, מחוצה לה טבע מרהיב ביופיו, ג׳ונגלים, מפלים, שבטי הרים ועוד."
        />
        <CardTextHover
          image={"/destinations/bangkok.webp"}
          title="בנגקוק"
          hoverText="בנגקוק, בירת תאילנד, היא עיר תוססת המשלבת מקדשים עתיקים, שווקים הומים וחיי לילה סוערים לצד גורדי שחקים מודרניים."
        />
        <CardTextHover
          image={"/destinations/pattaya.jpg"}
          title="פטאיה"
          hoverText="פטאיה היא עיר נופש לחוף המזרחי של תאילנד, ידועה בחופים יפים, חיי לילה סוערים, ספורט ימי ומגוון אטרקציות לתיירים כמו פארקי מים וגנים טרופיים."
        />
        <CardTextHover
          image={"/destinations/huahin.webp"}
          title="הואה הין"
          hoverText="הואה הין היא עיירת חוף שלווה בתאילנד, המציעה חופים נקיים, אווירה רגועה, שווקים מקומיים, ואתרי נופש יוקרתיים, והיא יעד פופולרי למנוחה בקרב מקומיים ותיירים כאחד."
        />
      </div>

      <ContactForm />

      <QuestionsAndAnswers />
    </div>
  );
}
