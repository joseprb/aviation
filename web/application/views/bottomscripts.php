        <script type="text/javascript">

            var uri = '<?php echo base_url(); ?>';
            
            $(document).ready(function() { 
                $(".aviationLogin").submit(function(e) {
                    e.preventDefault()
                    let data = $(this).serializeArray();
                    $.ajax({
                        method: 'POST',
                        url: uri + 'VisitorController/login',
                        data: data
                    }).done(function(response) {
                        let r = $.parseJSON(response);
                        if (r.st == 1) {
                            // alert(r.msg);
                            location.reload();
                        } else {
                            alert(r.msg);
                        }
                    });
                });

                $(".aviationregister").submit(function(e) {
                    e.preventDefault()
                    let data = $(this).serializeArray();
                    $.ajax({
                        method: 'POST',
                        url: uri + 'VisitorController/register',
                        data: data
                    }).done(function(response) {
                        // console.log(response);
                        let r = $.parseJSON(response);
                        if (r.st == 1) {
                            alert(r.msg);
                            location.reload();
                        } else {
                            alert(r.msg);
                        }
                    });
                });

                $('.btn-showreview').click(function(e) {
                    e.preventDefault();
                    // $('a[href=#tour-item-review-id]').hide();
                    $('a[href=#tour-item-review-id]').trigger('click');
                });
            })

        </script>
        <div class="mkdf-login-register-holder">
            <div class="mkdf-login-register-content">
                <ul>
                    <li><a href="#mkdf-login-content">Sign In</a></li>
                    <li><a href="#mkdf-register-content">Register</a></li>
                </ul>
                <div class="mkdf-login-content-inner" id="mkdf-login-content">
                    <div class="mkdf-wp-login-holder">
                        <div class="mkdf-social-login-holder">
                            <div class="mkdf-social-login-holder-inner">
                                <h5 class="mkdf-login-title">Masuk</h5>
                                <form method="post" class="aviationLogin">
                                    <fieldset>
                                        <div>
                                            <input type="text" name="user_login_username" id="user_login_username" placeholder="Username" value="" required />
                                        </div>
                                        <div>
                                            <input type="password" name="user_login_password" id="user_login_password" placeholder="Password" value="" required />
                                        </div>
                                        <div class="mkdf-login-button-holder">
                                            <button type="submit" class="mkdf-btn mkdf-btn-medium mkdf-btn-solid mkdf-btn-hover-solid"><span class="mkdf-btn-text">Sign in</span></button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div class="mkdf-membership-response-holder clearfix"></div>
                            <script type="text/template" class="mkdf-membership-response-template">
                                <div class="mkdf-membership-response <%= messageClass %> ">
                                    <div class="mkdf-membership-response-message">
                                        <p><%= message %></p>
                                    </div>
                                </div>
                            </script>
                        </div>
                    </div>
                </div>
                <div class="mkdf-register-content-inner" id="mkdf-register-content">
                    <div class="mkdf-wp-register-holder">
                        <div class="mkdf-social-register-holder">
                            <div class="mkdf-social-register-holder-inner">
                                <h5 class="mkdf-login-title">Daftar Baru</h5>
                                <form method="post" class="aviationregister">
                                    <fieldset>
                                        <div>
                                            <input type="text" name="nama" id="nama" placeholder="Nama" value="" required />
                                        </div>
                                        <div>
                                            <input type="text" name="username" id="username" placeholder="Username" value="" required />
                                        </div>
                                        <div>
                                            <input type="password" name="password" id="password" placeholder="Password" value="" required />
                                        </div>
                                        <div>
                                            <input type="password" name="password2" id="password2" placeholder="Konfirmasi Passowrd" value="" required />
                                        </div>
                                        <div class="mkdf-register-button-holder">
                                            <button type="submit" class="mkdf-btn mkdf-btn-medium mkdf-btn-solid mkdf-btn-hover-solid"><span class="mkdf-btn-text">Register</span></button>
                                            <input type="hidden" id="mkdf-register-security" name="mkdf-register-security" value="bdcaa874c8" /><input type="hidden" name="_wp_http_referer" value="/" />
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div class="mkdf-membership-response-holder clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            function revslider_showDoubleJqueryError(sliderID) {
                var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
                errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
                errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
                errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
                errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
                jQuery(sliderID).show().html(errorMessage);
            }
        </script>
        <script type="text/javascript">
            function revslider_showDoubleJqueryError(sliderID) {
                var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
                errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
                errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
                errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
                errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
                jQuery(sliderID).show().html(errorMessage);
            }
        </script>
        <script src="<?php echo base_url('assets/js/84d8f.js'); ?>"></script>
        <script type="text/javascript">
            /* <![CDATA[ */
            var mkdfGlobalVars = {
                vars: {
                    mkdfAddForAdminBar: 0,
                    mkdfElementAppearAmount: -100,
                    mkdfFinishedMessage: "No more posts",
                    mkdfMessage: "Loading new posts...",
                    mkdfTopBarHeight: 36,
                    mkdfStickyHeaderHeight: 0,
                    mkdfStickyHeaderTransparencyHeight: 60,
                    mkdfLogoAreaHeight: 0,
                    mkdfMenuAreaHeight: 124,
                    mkdfMobileHeaderHeight: 80,
                },
            };
            var mkdfPerPageVars = { vars: { mkdfStickyScrollAmount: 0, mkdfStickyScrollAmountFullScreen: false, mkdfHeaderTransparencyHeight: 0 } };
            /* ]]> */
        </script>
        <script src="<?php echo base_url('assets/js/3fa34.js'); ?>"></script>
        <script src="<?php echo base_url('assets/js/a83a5.js'); ?>"></script>
        <script type="text/javascript">
            jQuery(document).ready(function (jQuery) {
                jQuery.datepicker.setDefaults({
                    closeText: "Close",
                    currentText: "Today",
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    nextText: "Next",
                    prevText: "Previous",
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
                    dateFormat: "MM d, yy",
                    firstDay: 1,
                    isRTL: false,
                });
            });
        </script>
        <script type="text/javascript">
            /* <![CDATA[ */
            var mkdfToursSearchData = {
                tours: [
                    "Oldtimer Tour",
                    "Fun in Prague",
                    "City Selfie Tour",
                    "Venice Canals",
                    "Gaudi's City",
                    "Moscow Tour",
                    "Brusov Cruise",
                    "New York Walk",
                    "Charming Paris",
                    "Canal Sailing",
                    "Amsterdam Fun",
                    "Seaside Rest",
                    "Artsy New York",
                    "Friendly Greece",
                    "Flower Fields",
                    "Ancient Japan",
                    "Ibiza Summer",
                    "Romantic Italy",
                    "The Bahamas",
                    "Oriental Bliss",
                    "Sahara Fun",
                    "Colorful India",
                    "Yangshuo Mist",
                    "Prague Sights",
                    "Miami Beach",
                    "Safari Africa",
                ],
                destinations: [
                    "San Francisco",
                    "Prague",
                    "London",
                    "Belgrade",
                    "Prague",
                    "Morocco",
                    "Venice",
                    "Brazil",
                    "Paris",
                    "Japan",
                    "Canada",
                    "Miami",
                    "Dubai",
                    "Greece",
                    "Kenya",
                    "Serbia",
                    "Moscow",
                    "Thailand",
                    "Cinque Terre",
                    "Kyoto",
                ],
            };
            /* ]]> */
        </script>
        <script src="<?php echo base_url('assets/js/a5ff0.js'); ?>"></script>
        <!-- <script type="text/javascript" src="<?php echo base_url('assets/js/rbt-modules.js?ver=5.2.2'); ?>"></script> -->
        <script src="<?php echo base_url('assets/js/6d18f.js'); ?>"></script>
        <script src="<?php echo base_url('assets/js/2a2c6.js'); ?>"></script>
        <script src="<?php echo base_url('assets/js/4b6b3.js'); ?>"></script>
        <script src="<?php echo base_url('assets/js/f0380.js'); ?>"></script>
        <script src="<?php echo base_url('assets/js/13d7d.js'); ?>"></script>