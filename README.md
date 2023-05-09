Site teknoloji eğitimi veren bir kurum adına demo olarak tasarlanmıştır.
Navbar sitenin üstüne yerleştirilerek navigasyonun kolaylaştırılması sağlanmıştır.
App.js dosyası üzerinde navbar ve footer stabil tutularak sayfa geçişlerinin jsx tipindeki dosyalar ile geçişi sağlanmıştır. Sayfa geçişlerinin sağlanması için react-router-dom modülü kullanılmıştır. Kullanılan modül uygulamaların sayfa üzerinde değişmesine pathlerin seçilmesine olanak sağladığından navigasyonun kullanıcı için açıklayıcı olması sağlanmıştır.

Navbar sağ köşesine giriş yap ve kayıt ol butonları koyularak kullanıcının giriş ve kayıt işlemlerini yapabildiği form uygulamalarına routelanması sağlanmıştır. Node.js kullanılmadığı için backend tarafında yapılacak işlemler planda kalmıştır. Formlar üzerinden alınan kullanıcı bilgilerinin database üzerinde tutulması kurgulanmıştır.

Headerda (ki anasayfa sadece navbar,header ve footerdan oluşmaktadır) kullanıcının mail girişi yapması ile eğitim teklifi gönderebileceği bir form/modül kurgulanmıştır.

Fracles modülü  ile daha teknolojik bir görünüm verebilmek adına arkaplan animasyonları oluşturulmuş kullanıcı deneyimini düşürmemek adına animasyonlar azaltılmıştır. Gradient renkler (angrytools üzerinden hesaplandı) kullanılarak daha modern bir görünüm sağlanmıştır. Renkler mavi,navy ve turkuaz tonlarında seçilmiştir böylelikle kurum karakterinin güçlü, elegan, güvenilir ve dinlendirici/canlandırıcı durması amaçlanmıştır. Silver köşelendirmeler ile modernitenin arttırılması amaçlanmıştır

Footer kısmına ufak bir sitemap ile copyright ve müşteri isteğine uygun olarak saat tarih eklenmiştir. Clock.jsx dosyası hazırlanarak usestate,useeffect ile düzenli olarak güncellenmesi time settime intervalinin görsele aktarılması amaçlanmıştır.

eğitimler kısmına herhangi bir routing kullanılmamış href ile direkt olarak softito sitesine aktarılması sağlanmıştır.

Contact kısmı üç tablo halinde kurgulanmış ve adresin daha iyi görülebilmesi için google maps gömülmüştür.Maps gömülürken iframe özelliği kullanılmıştır.

biz kimiz kısmı için demo olduğu gibi bırakılmıştır.

İlk olarak SPA olarak tasarlanan sayfanın Components ve Containers olarak ayrılması planlanmış fakat routing sistemine geçilmesi nedeniyle sayfaların tamamının componentse taşınması planlanmış olsa da kompabilite nedeniyle yarım kalmıştır.
Ayrıca tasarımın sürekli olarak routingteki başarısızlıklar ve animasyonun entegrasyonu yüzünden değişmesi nedeniyse file structre düzeni tam oluşturulamamıştır. Vakit sıkıntısından ötürü tasarımdaki ufak eksiklikler gözardı edilmiştir.


demo sayfayı çalıştırmak için terminal üzerinden npm start yazılması localde görüntülenmesi için yeterli olacaktır.
Saygılarımla. -Jr. Dev. Melih Kaan Aslan