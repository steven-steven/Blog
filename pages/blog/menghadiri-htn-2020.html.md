---
title: Menghadiri Hack The North 2020++
publish_at: January 23, 2021
layout: post
tags: bahasa_indonesia, tech
---

![Dashboard home](menghadiri-htn-2020/dashboardHome.png "=400x400")

Minggu lalu, saya berpartisipasi di Hack The North 2020++ yang merupakan hackathon terbesar di Kanada. Event ini diselenggarakan setiap tahun dimana ribuan murid dari berbagai sudut dunia, figur-figur teknologi, dan sponsor dari berbagai perusahaan diundang untuk datang ke University of Waterloo. Saya sendiri telah hadir sekali sebagai seorang hacker tahun 2018 dan lagi di tahun 2019 sebagai seorang mentor (tugasku membantu hacker jika ada pertanyaan mengenai Web, backend, formulasi ide, ataupun sedikit hardware). Karena pandemi sekarang, event 2020 telah diundurkan ke Januari minggu lalu. Dan pada akhirnya event tersebut diselenggarakan secara online melalui 'Hopin', dan kapasitas yang biasa sekitar 1000 orang ditingkatkan hingga 3000+ orang. Awalnya saya agak penasaran bagaimana sebuah hackathon bisa dieksekusikan secara online, terutama karena proses sosialisasi/networking akan sangat berbeda dibanding bertemu berhadapan secara langsung.

Namun ternyata event ini terorganisir dengan sangat baik, menyadarkanku bahwa kendala ini tidak menghentikan manusia untuk terus belajar, berinovasi, bermotivasi, ataupun berkerja dengan seksama.

## Tentang hackathon (apa itu?)

![Schedule](menghadiri-htn-2020/schedule.png "=400x400")

Dalam sebuah hackathon, para hacker berkelompok (1-4 orang) dan berkerja untuk membuat apapun dalam jangka waktu 36 jam. APAPUN. Setelah 36 jam, kelompok dapat menunjukan hasil karyanya didepan juri (pitch), dan pemenangnya mendapatkan berbagai hadiah (dalam bentuk benda ataupun kesempatan karir).

Belum lagi hadiah sponsor. Biasa perusahaan, seperti contohnya Firebase, Vonage, cockroachDB, Microsoft Azure, dll, menghadirkan API mereka secara gratis, sehingga para hacker bisa menggunakan produk mereka. Perusahaan ini akan menilai dan menghadiahkan karya kepada tim yang menggunakan produk mereka dengan cemerlang.

Banyak juga orang yang tidak kompetitif, dan hadir hanya karena mereka ingin menghabiskan akhir pekannya untuk belajar hal baru, bertemu dengan orang baru, dan membuat sesuatu. Semua orang bisa berkesempatan untuk datang - termasuk kalangan yang belum punya pengalaman hingga kalangan yang sudah sangat mahir. Bahkan ada banyak murid SMA yang hadir, dan mereka selalu mengejutkanku dengan karya mereka. Ini membuktikan bahwa teknologi tidak melihat usia sekalipun. Everyone belongs in tech. Justru terasa lebih seru bila dapat bertemu dengan orang-orang yang mendatangkan perspektif-perspektif baru.

Kemudian ada berbagai acara panel, workshop, meetup yang dipersembahkan oleh siapapun yang ingin berbagi ilmu/pengalaman. Contohnya workshop tentang Graphql, Tensorflowjs, Computer Vision, Blockchain, Product management, tentang membuat startup oleh Ycombinator, dll.

Hackathon biasa juga dilengkapi dengan makanan gratias (hehehe). Namun karena situasi yang membatasi ini, well apa boleh buat. Namun sang penyelenggara akan tetap mengirimkan semua orang SWAG (barang gratisan seperti kaos, stiker, item-item langka dari sponsor, dll), meskipun barang tersebut belum saja datang sampai sekarang. Namun saya sangat berterima kasih kepada penyelenggara/organisir tahun ini, karena telah membuat HTN yang tak kalah seru dari tahun-tahun sebelumnya.

## Sarana medium hackathon online

Semua livestream (panel, workshop, dll) hadir melalui Hopin. Ini pertama kali saya menggunakan Hopin, dan sungguh kagum dengan interface yang sangat ramah. Ditambah lagi dengan live chat disamping yang tidak kalah dengan platform lainnya seperti Twitch dan Youtube livestream.

Kemudian semua interaksi asynchronous diadakan di Discord. Ada channel untuk bertanya dengan mentor, ataupun pertanyaan general, kepada sponsor, networking, dll.

