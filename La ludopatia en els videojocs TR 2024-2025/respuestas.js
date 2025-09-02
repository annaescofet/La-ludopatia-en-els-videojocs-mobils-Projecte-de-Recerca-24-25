function resultado() {
    var p1=0, p2=0, p3=0, p4=0, p5=0, p6=0, p7=0, p8=0, nota;

    // 1a pregunta
    if (document.getElementById('p11').checked) { p1 += 1; }
    if (document.getElementById('p12').checked) { p1 += 0.5; }

    // 2a pregunta
    if (document.getElementById('p21').checked) { p2 += 1; }
    if (document.getElementById('p22').checked) { p2 += 0.5; }

    // 3a pregunta
    if (document.getElementById('p31').checked) { p3 += 1; }
    if (document.getElementById('p33').checked) { p3 += 0.5; }

    // 4a pregunta
    if (document.getElementById('p42').checked) { p4 += 1; }
    if (document.getElementById('p41').checked) { p4 += 0.5; }

    // 5a pregunta
    if (document.getElementById('p55').checked) { p5 += 1; }
    if (document.getElementById('p51').checked) { p5 += 0.5; }

    // 6a pregunta
    if (document.getElementById('p61').checked) { p6 += 1; }
    if (document.getElementById('p62').checked) { p6 += 0.5; }

    // 7a pregunta
    if (document.getElementById('p71').checked) { p7 += 1; }
    if (document.getElementById('p77').checked) { p7 += 0.5; }

    // 8a pregunta
    if (document.getElementById('p82').checked) { p8 += 1; }
    if (document.getElementById('p83').checked) { p8 += 0.5; }

    nota = p1+p2+p3+p4+p5+p6+p7+p8;

   if (nota >= 5.5) {
    window.location = 'resultados6.html?nota=' + nota;
} else if (nota >=3) {
    window.location = 'resultados4.html?nota=' + nota;

} else {
    window.location = 'resultados0.html?nota=' + nota;
}

}