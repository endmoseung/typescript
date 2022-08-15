{
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  const nav: Record<Page, PageInfo> = {
    // Record는 map처럼<a,b> a값을 key로 쓰고 b값을 value로 사용하도록
    home: { title: "Home" },
    about: { title: "about" },
    contact: { title: "contact" },
  };

  type Product = "cat" | "dog";
  type NewProduct = Capitalize<Product>; // "Cat"|"Dog"이런식으로 사용가능하다 Capitalize를통해서
}
//utility타입이란 기존 타입을 바꿔서 커마할수있는것
