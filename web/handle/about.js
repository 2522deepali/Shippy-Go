$(document).ready(function () {
    $.ajax({url: 'http://3.7.46.21/shipygo/items/about/1?access_token=hewhomustnotbenamed', success: function(data){
    var source   = $("#section1_heading").html();
    var compiled = dust.compile(source, "section1_heading");
    dust.loadSource(compiled);
    dust.render("section1_heading", data.data, function(err, out) {
        $("#section1_heading").html(out);    
    });
    var source   = $("#section1_content").html();
    var compiled = dust.compile(source, "section1_content");
    dust.loadSource(compiled);
    dust.render("section1_content", data.data, function(err, out) {
        $("#section1_content").html(out);    
    });
    var source   = $("#section2_heading").html();
    var compiled = dust.compile(source, "section2_heading");
    dust.loadSource(compiled);
    dust.render("section2_heading", data.data, function(err, out) {
        $("#section2_heading").html(out);    
    });
    var source   = $("#section2_subheading").html();
    var compiled = dust.compile(source, "section2_subheading");
    dust.loadSource(compiled);
    dust.render("section2_subheading", data.data, function(err, out) {
        $("#section2_subheading").html(out);    
    });
    var source   = $("#section2_content").html();
    var compiled = dust.compile(source, "section2_content");
    dust.loadSource(compiled);
    dust.render("section2_content", data.data, function(err, out) {
        $("#section2_content").html(out);    
    });
    var source   = $("#section3_heading").html();
    var compiled = dust.compile(source, "section3_heading");
    dust.loadSource(compiled);
    dust.render("section3_heading", data.data, function(err, out) {
        $("#section3_heading").html(out);    
    });
    var source   = $("#section3_content").html();
    var compiled = dust.compile(source, "section3_content");
    dust.loadSource(compiled);
    dust.render("section3_content", data.data, function(err, out) {
        $("#section3_content").html(out);    
    });
    var source   = $("#section3_h1").html();
    var compiled = dust.compile(source, "section3_h1");
    dust.loadSource(compiled);
    dust.render("section3_h1", data.data, function(err, out) {
        $("#section3_h1").html(out);    
    });
    var source   = $("#section3_h1_content").html();
    var compiled = dust.compile(source, "section3_h1_content");
    dust.loadSource(compiled);
    dust.render("section3_h1_content", data.data, function(err, out) {
        $("#section3_h1_content").html(out);    
    });
    var source   = $("#section3_h2").html();
    var compiled = dust.compile(source, "section3_h2");
    dust.loadSource(compiled);
    dust.render("section3_h2", data.data, function(err, out) {
        $("#section3_h2").html(out);    
    });
    var source   = $("#section3_h2_content").html();
    var compiled = dust.compile(source, "section3_h2_content");
    dust.loadSource(compiled);
    dust.render("section3_h2_content", data.data, function(err, out) {
        $("#section3_h2_content").html(out);    
    });
    var source   = $("#section3_line").html();
    var compiled = dust.compile(source, "section3_line");
    dust.loadSource(compiled);
    dust.render("section3_line", data.data, function(err, out) {
        $("#section3_line").html(out);    
    });
    var source   = $("#section4_heading").html();
    var compiled = dust.compile(source, "section4_heading");
    dust.loadSource(compiled);
    dust.render("section4_heading", data.data, function(err, out) {
        $("#section4_heading").html(out);    
    });
    var source   = $("#section5_heading").html();
    var compiled = dust.compile(source, "section5_heading");
    dust.loadSource(compiled);
    dust.render("section5_heading", data.data, function(err, out) {
        $("#section5_heading").html(out);    
    });
    var source   = $("#section5_content").html();
    var compiled = dust.compile(source, "section5_content");
    dust.loadSource(compiled);
    dust.render("section5_content", data.data, function(err, out) {
        $("#section5_content").html(out);    
    });
    var source   = $("#section5_img1").html();
    var compiled = dust.compile(source, "section5_img1");
    dust.loadSource(compiled);
    dust.render("section5_img1", data.data, function(err, out) {
        $("#section5_img1").html(out);    
    });
    var source   = $("#section5_img2").html();
    var compiled = dust.compile(source, "section5_img2");
    dust.loadSource(compiled);
    dust.render("section5_img2", data.data, function(err, out) {
        $("#section5_img2").html(out);    
    });
    var source   = $("#section5_img3").html();
    var compiled = dust.compile(source, "section5_img3");
    dust.loadSource(compiled);
    dust.render("section5_img3", data.data, function(err, out) {
        $("#section5_img3").html(out);    
    });
    var source   = $("#section5_img4").html();
    var compiled = dust.compile(source, "section5_img4");
    dust.loadSource(compiled);
    dust.render("section5_img4", data.data, function(err, out) {
        $("#section5_img4").html(out);    
    });
    var source   = $("#section6_heading").html();
    var compiled = dust.compile(source, "section6_heading");
    dust.loadSource(compiled);
    dust.render("section6_heading", data.data, function(err, out) {
        $("#section6_heading").html(out);    
    });
    var source   = $("#section6_content").html();
    var compiled = dust.compile(source, "section6_content");
    dust.loadSource(compiled);
    dust.render("section6_content", data.data, function(err, out) {
        $("#section6_content").html(out);    
    });
    var source   = $("#section7_heading").html();
    var compiled = dust.compile(source, "section7_heading");
    dust.loadSource(compiled);
    dust.render("section7_heading", data.data, function(err, out) {
        $("#section7_heading").html(out);    
    });
    var source   = $("#section7_content").html();
    var compiled = dust.compile(source, "section7_content");
    dust.loadSource(compiled);
    dust.render("section7_content", data.data, function(err, out) {
        $("#section7_content").html(out);    
    });
    var source   = $("#section8_heading").html();
    var compiled = dust.compile(source, "section8_heading");
    dust.loadSource(compiled);
    dust.render("section8_heading", data.data, function(err, out) {
        $("#section8_heading").html(out);    
    });
    var source   = $("#footer_heading1").html();
    var compiled = dust.compile(source, "footer_heading1");
    dust.loadSource(compiled);
    dust.render("footer_heading1", data.data, function(err, out) {
        $("#footer_heading1").html(out);    
    });
    var source   = $("#footer_h1_link1").html();
    var compiled = dust.compile(source, "footer_h1_link1");
    dust.loadSource(compiled);
    dust.render("footer_h1_link1", data.data, function(err, out) {
        $("#footer_h1_link1").html(out);    
    });
    var source   = $("#footer_h1_link2").html();
    var compiled = dust.compile(source, "footer_h1_link2");
    dust.loadSource(compiled);
    dust.render("footer_h1_link2", data.data, function(err, out) {
        $("#footer_h1_link2").html(out);    
    });
    var source   = $("#footer_heading2").html();
    var compiled = dust.compile(source, "footer_heading2");
    dust.loadSource(compiled);
    dust.render("footer_heading2", data.data, function(err, out) {
        $("#footer_heading2").html(out);    
    });
    var source   = $("#footer_h2_link1").html();
    var compiled = dust.compile(source, "footer_h2_link1");
    dust.loadSource(compiled);
    dust.render("footer_h2_link1", data.data, function(err, out) {
        $("#footer_h2_link1").html(out);    
    });
    var source   = $("#footer_h2_link2").html();
    var compiled = dust.compile(source, "footer_h2_link2");
    dust.loadSource(compiled);
    dust.render("footer_h2_link2", data.data, function(err, out) {
        $("#footer_h2_link2").html(out);    
    });
    var source   = $("#footer_h2_link3").html();
    var compiled = dust.compile(source, "footer_h2_link3");
    dust.loadSource(compiled);
    dust.render("footer_h2_link3", data.data, function(err, out) {
        $("#footer_h2_link3").html(out);    
    });
    var source   = $("#footer_h2_link4").html();
    var compiled = dust.compile(source, "footer_h2_link4");
    dust.loadSource(compiled);
    dust.render("footer_h2_link4", data.data, function(err, out) {
        $("#footer_h2_link4").html(out);    
    });
    var source   = $("#footer_heading3").html();
    var compiled = dust.compile(source, "footer_heading3");
    dust.loadSource(compiled);
    dust.render("footer_heading3", data.data, function(err, out) {
        $("#footer_heading3").html(out);    
    });
    var source   = $("#footer_h3_link1").html();
    var compiled = dust.compile(source, "footer_h3_link1");
    dust.loadSource(compiled);
    dust.render("footer_h3_link1", data.data, function(err, out) {
        $("#footer_h3_link1").html(out);    
    });
    var source   = $("#footer_h3_link2").html();
    var compiled = dust.compile(source, "footer_h3_link2");
    dust.loadSource(compiled);
    dust.render("footer_h3_link2", data.data, function(err, out) {
        $("#footer_h3_link2").html(out);    
    });
    var source   = $("#footer_h3_link3").html();
    var compiled = dust.compile(source, "footer_h3_link3");
    dust.loadSource(compiled);
    dust.render("footer_h3_link3", data.data, function(err, out) {
        $("#footer_h3_link3").html(out);    
    });
    var source   = $("#footer_h3_link4").html();
    var compiled = dust.compile(source, "footer_h3_link4");
    dust.loadSource(compiled);
    dust.render("footer_h3_link4", data.data, function(err, out) {
        $("#footer_h3_link4").html(out);    
    });
    var source   = $("#footer_heading4").html();
    var compiled = dust.compile(source, "footer_heading4");
    dust.loadSource(compiled);
    dust.render("footer_heading4", data.data, function(err, out) {
        $("#footer_heading4").html(out);    
    });
    var source   = $("#footer_h4_link1").html();
    var compiled = dust.compile(source, "footer_h4_link1");
    dust.loadSource(compiled);
    dust.render("footer_h4_link1", data.data, function(err, out) {
        $("#footer_h4_link1").html(out);    
    });
    var source   = $("#footer_h4_link2").html();
    var compiled = dust.compile(source, "footer_h4_link2");
    dust.loadSource(compiled);
    dust.render("footer_h4_link2", data.data, function(err, out) {
        $("#footer_h4_link2").html(out);    
    });
    var source   = $("#footer_h4_link3").html();
    var compiled = dust.compile(source, "footer_h4_link3");
    dust.loadSource(compiled);
    dust.render("footer_h4_link3", data.data, function(err, out) {
        $("#footer_h4_link3").html(out);    
    });
    var source   = $("#footer_heading5").html();
    var compiled = dust.compile(source, "footer_heading5");
    dust.loadSource(compiled);
    dust.render("footer_heading5", data.data, function(err, out) {
        $("#footer_heading5").html(out);    
    });
}});
});