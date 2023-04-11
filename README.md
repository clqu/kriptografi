### Görseller

Şifrele  |  Şifre Çöz |
:-------------------------:|:-------------------------:|
![img](https://github.com/clqu/kriptografi/blob/main/images/image1.jpg) | ![img](https://github.com/clqu/kriptografi/blob/main/images/image2.jpg)

<br /><br /><br />

---

<br />


# Kriptografi Nedir?
Kriptografi, bilgi güvenliği konularını ele alan bir bilim dalıdır. Gizlilik, bütünlük ve kimlik doğrulama gibi konuları ele alarak, mesajların şifrelenmesi (kodlama) ve çözülmesi (dekodlama) işlemleriyle ilgilenir. Bu sayede, iletilen mesajların sadece alıcı tarafından anlaşılmasını sağlar ve üçüncü tarafların mesajları okuyup değiştirmesini engeller.

Kriptografi, tarihi oldukça eski zamanlara dayanır. İlk olarak `M.Ö. 4000 yıllarında`, Mısır'da papirüs üzerine yazılan metinlerde kullanılan sembollerle başladığı düşünülmektedir. Günümüzde, kriptografi hala askeri, devlet, bankacılık, e-ticaret ve birçok diğer endüstriyel sektörlerde kullanılmaktadır.

<br /><br />

## Şifreleme Yöntemleri
Şifreleme, verileri okunamaz hale getirmek için kullanılan bir yöntemdir. Bu, verilerin güvenliği için önemlidir. Şifreleme, simetrik ve asimetrik olmak üzere iki temel şekilde gerçekleştirilebilir.

<br />

### Simetrik Şifreleme
Simetrik şifreleme, aynı anahtarın hem şifreleme hem de deşifreleme işlemlerinde kullanıldığı bir şifreleme yöntemidir. Bu yöntemde, şifrelenmiş verilerin güvenliği, anahtarın güvenliği ile doğrudan ilişkilidir. Eğer anahtar bir şekilde ele geçirilirse, tüm veriler açığa çıkabilir.
```js
const crypto = require('crypto');

const secretKey = 'mySecretKey';
const data = 'Merhaba, dünya!';

const cipher = crypto.createCipheriv('des-ede3', secretKey, null);
let encryptedData = cipher.update(data, 'utf8', 'hex');
encryptedData += cipher.final('hex');

console.log('Şifrelenmiş Veri:', encryptedData);

const decipher = crypto.createDecipheriv('des-ede3', secretKey, null);
let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
decryptedData += decipher.final('utf8');

console.log('Deşifrelenmiş Veri:', decryptedData);
```

<br />

### Asimetrik Şifreleme
Asimetrik şifreleme, diğer adıyla açık anahtarlı şifreleme, farklı bir şifreleme yaklaşımıdır. Bu yöntemde, iki farklı anahtar kullanılır: açık anahtar ve gizli anahtar.

Açık anahtar, herkes tarafından bilinebilir ve iletişimdeki herkes tarafından kullanılabilir. Bu anahtar, mesajların şifrelenmesinde kullanılır. Gizli anahtar ise, sadece mesajların alıcısı tarafından bilinir ve mesajın şifresinin çözülmesinde kullanılır.

Asimetrik şifreleme, mesajın şifrelenmesi ve çözülmesi işlemlerinde matematiksel işlemler kullanır. Bu işlemler, genellikle büyük sayılarla çalışır ve mesajın şifrelenmesi ve çözülmesi işlemleri oldukça yavaş olabilir. Ancak, bu yöntem, özellikle güvenlik açısından daha güçlü bir yöntemdir ve çift taraflı kimlik doğrulama gibi işlemleri gerçekleştirmek için de kullanılabilir.

Asimetrik şifreleme yönteminin en yaygın kullanılan uygulaması, `SSL (Secure Sockets Layer)` ve `TLS (Transport Layer Security)` protokolleridir. Bu protokoller, internet üzerinde güvenli bir şekilde bilgi alışverişi yapmak için kullanılır.
```js
const crypto = require('crypto');

crypto.generateKeyPair('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem'
    }
}, (err, publicKey, privateKey) => {
    if (err) throw err;
    let message = Buffer.from('Hello World');
    let encryptedMessage = crypto.publicEncrypt({
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
    }, message);

    let decryptedMessage = crypto.privateDecrypt({
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
    }, encryptedMessage);

    console.log(decryptedMessage.toString());
});
```

<br /><br />

## Karmaşık Şifreleme Yöntemleri
Karmaşık şifreleme yöntemleri, diğer şifreleme yöntemlerine kıyasla daha güçlüdür ve daha yüksek seviyede güvenlik sağlarlar. Bu yöntemler, genellikle karmaşık matematiksel işlemler ve algoritmalar kullanırlar.

Bazı karmaşık şifreleme yöntemleri arasında `AES (Advanced Encryption Standard)`, `Blowfish`, `Twofish`, `Serpent` ve `Camellia` gibi yöntemler yer alır.

<br />

### Blok Şifreleme
Blok şifreleme, mesajın bölümlere ayrılması ve her bir bölümün ayrı ayrı şifrelenmesiyle gerçekleştirilir. Bu yöntemde, mesajın bölümlerinin boyutu belirlenir ve şifreleme işlemi blok boyutları üzerinde gerçekleştirilir. Örneğin, AES şifreleme yöntemi, 128 bit blokları şifreler.

Blok şifreleme yönteminin güvenliği, kullanılan şifreleme algoritmasının güvenliği ve blok boyutu gibi faktörlere bağlıdır. Blok boyutu ne kadar büyükse, güvenlik seviyesi o kadar yüksek olur. Ancak, blok boyutu arttıkça işlem zamanı da artar.

<br />

### Akış Şifreleme
Akış şifreleme, mesajın bölünmesi yerine bitlerin ayrı ayrı şifrelenmesiyle gerçekleştirilir. Bu yöntemde, şifreleme anahtarı bit bit kullanılır ve şifreleme işlemi, her bir bitin şifrelenmesiyle gerçekleştirilir.

Akış şifreleme yönteminde, mesajın uzunluğu ne olursa olsun, şifreleme işlemi aynı hızda gerçekleşir. Ancak, anahtar yönetimi daha karmaşıktır ve güvenliği, kullanılan şifreleme algoritmasının güvenliği ve anahtar yönetimi gibi faktörlere bağlıdır.

<br />

### Karma Fonksiyonlar
Karma fonksiyonları, verilen mesajdan sabit boyutlu bir çıktı üretirler. Bu çıktı, bir parmak izi olarak kullanılabilir ve mesajın bütünlüğünün korunmasında önemli bir rol oynar.

Karma fonksiyonlarının en önemli özelliği, mesajın değiştirilmesi durumunda, çıktıda büyük bir farklılık oluşmasıdır. Bu nedenle, karma fonksiyonları, mesajın bütünlüğünün doğrulanması, mesajın kimliğinin doğrulanması ve şifreleme anahtarlarının oluşturulması gibi alanlarda yaygın olarak kullanılır.

Örnek olarak, `SHA-3` ve `SHA-256` gibi karma fonksiyonları, verilen mesajlardan sabit boyutlu çıktılar üretirler.
```js
const crypto require('crypto');

const message = 'Hello World!';

const hash = crypto.createHash('sha256');
hash.update(message);

const hash_hex = hash.digest('hex');

console.log(hash_hex);
```
Yukarıdaki örnekte, "Hello World!" mesajı SHA-256 algoritması kullanılarak karma fonksiyonuna verilir ve çıktısı hesaplanır. Çıktı, hex formatında `c3b...b7` olarak verilir.

<br /><br />

## Javascript ile Basit Kriptografi
Javascript, web tabanlı uygulamaların geliştirilmesi için kullanılan bir programlama dilidir. Javascript ile basit şifreleme işlemleri yapılabilir. Örneğin, bir metnin şifrelenmesi için, metin ve anahtar kelime girdisi alanı olan bir web formu oluşturulabilir. Formda yer alan "Metni Şifrele" ve "Metni Çöz" düğmeleri ile de kullanıcının verileri işlenebilir. Ancak, gerçek hayatta kullanılan güvenli kriptografi yöntemleri için, özel kütüphanelerin kullanılması önerilir.

Javascript ile basit bir şifreleme örneği yapmak için, aşağıdaki adımlar izlenebilir:

- Kullanıcının girdiği metin ve anahtar kelime, prompt() fonksiyonu ile alınır.
- Metin ve anahtar kelime, her harf için ASCII kodlarına dönüştürülür.
- Her harf için, metin ve anahtar kelime ASCII kodları toplanır ve sonuç yeni bir ASCII kod olarak elde edilir.
- Yeni ASCII kodu, String.fromCharCode() fonksiyonu ile karaktere dönüştürülür ve şifrelenmiş metin oluşur.
- Şifrelenmiş metin, alert() fonksiyonu ile kullanıcıya gösterilir.
- Şifrelenmiş metin çözülmek istendiğinde, aynı işlem tersine çevrilerek orijinal metin elde edilir.

Bu basit örnekte kullanılan yöntem, güvenli bir kriptografi yöntemi değildir. Sadece, kriptografi kavramını anlamak ve basit şifreleme işlemleri yapmak için kullanılabilir.

<br />

---

<br />

# Bu Projedeki Kriptografi
Bu projedeki yöntem, bir metin veya şifreli metin verildiğinde, metnin karakterlerini belirli sayısal değerlere dönüştürerek şifrelemeyi ve aynı işlemi tersine çevirerek metni şifreden çözmeyi sağlar.

<br />

## Şifreleme Yöntemi
Şifreleme işlemi, her karakterin alfabetik pozisyonunu belirli bir sayısal değerle eşleştirerek gerçekleştirilir. Bu eşleştirmeler bir dizi içinde saklanır. Dizi öğeleri, bir karakter ve onun eşleştiği sayısal değeri içerir.

Örneğin, 'A' karakteri, 0 sayısal değeriyle eşleştirilirken, 'B' karakteri 1 sayısal değeriyle eşleştirilir ve böylece devam eder.

Şifreleme işlemi sırasında, metnin karakterleri bu eşleştirmelere göre sayısal değerlere dönüştürülür ve sonuç olarak bir dizi sayısal değerler elde edilir. Bu sayılar daha sonra onaltılık formatında birleştirilir ve aralarına bir kısa çizgi (-) konulur.

Örneğin, "HELLO" metni şifrelendiğinde, sonuç "9-37-46-46-50" olacaktır.

<br />

## Şifre Çözme Yöntemi
Şifre çözme işlemi, şifrelenmiş metnin sayısal değerlerini alır ve bunları dizi eşleştirmelerindeki karakterlere dönüştürür. Sayılar, onaltılık formatında birleştirilmiş bir dize içinde saklanır ve dize "-" karakteriyle ayrılmıştır.

Her sayı, eşleştirmelerdeki bir karakterle eşleştirilir ve sonuç olarak metnin karakterleri elde edilir. Bu karakterler birleştirilir ve orijinal metin elde edilir.

Örneğin, "9-37-46-46-50" şifreli metni çözüldüğünde, sonuç "HELLO" olacaktır.

<br />

## Kullanım
Bu yöntem, basit bir şifreleme yöntemi olarak kullanılabilir. Ancak, özellikle hassas veriler için güvenli bir yöntem olarak yeterli değildir. Çünkü bu şifreleme yöntemi, her karakterin eşleştirildiği sabit bir sayısal değer kullanır ve şifrelenmiş metnin yapısı açıkça görülebilir. Bu nedenle, daha güvenli şifreleme yöntemleri kullanmak önemlidir.
