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
  heroItem1.addEventListener("mouseenter", function () {
    $(heroItemEffect1).animate(
      {
        height: 300,
      },
      500
    );

    $(heroItem1).animate(
      {
        bottom: 50,
        // height: -700,
      },
      500
    );
    $([
      heroItem2,
      heroItem3,
      heroItem4,
      heroItem5,
      heroItem6,
      heroItem7,
      heroItem8,
    ]).animate(
      {
        bottom: -50,
      },
      500
    );
  });

  heroItem1.addEventListener("mouseleave", function () {
    $(heroItemEffect1).animate(
      {
        height: 0,
      },
      500
    );

    $(heroItem1).animate(
      {
        bottom: 0,
        height: 200,
      },
      500
    );

    $([
      heroItem2,
      heroItem3,
      heroItem4,
      heroItem5,
      heroItem6,
      heroItem7,
      heroItem8,
    ]).animate(
      {
        bottom: 0,
      },
      500
    );
  });

  //hero item2

  heroItem2.addEventListener("mouseenter", function () {
    $(heroItem2).animate(
      {
        bottom: -50,
      },
      500
    );
  });

  heroItem2.addEventListener("mouseleave", function () {
    $(heroItem2).animate(
      {
        bottom: 0,
      },
      500
    );
  });

  //hero item3

  heroItem3.addEventListener("mouseenter", function () {
    $(heroItem3).animate(
      {
        bottom: -50,
      },
      500
    );
  });

  heroItem3.addEventListener("mouseleave", function () {
    $(heroItem3).animate(
      {
        bottom: 0,
      },
      500
    );
  });

  //hero item4

  heroItem4.addEventListener("mouseenter", function () {
    $(heroItem4).animate(
      {
        bottom: -50,
      },
      500
    );
  });

  heroItem4.addEventListener("mouseleave", function () {
    $(heroItem4).animate(
      {
        bottom: 0,
      },
      500
    );
  });

  //hero item5

  heroItem5.addEventListener("mouseenter", function () {
    $(heroItem5).animate(
      {
        bottom: -50,
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
        bottom: -50,
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
        bottom: -50,
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
        bottom: -50,
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
