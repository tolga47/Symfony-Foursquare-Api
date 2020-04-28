# Symfony Foursquare Api
## Test Api Project

## Kurulum

Öncelikle klasörümüzü sunucunun /application dizinine yüklüyoruz. 

`docker-compose build` komutunu çalıştırıyoruz.

Daha sonra `docker-compose up -d` komutu ile projemizi developer modunda ayağa kaldırıyoruz.

`npm install` ile paketlerimizi yüklüyoruz.

`bower install` ile paketlerimizi yüklüyoruz.

`grunt` ile dosyalarımızı compile ediyoruz.

`docker-compose exec php-fpm bash`

Komutunu çalıştırıyor ve `composer install` ile kurulumu yapıyoruz.


## Cache temizleme
`docker-compose exec php-fpm bash`
`bash cacl.sh prod`
`bash cacl.sh dev`

## Bilgiler
Backend tarafında Symfony 4 kullanılmıştır.
Frontend tarafında bootstrap 4 ve jquery kullanılmıştır.
Css ve js dosyalarının yönetimi için grunt / bower/ browserify kullanılmıştır.

Daha sonra sevislere, http://sunucuip:8000/ şeklinde sunucu ip'nize göre bağlanabilirsiniz.
