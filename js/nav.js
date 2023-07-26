const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML =`
        <div class="nav">
            <img src="img/gift1.jpg" class="brand-logo" alt="">
            <p class="navtext">GIFTBOX</p>
            <div class="nav-items">
            
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="flowers.html" class="link">Flowers</a></li>
            <li class="link-item"><a href="cakes.html" class="link">Cakes</a></li>
            <li class="link-item"><a href="plant.html" class="link">Plants</a></li>
            <li class="link-item"><a href="gourmet.html" class="link">Gourmets</a></li>
            <li class="link-item"><a href="login.html" class="link">Login</a></li> 
            <li class="link-item"><a href="register.html" class="link">Register</a></li>
        </ul>`
    ;
}

createNav();