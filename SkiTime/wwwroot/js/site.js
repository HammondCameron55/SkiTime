// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

    $(document).ready(function() {
        $('#positiveIntegerInput').on('input', function () {
            var value = $(this).val();
            // Check if the value is not a positive integer
            if (!/^\d+$/.test(value) && value != '') {
                // If not, remove the last character entered
                $(this).val(value.replace(/[^0-9]/g, ''));
            }
        });
});

$(document).ready(function() {
    $('#calculateButton').click(function () {

        var inputValue = parseInt($('#positiveIntegerInput').val(), 10);

        if (!isNaN(inputValue)) {

            var calculatedValue = inputValue * 55;

            $('#resultBox').text(calculatedValue);

        }
        else {
            $('#resultBox').text('Please enter a valid integer.');
        }

              
    
    // Display the calculated float in the resultBox
    //$('#resultBox').text(calculatedFloat.toFixed(2)); // .toFixed(2) limits the float to 2 decimal places
  });
});


