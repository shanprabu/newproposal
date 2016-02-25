jQuery(document).ready(function($){
    var winHeight = $(window).height();
    $(window).scroll(function(){
        var docHeight = $(document).height();
        var nowScroll=$(this).scrollTop();
        if((docHeight-90)<(winHeight+nowScroll)){
            $(".flydiv").removeClass('flyactive');
        }else if(docHeight>700){
            $(".flydiv").addClass('flyactive');
        }
    });
    $(".panel-heading").click(function(){
        setTimeout(function(){
            docHeight = $(document).height();
            nowScroll=$(this).scrollTop();
            if((docHeight>670))
                $(".flydiv").addClass('flyactive');
            else
                $(".flydiv").removeClass('flyactive');
            if((docHeight-90)<(winHeight+nowScroll))
                $(".flydiv").removeClass('flyactive');
        },500);
    });
});
$(function() {
    $('body').on('click', '.page-submit', function() {
        var counta = 0;
        $(".sinputval").each(function () {
            if ($(this).val() == "") {
                counta++;
                if (counta == 1)
                    $(this).focus();
                $(this).addClass("errorbox");
            } else {
                $(this).removeClass("errorbox");
            }
        });
        countb = 0;
        $(".inputval").each(function () {
            if ($(this).val() == "") {
                countb++;
                if (countb == 1)
                    $(this).focus();
                $(this).addClass("errorbox");
            } else {
                $(this).removeClass("errorbox");
            }
        });
        if($(".inputval").length!=0 && $(".opttddatetxt").hasClass("prices-options-row-start-date")){
            datefrom = new Date($(".prices-options-row-start-date").val());
            dateto = new Date($(".prices-options-row-end-date").val());
            if(dateto<datefrom){
                $(".prices-options-row-end-date").addClass("errorbox");
            }else{
                $(".prices-options-row-end-date").removeClass("errorbox");
            }
        }else if($(".inputval").length!=0 && $(".exttddatetxt").hasClass("prices-extras-row-start-date")){
            datefrom = new Date($(".prices-extras-row-start-date").val());
            dateto = new Date($(".prices-extras-row-end-date").val());
            if(dateto<datefrom){
                $(".prices-extras-row-end-date").addClass("errorbox");
            }else{
                $(".prices-options-row-end-date").removeClass("errorbox");
            }
        }
    });
    $('body').on('click', '.view-price', function() {
        pricetxt=$(this).attr("data-model-type");
        if((pricetxt.replace(" ", "")).toLowerCase()=="weekpricing") {
            $(".addweekrow").empty();
            $(".addweekrow").append("<div class='row poprecord'><div class='col-md-1 popthrow'>M</div><div class='col-md-1 popthrow'>T</div><div class='col-md-1 popthrow'>W</div><div class='col-md-1 popthrow'>T</div><div class='col-md-1 popthrow'>F</div><div class='col-md-1 popthrow'>S</div><div class='col-md-1 popthrow'>S</div><div class='col-md-2 popthrow'>Buy</div><div class='col-md-2 popthrow'>Sell</div><div class='col-md-1 popthrow'>&nbsp;</div></div>");
            $(".addweekrow").append("<div class='row poprecord'><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled ></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled  checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled ></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled  checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled  checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled ></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled ></label></div><div class='col-md-2 poptdrow'>1542</div><div class='col-md-2 poptdrow'>1742</div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div>");
            $(".addweekrow").append("<div class='row poprecord'><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled ></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled  checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled ></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled  checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled  checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled ></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled ></label></div><div class='col-md-2 poptdrow'>1542</div><div class='col-md-2 poptdrow'>1742</div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div>");
            $('#weekModal').modal('show');
        }
        else if((pricetxt.replace(" ", "")).toLowerCase()=="priceband"){
            $(".addpricerow").empty();
            $(".addpricerow").append("<div class='row poprecord'><div class='col-md-3 popthrow'>Min</div><div class='col-md-3 popthrow'>Max</div><div class='col-md-3 popthrow'>Buy</div><div class='col-md-2 popthrow'>Sell</div><div class='col-md-1 popthrow'>&nbsp;</div></div><div class='row poprecord'><div class='col-md-3 poptdrow'>2</div><div class='col-md-3 poptdrow'>7</div>   <div class='col-md-3 poptdrow'>1542</div><div class='col-md-2 poptdrow'>1742</div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div><div class='row poprecord'><div class='col-md-3 poptdrow'>1</div><div class='col-md-3 poptdrow'>5</div><div class='col-md-3 poptdrow'>1950</div><div class='col-md-2 poptdrow'>2200</div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div>");
            $('#priceModal').modal('show');
        }
    });
    $('body').on('click', '.edit-price', function() {
        pricetxt=$(this).attr("data-model-type");
        if((pricetxt.replace(" ", "")).toLowerCase()=="weekpricing") {
            $(".addweekrow").empty();
            $(".addweekrow").append("<div class='row poprecord'><div class='col-md-1 popthrow'>M</div><div class='col-md-1 popthrow'>T</div><div class='col-md-1 popthrow'>W</div><div class='col-md-1 popthrow'>T</div><div class='col-md-1 popthrow'>F</div><div class='col-md-1 popthrow'>S</div><div class='col-md-1 popthrow'>S</div><div class='col-md-2 popthrow'>Buy</div><div class='col-md-2 popthrow'>Sell</div><div class='col-md-1 popthrow'>&nbsp;</div></div>");
            $(".addweekrow").append("<div class='row poprecord'><div class='col-md-1 poptdrow'><label><input type='checkbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox'></label></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1542'></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1742'></div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div>");
            $(".addweekrow").append("<div class='row poprecord'><div class='col-md-1 poptdrow'><label><input type='checkbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox'></label></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1542'></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1742'></div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div>");
            $('#weekModal').modal('show');
        }
        else if((pricetxt.replace(" ", "")).toLowerCase()=="priceband"){
            $(".addpricerow").empty();
            $(".addpricerow").append("<div class='row poprecord'><div class='col-md-3 popthrow'>Min</div><div class='col-md-3 popthrow'>Max</div><div class='col-md-3 popthrow'>Buy</div><div class='col-md-2 popthrow'>Sell</div><div class='col-md-1 popthrow'>&nbsp;</div></div><div class='row poprecord'><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Min' value='2'></div><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Max' value='7'></div><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1542'></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1742'></div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div><div class='row poprecord'><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Min' value='1'></div><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Max' value='5'></div><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1950'></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='2200'></div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div>");
            $('#priceModal').modal('show');
        }
    });
    $(".pagereset").click(function(){
        count=0;
        $( ".inputval" ).each(function() {
            count++;
            if(count == 1)
                $( this ).focus();
            $( this ).addClass( "errorbox" );
        });
    });
    $(".weekreset").click(function(){
        $(".weekcheckbox").prop('checked', false);
        count=0;
        $( ".poptdtext" ).each(function() {
            count++;
            if(count == 1)
                $( this ).focus();
            $( this ).addClass( "errorbox" );
            $( this ).val("");
        });
    });
    $(".pricereset").click(function(){
        count=0;
        $( ".poptdtext" ).each(function() {
            count++;
            if(count == 1)
                $( this ).focus();
            $( this ).addClass( "errorbox" );
            $( this ).val("");
        });
    });
    $(".weeksave").click(function(){
        count=0;
        gg=$('.weekcheckbox:checked').size();
        if(gg==0){
            $('.weekerror').addClass("weekerror-show");
        }else {
            $('.weekerror').removeClass("weekerror-show");
        }
        $( ".poptdtext" ).each(function() {
            if($(this).val()=="") {
                count++;
                if (count == 1)
                    $(this).focus();
                $(this).addClass("errorbox");
            }else{
                $(this).removeClass("errorbox");
            }
        });

    });
    $(".pricesave").click(function(){
        count=0;
        $( ".poptdtext" ).each(function() {
            if($(this).val()=="") {
                count++;
                if (count == 1)
                    $(this).focus();
                $(this).addClass("errorbox");
            }else{
                $(this).removeClass("errorbox");
            }
        });
    });
    $(".closeicon").click(function(){
        hh=$(this).parent('div');
        $('.delpopup').css("display","block");
    });
    $(".nobut").click(function(){
        $('.delpopup').css("display","none");
    });
    $(".yesbut").click(function(){
        hh.remove();
        $('.delpopup').css("display","none");
    });

    $("#addweekprice").click(function(){
        $(".addweekrow").append("<div class='row poprecord'><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-2 poptdrow'><input type='text' placeholder='Price' class='form-control poptdtext'></div><div class='col-md-2 poptdrow'><input type='text' placeholder='Price' class='form-control poptdtext'></div><div class='col-md-1 poptdrow showcloseicon'>&nbsp;</div></div>");
        $(".showcloseicon").click(function(){
            $(this).parent('div').remove();
        });
    });

    $("#addpriceband").click(function(){
        $(".addpricerow").append("<div class='row poprecord'><div class='col-md-3 poptdrow'><input type='text' placeholder='Min' class='form-control poptdtext'></div><div class='col-md-3 poptdrow'><input type='text' placeholder='Max' class='form-control poptdtext'></div><div class='col-md-3 poptdrow'><input type='text' placeholder='Price' class='form-control poptdtext'></div><div class='col-md-2 poptdrow'><input type='text' placeholder='Price' class='form-control poptdtext'></div><div class='col-md-1 poptdrow showcloseicon'>&nbsp;</div></div>");
        $(".showcloseicon").click(function(){
            $(this).parent('div').remove();
        });
    });
    holdrows=[];
    $(document).delegate('.rowyesbut', 'click', function(){
        if(holdrows.length>0) {
            $.each( holdrows, function( key, value ) {
                $(value).remove();
            });
        }
        $('.rowdelpopup').css("display","none");
        if(holdrows.length>0 && holdrows[0].indexOf('opt') !=-1) {
            $('#edit_options_price_row').removeClass("butactive");
            $('#remove_options_price_row').removeClass("delactive");
            $('#add_options_price_row').removeClass("butactive");
        }else if(holdrows.length>0 && holdrows[0].indexOf('ext') !=-1) {
            $('#edit_extras_price_row').removeClass("butactive");
            $('#remove_extras_price_row').removeClass("delactive");
            $('#add_extras_price_row').removeClass("butactive");
        }
        holdrows = [];
    });
    $(".rownobut").click(function(){
        $('.rowdelpopup').css("display","none");
    });
    $('body').on('click', '#remove_options_price_row', function() {
        var i=0;
        $('.optcheckbox:checked').each(function(){
            holdrows[i]="#prices_options_row_"+$(this).val();
            i++;
        });
        if(i>0)
            $('.rowdelpopup').css("display","block");
    });
    actRow="";
    $("#edit_options_price_row").on('click', function(){
        if($('.optcheckbox:checked').length==1 && $('.tdtext').length==0) {
            optrowid=$('.optcheckbox:checked').val();
            actRow=$('#prices_options_row_'+optrowid).html();
            if($("#prices_options_row_"+optrowid).children().size()==12)
            appendStr="<td><input type='hidden' id='options_hidden_"+optrowid+"'><input id='prices_options_row_selection_"+optrowid+"' class='optcheckbox' name='prices_options_row_selection' type='checkbox' value='"+optrowid+"' checked></td><td><input type='text' id='prices_options_row_option_name_"+optrowid+"' class='form-control tdtext inputval prices-options-row-option-name' name='prices_options_row_option_name' placeholder='Name' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(2)').html()+"' ></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_occupancy_id_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-occupancy-id' name='prices_options_row_occupancy_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(3)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(3)').html()+"</option></select></div></td><td><div class='elehold'><label for='prices_options_row_start_date_"+optrowid+"'><i class='datecalicon'></i></label><input id='prices_options_row_start_date_"+optrowid+"' class='form-control opttddatetxt inputval prices-options-row-start-date' name='prices_options_row_start_date' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(4)').html()+"' placeholder='From Date'></div></td><td><div class='elehold'><label for='prices_options_row_end_date_"+optrowid+"'><i class='datecalicon'></i></label><input id='prices_options_row_end_date_"+optrowid+"' class='form-control opttddatetxt inputval prices-options-row-end-date' name='prices_options_row_end_date' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(5)').html()+"' placeholder='To Date'></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_charging_policy_id_"+optrowid+"' class='form-control tdpriceband inputval prices-options-row-charging-policy-id' name='prices_options_row_charging_policy_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_meal_plan_id_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-meal-plan-id' name='prices_options_row_meal_plan_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(7)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(7)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_currency_id_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-currency-id' name='prices_options_row_currency_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(8)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(8)').html()+"</option></select></div></td><td><input id='prices_options_row_buy_price_"+optrowid+"' class='form-control tdsmtxt inputval prices-options-row-buy-price' name='prices_options_row_buy_price' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(9)').html()+"' placeholder='Price'></td><td><input id='prices_options_row_sell_price_"+optrowid+"' class='form-control tdsmtxt inputval prices-options-row-sell-price' name='prices_options_row_sell_price' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(10)').html()+"' placeholder='Price'></td><td><input id='prices_options_row_price_margin_"+optrowid+"' class='form-control tdsmtxt inputval prices-options-row-price-margin' name='prices_options_row_price_margin' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(11)').html()+"' placeholder='%'></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_status_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-status' name='prices_options_row_status'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(12)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(12)').html()+"</option></select></div></td>";
            else if($("#prices_options_row_"+optrowid).children().size()==11)
            appendStr="<td><input type='hidden' id='options_hidden_"+optrowid+"'><input id='prices_options_row_selection_"+optrowid+"' class='optcheckbox' name='prices_options_row_selection' type='checkbox' value='"+optrowid+"' checked></td><td><input type='text' id='prices_options_row_option_name_"+optrowid+"' class='form-control tdtext inputval prices-options-row-option-name' name='prices_options_row_option_name' placeholder='Name' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(2)').html()+"' ></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_occupancy_id_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-occupancy-id' name='prices_options_row_occupancy_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(3)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(3)').html()+"</option></select></div></td><td><div class='elehold'><label for='prices_options_row_start_date_"+optrowid+"'><i class='datecalicon'></i></label><input id='prices_options_row_start_date_"+optrowid+"' class='form-control opttddatetxt inputval prices-options-row-start-date' name='prices_options_row_start_date' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(4)').html()+"' placeholder='From Date'></div></td><td><div class='elehold'><label for='prices_options_row_end_date_"+optrowid+"'><i class='datecalicon'></i></label><input id='prices_options_row_end_date_"+optrowid+"' class='form-control opttddatetxt inputval prices-options-row-end-date' name='prices_options_row_end_date' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(5)').html()+"' placeholder='To Date'></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_charging_policy_id_"+optrowid+"' class='form-control tdpriceband inputval prices-options-row-charging-policy-id' name='prices_options_row_charging_policy_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_meal_plan_id_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-meal-plan-id' name='prices_options_row_meal_plan_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(7)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(7)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_currency_id_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-currency-id' name='prices_options_row_currency_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(8)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(8)').html()+"</option></select></div></td><td colspan='2'><span class='edit-price' data-model-type='"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"'>Edit Price</span></td><td><input id='prices_options_row_price_margin_"+optrowid+"' class='form-control tdsmtxt inputval prices-options-row-price-margin' name='prices_options_row_price_margin' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(10)').html()+"' placeholder='%'></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_status_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-status' name='prices_options_row_status'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(11)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(11)').html()+"</option></select></div></td>";
            $("#prices_options_row_"+optrowid).empty();
            $("#prices_options_row_"+optrowid).append(appendStr);
            $(".opttddatetxt").daterangepicker({
                singleDatePicker: true,
                "autoUpdateInput": true,
                locale: {
                    format: 'YYYY-MM-DD'
                }
            });
        }
    });
    $("#add_options_price_row").on('click', function(){
        if($('.optcheckbox:checked').length==1 && $('.tdtext').length==0) {
            optrowid=$('.optcheckbox:checked').val();
            newid=$('.optcheckbox').length+1;
            rowStr=$("#prices_options_row_"+optrowid).html();
            $("#prices_option_table").append("<tr class='justadded prices-options-row' id='prices_options_row_"+newid+"'><td><input type='hidden' id='options_hidden_"+newid+"'><input id='prices_options_row_selection_"+newid+"' class='optcheckbox' name='prices_options_row_selection' type='checkbox' value='"+newid+"'></td>"+rowStr.substr(rowStr.indexOf("</td>") + 1)+"</tr>");
            setTimeout(function () {
                $('tr').removeClass('justadded');
            }, 500);
            $(".optcheckbox:checked").prop('checked', false);
            $('#edit_options_price_row').removeClass("butactive");
            $('#remove_options_price_row').removeClass("delactive");
            $('#add_options_price_row').removeClass("butactive");
        }
    });
    $("#optdate").daterangepicker({
        "autoUpdateInput": false,
        "cancelClass": "closecan",
        locale: {
            format: 'YYYY-MM-DD'
        }
    });
    $('#optdate').on('apply.daterangepicker', function(ev, picker) {
        $("#optDateText").empty();
        $("#optDateText").append("<div class='dyndateleft'><span class='txtredcol'>From:</span> "+picker.startDate.format('YYYY-MM-DD')+"</div><div class='dyndateright'> <span class='txtredcol'>To:</span> "+picker.endDate.format('YYYY-MM-DD')+"</div>");
    });
    $("#add_extras_price_row").on('click', function(){
        if($('.extcheckbox:checked').length==1 && $('.tdtext').length==0) {
            extrowid=$('.extcheckbox:checked').val();
            newid=$('.extcheckbox').length+1;
            rowStr=$("#prices_extras_row_"+extrowid).html();
            $("#prices_extra_table").append("<tr class='justadded prices-extras-row' id='prices_extras_row_"+newid+"'><td><input type='hidden' id='extras_hidden_"+newid+"'><input id='prices_extras_row_selection_"+newid+"' class='extcheckbox' name='prices_extras_row_selection' type='checkbox' value='"+newid+"'></td>"+rowStr.substr(rowStr.indexOf("</td>") + 1)+"</tr>");
            setTimeout(function () {
                $('tr').removeClass('justadded');
            }, 500);
            $(".extcheckbox:checked").prop('checked', false);
            $('#edit_extras_price_row').removeClass("butactive");
            $('#remove_extras_price_row').removeClass("delactive");
            $('#add_extras_price_row').removeClass("butactive");
            $('#link_extras_price_row').removeClass("butactive");
        }
    });
    $("#edit_extras_price_row").on('click', function(){
        if($('.extcheckbox:checked').length==1 && $('.tdtext').length==0) {
            extrowid=$('.extcheckbox:checked').val();
            actRow=$('#prices_extras_row_'+extrowid).html();
            if($("#prices_extras_row_"+extrowid).children().size()==11)
            appendStr="<td><input type='hidden' id='extras_hidden_"+extrowid+"'><input id='prices_extras_row_selection_"+extrowid+"' class='extcheckbox' name='prices_extras_row_selection' type='checkbox' value='"+extrowid+"' checked></td><td><input type='text' id='prices_extras_row_extra_name_"+extrowid+"' class='form-control tdtext inputval prices-extras-row-extra-name' name='prices_extras_row_extra_name' placeholder='Name' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(2)').html()+"'></td><td><div class='elehold'><label for='prices_extras_row_start_date_"+extrowid+"'><i class='datecalicon'></i></label><input id='prices_extras_row_start_date_"+extrowid+"' class='form-control exttddatetxt inputval prices-extras-row-start-date' name='prices_extras_row_start_date' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(3)').html()+"' type='text' placeholder='From Date'></div></td><td><div class='elehold'><label for='prices_extras_row_end_date_"+extrowid+"'><i class='datecalicon'></i></label><input id='prices_extras_row_end_date_"+extrowid+"' class='form-control exttddatetxt inputval prices-extras-row-end-date' name='prices_extras_row_end_date' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(4)').html()+"' type='text' placeholder='To Date'></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_charging_policy_id_"+extrowid+"' class='form-control tdpriceband inputval prices-extras-row-charging-policy-id' name='prices_extras_row_charging_policy_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_mandatory_id_"+extrowid+"' class='form-control tdtxtsel inputval prices-extras-row-mandatory-id' name='prices_extras_row_mandatory_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(6)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(6)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_currency_id_"+extrowid+"' class='form-control tdtxtsel inputval prices-extras-row-currency-id' name='prices_extras_row_currency_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(7)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(7)').html()+"</option></select></div></td><td><input id='prices_extras_row_buy_price_"+extrowid+"' class='form-control tdsmtxt inputval prices-extras-row-buy-price' name='prices_extras_row_buy_price' type='text' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(8)').html()+"' placeholder='Price'></td><td><input id='prices_extras_row_sell_price_"+extrowid+"' class='form-control tdsmtxt inputval prices-extras-row-sell-price' name='prices_extras_row_sell_price' type='text' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(9)').html()+"' placeholder='Price'></td><td><input id='prices_extras_row_price_margin_"+extrowid+"' class='form-control tdsmtxt inputval prices-extras-row-price-margin' name='prices_extras_row_price_margin' type='text' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(10)').html()+"' placeholder='%'></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_status_"+extrowid+"' class='form-control tdtxtsel inputval prices-extras-row-status' name='prices_extras_row_status'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(11)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(11)').html()+"</option></select></div></td>";
            else if($("#prices_extras_row_"+extrowid).children().size()==10)
            appendStr="<td><input type='hidden' id='extras_hidden_"+extrowid+"'><input id='prices_extras_row_selection_"+extrowid+"' class='extcheckbox' name='prices_extras_row_selection' type='checkbox' value='"+extrowid+"' checked></td><td><input type='text' id='prices_extras_row_extra_name_"+extrowid+"' class='form-control tdtext inputval prices-extras-row-extra-name' name='prices_extras_row_extra_name' placeholder='Name' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(2)').html()+"'></td><td><div class='elehold'><label for='prices_extras_row_start_date_"+extrowid+"'><i class='datecalicon'></i></label><input id='prices_extras_row_start_date_"+extrowid+"' class='form-control exttddatetxt inputval prices-extras-row-start-date' name='prices_extras_row_start_date' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(3)').html()+"' type='text' placeholder='From Date'></div></td><td><div class='elehold'><label for='prices_extras_row_end_date_"+extrowid+"'><i class='datecalicon'></i></label><input id='prices_extras_row_end_date_"+extrowid+"' class='form-control exttddatetxt inputval prices-extras-row-end-date' name='prices_extras_row_end_date' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(4)').html()+"' type='text' placeholder='To Date'></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_charging_policy_id_"+extrowid+"' class='form-control tdpriceband inputval prices-extras-row-charging-policy-id' name='prices_extras_row_charging_policy_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_mandatory_id_"+extrowid+"' class='form-control tdtxtsel inputval prices-extras-row-mandatory-id' name='prices_extras_row_mandatory_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(6)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(6)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_currency_id_"+extrowid+"' class='form-control tdtxtsel inputval prices-extras-row-currency-id' name='prices_extras_row_currency_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(7)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(7)').html()+"</option></select></div></td><td colspan='2'><span class='edit-price' data-model-type='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"'>Edit Price</span></td><td><input id='prices_extras_row_price_margin_"+extrowid+"' class='form-control tdsmtxt inputval prices-extras-row-price-margin' name='prices_extras_row_price_margin' type='text' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(9)').html()+"' placeholder='%'></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_status_"+extrowid+"' class='form-control tdtxtsel inputval prices-extras-row-status' name='prices_extras_row_status'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(10)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(10)').html()+"</option></select></div></td>";
            $("#prices_extras_row_"+extrowid).empty();
            $("#prices_extras_row_"+extrowid).append(appendStr);
            $(".exttddatetxt").daterangepicker({
                singleDatePicker: true,
                "autoUpdateInput": true,
                locale: {
                    format: 'YYYY-MM-DD'
                }
            });
        }
    });
    $('body').on('click', '#remove_extras_price_row', function() {
        var i=0;
        holdrows=[];
        $('.extcheckbox:checked').each(function(){
            holdrows[i]="#prices_extras_row_"+$(this).val();
            i++;
        });
        if(i>0)
            $('.rowdelpopup').css("display","block");
    });
    $("#extdate").daterangepicker({
        "autoUpdateInput": false,
        "cancelClass": "closecan",
        locale: {
            format: 'YYYY-MM-DD'
        }
    });
    $('#extdate').on('apply.daterangepicker', function(ev, picker) {
        $("#extDateText").empty();
        $("#extDateText").append("<div class='dyndateleft'><span class='txtredcol'>From:</span> "+picker.startDate.format('YYYY-MM-DD')+"</div><div class='dyndateright'> <span class='txtredcol'>To:</span> "+picker.endDate.format('YYYY-MM-DD')+"</div>");
    });
    $(document).delegate('.optcheckall', 'change', function(){
        if(this.checked) {
            $(".optcheckbox").prop('checked', $(this).prop("checked"));
            $('#remove_options_price_row').addClass("delactive");
            $('#edit_options_price_row').removeClass("butactive");
            $('#add_options_price_row').removeClass("butactive");
        }else{
            $(".optcheckbox").prop('checked', false);
            $('#edit_options_price_row').removeClass("butactive");
            $('#remove_options_price_row').removeClass("delactive");
            $('#add_options_price_row').removeClass("butactive");
        }
    });
    $(document).delegate('.extcheckall', 'change', function(){
        if(this.checked) {
            $(".extcheckbox").prop('checked', $(this).prop("checked"));
            $('#remove_extras_price_row').addClass("delactive");
            $('#edit_extras_price_row').removeClass("butactive");
            $('#add_extras_price_row').removeClass("butactive");
        }else{
            $(".extcheckbox").prop('checked', false);
            $('#edit_extras_price_row').removeClass("butactive");
            $('#remove_extras_price_row').removeClass("delactive");
            $('#add_extras_price_row').removeClass("butactive");
        }
    });
    $('body').on('click', '.optcheckbox', function() {
        if (actRow != "") {
            $("#prices_options_row_" + optrowid).empty();
            $("#prices_options_row_" + optrowid).append(actRow);
            actRow = "";
            optrowid = "";
        }
        opttotalcheck = $('.optcheckbox:checked').length;
        if (opttotalcheck == 1) {
            $('#edit_options_price_row').addClass("butactive");
            $('#remove_options_price_row').addClass("delactive");
            $('#add_options_price_row').addClass("butactive");
        } else if (opttotalcheck > 1) {
            $('#edit_options_price_row').removeClass("butactive");
            $('#remove_options_price_row').addClass("delactive");
            $('#add_options_price_row').removeClass("butactive");
        }else{
            $(".optcheckall").prop('checked', false);
            $('#edit_options_price_row').removeClass("butactive");
            $('#remove_options_price_row').removeClass("delactive");
            $('#add_options_price_row').removeClass("butactive");
            $('#link_extras_price_row').removeClass("butactive");
        }
        if ($('.optcheckbox:checked').length >= 1 && $('.extcheckbox:checked').length >= 1)
            $('#link_extras_price_row').addClass("butactive");
        else
            $('#link_extras_price_row').removeClass("butactive");

    });
    $('body').on('click', '.extcheckbox', function() {
        if (actRow != "") {
            $("#prices_extras_row_" + extrowid).empty();
            $("#prices_extras_row_" + extrowid).append(actRow);
            actRow = "";
            extrowid = "";
        }
        exttotalcheck = $('.extcheckbox:checked').length;
        if (exttotalcheck == 1) {
            $('#edit_extras_price_row').addClass("butactive");
            $('#remove_extras_price_row').addClass("delactive");
            $('#add_extras_price_row').addClass("butactive");
        } else if (exttotalcheck > 1) {
            $('#edit_extras_price_row').removeClass("butactive");
            $('#remove_extras_price_row').addClass("delactive");
            $('#add_extras_price_row').removeClass("butactive");
        }else{
            $(".extcheckall").prop('checked', false);
            $('#edit_extras_price_row').removeClass("butactive");
            $('#remove_extras_price_row').removeClass("delactive");
            $('#add_extras_price_row').removeClass("butactive");
            $('#link_extras_price_row').removeClass("butactive");
        }
        if ($('.optcheckbox:checked').length >= 1 && $('.extcheckbox:checked').length >= 1)
            $('#link_extras_price_row').addClass("butactive");
        else
            $('#link_extras_price_row').removeClass("butactive");

    });
    $('body').on('click', '.options-page-nav-change', function() {
        $("#options_navigation_id").empty();
        $("#options_navigation_id").append($(this).html());
    });
    $('body').on('click', '.extras-page-nav-change', function() {
        $("#extras_navigation_id").empty();
        $("#extras_navigation_id").append($(this).html());
    });
    $('body').on('click', '.options-view-price-band', function() {
        $('#view_price_band_model').modal('show');
    });
    $('body').on('click', '.options-view-week-price', function() {
        $('#view_week_price_model').modal('show');
    });
    $('body').on('click', '.options-page-navigation-right', function() {
        naxtval=parseInt($("#options_navigation_id").html())+1;
        if($('.options-page-nav-change').length >= naxtval){
            $("#options_navigation_id").empty();
            $("#options_navigation_id").append(naxtval);
        }
    });
    $('body').on('click', '.options-page-navigation-left', function() {
        prevval=parseInt($("#options_navigation_id").html())-1;
        if(1 <= prevval){
            $("#options_navigation_id").empty();
            $("#options_navigation_id").append(prevval);
        }
    });
    $('body').on('click', '.extras-page-navigation-right', function() {
        naxtval=parseInt($("#extras_navigation_id").html())+1;
        if($('.extras-page-nav-change').length >= naxtval){
            $("#extras_navigation_id").empty();
            $("#extras_navigation_id").append(naxtval);
        }
    });
    $('body').on('click', '.extras-page-navigation-left', function() {
        prevval=parseInt($("#extras_navigation_id").html())-1;
        if(1 <= prevval){
            $("#extras_navigation_id").empty();
            $("#extras_navigation_id").append(prevval);
        }
    });
    $('body').on('keydown', '.poptdtext', function(e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
                // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    $('body').on('keydown', '.prices-options-row-buy-price', function(e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            (e.keyCode == 65 && e.ctrlKey === true) ||
            (e.keyCode == 67 && e.ctrlKey === true) ||
            (e.keyCode == 88 && e.ctrlKey === true) ||
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
        }
        if (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    $('body').on('keydown', '.prices-options-row-sell-price', function(e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            (e.keyCode == 65 && e.ctrlKey === true) ||
            (e.keyCode == 67 && e.ctrlKey === true) ||
            (e.keyCode == 88 && e.ctrlKey === true) ||
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
        }
        if (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});


