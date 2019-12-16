$(document).ready(function(){
    $(".delivery").hide();
    $(".yes").hide();
    $(".no").hide();
    $(".delivery-info h4").hide();
    $("#add-toppings").click(function(event){
        event.preventDefault();
        $(".Toppings").append(
           '<label>Select Your favourite Toppings</label>'+
                        '<select class="custom-select custom-select-md mb-3" id="toppings1" required="">'+
                            '<option value="tomato">Tomato @ sh. 80</option>'+
                            '<option value="onions">Onions @ sh. 80</option>'+
                            '<option value="mushroom">Mushroom @ sh. 80</option>'+
                            '<option value="greenpepper">Green Pepper @ sh. 80</option>'+
                            '<option value=""></option>'+
                            '<option value="olives">Olives @ sh. 120</option>'+
                            '<option value="pineapple">Pineapple @ sh. 120</option>'+
                            '<option value="sweetcorn">Sweet Corn @ sh. 120</option>'+
                            '<option value="macon">Macon @ sh. 120</option>'+
                            '<option value="mince">Mince @ sh. 120</option>'+
                            '<option value=""></option>'+
                            '<option value="beef">Beef Peperoni @ sh. 170</option>'+
                            '<option value="chicken">Periperi Chicken @ sh. 170</option>'+
            '</select>');
    
    });
    $("#checkout").click(function(event){
        event.preventDefault();
        var flavour = $("#flavour option:selected").val();
        var size = parseInt($("#size option:selected").val());
        var crust = parseInt($("#crust option:selected").val());
        var toppings = parseInt($("#toppings option:selected").val());
        var toppings1 = parseInt($("#toppings1 option:selected").val());
        var number = parseInt($("#number option:selected").val());
        
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
        $('table#tablecart').append('<tr>'+'<td>'+ $("#size option:selected").text()+'</td>'+ '<td id="quantity">'+quantity+'</td>' + '<td id="price">'+cost+'</td>' +'<td id="total">'+total+'</td>'+'</tr>');
        $(".checkout").click(function() {
          $(".checkout").hide();
          $(".delivery").show();
          $("#yes").hide();
          $("#no").hide();
          $("#totalcost").show();
          $("#delivercost").show();
          $(".yes-button").show();
          $(".no-button").show();
          $(".address").hide();
          grandTotal = grandTotal + total;
          $("p span").html(grandTotal);
        });
        $(".yes-button").click(function() {
        $("#delivercost").hide();
        $("#no").hide();
        $("#yes").hide();
        $(".address").show();
        $(".yes-button").hide();
        $(".no-button").hide();
        $("#totalcost span").html(grandTotal + 300);
      });
        $(".no-button").click(function() {
        $("#delivercost").hide();
        $("#yes").hide();
        $("#no").show();
        $(".yes-button").hide();
        $(".no-button").hide();
        $("#totalcost span").html(grandTotal);
      });
      $("#addaddress").click(function() {
      var address = $(".address input").val();
      $("#yes").show();
      $(".address").hide();
      $("#yes span").html(address);
    });
    $(".refresh").click(function(event){
      $('form').each(function(){
        this.reset();
        $(".delivery").hide();
        $("#tablecart tbody tr").remove();
      });
    });
    });
  });