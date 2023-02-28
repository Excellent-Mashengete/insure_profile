const p={
    "font-size": "16px",
    "color":  "hsl(273, 4%, 51%)",
    "margin-left": "-10px"
}


window.onload = function() {
    let logoImg = './assets/images/logo.svg';
    let Logo = "<h2><img src='"+logoImg+"' alt='' /></h2>";
    let nablink = "<ul>"
        nablink += "<li><a href=#>HOW WE WORK</a></li>";
        nablink += "<li><a href=#>BLOG</a></li>";
        nablink += "<li><a href=#>ACCOUNT</a></li>";
    nablink += "</ul>";
    let plan = 'VIEW PLANS';

 
    document.getElementById('logo').innerHTML = Logo;
    document.getElementById('nablink').innerHTML = nablink;
    document.getElementById('plan').innerHTML = plan;

    //First section
    let introImg = './assets/images/image-intro-desktop.jpg'
    let intro = "<img src='"+introImg+"' alt='' />";

    let leftImg = './assets/images/bg-pattern-intro-left-desktop.svg'
    let intro_left = "<img height='450' src='"+leftImg+"' alt='' />";

    let rigtImg = './assets/images/bg-pattern-intro-right-desktop.svg'
    let intro_right = "<img width='370' height='430' src='"+rigtImg+"' alt='' />";

    let menu_data = "<h1>Humanizing<br />your insurance.</h1>"
    menu_data += "<p>Get your insurance coverage easier and faster. We blend our expertise<br />"
    menu_data +=" and technology to help you find the plan that's right for you. Ensure you<br />"
    menu_data +=" and your loved ones are protected. </p><br />";

    document.getElementById('intro-pic').innerHTML = intro;
    document.getElementById('intro-left').innerHTML = intro_left;
    document.getElementById('intro-right').innerHTML = intro_right;
    document.getElementById('menu_data').innerHTML = menu_data;


    //Second Section

    let title =  "We're different";

    let secImg1 = './assets/images/icon-snappy-process.svg';
    let expo1 = "<img height='50' src='"+secImg1+"' alt='icon-snappy-process' />";

    let secImg2 = './assets/images/icon-affordable-prices.svg';
    let expo2 = "<img height='50' src='"+secImg2+"' alt='icon-affordable-prices' />";

    let secImg3 = './assets/images/icon-people-first.svg';
    let expo3 = "<img height='50' src='"+secImg3+"' alt='icon-people-first' />";
    
    let submenu = "<tr><td>"+expo1+"</td>"
        submenu += "<td>"+expo2+"</td>"
        submenu += "<td>"+expo3+"</td></tr>";

        submenu += "<tr><td><h3>Snappy Process</h3></td>";
        submenu += "<td><h3>Affordable Prices</h3></td>";
        submenu += "<td><h3>People First</h3></td></tr>";

        submenu += "<tr><td><p >Our application process can be completed in<br />minutes, not hours. Don't get stuck filling in<br />tedious forms.</p></td>"
        submenu += "<td><p>we don't want you worrying about high monthly<br />costs. Our prices may be low, but we still offer<br />the best coverage possible.</p></td>"
        submenu += "<td><p>Our plans aren't full of conditions and clauses<br />to prevent payouts. We make sure you're<br />covered when you need it</p></td></tr></table>";
    document.getElementById('title').innerHTML = title;    
    document.getElementById('submenu').innerHTML = submenu;
   


    //Third Section
    let imgUrl = "./assets/images/bg-pattern-how-we-work-desktop.svg"
    let img = "<img src="+imgUrl+" height='195' alt=''>";
    let table_work = "<tr><td><h1>Find out more<br />about how we work</h1></td>";
        table_work += "<td>"+img+"<a class='btn how_work' href=''>HOW WE WORK</a></td> </tr>";

    document.getElementById('table_work').innerHTML = table_work;


    //Footer
    let footer_desktopImg = './assets/images/bg-pattern-footer-desktop.svg';
    let footer_desktop = "<img height='200' src="+footer_desktopImg +" alt='icon-twitter'/>"

    let tableFooter = "<tr><td class='logo'><h2 style='margin-top: 40px;'><h2><img src='/assets/images/logo.svg' alt=''></h2></h2></td>"
        tableFooter += "<td align='right' class='fa' ><a href='#'><img src='./assets/images/icon-facebook.svg' alt='icon-facebook'></a>"
        tableFooter += "<a href='#'><img src='./assets/images/icon-twitter.svg' alt='icon-twitter'></a>"
        tableFooter += "<a href='#'><img src='./assets/images/icon-pinterest.svg' alt='icon-pinterest'></a>"
        tableFooter += "<a href='#'><img src='./assets/images/icon-instagram.svg' alt='icon-instagram'></a></td></tr>";

    let footerMenu = "<tr><td>OUR COMPANY</td>"
        footerMenu += "<td>HELP ME</td>"
        footerMenu += "<td>CONTACT</td>"
        footerMenu += "<td>OTHERS</td></tr>";

        footerMenu += "<td><ul><li><a href=#>HOW WE WORK</a></li>"
        footerMenu += "<li><a href=#>WHY INSURE?</a></li>"
        footerMenu += "<li><a href=#>VIEW PLANS</a></li>"
        footerMenu += " <li><a href=#>REVIEWS</a></li> </ul></td>";
        
        
        footerMenu += "<td><ul><li><a href='#'>FAQ</a></li>"
        footerMenu += "<li><a href='#'>TERMS OF USE</a></li>"
        footerMenu += "<li><a href='#'>PRIVACY POLICY</a></li>"
        footerMenu += "<li><a href='#'>COOKIES</a></li></td>";
        
        
        footerMenu += "<td><ul><li><a href='#'>SALES</a></li>"
        footerMenu += "<li><a href='#'>SUPPORT</a></li>"
        footerMenu += "<li><a href='#'>LIVE CHAT</a></li>"
        footerMenu += "<li><a ></a></li></ul></td>";

        footerMenu +="<td><ul><li><a href='#'>CAREERS</a></li>"
        footerMenu +="<li><a href='#'>PRESS</a></li>"
        footerMenu +="<li><a href='#'>LICENSES</a></li>"
        footerMenu +="<li><a></a></li></ul></td></tr>";

    document.getElementById('footer-desktop').innerHTML = footer_desktop;
    document.getElementById('tableFooter').innerHTML = tableFooter;
    document.getElementById('footerMenu').innerHTML = footerMenu;
    
}

