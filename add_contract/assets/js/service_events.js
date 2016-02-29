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
function showPriceBox(pricetxt, rid) {
    // ------------  Getting ID of ROW -------------
    //var tr_row_id=$(rid.closest('tr')).attr('id');
    var model_heading="";
    var type_div="";
    var head_row="";
    var add_rows="";
    var add_row_button="";
    var save_buttons="";
    if((pricetxt.replace(" ", "")).toLowerCase()=="weekprice"){
        $("#weekModal").remove();
        $(".modal-backdrop").remove();
        $('body').removeAttr("style");
        $('body').removeClass("modal-open");
        model_heading="<button data-dismiss='modal' class='close' type='button'><i class='fa fa-times-circle-o'><img src='assets/img/close.png' alt='X' title='close'></i></button><h4 class='modal-title'>Week Pricing</h4>";
        type_div="<div class='row'><div class='col-md-8 poppicklbl'>Type &nbsp;</div><div class='col-md-4'><i class='dropdown-icon2 popselicon'></i><select class='form-control popstatussel'><option>Per Unit Per Day</option></select></div></div>"
        head_row="<div class='row poprecord'><div class='col-md-1 popthrow'>M</div><div class='col-md-1 popthrow'>T</div><div class='col-md-1 popthrow'>W</div><div class='col-md-1 popthrow'>T</div><div class='col-md-1 popthrow'>F</div><div class='col-md-1 popthrow'>S</div><div class='col-md-1 popthrow'>S</div><div class='col-md-2 popthrow'>Buy</div><div class='col-md-2 popthrow'>Sell</div><div class='col-md-1 popthrow'>&nbsp;</div></div>";
        add_rows=head_row+"<div class='row poprecord'><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked='' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked='' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked='' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1542'></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1742'></div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div><div class='row poprecord'><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked='' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked='' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked='' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1542'></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1742'></div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div>";
        add_row_button="<div class='row model-add-row'><div class='adbtn'><a onclick='' id='addweekprice'><img src='assets/img/add-row.png'><span>Add</span></a><span class='weekerror'>Please select atleast one day..!!</span></div></div>";
        save_buttons="<div class='row model-buttons'><div class='savebut weeksave'>SAVE</div><div class='resetbut weekreset'>RESET</div></div>";
        var generate_price_model="<div role='dialog' class='modal fade' id='weekModal'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'>"+model_heading+"</div><div class='modal-body'>"+type_div+"<div class='poptab'><div class='addweekrow'>"+add_rows+"</div>"+add_row_button+"</div>"+save_buttons+"</div></div></div></div>";
        $('body').append(generate_price_model);
        $('#weekModal').modal('show');
    }
    else if((pricetxt.replace(" ", "")).toLowerCase()=="priceband"){
        $("#priceModal").remove();
        $(".modal-backdrop").remove();
        $('body').removeAttr("style");
        $('body').removeClass("modal-open");
        model_heading="<button data-dismiss='modal' class='close' type='button'><i class='fa fa-times-circle-o'><img src='assets/img/close.png' alt='X' title='close'></i></button><h4 class='modal-title'>Price Band</h4>";
        type_div="<div class='row'><div class='col-md-8 poppicklbl'>Type &nbsp;</div><div class='col-md-4'><i class='dropdown-icon2 popselicon'></i><select class='form-control popstatussel'><option>Per Unit Per Day</option></select></div></div>"
        head_row="<div class='row poprecord'><div class='col-md-3 popthrow'>Min</div><div class='col-md-3 popthrow'>Max</div><div class='col-md-3 popthrow'>Buy</div><div class='col-md-2 popthrow'>Sell</div><div class='col-md-1 popthrow'>&nbsp;</div></div>";
        add_rows=head_row+"<div class='row poprecord'><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Min' value='2'></div><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Max' value='7'></div><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1542'></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1742'></div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div><div class='row poprecord'><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Min' value='1'></div><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Max' value='5'></div><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1950'></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='2200'></div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div>";
        add_row_button="<div class='row model-add-row'><div class='adbtn'><a id='addpriceband' onclick=''><img src='assets/img/add-row.png'><span>Add</span></a></div></div>";
        save_buttons="<div class='row model-buttons'><div class='savebut pricesave'>SAVE</div><div class='resetbut pricereset'>RESET</div></div>";
        var generate_price_model="<div role='dialog' class='modal fade' id='priceModal'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'>"+model_heading+"</div><div class='modal-body'>"+type_div+"<div class='poptab'><div class='addpricerow'>"+add_rows+"</div>"+add_row_button+"</div>"+save_buttons+"</div></div></div></div>";
        $('body').append(generate_price_model);
        $('#priceModal').modal('show');
    }
}
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
    });
    $('body').on('click', '.view-price', function() {
        pricetxt=$(this).attr("data-model-type");
        // ------------  Getting ID of ROW -------------
        // var tr_row_id = $(this).closest('tr').attr('id');
        var model_heading="";
        var type_div="";
        var head_row="";
        var add_rows="";
        var add_row_button="";
        var save_buttons="";
        if((pricetxt.replace(" ", "")).toLowerCase()=="weekprice"){
            $("#weekModal").remove();
            $(".modal-backdrop").remove();
            $('body').removeAttr("style");
            $('body').removeClass("modal-open");
            model_heading="<button data-dismiss='modal' class='close' type='button'><i class='fa fa-times-circle-o'><img src='assets/img/close.png' alt='X' title='close'></i></button><h4 class='modal-title'>Week Pricing</h4>";
            type_div="<div class='row'><div class='col-md-8 poppicklbl'>Type &nbsp;</div><div class='col-md-4'><i class='dropdown-icon2 popselicon'></i><select class='form-control popstatussel'><option>Per Unit Per Day</option></select></div></div>"
            head_row="<div class='row poprecord'><div class='col-md-1 popthrow'>M</div><div class='col-md-1 popthrow'>T</div><div class='col-md-1 popthrow'>W</div><div class='col-md-1 popthrow'>T</div><div class='col-md-1 popthrow'>F</div><div class='col-md-1 popthrow'>S</div><div class='col-md-1 popthrow'>S</div><div class='col-md-2 popthrow'>Buy</div><div class='col-md-2 popthrow'>Sell</div><div class='col-md-1 popthrow'>&nbsp;</div></div>";
            add_rows=head_row+"<div class='row poprecord'><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled='' checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled='' checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled='' checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled=''></label></div><div class='col-md-2 poptdrow'>1542</div><div class='col-md-2 poptdrow'>1742</div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div><div class='row poprecord'><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled='' checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled='' checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled='' checked=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled=''></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' disabled=''></label></div><div class='col-md-2 poptdrow'>1542</div><div class='col-md-2 poptdrow'>1742</div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div>";
            //add_row_button="<div class='row model-add-row'><div class='adbtn'><a onclick='' id='addweekprice'><img src='assets/img/add-row.png'><span>Add</span></a><span class='weekerror'>Please select atleast one day..!!</span></div></div>";
            //save_buttons="<div class='row model-buttons'><div class='savebut pricesave'>SAVE</div><div class='resetbut pricereset'>RESET</div></div>";
            var generate_price_model="<div role='dialog' class='modal fade' id='weekModal'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'>"+model_heading+"</div><div class='modal-body'>"+type_div+"<div class='poptab'><div class='addweekrow'>"+add_rows+"</div>"+add_row_button+"</div>"+save_buttons+"</div></div></div></div>";
            $('body').append(generate_price_model);
            $('#weekModal').modal('show');
        }
        else if((pricetxt.replace(" ", "")).toLowerCase()=="priceband"){
            $("#priceModal").remove();
            $(".modal-backdrop").remove();
            $('body').removeAttr("style");
            $('body').removeClass("modal-open");
            model_heading="<button data-dismiss='modal' class='close' type='button'><i class='fa fa-times-circle-o'><img src='assets/img/close.png' alt='X' title='close'></i></button><h4 class='modal-title'>Price Band</h4>";
            type_div="<div class='row'><div class='col-md-8 poppicklbl'>Type &nbsp;</div><div class='col-md-4'><i class='dropdown-icon2 popselicon'></i><select class='form-control popstatussel'><option>Per Unit Per Day</option></select></div></div>"
            head_row="<div class='row poprecord'><div class='col-md-3 popthrow'>Min</div><div class='col-md-3 popthrow'>Max</div><div class='col-md-3 popthrow'>Buy</div><div class='col-md-2 popthrow'>Sell</div><div class='col-md-1 popthrow'>&nbsp;</div></div>";
            add_rows=head_row+"<div class='row poprecord'><div class='col-md-3 poptdrow'>2</div><div class='col-md-3 poptdrow'>7</div>   <div class='col-md-3 poptdrow'>1542</div><div class='col-md-2 poptdrow'>1742</div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div><div class='row poprecord'><div class='col-md-3 poptdrow'>1</div><div class='col-md-3 poptdrow'>5</div><div class='col-md-3 poptdrow'>1950</div><div class='col-md-2 poptdrow'>2200</div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div>";
            //add_row_button="<div class='row model-add-row'><div class='adbtn'><a id='addpriceband' onclick=''><img src='assets/img/add-row.png'><span>Add</span></a></div></div>";
            //save_buttons="<div class='row model-buttons'><div class='savebut pricesave'>SAVE</div><div class='resetbut pricereset'>RESET</div></div>";
            var generate_price_model="<div role='dialog' class='modal fade' id='priceModal'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'>"+model_heading+"</div><div class='modal-body'>"+type_div+"<div class='poptab'><div class='addpricerow'>"+add_rows+"</div>"+add_row_button+"</div>"+save_buttons+"</div></div></div></div>";
            $('body').append(generate_price_model);
            $('#priceModal').modal('show');
        }
    });
    $('body').on('click', '.edit-price', function() {
        pricetxt=$(this).attr("data-model-type");
        // ------------  Getting ID of ROW -------------
        // var tr_row_id = $(this).closest('tr').attr('id');
        var model_heading="";
        var type_div="";
        var head_row="";
        var add_rows="";
        var add_row_button="";
        var save_buttons="";
        if((pricetxt.replace(" ", "")).toLowerCase()=="weekprice"){
            $("#weekModal").remove();
            $(".modal-backdrop").remove();
            $('body').removeAttr("style");
            $('body').removeClass("modal-open");
            model_heading="<button data-dismiss='modal' class='close' type='button'><i class='fa fa-times-circle-o'><img src='assets/img/close.png' alt='X' title='close'></i></button><h4 class='modal-title'>Week Pricing</h4>";
            type_div="<div class='row'><div class='col-md-8 poppicklbl'>Type &nbsp;</div><div class='col-md-4'><i class='dropdown-icon2 popselicon'></i><select class='form-control popstatussel'><option>Per Unit Per Day</option></select></div></div>"
            head_row="<div class='row poprecord'><div class='col-md-1 popthrow'>M</div><div class='col-md-1 popthrow'>T</div><div class='col-md-1 popthrow'>W</div><div class='col-md-1 popthrow'>T</div><div class='col-md-1 popthrow'>F</div><div class='col-md-1 popthrow'>S</div><div class='col-md-1 popthrow'>S</div><div class='col-md-2 popthrow'>Buy</div><div class='col-md-2 popthrow'>Sell</div><div class='col-md-1 popthrow'>&nbsp;</div></div>";
            add_rows=head_row+"<div class='row poprecord'><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked='' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked='' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked='' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1542'></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1742'></div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div><div class='row poprecord'><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked='' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked='' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' checked='' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1542'></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1742'></div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div>";
            add_row_button="<div class='row model-add-row'><div class='adbtn'><a onclick='' id='addweekprice'><img src='assets/img/add-row.png'><span>Add</span></a><span class='weekerror'>Please select atleast one day..!!</span></div></div>";
            save_buttons="<div class='row model-buttons'><div class='savebut weeksave'>SAVE</div><div class='resetbut weekreset'>RESET</div></div>";
            var generate_price_model="<div role='dialog' class='modal fade' id='weekModal'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'>"+model_heading+"</div><div class='modal-body'>"+type_div+"<div class='poptab'><div class='addweekrow'>"+add_rows+"</div>"+add_row_button+"</div>"+save_buttons+"</div></div></div></div>";
            $('body').append(generate_price_model);
            $('#weekModal').modal('show');
        }
        else if((pricetxt.replace(" ", "")).toLowerCase()=="priceband"){
            $("#priceModal").remove();
            $(".modal-backdrop").remove();
            $('body').removeAttr("style");
            $('body').removeClass("modal-open");
            model_heading="<button data-dismiss='modal' class='close' type='button'><i class='fa fa-times-circle-o'><img src='assets/img/close.png' alt='X' title='close'></i></button><h4 class='modal-title'>Price Band</h4>";
            type_div="<div class='row'><div class='col-md-8 poppicklbl'>Type &nbsp;</div><div class='col-md-4'><i class='dropdown-icon2 popselicon'></i><select class='form-control popstatussel'><option>Per Unit Per Day</option></select></div></div>"
            head_row="<div class='row poprecord'><div class='col-md-3 popthrow'>Min</div><div class='col-md-3 popthrow'>Max</div><div class='col-md-3 popthrow'>Buy</div><div class='col-md-2 popthrow'>Sell</div><div class='col-md-1 popthrow'>&nbsp;</div></div>";
            add_rows=head_row+"<div class='row poprecord'><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Min' value='2'></div><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Max' value='7'></div><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1542'></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1742'></div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div><div class='row poprecord'><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Min' value='1'></div><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Max' value='5'></div><div class='col-md-3 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='1950'></div><div class='col-md-2 poptdrow'><input type='text' class='form-control poptdtext' placeholder='Price' value='2200'></div><div class='col-md-1 poptdrow closeicon'>&nbsp;</div></div>";
            add_row_button="<div class='row model-add-row'><div class='adbtn'><a id='addpriceband' onclick=''><img src='assets/img/add-row.png'><span>Add</span></a></div></div>";
            save_buttons="<div class='row model-buttons'><div class='savebut pricesave'>SAVE</div><div class='resetbut pricereset'>RESET</div></div>";
            var generate_price_model="<div role='dialog' class='modal fade' id='priceModal'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'>"+model_heading+"</div><div class='modal-body'>"+type_div+"<div class='poptab'><div class='addpricerow'>"+add_rows+"</div>"+add_row_button+"</div>"+save_buttons+"</div></div></div></div>";
            $('body').append(generate_price_model);
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
    $('body').on('click', '.weekreset', function() {
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
    $('body').on('click', '.pricereset', function() {
        count=0;
        $( ".poptdtext" ).each(function() {
            count++;
            if(count == 1)
                $( this ).focus();
            $( this ).addClass( "errorbox" );
            $( this ).val("");
        });
    });
    $('body').on('click', '.weeksave', function() {
        count=0; var r=0; var k=0; var s=0;
        $('.weekcheckbox').each(function(){
            r++
            if($(this).prop('checked'))
                s++;
            if((r%7)==0){
                if(s==0){
                    k++;
                }s=0;
            }
            if(k>0)
                $('.weekerror').addClass('weekerror-show');
            else
                $('.weekerror').removeClass('weekerror-show');
        });
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
    $('body').on('click', '.pricesave', function() {
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
    $('body').on('click', '.closeicon', function() {
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
    $('body').on('click', '#addweekprice', function() {
        $(".addweekrow").append("<div class='row poprecord'><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-1 poptdrow'><label><input type='checkbox' class='weekcheckbox'></label></div><div class='col-md-2 poptdrow'><input type='text' placeholder='Price' class='form-control poptdtext'></div><div class='col-md-2 poptdrow'><input type='text' placeholder='Price' class='form-control poptdtext'></div><div class='col-md-1 poptdrow showcloseicon'>&nbsp;</div></div>");
        $(".showcloseicon").click(function(){
            $(this).parent('div').remove();
        });
    });
    $('body').on('click', '#addpriceband', function() {
        $(".addpricerow").append("<div class='row poprecord'><div class='col-md-3 poptdrow'><input type='text' placeholder='Min' class='form-control poptdtext'></div><div class='col-md-3 poptdrow'><input type='text' placeholder='Max' class='form-control poptdtext'></div><div class='col-md-3 poptdrow'><input type='text' placeholder='Price' class='form-control poptdtext'></div><div class='col-md-2 poptdrow'><input type='text' placeholder='Price' class='form-control poptdtext'></div><div class='col-md-1 poptdrow showcloseicon'>&nbsp;</div></div>");
        $(".showcloseicon").click(function(){
            $(this).parent('div').remove();
        });
    });
    options_hidden_hold_str="";
    extras_hidden_hold_str="";
    options_holdrows = [];
    extras_holdrows = [];
    $('body').on('click', '.rowyesbut', function() {
        if(options_holdrows.length>0) {
            $('#delete_option_prices').val(options_hidden_hold_str.slice(0,-1));
            $.each( options_holdrows, function( key, value ) {
                $(value).remove();
            });
            $('#edit_options_price_row').removeClass("butactive");
            $('#remove_options_price_row').removeClass("delactive");
            $('#add_options_price_row').removeClass("butactive");
        }else if(extras_holdrows.length>0) {
            $('#delete_extra_prices').val(extras_hidden_hold_str.slice(0,-1));
            $.each( extras_holdrows, function( key, value ) {
                $(value).remove();
            });
            $('#edit_extras_price_row').removeClass("butactive");
            $('#remove_extras_price_row').removeClass("delactive");
            $('#add_extras_price_row').removeClass("butactive");
        }
        $('.rowdelpopup').css("display","none");
    });
    $(".rownobut").click(function(){
        $('.rowdelpopup').css("display","none");
    });
    $('body').on('click', '#remove_options_price_row', function() {
        options_hidden_hold_str="";
        extras_hidden_hold_str="";
        options_holdrows = [];
        extras_holdrows = [];
        var i=0;
        options_hidden_hold_str=$('#delete_option_prices').val();
        if(options_hidden_hold_str!="")
            options_hidden_hold_str+=",";
        $('.optcheckbox:checked').each(function(){
            options_holdrows[i]="#"+$($(this).closest('tr')).attr('id');
            options_hidden_hold_str+=$(this).val()+",";
            i++;
        });
        if(i>0){
            $('.rowdelpopup').css("display","block");
        }
    });
    options_actRow="";
    $("#edit_options_price_row").on('click', function(){
        if($('.optcheckbox:checked').length==1 && $('.prices-options-row-option-name').length==0) {
            optrowid=$('.optcheckbox:checked').val();
            options_actRow=$('#prices_options_row_'+optrowid).html();
            if($("#prices_options_row_"+optrowid).children().size()==12)
            appendStr="<td><input type='hidden' id='options_hidden_"+optrowid+"'><input id='prices_options_row_selection_"+optrowid+"' class='optcheckbox' name='prices_options_row_selection' type='checkbox' value='"+optrowid+"' checked></td><td><input type='text' id='prices_options_row_option_name_"+optrowid+"' class='form-control tdtext inputval prices-options-row-option-name' name='prices_options_row_option_name' placeholder='Name' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(2)').html()+"' ></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_occupancy_id_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-occupancy-id' name='prices_options_row_occupancy_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(3)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(3)').html()+"</option></select></div></td><td><div class='elehold'><label for='prices_options_row_start_date_"+optrowid+"'><i class='datecalicon'></i></label><input id='prices_options_row_start_date_"+optrowid+"' class='form-control opttddatetxt inputval prices-options-row-start-date' name='prices_options_row_start_date' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(4)').html()+"' placeholder='From Date'></div></td><td><div class='elehold'><label for='prices_options_row_end_date_"+optrowid+"'><i class='datecalicon'></i></label><input id='prices_options_row_end_date_"+optrowid+"' class='form-control opttddatetxt inputval prices-options-row-end-date' name='prices_options_row_end_date' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(5)').html()+"' placeholder='To Date'></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_charging_policy_id_"+optrowid+"' class='form-control tdpriceband inputval prices-options-row-charging-policy-id' name='prices_options_row_charging_policy_id' onchange='showPriceBox(this.value, this)'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"</option><option value='Week Price'>Week Price</option><option value='Price Band'>Price Band</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_meal_plan_id_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-meal-plan-id' name='prices_options_row_meal_plan_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(7)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(7)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_currency_id_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-currency-id' name='prices_options_row_currency_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(8)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(8)').html()+"</option></select></div></td><td><input id='prices_options_row_buy_price_"+optrowid+"' class='form-control tdsmtxt inputval prices-options-row-buy-price' name='prices_options_row_buy_price' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(9)').html()+"' placeholder='Price'></td><td><input id='prices_options_row_sell_price_"+optrowid+"' class='form-control tdsmtxt inputval prices-options-row-sell-price' name='prices_options_row_sell_price' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(10)').html()+"' placeholder='Price'></td><td><input id='prices_options_row_price_margin_"+optrowid+"' class='form-control tdsmtxt inputval prices-options-row-price-margin' name='prices_options_row_price_margin' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(11)').html()+"' placeholder='%'></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_status_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-status' name='prices_options_row_status'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(12)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(12)').html()+"</option></select></div></td>";
            else if($("#prices_options_row_"+optrowid).children().size()==11)
            appendStr="<td><input type='hidden' id='options_hidden_"+optrowid+"'><input id='prices_options_row_selection_"+optrowid+"' class='optcheckbox' name='prices_options_row_selection' type='checkbox' value='"+optrowid+"' checked></td><td><input type='text' id='prices_options_row_option_name_"+optrowid+"' class='form-control tdtext inputval prices-options-row-option-name' name='prices_options_row_option_name' placeholder='Name' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(2)').html()+"' ></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_occupancy_id_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-occupancy-id' name='prices_options_row_occupancy_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(3)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(3)').html()+"</option></select></div></td><td><div class='elehold'><label for='prices_options_row_start_date_"+optrowid+"'><i class='datecalicon'></i></label><input id='prices_options_row_start_date_"+optrowid+"' class='form-control opttddatetxt inputval prices-options-row-start-date' name='prices_options_row_start_date' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(4)').html()+"' placeholder='From Date'></div></td><td><div class='elehold'><label for='prices_options_row_end_date_"+optrowid+"'><i class='datecalicon'></i></label><input id='prices_options_row_end_date_"+optrowid+"' class='form-control opttddatetxt inputval prices-options-row-end-date' name='prices_options_row_end_date' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(5)').html()+"' placeholder='To Date'></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_charging_policy_id_"+optrowid+"' class='form-control tdpriceband inputval prices-options-row-charging-policy-id' name='prices_options_row_charging_policy_id' onchange='showPriceBox(this.value, this)'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"</option><option value='Week Price'>Week Price</option><option value='Price Band'>Price Band</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_meal_plan_id_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-meal-plan-id' name='prices_options_row_meal_plan_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(7)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(7)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_currency_id_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-currency-id' name='prices_options_row_currency_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(8)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(8)').html()+"</option></select></div></td><td colspan='2'><span class='edit-price' data-model-type='"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"'>Edit Price</span></td><td><input id='prices_options_row_price_margin_"+optrowid+"' class='form-control tdsmtxt inputval prices-options-row-price-margin' name='prices_options_row_price_margin' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(10)').html()+"' placeholder='%'></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_status_"+optrowid+"' class='form-control tdtxtsel inputval prices-options-row-status' name='prices_options_row_status'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(11)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(11)').html()+"</option></select></div></td>";
            $("#prices_options_row_"+optrowid).empty();
            $("#prices_options_row_"+optrowid).append(appendStr);
            $(".opttddatetxt").daterangepicker({
                singleDatePicker: true,
                "autoUpdateInput": true,
                locale: {
                    format: 'YYYY-MM-DD'
                }
            },function(){
                setTimeout(function () {
                    datefrom = new Date($(".prices-options-row-start-date").val());
                    dateto = new Date($(".prices-options-row-end-date").val());
                    if(dateto<=datefrom){
                        $(".prices-options-row-end-date").addClass("errorbox");
                    }else{
                        $(".prices-options-row-end-date").removeClass("errorbox");
                    }
                }, 100);
            });
        }
    });
    $("#add_options_price_row").on('click', function(){
        if($('.optcheckbox:checked').length==1 && $('.tdtext').length==0) {
            optrowid=$('.optcheckbox:checked').val();
            newid=$('.optcheckbox').length+1;
            rowStr=$("#prices_options_row_"+optrowid).html();
            if($("#prices_options_row_"+optrowid).children().size()==12){
                appendStr="<tr class='prices-options-row' id='prices_options_row_"+newid+"'><td><input type='hidden' id='options_hidden_"+newid+"'><input id='prices_options_row_selection_"+newid+"' class='optcheckbox' name='prices_options_row_selection' type='checkbox' value='"+newid+"' checked></td><td><input type='text' id='prices_options_row_option_name_"+newid+"' class='form-control tdtext inputval prices-options-row-option-name' name='prices_options_row_option_name' placeholder='Name' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(2)').html()+"' ></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_occupancy_id_"+newid+"' class='form-control tdtxtsel inputval prices-options-row-occupancy-id' name='prices_options_row_occupancy_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(3)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(3)').html()+"</option></select></div></td><td><div class='elehold'><label for='prices_options_row_start_date_"+newid+"'><i class='datecalicon'></i></label><input id='prices_options_row_start_date_"+newid+"' class='form-control opttddatetxt inputval prices-options-row-start-date' name='prices_options_row_start_date' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(4)').html()+"' placeholder='From Date'></div></td><td><div class='elehold'><label for='prices_options_row_end_date_"+newid+"'><i class='datecalicon'></i></label><input id='prices_options_row_end_date_"+newid+"' class='form-control opttddatetxt inputval prices-options-row-end-date' name='prices_options_row_end_date' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(5)').html()+"' placeholder='To Date'></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_charging_policy_id_"+newid+"' class='form-control tdpriceband inputval prices-options-row-charging-policy-id' name='prices_options_row_charging_policy_id' onchange='showPriceBox(this.value, this)'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"</option><option value='Week Price'>Week Price</option><option value='Price Band'>Price Band</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_meal_plan_id_"+newid+"' class='form-control tdtxtsel inputval prices-options-row-meal-plan-id' name='prices_options_row_meal_plan_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(7)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(7)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_currency_id_"+newid+"' class='form-control tdtxtsel inputval prices-options-row-currency-id' name='prices_options_row_currency_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(8)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(8)').html()+"</option></select></div></td><td><input id='prices_options_row_buy_price_"+newid+"' class='form-control tdsmtxt inputval prices-options-row-buy-price' name='prices_options_row_buy_price' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(9)').html()+"' placeholder='Price'></td><td><input id='prices_options_row_sell_price_"+newid+"' class='form-control tdsmtxt inputval prices-options-row-sell-price' name='prices_options_row_sell_price' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(10)').html()+"' placeholder='Price'></td><td><input id='prices_options_row_price_margin_"+newid+"' class='form-control tdsmtxt inputval prices-options-row-price-margin' name='prices_options_row_price_margin' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(11)').html()+"' placeholder='%'></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_status_"+newid+"' class='form-control tdtxtsel inputval prices-options-row-status' name='prices_options_row_status'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(12)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(12)').html()+"</option></select></div></td></tr>";
            }else if($("#prices_options_row_"+optrowid).children().size()==11){
                appendStr="<tr class='prices-options-row' id='prices_options_row_"+newid+"'><td><input type='hidden' id='options_hidden_"+newid+"'><input id='prices_options_row_selection_"+newid+"' class='optcheckbox' name='prices_options_row_selection' type='checkbox' value='"+newid+"' checked></td><td><input type='text' id='prices_options_row_option_name_"+newid+"' class='form-control tdtext inputval prices-options-row-option-name' name='prices_options_row_option_name' placeholder='Name' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(2)').html()+"' ></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_occupancy_id_"+newid+"' class='form-control tdtxtsel inputval prices-options-row-occupancy-id' name='prices_options_row_occupancy_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(3)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(3)').html()+"</option></select></div></td><td><div class='elehold'><label for='prices_options_row_start_date_"+newid+"'><i class='datecalicon'></i></label><input id='prices_options_row_start_date_"+newid+"' class='form-control opttddatetxt inputval prices-options-row-start-date' name='prices_options_row_start_date' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(4)').html()+"' placeholder='From Date'></div></td><td><div class='elehold'><label for='prices_options_row_end_date_"+newid+"'><i class='datecalicon'></i></label><input id='prices_options_row_end_date_"+newid+"' class='form-control opttddatetxt inputval prices-options-row-end-date' name='prices_options_row_end_date' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(5)').html()+"' placeholder='To Date'></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_charging_policy_id_"+newid+"' class='form-control tdpriceband inputval prices-options-row-charging-policy-id' name='prices_options_row_charging_policy_id' onchange='showPriceBox(this.value, this)'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"</option><option value='Week Price'>Week Price</option><option value='Price Band'>Price Band</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_meal_plan_id_"+newid+"' class='form-control tdtxtsel inputval prices-options-row-meal-plan-id' name='prices_options_row_meal_plan_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(7)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(7)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_currency_id_"+newid+"' class='form-control tdtxtsel inputval prices-options-row-currency-id' name='prices_options_row_currency_id'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(8)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(8)').html()+"</option></select></div></td><td colspan='2'><span class='edit-price' data-model-type='"+$('#prices_options_row_'+optrowid).children('td:nth-child(6)').html()+"'>Edit Price</span></td><td><input id='prices_options_row_price_margin_"+newid+"' class='form-control tdsmtxt inputval prices-options-row-price-margin' name='prices_options_row_price_margin' type='text' value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(10)').html()+"' placeholder='%'></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_options_row_status_"+newid+"' class='form-control tdtxtsel inputval prices-options-row-status' name='prices_options_row_status'><option value='"+$('#prices_options_row_'+optrowid).children('td:nth-child(11)').html()+"'>"+$('#prices_options_row_'+optrowid).children('td:nth-child(11)').html()+"</option></select></div></td></tr>";
            }
            $("#prices_option_table").append(appendStr);
            $("#prices_options_row_selection_"+optrowid+":checked").prop('checked', false);
            $(".opttddatetxt").daterangepicker({
                singleDatePicker: true,
                "autoUpdateInput": true,
                locale: {
                    format: 'YYYY-MM-DD'
                }
            },function(){
                setTimeout(function () {
                    datefrom = new Date($(".prices-options-row-start-date").val());
                    dateto = new Date($(".prices-options-row-end-date").val());
                    if(dateto<=datefrom){
                        $(".prices-options-row-end-date").addClass("errorbox");
                    }else{
                        $(".prices-options-row-end-date").removeClass("errorbox");
                    }
                }, 100);
            });
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
        $("#options_date_range_from").val(picker.startDate.format('YYYY-MM-DD'));
        $("#options_date_range_to").val(picker.endDate.format('YYYY-MM-DD'));
    });
    $("#add_extras_price_row").on('click', function(){
        if($('.extcheckbox:checked').length==1 && $('.tdtext').length==0) {
            extrowid=$('.extcheckbox:checked').val();
            newid=$('.extcheckbox').length+1;
            rowStr=$("#prices_extras_row_"+extrowid).html();
            if($("#prices_extras_row_"+extrowid).children().size()==11){
                appendStr="<tr class='prices-extras-row' id='prices_extras_row_"+newid+"'><td><input type='hidden' id='extras_hidden_"+newid+"'><input id='prices_extras_row_selection_"+newid+"' class='extcheckbox' name='prices_extras_row_selection' type='checkbox' value='"+newid+"' checked></td><td><input type='text' id='prices_extras_row_extra_name_"+newid+"' class='form-control tdtext inputval prices-extras-row-extra-name' name='prices_extras_row_extra_name' placeholder='Name' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(2)').html()+"'></td><td><div class='elehold'><label for='prices_extras_row_start_date_"+newid+"'><i class='datecalicon'></i></label><input id='prices_extras_row_start_date_"+newid+"' class='form-control exttddatetxt inputval prices-extras-row-start-date' name='prices_extras_row_start_date' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(3)').html()+"' type='text' placeholder='From Date'></div></td><td><div class='elehold'><label for='prices_extras_row_end_date_"+newid+"'><i class='datecalicon'></i></label><input id='prices_extras_row_end_date_"+newid+"' class='form-control exttddatetxt inputval prices-extras-row-end-date' name='prices_extras_row_end_date' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(4)').html()+"' type='text' placeholder='To Date'></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_charging_policy_id_"+newid+"' class='form-control tdpriceband inputval prices-extras-row-charging-policy-id' name='prices_extras_row_charging_policy_id' onchange='showPriceBox(this.value, this)'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"</option><option value='Week Price'>Week Price</option><option value='Price Band'>Price Band</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_mandatory_id_"+newid+"' class='form-control tdtxtsel inputval prices-extras-row-mandatory-id' name='prices_extras_row_mandatory_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(6)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(6)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_currency_id_"+newid+"' class='form-control tdtxtsel inputval prices-extras-row-currency-id' name='prices_extras_row_currency_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(7)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(7)').html()+"</option></select></div></td><td><input id='prices_extras_row_buy_price_"+newid+"' class='form-control tdsmtxt inputval prices-extras-row-buy-price' name='prices_extras_row_buy_price' type='text' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(8)').html()+"' placeholder='Price'></td><td><input id='prices_extras_row_sell_price_"+newid+"' class='form-control tdsmtxt inputval prices-extras-row-sell-price' name='prices_extras_row_sell_price' type='text' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(9)').html()+"' placeholder='Price'></td><td><input id='prices_extras_row_price_margin_"+newid+"' class='form-control tdsmtxt inputval prices-extras-row-price-margin' name='prices_extras_row_price_margin' type='text' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(10)').html()+"' placeholder='%'></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_status_"+newid+"' class='form-control tdtxtsel inputval prices-extras-row-status' name='prices_extras_row_status'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(11)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(11)').html()+"</option></select></div></td></tr>";
            }else if($("#prices_extras_row_"+extrowid).children().size()==10){
                appendStr="<tr class='prices-extras-row' id='prices_extras_row_"+newid+"'><td><input type='hidden' id='extras_hidden_"+newid+"'><input id='prices_extras_row_selection_"+newid+"' class='extcheckbox' name='prices_extras_row_selection' type='checkbox' value='"+newid+"' checked></td><td><input type='text' id='prices_extras_row_extra_name_"+newid+"' class='form-control tdtext inputval prices-extras-row-extra-name' name='prices_extras_row_extra_name' placeholder='Name' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(2)').html()+"'></td><td><div class='elehold'><label for='prices_extras_row_start_date_"+newid+"'><i class='datecalicon'></i></label><input id='prices_extras_row_start_date_"+newid+"' class='form-control exttddatetxt inputval prices-extras-row-start-date' name='prices_extras_row_start_date' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(3)').html()+"' type='text' placeholder='From Date'></div></td><td><div class='elehold'><label for='prices_extras_row_end_date_"+newid+"'><i class='datecalicon'></i></label><input id='prices_extras_row_end_date_"+newid+"' class='form-control exttddatetxt inputval prices-extras-row-end-date' name='prices_extras_row_end_date' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(4)').html()+"' type='text' placeholder='To Date'></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_charging_policy_id_"+newid+"' class='form-control tdpriceband inputval prices-extras-row-charging-policy-id' name='prices_extras_row_charging_policy_id' onchange='showPriceBox(this.value, this)'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"</option><option value='Week Price'>Week Price</option><option value='Price Band'>Price Band</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_mandatory_id_"+newid+"' class='form-control tdtxtsel inputval prices-extras-row-mandatory-id' name='prices_extras_row_mandatory_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(6)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(6)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_currency_id_"+newid+"' class='form-control tdtxtsel inputval prices-extras-row-currency-id' name='prices_extras_row_currency_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(7)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(7)').html()+"</option></select></div></td><td colspan='2'><span class='edit-price' data-model-type='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"'>Edit Price</span></td><td><input id='prices_extras_row_price_margin_"+newid+"' class='form-control tdsmtxt inputval prices-extras-row-price-margin' name='prices_extras_row_price_margin' type='text' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(9)').html()+"' placeholder='%'></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_status_"+newid+"' class='form-control tdtxtsel inputval prices-extras-row-status' name='prices_extras_row_status'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(10)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(10)').html()+"</option></select></div></td><tr>";
            }
            $("#prices_extra_table").append(appendStr);
            $("#prices_extras_row_selection_"+extrowid+":checked").prop('checked', false);
            $(".exttddatetxt").daterangepicker({
                singleDatePicker: true,
                "autoUpdateInput": true,
                locale: {
                    format: 'YYYY-MM-DD'
                }
            },function(){
                setTimeout(function () {
                    datefrom = new Date($(".prices-extras-row-start-date").val());
                    dateto = new Date($(".prices-extras-row-end-date").val());
                    if(dateto<=datefrom){
                        $(".prices-extras-row-end-date").addClass("errorbox");
                    }else{
                        $(".prices-extras-row-end-date").removeClass("errorbox");
                    }
                }, 100);
            });
        }
    });
    extras_actRow="";
    $("#edit_extras_price_row").on('click', function(){
        if($('.extcheckbox:checked').length==1 && $('.prices-extras-row-extra-name').length==0) {
            extrowid=$('.extcheckbox:checked').val();
            extras_actRow=$('#prices_extras_row_'+extrowid).html();
            if($("#prices_extras_row_"+extrowid).children().size()==11)
            appendStr="<td><input type='hidden' id='extras_hidden_"+extrowid+"'><input id='prices_extras_row_selection_"+extrowid+"' class='extcheckbox' name='prices_extras_row_selection' type='checkbox' value='"+extrowid+"' checked></td><td><input type='text' id='prices_extras_row_extra_name_"+extrowid+"' class='form-control tdtext inputval prices-extras-row-extra-name' name='prices_extras_row_extra_name' placeholder='Name' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(2)').html()+"'></td><td><div class='elehold'><label for='prices_extras_row_start_date_"+extrowid+"'><i class='datecalicon'></i></label><input id='prices_extras_row_start_date_"+extrowid+"' class='form-control exttddatetxt inputval prices-extras-row-start-date' name='prices_extras_row_start_date' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(3)').html()+"' type='text' placeholder='From Date'></div></td><td><div class='elehold'><label for='prices_extras_row_end_date_"+extrowid+"'><i class='datecalicon'></i></label><input id='prices_extras_row_end_date_"+extrowid+"' class='form-control exttddatetxt inputval prices-extras-row-end-date' name='prices_extras_row_end_date' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(4)').html()+"' type='text' placeholder='To Date'></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_charging_policy_id_"+extrowid+"' class='form-control tdpriceband inputval prices-extras-row-charging-policy-id' name='prices_extras_row_charging_policy_id' onchange='showPriceBox(this.value, this)'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"</option><option value='Week Price'>Week Price</option><option value='Price Band'>Price Band</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_mandatory_id_"+extrowid+"' class='form-control tdtxtsel inputval prices-extras-row-mandatory-id' name='prices_extras_row_mandatory_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(6)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(6)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_currency_id_"+extrowid+"' class='form-control tdtxtsel inputval prices-extras-row-currency-id' name='prices_extras_row_currency_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(7)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(7)').html()+"</option></select></div></td><td><input id='prices_extras_row_buy_price_"+extrowid+"' class='form-control tdsmtxt inputval prices-extras-row-buy-price' name='prices_extras_row_buy_price' type='text' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(8)').html()+"' placeholder='Price'></td><td><input id='prices_extras_row_sell_price_"+extrowid+"' class='form-control tdsmtxt inputval prices-extras-row-sell-price' name='prices_extras_row_sell_price' type='text' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(9)').html()+"' placeholder='Price'></td><td><input id='prices_extras_row_price_margin_"+extrowid+"' class='form-control tdsmtxt inputval prices-extras-row-price-margin' name='prices_extras_row_price_margin' type='text' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(10)').html()+"' placeholder='%'></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_status_"+extrowid+"' class='form-control tdtxtsel inputval prices-extras-row-status' name='prices_extras_row_status'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(11)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(11)').html()+"</option></select></div></td>";
            else if($("#prices_extras_row_"+extrowid).children().size()==10)
            appendStr="<td><input type='hidden' id='extras_hidden_"+extrowid+"'><input id='prices_extras_row_selection_"+extrowid+"' class='extcheckbox' name='prices_extras_row_selection' type='checkbox' value='"+extrowid+"' checked></td><td><input type='text' id='prices_extras_row_extra_name_"+extrowid+"' class='form-control tdtext inputval prices-extras-row-extra-name' name='prices_extras_row_extra_name' placeholder='Name' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(2)').html()+"'></td><td><div class='elehold'><label for='prices_extras_row_start_date_"+extrowid+"'><i class='datecalicon'></i></label><input id='prices_extras_row_start_date_"+extrowid+"' class='form-control exttddatetxt inputval prices-extras-row-start-date' name='prices_extras_row_start_date' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(3)').html()+"' type='text' placeholder='From Date'></div></td><td><div class='elehold'><label for='prices_extras_row_end_date_"+extrowid+"'><i class='datecalicon'></i></label><input id='prices_extras_row_end_date_"+extrowid+"' class='form-control exttddatetxt inputval prices-extras-row-end-date' name='prices_extras_row_end_date' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(4)').html()+"' type='text' placeholder='To Date'></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_charging_policy_id_"+extrowid+"' class='form-control tdpriceband inputval prices-extras-row-charging-policy-id' name='prices_extras_row_charging_policy_id' onchange='showPriceBox(this.value, this)'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"</option><option value='Week Price'>Week Price</option><option value='Price Band'>Price Band</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_mandatory_id_"+extrowid+"' class='form-control tdtxtsel inputval prices-extras-row-mandatory-id' name='prices_extras_row_mandatory_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(6)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(6)').html()+"</option></select></div></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_currency_id_"+extrowid+"' class='form-control tdtxtsel inputval prices-extras-row-currency-id' name='prices_extras_row_currency_id'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(7)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(7)').html()+"</option></select></div></td><td colspan='2'><span class='edit-price' data-model-type='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(5)').html()+"'>Edit Price</span></td><td><input id='prices_extras_row_price_margin_"+extrowid+"' class='form-control tdsmtxt inputval prices-extras-row-price-margin' name='prices_extras_row_price_margin' type='text' value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(9)').html()+"' placeholder='%'></td><td><div class='elehold'><i class='dropdown-icon2 tdtxticon'></i><select id='prices_extras_row_status_"+extrowid+"' class='form-control tdtxtsel inputval prices-extras-row-status' name='prices_extras_row_status'><option value='"+$('#prices_extras_row_'+extrowid).children('td:nth-child(10)').html()+"'>"+$('#prices_extras_row_'+extrowid).children('td:nth-child(10)').html()+"</option></select></div></td>";
            $("#prices_extras_row_"+extrowid).empty();
            $("#prices_extras_row_"+extrowid).append(appendStr);
            $(".exttddatetxt").daterangepicker({
                singleDatePicker: true,
                "autoUpdateInput": true,
                locale: {
                    format: 'YYYY-MM-DD'
                }
            },function(){
                setTimeout(function () {
                    datefrom = new Date($(".prices-extras-row-start-date").val());
                    dateto = new Date($(".prices-extras-row-end-date").val());
                    if(dateto<=datefrom){
                        $(".prices-extras-row-end-date").addClass("errorbox");
                    }else{
                        $(".prices-extras-row-end-date").removeClass("errorbox");
                    }
                }, 100);
            });
        }
    });
    $('body').on('click', '#remove_extras_price_row', function() {
        var i=0;
        extras_holdrows=[];
        extras_hidden_hold_str=$('#delete_extra_prices').val();
        if(extras_hidden_hold_str!="")
            extras_hidden_hold_str+=",";
        $('.extcheckbox:checked').each(function(){
            extras_holdrows[i]="#"+$($(this).closest('tr')).attr('id');
            extras_hidden_hold_str+=$(this).val()+",";
            i++;
        });
        if(i>0){
            $('.rowdelpopup').css("display","block");
        }
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
        $("#extras_date_range_from").val(picker.startDate.format('YYYY-MM-DD'));
        $("#extras_date_range_to").val(picker.endDate.format('YYYY-MM-DD'));
    });
    $('body').on('change', '.optcheckall', function() {
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
    $('body').on('change', '.extcheckall', function() {
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
        if (options_actRow != "") {
            $("#prices_options_row_" + optrowid).empty();
            $("#prices_options_row_" + optrowid).append(options_actRow);
            options_actRow = "";
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
        if (extras_actRow != "") {
            $("#prices_extras_row_" + extrowid).empty();
            $("#prices_extras_row_" + extrowid).append(extras_actRow);
            extras_actRow = "";
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
    $('body').on('click', '.prices-options-row-sell-price', function() {
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
    $('body').on('keyup', '.prices-options-row-sell-price', function() {
        if(parseInt($(".prices-options-row-sell-price").val()) >= parseInt($(".prices-options-row-buy-price").val())){
            var diffval=parseInt($(this).val())-parseInt($(".prices-options-row-buy-price").val());
            $(".prices-options-row-price-margin").val(Math.ceil((diffval/$(".prices-options-row-buy-price").val())*100)+"%");
            $(".prices-options-row-sell-price").removeClass("errorbox");
            $(".prices-options-row-buy-price").removeClass("errorbox");
        }else{
            $(".prices-options-row-sell-price").addClass("errorbox");
            $(".prices-options-row-price-margin").val("");
        }
    });
    $('body').on('keyup', '.prices-options-row-price-margin', function() {
        if(parseInt($(".prices-options-row-buy-price").val()) > 0){
            if($(this).val()!="" && $(this).val()!="%"){
                var diffval=(parseInt($(this).val())/100)*parseInt($(".prices-options-row-buy-price").val());
                $(".prices-options-row-sell-price").val(Math.ceil(diffval)+parseInt($(".prices-options-row-buy-price").val()));
                $(".prices-options-row-sell-price").removeClass("errorbox");
                $(".prices-options-row-buy-price").removeClass("errorbox");
            }
        }else{
            $(".prices-options-row-buy-price").addClass("errorbox");
        }
    });
    $('body').on('keyup', '.prices-extras-row-sell-price', function() {
        if(parseInt($(".prices-extras-row-sell-price").val()) >= parseInt($(".prices-extras-row-buy-price").val())){
            var diffval=parseInt($(this).val())-parseInt($(".prices-extras-row-buy-price").val());
            $(".prices-extras-row-price-margin").val(Math.ceil((diffval/$(".prices-extras-row-buy-price").val())*100)+"%");
            $(".prices-extras-row-sell-price").removeClass("errorbox");
            $(".prices-extras-row-buy-price").removeClass("errorbox");
        }else{
            $(".prices-extras-row-sell-price").addClass("errorbox");
            $(".prices-extras-row-price-margin").val("");
        }
    });
    $('body').on('keyup', '.prices-extras-row-price-margin', function() {
        if(parseInt($(".prices-extras-row-buy-price").val()) > 0){
            if($(this).val()!="" && $(this).val()!="%"){
                var diffval=(parseInt($(this).val())/100)*parseInt($(".prices-extras-row-buy-price").val());
                $(".prices-extras-row-sell-price").val(Math.ceil(diffval)+parseInt($(".prices-extras-row-buy-price").val()));
                $(".prices-extras-row-sell-price").removeClass("errorbox");
                $(".prices-extras-row-buy-price").removeClass("errorbox");
            }
        }else{
            $(".prices-extras-row-buy-price").addClass("errorbox");
        }
    });
});


