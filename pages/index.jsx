const React = require('react');
const NavItem = require('../comps/navbarItem.jsx')
module.exports = ({ user }) => {
    let log = {
        URL: '/login',
        text: 'Login'
    };
    if(user) log = {
        URL: '/logout',
        text: user.username
    }
    return (
<html>
<head>
  
  <meta charset="UTF-8"/>
  <meta http-Equiv="X-UA-Compatible" content="IE=edge"/>
  
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
  <link rel="shortcut icon" href="https://discord.brine-codes.repl.co/assets/images/logo.png" type="image/x-icon"/>
  
  
  <title>Home</title>
  <link rel="stylesheet" href='https://discord.brine-codes.repl.co/assets/web/https://discord.brine-codes.repl.co/assets/mobirise-icons2/mobirise2.css'/>
  <link rel="stylesheet" href="https://discord.brine-codes.repl.co/assets/web/https://discord.brine-codes.repl.co/assets/mobirise-icons-bold/mobirise-icons-bold.css"/>
  <link rel="stylesheet" href="https://discord.brine-codes.repl.co/assets/bootstrap/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="https://discord.brine-codes.repl.co/assets/bootstrap/css/bootstrap-grid.min.css"/>
  <link rel="stylesheet" href="https://discord.brine-codes.repl.co/assets/bootstrap/css/bootstrap-reboot.min.css"/>
  <link rel="stylesheet" href="https://discord.brine-codes.repl.co/assets/parallax/jarallax.css"/>
  <link rel="stylesheet" href="https://discord.brine-codes.repl.co/assets/dropdown/css/style.css"/>
  <link rel="stylesheet" href="https://discord.brine-codes.repl.co/assets/socicon/css/styles.css"/>
  <link rel="stylesheet" href="https://discord.brine-codes.repl.co/assets/theme/css/style.css"/>
  <link rel="preload" href="https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap"/></noscript>
  <link rel="preload" as="style" href="https://discord.brine-codes.repl.co/assets/mobirise/css/mbr-additional.css"/>
  <link rel="stylesheet" href="https://discord.brine-codes.repl.co/assets/mobirise/css/mbr-additional.css" type="text/css"/>
</head>
<body>
  
  <section data-bs-version="5.1" class="menu cid-s48OLK6784" once="menu" id="menu1-1z">
    
    <nav class="navbar navbar-dropdown navbar-expand-lg">
        <div class="container-fluid">
            <div class="navbar-brand">
                
                <span class="navbar-caption-wrap"><a class="navbar-caption text-black text-primary display-7" href="/">[/]Brine</a></span>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                    <NavItem spanClassList='socicon socicon-discord mbr-iconfont mbr-iconfont-btn' aHref={'/discord'}></NavItem>
                    <NavItem spanClassList='mobi-mbri mobi-mbri-plus mbr-iconfont mbr-iconfont-btn' aHref={'/invite'}></NavItem>
                    <NavItem spanClassList='mobi-mbri mobi-mbri-plus mbr-iconfont mbr-iconfont-btn' aHref={'/invite'}></NavItem>
                    <NavItem aHref={log.URL}>{log.text}</NavItem>
                </ul>
            </div>
        </div>
    </nav>

</section>

<section data-bs-version="5.1" class="header2 cid-sT38IELAQN mbr-fullscreen mbr-parallax-background" id="header2-1j">

    

    <div class="mbr-overlay" style="opacity: 0.8; background-color: rgb(255, 255, 255);"></div>

    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-12">
                <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>Advanced Discord Bot</strong></h1>
                
                <p class="mbr-text mbr-fonts-style display-7">[/]Brine Is A Awesome Advanced Discord Bot Which Created By Brine,<br/>It Have Not Quite Nitro ,You Can Call It Not Quite Brine ;)<br/>Global Chat Which Allows User To Chat Between Multiple Guilds&nbsp;<br/>Chat Bot To Chat When Bored And Suggestion System With Buttons</p>
                <div class="mbr-section-btn mt-3"><a class="btn btn-success display-4" href="/invite">Add To Server</a>
                    <a class="btn btn-success-outline display-4" href="/cmds">View Commands</a></div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="image3 cid-sT39qm6WSa" id="image3-1k">
    

    

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-10">
                <div class="image-wrapper">
                    <a href="https://cdn.discordapp.com/attachments/877111922070257694/925674582801809448/Capture.PNG">
                        <img src="https://discord.brine-codes.repl.co/assets/images/capture-1-526x403.png" alt="Advanced Help Command With Menu"/></a>
                    <p class="mbr-description mbr-fonts-style mt-2 align-center display-7"><strong>Advanced Help Command</strong></p>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="image1 cid-sT3ar4ahHX" id="image1-1m">
    

    <div class="mbr-overlay" style="opacity: 0.7; background-color: rgb(255, 255, 255);">
    </div>

    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 col-lg-6">
                <div class="image-wrapper">
                    <img src="https://discord.brine-codes.repl.co/assets/images/223ced836bcc4698dea227e8db470e4a-658x658.png" alt="Brine"/>
                    
                </div>
            </div>
            <div class="col-12 col-lg">
                <div class="text-wrapper">
                    <h3 class="mbr-section-title mbr-fonts-style mb-3 display-5">
                        <strong>About Us</strong></h3>
                    <p class="mbr-text mbr-fonts-style display-7">
                        A Minecraft Player With Age Of Thirteen Went Out Of Minecraft And Started Learning Coding For Fun And Found A Social App Named Discord Which Was Perfect To Show Everyone A Advanced Discord Bot Which Was Coded To Help People Growing &amp; Making Their Server Better And Better.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="image2 cid-sT3bQXT3N3" id="image2-1n">
    

    

    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 col-lg-6">
                <div class="image-wrapper">
                    <img src="https://discord.brine-codes.repl.co/assets/images/capture-303x282.png" alt=""/>
                    
                </div>
            </div>
            <div class="col-12 col-lg">
                <div class="text-wrapper">
                    <h3 class="mbr-section-title mbr-fonts-style mb-3 display-5">
                        <strong>Chat Bot</strong></h3>
                    <p class="mbr-text mbr-fonts-style display-7">A Advanced Chat Bot Which Have Human Brain Like Code And Answers To User By It,<br/>It Always Does Non Toxic Chat To User And Avoids And Messages Which Contain A Bad Word And If User Tries To Make Bot Mention Someone Or Some Role, Its Not Going To Happen.<br/><br/></p>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="image1 cid-sT3eftCGJV" id="image1-1o">
    

    

    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 col-lg-6">
                <div class="image-wrapper">
                    <img src="https://discord.brine-codes.repl.co/assets/images/capture-250x214.png" alt=""/>
                    
                </div>
            </div>
            <div class="col-12 col-lg">
                <div class="text-wrapper">
                    <h3 class="mbr-section-title mbr-fonts-style mb-3 display-5"><strong>Not Quite Nitro</strong></h3>
                    <p class="mbr-text mbr-fonts-style display-7">
                        Oh Yea, We Also Have Not Quite Nitro Feature,If You Don't Know About It,It's A System Which Finds Emoji From Guild And Match What User Is Trying To Send,<br/>For Example You Type :tick: Bot Will Find Emoji From The Guild And Send The Emoji Using A Webhook With User's Name And Avatar But What If Emoji Is Not In Guild?<br/>Bot Will Find That Emoji In All Of Guilds Of Bot And If Emoji Is Still Not Found It Stops,<br/>How You Gonna Find Emoji From All Servers?<br/>There's A Slash Command With Name Emoji Which Can Be Used To Find Emoji From All Of Bot's Server</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="image1 cid-sT3l5SCX63" id="image1-1q">
    

    

    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 col-lg-6">
                <div class="image-wrapper">
                    <img src="https://discord.brine-codes.repl.co/assets/images/capture-401x209.png" alt=""/>
                    
                </div>
            </div>
            <div class="col-12 col-lg">
                <div class="text-wrapper">
                    <h3 class="mbr-section-title mbr-fonts-style mb-3 display-5"><strong>Ticket System</strong></h3>
                    <p class="mbr-text mbr-fonts-style display-7">A Advanced Ticket System With Buttons For Your Server Members With Fully&nbsp;Personalization Support,<br/>Which Have Ticket Close Logs,Ticket Transcripts.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="image2 cid-sT3gXQrFsD" id="image2-1p">
    

    

    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 col-lg-6">
                <div class="image-wrapper">
                    <img src="https://discord.brine-codes.repl.co/assets/images/capture-289x257.png" alt=""/>
                    
                </div>
            </div>
            <div class="col-12 col-lg">
                <div class="text-wrapper">
                    <h3 class="mbr-section-title mbr-fonts-style mb-3 display-5"><strong>Global Chat</strong></h3>
                    <p class="mbr-text mbr-fonts-style display-7">Global Chat Is A Feature Which Allows User To Chat Which Global Users With Out Any Problem But What If A User Mentions A Channel,Role Or User?<br/>Bot Have A Feature To Control Such Feature To Handle This,Bot Will Simply Change Mention With Discord Single Line Code Blocks And Mention Name.<br/></p>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="contacts1 cid-sT3mHyLIKi" id="contacts1-1r">

    

    <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
    </div>
    <div class="container">
        <div class="mbr-section-head">
            <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Contacts</strong>
            </h3>
            
        </div>
        <div class="row justify-content-center mt-4">
            <div class="card col-12 col-lg-6">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="image-wrapper">
                            <span class="mbr-iconfont socicon-discord socicon"></span>
                        </div>
                        <h4 class="card-title mbr-fonts-style mb-2 display-2"><strong><a href="/discord" class="text-primary">Discord</a></strong></h4>
                        
                        
                    </div>
                </div>
            </div>
            <div class="card col-12 col-lg-6">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <div class="image-wrapper">
                            <span class="mbr-iconfont mbrib-github"></span>
                        </div>
                        <h4 class="card-title mbr-fonts-style align-center mb-2 display-2"><strong><a href="https://github.com/BrinePlayz" class="text-primary" target="_blank">Github</a></strong></h4>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="footer7 cid-sT3nxAavOZ" once="footers" id="footer7-1s">

    

    

    <div class="container">
        <div class="media-container-row align-center mbr-white">
            <div class="col-12">
                <p class="mbr-text mb-0 mbr-fonts-style display-7">A Website By Brine</p>
            </div>
        </div>
    </div>
</section><section id="top-1" hidden><a href="https://mobirise.site"></a></section><script src="https://discord.brine-codes.repl.co/assets/bootstrap/js/bootstrap.bundle.min.js"></script>  <script src="https://discord.brine-codes.repl.co/assets/parallax/jarallax.js"></script>  <script src="https://discord.brine-codes.repl.co/assets/smoothscroll/smooth-scroll.js"></script>  <script src="https://discord.brine-codes.repl.co/assets/ytplayer/index.js"></script>  <script src="https://discord.brine-codes.repl.co/assets/dropdown/js/navbar-dropdown.js"></script>  <script src="https://discord.brine-codes.repl.co/assets/theme/js/script.js"></script>  
</body>
</html>
    )
}