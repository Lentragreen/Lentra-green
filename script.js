/*==========================
    Google Font
==========================*/
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;
    font-family:'Cairo',sans-serif;
}

body{
    background:#f8f8f8;
    color:#333;
    overflow-x:hidden;
}

img{
    max-width:100%;
    display:block;
}

a{
    text-decoration:none;
}

ul{
    list-style:none;
}

.container{
    width:90%;
    max-width:1200px;
    margin:auto;
}

/*==========================
    Header
==========================*/

header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:1000;
    padding:18px 0;
    transition:.4s;
    background:rgba(0,0,0,.25);
}

header.scrolled{
    background:#ffffff;
    box-shadow:0 5px 20px rgba(0,0,0,.1);
}

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo{
    font-size:30px;
    font-weight:800;
    color:#fff;
}

header.scrolled .logo{
    color:#2d6a4f;
}

.nav-links{
    display:flex;
    gap:35px;
}

.nav-links a{
    color:#fff;
    font-weight:600;
    transition:.3s;
}

header.scrolled .nav-links a{
    color:#222;
}

.nav-links a:hover{
    color:#d4a017;
}

.menu-btn{
    display:none;
    font-size:30px;
    color:#fff;
    cursor:pointer;
}

/*==========================
    Hero
==========================*/

.hero{
    height:100vh;
    background:url("images/rice-bg.jpg") center center/cover no-repeat;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
}

.hero::before{
    content:"";
    position:absolute;
    inset:0;
    background:rgba(0,0,0,.55);
}

.hero-content{
    position:relative;
    color:#fff;
    z-index:2;
    max-width:850px;
}

.hero h1{
    font-size:60px;
    margin-bottom:20px;
    font-weight:800;
}

.hero p{
    font-size:22px;
    line-height:1.9;
    margin-bottom:35px;
}

.btn{
    display:inline-block;
    padding:15px 40px;
    background:#d4a017;
    color:#fff;
    border-radius:50px;
    transition:.3s;
    font-weight:700;
}

.btn:hover{
    background:#2d6a4f;
    transform:translateY(-4px);
}

/*==========================
    Sections
==========================*/

section{
    padding:90px 0;
}

.section-title{
    text-align:center;
    margin-bottom:60px;
}

.section-title h2{
    color:#2d6a4f;
    font-size:40px;
    margin-bottom:15px;
}

.section-title p{
    color:#777;
    max-width:650px;
    margin:auto;
    line-height:1.8;
}

/*==========================
    About
==========================*/

.about{
    background:#fff;
}

.about-content{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:50px;
    align-items:center;
}

.about img{
    border-radius:15px;
    box-shadow:0 10px 30px rgba(0,0,0,.15);
}

.about-text h3{
    font-size:35px;
    color:#2d6a4f;
    margin-bottom:20px;
}

.about-text p{
    line-height:2;
    color:#666;
    margin-bottom:20px;
}

/*==========================
    Services
==========================*/

.services{
    background:#f3f6f4;
}

.service-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:30px;
}

.service-card{
    background:#fff;
    padding:35px;
    border-radius:15px;
    text-align:center;
    transition:.4s;
    box-shadow:0 5px 20px rgba(0,0,0,.08);
}

.service-card:hover{
    transform:translateY(-10px);
}

.service-card i{
    font-size:45px;
    color:#d4a017;
    margin-bottom:20px;
}

.service-card h3{
    color:#2d6a4f;
    margin-bottom:15px;
}

.service-card p{
    color:#666;
    line-height:1.8;
}

/*==========================
    Products
==========================*/

.products{
    background:#fff;
}

.product-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.product-card{
    background:#fff;
    border-radius:15px;
    overflow:hidden;
    box-shadow:0 8px 25px rgba(0,0,0,.1);
    transition:.4s;
}

.product-card:hover{
    transform:translateY(-10px);
}

.product-card img{
    width:100%;
    height:250px;
    object-fit:cover;
}

.product-info{
    padding:25px;
}

.product-info h3{
    color:#2d6a4f;
    margin-bottom:10px;
}

.product-info p{
    color:#666;
    line-height:1.8;
}
/*==========================
    Production Process
==========================*/

.process{
    background:#f3f6f4;
}

.process-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
}

.process-card{
    background:#fff;
    padding:30px;
    border-radius:15px;
    text-align:center;
    box-shadow:0 5px 15px rgba(0,0,0,.08);
    transition:.3s;
}

.process-card:hover{
    transform:translateY(-8px);
}

.process-card span{
    width:70px;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 auto 20px;
    background:#2d6a4f;
    color:#fff;
    border-radius:50%;
    font-size:28px;
    font-weight:bold;
}

.process-card h3{
    color:#2d6a4f;
    margin-bottom:12px;
}

.process-card p{
    color:#666;
    line-height:1.8;
}

/*==========================
    Gallery
==========================*/

.gallery{
    background:#fff;
}

.gallery-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}

.gallery-grid img{
    width:100%;
    height:260px;
    object-fit:cover;
    border-radius:12px;
    transition:.4s;
}

.gallery-grid img:hover{
    transform:scale(1.05);
}

/*==========================
    Export
==========================*/

.export{
    background:#2d6a4f;
    color:#fff;
    text-align:center;
}

.export h2{
    font-size:38px;
    margin-bottom:20px;
}

.export p{
    max-width:800px;
    margin:auto;
    line-height:2;
    font-size:18px;
}

/*==========================
    Contact
==========================*/

.contact{
    background:#fff;
}

.contact-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
    gap:40px;
}

.contact-info h3{
    color:#2d6a4f;
    margin-bottom:20px;
}

.contact-info p{
    margin-bottom:15px;
    color:#666;
}

.contact form input,
.contact form textarea{
    width:100%;
    padding:15px;
    margin-bottom:20px;
    border:1px solid #ddd;
    border-radius:8px;
    outline:none;
    font-size:16px;
}

.contact form textarea{
    height:150px;
    resize:none;
}

.contact form button{
    background:#2d6a4f;
    color:#fff;
    border:none;
    padding:15px 35px;
    border-radius:40px;
    cursor:pointer;
    transition:.3s;
}

.contact form button:hover{
    background:#d4a017;
}

/*==========================
    Footer
==========================*/

footer{
    background:#1f1f1f;
    color:#fff;
    text-align:center;
    padding:25px;
}

footer p{
    font-size:15px;
}

/*==========================
    Scroll
