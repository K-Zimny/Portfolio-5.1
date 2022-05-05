// Hero items brought into const

$(document).ready(function () {
  console.log("ready!");

  const heroItem1 = document.getElementById("jsHeroItem1");
  const heroItem2 = document.getElementById("jsHeroItem2");
  const heroItem3 = document.getElementById("jsHeroItem3");
  const heroItem4 = document.getElementById("jsHeroItem4");
  const heroItem5 = document.getElementById("jsHeroItem5");
  const heroItem6 = document.getElementById("jsHeroItem6");
  const heroItem7 = document.getElementById("jsHeroItem7");
  const heroItem8 = document.getElementById("jsHeroItem8");
  const heroBg = document.getElementById("jsHero");

  const heroItemEffect1 = document.getElementById("jsHeroItemEffect1");
  //   const heroItem2 = document.getElementById("jsHeroItem2");
  //   const heroItem3 = document.getElementById("jsHeroItem3");
  //   const heroItem4 = document.getElementById("jsHeroItem4");
  //   const heroItem5 = document.getElementById("jsHeroItem5");
  //   const heroItem6 = document.getElementById("jsHeroItem6");
  //   const heroItem7 = document.getElementById("jsHeroItem7");
  //   const heroItem8 = document.getElementById("jsHeroItem8");

  //hero item color hover on btm effect

  //   hero item button depress and return

  //hero item 1

  heroItem1.addEventListener("mouseenter", function () {
    $(heroItem1).animate(
      {
        bottom: 125,
      },
      500,
      "swing"
    );
    var itemRandom = Math.floor(Math.random() * 50) + -100;
    $(heroItem2).animate(
      {
        bottom: 50,
      },
      712,
      "swing"
    );
    $(".hero__hero-display__item-effect").css("background:", "green");
    var itemRandom3 = Math.floor(Math.random() * 50) + -75;
    $(heroItem3).animate(
      {
        bottom: 0,
      },
      900,
      "swing"
    );
    var itemRandom4 = Math.floor(Math.random() * 50) + -25;
    $(heroItem4).animate(
      {
        bottom: 50,
      },
      1000,
      "swing"
    );
    $(heroItem5).animate(
      {
        bottom: -50,
      },
      556,
      "swing"
    );
    $(heroItem6).animate(
      {
        bottom: -100,
      },
      683,
      "swing"
    );

    $(heroItem7).animate(
      {
        bottom: 0,
      },
      1000,
      "swing"
    );

    $(heroItem8).animate(
      {
        bottom: -50,
      },
      900,
      "swing"
    );
  });

  heroItem2.addEventListener("mouseleave", function () {
    $(heroItem2)
      // .animate(
      //   {
      //     bottom: 0,
      //   },
      //   500
      // );
      .stop();
    $([
      heroItem1,
      heroItem3,
      heroItem5,
      heroItem4,
      heroItem6,
      heroItem7,
      heroItem8,
    ])
      // .animate(
      //   {
      //     bottom: 0,
      //   },
      //   200
      // );
      // .clearQueue();
      .stop();
  });

  //hero item2

  heroItem2.addEventListener("mouseenter", function () {
    $(heroItem2).animate(
      {
        bottom: 125,
      },
      500,
      "swing"
    );
    var itemRandom = Math.floor(Math.random() * 50) + -100;
    $(heroItem1).animate(
      {
        // bottom: itemRandom,
        bottom: 0,
      },
      712,
      "swing"
    );
    $(".hero__hero-display__item-effect").css("background:", "green");
    var itemRandom3 = Math.floor(Math.random() * 50) + -75;
    $(heroItem3).animate(
      {
        // bottom: itemRandom3,
        bottom: 0,
      },
      900,
      "swing"
    );
    var itemRandom4 = Math.floor(Math.random() * 50) + -25;
    $(heroItem4).animate(
      {
        // bottom: itemRandom4,
        bottom: -10,
      },
      1000,
      "swing"
    );
    $(heroItem5).animate(
      {
        bottom: -10,
        // bottom: -50,
      },
      556,
      "swing"
    );
    $(heroItem6).animate(
      {
        // bottom: -52,
        bottom: -10,
      },
      683,
      "swing"
    );

    $(heroItem7).animate(
      {
        bottom: 0,
      },
      1000,
      "swing"
    );

    $(heroItem8).animate(
      {
        bottom: 0,
      },
      900,
      "swing"
    );
  });

  heroItem2.addEventListener("mouseleave", function () {
    $(heroItem2)
      // .animate(
      //   {
      //     bottom: 0,
      //   },
      //   500
      // );
      .stop();
    $([
      heroItem1,
      heroItem3,
      heroItem5,
      heroItem4,
      heroItem6,
      heroItem7,
      heroItem8,
    ])
      // .animate(
      //   {
      //     bottom: 0,
      //   },
      //   200
      // );
      // .clearQueue();
      .stop();
  });

  //hero item3

  heroItem3.addEventListener("mouseenter", function () {
    $(heroItem3).animate(
      {
        bottom: 125,
      },
      500
    );
    var itemRandom = Math.floor(Math.random() * 50) + -100;
    $(heroItem1).animate(
      {
        bottom: -50,
      },
      712
    );
    var itemRandom3 = Math.floor(Math.random() * 50) + -75;
    $(heroItem2).animate(
      {
        bottom: 0,
      },
      900
    );
    var itemRandom4 = Math.floor(Math.random() * 50) + -25;
    $(heroItem4).animate(
      {
        bottom: -50,
      },
      1000
    );
    var itemRandom5 = Math.floor(Math.random() * 50) + -78;

    $(heroItem5).animate(
      {
        bottom: 0,
      },
      556
    );
    var itemRandom6 = Math.floor(Math.random() * 50) + -86;

    $(heroItem6).animate(
      {
        bottom: 15,
      },
      683
    );
    var itemRandom7 = Math.floor(Math.random() * 50) + -5;

    $(heroItem7).animate(
      {
        bottom: -50,
      },
      1000
    );
    var itemRandom8 = Math.floor(Math.random() * 50) + -1;

    $(heroItem8).animate(
      {
        bottom: 0,
      },
      1000
    );
  });

  heroItem3.addEventListener("mouseleave", function () {
    $([
      heroItem1,
      heroItem2,
      heroItem3,
      heroItem5,
      heroItem4,
      heroItem6,
      heroItem7,
      heroItem8,
    ])
      // .animate(
      //   {
      //     bottom: 0,
      //   },
      //   300
      // );
      .stop();
  });

  //hero item4

  heroItem4.addEventListener("mouseenter", function () {
    $(heroItem4).animate(
      {
        bottom: 125,
      },
      500
    );
    var itemRandom = Math.floor(Math.random() * 50) + -24;
    $(heroItem1).animate(
      {
        bottom: -75,
      },
      712
    );
    var itemRandom3 = Math.floor(Math.random() * 50) + -68;
    $(heroItem2).animate(
      {
        bottom: -100,
      },
      900
    );
    var itemRandom2 = Math.floor(Math.random() * 50) + -95;
    $(heroItem3).animate(
      {
        bottom: -125,
      },
      1000
    );
    var itemRandom5 = Math.floor(Math.random() * 50) + -69;

    $(heroItem5).animate(
      {
        bottom: 0,
      },
      556
    );
    var itemRandom6 = Math.floor(Math.random() * 50) + -46;

    $(heroItem6).animate(
      {
        bottom: -50,
      },
      683
    );
    var itemRandom7 = Math.floor(Math.random() * 50) + -84;

    $(heroItem7).animate(
      {
        bottom: 50,
      },
      1000
    );
    var itemRandom8 = Math.floor(Math.random() * 50) + -16;

    $(heroItem8).animate(
      {
        bottom: 0,
      },
      1000
    );
  });

  heroItem4.addEventListener("mouseleave", function () {
    $([
      heroItem1,
      heroItem2,
      heroItem3,
      heroItem5,
      heroItem4,
      heroItem6,
      heroItem7,
      heroItem8,
    ])
      // .animate(
      //   {
      //     bottom: 0,
      //   },
      //   250
      // );
      .stop();
  });

  //hero item5

  heroItem5.addEventListener("mouseenter", function () {
    $(heroItem5).animate(
      {
        bottom: 125,
      },
      500
    );
    var itemRandom = Math.floor(Math.random() * 50) + -24;
    $(heroItem1).animate(
      {
        bottom: -75,
      },
      712
    );
    var itemRandom3 = Math.floor(Math.random() * 50) + -68;
    $(heroItem2).animate(
      {
        bottom: -75,
      },
      900
    );
    var itemRandom4 = Math.floor(Math.random() * 50) + -95;
    $(heroItem4).animate(
      {
        bottom: -50,
      },
      1000
    );
    var itemRandom5 = Math.floor(Math.random() * 50) + -69;

    $(heroItem3).animate(
      {
        bottom: -75,
      },
      556
    );
    var itemRandom6 = Math.floor(Math.random() * 50) + -46;

    $(heroItem6).animate(
      {
        bottom: -50,
      },
      683
    );
    var itemRandom7 = Math.floor(Math.random() * 50) + -84;

    $(heroItem7).animate(
      {
        bottom: 0,
      },
      1000
    );
    var itemRandom8 = Math.floor(Math.random() * 50) + -16;

    $(heroItem8).animate(
      {
        bottom: 0,
      },
      1000
    );
  });

  heroItem5.addEventListener("mouseleave", function () {
    $([
      heroItem1,
      heroItem2,
      heroItem3,
      heroItem5,
      heroItem4,
      heroItem6,
      heroItem7,
      heroItem8,
    ])
      // .animate(
      //   {
      //     bottom: 0,
      //   },
      //   175
      // );
      .stop();
  });

  //hero item6

  heroItem6.addEventListener("mouseenter", function () {
    $(heroItem6).animate(
      {
        bottom: 125,
      },
      500
    );
    var itemRandom = Math.floor(Math.random() * 50) + -24;
    $(heroItem1).animate(
      {
        bottom: -125,
      },
      712
    );
    var itemRandom3 = Math.floor(Math.random() * 50) + -68;
    $(heroItem2).animate(
      {
        bottom: -75,
      },
      900
    );
    var itemRandom4 = Math.floor(Math.random() * 50) + -95;
    $(heroItem4).animate(
      {
        bottom: -50,
      },
      1000
    );
    var itemRandom5 = Math.floor(Math.random() * 50) + -69;

    $(heroItem3).animate(
      {
        bottom: -50,
      },
      556
    );
    var itemRandom6 = Math.floor(Math.random() * 50) + -46;

    $(heroItem5).animate(
      {
        bottom: 0,
      },
      683
    );
    var itemRandom7 = Math.floor(Math.random() * 50) + -84;

    $(heroItem7).animate(
      {
        bottom: 0,
      },
      1000
    );
    var itemRandom8 = Math.floor(Math.random() * 50) + -16;

    $(heroItem8).animate(
      {
        bottom: 50,
      },
      1000
    );
  });

  heroItem6.addEventListener("mouseleave", function () {
    $([
      heroItem1,
      heroItem2,
      heroItem3,
      heroItem5,
      heroItem4,
      heroItem6,
      heroItem7,
      heroItem8,
    ])
      // .animate(
      //   {
      //     bottom: 0,
      //   },
      //   235
      // );
      .stop();
  });

  //hero item7

  heroItem7.addEventListener("mouseenter", function () {
    $(heroItem7).animate(
      {
        bottom: 125,
      },
      500
    );
    var itemRandom = Math.floor(Math.random() * 50) + -24;
    $(heroItem1).animate(
      {
        bottom: -125,
      },
      712
    );
    var itemRandom3 = Math.floor(Math.random() * 50) + -68;
    $(heroItem2).animate(
      {
        bottom: -150,
      },
      900
    );
    var itemRandom4 = Math.floor(Math.random() * 50) + -95;
    $(heroItem4).animate(
      {
        bottom: -50,
      },
      1000
    );
    var itemRandom5 = Math.floor(Math.random() * 50) + -69;

    $(heroItem3).animate(
      {
        bottom: -200,
      },
      556
    );
    var itemRandom6 = Math.floor(Math.random() * 50) + -46;

    $(heroItem5).animate(
      {
        bottom: -50,
      },
      683
    );
    var itemRandom7 = Math.floor(Math.random() * 50) + -84;

    $(heroItem6).animate(
      {
        bottom: -100,
      },
      1000
    );
    var itemRandom8 = Math.floor(Math.random() * 50) + -16;

    $(heroItem8).animate(
      {
        bottom: 50,
      },
      1000
    );
  });

  heroItem7.addEventListener("mouseleave", function () {
    $([
      heroItem1,
      heroItem2,
      heroItem3,
      heroItem5,
      heroItem4,
      heroItem6,
      heroItem7,
      heroItem8,
    ])
      // .animate(
      //   {
      //     bottom: 0,
      //   },
      //   260
      // );
      .stop();
  });

  //hero item8

  heroItem8.addEventListener("mouseenter", function () {
    $(heroItem8).animate(
      {
        bottom: 125,
      },
      500
    );
    var itemRandom = Math.floor(Math.random() * 50) + -24;
    $(heroItem1).animate(
      {
        bottom: -200,
      },
      712
    );
    var itemRandom3 = Math.floor(Math.random() * 50) + -68;
    $(heroItem2).animate(
      {
        bottom: -150,
      },
      900
    );
    var itemRandom4 = Math.floor(Math.random() * 50) + -95;
    $(heroItem4).animate(
      {
        bottom: -50,
      },
      1000
    );
    var itemRandom5 = Math.floor(Math.random() * 50) + -69;

    $(heroItem3).animate(
      {
        bottom: -100,
      },
      556
    );
    var itemRandom6 = Math.floor(Math.random() * 50) + -46;

    $(heroItem5).animate(
      {
        bottom: -50,
      },
      683
    );
    var itemRandom7 = Math.floor(Math.random() * 50) + -84;

    $(heroItem6).animate(
      {
        bottom: -50,
      },
      1000
    );
    var itemRandom8 = Math.floor(Math.random() * 50) + -16;

    $(heroItem7).animate(
      {
        bottom: 50,
      },
      1000
    );
  });

  heroItem8.addEventListener("mouseleave", function () {
    $([
      heroItem1,
      heroItem2,
      heroItem3,
      heroItem5,
      heroItem4,
      heroItem6,
      heroItem7,
      heroItem8,
    ])
      // .animate(
      //   {
      //     bottom: 0,
      //   },
      //   225
      // );
      .stop();
  });

  heroBg.addEventListener("click", function () {
    $([
      heroItem1,
      heroItem2,
      heroItem3,
      heroItem5,
      heroItem4,
      heroItem6,
      heroItem7,
      heroItem8,
    ]).animate(
      {
        bottom: 0,
      },
      225
    );
  });
});
