$(function () {
  

  $('html').append('<a style="display:none" class="savestagram_hidden" href="" download></a>');
  $('html').append('<a class="savestagram_button"><img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AUIDhcpmmsnTQAAB4VJREFUeNrt3VtyGjsUBdAWj3GZSsZgptPNdMwYQlXm5Ub3w9cux7EdMGA9zlp/+XGgpbN1JJomDTeWc84D8CUppXTTv6/gIW4gJIUPcYMgKXyIGwRJ4UPcIEiKH+KGQFL4EDcIkuKHuCGQFD/EDYGk+CFuCCTFD3FDICl+iBsCC5cGAgeD1R/idgFJ8UPcELAFAFsAqz9E7AJ0AKADsPpDxC5ABwCBLaz+EM/dOK5etgACAGJuA2wBIPoWAAjaBWj/QQcACABAAAACABAAgAAABAAgAKB28zEfUmHzMR9qvkZuBKIr1/rZ7NvIKefhqAOAcMX/tN7W9hoFAIo/8GsVACj+Iq+5jtoTAFBoOyAAAAEAX1X7x2z19yE+BsT+v5jS9acDAFsAQAAAAgAQAIAAAAQAIAAAAQAIAEAAAAIAEACAAAAEACAAAAEACABAAAACABAAgAAABAAgAAABAAgAQAAAAgAQAIAAAAQAIACI4XE+/mr1teecc+nXkGp4EXDRJE4pCQAdACAAiCcnr1kAELX883D0mgUAoUOgnbOsml6rQ8BATj8sy6nFVfXpPQ6LYUiVzun6rqsOoNNCf88568K7f2Cali201vmVGlb7V6+mulDVAYRa2a/rcT7+Wi7SDyPQ8NwRAIo+2h4cW4Amzcd8OL+d//5th5ESAFyzuKZpmVJKq+XiZ0tnEEbOFoALC3/Y7Y6tvw9zTADQ+B7/CjHQ7EeLAgCFrxsQACh+QSAAUPhCoBM+BVD83rsOAAWgG9ABoPhdDwHA7Wy3+5XJLgQEQECbaVrv99vZlRACzgBMbpwJ6AAUP66XADCZcd0EgEkMAkDx4xoKgLYnrmsrBARA5GnrFFsICACTFQRAnOJv4NHZghUBcCsdPMJLwEbaqLrjygrVGHO2ow7g7Y/PbKZpbVjoMWhfP9a9licnF+8ATrkILSS+1V8X0OLcXrWa+NpAXUBtc6DFRWDV8gSoJRCs/rYhzgAMCAX21OaaACjKoWXB9rXQT6X1tP3sJgDuxrHIdub3bveoFGm2c27hU4CaU9nWo7wSY9/6vLUFUPwgACDyOYAAAB2ANMZWTABg0iEAAAEACACoX4k7Mns4e+riRqCWbwSh7YK8dB64EQgQAG2lvuBEAATmmf8IAEAAAAIAEACAAAAEACAAupPdBYgACFv+efADoAgAQABAcaUeC9+65r8N6HHgtDwPfBsQEACAAGimFfckYgQABN7/CwBAAEBEPXwSJAC0nugAQAgLgEbNx3wo9X+7A42mtzE9/C5A6ZXAXYExV/9Wf9PCFgAuLf5pWuoAdAC6gKAdQC/zVgeA4g+smwAovQKbkAgACBC22+1+JQDQBZQwjsXn7H6/nbvpnHs6PKuhAJ9+ONRvB/Ycsj3N2a46gBpO4j0wVIdlC2Cimqid6u3jXgGAUNUBSGgTVvELAExc1zBM+99tANQ0UEIAAWAVEwJWfwFgMuN6CYCwiX1//7A05RS/AAjq4eH+sYZbWRW/9v/lvfX+PfpaVxPPDzBWNbxnq5HJ7noEDuruA6DmARQCT9fAdRAAVj7v3eIhAGIOZMRVsPb329NDPz6tjSgP02ylwHpfdYxDXdcjzBaglcLqtxvISfHbAhjYc1aGTu4Z+D/SPChFAHBW4UzT3HIQtNjNRLs/I0X8QY1WW+z5mA+r5eKnfb65KACCTtJaV6oezi0iBoBftm14Xy1Etf7OAAz4y1775nvucVx8y/9jLugAvmvge/zI7b33dN75QU5O7YPUgF/VdU9+9EUg8tzzMSCKPzABYCIYcwGACWGsBYCJYWIYYwFggtCjKF/xFQBCgHeKf7/fzq6EABACwWymaa34BYAQCFr8v3e7R1figznuRqB/c6NQqwE+LIYhZXNLB6ATCDlmSXALACFgrBAAJpYxQgBcY4KZZIpfAJhsJls1YzEsjIcAEAJhx8BhnwCwJRDACACTUegiAExMQYsAMEmFK5/x9cgbh4DbiIWpDsDKZRKfe92maem66QB0BOGuU/1f4BEACAKtvgBAECh8ZwBc4YwgUiFst/uVsxEdAB+uhn3+NJeCFwCcVio5peGlWFreJih6WwCuuE2o/dHW6Q2jV/tS45mAzSs1hsau3bHTAXTaIfzt62O8mab1p38ZZwC0dZ4AOgBAAIAAAAQAIAAAAQAIAEAA3NQ4CiFCuhvH4vfhpBq+aOKuMiKqofasvmALAAgA4Ls2AEkAVLQXgu+d83U88WlRzwURAsRY+Wua61VtAfIbNXxMApe4G8fVn7O6rmc9JisvxOUQEAQAIAAAAQAIAEAAAAIA6I6fqIaoxZ9S0gGALQAgAIAQNtO0fjkDcA4A8fb/OgCIHgSv/6ELgDirvw4AdAB/0gVAjNVfBwA6gL/pAqD/1f/DABAC0H/x2wJAAPMxH87aAugCoP/V/58BIASg3+I/KQCEAPRZ/CcHgBCA/op/GM44BDz1DwLlzMd8OKdWv1TUugFod9W/OACEALRf/BcFgCCAdgv/agEgCKC9wn+2uOYLSiml50cNAde1mab1c51drW5v/aJ1BlB+pf/If01s1jdMSF8PAAAAAElFTkSuQmCC"/>download checked photos</a>');

  
  function addDownloadLinks() {

    $("img").each(function (i, obj) {
      if ($(obj).width() >= 600 && !$(obj).next().hasClass("savestagram_button") && !$(obj).next().hasClass("savestagram_check")) {
        var elem = '<input type="checkbox" class="savestagram_check">';
        $(obj).after(elem);
      }
    });
  }

  // Insert links to right corner of photos after DOM loaded
  addDownloadLinks();

  // Track scrolling for new images
  window.onscroll = function () {
    addDownloadLinks();
  }
  var imgArr = [];
  // Images url add stack every check
  $('.savestagram_check').click(function () {
    console.log("");
    var imglink = $(this).parent().find('img').attr('src');
    imgArr.push(imglink);
  })
  
  // Triggered OV's savestagram button
  $('.savestagram_button').click(function(){
    for(var i=0; i<imgArr.length; i++){
       $('.savestagram_hidden').attr('href',imgArr[i]);
       $('.savestagram_hidden')[0].click();
       $('.savestagram_hidden').attr('href','');
    }
  })
  
});
