# Kriptografi Nedir?
Kriptografi, bilgi güvenliği konularını ele alan bir bilim dalıdır. Gizlilik, bütünlük ve kimlik doğrulama gibi konuları ele alarak, mesajların şifrelenmesi (kodlama) ve çözülmesi (dekodlama) işlemleriyle ilgilenir. Bu sayede, iletilen mesajların sadece alıcı tarafından anlaşılmasını sağlar ve üçüncü tarafların mesajları okuyup değiştirmesini engeller.

Kriptografi, tarihi oldukça eski zamanlara dayanır. İlk olarak M.Ö. 4000 yıllarında, Mısır'da papirüs üzerine yazılan metinlerde kullanılan sembollerle başladığı düşünülmektedir. Günümüzde, kriptografi hala askeri, devlet, bankacılık, e-ticaret ve birçok diğer endüstriyel sektörlerde kullanılmaktadır.

# Kriptografi Yöntemleri
Kriptografi, iki temel yöntemle mesajları şifreler ve çözer: simetrik anahtarlı kriptografi ve açık anahtarlı kriptografi.

### Simetrik Anahtarlı Kriptografi
Simetrik anahtarlı kriptografi, mesajın şifrelenmesinde ve çözülmesinde aynı anahtarın kullanılması prensibine dayanır. Bu yöntemde, anahtarın güvenliği çok önemlidir, çünkü anahtara sahip olan herkes mesajı çözebilir. Bu nedenle, anahtarın güvenli bir şekilde paylaşılması gereklidir.

### Açık Anahtarlı Kriptografi
Açık anahtarlı kriptografi, her kullanıcının şifreleme ve çözme işlemleri için farklı iki anahtar kullanması prensibine dayanır. Bu yöntemde, her kullanıcının bir açık anahtarı (herkes tarafından bilinen) ve bir özel anahtarı (sadece kullanıcının bildiği) vardır. Mesaj gönderildiğinde, gönderen kullanıcının alıcının açık anahtarını kullanarak mesajı şifreler ve gönderir. Mesajı alan kullanıcı, kendi özel anahtarını kullanarak mesajı çözer.

# Javascript ile Basit Kriptografi
Javascript, web tabanlı uygulamaların geliştirilmesi için kullanılan bir programlama dilidir. Javascript ile basit şifreleme işlemleri yapılabilir. Örneğin, bir metnin şifrelenmesi için, metin ve anahtar kelime girdisi alanı olan bir web formu oluşturulabilir. Formda yer alan "Metni Şifrele" ve "Metni Çöz" düğmeleri ile de kullanıcının verileri işlenebilir. Ancak, gerçek hayatta kullanılan güvenli kriptografi yöntemleri için, özel kütüphanelerin kullanılması önerilir.

Javascript ile basit bir şifreleme örneği yapmak için, aşağıdaki adımlar izlenebilir:

- Kullanıcının girdiği metin ve anahtar kelime, prompt() fonksiyonu ile alınır.
- Metin ve anahtar kelime, her harf için ASCII kodlarına dönüştürülür.
- Her harf için, metin ve anahtar kelime ASCII kodları toplanır ve sonuç yeni bir ASCII kod olarak elde edilir.
- Yeni ASCII kodu, String.fromCharCode() fonksiyonu ile karaktere dönüştürülür ve şifrelenmiş metin oluşur.
- Şifrelenmiş metin, alert() fonksiyonu ile kullanıcıya gösterilir.
- Şifrelenmiş metin çözülmek istendiğinde, aynı işlem tersine çevrilerek orijinal metin elde edilir.

Bu basit örnekte kullanılan yöntem, güvenli bir kriptografi yöntemi değildir. Sadece, kriptografi kavramını anlamak ve basit şifreleme işlemleri yapmak için kullanılabilir.

# Sonuç
Kriptografi, bilgi güvenliği konularını ele alan ve mesajların şifrelenmesi ve çözülmesi işlemleriyle ilgilenen bir bilim dalıdır. Simetrik anahtarlı kriptografi ve açık anahtarlı kriptografi olmak üzere iki temel yöntem kullanılır. Javascript gibi programlama dilleri ile basit şifreleme işlemleri yapılabilir. Ancak, güvenli kriptografi yöntemleri için, özel kütüphanelerin kullanılması önerilir.

# Basit Bir Kriptografi Yöntemi
Bu projedeki yöntem, bir metin veya şifreli metin verildiğinde, metnin karakterlerini belirli sayısal değerlere dönüştürerek şifrelemeyi ve aynı işlemi tersine çevirerek metni şifreden çözmeyi sağlar.

## Şifreleme Yöntemi
Şifreleme işlemi, her karakterin alfabetik pozisyonunu belirli bir sayısal değerle eşleştirerek gerçekleştirilir. Bu eşleştirmeler bir dizi içinde saklanır. Dizi öğeleri, bir karakter ve onun eşleştiği sayısal değeri içerir.

**Örneğin**, 'A' karakteri, 0 sayısal değeriyle eşleştirilirken, 'B' karakteri 1 sayısal değeriyle eşleştirilir ve böylece devam eder.

Şifreleme işlemi sırasında, metnin karakterleri bu eşleştirmelere göre sayısal değerlere dönüştürülür ve sonuç olarak bir dizi sayısal değerler elde edilir. Bu sayılar daha sonra onaltılık formatında birleştirilir ve aralarına bir kısa çizgi (-) konulur.

Örneğin, "HELLO" metni şifrelendiğinde, sonuç "9-37-46-46-50" olacaktır.

## Şifre Çözme Yöntemi
Şifre çözme işlemi, şifrelenmiş metnin sayısal değerlerini alır ve bunları dizi eşleştirmelerindeki karakterlere dönüştürür. Sayılar, onaltılık formatında birleştirilmiş bir dize içinde saklanır ve dize "-" karakteriyle ayrılmıştır.

Her sayı, eşleştirmelerdeki bir karakterle eşleştirilir ve sonuç olarak metnin karakterleri elde edilir. Bu karakterler birleştirilir ve orijinal metin elde edilir.

**Örneğin**, "9-37-46-46-50" şifreli metni çözüldüğünde, sonuç "HELLO" olacaktır.

## Kullanım
Bu yöntem, basit bir şifreleme yöntemi olarak kullanılabilir. Ancak, özellikle hassas veriler için güvenli bir yöntem olarak yeterli değildir. Çünkü bu şifreleme yöntemi, her karakterin eşleştirildiği sabit bir sayısal değer kullanır ve şifrelenmiş metnin yapısı açıkça görülebilir. Bu nedenle, daha güvenli şifreleme yöntemleri kullanmak önemlidir.
