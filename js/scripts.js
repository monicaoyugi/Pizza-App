$(document).ready(function(){
    $("#addtopping").click(function(event) {
      event.preventDefault();
      $(".Toppings").append(
        "<label>Select Your favourite Toppings</label>" +
          '<select class="custom-select custom-select-md mb-3" id="toppings1" required="">' +
          '<option value="tomato">Tomato @ sh. 80</option>' +
          '<option value="onions">Onions @ sh. 80</option>' +
          '<option value="mushroom">Mushroom @ sh. 80</option>' +
          '<option value="greenpepper">Green Pepper @ sh. 80</option>' +
          '<option value=""></option>' +
          '<option value="olives">Olives @ sh. 120</option>' +
          '<option value="pineapple">Pineapple @ sh. 120</option>' +
          '<option value="sweetcorn">Sweet Corn @ sh. 120</option>' +
          '<option value="macon">Macon @ sh. 120</option>' +
          '<option value="mince">Mince @ sh. 120</option>' +
          '<option value=""></option>' +
          '<option value%"beef">Beef Peperoni @ sh. 170</option>' +
          '<option value="chicken">Periperi Chicken @ sh. 170</option>' +
          "</select>"
      );
    });

    $("#checkout").click(function(event){
      event.preventDefault();
      var flavour = $("#flavour option:selected").val();
      var size = parseInt($("#size option:selected").val());
      var crust = parseInt($("#crust option:selected").val());
      var toppings = parseInt($("#toppings option:selected").val());
      var toppings1 = parseInt($("#toppings1 option:selected").val());
      var number = parseInt($("#number").val());

      let myToppings = [];
      if(!isNaN(toppings)){
          myToppings.push(toppings);
  
      }
  
      if(!isNaN(toppings1)){
          myToppings.push(toppings1);
  
      }
      let costofToppings = 0
      if(myToppings.length){
        for(i in myToppings){
            costofToppings += myToppings[i];
        }
      }
      let cost = size + crust+ costofToppings
      var total = cost*number;
      var grandTotal = 0;

      $('table#tablecart').append('<tr>'+'<td>'+$("#flavour option:selected").text()+'</td>'+'<td>'+ $("#size option:selected").text()+'</td>'+'<td>'+$("#crust option:selected").text()+'</td>'+ '<td>'+$("#toppings option:selected").text()+'</td>'+'<td id="number">'+number+'</td>' +'<td id="total">'+total+'</td>'+'</tr>');

          //Deliver
    $(".deliver").click(function () {
      $('.summary').slideUp();
      $('#list').slideUp();
      $('.summary').text("Provide location details").slideDown();
      $('.deliver').hide(1000);
      $('.delivernot').hide(1000);
      $('.cdata-overlay').slideDown();
      $('#pickup').hide();
  });

  $("#pickup").click(function(event){
    event.preventDefault();
    alert('Pick your order at our nearest pickup station');
    $('.deliver').hide();

  });

  $("#go").click(function(event){
    event.preventDefault();
    var name = ($("#name").val());
    var location =($("#location").val());

    alert(name + ' your delivery will be made at ' + location);
    $('.cdata-overlay').hide();

  });

  $("#refresh").click(function(){
    $('#my-form').reset();
  });
  });
});