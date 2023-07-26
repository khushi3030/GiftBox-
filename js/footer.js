const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/allcakes.jpg" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">cakes</li><pre>
                <li><a href="#" class="footer-link">Birthday</a></li>
                <li><a href="#" class="footer-link">Anniversary</a></li>
                <li><a href="#" class="footer-link">Customized</a></li>
                <li><a href="#" class="footer-link">Pinnata</a></li>
                <li><a href="#" class="footer-link">Pineapple</a></li>
                <li><a href="#" class="footer-link">Chocolate</a></li>
                <li><a href="#" class="footer-link">Rose</a></li></pre>
                
            </ul>
            <ul class="category">
                <li class="category-title">Flowers</li><pre>
                <li><a href="#" class="footer-link">Rose</a></li>
                <li><a href="#" class="footer-link">Choclate Roses</a></li>
                <li><a href="#" class="footer-link">Tulip</a></li>
                <li><a href="#" class="footer-link">Pink Flowers</a></li>
                <li><a href="#" class="footer-link">White Flowers</a></li></pre>
                
            </ul>
            <ul class="category">
                <li class="category-title">Plants</li><pre>
                <li><a href="plant.html" class="footer-link">Bonsai</a></li>
                <li><a href="plant.html" class="footer-link">Home decor</a></li>
                <li><a href="plant.html" class="footer-link">Best seller</a></li></pre>
                
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">hello how are you?</p>
    <p class="info">support emails - help@cgifting.com, customersupport@gifting.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Best Gifts for all occassion, Gift online store</p>
    `;
}

createFooter();