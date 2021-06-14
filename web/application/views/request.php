<!DOCTYPE html>
<html lang="en-US">
    <head>
<?php $this->load->view('headerscripts'); ?>        
    </head>
    <body
        class="page-template-default page page-id-4342 page-child parent-pageid-1114 mkd-core-1.0 mkdf-social-login-1.0 mkdf-tours-1.0 gotravel-ver-1.0 mkdf-smooth-page-transitions mkdf-grid-1300 mkdf-top-header-enabled mkdf-header-standard mkdf-no-behavior mkdf-default-mobile-header mkdf-sticky-up-mobile-header mkdf-dropdown-slide-from-bottom mkdf-fullscreen-search mkdf-fullscreen-search-with-bg-image mkdf-search-fade mkdf-side-menu-slide-with-content mkdf-width-470 mkdf-medium-title-text mkdf-title-with-subtitle wpb-js-composer js-comp-ver-6.0.5 vc_responsive"
    >
        <!-- <div class="mkdf-smooth-transition-loader mkdf-mimic-ajax">
            <div class="mkdf-st-loader">
                <div class="mkdf-st-loader1">
                    <div class="atom">
                        <div class="ball ball-1"></div>
                        <div class="ball ball-2"></div>
                        <div class="ball ball-3"></div>
                        <div class="ball ball-4"></div>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="mkdf-wrapper">
            <div class="mkdf-wrapper-inner">
                <div class="mkdf-fullscreen-search-holder">
                    <div class="mkdf-fullscreen-search-table">
                        <div class="mkdf-fullscreen-search-cell">
                            <div class="mkdf-fullscreen-search-inner">
                                <form action="https://gotravel.qodeinteractive.com/" class="mkdf-fullscreen-search-form" method="get">
                                    <div class="mkdf-form-holder">
                                        <div class="mkdf-field-holder">
                                            <input type="text" name="s" placeholder="Search on site..." class="mkdf-search-field" autocomplete="off" />
                                            <div class="mkdf-line"></div>
                                            <input type="submit" class="mkdf-search-submit" value="&#x55;" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
