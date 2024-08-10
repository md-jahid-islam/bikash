$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        $('#login').addClass('hidden');
        $('#dashboard').removeClass('hidden');
    });

    $('#transactionButton').on('click', function() {
        $('#dashboard').addClass('hidden');
        $('#transaction').removeClass('hidden');
    });

    $('#backButton').on('click', function() {
        $('#transaction').addClass('hidden');
        $('#dashboard').removeClass('hidden');
    });

    $('#logoutButton').on('click', function() {
        $('#dashboard').addClass('hidden');
        $('#login').removeClass('hidden');
    });

    $('#transactionForm').on('submit', function(event) {
        event.preventDefault();
        alert('Transaction Successful!');
        $('#transaction').addClass('hidden');
        $('#dashboard').removeClass('hidden');
    });
});
