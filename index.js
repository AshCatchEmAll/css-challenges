function createCard(
  title,
  time,
  footer,
  backgroundImage,
  backgroundColor,
  tag
) {
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");
  var p4 = document.createElement("p");
  div1.className = "time-cards";
  div1.style.gridArea = tag;
  div1.style.backgroundImage = backgroundImage;
  div1.style.backgroundColor = backgroundColor;
  div2.className = "card-content-container";
  div3.className = "card-content";
  p1.className = "card-title";
  p2.className = "card-time";
  p3.className = "card-footer";
  p4.className = "card-menu";
  p1.innerHTML = title;
  p2.innerHTML = time;
  p3.innerHTML = footer;
  p4.innerHTML = "⋯"
  div3.appendChild(p1);
  div3.appendChild(p2);
  div3.appendChild(p3);
  div2.appendChild(p4);
  div2.appendChild(div3);
  div1.appendChild(div2);
  return div1;
}


document.addEventListener(
  "DOMContentLoaded",
  function () {

    var doc = document.getElementsByClassName("grid-container");
    doc[0].appendChild(
      createCard(
        "Work",
        "32hrs",
        "Last Week - 36hrs",
        'url("./images/icon-work.svg")',
        "hsl(15, 100%, 70%)",
        "work"
      )
    );
    doc[0].appendChild(createCard("Play", "10hrs", "Last Week - 8hrs", 'url("./images/icon-play.svg")',
    "hsl(195, 74%, 62%)","play"));
    doc[0].appendChild(createCard("Study", "4hrs", "Last Week - 7hrs", 'url("./images/icon-study.svg")',
    "hsl(348, 100%, 68%)","study"));
    doc[0].appendChild(createCard("Exercise", "4hrs", "Last Week - 5hrs", 'url("./images/icon-exercise.svg")',
    "hsl(145, 58%, 55%)","exercise"));
    doc[0].appendChild(createCard("Social", "5hrs", "Last Week - 10hrs",'url("./images/icon-social.svg")',
    "hsl(264, 64%, 52%)","social"));
    doc[0].appendChild(createCard("Self Care", "2hrs", "Last Week - 2hrs",'url("./images/icon-self-care.svg")',
    "hsl(43, 84%, 65%)","selfcare"));


   
  },
  false
);