<?php $this->load->view('header'); ?>
                <div class="mkdf-content" style="margin-top: -124px;">
                    <div class="mkdf-content-inner">
                        <div
                            class="mkdf-title mkdf-preload-background mkdf-has-background mkdf-has-parallax-background mkdf-content-center-alignment mkdf-animation-no mkdf-title-image-not-responsive"
                            style="background-image: url(assets/images/elements-title.png)!important; height: 518px;"
                            data-height="518"
                            data-background-width='"1920"'
                        >
                            <div class="mkdf-title-image"><img src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/elements-title.png" alt="&nbsp;" /></div>
                            <div class="mkdf-title-holder" style="height: 394px; padding-top: 124px;">
                                <div class="mkdf-container clearfix">
                                    <div class="mkdf-container-inner">
                                        <div class="mkdf-title-subtitle-holder" style="">
                                            <div class="mkdf-title-subtitle-holder-inner">
                                                <h1>
                                                    <span>Request Artikel</span>
                                                </h1>
                                                <!-- <h6 class="mkdf-subtitle" style="color: #808285;">
                                                    <span>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh.</span>
                                                </h6> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mkdf-container">
                            <div class="mkdf-container-inner clearfix">
                                <div class="mkdf-grid-row-medium-gutter">
                                    <div class="mkdf-page-content-holder mkdf-grid-col-9">
                                        <div class="vc_row wpb_row vc_row-fluid mkdf-section vc_custom_1480933404770 mkdf-content-aligment-left" style="">
                                            <div class="clearfix mkdf-full-section-inner">
                                                <div class="wpb_column vc_column_container vc_col-sm-12">
                                                    <div class="vc_column-inner">
                                                        <div class="wpb_wrapper">
                                                            <?php if ($this->session->has_userdata('visitor_logged_in')) { ?>
                                                            <div role="form" class="wpcf7" id="wpcf7-f3233-p4342-o1" lang="en-US" dir="ltr">
                                                                <div class="screen-reader-response"></div>
                                                                <form id="formRequest" class="wpcf7-form" novalidate="novalidate">
                                                                    <div style="display: none;">
                                                                        <input type="hidden" name="idVisitor" value="<?php echo $this->session->userdata('visitor_logged_in'); ?>" />
                                                                        <input type="hidden" name="_wpcf7_version" value="5.1.6" />
                                                                        <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                                                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f3233-p4342-o1" />
                                                                        <input type="hidden" name="_wpcf7_container_post" value="4342" />
                                                                    </div>
                                                                    <p>
                                                                        <span class="wpcf7-form-control-wrap your-name">
                                                                            <input type="text" name="nama" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Nama Tempat Wisata" required />
                                                                        </span>
                                                                    </p>
                                                                    <p>
                                                                        <span class="wpcf7-form-control-wrap your-message">
                                                                            <textarea name="deskripsi" cols="40" rows="3" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Deskripsi" required></textarea>
                                                                        </span>
                                                                    </p>
                                                                    <p>
                                                                        <span class="wpcf7-form-control-wrap your-message">
                                                                            <textarea name="alamat" cols="40" rows="5" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Alamat" required></textarea>
                                                                        </span>
                                                                    </p>
                                                                    <p><input type="submit" value="Submit" class="wpcf7-form-control wpcf7-submit" /></p>
                                                                    <div class="wpcf7-response-output wpcf7-display-none"></div>
                                                                </form>
                                                            </div>
                                                            <?php } else { ?>
                                                            <h4>Mohon login terlebih dahulu</h4>
                                                            <?php } ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="mkdf-sidebar-holder mkdf-grid-col-3">
                                        <div class="mkdf-column-inner">
                                            <aside class="mkdf-sidebar">
                                                <div class="widget widget_nav_menu">
                                                    <h4><span class="mkdf-sidearea-title">Elements</span></h4>
                                                    <div class="menu-elements-container">
                                                        <ul id="menu-elements" class="menu">
                                                            <li id="menu-item-1118" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1118">
                                                                <a href="#">Classic</a>
                                                                <ul class="sub-menu">
                                                                    <li id="menu-item-1365" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1365">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/accordions/">Accordions</a>
                                                                    </li>
                                                                    <li id="menu-item-1366" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1366">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/tabs/">Tabs</a>
                                                                    </li>
                                                                    <li id="menu-item-1367" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1367">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/buttons/">Buttons</a>
                                                                    </li>
                                                                    <li id="menu-item-1364" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1364">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/call-to-action/">Call To Action</a>
                                                                    </li>
                                                                    <li id="menu-item-1363" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1363">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/separators/">Separators</a>
                                                                    </li>
                                                                    <li id="menu-item-2691" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2691">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/blockquote/">Blockquote</a>
                                                                    </li>
                                                                    <li id="menu-item-4362" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4342 current_page_item menu-item-4362">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/contact-form/" aria-current="page">Contact Form</a>
                                                                    </li>
                                                                    <li id="menu-item-1119" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1119">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/message-boxes/">Message Boxes</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li id="menu-item-1221" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1221">
                                                                <a href="#">Presentation</a>
                                                                <ul class="sub-menu">
                                                                    <li id="menu-item-1400" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1400">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/team-shortcode/">Team Shortcode</a>
                                                                    </li>
                                                                    <li id="menu-item-2692" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2692">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/tours-carousel/">Tours Carousel</a>
                                                                    </li>
                                                                    <li id="menu-item-4363" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4363">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/tours-list/">Tours List</a>
                                                                    </li>
                                                                    <li id="menu-item-1401" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1401">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/testimonials/">Testimonials</a>
                                                                    </li>
                                                                    <li id="menu-item-4361" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4361">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/top-reviews-carousel/">Top Reviews</a>
                                                                    </li>
                                                                    <li id="menu-item-1402" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1402">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/client-carousel/">Client Carousel</a>
                                                                    </li>
                                                                    <li id="menu-item-1403" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1403">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/blog-list-shortcode/">Blog List Shortcode</a>
                                                                    </li>
                                                                    <li id="menu-item-1693" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1693">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/image-gallery/">Image Gallery</a>
                                                                    </li>
                                                                    <li id="menu-item-2693" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2693">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/reviews/">Reviews</a>
                                                                    </li>
                                                                    <li id="menu-item-4360" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4360">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/video-button/">Video Button</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li id="menu-item-1222" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1222">
                                                                <a href="#">Infographic</a>
                                                                <ul class="sub-menu">
                                                                    <li id="menu-item-1239" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1239">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/counters/">Counters</a>
                                                                    </li>
                                                                    <li id="menu-item-1238" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1238">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/pie-charts/">Pie Charts</a>
                                                                    </li>
                                                                    <li id="menu-item-4196" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4196">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/horizontal-progress-bars/">Horizontal Bars</a>
                                                                    </li>
                                                                    <li id="menu-item-4195" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4195">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/vertical-progress-bars/">Vertical Bars</a>
                                                                    </li>
                                                                    <li id="menu-item-4194" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4194">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/icon-progress-bars/">Icon Progress Bars</a>
                                                                    </li>
                                                                    <li id="menu-item-1361" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1361">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/google-maps/">Google Maps</a>
                                                                    </li>
                                                                    <li id="menu-item-1224" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1224">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/lists/">Lists</a>
                                                                    </li>
                                                                    <li id="menu-item-4364" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4364">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/countdown/">Countdown</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li id="menu-item-1223" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1223">
                                                                <a href="#">Typography</a>
                                                                <ul class="sub-menu">
                                                                    <li id="menu-item-3001" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3001">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/headings/">Headings</a>
                                                                    </li>
                                                                    <li id="menu-item-1230" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1230">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/columns/">Columns</a>
                                                                    </li>
                                                                    <li id="menu-item-1228" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1228">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/dropcaps/">Dropcaps</a>
                                                                    </li>
                                                                    <li id="menu-item-4197" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4197">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/icon-with-text/">Icon With Text</a>
                                                                    </li>
                                                                    <li id="menu-item-1227" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1227">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/highlights/">Highlights</a>
                                                                    </li>
                                                                    <li id="menu-item-1226" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1226">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/title-subtitle/">Title &#038; Subtitle</a>
                                                                    </li>
                                                                    <li id="menu-item-1225" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1225">
                                                                        <a href="https://gotravel.qodeinteractive.com/elements/custom-font/">Custom Font</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </aside>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<?php $this->load->view('footer'); ?>
            </div>
        </div>
        <div class="rbt-toolbar" data-theme="GoTravel" data-featured="" data-button-position="25%" data-button-horizontal="right" data-button-alt="no"></div>
<?php $this->load->view('bottomscripts'); ?>
        <script type="text/javascript">
            
            $(document).ready(function() {

                $('#formRequest').submit(function(e) {
                    e.preventDefault();
                    let data = $(this).serializeArray();
                    $.ajax({
                        method: 'POST',
                        url: uri + 'RequestController/submit',
                        data: data
                    }).done(function(response) {
                        let r = $.parseJSON(response);
                        if (r.stats == 1) {
                            alert(r.msg);
                            location.reload();
                        } else {
                            alert(r.msg);
                        }
                    });
                })

            });

        </script>
    </body>
</html>
