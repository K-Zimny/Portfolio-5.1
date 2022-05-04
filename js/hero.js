// Hero items brought into const

$(document).ready(function () {
  console.log("ready!");

  //   const heroItem1 = $("jsHeroItem1 >");
  //   const heroItem2 = document.getElementById("jsHeroItem2");
  //   const heroItem3 = document.getElementById("jsHeroItem3");
  //   const heroItem4 = document.getElementById("jsHeroItem4");
  //   const heroItem5 = document.getElementById("jsHeroItem5");
  //   const heroItem6 = document.getElementById("jsHeroItem6");
  //   const heroItem7 = document.getElementById("jsHeroItem7");
  //   const heroItem8 = document.getElementById("jsHeroItem8");

  const heroItem1 = document.getElementById("jsHeroItem1");
  const heroItem2 = document.getElementById("jsHeroItem2");
  const heroItem3 = document.getElementById("jsHeroItem3");
  const heroItem4 = document.getElementById("jsHeroItem4");
  const heroItem5 = document.getElementById("jsHeroItem5");
  const heroItem6 = document.getElementById("jsHeroItem6");
  const heroItem7 = document.getElementById("jsHeroItem7");
  const heroItem8 = document.getElementById("jsHeroItem8");

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
  //   heroItem1.addEventListener("mouseenter", function () {
  //     $(heroItemEffect1)
  //       .animate
  //       //   {
  //       //     height: 300,
  //       //   },
  //       //   500
  //       ();

  //     // $(heroItem1).animate(
  //     //   {
  //     //     bottom: 50,
  //     //     // height: -700,
  //     //   },
  //     //   500
  //     // );
  //     $([
  //       heroItem2,
  //       heroItem3,
  //       heroItem4,
  //       heroItem5,
  //       heroItem6,
  //       heroItem7,
  //       heroItem8,
  //     ]).animate(
  //       {
  //         bottom: -50,
  //       },
  //       500
  //     );
  //   });

  //   heroItem1.addEventListener("mouseleave", function () {
  //     $(heroItemEffect1).animate(
  //       {
  //         height: 0,
  //       },
  //       500
  //     );

  //     $(heroItem1).animate(
  //       {
  //         bottom: 0,
  //         height: 200,
  //       },
  //       500
  //     );

  //     $([
  //       heroItem2,
  //       heroItem3,
  //       heroItem4,
  //       heroItem5,
  //       heroItem6,
  //       heroItem7,
  //       heroItem8,
  //     ]).animate(
  //       {
  //         bottom: 0,
  //       },
  //       500
  //     );
  //   });

  //hero item2

  heroItem2.addEventListener("mouseenter", function () {
    $(heroItem2).animate(
      {
        bottom: 50,
      },
      50
    );
    var itemRandom = Math.floor(Math.random() * 50) + -100;
    $(heroItem1).animate(
      {
        bottom: itemRandom,
      },
      71
    );
    var itemRandom3 = Math.floor(Math.random() * 50) + -75;
    $(heroItem3).animate(
      {
        bottom: itemRandom3,
      },
      90
    );
    var itemRandom4 = Math.floor(Math.random() * 50) + -25;
    $(heroItem4).animate(
      {
        bottom: itemRandom4,
      },
      100
    );
    $(heroItem5).animate(
      {
        bottom: -10,
      },
      55
    );
    $(heroItem6).animate(
      {
        bottom: -52,
      },
      68
    );

    $(heroItem7).animate(
      {
        bottom: -51,
      },
      100
    );

    $(heroItem8).animate(
      {
        bottom: -40,
      },
      100
    );
  });

  heroItem2.addEventListener("mouseleave", function () {
    $(heroItem2).animate(
      {
        bottom: 0,
      },
      250
    );
    $([
      heroItem1,
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
      150
    );
  });

  //hero item3

  heroItem3.addEventListener("mouseenter", function () {
    $(heroItem3).animate(
      {
        bottom: 50,
      },
      50
    );
    var itemRandom = Math.floor(Math.random() * 50) + -100;
    $(heroItem1).animate(
      {
        bottom: itemRandom,
      },
      31
    );
    var itemRandom3 = Math.floor(Math.random() * 50) + -75;
    $(heroItem2).animate(
      {
        bottom: itemRandom3,
      },
      10
    );
    var itemRandom4 = Math.floor(Math.random() * 50) + -25;
    $(heroItem4).animate(
      {
        bottom: itemRandom4,
      },
      50
    );
    var itemRandom5 = Math.floor(Math.random() * 50) + -78;

    $(heroItem5).animate(
      {
        bottom: itemRandom5,
      },
      93
    );
    var itemRandom6 = Math.floor(Math.random() * 50) + -86;

    $(heroItem6).animate(
      {
        bottom: itemRandom6,
      },
      45
    );
    var itemRandom7 = Math.floor(Math.random() * 50) + -5;

    $(heroItem7).animate(
      {
        bottom: itemRandom7,
      },
      53
    );
    var itemRandom8 = Math.floor(Math.random() * 50) + -1;

    $(heroItem8).animate(
      {
        bottom: itemRandom8,
      },
      78
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
    ]).animate(
      {
        bottom: 0,
      },
      0
    );
  });

  //hero item4

  heroItem4.addEventListener("mouseenter", function () {
    $(heroItem3).animate(
      {
        bottom: 50,
      },
      500
    );
    var itemRandom = Math.floor(Math.random() * 50) + -24;
    $(heroItem1).animate(
      {
        bottom: itemRandom,
      },
      71
    );
    var itemRandom3 = Math.floor(Math.random() * 50) + -68;
    $(heroItem2).animate(
      {
        bottom: itemRandom3,
      },
      90
    );
    var itemRandom4 = Math.floor(Math.random() * 50) + -95;
    $(heroItem4).animate(
      {
        bottom: itemRandom4,
      },
      100
    );
    var itemRandom5 = Math.floor(Math.random() * 50) + -69;

    $(heroItem5).animate(
      {
        bottom: itemRandom5,
      },
      55
    );
    var itemRandom6 = Math.floor(Math.random() * 50) + -46;

    $(heroItem6).animate(
      {
        bottom: itemRandom6,
      },
      68
    );
    var itemRandom7 = Math.floor(Math.random() * 50) + -84;

    $(heroItem7).animate(
      {
        bottom: itemRandom7,
      },
      100
    );
    var itemRandom8 = Math.floor(Math.random() * 50) + -16;

    $(heroItem8).animate(
      {
        bottom: itemRandom8,
      },
      100
    );
  });

  heroItem4.addEventListener("mouseleave", function () {
    $(heroItem4).animate(
      {
        bottom: 0,
      },
      0
    );
  });

  //hero item5

  heroItem5.addEventListener("mouseenter", function () {
    $(heroItem5).animate(
      {
        bottom: 50,
      },
      500
    );
  });

  heroItem5.addEventListener("mouseleave", function () {
    $(heroItem5).animate(
      {
        bottom: 0,
      },
      500
    );
  });

  //hero item6

  heroItem6.addEventListener("mouseenter", function () {
    $(heroItem6).animate(
      {
        bottom: 50,
      },
      500
    );
  });

  heroItem6.addEventListener("mouseleave", function () {
    $(heroItem6).animate(
      {
        bottom: 0,
      },
      500
    );
  });

  //hero item7

  heroItem7.addEventListener("mouseenter", function () {
    $(heroItem7).animate(
      {
        bottom: 50,
      },
      500
    );
  });

  heroItem7.addEventListener("mouseleave", function () {
    $(heroItem7).animate(
      {
        bottom: 0,
      },
      500
    );
  });

  //hero item8

  heroItem8.addEventListener("mouseenter", function () {
    $(heroItem8).animate(
      {
        bottom: 50,
      },
      500
    );
  });

  heroItem8.addEventListener("mouseleave", function () {
    $(heroItem8).animate(
      {
        bottom: 0,
      },
      500
    );
  });
});
