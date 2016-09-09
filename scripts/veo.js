jQuery(function($) {

    $('#veo-button').click(function() {

        var veobox = $('.veo-box').first();

        $(veobox).fadeIn('fast');

        $('#veo_string').focus();

        $('.veo_button').one('click', function() {

            var link = $('#veo_string').val();

            var pretext = link.replace("https://www.youtube.com/watch?v=", "").replace("https://vimeo.com/", "").replace("https://youtu.be/", "");

            if (pretext.indexOf('&') > -1) {
                var text = pretext.substring(0, pretext.indexOf('&'));

                if (link != null && link != '') {

                    if (link.indexOf('youtu') > -1) {

                        wp.media.editor.insert('[veo class="veo-yt" string="' + text + '"]');
                    } else if (link.indexOf('vimeo') > -1) {
                        wp.media.editor.insert('[veo class="veo-vimeo" string="' + text + '"]');
                    }
                }

            } else if (link != null && link != '') {

                if (link.indexOf('youtu') > -1) {
                    wp.media.editor.insert('[veo class="veo-yt" string="' + pretext + '"]');
                } else if (link.indexOf('vimeo') > -1) {
                    wp.media.editor.insert('[veo class="veo-vimeo" string="' + pretext + '"]');
                }
            }

            $(veobox).fadeOut('fast');
        });

        $('.veo_close').click(function() {
            $(veobox).hide();
        });
    });
});