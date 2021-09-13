// Upper Marquee
const Titlis = [{title:"Title 01"},{title:"Title 02"},{title:"Title 03"},{title:"Title 04"},{title:"Title 05"},{title:"Title 06"},{title:"Title 07"}];
          document.getElementById("ticker01").innerHTML= Titlis.map(i => `
          <li><a href="#">${i.title}</a></li>
          `).join("")

// Main Menu
const topics = [{title:"देश"},{title:"छत्तीसगढ़"},{title:"राजनीती"},{title:"खेल"},{title:"देश"},{title:"विदेश"},{title:"छत्तीसगढ़िया"},{title:"देश"},{title:"देश"},{title:"सैल"},{title:"ओपिनियन"}];

    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    li1.className="active";
    li1.innerHTML = `<a href="index.html"><span class="fa fa-home desktop-home"></span><span class="mobile-show">Home</span></a>`;
    li2.innerHTML = `<a href="pages/contact.html">संपर्क</a>`;
    const newChild = document.getElementById("topics");
            document.getElementById("topics").innerHTML= topics.map(i => `
          <li><a href="#">${i.title}</a></li>
              `).join("")
    newChild.prepend(li1);
    newChild.appendChild(li2);

// Slider Data
const SS = [{url:"images/01.jpeg",title:"1 Slider"},{url:"images/01.jpeg",title:"2 Slider"},{url:"images/01.jpeg",title:"3 Slider"},{url:"images/01.jpeg",title:"4 Slider"},{url:"images/01.jpeg",title:"5 Slider"}];
         document.getElementById("SS").innerHTML= SS.map(i => `
       <div class="single_iteam"> <a href="pages/single_page.html"> <img src="${i.url}" alt=""></a>
            <div class="slider_article">
              <h2><a class="slider_tittle" href="pages/single_page.html">${i.title}</a></h2>   
            </div>
          </div>
          `).join("")
// Fresh News
const FreshNews = [{url:"images/01.jpeg",title:"1 ताज़ा खबरी"},{url:"images/01.jpeg",title:"2 ताज़ा खबरी"},{url:"images/01.jpeg",title:"3 ताज़ा खबरी"},{url:"images/01.jpeg",title:"4 ताज़ा खबरी"},{url:"images/01.jpeg",title:"5 ताज़ा खबरी"}];
         document.getElementById("FreshNews").innerHTML= FreshNews.map(i => `
       <li>
                <div class="media"> <a href="pages/single_page.html" class="media-left"> <img alt="" src="${i.url}"> </a>
                  <div class="media-body"> <a href="pages/single_page.html" class="catg_title">${i.title}</a> </div>
                </div>
              </li>
          `).join("")



// CG Left
const CGLeft = [{url:"images/01.jpeg",title:"1 छत्तीसगढ़छत्तीसगढ़छत्तीसगढ़ी"}];
document.getElementById("CGLeft").innerHTML= CGLeft.map(i => `
<li>
          <figure class="bsbig_fig"> <a href="pages/single_page.html" class="featured_img"> <img alt="" src="${i.url}"> <span class="overlay"></span> </a>
            <figcaption> <a href="pages/single_page.html">${i.title}</a> </figcaption>
            <p>${i.title}</p>
          </figure>
        </li>
  `).join("")


// CG Right
const CGRight = [{url:"images/01.jpeg",title:"1 छत्तीसगढ़ी"},{url:"images/01.jpeg",title:"2 छत्तीसगढ़ी"},{url:"images/01.jpeg",title:"3 छत्तीसगढ़ी"},{url:"images/01.jpeg",title:"4 छत्तीसगढ़ी"},{url:"images/01.jpeg",title:"5 छत्तीसगढ़ी"}];
document.getElementById("CGRight").innerHTML= CGRight.map(i => `
<li>
          <div class="media wow fadeInDown"> <a href="pages/single_page.html" class="media-left"> <img alt="" src="${i.url}"> </a>
            <div class="media-body"> <a href="pages/single_page.html" class="catg_title"> ${i.title}</a> </div>
          </div>
        </li>
  `).join("")

// Up Politics

const UpPoly = [{url:"images/01.jpeg",title:"राजनीतीराजनीतीराजनीती"}];
document.getElementById("UpPoly").innerHTML= UpPoly.map(i => `
  <li>
            <figure class="bsbig_fig"> <a href="pages/single_page.html" class="featured_img"> <img alt="" src="${i.url}"> <span class="overlay"></span> </a>
              <figcaption> <a href="pages/single_page.html">${i.title}</a> </figcaption>
              <p>${i.title}</p>
            </figure>
          </li>
  `).join("")

// Down Politics
const DownPoly = [{url:"images/01.jpeg",title:"1 राजनीती"},{url:"images/01.jpeg",title:"2 राजनीती"},{url:"images/01.jpeg",title:"3 राजनीती"},{url:"images/01.jpeg",title:"4 राजनीती"}];
              document.getElementById("DownPoly").innerHTML= DownPoly.map(i => `
                <li>
                          <div class="media wow fadeInDown"> <a href="pages/single_page.html" class="media-left"> <img alt="" src="${i.url}"> </a>
                            <div class="media-body"> <a href="pages/single_page.html" class="catg_title">${i.title}</a> </div>
                          </div>
                        </li>
                `).join("")


