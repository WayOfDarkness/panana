$(document).ready(function () {
    var current_gallery_id = $('.current-gallery-id').val();
    var current_gallery_status = $('.current-gallery-status').val();
    var next_gallery_id = $('.next-gallery-id').val();
    var customer_id = $('.customer-id').val();
    var point = parseInt($('.riddle-point').val());
    var current_point = parseInt($('.customer-point').val());
    var set_role_to_1 = $('.set-role-to-1').val();
    var set_role_to_2 = $('.set-role-to-2').val();

    for (var i = 0; i < set_role_to_1.split(' ').length; i++) {
        console.log(set_role_to_1[i]);
        console.log('-');
    }

    if (customer_id && point != 0 && current_gallery_status == 1) {

        // Update Point For User
        $.ajax({
            url: `/api/customer/set-point/${customer_id}`,
            type: "POST",
            data: {
                'point': current_point + point
            },
            success: function (result) { }
        });

        // Change The Current Riddle Status From Accessible To Solved
        $.ajax({
            type: 'POST',
            url: '/api/setRole',
            data: {
                'gallery_id': current_gallery_id,
                'customer_id': customer_id,
                'role': 2
            },
            success: function (result) { }
        });

        // Change The Next Riddle Status From Unavailable To Accessible
        $.ajax({
            type: 'POST',
            url: '/api/setRole',
            data: {
                'gallery_id': next_gallery_id,
                'customer_id': customer_id,
                'role': 1
            },
            success: function (result) { }
        });
    }

    if (customer_id && point == 0) {

        // Change The Domino Dance Riddle Status From Accessible To Solved
        for (var i = 14; i <= 17; i = i + 3) {
            $.ajax({
                type: 'POST',
                url: '/api/setRole',
                data: {
                    'gallery_id': i,
                    'customer_id': customer_id,
                    'role': 1
                },
                success: function (result) { }
            });
        }
        
        $.ajax({
            type: 'POST',
            url: '/api/setRole',
            data: {
                'gallery_id': current_gallery_id,
                'customer_id': customer_id,
                'role': 2
            },
            success: function (result) { }
        });

        // Change The Four Paths Status From Unavailable To Accessible
        $.ajax({
            type: 'POST',
            url: '/api/setRole',
            data: {
                'gallery_id': 1,
                'customer_id': customer_id,
                'role': 1
            },
            success: function (result) { }
        });

        // Change Spring 1 Riddle Status From Unavailable To Accessible
        for (var i = 14; i <= 17; i = i + 3) {
            $.ajax({
                type: 'POST',
                url: '/api/setRole',
                data: {
                    'gallery_id': i,
                    'customer_id': customer_id,
                    'role': 1
                },
                success: function (result) { }
            });
        }

        // Change Summer 1 Riddle Status From Unavailable To Accessible
        for (var i = 54; i <= 63; i++) {
            if (i != 59) {
                $.ajax({
                    type: 'POST',
                    url: '/api/setRole',
                    data: {
                        'gallery_id': i,
                        'customer_id': customer_id,
                        'role': 1
                    },
                    success: function (result) { }
                });
            }
        }

        // Change Autumn 1 Riddle Status From Unavailable To Accessible
        for (var i = 72; i <= 76; i++) {
            $.ajax({
                type: 'POST',
                url: '/api/setRole',
                data: {
                    'gallery_id': i,
                    'customer_id': customer_id,
                    'role': 1
                },
                success: function (result) { }
            });
        }

        // Change Winter 1 Riddle Status From Unavailable To Accessible
        for (var i = 78; i <= 79; i++) {
            $.ajax({
                type: 'POST',
                url: '/api/setRole',
                data: {
                    'gallery_id': i,
                    'customer_id': customer_id,
                    'role': 1
                },
                success: function (result) { }
            });
        }
    }
});