function googleTranslateElementInit() {

new google.translate.TranslateElement(
{
pageLanguage: 'hi'
},
'google_translate_element'
);

}

var script = document.createElement("script");

script.src =
"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

document.body.appendChild(script);