## Produk dari tim Pikapika - Steganographia

Encoding:
![EncodingDemo](menghadiri-htn-2020/encodingDemo.gif "=400x400")

Decoding:
![DecodingDemo](menghadiri-htn-2020/verificationDemo.gif "=400x400")

Saya berkelompok dengan teman-teman sekelas (grup berempat). Sebelum event ini, kami sempat brainstorming dahulu ingin buat apa. Berbagai ide seperti pomodoro timer yang mendeteksi wajah, permainan multiplayer tetris yang menggunakan pergerakan tubuh atau pose untuk menggerakan, dll. Pada akhirnya kami sepakat membuat service untuk watermark gambar digital menggunakan sebuah ML model dari research di Berekely [bernama StegaStamp](https://github.com/tancik/StegaStamp). Kami membuat web service supaya pemilik foto bisa generate sebuah invisible watermark sebelum mereka bagikan di sosial media.

Salah satu contoh penggunaan service ini bisa saja buat para pembuat meme di Reddit. Terkadang ketika seseorang ingin membuat meme yang dibagikan ke media sosial, mereka juga ingin cara supaya mereka bisa ngeklaim bahwa itu gambar buatan mereka. Sekarang ini berbagai cara seperti watermarking dapat dihapus melalui 'watermark remover'. Solusi yang kita berikan adalah menggunakan StegaStamp supaya pengguna bisa menempel watermark yang tidak terlihat oleh mata. Mereka bisa encode 7 karakter unik dalam gambar tersebut, dan ini kami mapping ke data yang mereka ingin encode (seperti nama author, tanggal, deskripsi, dll). Data ini kami simpan di Relational DB milik CochroachDB (salah satu sponsor). Setelah encoding, kapan pun pengguna dapat decode gambar mereka dan kita kembalikan data yang telah disimpan.

Selengkapnya proyek ini kita beri nama Steganographia, dan bisa dilihat disubmission kita: https://devpost.com/software/steganographia
Dan ini link githubnya: https://github.com/steven-steven/steganographia

Setelah pitching 3 menit kepada para juri di akhir 36 jam tersebut melalui Discord, kami tidak menang. Namun tetap menjadi pengalaman yang sangat berharga.

Salah satu kesulitan yang saya hadapi adalah ketika ingin men-deploy ML model milik StegaStamp. Awalnya ide saya adalah untuk mencoba konvert tensorflow model (.pb file) ke tensorflowjs, dan menggunakannya client-side di browser; tetapi tidak berhasil. Untungnya ketika saya bertanya ke salah satu ML mentor, mereka ajukan ide bahwa saya bisa saja memanggil model ini melalui shell command line. Jadi ketika server kami mendapat request, kami execute sebuah script CLI, dan gambar hasil model tersebut kami berikan balik ke client setelah selesai diproses. Setelah saya coba ternyata berhasil! Saya juga belajar banyak tentang proses manipulasi gambar di backend hingga proses unduh/upload gambar.

## Motivasi dan pelajaran yang saya bungkus pulang
Sepertinya dengan kondisi kovid ini, semua event akan diselenggarakan secara online. Dan menurut saya ini akan memberikan kesempatan bagi siapapun dimanapun orang berada untuk tetap berpartisipasi. Yang dulunya dibatasi secara geografi, kini barrier of entry menurun dengan digitalisasi.

Saya juga mendapatkan banyak pemikiran baru melalui pembicara di workshop maupun [Q&A dengan 'Chamath Palihapitiya' dan 'Vinod Khosla' pada Opening Ceremony](https://youtu.be/R0_9NWGwPxA) - dua figur venture kapitalis ternama didunia teknologi. Dibawah merupakan sebuah kompilasi dari pemikiran2 yang berkesan bagiku:

### Tentang skill
- Tensorflowjs
    - Saya sangat kagum dengan kemajuan ML yang kini bisa ditulis dalam bahasa JS. Ini memiliki banyak keuntungan dibanding Python. Karena model tereksekusi di browser, tidak perlu lagi ada latency untuk berbicara ke server di backend. Kemudian juga menguntungkan Privacy karena semua data user tetap berada di perangkat mereka.
    - Kini banyak model yang sudah tersedia untuk siapapun. Contohnya [Teachable Machine](https://teachablemachine.withgoogle.com) yang bisa mengklasifikasi gambar, audio, dan pose yang kita latih sendiri.
    - Sumber lainnya: https://www.tensorflow.org/js/models
- Ethereum
    - Mengeksekusi kode dengan menggunakan blockchain yang sudah tersedia.
    - Saya kurang mengerti tetapi terdengar sangat menarik untuk dibaca lebih lanjut.
- Huggingface
    - Salah satu proyek favorit saya di event ini adalah [Legist](https://devpost.com/software/legist) yang dapat meringkas dokumen policies supaya gampang untuk dicerna masyarkat. Menurutku ini merupakan solusi yang akan sangat membantu di dunia politik jaman sekarang yang sangat sulit untuk mendapatkan informasi faktual.
    - Saya melirik [kode mereka di github](https://github.com/htn2020plusplus/summarization) dan salah satu sistem penyingkat mereka menggunakan trained model pipeline dari [Huggingface](https://huggingface.co).
    - Adapula API untuk menggunakannya [menggunakan transformer](https://huggingface.co/transformers/main_classes/pipelines.html#transformers.SummarizationPipeline)
    - Ini merupakan salah satu hal yang ingin kucoba eksplorasi diwaktu luang

### Tentang dunia
- Hampir semua hal bisa di reinvent secara radikal (ie. 3d printing rumah, makanan, public transit). Selalu pikirkan bagaimana sesuatu hal bisa dilakukan dengan amat sangat berbeda dengan adanya teknologi.
- Semua area terbuka untuk inovasi. Karena orang sekarang mempunyai lebih banyak sumber daya dibanding di masa lalu. Oleh karena itu kecepatan inovasi dan banyaknya kesempatan akan terekselerasi.
- Inequality (ketidaksetaraan sosial) merupakan hal paling berbahaya bagi manusia
    - Ada 700 juta orang didunia yang memiliki gaya hidup kaya. Namun ada 7 milyar orang didunia. Untuk memastikan supaya sumber daya mencukupi semua orang (10x lipat sumber daya sekarang) merupakan masalah yang mustahil untuk dipecahkan.
    - Maka kita harus berpikir cara untuk mengurangi materi yang kita konsumsi (ie. 1/10 materi untuk pembangunan, 1/10 emisi karbon, 1/10 produksi makanan, dll)
    - Ketika dihadapkan dengan masalah yang tidak bisa dipecahkan, bisakah kita menggunakan AI supaya mendorong hal tersebut biar jauh lebih murah, terjangkau dan berkualitas.
    - Evening the starting line: "The most dangerous thing to do is leave certain population behind (which is happening)"
- Social media terkadang seperti rokok. Kita berada dalam titik ketika kita baru menyadari bahwa itu tidak baik untuk kesehatan. Namun orang tetap merokok karena kita merasa lebih keren melakukan hal tersebut.

### Tentang karir
- Orang akan lebih bahagia jika melakukan hal yang mereka percayai (melainkan mengikuti ekspektasi orang lain).
- Penting untuk memiliki 'role model' dari orang disekitarmu. Seseorang yang kau kagumi akan memotivasimu.
- Jaman sekarang cara belajar/berpikir sudah berubah. Karena banyak informasi kita lebih sering membaca ringkasan, blog.
    - Meskipun edukasi formal penting sebagai fondasi, kita lebih butuh orang yang penasaran dan melompat-lompat (cari tahu lebih) diantara informasi-informasi kecil yang tersedia
- Lokasi (silicon valley) tidak penting. Yang terpenting adalah mencari lingkungan untuk tumbuh. Semua orang ke silicon valley karena tempat tersebut memiliki sebuah 'kultur' yang dibangun oleh interaksi. ('people make the place')
- Large tech company vs Startups
    - Tidak penting. Yang penting adalah kecepatan perubahan (rate of change). Cari pekerjaan yang bergerak cepat dan berinovasi. Disitulah kita didorong untuk belajar lebih banyak.
    - Ada perusahaan yang bergaji tinggi, tapi bisnisnya statik dan kau jadi lebih tidak toleran terhadap mengambil resiko. Sehingga akhirnya anak tersebut tidak bisa memperluas kemampuan mereka secara maksimal.
- Merasa tersesat karena tidak tahu jalan dimana kita akan lebih sukses
    - Ini adalah isu mental health. Gk seharusnya mendefinisikan nilai diri dengan kesuksesan orang lain. Harus berlatih untuk mencari 'your self worth'
    - Eksplorasi bukan hal buruk. Namun harus mencari keseimbangan diantara eksplorasi, belajar, dan menyelesaikan sesuatu.
