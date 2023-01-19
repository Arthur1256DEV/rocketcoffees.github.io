function addStyle() {
    const mobileNone = new CSSStyleSheet();
    const buttonActive = new CSSStyleSheet();
    const backgroundNormal = new CSSStyleSheet();
    const revelNav = new CSSStyleSheet();
    const StyleA = new CSSStyleSheet();

    mobileNone.insertRule(`.mobileNone, .buttonMobile{
        display: none;
    }`)

    buttonActive.insertRule(`.buttonMobileClose{
        display: initial;
    }`)

    backgroundNormal.insertRule(`body{
        background-image: none;
    }`)

    revelNav.insertRule(`.mobilenav, newnav{
        display: initial;
    }`)
    

    //Mexer com o StyleA

    document.adoptedStyleSheets = [mobileNone, buttonActive, backgroundNormal, revelNav, StyleA]
}


function remStyle() {
    const mobileNone = new CSSStyleSheet();
    const buttonActive = new CSSStyleSheet();
    const backgroundNormal = new CSSStyleSheet();


    mobileNone.insertRule(`.mobileNone, .buttonMobile{
        display: initial;
    }`)

    buttonActive.insertRule(`.buttonMobileClose{
        display: none;
    }`)

    backgroundNormal.insertRule(`body{
        background-image: url("./assets/blur-mobile.png");
    }`)

    

    document.adoptedStyleSheets = [mobileNone, buttonActive, backgroundNormal]
}