
# API JKT48 MEMBER

API ini digunakan untuk mempermudah temen temen yang ingin build app yang berhubungan dengan JKT48 & mempermudah temen temen FJKT48 untuk mencari sesuatu yang berhubungan Dengan member JKT48 untuk project yang ingin dibuat.

## TUTORIAL AKSES API 

#### default all member

```http
  GET https://jkt48member.vercel.app/member -> jika ingin mengakses all member.
  GET https://jkt48member.vercel.app/member?bulan%20lahir=Juli -> jika ingin mengakses member lahir pada bulan juli 
(jika ingin bulan lain silahkan ubah bulan menjadi bulan yang ingin diakses).
  GET https://jkt48member.vercel.app/member?parameter1=paramater2 -> jika ingin mengakses hal lain sesuai isi, silahkan isi sesuai format diatas.
```


#### RESPONSES

```http
   {
        "gen": "3",
        "nama lengkap ": "Shani Gracia",
        "tanggal lahir": "31",
        "bulan lahir": "Agustus",
        "tahun lahir": "1999",
        "horoskop": "Virgo",
        "tinggi Badan": "161 cm",
        "Jikoshokai": "Senyumku akan terekam jelas dalam ingatanmu seperti foto dengan sejuta warna. Namaku Gracia. Always smile",
        "picture": "./assets/img/Gracia.jpg",
        "status": "Member - Active"
    },
```


## PERTANYAAN

#### sumber data darimana?

sumber data ini berasal dari web official JKT48 yang saya ketik secara manual, mengambil data yang menyesuaikan dan website kuarsa untuk mengambil jikoshokai all member JKT48.

saya mengucapkan terimakasih kepada https://jkt48.com/ selaku offical web dari JKT48 dan https://kuarsa.com/ yang memberikan referensi data untuk membuat API ini untuk mempermudah pembuatan API.

#### pertanyaan lain?

silahkan ketik aja di issue.

