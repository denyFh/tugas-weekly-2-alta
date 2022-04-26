const materies = [
    {
        title: 'Introduction React',
        id: 'intro-react',
        summary: [
            {
                point: '1. What is React? and Why React?',
                description: 'React merupakan library javascript untuk membuat UI yang interaktif dan cepat pada web atau mobile. React merupakan sebuah library bukan sebuah framework, yang dimaksud dengan library disini adalah yang mengatur adalah kode kita, bukan kode kita yang mengikuti rules dari suatu framework. React merupakan sebuah open source dengan menggunakan arsitektur MVC (Model - View - Controller). Alasan kita menggunakan react library untuk membuat suatu UI adalah kita ingin membuat suatu website yang interaktif bagi pengguna dan most important thing we dont need to wait to reload a page to show content.'
            },
            {
                point: '2. Virtual DOM',
                description: 'DOM Manipulation merupakan inti dari era modern interactive website, namun dalam pengimplementasiannya terdapat beberapa masalah diantaranya harus dilakukan secara manual, memorizing DOM state yang sulit dan proses yang lebih lambat dibandingkan operasi js umumnya. Sehingga dibuatlah sebuah virtual DOM yang merupakan representasi dari UI berbentuk JS Object yang disimpan pada memori.'
            },
            {
                point: '3. Set up Development Environment',
                description: 'Dalam menggunakan react ada beberapa tools yang diperlukan seperti browser (chrome), text editor (visual studio code), dan Command Line Shell. Selain itu terdapat framework CRA atau Create React App yang mempermudah untuk menginisialisasi suatu proyek berbasis react dengan bantuan nodejs.'
            }
        ],
        links: ['https://github.com/denyFh/tugas-react/tree/master/Section%2010%20Intro%20React'],
        screenshots: [
            '/images/react-intro.png',
        ],
    },
    {
        title: 'React Fundamental',
        id: 'react-fundamental',
        summary: [
            {
                point: '1. What is JSX? and Why JSX?',
                description: 'JSX merupakan singkatan dari JavaScript XML merupakan ekstensi pada javascript yang penggunaannya sangat disarankan ketika menggunakan react karena lebih menggambarkan apa yang seharusnya tampak pada tampilan user interface. JSX akan menghasilkan suatu react element. Alasan kita menggunakan JSX karean JSX dibuat berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI, seperti bagaimana event ditangani, bagaimana state berubah seiring dengan waktu, dan bagaimana suatu data disiapkan untuk ditampilkan. Kalau biasanya kita memisahkan teknologi yang digunakan atau biasa disebut dengan Separation of technology yakni memisahkan marka dengan logika, maka dengan menggunakan react kita bisa menggabungkan kedua teknologi ini dan memisahkannya sesuai dengan kepentingan penggunaannya atau yang biasa disebut dengan Separation of concerns dengan sebuah unit gabungan terendah yang disebut dengan component.'
            },
            {
                point: '2. React Component',
                description: 'Komponen react merupakan bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state pada UI. Komponen bisa mempermudah kita untuk memecah UI menjadi bagian tersendiri, bagian yang bisa digunakan kembali dan berpikir tentang setiap potongan dalam isolasi. Dalam penggunaannya kita bisa membagi UI menjadi beberapa component pada tampilan website dengan menjadi sebuah hierarki komponen. Banyak cara yang bisa digunakan, salah satunya adalah mengkotak-kotakan komponen dan subkomponen dalam UI dengan penamaannya tersendiri. Lalu memutuskan mana yang menjadi komponen dan subkomponen yakni bagian yang lebih kecil. Kita dapat membuat suatu component dengan dua cara yakni dengan menggunakan function atau dengan menggunakan class yang mengextends react component. Cara membuat dan merender component dapat dilakukan dengan memanggil ReactDOM.render() dengan element yang akan ditampilkan.'
            },
            {
                point: '3. React Lifecycle',
                description: 'Terdapat lifecycle umum yang perlu diketahui dalam react yakni lifecycle dimulai dari render, kemudian componentDidMount, menuju ke componentDidUpdate, dan terakhir componentWillUnmount.'
            }
        ],
        links: ['https://github.com/denyFh/tugas-react/tree/master/Section%2011%20React%20Fundamental/tugas-react-2'],
        screenshots: [
            '/images/react-fundamental-1.png',
            '/images/react-fundamental-2.png',
        ],
    },
    {
        title: 'React Routing',
        id: 'react-routing',
        summary: [
            {
                point: '1. Apa itu Router dalam ReactJS?',
                description: 'Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page App). SPA merupakan kebalikan dari MPA (Multiple Page App) atau juga biasa dikenal dengan tradisional web app yang merupakan jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru. SPA merupakan jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut. Dengan masing-masing kekurangan yang dimiliki oleh tiap jenis halaman, dalam react kita dapat mempermudah proses routing dengan menggunakan react router library. Dengan menggunakan perintah: "npm install react-router-dom --save".'
            },
            {
                point: '2. URL Param Usage in React',
                description: 'Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL Halaman. Cara mengakses param tersebut bisa dengan menggunakan "this.props.match.params". Link dan redirect itu mirip dengan tujuan untuk menavigasi dalam aplikasi namun terdapat perbedaan dalam kedua hal ini yakni link lebih mudah digunakan dalam kondisi apapun sedangkan redirect secara umum hanya digunakan sebagai pengalihan'
            },
            {
                point: '3. Hook Routing React',
                description: 'Hooks pada react router terdapat 4 fungsi diantaranya adalah useHistory, useLocation, useParams, dan useRouteMatch.'
            }
        ],
        links: ['https://github.com/denyFh/tugas-react-route-alta', 'https://github.com/denyFh/react-route-6'],
        screenshots: [
            '/images/react-router.png',
        ],
    },
    {
        title: 'Event Handling',
        id: 'event-handling',
        summary: [
            {
                point: '1. State pada React',
                description: 'State adalah data private sebuah component. Data nii hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain. Beberapa poin perhatian pada state react yakni data yang bisa dimodifikasi menggunakan setState, setiap terjadi modifikasi akan terjadi render ulang, bersifat async, dipakai dalam class / function. Terdapat juga perbedaan antara props dan state yakni props hanya bersifat read-only, dan props tidak bisa dimodifikasi.'
            },
            {
                point: '2. Statefull - Stateless',
                description: 'Stateful component adalah komponen yang memiliki state sebelum versi terbaru, komponen ini hanya bisa dibuat dengan class dengan kelebihannya adalah memiliki lifecycle. Stateless component adalah komponen yang tidak memiliki state hanya props, umumnya komponen ini dibuat dengan menggunakan function karena lebih ringkas. '
            },
            {
                point: '3. Event Handling pada React',
                description: 'Handling event merupakan suatu metode yang digunakan untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponen. Event sendiri merupakan suatu peristiwa yang dipicu oleh pengguna pada suatu komponen misalnya ketika pengguna menekan tombol, form di submit. Untuk penulisannya mirip dengan HTML.'
            }
        ],
        links: ['https://github.com/denyFh/tugas-event-handle-class-alta'],
        screenshots: [
            '/images/event-handle.png',
        ],
    },
    {
        title: 'React Hook',
        id: 'react-hook',
        summary: [
            {
                point: '1. Apa itu React Hooks',
                description: 'Hooks merupakan fitur baru di react 16.8. Dengan hooks, kita dapat menggunakan state dan fitur react lain tanpa perlu menulis sebuah kelas. Alasan adanya react hooks diantaranya adalah kesulitan untuk menggunakan kembali stateful logic antar komponen, komponen kompleks menjadi sulit untuk dimengerti, dan kelas membingungkan manusia dan mesin. Beberapa hooks dasar yang biasa digunakan diantaranya useState, useEffect, useMemo, dan lain-lain.'
            },
            {
                point: '2. Implementasi useState dan useEffect',
                description: 'Salah satu hal yang perlu diperhatikan bahwa hooks hanya dapat digunakan pada function component dan tidak dapat digunakan pada class component. useEffect merupakan effect hook yang memungkinkan kita melakukan efek samping di dalam function component, seperti componentDidMount, componentDidUpdate, componentWillUnmount mirip dengan useEffect. Bisa dibilang bahwa useEffect ini yang menggantikan lifecycle pada react component. Terdapat dua jenis useEffect yakni yang membutuhkan pembersihan dan yang tidak membutuhkan pembersihan.'
            },
            {
                point: '3. Create Custom Hooks',
                description: 'Custom hooks yakni kita membuat hook sendiri yang memungkinkan kita dapat mengekstrak komponen logika ke fungsi yang dapat digunakan lagi. Caranya adalah dalam suatu function yang ingin digunakan kembali maka dapat melakukan return state yang ada pada function tersebut kemudian memanggilnya ke dalam function lain dengan menggunakan import sehingga nanti function tersebut akan mereturn suatu nilai state yang bisa dipakai kembali.'
            }
        ],
        links: ['https://github.com/denyFh/tugas-react-hooks-alta'],
        screenshots: [
            '/images/react-hooks.png',
        ],
    },
    {
        title: 'React Forms',
        id: 'react-forms',
        summary: [
            {
                point: '1. Penggunaan dan Macam Form',
                description: 'Form merupakan salah satu hal yang sering digunakan dalam suatu pengembangan aplikasi website. Banyak sekali macam tipe dalam form yakni diantaranya element input, text area, select, radio button, dan checkbox. Dalam sebuah elemen input sendiri terdapat banyak tipe diantaranya text, number, button, date, file, dan lain-lain.'
            },
            {
                point: '2. Controlled Component & Uncontrolled Component',
                description: 'Controlled Component merupakan sebuah komponen yang elemen formnya di kontrol dengan menggunakan state pada react seperti untuk menyimpan dan memperbarui state pada elemen form tersebut. Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM. Kesimpulan yang bisa diambil dari form controlled dan uncontrolled memiliki kelebihannya sendiri. Kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita.'
            },
            {
                point: '3. Basic Validation',
                description: 'Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan : Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi Melindungi akun pengguna. Misalnya, membuat pengguna untuk memasukkan data password yang aman Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi.'
            }
        ],
        links: ['https://github.com/denyFh/tugas-react-form-alta'],
        screenshots: [
            '/images/react-forms.png',
        ],
    },
    {
        title: 'Global State Management',
        id: 'global-state-management',
        summary: [
            {
                point: '1. Global State Introduction',
                description: 'Global State merupakan artian bahwa state yang diberada dalam setiap komponen react nantinya akan bisa digunakan secara global. Cara untuk mewujudkan hal tersebut adalah dengan menggunakan Redux. Kapan kita harus menggunakan redux ketika memiliki banyak state yang perlu ditaruh di banyak tempat, state yang sering berubah, logic pengubah state yang kompleks, dsb. Beberapa tools dan libraries yang dibutuhkan adalah react-redux, redux-toolkit, dan redux devtools extension. Komponen penting dalam redux adalah actions, reducer, dan store.'
            },
            {
                point: '2. Redux Thunk and Persisted State',
                description: 'Thunk Middleware yang ada pada redux dapat memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action. Redux Thunk diperlukan untuk menghandle side effect logic seperti logic synchronous komples yang perlu mengakses store dan juga logic async seperti request data. Kemudian terdapat Persisted State merupakan suatu implementasi dari library redux-persist yang memungkinkan kita untuk menyimpan suatu state yang telah kita inisialisasi sehingga ketika kita mencoba melakukan reload app kita maka akan memuat state yang sudah diterima atau disimpan pada browser localstorage.'
            },
            {
                point: '3. Fetching Data',
                description: 'Fetching data merupakan salah satu hal yang sering dijumpai dalam suatu app sekarang. dimana kita meminta sebuah data, mengeditnya kemudian menyimpan data tersebut. Terdapat beberapa cara untuk melakukan fetching data dalam react diantaranya dengan menggunakan Fetch API, Axios, dan React Query Library.'
            }
        ],
        links: ['https://github.com/denyFh/redux-todo'],
        screenshots: [
            '/images/global-state.png',
        ],
    },
    {
        title: 'Testing',
        id: 'testing',
        summary: [
            {
                point: '1. Basic Testing',
                description: 'Testing merupakan proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita. Adapun beberapa manfaat testing diantaranya mempunyai coverage yang baik, dan mengurangi bug pada aplikasi. Beberapa rekomendasi tools yang bisa digunakan adalah Jest dan React Testing Library.'
            },
            {
                point: '2. Basic Testing with RTL',
                description: 'Dalam RTL terdapat beberapa fungsi yang sering digunakan untuk melakukan suatu testing yakni adalah fungsi render untuk merender file jsx yang dibutuhkan kemudian terdapat fungsi debug yang digunakan untuk memastikan bahwa file jsx telah berhasil dirender. Kita juga bisa mentesting suatu handle event dengan menggunakan fireEvent yang disediakan RTL yang kemudian dicocokan dengan role event yang ingin ditesting dan memberikan suatu value testing yang kemudian di expect untuk tampil atau muncul ketika di test. Selain itu kita juga bisa mentesting handle asynchronous untuk kasus seperti mengetes fetch sebuah API dengan bantuan axios atau yang lain kemudian mereturn sebuah mock promise yang akan di cocokan dengan skenario yang dibuat.'
            },
            {
                point: '3. Testing Custom Hook',
                description: 'Selain melakukan testing pada komponen react, kita juga bisa melakukan testing custom hook yang telah kita buat dnegan menggunakan bantuan library React Hooks Testing Library yakni alat yang digunakan untuk mengetes hooks tanpa merender suatu komponen.'
            }
        ],
        links: ['https://github.com/denyFh/tugas-react-testing-alta'],
        screenshots: [
            '/images/react-testing-result.png',
        ],
    },
    {
        title: 'Deployment',
        id: 'deployment',
        summary: [
            {
                point: '1. Build React App',
                description: 'Secara default ketika menginisialisasi, react akan mengandung banyak pesan peringatan yang berguna dalam pengembangan aplikasi namun, membuat react menjadi lebih besar dan lambat. Sehingga diperlukan versi produksi (build) ketika melakukan deploy aplikasi dengan menggunakan react. Caranya dengan melakukan run command npm run build maka akan terbuat folder build yang digunakan untuk melakukan deploy.'
            },
            {
                point: '2. Deployment dengan Surge',
                description: 'Deployment merupakan kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah dibuat dengan harapan bisa diakses oleh banyak orang. Terdapat banyak cara untuk melakukan deploy diantaranya dengan menggunakan Surge yakni layanan static web publishing gratis bagi para front-end developers. Cara melakukan deploy dengan Surge pertama dengan menginstalasi surge dengan npm install. kemudian run surge, masukkan kredibilitas yang dibutuhkan ke dalam akun surge, lalu lakukan publish domain untuk folder build.'
            },
            {
                point: '3. Deployment dengan Netlify CLI',
                description: 'Selain dengan menggunakan layanan Surge, terdapat layanan gratis lainnya seperti Netlify untuk melakukan deployment terhadap aplikasi kita. Selain itu Netlify sudah terintegrasi dengan Git Host seperti Github, Gitlab, dan Bitbucket yang dapat mempermudah proses setup deployment kita. Cara melakukan deploy dengan Netlify CLI yakni dengan melakukan instalasi netlify-cli dengan npm install, kemudian run netlify deploy, maka akan diarahkan ke akun netlify untuk melakukan autorisasi, lalu melakukan create dan configure new site, lalu pilih folder build sebagai lokasi file yang akan di deploy.'
            }
        ],
        links: ['https://github.com/denyFh/tugas-deploy-react-alta'],
        screenshots: [
            '/images/react-deploy-1.png',
            '/images/react-deploy-2.png',
            '/images/react-deploy-3.png',
            '/images/react-deploy-4.png',
            '/images/react-deploy-5.png',
        ],
    },
    {
        title: 'Introduction Algorithm',
        id: 'introduction-algorithm',
        summary: [
            {
                point: '1. What is Algorithm?',
                description: 'Algoritma merupakan prosedur komputasi yang didefinisikan dengan baik yang mengambil beberapa nilai sebagai input yang kemudian diolah dan menghasilkan beberapa nilai sebagai output. Beberapa contoh penggunaan algoritma seperti melakukan pengecekan dalam bilangan prima, melakukan sorting, dan membuat fitur searching. Algoritma dasar terdiri dari 3 bentuk yakni Sequential, Branching, dan Looping.'
            },
            {
                point: '2. What is Pseudo Code?',
                description: 'Pseudo Code merupakan sebuah langkah-langkah yang bisa kita buat dalam membentuk suatu algoritma. Biasanya pseudo code dibuat dengan menggunakan bahasa yang manusia mudah mengerti yang kemudian nanti akan dikonversikan menjadi suatu kode.'
            },
            {
                point: '3. What is Flowchart?',
                description: 'Flowchart merupakan suatu bagan dengan simbol tertentu yang menggambarkan urutan dan hubungan antar proses secara mendetail. Flowchart dapat digunakan sebagai bentuk visualisasi dari algoritma yang sudah kita susun dengan ataupun tidak dengan menggunakan pseudo code. Adapun beberapa penjelasan mengenai bentuk / simbol dalam flowchart seperti rounded rectangle sebagai tanda mulai / selesai, rectangle mengartikan suatu proses, jajar genjang berarti memberikan suatu input/output, belah ketupat merupakan penggambaran suatu kondisi, dan hexagonal merupakan penggambaran suatu bentuk perulangan (looping).'
            }
        ],
        links: ['https://whimsical.com/task-alta-algorithm-EaKZfvqyx4q2bLAMoyMLTB'],
        screenshots: [
            '/images/intro-algo-1.png',
            '/images/intro-algo-2.png',
        ],
    },

]

export default materies;