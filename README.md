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
