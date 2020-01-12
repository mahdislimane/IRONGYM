// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC6l9mHrhKc-dnO4Mmii1PTNFcqBywj56U",
  authDomain: "projet1-870e6.firebaseapp.com",
  databaseURL: "https://projet1-870e6.firebaseio.com",
  projectId: "projet1-870e6",
  storageBucket: "projet1-870e6.appspot.com",
  messagingSenderId: "155845437386",
  appId: "1:155845437386:web:2d5e7d61b62a0049b5d133",
  measurementId: "G-1RC3N6JM77"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let database = firebase.database();
let imcRef = database.ref("imc");
let abonn = database.ref("abonnement");
var p;
var t;
var a;
var ig;
var im;
var indicemass;
var indicegras;
var gen = "";
var ab = 0;

function homme() {
  document.getElementById("homme").style.borderStyle = "inset";
  document.getElementById("femme").style.borderStyle = "outset";
  document.getElementById("homme").style.backgroundColor = "rgb(56, 56, 56)";
  document.getElementById("femme").style.backgroundColor = "white";
  document.getElementById("homme").style.color = "white";
  document.getElementById("femme").style.color = "rgb(56, 56, 56)";
  gen = 1;
}
function femme() {
  document.getElementById("homme").style.borderStyle = "outset";
  document.getElementById("femme").style.borderStyle = "inset";
  document.getElementById("femme").style.backgroundColor = "rgb(56, 56, 56)";
  document.getElementById("homme").style.backgroundColor = "white";
  document.getElementById("femme").style.color = "white";
  document.getElementById("homme").style.color = "rgb(56, 56, 56)";
  gen = 0;
}
function imc() {
  p = document.getElementById("poid").value;
  t = document.getElementById("taille").value;
  a = document.getElementById("age").value;
  im = p / (t * t);
  indicemass = Math.round(im * 100) / 100;
  ig = 1.2 * indicemass + 0.23 * a - 10.8 * gen - 5.4;
  indicegras = Math.round(ig * 100) / 100;
  let imcdata = {
    name: document.getElementById("name").value,
    prename: document.getElementById("prename").value,
    email: document.getElementById("email").value,
    age: document.getElementById("age").value,
    taille: document.getElementById("taille").value,
    poid: document.getElementById("poid").value,
    Imc: indicemass,
    Img: indicegras
  };
  if (document.getElementById("name").value == "") {
    return alert("Veuillez saisir votre nom");
  } else if (document.getElementById("prename").value == "") {
    return alert("Veuillez saisir votre prénom");
  } else if (document.getElementById("email").value == "") {
    return alert("Veuillez saisir votre e-mail");
  } else if (document.getElementById("age").value == "") {
    return alert("Veuillez saisir votre age");
  } else if (document.getElementById("taille").value == "") {
    return alert("Veuillez saisir votre taille en m");
  } else if (document.getElementById("poid").value == "") {
    return alert("Veuillez saisir votre poid en kg");
  } else if ((gen = "")) {
    return alert("Veuillez choisir votre genre");
  } else if (document.getElementById("taille").value > 10) {
    return alert("Veuillez saisir votre taille en m");
  } else if (document.getElementById("age").value > 150) {
    return alert("Veuillez saisir votre age");
  } else if (document.getElementById("poid").value > 1000) {
    return alert("Veuillez saisir votre poid en kg");
  } else {
    return (
      imcRef.push(imcdata),
      (document.getElementById("result").innerHTML = indicemass),
      (document.getElementById("resultimg").innerHTML = indicegras + " %"),
      (document.getElementById("result").style.display = "flex"),
      (document.getElementById("imgimc").style.display = "flex"),
      (document.getElementById("resultimg").style.display = "flex"),
      (document.getElementById("imgimg").style.display = "flex"),
      (document.getElementById("bret").style.display = "flex"),
      (document.getElementById("submit2").style.display = "none")
    );
  }
}
function col1() {
  p = document.getElementById("poid").value;
  t = document.getElementById("taille").value;
  a = document.getElementById("age").value;
  im = p / (t * t);
  indicemass = Math.round(im * 100) / 100;
  ig = 1.2 * indicemass + 0.23 * a - 10.8 * gen - 5.4;
  indicegras = Math.round(ig * 100) / 100;
  if (im > 40) {
    return (document.getElementById("result").style.backgroundColor =
      "rgb(198, 10, 51)");
  } else if ((im < 40, im >= 30)) {
    return (document.getElementById("result").style.backgroundColor =
      "rgb(189, 86, 2)");
  } else if ((im < 30, im >= 25)) {
    return (document.getElementById("result").style.backgroundColor =
      "rgb(247, 126, 29)");
  } else if ((im < 25, im >= 18.5)) {
    return (document.getElementById("result").style.backgroundColor =
      "rgb(11, 151, 198)");
  } else if (im < 18.5) {
    return (document.getElementById("result").style.backgroundColor =
      "rgb(193, 211, 228)");
  } else {
    return (document.getElementById("result").style.backgroundColor = "white");
  }
}
function refer() {
  window.location.href = "imc.html";
}
function refer1() {
  window.location.href = "hystory.html";
}
function transition1() {
  document.getElementById("image1").style.transition = "1s";
  document.getElementById("image1").style.marginLeft = "-60px";
}
function transition2(i) {
  document.getElementById("image" + i).style.transition = "0.5s";
  document.getElementById("image" + i).style.width = "105%";
  document.getElementById("image" + i).style.borderRadius = "30px";
}
function transition3(i) {
  document.getElementById("image" + i).style.transition = "0.5s";
  document.getElementById("image" + i).style.width = "100%";
  document.getElementById("image" + i).style.borderRadius = "5px";
}
function nouveau() {
  window.location.href = "index.html";
}
function prix() {
  window.location.href = "prix.html";
}
function carte() {
  window.location.href = "contact.html";
}
function abdo() {
  window.location.href = "abdo.html";
}
function av() {
  window.location.href = "av.html";
}
function bi() {
  window.location.href = "bi.html";
}
function dos() {
  window.location.href = "dos.html";
}
function ep() {
  window.location.href = "ep.html";
}
function jambe() {
  window.location.href = "jambe.html";
}
function pec() {
  window.location.href = "pec.html";
}
function tri() {
  window.location.href = "tri.html";
}
function IMC() {
  window.location.href = "imc.html";
}
function hyst() {
  window.location.href = "hystory.html";
}
function history() {
  imcRef.on("value", function gotdata(data) {
    data = data.val();
    let keys = Object.keys(data);
    var c = [];
    c[0] = 0;
    c[1] = 0;
    c[2] = 0;
    c[3] = 0;
    c[4] = 0;
    var g = [];
    g[0] = 0;
    g[1] = 0;
    g[2] = 0;
    g[3] = 0;
    g[4] = 0;
    var verif = 0;
    for (let i = 0; i < keys.length; i++) {
      if (data[keys[i]].email == document.getElementById("emailh").value) {
        c[i] = data[keys[i]].Imc;
        g[i] = data[keys[i]].Img;
        verif = 1;
      }
    }
    if ((verif = 0)) {
      return alert("L'e-mail n'éxiste pas");
    }

    if (c.length >= 5) {
      c.splice(0, c.length - 5);
    }
    for (let i = 0; i < 4 - c.length; i++) {
      document.getElementById("imc" + (i + 1)).style.display = "none";
    }

    if (g.length >= 5) {
      g.splice(0, g.length - 5);
    }
    for (let i = 0; i < 5; i++) {
      if (!c[i] == true) {
        document.getElementById("imc" + (i + 1)).style.display = "none";
      }
    }
    for (let i = 0; i < 5; i++) {
      if (!g[i] == true) {
        document.getElementById("img" + (i + 1)).style.display = "none";
      }
    }

    return (
      (document.getElementById("imc1").innerHTML = c[0]),
      (document.getElementById("imc2").innerHTML = c[1]),
      (document.getElementById("imc3").innerHTML = c[2]),
      (document.getElementById("imc4").innerHTML = c[3]),
      (document.getElementById("imc5").innerHTML = c[4]),
      (document.getElementById("img1").innerHTML = g[0] + "%"),
      (document.getElementById("img2").innerHTML = g[1] + "%"),
      (document.getElementById("img3").innerHTML = g[2] + "%"),
      (document.getElementById("img4").innerHTML = g[3] + "%"),
      (document.getElementById("img5").innerHTML = g[4] + "%"),
      (document.getElementById("hystoriqueimc").style.display = "flex"),
      (document.getElementById("imgimc").style.display = "flex"),
      (document.getElementById("hystoriqueimg").style.display = "flex"),
      (document.getElementById("imgimg").style.display = "flex"),
      (document.getElementById("bret1").style.display = "flex"),
      (document.getElementById("submit1").style.display = "none")
    );
  });
  for (let p = 0; p < 5; p++) {
    colc(p), colg(p);
  }
}
function colg(p) {
  imcRef.on("value", function gotdata(data) {
    data = data.val();
    let keys = Object.keys(data);
    var g = [];
    for (let i = 0; i < keys.length; i++) {
      if (data[keys[i]].email == document.getElementById("emailh").value) {
        g[i] = data[keys[i]].Img;
      }
    }

    if (g.length > 5) {
      g.splice(0, g.length - 5);
    }
    if (g[p] > 35) {
      return (
        (document.getElementById("img" + (p + 1)).style.backgroundColor =
          "#C60A33"),
        (document.getElementById("img" + (p + 1)).style.height =
          g[p] * 2 + "px")
      );
    } else if ((g[p] < 35, g[p] >= 25)) {
      return (
        (document.getElementById("img" + (p + 1)).style.backgroundColor =
          "#BD5602"),
        (document.getElementById("img" + (p + 1)).style.height =
          g[p] * 2 + "px")
      );
    } else if ((g[p] < 25, g[p] >= 15)) {
      return (
        (document.getElementById("img" + (p + 1)).style.backgroundColor =
          "#F77E1D"),
        (document.getElementById("img" + (p + 1)).style.height =
          g[p] * 2 + "px")
      );
    } else if ((g[p] < 15, g[p] >= 10)) {
      return (
        (document.getElementById("img" + (p + 1)).style.backgroundColor =
          "#0B97C6"),
        (document.getElementById("img" + (p + 1)).style.height =
          g[p] * 2 + "px")
      );
    } else if (g[p] < 10) {
      return (
        (document.getElementById("img" + (p + 1)).style.backgroundColor =
          "#C1D3E4"),
        (document.getElementById("img" + (p + 1)).style.height =
          g[p] * 2 + "px")
      );
    }
  });
}
function colc(p) {
  imcRef.on("value", function gotdata(data) {
    data = data.val();
    let keys = Object.keys(data);
    var c = [];

    for (let i = 0; i < keys.length; i++) {
      if (data[keys[i]].email == document.getElementById("emailh").value) {
        c[i] = data[keys[i]].Imc;
      }
    }
    if (c.length > 5) {
      c.splice(0, c.length - 5);
    }

    if (c[p] > 40) {
      return (
        (document.getElementById("imc" + (p + 1)).style.backgroundColor =
          "#C60A33"),
        (document.getElementById("imc" + (p + 1)).style.height =
          c[p] * 2 + "px")
      );
    } else if ((c[p] < 40, c[p] >= 30)) {
      return (
        (document.getElementById("imc" + (p + 1)).style.backgroundColor =
          "#BD5602"),
        (document.getElementById("imc" + (p + 1)).style.height =
          c[p] * 2 + "px")
      );
    } else if ((c[p] < 30, c[p] >= 25)) {
      return (
        (document.getElementById("imc" + (p + 1)).style.backgroundColor =
          "#F77E1D"),
        (document.getElementById("imc" + (p + 1)).style.height =
          c[p] * 2 + "px")
      );
    } else if ((c[p] < 25, c[p] >= 18.5)) {
      return (
        (document.getElementById("imc" + (p + 1)).style.backgroundColor =
          "#0B97C6"),
        (document.getElementById("imc" + (p + 1)).style.height =
          c[p] * 2 + "px")
      );
    } else if (c[p] < 18.5) {
      return (
        (document.getElementById("imc" + (p + 1)).style.backgroundColor =
          "#C1D3E4"),
        (document.getElementById("imc" + (p + 1)).style.height =
          c[p] * 2 + "px")
      );
    }
  });
}
function mouve() {
  document.getElementById("gif").style.transition = "1s";
  document.getElementById("gif").style.height = "60px";
}
function static() {
  document.getElementById("gif").style.transition = "1s";
  document.getElementById("gif").style.height = "50px";
}
$(document).ready(function() {
  $("#gif").hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $("#gif").show();
    } else {
      $("#gif").hide();
    }
  });
});
$(document).ready(function() {
  $(".exerc").click(function() {
    $(".exerc").toggle(),
      $(this).toggleClass("col-lg-4 col-sm-6"),
      $(this).toggle();
  });
});
$(document).ready(function() {
  $(".abonnement").click(function() {
    $(".abonnement")
      .addClass("unsetbut")
      .removeClass("setbut"),
      $(this)
        .addClass("setbut")
        .removeClass("unsetbut");
  });
});
function abonnement(a) {
  ab = 0;
  ab = a;
}
function envoyerab() {
  let abonnement = {
    name: document.getElementById("nomab").value,
    prename: document.getElementById("prenomab").value,
    num: document.getElementById("numab").value,
    abonnement: ab + " mois"
  };
  if (document.getElementById("nomab").value == "") {
    return alert("Veuillez saisir votre nom");
  } else if (document.getElementById("prenomab").value == "") {
    return alert("Veuillez saisir votre prénom");
  } else if (document.getElementById("numab").value == "") {
    return alert("Veuillez saisir votre numéro de téléphone");
  } else if ((ab = 0)) {
    return alert("Veuillez choisir votre abonnement");
  } else {
    return abonn.push(abonnement), prix();
  }
}
$(document).ready(function() {
  $("#submit1").click(function() {
    $("#hystopad").css("padding-top", "0px");
  });
});
