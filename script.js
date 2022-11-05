function burger() {
  let orderBurger = "";
  let base = prompt(
    "ההמבורגר מגיע עם עגבניה, חסה וחמוצים. האם ברצונך להסיר אחת או יותר מהתוספות הללו?",
    ""
  );
  if (base == "לא") {
    orderBurger = orderBurger + "";
  } else if (base == "כן") {
    let noTomato = prompt("האם ברצונך להסיר עגבניות?", "");
    if (noTomato == "כן") {
      orderBurger = orderBurger + "ללא עגבניות, ";
    }
    let noLettuse = prompt("האם ברצונך להסיר חסה?", "");
    if (noLettuse == "כן") {
      orderBurger = orderBurger + "ללא חסה, ";
    }
    let noPickles = prompt("האם ברצונך להסיר חמוצים?", "");
    if (noPickles == "כן") {
      orderBurger = orderBurger + "ללא חמוצים, ";
    }
  }

  let extraToppings = prompt("האם ברצונך להוסיף תוספות מעל ההמבורגר?", "");
  if (extraToppings == "לא") {
    orderBurger = orderBurger + "";
  } else if (extraToppings == "כן") {
    let friesMusroom = prompt("האם ברצונך להוסיף פטריות צלויות?", "");
    if (friesMusroom == "כן") {
      orderBurger = orderBurger + "פטריות צלויות, ";
    }
    let friesOnion = prompt("האם ברצונך להוסיף בצל מטוגן?", "");
    if (friesOnion == "כן") {
      orderBurger = orderBurger + "בצל מטוגן, ";
    }
    let cheddar = prompt("האם ברצונך להוסיף גבינת צ'דר?", "");
    if (cheddar == "כן") {
      orderBurger = orderBurger + "גבינת צ'דר, ";
    }
  }

  alert(
    "תודה על הזמנתך! המבורגר " + orderBurger + " אהבה והמון טעם בדרך אלייך!"
  );
}

function pizza() {
  let orderPizza = "";
  let mushroom = prompt("האם ברצונך להוסיף לפיצה פטריות?", "");
  if (mushroom == "כן") {
    orderPizza = orderPizza + "פטריות, ";
  }

  let olives = prompt("האם ברצונך להוסיף לפיצה זיתים?", "");
  if (olives == "כן") {
    orderPizza = orderPizza + "זיתים, ";
  }

  let corn = prompt("האם ברצונך להוסיף לפיצה תירס?", "");
  if (corn == "כן") {
    orderPizza = orderPizza + "תירס, ";
  }

  let tuna = prompt("האם ברצונך להוסיף לפיצה טונה?", "");
  if (tuna == "כן") {
    orderPizza = orderPizza + "טונה, ";
  }

  let pepperoni = prompt("האם ברצונך להוסיף לפיצה פפרוני?", "");
  if (pepperoni == "כן") {
    orderPizza = orderPizza + "פפרוני, ";
  }

  let cheese = prompt("האם ברצונך להוסיף לפיצה גבינה בולגרית?", "");
  if (cheese == "כן") {
    orderPizza = orderPizza + "גבינה בולגרית, ";
  }

  alert(
    "תודה על הזמנתך! פיצה עם " + orderPizza + " אהבה והמון טעם בדרך אלייך!"
  );
}