// UpCountry
const UpCountry = [{url:"images/01.jpeg",title:"1 देशदेशदेशदेशदेशदेशदेशदेश"}];
           document.getElementById("UpCountry").innerHTML= UpCountry.map(i => `
           <li>
                    <figure class="bsbig_fig wow fadeInDown"> <a href="pages/single_page.html" class="featured_img"> <img alt="" src="${i.url}"> <span class="overlay"></span> </a>
                      <figcaption> <a href="pages/single_page.html">${i.title}</a> </figcaption>
                      <p>${i.title}</p>
                    </figure>
                  </li>
          `).join("")


// DownCountry
const DownCountry = [{url:"images/01.jpeg",title:"1 देशदेश"},{url:"images/01.jpeg",title:"2 देशदेश"},{url:"images/01.jpeg",title:"3 देशदेश"},{url:"images/01.jpeg",title:"4 देशदेश"}];
            document.getElementById("DownCountry").innerHTML= DownCountry.map(i => `
              <li>
                        <div class="media wow fadeInDown"> <a href="pages/single_page.html" class="media-left"> <img alt="" src="${i.url}"> </a>
                          <div class="media-body"> <a href="pages/single_page.html" class="catg_title"> ${i.title}</a> </div>
                        </div>
                      </li>
              `).join("")

// Khel Left Div
const PlayLeft = [{url:"images/01.jpeg",title:"1 खेलखेल"}];
              document.getElementById("PlayLeft").innerHTML= PlayLeft.map(i => `
                <li>
                        <figure class="bsbig_fig  wow fadeInDown"> <a class="featured_img" href="pages/single_page.html"> <img src="${i.url}" alt=""> <span class="overlay"></span> </a>
                          <figcaption> <a href="pages/single_page.html">${i.title}</a> </figcaption>
                          <p>${i.title}</p>
                        </figure>
                      </li>
                `).join("")

// Khel Right Div
const PlayRight = [{url:"images/01.jpeg",title:"1 खेल"},{url:"images/01.jpeg",title:"2 खेल"},{url:"images/01.jpeg",title:"3 खेल "},{url:"images/01.jpeg",title:"4 खेल"},{url:"images/01.jpeg",title:"5 खेल"}];
document.getElementById("PlayRight").innerHTML= PlayRight.map(i => `
     <li>
           <div class="media wow fadeInDown"> <a href="pages/single_page.html" class="media-left"> <img alt="" src="${i.url}"> </a>
             <div class="media-body"> <a href="pages/single_page.html" class="catg_title"> ${i.title}</a> </div>
           </div>
         </li>
 `).join("")


// Durg Bhilai
const nearby = [{url:"images/01.jpeg",title:"1 दुर्ग-भिलाई"},{url:"images/01.jpeg",title:"2 दुर्ग-भिलाई"},{url:"images/01.jpeg",title:"3 दुर्ग-भिलाई "},{url:"images/01.jpeg",title:"4 दुर्ग-भिलाई"}];
         document.getElementById("nearby").innerHTML= nearby.map(i => `
            <li>
                <div class="media wow fadeInDown"> <a href="pages/single_page.html" class="media-left"> <img alt="" src="${i.url}"> </a>
                  <div class="media-body"> <a href="pages/single_page.html" class="catg_title"> ${i.title}</a> </div>
                </div>
              </li>
          `).join("")

// videsh Section
const abroad = [{url:"images/01.jpeg",title:"1 देश"},{url:"images/01.jpeg",title:"2 देश"},{url:"images/01.jpeg",title:"3 देश "},{url:"images/01.jpeg",title:"4 देश"}];
         document.getElementById("videsh").innerHTML= abroad.map(i => `
            <li>
              <div class="media wow fadeInDown"> <a href="pages/single_page.html" class="media-left"> <img alt="" src="${i.url}"> </a>
               <div class="media-body"> <a href="pages/single_page.html" class="catg_title"> ${i.title}</a> </div>
              </div>
            </li>
          `).join("")


// Footer Tags
const tags = [{title:"देश"},{title:"विदेश"},{title:"छत्तीसगढ़"},{title:"राजनीती"},{title:"फैशन"},{title:"खेल "},{title:"ओपिनियन"}];
document.getElementById("tags").innerHTML= tags.map(i => `
  <li><a href="#">${i.title}</a></li>
`).join("")

// sidebar Category
// const categ = [{title:"देश"},{title:"विदेश"},{title:"छत्तीसगढ़"},{title:"राजनीती"},{title:"फैशन"},{title:"खेल "},{title:"ओपिनियन"}];
//             document.getElementById("categ").innerHTML= categ.map(i => `
//               <li class="cat-item"><a href="#">${i.title}</a></li>
//             `).join("")