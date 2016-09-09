jQuery(function($) {

    var veo = $('.veo');
    var vimeo = $('.veo-vimeo');
    var yt = $('.veo-yt');

    if (veo.hasClass("veo-yt")) {

        $(yt).each(function() {
            // Set the BG image from the youtube ID
            $(this).css('background-image', 'url(//i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)');
            // Click the video div
            $(document).delegate('#' + this.id, 'click', function() {
                // Build embed URL
                var iframe_url = "//www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
                // Grab extra parameters set on div
                if ($(this).data('params')) iframe_url += '&' + $(this).data('params');
                // Build iframe tag
                var iframe = $('<iframe/>', {
                        'allowfullscreen': 'allowfullscreen',
                        'frameborder': '0',
                        'src': iframe_url
                    })
                    // Replace the YouTube thumbnail with YouTube HTML5 Player
                $(this).append(iframe);
            }); // /click
        }); // /each video
    } 

    if (veo.hasClass("veo-vimeo")) {

        $(vimeo).each(function() {
            // Set the BG image from the youtube ID
            $.ajax({
                type: 'GET',
                url: 'http://vimeo.com/api/v2/video/' + this.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    var thumbnail_src = data[0].thumbnail_large;
                    $(vimeo).css('background-image', 'url(' + thumbnail_src + ')');
                }
            });
            // Click the video div
            $(document).delegate('#' + this.id, 'click', function() {
                // Build embed URL
                var iframe_url = "https://player.vimeo.com/video/" + this.id + "?badge=0";
                // Grab extra parameters set on div
                if ($(this).data('params')) iframe_url += '&' + $(this).data('params');
                // Build iframe tag
                var iframe = $('<iframe/>', {
                        'allowfullscreen': 'allowfullscreen',
                        'frameborder': '0',
                        'src': iframe_url
                    })
                    // Replace the YouTube thumbnail with YouTube HTML5 Player
                $(this).append(iframe);
            }); // /click
        }); // /each video
        // END Fast & Agile YouTube Embed by Schoberg.net
    }
});