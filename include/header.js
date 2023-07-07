function includeClass($class, $text){
    $($class).append($text);
}

function includeHeader(){
includeClass('header',`<nav class="navbar">
    <div class="container nav-wrapper">
        <a href=""></a>
        <div class="pendaftaran">
            <a href="#" class="login">Login</a>
            <a href="#" class="Register">Register</a>
        </div> 
     </div>
</nav>`);
}

function includeFooter(){
    includeClass('footer',`<div class="footer">
    <div class="info-kiri">
        <h1>Sign up for our newsletter</h1>
        <p>Be the first to know about our special offers, new product launches, and events</p>
        <form action="" >
            <input type="email" placeholder="Email Address">
            <button>Sign up</button>
        </form>
    </div>
    <div class="shop">
        <h1>shop</h1>
        <nav>
            <a href="">Women's</a>
            <a href="">Men’s</a>
            <a href="">Kids’</a>
            <a href="">Shoes</a>
            <a href="">Equipment</a>
            <a href="">By Activity</a>
            <a href="">Gift Cards</a>
            <a href="">Sale</a>
        </nav>
    </div>
    <div class="help">
        <h1>Help</h1>
        <nav>
            <a href="">Help Center</a>
            <a href="">Order Status</a>
            <a href="">Size Chart</a>
            <a href="">Returns & Warranty</a>
            <a href="">Contact Us</a>
        </nav>
    </div>
    <div class="about">
        <h1>About</h1>
        <nav>
            <a href="">About Us</a>
            <a href="">Responsibility</a>
            <a href="">Technology & Innovation</a>
            <a href="">Explore our stories</a>
        </nav>
    </div>
</div>       `);
    }


